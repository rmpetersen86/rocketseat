import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import theme from "./src/theme/index"

import { View, Text } from "react-native"
import { Groups } from "./src/screens/Groups"
import { Loading } from "./src/components/Loading"

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={"light"} backgroundColor={"transparent"} translucent />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
