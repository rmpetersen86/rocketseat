import { MealStorageDTO } from "./MealStorageDTO";
import { mealRemoveByDay } from "./mealRemoveByDay";
import { mealAddByDay } from "./mealAddByDay";

export async function mealUpdate(
    newMeal: MealStorageDTO,
    oldMeal: MealStorageDTO,
    day: string
    ) {
    try{      
        await mealRemoveByDay(oldMeal, day)        
        await mealAddByDay(newMeal, day)
    }catch(error){
        throw error
    }
}