import { Text, Box, Heading, Link as ChakraLink, Divider } from "@chakra-ui/react";
import { MainDiv } from "../components/main";

export default function Interests() {
    return (
        <MainDiv>
            <Box as="section">
                <Heading as="h1" variant="h1">Getting personal</Heading>
                <Text>In this page I want to touch briefly about some of the things that move me, my greatest interests in life.</Text>
                <Text>If you share some of them and would like to talk about it I'm more than eager to get in touch!</Text>
            </Box>
            <Box as="section">
                <Heading as="h2" variant="h2">📖 Open-source coding projects</Heading>
                <Text>There's all sorts of repos in my GitHub about the most disparate things. Not all code is pretty but it's a great playground to experiment with new and sometimes old technologies.</Text>
                <Box as="article">
                    <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/rbyc-theme/" rel="noopener" target="_blank">RBYC theme</ChakraLink></Heading>
                    <Text fontSize="xs">A Wordpress theme, based on twentytwenty, made for the website of the company I work for. It has some customisations to work a bit more nicely with things like WooCommerce. You can visit the site <ChakraLink href="https://rbyc.org.au" target="_blank">here</ChakraLink>.</Text>
                    <Divider></Divider>
                </Box>
                <Box as="article">
                    <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/nextjs-gallery" rel="noopener" target="_blank">Nextjs gallery</ChakraLink></Heading>
                    <Text fontSize="xs">A very simple photo gallery built with Next.js. It does not rely on any database, just throw any images and directories you want into the public folder and navigate around as if it was your computer's file manager.</Text>
                    <Divider></Divider>
                </Box>
                <Box as="article">
                    <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/vproweather" rel="noopener" target="_blank">Vantage Pro Weather</ChakraLink></Heading>
                    <Text fontSize="xs">The original project was written in C, I'm now passing it to Nodejs and adding a few extra bells and whistles. It is a CLI to pull weather data from a Vantage PRO2 console, a very popular weather station console within yacht clubs here in Australia. I aim to also integrate it with a weather API to have real-time weather info available online.</Text>
                    <Divider></Divider>
                </Box>
                <Box as="article">
                    <Heading as="h3" variant="h3"><ChakraLink href="https://github.com/fbatta/cococode" rel="noopener" target="_blank">CocoCode</ChakraLink></Heading>
                    <Text fontSize="xs">This website you're visiting, built with Next.js, Chakra UI and framer-motion.</Text>
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
                <Text>I like astronomy so much that my only (so far at least) tattoo is that of a black hole on my right upper arm.</Text>
            </Box>
            <Box as="section">
                <Heading as="h2" variant="h2">⚡️ Electronics</Heading>
                <Text>I love tinkering with microcontrollers, sensors, servos... burning my hands with hot soldering irons and write small efficient code that can fit in a few hundred bytes of memory space.</Text>
                <Text>I'm now learning to use KiCad to desgin my own PCBs.</Text>
            </Box>
        </MainDiv>
    );
}
