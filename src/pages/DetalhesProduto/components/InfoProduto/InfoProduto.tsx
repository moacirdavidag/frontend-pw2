import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../../../styles/global";
import useIsMobile from "../../../../hooks/useIsMobile";

type Props = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

const InfoProduto: React.FC<Props> = ({
  nome,
  descricao,
  preco,
  imagem,
}: Props) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && (
        <Box
          my={1}
          width={"100%"}
          height={"250px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={imagem} alt={"Hamburguer"} width={"100%"} height={"auto"} />
        </Box>
      )}
      <Stack width="100%" direction="column" gap={2}>
        <Box width={"100%"}>
          <Text fontWeight="bold" fontSize={20}>
            {nome}
          </Text>
        </Box>
        <Box width={"100%"}>
          <Text textAlign={"justify"} fontSize={16}>
            {descricao}
          </Text>
        </Box>
        <Stack
          width="100%"
          justifyContent={"space-between"}
          direction="row"
          gap={2}
        >
          <Box>
            <Text fontWeight="bold" fontSize={20} color={theme.colors.primary}>
              {Number(preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Box>
          <Box width={"50%"}>
            <Text>20 - 30 min de entrega - Frete: R$ 5,00</Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default InfoProduto;
