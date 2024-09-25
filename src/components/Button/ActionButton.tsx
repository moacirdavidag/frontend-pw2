import React from "react";
import {
  Button,
  ButtonProps,
  Spinner,
  SystemStyleObject,
} from "@chakra-ui/react";

type Props = {
  titulo: string; // Título do botão
  onClick: () => void; // Função de clique
  background?: string; // Cor de fundo opcional
  color?: string; // Cor do texto opcional
  variant?: string; // Variante do botão (opcional)
  icon?: React.ReactElement; // Ícone opcional
  hover?: SystemStyleObject; // Estilo de hover opcional
  isLoading?: boolean; // Estado de loading opcional
  borderRadius?: string; // Bordas personalizáveis
  padding?: string; // Padding personalizável
  fontSize?: string; // Tamanho da fonte personalizável
  width?: string; // Largura personalizável
  height?: string; // Altura personalizável
};

const ActionButton: React.FC<ButtonProps & Props> = ({
  borderRadius = "40px", // Valor padrão para borderRadius
  padding = "12px 24px", // Valor padrão para padding
  fontSize = "16px", // Valor padrão para fontSize
  width = "100%", // Valor padrão para largura
  height = "100%", // Altura padrão para auto
  ...props
}) => {
  return (
    <Button
      {...props}
      bg={props.background ?? "red.500"}
      color={props.color ?? "white"}
      borderRadius={borderRadius}
      p={padding}
      fontSize={fontSize}
      fontWeight="bold"
      width={width}
      height={height}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color 0.3s ease"
      leftIcon={props.icon ? <>{props.icon}</> : undefined}
      _hover={props.hover ?? { bg: "red.600" }}
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
