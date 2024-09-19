import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import DadosPessoaisForm from "../../components/Form/DadosPessoaisForm";
import DadosEnderecoForm from "../../components/Form/DadosEnderecoForm";
import { Header } from "../../components/Header/Header";
const RegisterScreen = () => {
  const [isPersonalData, setIsPersonalData] = useState(true);

  return (
    <PageLayout>
      <Header logoSrc="src/assets/imgs/logo.png" />

      <Box>
        <Heading as="h2" size="lg">
          Cadastre-se
        </Heading>
        <Text>Siga o passo a passo para fazer o cadastro.</Text>

        {/* Condicional para trocar entre formulários */}
        {isPersonalData ? <DadosPessoaisForm /> : <DadosEnderecoForm />}

        <Box display="flex" justifyContent="space-between" mt="4">
          {!isPersonalData && (
            <Button onClick={() => setIsPersonalData(true)}>Voltar</Button>
          )}
          {isPersonalData ? (
            <Button colorScheme="red" onClick={() => setIsPersonalData(false)}>
              Próximo
            </Button>
          ) : (
            <Button
              colorScheme="red"
              onClick={() => {
                /* Finalizar lógica */
              }}
            >
              Finalizar
            </Button>
          )}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default RegisterScreen;
