import styled, { css } from "styled-components/native";

export type DataInfoTypeStyleProps = "REGULAR" | "POSITIVE" | "NEGATIVE";

type Props = {
  type: DataInfoTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  min-height: 90px;
  padding: 16px;
  gap: 8px;
  background-color: ${({ type, theme }) =>
    type === "REGULAR"
      ? theme.COLORS.GRAY_5
      : type === "POSITIVE"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
`;

export const DataNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
`;

export const Caption = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
`;
