import styled from "styled-components";
import theme from "../../styles/global";

type Props = {
  isActive: boolean;
};

export const CategoryWrapper = styled.div<Props>`
  padding: 12px;
  height: 50px;
  gap: 5px;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.primary : "#F2F2F2"};
  color: ${({ isActive }) => (isActive ? "white" : "#DCDCDC")};
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: auto;
  &:hover {
    transition: ease-in-out 300ms;
    background-color: ${theme.colors.primary};
    color: 'white';
  }
`;
