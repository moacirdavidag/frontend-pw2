import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import LoginButton from "../../components/Button/LoginButton";
import RegisterButton from "../../components/Button/RegisterButton";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";
import { MdArrowOutward } from "react-icons/md";

const WelcomeScreen = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Função para navegar para a tela de login
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
        {/* <LoginButton onClick={handleLoginClick} /> */}
        <ButtonComponent
          titulo="Fazer login"
          background={"#e52d2d"}
          onClick={handleLoginClick}
          variant={"contained"}
          icon={<MdArrowOutward />}
        />

        {/* Botão Cadastre-se */}
        <ButtonComponent
          titulo="Cadastre-se"
          variant={"outline"}
          onClick={() => {}}
          color={"#e52d2d"}
          hover={{background: "green"}}
        />
      </VStack>
    </Box>
  );
};

export default WelcomeScreen;
