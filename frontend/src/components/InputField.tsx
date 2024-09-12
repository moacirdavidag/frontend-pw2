import React from "react";
import { FormControl, Input, InputGroup, InputProps } from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  id: string;
  isRequired?: boolean;
  InputRightElement?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  isRequired = false,
  InputRightElement,
  ...rest
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <InputGroup>
        <Input id={id} {...rest} />
        {InputRightElement && <>{InputRightElement}</>}
      </InputGroup>
    </FormControl>
  );
};
