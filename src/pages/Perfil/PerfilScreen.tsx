import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Avatar,
  Flex,
  Stack,
  Input,
  Button,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { InputField } from "../../components/InputField/InputField";
import ActionButton from "../../components/Button/ActionButton";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import { Form, Formik } from "formik";
import API from "../../services/api";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";

const Perfil = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");
  const username = localStorage.getItem("username");
  const id = Number(localStorage.getItem("id"));
  const { logout } = useAuth();
  const initialValues = {
    name: "",
    cpf: "",
    phone: "",
    email: "",
    street: "",
    neighborhood: "",
    number: "",
    complement: "",
    city: "",
    state: "",
    reference: "",
  };
  const [user, setUser] = useState(initialValues);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await API.put(`/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast({
          title: "Usuário atualizado com sucesso!",
          description: "As informações foram salvas!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        getUserInfo();
      }
    } catch (error) {
      toast({
        title: "Erro ao atualizar o usuário!",
        description: "Tente novamente!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.error("Erro ao atualizar o usuário:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Função para lidar com o upload de avatar
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const avatarURL = URL.createObjectURL(file);
      setAvatar(avatarURL);
    }
  };

  const getUserInfo = async () => {
    try {
      await API.get(`/users/${id}`).then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          localStorage.setItem("username", response.data?.name);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [id]);

  return (
    <PageLayout shouldDisplayHeader={true}>
      <Box p={5} width="90%" height="100vh">
        <Heading
          as="h1"
          fontSize="24px"
          fontWeight="semibold"
          mb={6}
          textAlign="left"
        >
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
            <Avatar size="xl" name={username ?? "Usuário"} src={avatar} />
            <Box ml={4}>
              <Heading as="h2" fontSize="20px" fontWeight="bold">
                {username ?? "Usuário"}
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
            onClick={logout}
          />
        </Box>

        {/* Formulário de Dados Pessoais */}
        <Heading color="#3E3E3E" as="h2" fontSize="18px" mb={4}>
          Dados Pessoais
        </Heading>
        <Formik
          initialValues={user}
          onSubmit={handleSubmit}
          enableReinitialize
          validateOnChange
          validateOnBlur
        >
          {({ values, handleChange, isSubmitting, setSubmitting }) => (
            <Form>
              <Stack spacing={4} mb={6}>
                <InputField
                  id="name"
                  name="name"
                  placeholder="Ricardo Dantas Silva"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.name}
                />
                <InputField
                  id="cpf"
                  name="cpf"
                  placeholder="111.222.333-55"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.cpf}
                />
                <InputField
                  id="phone"
                  name="phone"
                  placeholder="(83) 9 9876-1232"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.phone}
                />
                <InputField
                  id="email"
                  name="email"
                  placeholder="ricardo24@gmail.com"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.email}
                />
              </Stack>

              {/* Formulário de Endereço */}
              <Heading color="#3E3E3E" as="h2" fontSize="18px" mb={4}>
                Dados de Endereço
              </Heading>
              <Stack spacing={4} mb={6}>
                <InputField
                  id="street"
                  name="street"
                  placeholder="Rua Airton Senna"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.street}
                />
                <InputField
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Jardim Soledade"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.neighborhood}
                />
                <InputField
                  id="number"
                  name="number"
                  placeholder="54"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.number}
                />
                <InputField
                  id="complement"
                  name="complement"
                  placeholder="Casa"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.complement}
                />
                <InputField
                  id="city"
                  name="city"
                  placeholder="Cajazeiras"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.city}
                />
                <InputField
                  id="state"
                  name="state"
                  placeholder="Paraíba"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.state}
                />
                <InputField
                  id="reference"
                  name="reference"
                  placeholder="Próximo à igreja São João Bosco"
                  focusBorderColor="red.500"
                  borderRadius="40px"
                  onChange={handleChange}
                  value={values.reference}
                />
              </Stack>

              {/* Botões de Ação */}
              <Flex justifyContent="space-between" mt={4}>
                <Stack spacing={4} direction="row">
                  <ActionButton
                    titulo="Adicionar novo endereço"
                    icon={<MdAdd />}
                    justifyContent="space-between"
                    width="256px"
                    height="40px"
                    fontSize="16px"
                    background="transparent"
                    color="#EA1D2C"
                    border={`1px solid #EA1D2C`}
                    variant="outline"
                    hover={{ bg: "gray.200" }}
                    onClick={() => navigate("/perfil/novo-endereco")}
                  />
                </Stack>
                <Stack spacing={4}>
                  <ActionButton
                    titulo="Salvar"
                    type="submit"
                    isLoading={isSubmitting}
                    width="256px"
                    height="40px"
                    fontSize="16px"
                    background="#EA1D2C"
                    color="white"
                    onClick={() => {
                      handleSubmit(values, setSubmitting);
                    }}
                  />
                </Stack>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </PageLayout>
  );
};

export default Perfil;
