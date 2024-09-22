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
import { Header } from "../Header/Header";
import { InputField } from "../InputField/InputField";
import { PageLayout } from "../PageLayout/PageLayout";
import { Illustration } from "../illustration/Illustration";
import { MdLogin } from "react-icons/md";
import ActionButton from "../Button/ActionButton";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Illustration
        src="src/assets/imgs/motoca.png"
        alt="Imagem de Boas Vindas - Motoca"
        mb="4"
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
          inputRightElement={
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
          titulo="Entrar"
          icon={<MdLogin />}
          onClick={() => navigate("/home")} // Daqui deve renderizar para Home que vai ser desenvolvida
          background="red.500"
          color="white"
        />
      </Stack>
    </PageLayout>
  );
};

export default LoginForm;
