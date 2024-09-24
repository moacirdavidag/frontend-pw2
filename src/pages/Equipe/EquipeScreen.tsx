import { Box, Heading, Text, Image, SimpleGrid, Link, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
            name: "Isaelson Trajano",
            role: "UX/UI Designer",
            image: "src/assets/imgs/isaelson.jpeg",
            github: "https://github.com/IsaelDev" 
        },
        {
            name: "Moacir David",
            role: "Desenvolvedor",
            image: "src/assets/imgs/moacir.jpeg",
            github: "https://github.com/moacirdavidag" 
        },
        {
            name: "Ramon Oliveira",
            role: "Desenvolvedor",
            image: "src/assets/imgs/ramon.jpeg",
            github: "https://github.com/raszz",
        }
    ];

    return (
        <Box p={5} maxW="1200px" mx="auto">
         
            <Image 
                 src="src/assets/imgs/equipe.png" 
                alt="Nossa Equipe" 
                borderRadius="md" 
                mb={6}
                mx="auto"
                width="600px" 
            />

          
            <Heading as="h1" color="red.500" fontSize="24px" fontWeight="semibold" mb={6} textAlign="center">
                Nossa Equipe
            </Heading>

          
            <Text color="#717171" fontSize="16px" mb={6} textAlign="center">
                Somos 3 alunos do IFPB que desenvolvemos um sistema de delivery para facilitar a vida dos nossos usuários. <br /> 
                Conheça nossa equipe:
            </Text>

          
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {teamMembers.map((member, index) => (
                    <Box
                        key={index}
                        maxW="320px"
                        w="100%"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        p={6}
                        textAlign="center"
                    >
                        
                        <Image 
                            src={member.image} 
                            alt={member.name} 
                            borderRadius="full" 
                            boxSize="150px" 
                            mx="auto" 
                            mb={4}
                        />

                      
                        <Heading as="h3" fontSize="20px" fontWeight="bold" mb={2}>
                            {member.name}
                        </Heading>
                        <Text fontSize="16px" mb={4}>{member.role}</Text>

                      
                        <Link href={member.github} isExternal>
                            <Button 
                                leftIcon={<FaGithub />} 
                                colorScheme="red" 
                                variant="solid"
                            >
                                GitHub
                            </Button>
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Team;
