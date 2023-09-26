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
import { mealGetAll } from "@storage/meal/mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState<string[]>([])
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    },[])
  )

  async function fetchMeals(){
    setIsLoading(true)
    try{
      const data = await daysGetAll()
      const meals = await mealGetAll()
      //await AsyncStorage.clear()
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      console.log(result)
      //return result.map(req => JSON.parse(req)).forEach(console.log);
      console.log(data)
      console.log(meals)
      setDays(data)
    }catch(error){
      Alert.alert("Refeições","Não foi possível carregar as refeições!")
    }finally{
      setIsLoading(false)
    }
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
      <Percent total={62.5} />
      <ContentTitle>Refeições</ContentTitle>
      <Button title="Nova refeição" iconName="Plus" onPress={handleNewMeal}/>
      {/* <SectionList
        sections={days as any}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <SectionItem
            hour={item.hour}
            description={item.name}
            isOnDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { item } }) => (
          <SectionHeader title={item} />
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={250}
        contentContainerStyle={[
          { paddingBottom: 100 },
          days.length === 0 && { flex: 1 },
        ]}
      /> */}
    </Container>
  );
}
