import { MyFooter } from "../components/footer";
import { NavBar } from "../components/navigationBar";
import { Container, Text, Box, Heading, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Interests() {
    return (
        <>
            <NavBar></NavBar>
            <Container maxW="container.md" py="4" as="main">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Box as="section">
                        <Heading as="h1" variant="h1">Getting personal</Heading>
                        <Text>So, you probably already read my <Link href="/about-me"><ChakraLink>professional profile</ChakraLink></Link>, but now you want to dig a bit deeper, know the things that incite curiosity in me, that inspire me.</Text>
                        <Text>In this page I'll give you a brief rundown of what I feel are my greatest passions, if you share some of them and would like to talk about it I'm more than eager to get in touch!</Text>
                    </Box>
                    <Box as="section">
                        <Heading as="h2" variant="h2">📖 Open-source coding projects</Heading>
                        <Text>There's all sorts of repos in my GitHub about the most disparate things. Not all code is pretty but it's a great playground to experiment with new and sometimes old technologies.</Text>
                        <Box as="article">
                            <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/rbyc-theme/" target="_blank">RBYC theme</ChakraLink></Heading>
                            <Text fontSize="xs">A Wordpress theme, based on twentytwenty, made for the website of the company I work for. It has some customisations to work a bit more nicely with things like WooCommerce. You can visit the site <ChakraLink href="https://rbyc.org.au" target="_blank">here</ChakraLink>.</Text>
                            <Divider></Divider>
                        </Box>
                        <Box as="article">
                            <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/nextjs-gallery" target="_blank">Nextjs gallery</ChakraLink></Heading>
                            <Text fontSize="xs">A very simple photo gallery built with Next.js. It is completely static, just throw any images you want into the public folder and Next.js will automatically index every image in each folder as you them, and then do SSR.</Text>
                            <Divider></Divider>
                        </Box>
                        <Box as="article">
                            <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/vproweather" target="_blank">Vantage Pro Weather</ChakraLink></Heading>
                            <Text fontSize="xs">The original project was written in C, I'm now passing it to Nodejs and adding a few extra bells and whistles. It is a CLI to pull weather data from a Vantage PRO2 console, a very popular weather station console within yacht clubs here in Australia. I aim to also integrate it with a weather API to have real-time weather info available online.</Text>
                            <Divider></Divider>
                        </Box>
                        <Box as="article">
                            <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/cococode" target="_blank">CocoCode</ChakraLink></Heading>
                            <Text fontSize="xs">This website you're visiting, built with Next.js, Chakra UI and framer-motion.</Text>
                            <Divider></Divider>
                        </Box>
                    </Box>
                    <Box as="section">
                        <Heading as="h2" variant="h2">💃 Tango dancing</Heading>
                        <Text>Back in May 2020, in the midst of the first COVID-19 lockdown in Melboure, my partner and I started taking online tango classes with the brilliant <ChakraLink href="https://www.instagram.com/vvmatias/" target="_blank">Matias Van De Voorde</ChakraLink>. We both loved it and kept taking classes, training and occasionally going out to social tango nights.</Text>
                        <Text>We even started a YouTube channel where we post some of our training videos and describe the experience and life teachings that come from it.</Text>
                    </Box>
                    <Box as="section">
                        <Heading as="h2" variant="h2">🌌 Astronomy</Heading>
                        <Text>I'm endlessly fascinated (and deeply scared) by the vastness of the universe, by the unimmaginable scale and weird properties of celestial bodies. I could listen for hours to people explaining all the crazy phenomena that happen in space, and many times I do.</Text>
                    </Box>
                    <Box as="section">
                        <Heading as="h2" variant="h2">⚡️ Electronics</Heading>
                        <Text>I love tinkering with microcontrollers, sensors, servos... burning my hands with hot soldering irons and write small efficient code that can fit in a few hundred bytes of memory space.</Text>
                        <Text>I'm now learning to use KiCad to desgin my own PCBs.</Text>
                    </Box>
                </motion.div>
            </Container>
            <MyFooter></MyFooter>
        </>
    );
}
