import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../../../styles/global";

const Ingrediente: React.FC = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}
    >
      <Stack width={"50%"} direction={"row"} alignItems={"center"} gap={2}>
        <Box
          sx={{
            width: "64px",
            height: "64px",
            border: "1px solid #DCDCDC",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={"/img/hamburguer.png"}
            alt="Ingrediente"
            width="100%"
            height={"auto"}
          />
        </Box>
        <Stack direction={"column"} gap={1}>
          <Text fontWeight={500}>Calabresa</Text>
          <Text>+ R$ 2,50</Text>
        </Stack>
      </Stack>
      <Stack
        width={"50%"}
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={2}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: "1px solid #DCDCDC",
            background: "#F3F3F3",
            color: theme.colors.text,
            borderRadius: 9999,
            display: "flex",
            fontSize: "20px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          -
        </Box>
        <Box>
          <Text fontWeight={"bold"}>1</Text>
        </Box>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            background: theme.colors.primary,
            color: "white",
            borderRadius: 9999,
            display: "flex",
            fontSize: "20px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          +
        </Box>
      </Stack>
    </Stack>
  );
};

export default Ingrediente;
