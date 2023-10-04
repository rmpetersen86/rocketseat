import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_3A};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Content = styled.View`  
  border-radius: 20px;
  width: 80%;
  height: 200px;
  padding: 20px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};  
`;

export const Message = styled.Text`  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
`;