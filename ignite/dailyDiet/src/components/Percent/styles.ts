import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = "WIDGET" | "HEADER";

type Props = {
  type: PercentTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;

  height: ${({ type }) => (type === "WIDGET" ? 100 : 200)}px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ type }) => (type === "WIDGET" ? 40 : 0)}px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const ForwardButton = styled.TouchableOpacity`
  align-self: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-end;
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const ForwardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
