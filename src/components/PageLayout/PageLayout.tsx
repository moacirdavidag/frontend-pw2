import { Box, Flex } from "@chakra-ui/react";
import Header from "../Layout/Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
  shouldDisplayHeader?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  shouldDisplayHeader = false,
}) => {
  return (
    <Box
      w={{ base: "100%", md: "80%", lg: "100%" }}
      h="100vh"
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
  );
};
