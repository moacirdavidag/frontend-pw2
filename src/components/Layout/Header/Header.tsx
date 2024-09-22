import React from "react";
import { HeaderWrapper } from "./style";
import {
  Avatar,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import { IoLocation, IoPerson } from "react-icons/io5";
import theme from "../../../styles/global";

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
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                <Avatar style={{ width: "30px", height: "30px" }} />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<Icon as={IoPerson} color={theme.colors.primary} />}>Perfil</MenuItem>
                <MenuItem icon={<Icon as={MdLogout} color={theme.colors.primary} />} onClick={() => alert("Kagebunshin")}>
                  Sair
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
