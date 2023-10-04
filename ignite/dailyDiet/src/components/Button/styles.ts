import { IconContext } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border: ${({ theme, type }) => type === "SECONDARY" && theme.COLORS.GRAY_1}
    1px solid;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};  
  padding: 15px;
`;
