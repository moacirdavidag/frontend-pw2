import React from "react";
import { HeaderWrapper } from "./style";
import { Avatar, Box, Icon, Stack, Text } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Stack direction="row" gap={2} alignItems={"center"} cursor={"pointer"}>
        <Icon as={IoLocation} color={"white"} w={6} h={6} />
        <Text fontWeight={500} color={"white"}>
          Cajazeiras, PB
        </Text>
        <Icon as={MdKeyboardArrowDown} color={"white"} w={6} h={6} />
      </Stack>
      <Box>
        <Avatar style={{ width: "30px", height: "30px" }} />
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
