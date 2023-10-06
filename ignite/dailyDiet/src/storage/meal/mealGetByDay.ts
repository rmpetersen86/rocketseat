import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";


export async function mealGetByDay(day: string) {
  try {    
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${day}`);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];    
    return meals.sort(((a, b) => 
    a.hour > b.hour ? -1 : 1
    ));
  } catch (error) {
    throw error;
  }
}
