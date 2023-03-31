import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: -28px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Form = styled.View`
  gap: 24px;
  margin-bottom: 148px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: left;
`;
