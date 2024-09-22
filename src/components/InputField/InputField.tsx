import React from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  id: string;
  isRequired?: boolean;
  inputRightElement?: React.ReactNode;
  borderRadius?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  isRequired = false,
  inputRightElement,
  borderRadius = "md",
  ...rest
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <InputGroup>
        <Input id={id} borderRadius={borderRadius} {...rest} />
        {inputRightElement && (
          <InputRightElement width="4rem">
            {inputRightElement}
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};
