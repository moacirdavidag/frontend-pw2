import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Category from "../../../../components/Category/Category";
import PromotionBanner from "../../../../components/PromotionBanner/PromotionBanner";
import theme from "../../../../styles/global";
import CardProduct from "../../../../components/CardProduct/CardProduct";
import useIsMobile from "../../../../hooks/useIsMobile";

const CATEGORIES = [
  {
    titulo: "Lanches",
    isActive: true,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Pizzarias",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
  {
    titulo: "Saladas",
    isActive: false,
    imagem: "/img/hamburguer.png",
    descricao:
      "Delicioso hambúrguer para toda a família em promoção. É só essa semana!",
    preco: 24.99,
  },
];

const CategoriesList: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && (
        <Box
          width={"100vw"}
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
      )}

      <Stack
        gap={1}
        direction={"row"}
        width={"100vw"}
        px={5}
        sx={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {CATEGORIES.map((categoria) => (
          <Category
            titulo={categoria.titulo}
            imagem={categoria.imagem}
            isActive={categoria.isActive}
          />
        ))}
      </Stack>
      {isMobile && (
        <Stack width={"100vw"} my={3} px={5}>
          <PromotionBanner
            imagem="/img/pizza.png"
            textoAltImagem="Imagem de uma Pizza"
            textoPromocao="Pizzas com 20% de Desconto!"
            textoSecundario="Oferta por tempo ilimitado, então, aproveite agora!"
            textoBotao="PEÇA AGORA"
          />
        </Stack>
      )}

      <Stack
        width={"100vw"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={1}
        my={1}
        p={5}
      >
        <Text as={"p"} fontSize={20} fontWeight={500}>
          Hambúrgueres
        </Text>
        <Text
          as={"p"}
          color={theme.colors.primary}
          fontSize={20}
          fontWeight={500}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Ver tudo
        </Text>
      </Stack>
      <Stack
        gap={1}
        direction={"row"}
        width={"100vw"}
        px={5}
        sx={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        mb={50}
      >
        {CATEGORIES.map((categoria) => (
          <CardProduct
            titulo={categoria.titulo}
            imagem={categoria.imagem}
            descricao={categoria.descricao}
            preco={categoria.preco}
          />
        ))}
      </Stack>
      {isMobile && (
        <Stack width={"100vw"} my={3} px={5}>
          <PromotionBanner
            imagem="/img/delivery_man.png"
            textoAltImagem="Imagem de uma Pizza"
            textoPromocao="Pizzas com 20% de Desconto!"
            textoSecundario="Oferta por tempo ilimitado, então, aproveite agora!"
            textoBotao="PEÇA AGORA"
            backgroundBanner={theme.colors.primary}
            backgroundBotao={theme.colors.yellow}
          />
        </Stack>
      )}
    </>
  );
};

export default CategoriesList;
