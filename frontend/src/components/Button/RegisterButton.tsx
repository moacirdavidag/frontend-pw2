import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const RegisterButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="outline"
      borderColor="#e52d2d"
      color="#e52d2d"
      borderRadius="40px"
      p="24px 156px"
      fontSize="16px"
      fontWeight="bold"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color 0.3s ease, color 0.3s ease"
      _hover={{
        borderColor: "#d02626",
        color: "#d02626",
        backgroundColor: "#D3D3D3",
      }}
      mb={10}
    >
      Cadastre-se
    </Button>
  );
};

export default RegisterButton;
