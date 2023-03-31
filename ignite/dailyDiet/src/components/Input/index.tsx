import { Container, Label, FormInput, InputTypeStyleProps } from "./styles";
import { useTheme } from "styled-components";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label?: string;
  type?: InputTypeStyleProps;
};

export function Input({ type = "INPUT", label, inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <FormInput
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_3}
        type={type}
        {...rest}
      />
    </Container>
  );
}
