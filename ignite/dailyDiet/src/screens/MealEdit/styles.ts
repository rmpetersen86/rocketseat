import styled, { css } from "styled-components/native";

type Props = {
  positive?: boolean
}

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
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: left;
`;

export const Banner = styled.View`    
  display: flex;
  flex: 1;  
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};  
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

export const BannerImage = styled.Image`  
  margin: 20px;
  height: 300px;
`;

export const BannerHeader = styled.Text<Props>`
 ${({ theme, positive}) => css`
 font-size: ${theme.FONT_SIZE.XXL}px;
 font-family: ${theme.FONT_FAMILY.BOLD};
 color: ${positive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
 `} 
`;