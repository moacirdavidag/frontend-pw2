import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";

const LoginButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
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
