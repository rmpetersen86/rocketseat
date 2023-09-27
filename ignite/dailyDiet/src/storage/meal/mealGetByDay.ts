import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";


export async function mealGetByDay(day: string) {
  try {
    /* const keys = await AsyncStorage.getAllKeys()
    const result = await AsyncStorage.multiGet(keys)
    console.log(result) */
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${day}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    
    return meals;
  } catch (error) {
    throw error;
  }
}
