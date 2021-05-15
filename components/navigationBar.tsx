import { Container, Divider, Flex, Switch, Text, useColorMode, useMediaQuery, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarLinkProps {
    text: string;
    href: string;
}

function NavBarLink({ text, href }: NavBarLinkProps) {
    const { asPath } = useRouter();
    const isActive = asPath === href ? true : false;
    const borderBottom = isActive ? '3px solid' : 'none';
    return <Link href={href}>
        <Flex
            borderBottom={borderBottom}
            h="full"
            w="max-content"
            px="3"
            flexGrow={0}
            flexDirection="column"
            justifyContent="center">
            <Text fontWeight={isActive ? 'bold' : 'normal'} as="a" cursor="pointer">{text}</Text>
        </Flex>
    </Link>
}

export function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLg = useMediaQuery('(min-width: 48em)')[0];
    if (true) {
        return <Container maxW="container.md" h="full">
            <Flex h="full" justifyContent="start" alignItems="center" as="nav">
                <Flex w="full">
                    <NavBarLink href="/" text="Home"></NavBarLink>
                    <NavBarLink href="/about-me" text="About me"></NavBarLink>
                </Flex>
                <Switch isChecked={colorMode === 'light' ? false : true} onChange={toggleColorMode}></Switch>
            </Flex>
            <Divider></Divider>
        </Container>;
    }
}
