import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../assets/logo.png";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>
      <View>
        <View>
          <TextInput placeholder="Adicione uma nova tarefa" />
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Criadas 0</Text>
          <Text>Concluídas 0</Text>
        </View>
        <View>
          <Text>TASKS</Text>
        </View>
      </View>
    </View>
  );
}
