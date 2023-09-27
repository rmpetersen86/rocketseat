import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Container, Form, Label } from "./styles";
import { Content } from "@screens/Statistics/styles";
import { Alert, View } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { useNavigation } from "@react-navigation/native";
import { mealAddByDay } from "@storage/meal/mealAddByDay";
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

export function NewMeal() {
  const [mealName, setMealName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(dayjs(new Date(Date.now())).format('DD/MM/YYYY'))
  const [hour, setHour] = useState("")
  const [onDietOption, setOnDietOption] = useState("");

  const navigation = useNavigation();

  async function handleAddMeal() {
    if(mealName.trim().length === 0 ||
        description.trim().length === 0 ||
        date.trim().length === 0 ||
        hour.trim().length === 0 ||
        onDietOption.trim().length === 0         
    ) {
      return Alert.alert('Nova Refeição', 'Informe os dados da refeição!')
    }

    const newMeal = {
      name: mealName,
      description,      
      hour,
      onDiet: onDietOption === 'Sim' ? true : false,      
    }

    try{
      await mealAddByDay(newMeal, date)
    }catch(error){
      if(error instanceof AppError) {
        Alert.alert("Nova Refeição", error.message)
      } else {
        Alert.alert("Nova Refeição", "Não foi possivel adicionar a refeição")
      }
    }finally{
      navigation.navigate("home")
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <Form>
          <Input 
            label="Nome"
            onChangeText={setMealName}
          />
          <Input
            label="Descrição"
            type={"TEXTAREA"}
            multiline
            textAlignVertical={"top"}
            onChangeText={setDescription}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 24,
            }}
          >
            <Input label="Data" 
            value={date}
            onChangeText={setDate} 
            />
            <Input label="Hora" onChangeText={setHour}/>
          </View>
          <Label>Está dentro da dieta?</Label>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            {[{ value: "Sim" }, { value: "Não" }].map((item) => {
              return (
                <Filter
                  key={item.value}
                  title={item.value as any}
                  onPress={() => setOnDietOption(item.value)}
                  isActivity={item.value === onDietOption}
                />
              );
            })}
          </View>
        </Form>
        <Button 
        title="Cadastrar refeição"
        onPress={handleAddMeal}
        />
      </Content>
    </Container>
  );
}
