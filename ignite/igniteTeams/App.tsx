import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import theme from "./src/theme/index"
import { Loading } from "@components/Loading"
import { Routes } from "./src/routes"

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={"light"} backgroundColor={"transparent"} translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
