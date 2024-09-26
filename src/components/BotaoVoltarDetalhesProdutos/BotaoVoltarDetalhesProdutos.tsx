import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../styles/global";
import { useNavigate } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";

const BotaoVoltarDetalhesProdutos: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack
      width={"250px"}
      direction={"row"}
      gap={2}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={() => {
        navigate("/home");
      }}
    >
      <Box
        sx={{
          borderRadius: 9999,
          backgroundColor: theme.colors.primary,
          color: "white",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon as={CgArrowLeft} fontSize={24} />
      </Box>
      <Box>
        <Text fontWeight={500} fontSize={18}>
          Detalhes do Produto
        </Text>
      </Box>
    </Stack>
  );
};

export default BotaoVoltarDetalhesProdutos;
