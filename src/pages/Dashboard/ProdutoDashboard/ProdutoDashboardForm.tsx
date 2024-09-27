import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import API from "../../../services/api";
import theme from "../../../styles/global";

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  descricao: Yup.string().required("Campo obrigatório"),
  preco: Yup.number()
    .required("Campo obrigatório")
    .typeError("Deve ser um número"),
  categoria_id: Yup.number()
    .required("Campo obrigatório")
    .typeError("Deve ser um número"),
});

const ProdutoDashboardForm: React.FC = () => {
  const { id } = useParams();
  const initialValues = {
    nome: "",
    descricao: "",
    preco: "",
    categoria_id: "",
  };
  const toast = useToast();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);

  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (values: any) => {
    if (!file) {
      toast({
        title: "Upload de Imagem Necessário",
        description: "Você deve fazer o upload de uma imagem de produto.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    const formData = new FormData();
    formData.append("nome", values.nome);
    formData.append("descricao", values.descricao);
    formData.append("preco", values.preco);
    formData.append("categoria_id", Number(values.categoria_id));
    formData.append("path_imagem", file);

    try {
      let response;
      if (id) {
        response = await API.put(`/produtos/${id}`, formData);
      } else {
        response = await API.post(`/produtos`, formData);
      }

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Sucesso!",
          description: "Produto salvo com sucesso.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/dashboard/produtos");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar o produto.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getProduto = async () => {
    try {
      await API.get(`/produtos/${id}`).then((response) => {
        if (response.status === 200) {
          const { nome, descricao, preco, categoria } = response.data;
          setProduto({
            nome,
            descricao,
            preco,
            categoria_id: categoria?.id,
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getCategorias = async () => {
    try {
      await API.get("/categorias").then((response) => {
        if (response.status === 200) {
          setCategorias(response.data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategorias();
    if (id) {
      getProduto();
    }
  }, []);

  return (
    <Box w="100%" p={6}>
      <HStack mt={4} mb={4} spacing={4} alignItems="center">
        <Box
          bg="#FEF2F3"
          p={2}
          width="56px"
          height="56px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="12px"
        >
          <Icon as={PiHamburgerBold} color="#EA1D2C" boxSize={8} />
        </Box>
        <Text fontSize="2xl" fontWeight="bold" color="#EA1D2C">
          {id ? "Editar" : "Criar"} Produto
        </Text>
      </HStack>
      <Formik
        initialValues={produto}
        onSubmit={handleSubmit}
        enableReinitialize
        validateOnChange
        validateOnBlur
      >
        {({
          values,
          handleChange,
          isSubmitting,
          setSubmitting,
          handleBlur,
        }) => (
          <Form>
            <FormControl isInvalid={!values?.nome}>
              <FormLabel htmlFor="nome">Nome do Produto</FormLabel>
              <Input
                id="nome"
                name="nome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nome}
                placeholder="Nome do produto"
              />
              <FormErrorMessage>{values.nome}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!values.descricao}>
              <FormLabel htmlFor="descricao">Descrição</FormLabel>
              <Input
                id="descricao"
                name="descricao"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descricao}
                placeholder="Descrição do produto"
              />
              <FormErrorMessage>{values.descricao}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!values.preco}>
              <FormLabel htmlFor="preco">Preço</FormLabel>
              <Input
                id="preco"
                name="preco"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.preco}
                placeholder="Preço do produto"
              />
              <FormErrorMessage>{values.preco}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!values.categoria_id}>
              <FormLabel htmlFor="categoria_id">Categoria do produto</FormLabel>
              <Select
                id="categoria_id"
                name="categoria_id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoria_id}
                placeholder="Selecione a categoria"
              >
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{values.categoria_id}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="path_imagem">Imagem do Produto</FormLabel>
              <Input
                id="path_imagem"
                name="path_imagem"
                type="file"
                onChange={(event) => {
                  const selectedFile = event.currentTarget.files[0];
                  setFile(selectedFile);
                }}
                onBlur={handleBlur}
              />
            </FormControl>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              sx={{
                backgroundColor: theme.colors.primary,
                color: "white",
              }}
            >
              {id ? "Atualizar Produto" : "Criar Produto"}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProdutoDashboardForm;
