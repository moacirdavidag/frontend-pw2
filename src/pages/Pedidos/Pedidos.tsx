import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import useIsMobile from "../../hooks/useIsMobile";
import { Box, Button, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import theme from "../../styles/global";
import ProdutoPedido from "../../components/ProdutoPedido/ProdutoPedido";

const Pedidos: React.FC = () => {
  const isMobile = useIsMobile();
  const [statusPedidos, setStatusPedidos] = useState("em_andamento");

  const handleChangeStatusPedidos = (status: string) => {
    setStatusPedidos(status);
  };

  return (
    <PageLayout shouldDisplayHeader={true}>
      {isMobile ? (
        <Box width="100%" minHeight={"100vh"} p={5}>
          <Stack width={"100%"} direction="row" gap={2}>
            <Button
              borderRadius={"8px"}
              sx={{
                flex: 1,
                backgroundColor:
                  statusPedidos === "em_andamento" ? theme.colors.primary : "",
                color: statusPedidos === "em_andamento" ? "white" : "",
              }}
              onClick={() => {
                handleChangeStatusPedidos("em_andamento");
              }}
            >
              Em andamento
            </Button>
            <Button
              borderRadius={"8px"}
              sx={{
                flex: 1,
                backgroundColor:
                  statusPedidos === "finalizados" ? theme.colors.primary : "",
                color: statusPedidos === "finalizados" ? "white" : "",
              }}
              onClick={() => {
                handleChangeStatusPedidos("finalizados");
              }}
            >
              Finalizados
            </Button>
          </Stack>
          <Stack direction="column" gap={2} my={4}>
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Finalizado"
              numeroPedido="0001"
              imagem="/img/hamburguer.png"
            />
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Finalizado"
              numeroPedido="0002"
              imagem="/img/hamburguer.png"
            />
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Em preparação"
              numeroPedido="0003"
              imagem="/img/hamburguer.png"
            />
          </Stack>
        </Box>
      ) : (
        <Box width="100%" minHeight={"100vh"} p={5}>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            my={10}
          >
            <Box width={"50%"}>
              <Text fontSize={24} fontWeight={"bold"}>
                Pedidos
              </Text>
            </Box>
            <Stack width={"50%"} direction="row" gap={2}>
              <Button
                borderRadius={"8px"}
                sx={{
                  flex: 1,
                  backgroundColor:
                    statusPedidos === "em_andamento"
                      ? theme.colors.primary
                      : "",
                  color: statusPedidos === "em_andamento" ? "white" : "",
                }}
                onClick={() => {
                  handleChangeStatusPedidos("em_andamento");
                }}
              >
                Em andamento
              </Button>
              <Button
                borderRadius={"8px"}
                sx={{
                  flex: 1,
                  backgroundColor:
                    statusPedidos === "finalizados" ? theme.colors.primary : "",
                  color: statusPedidos === "finalizados" ? "white" : "",
                }}
                onClick={() => {
                  handleChangeStatusPedidos("finalizados");
                }}
              >
                Finalizados
              </Button>
            </Stack>
          </Stack>
          <SimpleGrid columns={3} spacing={5} my={20}>
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Finalizado"
              numeroPedido="0001"
              imagem="/img/hamburguer.png"
            />
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Finalizado"
              numeroPedido="0002"
              imagem="/img/hamburguer.png"
            />
            <ProdutoPedido
              nome="Baconzudo tal tal"
              status="Em preparação"
              numeroPedido="0003"
              imagem="/img/hamburguer.png"
            />
          </SimpleGrid>
        </Box>
      )}
    </PageLayout>
  );
};

export default Pedidos;
