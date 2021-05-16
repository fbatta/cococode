import { Box, Container, Heading, Text, Link as ChakraLink } from '@chakra-ui/layout';
import Link from "next/link";
import { MainDiv } from '../components/main';

export default function Home() {
  return (
    <MainDiv>
      <Box as="section">
        <Heading as="h1" variant="h1" size="xl">Hello, I'm Coco</Heading>
        <Text>
          Hi there,
          </Text>
        <Text>
          Thanks for visiting my website! My name's Francesco, I grew up in Venice, Italy and I currently live in Melbourne, Australia. I go by many nicknames but my favourite one is Coco.
          </Text>
        <Text>
          While I enjoy smashed avo on toast, in my blood run pasta 🍝, pizza 🍕, wine 🍷 and short, very black espresso ☕️.
          </Text>
      </Box>
      <Box as="section">
        <Heading as="h2" variant="h2">Why this website</Heading>
        <Text>
          I want this to be a place where people can get an idea of who I am. Whether you came here as a recruiter trying to decide if I'm worth a job interview, someone in need of help for some software project, or you're simply stumbled upon this site by chance, I hope you'll find what you're looking for.
          </Text>
        <Text>
          I also want to start writing a blog about things that I'm passionate about: stuff like tech, IT, electronics, tango dancing, astronomy, books, movies, etc. etc.
          </Text>
        <Text>
          I've had this idea in my head for a while and thought this is the moment to finally put it into action.
          </Text>
      </Box>
      <Box as="section">
        <Heading as="h2" variant="h2">Ok, so where to next?</Heading>
        <Text>I'm interested in a career as a web developer (full-stack | frontend | backend) or mobile app developer. To find out if I'm the right person for your company you can check out my <ChakraLink><Link href="/resume">resume</Link></ChakraLink>.</Text>
        <Text>If you want to know what I keep myself busy with during my leisure time, check out my <ChakraLink><Link href="/interests">interests</Link></ChakraLink> page.</Text>
        <Text>If you're interested in reading my random thoughts... You'll have to wait a tiny bit longer 😄. The blog is still under construction.</Text>
      </Box>
    </MainDiv>
  );
}
