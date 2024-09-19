import { Image, VStack } from "@chakra-ui/react";

interface HeaderProps {
  logoSrc: string;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <VStack spacing={4} mb={6} align="center">
      <Image src={logoSrc} alt="Logo" width="150px" />
    </VStack>
  );
};
