import React from "react";
import { FormControl, Input, InputGroup, InputProps } from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  id: string;
  isRequired?: boolean;
  InputRightElement?: React.ReactNode;
  borderRadius?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  isRequired = false,
  InputRightElement,
  borderRadius = "md", // Define o valor padrão se não for fornecido
  ...rest
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <InputGroup>
        <Input id={id} borderRadius={borderRadius} {...rest} />{" "}
        {/* Aplica o borderRadius */}
        {InputRightElement && <>{InputRightElement}</>}
      </InputGroup>
    </FormControl>
  );
};
