import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import ActionButton from "../../components/Button/ActionButton";
import { InputField } from "../../components/InputField/InputField";
import { Header } from "../../components/Header/Header";

const Contato = () => {
  return (
    <Box p={5} maxW="600px" mx="auto">
      <Header logoSrc="src/assets/imgs/logo.png" />
      {/* Imagem no topo */}
      <Image
        src="src/assets/imgs/contato.png"
        alt="Fale Conosco"
        borderRadius="md"
        mb={6}
      />

      {/* Título da página */}
      <Heading
        as="h1"
        color="red.500"
        fontSize="24px"
        fontWeight="semibold"
        mb={4}
        textAlign="center"
      >
        Entre em Contato Conosco
      </Heading>

      {/* Texto de boas-vindas */}
      <Text color="#717171" fontSize="16px" mb={6} textAlign="center">
        Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e
        responderemos o mais breve possível!
      </Text>

      {/* Formulário de contato */}
      <VStack spacing={4} align="start" as="form">
        {/* Campo de Nome usando o InputField */}
        <InputField
          id="name"
          isRequired
          placeholder="Digite seu nome completo"
          focusBorderColor="red.500"
          borderRadius="40px"
        />

        {/* Campo de E-mail usando o InputField */}
        <InputField
          id="email"
          isRequired
          placeholder="Digite seu e-mail"
          type="email"
          focusBorderColor="red.500"
          borderRadius="40px"
        />

        {/* Campo de Assunto usando o InputField */}
        <InputField
          id="subject"
          isRequired
          placeholder="Qual o assunto do seu contato?"
          focusBorderColor="red.500"
          borderRadius="40px"
        />

        {/* Campo de Mensagem usando FormControl e Textarea */}
        <FormControl id="message" isRequired>
          <Textarea
            placeholder="Escreva sua mensagem"
            borderRadius="40px"
            focusBorderColor="red.500"
          />
        </FormControl>

        {/* Botão de Enviar usando o ActionButton */}
        <Box width="100%" mt={4}>
          <ActionButton
            titulo="Enviar Mensagem"
            onClick={() => alert("Mensagem enviada!")}
            isLoading={false} // Não está carregando
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Contato;
