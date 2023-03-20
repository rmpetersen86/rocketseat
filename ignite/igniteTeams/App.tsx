import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";
import { Groups } from "@screens/Groups";
import theme from "./src/theme/index";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={"light"} backgroundColor={"transparent"} translucent />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
