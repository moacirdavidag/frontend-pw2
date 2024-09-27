import { Box, Text, VStack, Icon, HStack } from "@chakra-ui/react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { IoMdNotifications } from "react-icons/io";

const NotificationsScreen = () => {
  const notificacoes = [
    {
      id: 1,
      titulo: "Você ganhou frete grátis",
      descricao: (
        <Text color="#717171">
          Resgate agora e use onde quiser. Vem fazer seu pedido!
        </Text>
      ),
    },
    {
      id: 2,
      titulo: "Esse cupom é para você!",
      descricao: (
        <Text color="#717171">
          Resgate agora o cupom{" "}
          <Text as="span" color="#EA1D2C" fontWeight="bold">
            BURGUER10
          </Text>{" "}
          e ganhe desconto!
        </Text>
      ),
    },
    {
      id: 3,
      titulo: (
        <>
          Frete grátis em{" "}
          <Text as="span" color="#EA1D2C" fontWeight="bold">
            pizza!
          </Text>
        </>
      ),
      descricao: (
        <Text color="#717171">
          Não perca essa promoção. Frete grátis em qualquer{" "}
          <Text as="span" color="#EA1D2C" fontWeight="bold">
            pizzaria
          </Text>
          .
        </Text>
      ),
    },
    {
      id: 4,
      titulo: "Esse cupom é para você!",
      descricao: (
        <Text color="#717171">
          Resgate agora o cupom{" "}
          <Text as="span" color="#EA1D2C" fontWeight="bold">
            PIZZA10
          </Text>{" "}
          e ganhe desconto!
        </Text>
      ),
    },
  ];

  return (
    <PageLayout shouldDisplayHeader={true}>
      <VStack spacing={4} p={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Notificações
        </Text>
        <VStack spacing={2} w="100%" flex="1">
          {notificacoes.map((notificacao) => (
            <HStack
              key={notificacao.id}
              bg="white"
              p={8}
              w="100%"
              borderRadius="10px"
              border="1px solid #E2E8F0"
              spacing={4}
            >
              <Box
                bg="#fad1d4"
                p={2}
                width="60px"
                height="60px"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={IoMdNotifications} color="#EA1D2C" boxSize={8} />
              </Box>
              <Box flex="1">
                <Text fontWeight="bold">{notificacao.titulo}</Text>
                {notificacao.descricao}
              </Box>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </PageLayout>
  );
};

export default NotificationsScreen;
