import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignIn } from "@screens/signin";
import { SignUp } from "@screens/signUp";

type AuthRoutes = {
  signIn: undefined
  signUp: undefined
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return(
    <Navigator>
      <Screen 
        name="signIn"
        component={SignIn}        
      />

      <Screen 
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}