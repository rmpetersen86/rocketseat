import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ContainerTypeStyleProps = "Default" | "Positive" | "Negative";

type Props = {
  type: ContainerTypeStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 132px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => 
    type === "Negative" ? theme.COLORS.RED_LIGHT : type === "Positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_5 };
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 54px;
  left: 34px;
  z-index: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
  weight: "light",
}))``;
