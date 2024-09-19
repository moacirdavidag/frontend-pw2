import React from "react";
import {
  Button,
  ButtonProps,
  Spinner,
  SystemStyleObject,
} from "@chakra-ui/react";

type Props = {
  titulo: string; // Título do botão
  onClick: Function; // Função de clique
  background?: string; // Cor de fundo opcional
  color?: string; // Cor do texto opcional
  variant?: string; // Variante do botão (opcional)
  icon?: React.ReactElement; // Ícone opcional
  hover?: SystemStyleObject; // Estilo de hover opcional
  isLoading?: boolean; // Estado de loading opcional
};

const ActionButton: React.FC<ButtonProps & Props> = (props) => {
  return (
    <Button
      {...props}
      bg={props.background ?? "red.500"}
      color={props.color ?? "white"}
      borderRadius="40px"
      p="16px 24px"
      fontSize="16px"
      fontWeight="bold"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color 0.3s ease"
      leftIcon={props.icon ? <>{props.icon}</> : undefined} // Ícone opcional
      _hover={props.hover ?? { bg: "red.600" }} // Hover padrão, se não for fornecido
    >
      {props.isLoading ? (
        <Spinner size="sm" color={props.color ?? "white"} />
      ) : (
        props.titulo
      )}
    </Button>
  );
};

export default ActionButton;
