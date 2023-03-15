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
import { AntDesign } from "@expo/vector-icons"
import logo from "../assets/logo.png"
import clipboard from "../assets/Clipboard.png"
import { styles } from "./styles"
import { useState } from "react"
import { Task } from "../components/Task"

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [task, setTask] = useState("")

  const [isFocused, setIsFocused] = useState(false)

  function handleTasktAdd() {
    if (task === "") {
      return Alert.alert("Tarefas", "Insira a descrição da tarefa")
    }
    if (tasks.includes(task)) {
      return Alert.alert("Tarefas", `A tarefa ja existe`)
    }
    setTasks((prevState) => [...prevState, task])

    setTask("")
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
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
            value={task}
            onChangeText={setTask}
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
            <Text style={styles.countResult}>0</Text>
          </View>
          <View style={styles.resultWrap}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.countResult}>0</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              name={item}
              onRemove={() => {
                handleTaskRemove(item)
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
