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
import { MdMarkEmailRead } from "react-icons/md";
import ActionButton from "../Button/ActionButton";

interface ModalOrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOrderSuccess: React.FC<ModalOrderSuccessProps> = ({
  isOpen,
  onClose,
}) => {
  const modalWidth = useBreakpointValue({ base: "100%", sm: "80%", md: "80%" });
  const modalHeight = useBreakpointValue({ base: "auto", md: "350px" });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" p={8} w={modalWidth} h={modalHeight}>
        <Center>
          <Box
            bg="#EA1D2C1A"
            w="80px"
            h="80px"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <MdMarkEmailRead size="40px" color="#EA1D2C" />
          </Box>
        </Center>

        <ModalHeader>Pedido feito com sucesso!</ModalHeader>
        <ModalBody>
          <Text mb={4} textAlign="center" noOfLines={3}>
            Acompanhe seu pedido através do número fornecido.
          </Text>

          <ActionButton
            titulo="Acompanhar pedido"
            onClick={onClose}
            borderRadius="40px"
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
