import React from "react";
import { Box } from "@chakra-ui/react";
import LoginForm from "../../components/Form/LoginForm";

const LoginScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#FFFFFF"
      height="100vh"
    >
      <LoginForm />
    </Box>
  );
};

export default LoginScreen;
