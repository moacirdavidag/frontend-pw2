import React from "react";
import { Button, ButtonProps, SystemStyleObject } from "@chakra-ui/react";
import { MdLogin } from "react-icons/md";
import { IconType } from "react-icons";

type Props = {
    titulo: string,
    onClick: Function,
    background?: string,
    color?: string,
    variant: string,
    icon?: React.ReactElement,
    hover?: SystemStyleObject
}

const ButtonComponent: React.FC<ButtonProps & Props> = (props) => {
  return (
    <Button
      {...props}
      variant={props.variant ?? 'default'}
      bg={props.background}
      onClick={props.onClick}
      color={props.color ?? 'white'}
      borderRadius="40px"
      p="16px 24px"
      fontSize="16px"
      fontWeight="bold"
      width="100%"
      leftIcon={<>{props.icon}</>} // Ícone antes do texto
      _hover={props.hover}
    >
      {props.titulo}
    </Button>
  );
};

export default ButtonComponent;
