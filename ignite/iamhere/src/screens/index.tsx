import moment from "moment";
import "moment/min/locales";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState("");
  moment.locale("pt-br");

  function handleParticipantAdd() {
    if (participant === "") {
      return Alert.alert("Participantes", "Insira o nome do participante");
    }
    if (participants.includes(participant)) {
      return Alert.alert(
        "Participantes",
        `Ja existe o participante ${participant}`
      );
    }
    setParticipants((prevState) => [...prevState, participant]);

    setParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>
        {moment().format("dddd [,] DD [de] MMMM [de] YYYY")}
      </Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor={"#6d6d6d"}
          style={styles.input}
          value={participant}
          onChangeText={setParticipant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há participantes cadastrados
          </Text>
        )}
      />
    </View>
  );
}
