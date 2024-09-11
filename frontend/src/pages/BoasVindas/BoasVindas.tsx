import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { Header } from "../../components/Header";
import { Illustration } from "../../components/Illustration";
import LoginButton from "../../components/Button/LoginButton";
import RegisterButton from "../../components/Button/RegisterButton";
import { useNavigate } from "react-router-dom";
import { Heading, Text, Box } from "@chakra-ui/react";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Illustration src="src/assets/imgs/motoca.png" alt="Delivery Acadêmico" />

      <Heading as="h1" fontSize="24px" mb={4}>
        Bem-vindo ao Delivery Acadêmico
      </Heading>
      <Text fontSize="16px" color="gray.600" mb={8}>
        Descubra uma variedade de pratos com entrega rápida.
      </Text>

      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <LoginButton onClick={handleLoginClick} />
        <RegisterButton />
      </Box>
    </PageLayout>
  );
};

export default WelcomeScreen;
