import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import useIsMobile from "../../hooks/useIsMobile";
import { Box, Grid, GridItem, Stack, Text, Textarea } from "@chakra-ui/react";
import BotaoVoltarDetalhesProdutos from "../../components/BotaoVoltarDetalhesProdutos/BotaoVoltarDetalhesProdutos";
import InfoProduto from "./components/InfoProduto/InfoProduto";
import Ingrediente from "./components/Ingrediente/Ingrediente";
import ResumoPedido from "./components/ResumoPedido/ResumoPedido";
import ActionButton from "../../components/Button/ActionButton";

const DetalhesProduto: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <PageLayout shouldDisplayHeader={true}>
      {isMobile ? (
        <Box width="100%" p={5}>
          <BotaoVoltarDetalhesProdutos />
          <InfoProduto
            nome="Baconzudo com muita carne"
            preco={24.99}
            descricao="LOREM IMPSUM LALALALALALALAL OEOEHSJSHJ DHJSJHSJHJ EUEEDJ"
            imagem="/img/hamburguer.png"
          />
          <Box my={3}>
            <Ingrediente />
          </Box>
          <Stack direction={"column"} gap={2} my={2}>
            <Text fontWeight={"bold"}>Alguma observação?</Text>
            <Textarea
              borderRadius={"8px"}
              placeholder="Ex: tire tal ingrediente, etc."
            ></Textarea>
          </Stack>
          <ResumoPedido />
          <ActionButton titulo="FINALIZAR" onClick={() => {}} />
        </Box>
      ) : (
        <Grid
          p={1}
          width={"100vw"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexDirection={"row"}
        >
          <GridItem width={"50%"} display={"flex"} justifyContent={"center"}>
            <img
              src={"/img/hamburguer.png"}
              alt={"Hamburguer"}
              width={"100%"}
              height={"auto"}
            />
          </GridItem>
          <GridItem width={"50%"}>
            <InfoProduto
              nome="Baconzudo com muita carne"
              preco={24.99}
              descricao="LOREM IMPSUM LALALALALALALAL OEOEHSJSHJ DHJSJHSJHJ EUEEDJ"
              imagem="/img/hamburguer.png"
            />
            <Box my={4}>
              <Ingrediente />
              <Ingrediente />
            </Box>
            <Stack direction={"column"} gap={2} my={4}>
              <Text fontWeight={"bold"}>Alguma observação?</Text>
              <Textarea
                borderRadius={"8px"}
                placeholder="Ex: tire tal ingrediente, etc."
              ></Textarea>
            </Stack>
            <ResumoPedido />
            <ActionButton titulo="FINALIZAR" onClick={() => {}} height={"auto"} my={3} />
          </GridItem>
        </Grid>
      )}
    </PageLayout>
  );
};

export default DetalhesProduto;
