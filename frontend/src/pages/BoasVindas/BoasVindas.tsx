import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { Header } from "../../components/Header";
import { Illustration } from "../../components/Illustration";
import LoginButton from "../../components/Button/LoginButton";
import RegisterButton from "../../components/Button/RegisterButton";
import { useNavigate } from "react-router-dom";
import { Heading, Text, Box, VStack, Image } from "@chakra-ui/react";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <PageLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        p={4}
      >
        <VStack spacing={8} maxW="400px" textAlign="center">
          {/* Logo da empresa */}

          {/* Imagem de Boas Vindas */}
          <Image
            src="src\assets\imgs\motoca.png"
            alt="Delivery Acadêmico"
            width="380px"
            height="280px"
          />

          {/* Texto de Boas Vindas */}
          <Heading as="h1" fontSize="24px">
            Bem vindo ao Delivery Acadêmico
          </Heading>
          <Text fontSize="16px" color="gray.600">
            Descubra uma variedade de pratos com entrega rápida.
          </Text>
        </VStack>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <LoginButton onClick={handleLoginClick} />
        {/* Botão Cadastre-se */}
        <RegisterButton />
      </Box>
    </PageLayout>
  );
};

export default WelcomeScreen;
