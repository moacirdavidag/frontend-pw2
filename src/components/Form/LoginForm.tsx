import React, { useState } from "react";
import {
  Box,
  InputRightElement,
  IconButton,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { InputField } from "../InputField/InputField";
import { PageLayout } from "../PageLayout/PageLayout";
import { Illustration } from "../illustration/Illustration";
import { MdLogin } from "react-icons/md";
import ActionButton from "../Button/ActionButton";
import TitleWithSubtitle from "../TitleWithSubtitle/TittleWithSub";
import * as Yup from "yup";
import API from "../../services/api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import theme from "../../styles/global";
import { useAuth } from "../../context/AuthContext";

const validationSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatória"),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();
  const { login } = useAuth();


  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: any
  ) => {
    try {
      const response = await API.post("/auth/login", {
        email: values.email,
        password: values.password,
      });
      if (response.status === 201) {
        const {access_token, username, id} = response.data;
        login(access_token);
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        toast({
          title: "Login bem-sucedido!",
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
        title: "Erro no login",
        description: "Email ou senha incorretos. Tente novamente.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.error("Erro ao fazer login:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Illustration
        src="src/assets/imgs/motoca.png"
        alt="Imagem de Boas Vindas - Motoca"
        mb="4"
      />

      <TitleWithSubtitle
        title="Fazer Login"
        subtitle="Informe seu email e senha."
        textAlign="center"
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
        enableReinitialize={true}
      >
        {({ values, setSubmitting, isSubmitting }) => (
          <Form>
            <Stack spacing="4" width="full">
              {/* Campo de Email */}
              <Field
                as={InputField}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                aria-label="Email"
                focusBorderColor="red.500"
                borderRadius="40px"
              />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <Text color={theme.colors.primary} fontSize="sm">
                    {msg}
                  </Text>
                )}
              />

              {/* Campo de Senha */}
              <Field
                as={InputField}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                aria-label="Senha"
                focusBorderColor="red.500"
                borderRadius="40px"
                inputRightElement={
                  <InputRightElement width="3rem">
                    <IconButton
                      variant="ghost"
                      aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={handleShowClick}
                    />
                  </InputRightElement>
                }
              />
              <ErrorMessage
                name="password"
                render={(msg) => (
                  <Text color={theme.colors.primary} fontSize="sm">
                    {msg}
                  </Text>
                )}
              />

              {/* Link Esqueci minha senha */}
              <Box textAlign="left" mb="4">
                <Text
                  fontSize="14px"
                  fontWeight="semibold"
                  color="gray.600"
                  cursor="pointer"
                  onClick={() => navigate("/forgot-password")}
                >
                  Esqueci minha senha
                </Text>
              </Box>

              {/* Botão Entrar */}
              <ActionButton
                titulo="Entrar"
                icon={<MdLogin />}
                type="submit"
                isLoading={isSubmitting}
                background="red.500"
                color="white"
                onClick={() => {
                  handleSubmit(values, setSubmitting);
                }}
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </PageLayout>
  );
};

export default LoginForm;
