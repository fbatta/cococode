import { MyFooter } from "./footer";
import { NavBar } from "./navigationBar";
import { motion, Variants } from "framer-motion";
import { Container, Box } from "@chakra-ui/react";
import { useAppContext } from "../context/state";

interface MainDivProps {
    children: JSX.Element | JSX.Element[] | string;
};

export function MainDiv({ children }: MainDivProps) {
    const { menuIsExpanded, mobileMenuWidth } = useAppContext();
    const variants: Variants = {
        normal: {
            translateX: '0px',
            opacity: 1,
        },
        translated: {
            translateX: mobileMenuWidth,
            opacity: 0.2,
        }
    };
    return (
        <Box overflowX="hidden">
            <NavBar></NavBar>
            <motion.div variants={variants} animate={menuIsExpanded ? 'translated' : 'normal'}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Container as="main" maxW="container.md" py="4">
                        {children}
                    </Container>
                </motion.div>
                <MyFooter></MyFooter>
            </motion.div>
        </Box>
    )
}
