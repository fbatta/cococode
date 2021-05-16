import { Container, Divider, Flex, Switch, Text, useColorMode, useMediaQuery, Link as ChakraLink, HTMLChakraProps, theme as baseTheme, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { MyTheme } from "./theme";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);

interface NavBarLinkProps {
    text: string;
    href: string;
}

/**
 * A navbar item
 * 
 * @param param0 props
 * @returns A single link for the navbar
 */
function NavBarLink({ text, href }: NavBarLinkProps) {
    // get the current path
    const { asPath } = useRouter();

    // active when current path is equal to the href prop
    const isActive = asPath === href ? true : false;

    // we need the text color in the different color modes
    const textColor = useColorModeValue(MyTheme.colors.gray[800], MyTheme.colors.whiteAlpha[900]);

    const variants: Variants = {
        active: {
            borderBottom: `3px solid ${textColor}`,
            fontWeight: 'bold',
        },
        inactive: {
            borderBottom: 'none',
            fontWeight: 'normal',
        }
    }

    return <Link href={href}>
        <MotionFlex
            animate={isActive ? 'active' : 'inactive'}
            variants={variants}
            h="full"
            w="max-content"
            px="3"
            flexGrow={0}
            flexDirection="column"
            justifyContent="center">
            <Text as="a" cursor="pointer">{text}</Text>
        </MotionFlex>
    </Link>
}

export function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLg = useMediaQuery('(min-width: 48em)')[0];
    if (true) {
        return <Container maxW="container.md">
            <Flex justifyContent="start" alignItems="center" as="nav">
                <Flex w="full">
                    <NavBarLink href="/" text="Home"></NavBarLink>
                    <NavBarLink href="/about-me" text="About me"></NavBarLink>
                    <NavBarLink href="/interests" text="Interests"></NavBarLink>
                </Flex>
                <Switch isChecked={colorMode === 'light' ? false : true} onChange={toggleColorMode}></Switch>
            </Flex>
            <Divider></Divider>
        </Container>;
    }
}
