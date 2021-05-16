import { MyTheme } from "../components/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import { MyContextProvider } from "../context/state";

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={MyTheme}>
    <Head>
      <title>CocoCode</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"></link>
      <meta name="description" content="My personal website: discover what makes me, me" />
    </Head>
    <ColorModeScript initialColorMode={MyTheme.config.initialColorMode} />
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  </ChakraProvider>
}

export default MyApp;
