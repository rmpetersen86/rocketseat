import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActivity?: boolean;
  title: "Sim" | "Não";
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  ${({ theme, isActivity, title }) =>
    isActivity &&
    css`
      border: 1px solid
        ${title === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
      background-color: ${title === "Sim"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `};

  border-radius: 6px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const OnDiet = styled(Circle).attrs(() => ({
  size: 14,
  weight: "fill",
}))``;
