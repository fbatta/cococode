import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react";

// default app theme, extends chakra's base theme with the 'purple' color scheme
export const MyTheme = extendTheme({
    components: {
        Heading: {
            variants: {
                h1: {
                    lineHeight: 'tall',
                    borderBottom: '3px solid',
                    mb: 3,
                },
                h2: {
                    lineHeight: 'tall',
                    py: 2,
                },
                h3: {
                    fontSize: 'md',
                    py: 1.5
                }
            },
        },
        Text: {
            baseStyle: {
                py: 2,
            }
        },
        Link: {
            baseStyle: {
                fontWeight: 'bold',
                bgGradient: 'linear(to-r, pink.500, purple.500)',
                bgClip: 'text',
            }
        },
    },
    fonts: {
        heading: 'Fira Code',
        body: 'Fira Code',
    },
    initialColorMode: 'system',
    useSystemColorMode: true,
}, withDefaultColorScheme({ colorScheme: 'purple' }), theme);
