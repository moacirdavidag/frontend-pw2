import React, { useState } from "react";
import {
  Box,
  InputRightElement,
  IconButton,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { Header } from "../Header";
import { InputField } from "../InputField";
import { PageLayout } from "../PageLayout";
import { Illustration } from "../Illustration"; // Importação do componente Illustration
import { ActionButton } from "../Button/ActionButton";
import { MdLogin } from "react-icons/md";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <PageLayout>
      {/* Header com o título e logo */}
      <Header logoSrc="src/assets/imgs/logo.png" />

      {/* Componente de Ilustração Dinâmico */}
      <Illustration
        src="src/assets/imgs/motoca.png"
        alt="Imagem de Boas Vindas - Motoca"
        width="340px"
        height="auto"
        mb="6"
      />

      <Stack spacing="4" width="full">
        {/* Campo de Email */}
        <InputField
          id="email"
          type="email"
          placeholder="Email"
          isRequired
          aria-label="Email"
          focusBorderColor="red.500"
          borderRadius="40px"
        />

        {/* Campo de Senha */}
        <InputField
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          isRequired
          aria-label="Senha"
          focusBorderColor="red.500"
          borderRadius="40px"
          InputRightElement={
            <InputRightElement width="3rem">
              <IconButton
                variant="ghost"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleShowClick}
              />
            </InputRightElement>
          }
        />

        {/* Link Esqueci minha senha */}
        <Box textAlign="left" mb="2">
          <Text
            fontSize="14px"
            fontWeight="semibold"
            color="gray.600"
            cursor="pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Esqueci minha senha
          </Text>
        </Box>

        {/* Botão Entrar */}
        <ActionButton
          label="Entrar"
          leftIcon={<MdLogin />}
          onClick={() => {}}
        />
      </Stack>
    </PageLayout>
  );
};

export default LoginForm;
