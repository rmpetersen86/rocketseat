import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { IconContext, Plus, Pencil, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  showIcon?: boolean;
  iconName?: "Plus" | "Trash" | "Pencil";
};

export function Button({
  title,
  type = "PRIMARY",
  showIcon = false,
  iconName,
  ...rest
}: Props) {
  const { COLORS } = useTheme();
  return (
    <Container type={type} {...rest}>
      <IconContext.Provider
        value={{
          size: 18,
          color: type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_1,
        }}
      >
        {iconName &&
          (iconName === "Plus" ? (
            <Plus />
          ) : iconName === "Pencil" ? (
            <Pencil />
          ) : (
            <Trash />
          ))}
      </IconContext.Provider>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
