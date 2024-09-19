import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

interface PageLayoutProps {
  children: React.ReactNode;
}

const StyledPage = styled(Box)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* Cor de fundo da página */
`;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <StyledPage>
      <Flex direction="column" align="center" p={4}>
        {children}
      </Flex>
    </StyledPage>
  );
};
