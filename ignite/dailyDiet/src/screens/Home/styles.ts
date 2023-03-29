import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const Heading = styled.View`
  width: 100%;
  margin: 36px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AppIcon = styled.View`
  flex-direction: row;
`;

export const IconTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    font-weight: bold;
  `};
  text-align: justify;
`;

export const Avatar = styled.View`
  height: 40px;
  width: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 50px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 8px;
  `}
`;
