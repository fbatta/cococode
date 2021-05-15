import '../styles/globals.css';
import { ChakraProvider, ColorModeScript, extendTheme, theme as baseTheme, withDefaultColorScheme } from "@chakra-ui/react";
import Head from "next/head";

const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        'h1': {
          lineHeight: 'tall',
          borderBottom: '3px solid',
          mb: 3,
        },
        'h2': {
          lineHeight: 'tall',
          py: 2,
        }
      },
    },
    Text: {
      baseStyle: {
        py: 2
      }
    },
    Link: {
      baseStyle: {
        fontWeight: 'bold',
        bgGradient: "linear(to-r, pink.500, purple.500)",
        bgClip: "text"
      }
    }
  },
  fonts: {
    heading: 'Fira Code',
    body: 'Fira Code',
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
}, withDefaultColorScheme({ colorScheme: 'purple' }), baseTheme);

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Head>
      <title>CocoCode</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"></link>
    </Head>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp;
