import { Input, Box, FormLabel } from "@chakra-ui/react";

const DadosEnderecoForm = () => {
  return (
    <Box>
      <FormLabel>Rua</FormLabel>
      <Input placeholder="Rua" />

      <FormLabel>Bairro</FormLabel>
      <Input placeholder="Bairro" />

      <FormLabel>Número</FormLabel>
      <Input placeholder="Número" />

      <FormLabel>Complemento</FormLabel>
      <Input placeholder="Complemento" />

      <FormLabel>Cidade</FormLabel>
      <Input placeholder="Cidade" />

      <FormLabel>Estado</FormLabel>
      <Input placeholder="Estado" />

      <FormLabel>Ponto de Referência</FormLabel>
      <Input placeholder="Ponto de Referência" />
    </Box>
  );
};

export default DadosEnderecoForm;
