import { Text, TouchableOpacity } from "react-native";
import { BackButton, BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native"

type Props = {
  title?: string;
  type?: "Default" | "Positive" | "Negative";
};

export function Header({ title, type = "Default" }: Props) {
  const navigation = useNavigation()
  
  function handleGoback() {
    navigation.navigate("home")
  }
  
  return (
    <Container type={type}>
      <BackButton onPress={handleGoback}>
        <BackIcon />
      </BackButton>      
      {title && <Title>{title}</Title>}
    </Container>
  );
}
