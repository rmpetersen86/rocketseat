import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLETCION, MEAL_COLLECTION } from "@storage/storageConfig";

import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealGetByDay } from "./mealGetByDay";
import { dayCreate } from "@storage/day/dayCreate";


export async function mealCreateByDay(
    newMeal: MealStorageDTO,
    day: string
    ) {
    try{
        const storedMeals = await mealGetByDay(day);

        const mealAlreadyExists = storedMeals.filter(
            (meal) => meal === newMeal
        )

        if(mealAlreadyExists.length > 0 ) {
            throw new AppError("Esta refeição já existe neste horário");
        }

        const storage = JSON.stringify([...storedMeals, newMeal]);
        await dayCreate(day)
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${day}`, storage)        
    }catch(error){
        throw error
    }
}