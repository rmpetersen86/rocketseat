import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0;
`;

export const Content = styled.View`
  height: 100%;
  flex: 1;
  padding: 33px 24px;
  margin-top: -32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
  gap: 12px;
  justify-content: center;
`;

export const ContentHeading = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 11px;
`;
