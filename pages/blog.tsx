import { Flex, Heading, Text } from "@chakra-ui/layout";
import { MainDiv } from "../components/main";
import { GiBlackHoleBolas } from "react-icons/gi";
import Icon from "@chakra-ui/icon";
import { motion } from "framer-motion";

export default function Blog() {
    return (
        <MainDiv>
            <Flex w="full" justifyContent="center" alignItems="center" flexDir="column">
                <motion.div animate={{ rotate: '-360deg' }} transition={{ duration: 2, repeat: Infinity }}><Icon as={GiBlackHoleBolas} display="block" w={40} h={44} my="10" /></motion.div>
                <Heading as="h1">Oh no! a black hole!</Heading>
                <Text>Really sorry, this part isn't quite ready yet.</Text>
            </Flex>
        </MainDiv>
    );
}
