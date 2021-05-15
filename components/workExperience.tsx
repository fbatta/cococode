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
    children?: JSX.Element | JSX.Element[] | string;
}

export function WorkExperience({ children }: WorkExperienceProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box as="section">
                <Divider></Divider>
                {children}
                {/* a bit of space */}
                <Box w="full" h="4"></Box>
            </Box>
        </ThemeProvider>
    );
}
