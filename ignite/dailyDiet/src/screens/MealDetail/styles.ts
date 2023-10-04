import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: -28px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding-bottom: 200px;
`;

export const Form = styled.View`
  gap: 24px;
  margin-bottom: 148px;
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: left;
`;

export const BannerHeading = styled.Text`
${({ theme}) => css`
 font-size: ${theme.FONT_SIZE.LG}px;
 font-family: ${theme.FONT_FAMILY.REGULAR}; 
 `} 
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const OnDietIndicator = styled.View`
  flex-direction: row;
  gap: 8px;  
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 50px;
  height: 40px;
  width: 180px;
  align-items: center;
  justify-content: center;
`

export const OnDiet = styled(Circle).attrs(() => ({
  size: 14,
  weight: "fill",
}))``;