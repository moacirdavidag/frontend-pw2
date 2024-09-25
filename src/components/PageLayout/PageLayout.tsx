import { Box, Flex } from "@chakra-ui/react";
import Header from "../Layout/Header/Header";
import useIsMobile from "../../hooks/useIsMobile";
import { useEffect } from "react";
import styled from "styled-components";

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
        <Box
          w={{ base: "100%", md: "80%", lg: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#f7f7f7" /* Cor de fundo da página */
        >
          <Flex direction="column" align="center">
            {shouldDisplayHeader && <Header />}
            {children}
          </Flex>
        </Box>
      </Flex>
    </StyledPage>
  );
};
