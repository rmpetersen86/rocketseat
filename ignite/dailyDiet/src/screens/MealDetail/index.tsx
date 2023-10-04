import { Header } from "@components/Header";
import { BannerHeading, BoldText, Container, Form, Label, OnDiet, OnDietIndicator } from "./styles";
import { Content } from "@screens/Statistics/styles";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { useTheme } from "styled-components";
import { CustomAlert } from "@components/CustomAlert";
import { useState } from "react";
import { Alert } from "react-native";
import { mealRemoveByDay } from "@storage/meal/mealRemoveByDay";

type RouteParams = {
  day: string
  meal: MealStorageDTO
}

export function MealDetail() {  
  const route = useRoute()
  const navigation = useNavigation();
  const { COLORS } = useTheme();
  const {day, meal} = route.params as RouteParams
  const [alertVisible, setAlertVisible] = useState(false)  

  function handleRemoveMealPrompt() {       
    setAlertVisible(true)
  }

  async function handleRemoveMeal() {
    try{
      await mealRemoveByDay(meal, day)
      navigation.navigate('home')
    }catch (error){
      Alert.alert("Atenção!","Falha ao remover a refeição.")
    }
  }

  return (
    <Container>      
      <Header title="Refeição" type={meal.onDiet ? "Positive" : "Negative"} />
      <Content>
        <CustomAlert 
          visible={alertVisible} 
          message="Deseja realmente excluir o registro da refeição?" 
          onClose={() => setAlertVisible(false)}
          onRemove={() => handleRemoveMeal()}
          />
        <Form>
        <BannerHeading>
          <BoldText>
            {meal.name}
          </BoldText>
          </BannerHeading>
          <Label>
            {meal.description}
          </Label>
          <BannerHeading>
            Data e Hora
          </BannerHeading>
          <Label>
            {day +' às '+ meal.hour}
          </Label>          
          <OnDietIndicator>
            <OnDiet color={meal.onDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>
            {meal.onDiet ?
             <Label>dentro da dieta</Label> 
             : 
             <Label>fora da dieta</Label>
             }
          </OnDietIndicator>
        </Form>
        <Button 
        title="Editar Refeição"        
        showIcon
        iconName="Pencil"
        onPress={() => navigation.navigate('mealEdit', {day, meal})}
        />
        <Button 
        title="Excluir Refeição"        
        type="SECONDARY"
        showIcon
        iconName="Trash"
        onPress={() => handleRemoveMealPrompt()}
        />
      </Content>      
    </Container>
  );
}
