import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../styles/global";

type Props = {
  nome: string;
  status: string;
  imagem: string;
  numeroPedido: string;
};

const ProdutoPedido: React.FC<Props> = ({ nome, status, imagem, numeroPedido }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      borderRadius={"8px"}
      gap={2}
      border={"1px solid #DCDCDC"}
      height={"100px"}
    >
      <Box width={"30%"}>
        <img src={imagem} alt={nome} width={"100%"} height={"auto"} />
      </Box>
      <Stack direction={"column"} gap={1}>
        <Text color={String(status).toLowerCase() !== "finalizado" ? theme.colors.primary : theme.colors.success}>{status}</Text>
        <Text fontWeight={"bold"} fontSize={18}>{nome}</Text>
        <Text color={theme.colors.text}>Pedido Nº - {numeroPedido}</Text>
      </Stack>
    </Stack>
  );
};

export default ProdutoPedido;
