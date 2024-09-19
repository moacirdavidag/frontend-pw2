import { Input, Box, FormLabel } from "@chakra-ui/react";

const DadosPessoaisForm = () => {
  return (
    <Box>
      <FormLabel>Nome Completo</FormLabel>
      <Input placeholder="Nome Completo" />

      <FormLabel>CPF</FormLabel>
      <Input placeholder="CPF" />

      <FormLabel>Telefone</FormLabel>
      <Input placeholder="Telefone" />

      <FormLabel>E-mail</FormLabel>
      <Input placeholder="E-mail" />

      <FormLabel>Senha</FormLabel>
      <Input type="password" placeholder="Senha" />

      <FormLabel>Repita sua senha</FormLabel>
      <Input type="password" placeholder="Repita sua senha" />
    </Box>
  );
};

export default DadosPessoaisForm;
