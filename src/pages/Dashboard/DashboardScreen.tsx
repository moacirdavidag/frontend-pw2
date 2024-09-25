import { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  HStack,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { PiPencilBold, PiTrashBold, PiHamburgerBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/Button/ActionButton";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";

const pedidosIniciais = [
  { id: "2568-55", nome: "Baconzudo Cheddar", preco: "R$ 24,99" },
  { id: "3341-98", nome: "Cheddar Australiano", preco: "R$ 34,99" },
  { id: "6678-83", nome: "Baconzudo Cheddar", preco: "R$ 24,99" },
  { id: "3456-92", nome: "Salada com Frango", preco: "R$ 26,99" },
  { id: "7723-83", nome: "Batata Frita Palito", preco: "R$ 12,99" },
];

const Dashboard = () => {
  const [pedidos, setPedidos] = useState(pedidosIniciais);
  const navigate = useNavigate();

  const deletarPedido = (id: string) => {
    const pedidosAtualizados = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(pedidosAtualizados);
  };

  const editarPedido = (id: string) => {
    navigate(`/pedido/${id}`);
  };

  return (
    <PageLayout shouldDisplayHeader={true}>
      <Flex w="100%" h="100%">
        <VStack
          w="250px"
          h="100vh"
          p={4}
          bg="white"
          spacing={6}
          align="flex-start"
          borderRight="1px solid #E2E8F0"
        >
          <Header logoSrc="src/assets/imgs/logo.png" />
          <Box
            bg="#FEF2F3"
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
          >
            <Icon as={PiHamburgerBold} color="#EA1D2C" boxSize={5} />
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Pedidos
            </Text>
          </Box>
        </VStack>

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
              Pedidos
            </Text>
          </HStack>

          <Table variant="simple" size="md" bg="#FFFFFF" borderRadius="14px">
            <Thead>
              <Tr>
                <Th color="#EA1D2C">ID</Th>
                <Th color="#EA1D2C">Nome</Th>
                <Th color="#EA1D2C">Preço</Th>
                <Th color="#EA1D2C">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pedidos.map((pedido) => (
                <Tr key={pedido.id}>
                  <Td>{pedido.id}</Td>
                  <Td>{pedido.nome}</Td>
                  <Td>{pedido.preco}</Td>
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
                          onClick={() => editarPedido(pedido.id)}
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
                          onClick={() => deletarPedido(pedido.id)}
                        />
                      </Box>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </PageLayout>
  );
};

export default Dashboard;
