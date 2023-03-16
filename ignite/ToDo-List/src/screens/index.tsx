import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AntDesign } from "@expo/vector-icons"
import logo from "../assets/logo.png"
import clipboard from "../assets/Clipboard.png"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { Task, TaskProps } from "../components/Task"

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskName, setTaskName] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    async function reloadTasks() {
      try {
        await AsyncStorage.getItem("@ToDoList").then((storedTasks) => {
          storedTasks != null ? setTasks(JSON.parse(storedTasks)) : null
        })
      } catch (e) {
        return
      }
    }
    reloadTasks()
  }, [])

  useEffect(() => {
    async function syncTasks() {
      try {
        const storedTasks = JSON.stringify(tasks)
        await AsyncStorage.setItem("@ToDoList", storedTasks)
      } catch (e) {}
    }
    syncTasks()
  }, [tasks])

  async function handleTasktAdd() {
    let newTask: TaskProps = { name: taskName, done: false }
    if (taskName === "") {
      return Alert.alert("Tarefas", "Insira a descrição da tarefa")
    }
    if (tasks.some((task) => task.name === newTask.name)) {
      return Alert.alert("Tarefas", `A tarefa ja existe`)
    }
    setTasks((prevState) => [...prevState, newTask])
    setTaskName("")
  }

  function handleTaskRemove(quitTask: TaskProps) {
    Alert.alert("Remover", `Remover a tarefa ${quitTask.name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== quitTask.name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  }

  function handleChangeTask(changedTask: TaskProps) {
    setTasks((prevState) =>
      prevState.map((task) => {
        const isChanged =
          task.name === changedTask.name ? !task.done : task.done
        return { ...task, done: isChanged }
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[styles.input, isFocused && styles.inputFocused]}
            value={taskName}
            onChangeText={setTaskName}
          />
          <TouchableHighlight
            underlayColor={"#4EA8DE"}
            style={styles.button}
            onPress={handleTasktAdd}
          >
            <AntDesign name="pluscircleo" size={16} color="white" />
          </TouchableHighlight>
        </View>
        <View style={styles.progress}>
          <View style={styles.resultWrap}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.countResult}>{tasks.length}</Text>
          </View>
          <View style={styles.resultWrap}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.countResult}>
              {tasks.filter((doneTasks) => doneTasks.done).length}
            </Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Task
              name={item.name}
              done={item.done}
              onRemove={() => {
                handleTaskRemove(item)
              }}
              onChange={() => {
                handleChangeTask(item)
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.tasks}>
              <Image source={clipboard} style={styles.tasksEmptyImg} />
              <Text style={styles.tasksEmptyTop}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.tasksEmpty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
