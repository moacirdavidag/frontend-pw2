import React from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { IoFilter } from "react-icons/io5";
import theme from "../../../../styles/global";

const SearchBar: React.FC = () => {
  return (
    <Box width={"100%"} p={5}>
      <Stack width={"100%"} flexDirection={"row"} alignItems="center" gap={2}>
        <Box width={"85%"}>
          <InputGroup>
            <InputLeftElement pointerEvents={"none"}>
              <Icon as={Search2Icon} h={5} w={5} color={theme.colors.primary} />
            </InputLeftElement>
            <Input
              size={"lg"}
              width={"100%"}
              placeholder="Pesquisar..."
              sx={{ borderRadius: 10 }}
            />
          </InputGroup>
        </Box>
        <Box width="10%">
          <Button
            variant={"contained"}
            background={theme.colors.primary}
            color={"white"}
          >
            <Icon as={IoFilter} color="white" />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchBar;
