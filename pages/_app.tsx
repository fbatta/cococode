import { MyTheme } from "../components/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={MyTheme}>
    <Head>
      <title>CocoCode</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"></link>
    </Head>
    <ColorModeScript initialColorMode={MyTheme.config.initialColorMode} />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp;
