import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Banner, BannerHeader, BannerHeading, BannerImage, BoldText, Container, Form, Label } from "./styles";
import { Content } from "@screens/Statistics/styles";
import { Alert, View } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealAddByDay } from "@storage/meal/mealAddByDay";
import greatJob from '../../assets/great.jpg'
import keepGoing from '../../assets/keepTrying.jpg'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

dayjs.locale(ptBr)

type RouteParams = {
  day: string
  meal: MealStorageDTO
}

export function MealEdit() {    
  const route = useRoute()
  const {day, meal} = route.params as RouteParams
  const [mealName, setMealName] = useState(meal.name)
  const [description, setDescription] = useState(meal.description)
  const [date, setDate] = useState(day)
  const [hour, setHour] = useState(meal.hour)
  const [onDietOption, setOnDietOption] = useState(meal.onDiet ? "Sim" : "Não");
  const [mealOnDiet, setMealOnDiet] = useState("")

  const navigation = useNavigation();

  async function handleUpdateMeal() {
    if(mealName.trim().length === 0 ||
        description.trim().length === 0 ||
        date.trim().length === 0 ||
        hour.trim().length === 0 ||
        onDietOption.trim().length === 0         
    ) {
      return Alert.alert('Alterar Refeição', 'Informe os dados da refeição!')
    }

    const newMeal = {
      name: mealName,
      description,      
      hour,
      onDiet: onDietOption === 'Sim' ? true : false,      
    }

    try{
      //await mealAddByDay(newMeal, date)
    }catch(error){
      if(error instanceof AppError) {
        Alert.alert("Nova Refeição", error.message)
      } else {
        Alert.alert("Nova Refeição", "Não foi possivel adicionar a refeição")
      }
    }finally{
      setMealOnDiet(onDietOption)
    }
  }

  return (
    <Container>
      {mealOnDiet === "" ?  
      <>
      <Header title="Editar refeição" />
      <Content>
        <Form>
          <Input 
            label="Nome"
            value={mealName}
            onChangeText={setMealName}
          />
          <Input
            label="Descrição"
            type={"TEXTAREA"}
            multiline
            textAlignVertical={"top"}
            onChangeText={setDescription}
            value={description}
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
            <Input 
              label="Hora" 
              onChangeText={setHour}
              value={hour}
            />
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
        title="Salvar alterações"
        onPress={handleUpdateMeal}
        />
      </Content>
      </>
      :
      mealOnDiet === 'onDiet' ?
      <Banner>                
        <BannerHeader positive>
          Continue assim!
        </BannerHeader>
        <BannerHeading>
          Você continua
            <BoldText>{' '} 
              dentro da dieta.
              {' '}</BoldText>
          Muito bem!
        </BannerHeading>
        <BannerImage source={greatJob} />
        <Button 
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
        />      
      </Banner>
      : 
      <Banner>                
        <BannerHeader>
          Que pena!
        </BannerHeader>
        <BannerHeading>
          Você
            <BoldText>{' '} 
              saiu da dieta
              {' '}</BoldText>
          dessa vez, mas continue se esforçando e não desista
        </BannerHeading>
        <BannerImage source={keepGoing} />
        <Button 
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
        />      
      </Banner>
      }
    </Container>
  );
}
