import React, { useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ActionButton from "../Button/ActionButton";
import TitleWithSubtitle from "../TitleWithSubtitle/TittleWithSub";
import { InputField } from "../InputField/InputField";

const RegisterForm: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      {/* Título e subtítulo */}
      <Box textAlign="left" mb={2}>
        <TitleWithSubtitle
          title="Cadastre-se"
          subtitle="Siga o passo a passo para fazer o cadastro."
          textAlign="left"
        />
      </Box>

      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        isFitted
        variant="unstyled"
      >
        <TabList justifyContent="center" mb="1em">
          <Tab
            fontWeight="bold"
            color={tabIndex === 0 ? "#3E3E3E" : "#3E3E3E"}
            borderBottom={
              tabIndex === 0 ? "2px solid red" : "2px solid #DCDCDC"
            }
          >
            {tabIndex === 0 ? "Dados Pessoais" : ""}
          </Tab>
          <Tab
            fontWeight="bold"
            color={tabIndex === 1 ? "#3E3E3E" : "#3E3E3E"}
            borderBottom={
              tabIndex === 1 ? "2px solid red" : "2px solid #DCDCDC"
            }
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {tabIndex === 1 ? "Dados de Endereço" : ""}
          </Tab>
        </TabList>

        <TabPanels>
          {/* Formulário de Dados Pessoais */}
          <TabPanel>
            <InputField
              id="nome"
              placeholder="Nome Completo"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="cpf"
              placeholder="CPF"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="telefone"
              placeholder="Telefone"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="email"
              placeholder="E-mail"
              type="email"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            {/* Usando InputField para os campos de senha */}
            <InputField
              id="senha"
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              focusBorderColor="red.500"
              borderRadius="40px"
              inputRightElement={
                <IconButton
                  variant="ghost"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleShowClick}
                  marginRight="0"
                />
              }
              mb={4}
            />
            <InputField
              id="repetir-senha"
              placeholder="Repita sua senha"
              type={showPassword ? "text" : "password"}
              focusBorderColor="red.500"
              borderRadius="40px"
              inputRightElement={
                <IconButton
                  variant="ghost"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleShowClick}
                  marginRight="0"
                />
              }
              mb={4}
            />
            <ActionButton
              titulo="Próximo"
              onClick={() => setTabIndex(1)} // Vai para o próximo formulário
              background="red.500"
            />
          </TabPanel>

          {/* Formulário de Dados de Endereço */}
          <TabPanel>
            <InputField
              id="rua"
              placeholder="Rua"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="bairro"
              placeholder="Bairro"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="numero"
              placeholder="Número"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="complemento"
              placeholder="Complemento"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="cidade"
              placeholder="Cidade"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="estado"
              placeholder="Estado"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />
            <InputField
              id="referencia"
              placeholder="Ponto de Referência"
              focusBorderColor="red.500"
              borderRadius="40px"
              mb={4}
            />

            <Box display="flex" justifyContent="space-between" mt={2} gap={4}>
              <ActionButton
                titulo="Voltar"
                onClick={() => setTabIndex(0)} // Voltar ao formulário anterior
                background="#FCFCFC"
                color="gray.600"
                border="1px solid #DCDCDC"
                hover={{ bg: "gray.400" }}
                width="45%"
                fontSize="14px"
              />
              <ActionButton
                titulo="Finalizar"
                onClick={() => alert("Cadastro finalizado!")} // Implementar a lógica do cadastro
                background="red.500"
                width="45%"
                fontSize="14px"
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RegisterForm;
