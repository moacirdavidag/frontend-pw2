import styled from "styled-components";
import theme from "../../../styles/global";
import breakpoints from "../../../utils/breakpoints";

export const HeaderWrapper = styled.header`
  width: 100vw;
  max-width: 100%;
  background-color: ${theme.colors.primary};
  min-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: ${breakpoints.sm}) {
    border-radius: 0 0 12px 12px;
    height: 80px;
  }
`;
