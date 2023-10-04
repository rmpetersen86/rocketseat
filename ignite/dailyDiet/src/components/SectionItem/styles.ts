import styled, { css } from "styled-components/native"
import { Circle } from "phosphor-react-native"

export const Container = styled.TouchableOpacity`
  width: 100%;
  max-height: 49px;
  min-height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-top: 8px;
  padding: 14px 12px 16px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
  flex: 1;
`
export const OnDiet = styled(Circle).attrs(() => ({
  size: 14,
  weight: "fill",
}))``
