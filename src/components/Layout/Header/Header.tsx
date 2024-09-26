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
import theme from "../../../styles/global";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import {
  IoPerson,
  IoHeart,
  IoNotifications,
  IoPeople,
  IoInformationCircle,
  IoCall,
  IoList,
  IoLocation,
} from "react-icons/io5";

const Header: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const username = localStorage.getItem("username");
  const avatarUrl = localStorage.getItem("avatarUrl");

  const isActive = (path: string) => location.pathname === path;

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
                    <MenuItem>Olá, {username}!</MenuItem>
                    <MenuItem
                      icon={<Icon as={IoPerson} color={theme.colors.primary} />}
                      onClick={() => {
                        navigate("/perfil");
                      }}
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={IoList} color={theme.colors.primary} />}
                      onClick={() => {
                        navigate("/pedidos");
                      }}
                    >
                      Pedidos
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={IoHeart} color={theme.colors.primary} />}
                      onClick={() => {
                        navigate("/favoritos");
                      }}
                    >
                      Favoritos
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Icon
                          as={IoNotifications}
                          color={theme.colors.primary}
                        />
                      }
                      onClick={() => {
                        navigate("/notificacoes");
                      }}
                    >
                      Notificações
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={IoPeople} color={theme.colors.primary} />}
                      onClick={() => {
                        navigate("/equipe");
                      }}
                    >
                      Equipe
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Icon
                          as={IoInformationCircle}
                          color={theme.colors.primary}
                        />
                      }
                      onClick={() => {
                        navigate("/sobre");
                      }}
                    >
                      Sobre
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={IoCall} color={theme.colors.primary} />}
                      onClick={() => {
                        navigate("/contato");
                      }}
                    >
                      Contato
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
                      borderBottom: isActive("/home")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/home");
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
                      borderBottom: isActive("/pedidos")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/pedidos");
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
                      borderBottom: isActive("/favoritos")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/favoritos");
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
                      borderBottom: isActive("/notificacoes")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/notificacoes");
                    }}
                  >
                    Notificações
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: isActive("/equipe")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/equipe");
                    }}
                  >
                    Equipe
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: isActive("/sobre")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/sobre");
                    }}
                  >
                    Sobre
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: isActive("/contato")
                        ? `2px solid ${theme.colors.yellow}`
                        : "2px solid transparent",
                      transition: "border-color 0.3s ease",
                      "&:hover": {
                        borderBottom: `2px solid ${theme.colors.yellow}`,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/contato");
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
                        <Avatar
                          style={{ width: "30px", height: "30px" }}
                          src={`${apiUrl}/public/uploads/${avatarUrl}`}
                        />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Text>Olá, {username}!</Text>
                        </MenuItem>
                        <MenuItem
                          icon={
                            <Icon as={IoPerson} color={theme.colors.primary} />
                          }
                          onClick={() => {
                            navigate("/perfil");
                          }}
                        >
                          Perfil
                        </MenuItem>
                        <MenuItem
                          icon={
                            <Icon as={MdLogout} color={theme.colors.primary} />
                          }
                          onClick={logout}
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
