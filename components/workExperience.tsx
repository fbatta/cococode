import { extendTheme, Box, Divider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { MyTheme } from "./theme";

const theme = extendTheme({
    components: {
        Heading: {
            variants: {
                'h3': {
                    fontSize: '2xl',
                    py: '2'
                },
                'h4': {
                    fontSize: 'md',
                }
            },
        },
        Text: {
            baseStyle: {
                fontSize: 'xs'
            }
        },
    }
}, MyTheme);

interface WorkExperienceProps {
    variant?: 'last-child',
    children?: JSX.Element | JSX.Element[] | string;
}

export function WorkExperience({ children, variant }: WorkExperienceProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box as="section">
                {children}
                {/* a bit of space */}
                <Box w="full" h="2"></Box>
                {
                    variant !== 'last-child' ? <>
                        <Divider></Divider>
                        <Box w="full" h="2"></Box>
                    </> : <></>
                }
            </Box>
        </ThemeProvider>
    );
}
