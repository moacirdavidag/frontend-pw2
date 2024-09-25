
import React, { useState } from "react";
import { Box, Heading, Avatar, SimpleGrid, Flex, Stack, Input, Button, IconButton, Text } from "@chakra-ui/react";
import { InputField } from "../../components/InputField/InputField";
import ButtonSecundary from "../../components/Button/ButtonSecundary";
import ActionButton from "../../components/Button/ActionButton";
import { IoExitOutline } from "react-icons/io5";


const Perfil = () => {

  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");

  // Função para lidar com o upload de avatar
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const avatarURL = URL.createObjectURL(file);
      setAvatar(avatarURL);
    }
  };

  return (
    <Box p={5} maxW="1200px" mx="auto">
      <Heading as="h1" fontSize="24px" fontWeight="semibold" mb={6} textAlign="left">
        Meu Perfil
      </Heading>

      {/* Dados Pessoais com Avatar e Logout */}
      <Box
        bg="red.500"
        p={6}
        borderRadius="md"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={6}
      >
        {/* Avatar e Upload */}
        <Box display="flex" alignItems="center">
          <Avatar size="xl" name="Ricardo Dantas Silva" src={avatar} />
          <Box ml={4}>
            <Heading as="h2" fontSize="20px" fontWeight="bold">
              Ricardo Dantas Silva
            </Heading>
            <Text>Usuário</Text>

            {/* Botão estilizado para upload do Avatar */}
            <Button
              as="label" // Transformar o botão em um label para o input
              mt={2}
              colorScheme="red"
              size="sm"
              borderRadius="full"
              cursor="pointer"
            >
              Alterar avatar
              <Input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                display="none"
              />
            </Button>
          </Box>
        </Box>

        {/* Botão de Logout com o ícone novo */}
        <IconButton
          aria-label="Logout"
          icon={<IoExitOutline size={24} />} // Ícone arredondado
          bg="blackAlpha.800"
          color="white"
          _hover={{ bg: "blackAlpha.600" }}
          onClick={() => console.log("Logout")}
        />
      </Box>

      {/* Formulário de Dados Pessoais */}
      <Heading color= "#3E3E3E" as="h2" fontSize="18px" mb={4}>
        Dados Pessoais
      </Heading>
      <Stack spacing={4} mb={6}>
        <InputField
          id="nome"
          placeholder="Ricardo Dantas Silva"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="cpf"
          placeholder="148.587.658-55"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="telefone"
          placeholder="(83) 9 9876-1232"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="email"
          placeholder="ricardo24@gmail.com"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
      </Stack>

      {/* Formulário de Endereço */}
      <Heading color= "#3E3E3E" as="h2" fontSize="18px" mb={4}>
        Dados de Endereço
      </Heading>
      <Stack spacing={4} mb={6}>
        <InputField
          id="endereco-principal"
          placeholder="Rua Airton Senna"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="bairro"
          placeholder="Jardim Soledade"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="numero"
          placeholder="54"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="complemento"
          placeholder="Casa"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="cidade"
          placeholder="Patos"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="estado"
          placeholder="Paraíba"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
        <InputField
          id="referencia"
          placeholder="Próximo à igreja São João Bosco"
          focusBorderColor="red.500"
          borderRadius="40px"
        />
      </Stack>

      {/* Botões de Ação */}
      <Flex justifyContent="flex-end" mt={4}>
        <Stack spacing={4}>
          <ButtonSecundary
            titulo="Adicionar novo endereço"
            onClick={() => console.log("Adicionar endereço")}
          />
          <ActionButton
            titulo="Salvar"
            onClick={() => console.log("Salvar perfil")}
            background="red.500"
            color="white"
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Perfil;