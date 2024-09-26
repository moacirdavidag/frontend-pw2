import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import ActionButton from "../Button/ActionButton";

interface ModalOrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
}

const ModalOrderSuccess: React.FC<ModalOrderSuccessProps> = ({
  isOpen,
  onClose,
  orderId,
}) => {
  const modalWidth = useBreakpointValue({ base: "100%", sm: "80%", md: "80%" });
  const modalHeight = useBreakpointValue({ base: "auto", md: "350px" });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" p={8} w={modalWidth} h={modalHeight}>
        <Center>
          <Box
            w="80px"
            h="80px"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          ></Box>
        </Center>

        <ModalHeader color="green.500">Pedido feito com sucesso!</ModalHeader>
        <ModalBody>
          <Text mb={2} fontSize="lg" textAlign="center" color="gray.500">
            Acompanhe seu pedido
          </Text>
          <Text
            mb={4}
            fontSize="xl"
            textAlign="center"
            color="red.500"
            fontWeight="bold"
          >
            Nº {orderId}
          </Text>

          <ActionButton
            titulo="Acompanhar pedido"
            onClick={onClose}
            borderRadius="10px"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="50px"
            padding="12px 16px"
            gap="10px"
          />
        </ModalBody>

        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

export default ModalOrderSuccess;
