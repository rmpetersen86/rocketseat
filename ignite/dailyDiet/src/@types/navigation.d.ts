import { mealsOnDay } from "@screens/Home"

export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined
        newMeal: undefined
        statistics: {
          totalMeals: number
          mealsOnDiet: number
          mealsPercent: number
          mealStrike: number
        }
      }
    }
  }
  