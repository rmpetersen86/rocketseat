import { Text, TouchableOpacity } from "react-native";
import { BackButton, BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native"

type Props = {
  title?: string;
};

export function Header({ title }: Props) {
  const navigation = useNavigation()
  
  function handleGoback() {
    navigation.navigate("home")
  }
  
  return (
    <Container>
      <BackButton onPress={handleGoback}>
        <BackIcon />
      </BackButton>      
      {title && <Title>{title}</Title>}
    </Container>
  );
}
