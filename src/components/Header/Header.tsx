import { Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logoSrc: string;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const navigate = useNavigate();
  return (
    <VStack spacing={4} mb={6} align="center">
      <Image src={logoSrc} alt="Logo" width="150px" onClick={() => {
        navigate('/home');
      }} />
    </VStack>
  );
};
