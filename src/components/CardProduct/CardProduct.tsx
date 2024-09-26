import React from "react";
import { CardProductWrapper } from "./style";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import theme from "../../styles/global";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type Props = {
  titulo: string;
  descricao: string;
  preco: number;
  imagem: string;
  id: number;
};

const CardProduct: React.FC<Props> = ({
  titulo,
  descricao,
  preco,
  imagem,
  id,
}: Props) => {
  const navigate = useNavigate();

  const handleGoToProductDetailsPage = () => {
    navigate(`/produto/${id}`);
  };

  return (
    <CardProductWrapper>
      <Box width="100%" textAlign={"right"}>
        <Icon as={BiHeart} cursor={"pointer"} />
      </Box>
      <Box onClick={handleGoToProductDetailsPage}>
        <img
          src={imagem}
          alt={titulo}
          width={"100%"}
          height={"auto"}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box
        width="100%"
        textAlign={"left"}
        cursor={"pointer"}
        onClick={handleGoToProductDetailsPage}
      >
        <Text fontWeight={"bold"}>{titulo}</Text>
      </Box>
      <Box width={"100%"} cursor={"pointer"}>
        {descricao}
      </Box>
      <Box
        width="100%"
        textAlign={"left"}
        cursor={"pointer"}
        onClick={handleGoToProductDetailsPage}
      >
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
