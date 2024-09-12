import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { MdLogin } from "react-icons/md";

const EnterButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      bg="#e52d2d"
      color="white"
      borderRadius="40px"
      p="16px 24px"
      fontSize="16px"
      fontWeight="bold"
      width="100%"
      leftIcon={<MdLogin />}
      _hover={{ bg: "#d02626" }}
    >
      Entrar
    </Button>
  );
};

export default EnterButton;
