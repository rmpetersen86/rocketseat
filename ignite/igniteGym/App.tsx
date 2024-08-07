import { StatusBar, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/loading";
import React from "react";
import { THEME } from "src/theme";
import { AuthRoutes } from "@routes/auth.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
  
        {fontsLoaded ? <AuthRoutes /> : <Loading />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
