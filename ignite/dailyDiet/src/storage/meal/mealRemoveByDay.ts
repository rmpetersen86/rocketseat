import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetByDay } from "./mealGetByDay"; 
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealRemoveByDay(meal: MealStorageDTO, day: string) {
  console.log(meal, day)
  try {
    const storage = await mealGetByDay(day);
    
    const filtered = storage.filter((mealToRemove) => ((mealToRemove.name+mealToRemove.hour) !== (meal.name+meal.hour)));
    
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${day}`, meals);
  } catch (error) {
    throw error;
  }
}
