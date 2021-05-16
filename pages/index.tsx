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
          Thanks for visiting my website! My name's Francesco, I'm an Italian currently living in Melbourne, Australia. I go by many nicknames but my favourite one is Coco.
          </Text>
        <Text>
          While I enjoy smashed avo on toast, in my blood run pasta 🍝, pizza 🍕, wine 🍷 and short, very black espresso ☕️.
          </Text>
      </Box>
      <Box as="section">
        <Heading as="h2" variant="h2">Why this website</Heading>
        <Text>
          Two main reasons really: the first is that I'm looking for a job as a software developer, so I need a place to serve as a content-rich resume.
          </Text>
        <Text>
          Second reason is I also want to start writing a blog about things that I'm passionate about: stuff like tech, IT, electronics, tango dancing, astronomy, books, movies, etc. etc.
          </Text>
        <Text>
          I've had this idea in my head for a while and thought this is the moment to start.
          </Text>
      </Box>
      <Box as="section">
        <Heading as="h2" variant="h2">Ok, so where to next?</Heading>
        <Text>If you're deciding whether I'm worth a job interview, click <ChakraLink><Link href="/about-me">here</Link></ChakraLink>.</Text>
        <Text>If you're interested in reading my random thoughts... You'll have to wait a tiny bit longer 😄. The blog is still under construction.</Text>
      </Box>
    </MainDiv>
  );
}
