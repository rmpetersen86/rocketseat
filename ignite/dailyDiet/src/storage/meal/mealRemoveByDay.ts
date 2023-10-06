import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetByDay } from "./mealGetByDay"; 
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealRemoveByDay(meal: MealStorageDTO, day: string) {  
  try {
    const storage = await mealGetByDay(day);    
    const filtered = storage.filter((mtr) => ((mtr.name+mtr.hour+mtr.description) !== (meal.name+meal.hour+meal.description)));
    
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${day}`, meals);
  } catch (error) {
    throw error;
  }
}
