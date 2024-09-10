import React from "react";
import { Box, Input, FormControl, FormLabel, Text } from "@chakra-ui/react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  subtext?: string;
  isRequired?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  subtext,
  isRequired = false,
}) => {
  return (
    <Box textAlign="center" mb="6">
      <FormControl
        isRequired={isRequired}
        className={isRequired ? "no-asterisk" : ""}
      >
        {/* Texto principal */}
        <FormLabel
          fontSize="1g"
          fontWeight="bold"
          color="gray.700"
          textAlign="center"
        >
          {label}
        </FormLabel>

        {/* Subtítulo opcional */}
        {subtext && (
          <Text fontSize="md" color="gray.500" mt="2" mb="4" textAlign="center">
            {subtext}
          </Text>
        )}

        {/* Campo de input */}
        <Input
          type={type}
          placeholder={placeholder}
          focusBorderColor="red.500"
          borderRadius="40px"
        />
      </FormControl>
    </Box>
  );
};
