import React from "react";
import { Button, ButtonProps, Spinner } from "@chakra-ui/react";

interface ActionButtonProps extends ButtonProps {
  label: string;
  isLoading?: boolean;
  icon?: React.ReactElement; // Ícone opcional
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  isLoading = false,
  icon,
  ...rest
}) => {
  return (
    <Button
      width="full"
      borderRadius="40px"
      bg="red.500"
      color="white"
      _hover={{ bg: "red.600" }}
      {...rest}
    >
      {isLoading ? (
        <Spinner size="sm" color="white" />
      ) : (
        <>
          {icon && React.cloneElement(icon, { style: { marginRight: "8px" } })}{" "}
          {/* Renderiza o ícone se ele existir com margem à direita */}
          {label} {/* Renderiza o texto */}
        </>
      )}
    </Button>
  );
};
