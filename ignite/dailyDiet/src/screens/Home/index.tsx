import { Button } from "@components/Button";
import { Percent } from "@components/Percent";
import { SectionHeader } from "@components/SectionHeader";
import { SectionItem } from "@components/SectionItem";
import { ForkKnife } from "phosphor-react-native";
import { Alert, Image, SectionList} from "react-native";
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
  const [totalMeals, setTotalMeals] = useState<number>(0)
  const [mealsOnDiet, setMealsOnDiet] = useState<number>(0)    
  const [mealStrike, setMealStrike] = useState<number>(0)
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true)
      fetchMeals()
    },[])
  )

  async function fetchMeals(){    
    setMealsByDay([])
      setTotalMeals(0)
      setMealsOnDiet(0)      
      setMealStrike(0)      
    try{     
        const days = await daysGetAll()
        let mealsOnDietStrike = 0
        days.map(async day => {
          const meals = await mealGetByDay(day)          
          setTotalMeals((totalMeals) => totalMeals + meals.length)
          meals.map((meal) => (      
            meal.onDiet ? 
              (
              setMealsOnDiet((mealsOnDiet) => mealsOnDiet + 1),
              mealsOnDietStrike = mealsOnDietStrike + 1
              )
              :
              (
                setMealStrike((mealStrike) => mealsOnDietStrike > mealStrike ? mealsOnDietStrike : mealStrike),
                mealsOnDietStrike = 0
              )              
            ))
          const mealsOnDay = {title: day, data: meals}
          setMealsByDay(oldMeals => [...oldMeals, mealsOnDay])          
          
        })                
    }catch(error){
      Alert.alert("Refeições","Não foi possível carregar as refeições!")
    }finally{
      setIsLoading(false)
    }
  }  

  /* async function fetchMealsByDay(day: string){
    const meals = await mealGetByDay(day)
    let onDiet = 0
    setTotalMeals((totalMeals) => totalMeals + meals.length)
    meals.map((meal) => (      
      meal.onDiet && setMealsOnDiet((mealsOnDiet) => mealsOnDiet + 1),
      (onDiet = onDiet +1)
      ))
    const mealsOnDay = {title: day, data: meals}
    setMealsByDay(oldMeals => [...oldMeals, mealsOnDay].sort(((a, b) => 
    a.title.split("/")[1] > b.title.split("/")[1] ? ((a.title > b.title) ? 1 : -1 ): 1
    )))      
    setMealStrike((mealStrike) => onDiet >= mealStrike ? onDiet : mealStrike)
  } */  
  
  function handleNewMeal() {
    navigation.navigate("newMeal")
  }

  function handleStatistics() {
    navigation.navigate("statistics", {totalMeals, mealsOnDiet, mealStrike})
  }

  function handleMealDetail(day: string, meal: MealStorageDTO) {    
    navigation.navigate("mealDetail", {day, meal})
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
      <Percent total={(mealsOnDiet/totalMeals)*100} forwardButtonAction={() => handleStatistics()}/>
      {/* <Text>Refeições: {totalMeals} Refeições na dieta: {mealsOnDiet} Porcentagem: {mealsPercent}</Text> */}
      <ContentTitle>Refeições</ContentTitle>
      <Button title="Nova refeição" iconName="Plus" onPress={handleNewMeal}/>
      <SectionList      
        sections={mealsByDay}
        keyExtractor={(item, index) => item.name + index}        
        renderItem={({ item, section }) => (
          <SectionItem
            hour={item.hour}
            description={item.name}
            isOnDiet={item.onDiet}
            onPress={() => handleMealDetail(section.title, {description: item.description, hour: item.hour, name: item.name, onDiet: item.onDiet})}
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
