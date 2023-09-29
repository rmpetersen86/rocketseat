import { Button } from "@components/Button";
import { Percent } from "@components/Percent";
import { SectionHeader } from "@components/SectionHeader";
import { SectionItem } from "@components/SectionItem";
import { ForkKnife } from "phosphor-react-native";
import { Alert, Image, SectionList } from "react-native";
import {
  AppIcon,
  Avatar,
  Container,
  ContentTitle,
  Heading,
  IconTitle,
} from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { daysGetAll } from "@storage/day/dayGetAll";
import { mealGetByDay } from "@storage/meal/mealGetByDay";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { Loading } from "@components/Loading";

export type mealsOnDay = {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);  
  const [mealsByDay, setMealsByDay] = useState<mealsOnDay[]>([])
  const [totalMeals, setTotalMeals] = useState(0)
  const [mealsOnDiet, setMealsOnDiet] = useState(0)
  const [mealsPercent, setMealsPercent] = useState(0)
  const [mealStrike, setMealStrike] = useState(0)
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true)
      fetchMeals()      
    },[])
  )  

  async function fetchMeals(){
    setIsLoading(true)
    setMealsByDay([])
      setTotalMeals(0)
      setMealsOnDiet(0)
      setMealsPercent(0)
      setMealStrike(0)   
    try{      
      const days = await daysGetAll()    
      days.map(day => {                
        fetchMealsByDay(day)
      })
      calcMeals()
    }catch(error){
      Alert.alert("Refeições","Não foi possível carregar as refeições!")
    }finally{
      setIsLoading(false)
    }
  }  

  async function fetchMealsByDay(day: string){
    const meals = await mealGetByDay(day)
    let onDiet = 0
    setTotalMeals((totalMeals) => totalMeals + meals.length)
    meals.map((meal) => (      
      meal.onDiet && setMealsOnDiet((mealsOnDiet) => mealsOnDiet + 1),
      (onDiet += 1)
      ))
    const mealsOnDay = {title: day, data: meals}
    setMealsByDay(oldMeals => [...oldMeals, mealsOnDay].sort(((a, b) => a.title > b.title ? -1 : 1)))  
    setMealStrike((mealStrike) => onDiet >= mealStrike ? onDiet : mealStrike) 
  }

  function calcMeals() {    
    setMealsPercent((mealsOnDiet/totalMeals)*100)    
  }
  
  function handleNewMeal() {
    navigation.navigate("newMeal")
  }

  function handleStatistics() {
    navigation.navigate("statistics", {totalMeals, mealsOnDiet, mealsPercent, mealStrike})
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
      {isLoading ? <Loading /> :
      <>      
      <Percent total={parseFloat(mealsPercent.toFixed(2))} forwardButtonAction={() => handleStatistics()}/>   
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
      </> 
    }
    </Container>
  );
}
