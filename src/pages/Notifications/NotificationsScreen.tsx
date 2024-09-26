import { Box, Text, VStack, Icon, HStack } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";
import { PageLayout } from "../../components/PageLayout/PageLayout";

const NotificationsScreen = () => {
  const notificacoes = [
    {
      id: 1,
      titulo: "Você ganhou frete grátis",
      descricao: "Resgate agora e use onde quiser. Vem fazer seu pedido!",
    },
    {
      id: 2,
      titulo: "Esse cupom é para você!",
      descricao: "Resgate agora o cupom BURGUER10 e ganhe desconto!",
    },
    {
      id: 3,
      titulo: "Frete grátis em pizza!",
      descricao: "Não perca essa promoção. Frete grátis em qualquer pizzaria.",
    },
    {
      id: 4,
      titulo: "Esse cupom é para você!",
      descricao: "Resgate agora o cupom PIZZA10 e ganhe desconto!",
    },
  ];

  return (
    <PageLayout shouldDisplayHeader={true}>
      <VStack spacing={4} p={6} align="flex-start" minHeight={"100vh"}>
        <Text fontSize="2xl" fontWeight="bold">
          Notificações
        </Text>
        {notificacoes.map((notificacao) => (
          <HStack
            key={notificacao.id}
            bg="white"
            p={4}
            w="100%"
            borderRadius="md"
            border="1px solid #E2E8F0"
            spacing={4}
          >
            <Box
              bg="#FEF2F3"
              p={2}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FiBell} color="#EA1D2C" boxSize={6} />
            </Box>
            <Box>
              <Text fontWeight="bold">{notificacao.titulo}</Text>
              <Text>{notificacao.descricao}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </PageLayout>
  );
};

export default NotificationsScreen;
