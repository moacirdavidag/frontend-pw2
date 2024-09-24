import React from "react";
import { CardProductWrapper } from "./style";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import theme from "../../styles/global";
import { BiHeart } from "react-icons/bi";

type Props = {
  titulo: string;
  descricao: string;
  preco: number;
  imagem: string;
};

const CardProduct: React.FC<Props> = ({
  titulo,
  descricao,
  preco,
  imagem,
}: Props) => {
  return (
    <CardProductWrapper>
      <Box width="100%" textAlign={"right"}>
        <Icon as={BiHeart} />
      </Box>
      <Box>
        <img src={imagem} alt={titulo} width={"100%"} height={"auto"} />
      </Box>
      <Box width="100%" textAlign={"left"}>
        <Text fontWeight={"bold"}>{titulo}</Text>
      </Box>
      <Box>{descricao}</Box>
      <Box width="100%" textAlign={"left"}>
        <Text fontWeight={"bold"} color={theme.colors.primary}>
          {Number(preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </Box>
    </CardProductWrapper>
  );
};

export default CardProduct;
