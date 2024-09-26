import {
  Box,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PiHamburgerBold, PiPencilBold, PiTrashBold } from "react-icons/pi";
import ActionButton from "../../../components/Button/ActionButton";
import { useNavigate } from "react-router-dom";
import API from "../../../services/api";

const pedidosIniciais = [
  { id: "2568-55", nome: "Baconzudo Cheddar", preco: "R$ 24,99" },
  { id: "3341-98", nome: "Cheddar Australiano", preco: "R$ 34,99" },
  { id: "6678-83", nome: "Baconzudo Cheddar", preco: "R$ 24,99" },
  { id: "3456-92", nome: "Salada com Frango", preco: "R$ 26,99" },
  { id: "7723-83", nome: "Batata Frita Palito", preco: "R$ 12,99" },
];

type Produto = {
  nome: string;
  id: number;
  descricao: string;
  preco: number;
  categoria: {
    descricao: string;
  };
};
const ProdutoDashboard = () => {
  const [pedidos, setPedidos] = useState(pedidosIniciais);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const deletarProduto = (id: number) => {
    // const pedidosAtualizados = pedidos.filter((pedido) => pedido.id !== id);
    // setPedidos(pedidosAtualizados);
  };

  const getProdutos = async () => {
    try {
      await API.get("/produtos").then((response) => {
        if (response.status === 200) {
          setProdutos(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const editarProduto = (id: number) => {
    navigate(`/pedido/${id}`);
  };

  useEffect(() => {
    getProdutos();
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
          Produtos
        </Text>
      </HStack>

      <Table variant="simple" size="md" bg="#FFFFFF" borderRadius="14px">
        <Thead>
          <Tr>
            <Th color="#EA1D2C">ID</Th>
            <Th color="#EA1D2C">Nome</Th>
            <Th color="#EA1D2C">Preço</Th>
            <Th color="#EA1D2C">Descrição</Th>
            <Th color="#EA1D2C">Categoria</Th>
            <Th color="#EA1D2C">Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {produtos.map((produto: Produto) => (
            <Tr key={produto.id}>
              <Td>{produto.id}</Td>
              <Td>{produto.nome}</Td>
              <Td>
                {Number(produto.preco).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Td>
              <Td>
                {produto?.descricao}
              </Td>
              <Td>
                {produto?.categoria?.descricao}
              </Td>
              <Td>
                <HStack gap={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="37px"
                    height="37px"
                    borderRadius="4px"
                  >
                    <ActionButton
                      titulo=""
                      icon={<PiPencilBold />}
                      borderRadius="4px"
                      padding="0 0 0 5px"
                      fontSize="20px"
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      background="#FDB600"
                      color="white"
                      hover={{ bg: "yellow.600" }}
                      onClick={() => editarProduto(produto.id)}
                    />
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="37px"
                    height="37px"
                    borderRadius="4px"
                  >
                    <ActionButton
                      titulo=""
                      icon={<PiTrashBold />}
                      borderRadius="4px"
                      padding="0 0 0 5px"
                      fontSize="20px"
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      background="#EA1D2C"
                      color="white"
                      hover={{ bg: "red.600" }}
                      onClick={() => deletarProduto(produto.id)}
                    />
                  </Box>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProdutoDashboard;
