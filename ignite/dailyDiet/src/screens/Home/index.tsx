import { Button } from "@components/Button";
import { Percent } from "@components/Percent";
import { SectionHeader } from "@components/SectionHeader";
import { SectionItem } from "@components/SectionItem";
import { ForkKnife } from "phosphor-react-native";
import { Alert, Image, SectionList, Text } from "react-native";
import {
  AppIcon,
  Avatar,
  Container,
  ContentTitle,
  Heading,
  IconTitle,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { daysGetAll } from "@storage/day/dayGetAll";
import { mealGetByDay } from "@storage/meal/mealGetByDay";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

type mealsOnDay = {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsByDay, setMealsByDay] = useState<mealsOnDay[]>([])
  const [totalMeals, setTotalMeals] = useState(0)
  const [mealsOnDiet, setMealsOnDiet] = useState(0)  
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {            
      setMealsByDay([])
      fetchMeals()
      countMeals()
    },[])
  )  

  async function fetchMeals(){
    setIsLoading(true)    
    try{
      const days = await daysGetAll()     
      days.map(day => {        
        fetchMealsByDay(day)
      })
    }catch(error){
      Alert.alert("Refeições","Não foi possível carregar as refeições!")
    }finally{
      setIsLoading(false)
    }
  }

  async function fetchMealsByDay(day: string){
    const meals = await mealGetByDay(day)
    const mealsOnDay = {title: day, data: meals}
    setMealsByDay(oldMeals => [...oldMeals, mealsOnDay])    
  }

  async function countMeals(){
    
  }

  function handleNewMeal() {
    navigation.navigate("newMeal")
  }
  
  return (
    <Container>
      <Heading>
        <AppIcon>
          <ForkKnife size={40} weight="bold" />
          <IconTitle>Daily{"\n"}Diet</IconTitle>
        </AppIcon>
        <Avatar>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: "https://github.com/rmpetersen86.png" }}
          />
        </Avatar>
      </Heading>
      <Percent total={32} />
      <Text>Refeições: {totalMeals} Refeições na dieta: {mealsOnDiet}</Text>
      <ContentTitle>Refeições</ContentTitle>
      <Button title="Nova refeição" iconName="Plus" onPress={handleNewMeal}/>
      <SectionList      
        sections={mealsByDay}        
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <SectionItem
            hour={item.hour}
            description={item.name}
            isOnDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={250}
        contentContainerStyle={[
          { paddingBottom: 100 },
          mealsByDay.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
