import { Container, Divider, Flex, Button, Box, Text, useColorMode, useMediaQuery, HTMLChakraProps, useColorModeValue, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { MyTheme } from "./theme";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/state";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

// create a component that merges a chakra Flex and a motion.div
export const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);

// NavBarLink component properties
interface NavBarLinkProps {
    children: JSX.Element | JSX.Element[] | string;
    href: string;
    isMobile: boolean;
}

/**
 * A navbar item
 * 
 * @param param0 props
 * @returns A single link for the navbar
 */
function NavBarLink({ children, href, isMobile }: NavBarLinkProps) {
    // get the current path
    const { asPath } = useRouter();

    // active when current path is equal to the href prop
    const isActive = asPath === href ? true : false;

    // we need the text color in the different color modes
    const textColor = useColorModeValue(MyTheme.colors.gray[800], MyTheme.colors.whiteAlpha[900]);

    // define variants to be used for component animation
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

    // the mobile render
    if (isMobile) {
        return (
            <Link href={href}>
                <MotionFlex
                    animate={isActive ? 'active' : 'inactive'}
                    variants={variants}
                    h="full"
                    w="max-content"
                    paddingRight="6"
                    flexGrow={0}
                    flexDirection="column"
                    justifyContent="center">
                    <Text as="a" cursor="pointer">{children}</Text>
                </MotionFlex>
            </Link>
        );
    }

    // render for anything bigger than mobile
    return <Link href={href}>
        <MotionFlex
            animate={isActive ? 'active' : 'inactive'}
            variants={variants}
            w="max-content"
            px="3"
            flexGrow={0}
            flexDirection="column">
            <Text as="a" cursor="pointer">{children}</Text>
        </MotionFlex>
    </Link>
}

/**
 * The entire navbar with its links and other buttons
 * 
 * @returns the NavBar
 */
export function NavBar() {
    // global context has info about menu
    const { menuIsExpanded, toggleExpandedMenu } = useAppContext();
    // used to switch between 'light' and 'dark' color modes
    const { colorMode, toggleColorMode } = useColorMode();

    // width of the side menu on mobile devices
    const { mobileMenuWidth } = useAppContext();

    // variants for the side menu on mobile devices to be used for animation
    const variants: Variants = {
        collapsed: {
            translateX: '-100%',
        },
        expanded: {
            translateX: '0px',
        }
    };

    // media query to decide whether to show the full menu or the hamburger
    const showFullMenu = useMediaQuery(`(min-width: ${MyTheme.breakpoints.sm})`)[0];

    // list of menu items
    const menuItems = [
        <NavBarLink key="1" href="/" isMobile={!showFullMenu}>Home</NavBarLink>,
        <NavBarLink key="2" href="/resume" isMobile={!showFullMenu}>Resume</NavBarLink>,
        <NavBarLink key="3" href="/interests" isMobile={!showFullMenu}>Interests</NavBarLink>,
        <NavBarLink key="4" href="/blog" isMobile={!showFullMenu}>Blog</NavBarLink>,
    ];

    return <Container maxW="container.md" px="0">
        {/* Side menu shown on mobile devices */}
        {!showFullMenu ? <motion.div
            style={{ position: 'fixed', width: mobileMenuWidth, height: '100%', zIndex: 1 }}
            variants={variants}
            animate={menuIsExpanded ? 'expanded' : 'collapsed'}>
            <Box w="full" h="full" backgroundColor={colorMode === 'light' ? MyTheme.colors.white : MyTheme.colors.gray[800]} boxShadow="xl">
                {/* Button to close side menu */}
                <Flex justifyContent="flex-end">
                    <Button aria-label="Close mobile menu" variant="ghost" onClick={() => { toggleExpandedMenu(false) }}><CloseIcon /></Button>
                </Flex>
                {/* Side menu links */}
                <Box p="3">
                    {menuItems.map(item => item)}
                </Box>
            </Box>
        </motion.div> : <></>}
        {/* Main nav bar */}
        <Flex justifyContent="start" alignItems="center" as="nav">
            <Flex w="full">
                {/* Show only a hamburger button on mobile devices */}
                {showFullMenu ? <>
                    {menuItems.map(item => item)}
                </> : <>
                    <Button aria-label="Open mobile menu" variant="ghost" onClick={() => { toggleExpandedMenu(true) }}><HamburgerIcon /></Button>
                </>}
            </Flex>
            {/* Switch color mode button */}
            <Button
                aria-label="Switch color mode"
                variant="ghost"
                onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon aria-label="Dark mode" /> : <SunIcon aria-label="Light mode" />}
            </Button>
        </Flex>
        <Divider></Divider>
    </Container>;
}
