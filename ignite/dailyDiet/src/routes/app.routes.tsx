import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { MealDetail } from "@screens/MealDetail"
import { MealEdit } from "@screens/MealEdit"
import { NewMeal } from "@screens/NewMeal"
import { Statistics } from "@screens/Statistics"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="home" component={Home} />
            <Screen name="newMeal" component={NewMeal} />
            <Screen name="statistics" component={Statistics} />
            <Screen name="mealDetail" component={MealDetail} />
            <Screen name="mealEdit" component={MealEdit} />
        </Navigator>
    )
}