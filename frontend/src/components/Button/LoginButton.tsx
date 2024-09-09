import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";

interface LoginButtonProps extends ButtonProps {
  onClick: () => void; // Prop para o evento de clique
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, ...props }) => {
  return (
    <Button
      {...props}
      onClick={onClick} // Passa o evento de clique
      bg="#e52d2d"
      color="white"
      borderRadius="40px"
      p="24px 148px"
      fontSize="16px"
      fontWeight="bold"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color 0.3s ease"
      _hover={{ bg: "#d02626" }}
      leftIcon={<MdArrowOutward />}
    >
      Fazer Login
    </Button>
  );
};

export default LoginButton;
