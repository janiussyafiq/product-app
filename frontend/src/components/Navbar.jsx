import { Container, Flex, HStack, Text, Button, useColorMode } from '@chakra-ui/react';
import { BsPlusSquare } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base:"column",
                    sm: "row",
                }}
            >
                
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    bgColor={"white"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, #7928CA, #FF0080)"}
                    bgClip={"text"}
                >  
                    <Link to={"/"}>Product Store</Link>
                    
                </Text>
                
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <BsPlusSquare fontSize={20}/>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <FaRegMoon fontSize={20}/>:<CiSun fontSize={25}/>}
                    </Button>
                </HStack>
            </Flex>
        </Container>
  )
}

export default Navbar;
