import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../../../styles/global";

const ResumoPedido: React.FC = () => {
  return (
    <Stack
      borderRadius={"8px"}
      p={"16px"}
      direction={"column"}
      gap={2}
      my={2}
      border={"1px solid #DCDCDC"}
    >
      <Box width={"100%"}>
        <Text fontWeight={"bold"}>Resumo do pedido</Text>
      </Box>
      <Divider my={1} />
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack width={"50%"} direction={"row"} alignItems={"center"} gap={2}>
          <Text fontWeight={500}>Quantidade:</Text>
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
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack width={"50%"} direction={"row"} alignItems={"center"} gap={2}>
          <Text fontWeight={500}>Total:</Text>
        </Stack>
        <Stack
          width={"50%"}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={2}
        >
          <Text fontWeight={600} color={theme.colors.primary}>R$ 24,99</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ResumoPedido;
