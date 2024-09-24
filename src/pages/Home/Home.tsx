import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import { Box, Stack, Text } from "@chakra-ui/react";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import theme from "../../styles/global";
import useIsMobile from "../../hooks/useIsMobile";

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <PageLayout shouldDisplayHeader={true}>
      {!isMobile && (
        <Box
          width={"100vw"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={2}
          my={1}
          p={5}
        >
          <Stack width={"50%"} my={3} px={5}>
            <PromotionBanner
              imagem="/img/pizza.png"
              textoAltImagem="Imagem de uma Pizza"
              textoPromocao="Pizzas com 20% de Desconto!"
              textoSecundario="Oferta por tempo ilimitado, então, aproveite agora!"
              textoBotao="PEÇA AGORA"
            />
          </Stack>
          <Stack width={"50%"} my={3} px={5}>
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
        </Box>
      )}
      {!isMobile ? (
        <>
          <Stack
            direction={"row"}
            gap={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
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
            <SearchBar />
          </Stack>
          <CategoriesList />
        </>
      ) : (
        <>
          <SearchBar />
          <CategoriesList />
        </>
      )}
    </PageLayout>
  );
};

export default Home;
