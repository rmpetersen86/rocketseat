import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, FilterStyleProps, OnDiet, Title } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {};

export function Filter({ title, isActivity = false, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container title={title} isActivity={isActivity} {...rest}>
      <OnDiet color={title === "Sim" ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      <Title>{title}</Title>
    </Container>
  );
}
