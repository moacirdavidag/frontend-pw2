import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import LoginButton from "../../components/Button/LoginButton";
import RegisterButton from "../../components/Button/RegisterButton";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      p={4}
    >
      <VStack spacing={8} maxW="400px" textAlign="center">
        {/* Logo da empresa */}
        <Image
          src="src/assets/imgs/logo.png"
          alt="Logo Delivery Acadêmico"
          mt="10px"
          width="156px"
          height="50px"
        />

        {/* Imagem de Boas Vindas */}
        <Image
          src="src/assets/imgs/motoca.png"
          alt="Delivery Acadêmico"
          width="380px"
          height="280px"
        />

        {/* Texto de Boas Vindas */}
        <Heading as="h1" fontSize="24px">
          Bem-vindo ao Delivery Acadêmico
        </Heading>
        <Text fontSize="16px" color="gray.600">
          Descubra uma variedade de pratos com entrega rápida.
        </Text>

        {/* Botão Fazer Login */}
        <LoginButton onClick={handleLoginClick} />

        {/* Botão Cadastre-se */}
        <RegisterButton />
      </VStack>
    </Box>
  );
};

export default WelcomeScreen;
