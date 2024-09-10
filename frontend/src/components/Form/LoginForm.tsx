import React from "react";
import {
  Box,
  Input,
  FormControl,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom"; // Importar o useNavigate
import EnterButton from "../Button/EnterButton";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate(); // Hook para navegar

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      maxW="md"
      width="100%"
      maxHeight="100vh"
      overflow="hidden"
    >
      {/* Logo da empresa */}
      <Image
        src="src/assets/imgs/logo.png"
        alt="Logo Delivery Acadêmico"
        width="156px"
        height="50px"
        mb="4"
      />

      {/* Imagem de Boas Vindas (Motoca) */}
      <Image
        src="src/assets/imgs/motoca.png"
        alt="Delivery Acadêmico"
        width="340px"
        height="auto"
        mb="6"
      />

      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="gray.700" mb="2">
          Fazer Login
        </Text>
        <Text fontSize="md" color="gray.500" mb="6">
          Informe seu email e senha.
        </Text>
      </Box>

      <Stack spacing="4" width="full">
        {/* Campo de Email */}
        <FormControl id="email" isRequired>
          <Input
            type="email"
            placeholder="Email"
            focusBorderColor="red.500"
            borderRadius="40px"
          />
        </FormControl>

        {/* Campo de Senha */}
        <FormControl id="password" isRequired>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              focusBorderColor="red.500"
              borderRadius="40px"
            />
            <InputRightElement width="3rem">
              <IconButton
                variant="ghost"
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleShowClick}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Link Esqueci minha senha */}
        <Box textAlign="left" mb="2">
          <Text
            fontSize="14px"
            fontWeight="semibold"
            color="gray.600"
            cursor="pointer"
            onClick={() => navigate("/forgot-password")} // Redireciona ao clicar
          >
            Esqueci minha senha
          </Text>
        </Box>

        {/* Botão Entrar */}
        <EnterButton />
      </Stack>
    </Box>
  );
};

export default LoginForm;
