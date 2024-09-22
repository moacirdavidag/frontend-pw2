import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../Layout/Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
  shouldDisplayHeader?: boolean;
}

const StyledPage = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* Cor de fundo da página */
`;

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  shouldDisplayHeader = false,
}) => {
  return (
    <StyledPage>
      <Flex direction="column" align="center" w={"100%"}>
        {shouldDisplayHeader && <Header />}
        {children}
      </Flex>
    </StyledPage>
  );
};
