import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-height: 49px;
  min-height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-top: 8px;
  padding: 14px 12px 16px;
`;
