import { mealsOnDay } from "@screens/Home"
import { MealStorageDTO } from "@storage/meal/MealStorageDTO"

export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined
        newMeal: undefined
        statistics: {
          totalMeals: number
          mealsOnDiet: number          
          mealStrike: number
        }
        mealDetail: {
          day: string
          meal: MealStorageDTO
        }
        mealEdit: {
          day: string
          meal: MealStorageDTO
        }
      }
    }
  }
  