import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Category from "../../../../components/Category/Category";
import PromotionBanner from "../../../../components/PromotionBanner/PromotionBanner";

const CATEGORIES = [
  {
    titulo: "Lanches",
    isActive: true,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Pizzarias",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png"
  },
];

const CategoriesList: React.FC = () => {
  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        gap={1}
        my={1}
        p={5}
      >
        <Text as={"p"} fontSize={20} fontWeight={500}>
          Categorias
        </Text>
      </Box>
      <Stack
        gap={1}
        direction={"row"}
        width={"100%"}
        px={5}
        overflowX={"scroll"}
      >
        {CATEGORIES.map((categoria) => (
          <Category titulo={categoria.titulo} imagem={categoria.imagem} isActive={categoria.isActive} />
        ))}
      </Stack>
      <Stack gap={1} direction={"row"} width={"100%"} my={3} px={5}>
        <PromotionBanner
          imagem="/img/pizza.png"
          textoAltImagem="Imagem de uma Pizza"
          textoPromocao="Pizzas com 20% de Desconto!"
          textoSecundario="Oferta por tempo ilimitado, então, aproveite agora!"
          textoBotao="PEÇA AGORA"
        />
      </Stack>
    </>
  );
};

export default CategoriesList;
