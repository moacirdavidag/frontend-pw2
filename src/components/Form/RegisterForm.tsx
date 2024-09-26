import React, { useState } from "react";
import { Box, Text, Stack, IconButton, useToast } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { InputField } from "../InputField/InputField";
import ActionButton from "../Button/ActionButton";
import { Header } from "../Header/Header";
import TitleWithSubtitle from "../TitleWithSubtitle/TittleWithSub";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };

  const toast = useToast();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    repetirSenha: "",
    street: "",
    neighborhood: "",
    number: "",
    city: "",
    state: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    repetirSenha: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas não coincidem")
      .required("Repita a senha"),
    street: Yup.string().required("Rua é obrigatória"),
    neighborhood: Yup.string().required("Bairro é obrigatório"),
    number: Yup.string().required("Número é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    state: Yup.string().required("Estado é obrigatório"),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting }: any
  ) => {
    const valuesEdited = values;
    delete valuesEdited.repetirSenha;
    try {
      const response = await API.post("/users", valuesEdited);
      if (response.status === 201) {
        toast({
          title: "Usuário criado com sucesso!",
          description: "Você será redirecionado para a página inicial!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/home");
      }
    } catch (error) {
      toast({
        title: "Erro ao criar o usuário!",
        description: "Tente novamente!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.error("Erro ao criar o usuário:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box p={4}>
      <Header logoSrc="src/assets/imgs/logo.png" />
      {/* Título e subtítulo */}
      <Box textAlign="left" mb={1}>
        <TitleWithSubtitle
          title="Cadastre-se"
          subtitle="Siga o passo a passo para fazer o cadastro."
          textAlign="left"
        />
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values, setSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              <Field
                as={InputField}
                id="nome"
                name="name"
                placeholder="Nome"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="email"
                name="email"
                placeholder="Email"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="senha"
                name="password"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.password}
                inputRightElement={
                  <IconButton
                    variant="ghost"
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handleShowClick}
                    marginRight="0"
                  />
                }
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="repetirSenha"
                name="repetirSenha"
                placeholder="Repita a Senha"
                type={showPassword ? "text" : "password"}
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.repetirSenha}
                inputRightElement={
                  <IconButton
                    variant="ghost"
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handleShowClick}
                    marginRight="0"
                  />
                }
              />
              <ErrorMessage name="repetirSenha">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="rua"
                name="street"
                placeholder="Rua"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.street}
              />
              <ErrorMessage name="street">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="bairro"
                name="neighborhood"
                placeholder="Bairro"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.neighborhood}
              />
              <ErrorMessage name="neighborhood">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="numero"
                name="number"
                placeholder="Número"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.number}
              />
              <ErrorMessage name="number">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="cidade"
                name="city"
                placeholder="Cidade"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.city}
              />
              <ErrorMessage name="city">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>

              <Field
                as={InputField}
                id="estado"
                name="state"
                placeholder="Estado"
                focusBorderColor="red.500"
                borderRadius="40px"
                mb={4}
                onChange={handleChange}
                value={values.state}
              />
              <ErrorMessage name="state">
                {(msg) => (
                  <Text color="red.500" fontSize="sm">
                    {msg}
                  </Text>
                )}
              </ErrorMessage>
            </Stack>

            <Stack spacing={3} mt={5}>
              <ActionButton
                type="submit"
                isLoading={isSubmitting}
                loadingText="Carregando..."
                backgroundColor="red.500"
                color="white"
                borderRadius="50px"
                _hover={{ bg: "red.600" }}
                onClick={() => {
                  handleSubmit(values, setSubmitting);
                }}
                titulo="Cadastrar"
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
