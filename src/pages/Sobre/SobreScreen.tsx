import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';

const Sobre = () => {
    return (
        <Box p={5} maxW="600px" mx="auto">
            <VStack spacing={4} align="start">
                {/* Imagem do Time */}
                <Image 
                    src="src/assets/imgs/5064484.jpg" 
                    alt="Nosso Time" 
                    borderRadius="md" 
                    mb={4}
                />

                {/* Título com 24px semibold */}
                <Heading as="h1" fontSize="24px" fontWeight="semibold">
                    Sobre Nós
                </Heading>

                {/* Descrição com 16px regular */}
                <Text fontSize="16px" fontWeight="regular">
                    Bem-vindo ao nosso serviço de delivery!
                </Text>

                <Text fontSize="16px" fontWeight="regular">
                    Nós somos uma plataforma dedicada a oferecer a melhor experiência
                    de entrega de comida diretamente na sua porta. Com uma ampla
                    seleção de restaurantes e opções de pratos, garantimos qualidade
                    e rapidez em cada entrega.
                </Text>

                <Heading as="h3" fontSize="24px" fontWeight="semibold">
                    Nossa Missão
                </Heading>
                <Text fontSize="16px" fontWeight="regular">
                    Nossa missão é conectar você aos seus pratos favoritos de forma
                    rápida e conveniente, proporcionando uma experiência única a cada
                    pedido.
                </Text>

                <Heading as="h3" fontSize="24px" fontWeight="semibold">
                    Como Funciona
                </Heading>
                <Text fontSize="16px" fontWeight="regular">
                    1. Escolha seu restaurante favorito.<br />
                    2. Selecione os pratos que deseja pedir.<br />
                    3. Complete seu pedido e aguarde a entrega!
                </Text>

                <Heading as="h3" fontSize="24px" fontWeight="semibold">
                    Contato
                </Heading>
                <Text fontSize="16px" fontWeight="regular">
                    Se tiver dúvidas ou sugestões, entre em contato conosco pelo
                    e-mail: suporte@delivery.com.
                </Text>
            </VStack>
        </Box>
    );
};

export default Sobre;
