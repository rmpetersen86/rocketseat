import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTypeStyleProps = "INPUT" | "TEXTAREA";

type Props = {
  type: InputTypeStyleProps;
};

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: left;
  margin-bottom: 4px;
`;

export const FormInput = styled(TextInput)<Props>`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_5};    
  `}
  height: ${({ type }) => (type === "INPUT" ? 48 : 142)}px;  
  padding: 14px;
  border-radius: 6px;
  min-width: 160px;
`;
