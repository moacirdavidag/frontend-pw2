import React from "react";
import { CategoryWrapper } from "./style";
import { Box, Text } from "@chakra-ui/react";

type Props = {
    titulo: string,
    imagem: string,
    isActive: boolean,
}

const Category = ({titulo, imagem, isActive}: Props) => {
  return (
    <CategoryWrapper isActive={isActive}>
      <Box>
        <img src={imagem} alt={titulo} width={"40px"} height={"auto"} />
      </Box>
      <Box>
        <Text fontSize={18} fontWeight={500} color="white">
          {titulo}
        </Text>
      </Box>
    </CategoryWrapper>
  );
};

export default Category;
