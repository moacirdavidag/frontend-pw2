import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  HStack,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { PiPencilBold, PiTrashBold, PiHamburgerBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/Button/ActionButton";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";
import theme from "../../styles/global";
import { MdCategory, MdDashboard, MdList, MdOutlineRestaurantMenu } from "react-icons/md";



type Props = {
  children?: React.ReactElement
}

const Dashboard: React.FC<Props> = ({children}: Props) => {
  const navigate = useNavigate();

  return (
    <PageLayout shouldDisplayHeader={true}>
      <Flex w="100%" h="100%">
        <VStack
          w="250px"
          h="100vh"
          p={4}
          bg="white"
          spacing={6}
          align="flex-start"
          borderRight="1px solid #E2E8F0"
        >
          <Header logoSrc="/img/logo2.png" />
          <Box
            bg="#FEF2F3"
            sx={{
              "&:hover": {
                transition: "300ms ease-in-out",
                backgroundColor: theme.colors.yellow,
                color: 'white'
              }
            }}
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
            onClick={() => {
              navigate('/dashboard/pedidos')
            }}
            cursor={"pointer"}
          >
            <Icon as={MdOutlineRestaurantMenu} color="#EA1D2C" boxSize={5} />
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Pedidos
            </Text>
          </Box>
          
          <Box
            bg="#FEF2F3"
            sx={{
              "&:hover": {
                transition: "300ms ease-in-out",
                backgroundColor: theme.colors.yellow,
                color: 'white'
              }
            }}
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
            onClick={() => {
              navigate('/dashboard/produtos')
            }}
            cursor={"pointer"}
          >
            <Icon as={MdDashboard} color="#EA1D2C" boxSize={5} />
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Produtos
            </Text>
          </Box>
          
          <Box
            bg="#FEF2F3"
            sx={{
              "&:hover": {
                transition: "300ms ease-in-out",
                backgroundColor: theme.colors.yellow,
                color: 'white'
              }
            }}  
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
            onClick={() => {
              navigate('/dashboard/categorias')
            }}
            cursor={"pointer"}
          >
            <Icon as={MdCategory} color="#EA1D2C" boxSize={5} /> 
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Categorias
            </Text>
          </Box>
          
          <Box
            bg="#FEF2F3"
            sx={{
              "&:hover": {
                transition: "300ms ease-in-out",
                backgroundColor: theme.colors.yellow,
                color: 'white'
              }
            }}
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
            onClick={() => {
              navigate('/dashboard/subcategorias')
            }}
            cursor={"pointer"}
          >
            <Icon as={MdList} color="#EA1D2C" boxSize={5} /> 
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Sub-categorias
            </Text>
          </Box>
          
          <Box
            bg="#FEF2F3"
            sx={{
              "&:hover": {
                transition: "300ms ease-in-out",
                backgroundColor: theme.colors.yellow,
                color: 'white'
              }
            }}
            w="100%"
            p={2}
            display="flex"
            alignItems="center"
            borderRadius="4px"
            onClick={() => {
              navigate('/dashboard/ingredientes')
            }}
          >
            <Icon as={PiPencilBold} color="#EA1D2C" boxSize={5} /> 
            <Text ml={2} color="#EA1D2C" fontWeight="semi-bold">
              Ingredientes
            </Text>
          </Box>
        </VStack>

        {children}

        
      </Flex>
    </PageLayout>
  );
};

export default Dashboard;
