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
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderWrapper>
      {isMobile ? (
        <>
          <Stack
            direction="row"
            gap={2}
            alignItems={"center"}
            cursor={"pointer"}
          >
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
                    <MenuItem
                      icon={<Icon as={IoPerson} color={theme.colors.primary} />}
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={MdLogout} color={theme.colors.primary} />}
                      onClick={() => alert("Kagebunshin")}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </>
      ) : (
        <>
          <Stack
            width="100vw"
            direction={"row"}
            justifyContent={"space-around"}
          >
            <Stack gap={10} direction="row">
              <Box>
                <img src={"/img/logo.png"} alt="Logo" />
              </Box>
              <Stack direction="row" gap={5} alignItems={"center"}>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                  >
                    Pedidos
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                  >
                    Favoritos
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                  >
                    Notificações
                  </Text>
                </Box>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              gap={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                direction="row"
                gap={2}
                alignItems={"center"}
                cursor={"pointer"}
              >
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
                        <MenuItem
                          icon={
                            <Icon as={IoPerson} color={theme.colors.primary} />
                          }
                        >
                          Perfil
                        </MenuItem>
                        <MenuItem
                          icon={
                            <Icon as={MdLogout} color={theme.colors.primary} />
                          }
                          onClick={() => alert("Kagebunshin")}
                        >
                          Sair
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
            </Stack>
          </Stack>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
