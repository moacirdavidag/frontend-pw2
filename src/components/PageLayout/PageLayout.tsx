import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../Layout/Header/Header";
import useIsMobile from "../../hooks/useIsMobile";
import { useEffect } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  shouldDisplayHeader?: boolean;
}

const StyledPage = styled(Box)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* Cor de fundo da página */
`;

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  shouldDisplayHeader = false,
}) => {
  const isMobile = useIsMobile();

  return (
    <StyledPage>
      <Flex direction="column" align="center" w={"100vw"}>
        {shouldDisplayHeader && <Header />}
        {children}
      </Flex>
    </StyledPage>
  );
};
