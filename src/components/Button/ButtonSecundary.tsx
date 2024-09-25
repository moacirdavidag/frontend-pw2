import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

interface ButtonSecundaryProps extends ButtonProps {
  titulo: string; 
  onClick: () => void;
}

const ButtonSecundary: React.FC<ButtonSecundaryProps> = ({ titulo, onClick, ...props }) => {
  return (
    <Button
      onClick={onClick}
      border="2px solid #EA1D2C" 
      color="#EA1D2C" 
      borderRadius="40px" 
      bg="white" 
      height="56px" 
      px="16px" 
      py="12px" 
      fontSize="16px" 
      fontWeight="bold" 
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {/* Ícone + */}
      <Icon as={FaPlus} mr="8px" />
      {titulo}
    </Button>
  );
};

export default ButtonSecundary;
