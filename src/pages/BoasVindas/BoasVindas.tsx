import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";
import { Illustration } from "../../components/illustration/Illustration";
import { useNavigate } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/react";
import ActionButton from "../../components/Button/ActionButton";
import { MdArrowOutward } from "react-icons/md";

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

      <ActionButton
        titulo="Entrar"
        icon={<MdArrowOutward />}
        onClick={() => handleLoginClick()}
        background="red.500"
        color="white"
        width="100%"
        height="50px"
        display="flex"
        mb={4}
      />
      <ActionButton
        titulo="Cadastre-se"
        variant="outline"
        borderColor="#e52d2d"
        color="#e52d2d"
        width="100%"
        height="50px"
        display="flex"
        background="transparent"
        hover={{
          borderColor: "#d02626",
          color: "#d02626",
          backgroundColor: "#D3D3D3",
        }}
        borderRadius="40px"
        fontSize="16px"
        fontWeight="bold"
        onClick={() => navigate("/register")} // Função para navegação
      />
    </PageLayout>
  );
};

export default WelcomeScreen;
