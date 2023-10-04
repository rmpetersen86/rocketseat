import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackIcon,
  Container,
  ForwardButton,
  ForwardIcon,
  Percentage,
  PercentTypeStyleProps,
  Subtitle,
} from "./styles";
import { useTheme } from "styled-components";

type Props = {
  type?: PercentTypeStyleProps;
  total: number;
  forwardButtonAction?: () => void  
};

export function Percent({ total, type = "WIDGET", forwardButtonAction = () => {} }: Props) {
  const navigation = useNavigation()
  const { COLORS } = useTheme()
  
  function handleGoback() {
    navigation.navigate("home")
  }

  return (
    <Container type={type} positive={total >= 50 ? true : false}>
      {type === "WIDGET" ? (
        <ForwardButton onPress={() => forwardButtonAction()}>
          <ForwardIcon color={total >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>
        </ForwardButton>
      ) : (
        <BackButton onPress={handleGoback}>
          <BackIcon color={total >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>
        </BackButton>
      )}
      <Percentage>{total.toFixed(2)}%</Percentage>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
