import { Box, Heading, Stack, Flex, useToast } from "@chakra-ui/react";
import { InputField } from "../../components/InputField/InputField";
import ActionButton from "../../components/Button/ActionButton";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { IoArrowBack } from "react-icons/io5";

const NewAddressPerfil = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const initialValues = {
    street: "",
    neighborhood: "",
    number: "",
    complement: "",
    city: "",
    state: "",
    reference: "",
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      // Aqui pode enviar os dados do novo endereço para a API
      console.log("Endereço salvo:", values);

      toast({
        title: "Endereço salvo com sucesso!",
        description: "O novo endereço foi adicionado ao seu perfil.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });

      navigate("/perfil");
    } catch (error) {
      toast({
        title: "Erro ao salvar o endereço.",
        description: "Ocorreu um erro ao tentar salvar o endereço.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box p={5} maxW="1200px" mx="auto">
      <Flex alignItems="center" mb={6}>
        <Box>
          <ActionButton
            titulo=""
            icon={<IoArrowBack />}
            p="0"
            width="26px"
            height="46px"
            borderRadius="50%"
            fontSize="25px"
            background="#EA1D2C"
            color="white"
            onClick={() => navigate("/perfil")}
          />
        </Box>

        <Heading
          as="h1"
          fontSize="24px"
          fontWeight="semibold"
          ml={4}
          textAlign="left"
        >
          Novo Endereço
        </Heading>
      </Flex>

      {/* Formulário de Novo Endereço */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
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

            {/* Botão de Salvar Endereço */}
            <Flex justifyContent="flex-end" mt={4}>
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
                  onClick={() =>
                    handleSubmit(values, { setSubmitting: () => {} })
                  }
                />
              </Stack>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewAddressPerfil;
