import { Container, Box, Grid, Text, Heading, UnorderedList, ListItem, Link } from "@chakra-ui/layout";
import { MyFooter } from "../components/footer";
import { NavBar } from "../components/navigationBar";
import Image from "next/image";
import theme from "@chakra-ui/theme";
import { WorkExperience } from "../components/workExperience";
import { motion } from "framer-motion";

export default function AboutMe() {
    console.log(theme.sizes[24]);
    return (
        <>
            <NavBar></NavBar>
            <Container maxW="container.md" py="4" as="main">
                <Grid templateColumns={['auto', 'repeat(2, auto)']} columnGap="4">
                    <Box
                        justifySelf="center"
                        position="relative"
                        boxSize={150}
                        clipPath="circle(50%)"><Image alt="Coco being kissed by a cow" src="/images/coco-cow.jpg" layout="fill" objectFit="cover" />
                    </Box>
                    {/* the actual content */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Box>
                            {/* Intro */}
                            <Box as="section">
                                <Heading as="h1" variant="h1">About me</Heading>
                                <Text>
                                    I've been part of the sailing industry for 6 years, mixing my passion of the sport with my interests in economics, marketing and software development.
                                </Text>
                                <Text>
                                    Over the years I've worked on several high-complexity software projects, both professionally and as a hobby. I have written code for embedded systems, Node.JS apps (both for clients and servers), web apps based on Next.js and Wordpress, and mobile apps using the Flutter framework.
                                </Text>
                                <Text>
                                    I want to make coding my next career path. While I haven't got a formal CS background, my passion for this world has led me to study the most varied topics.
                                </Text>
                            </Box>
                            {/* Strengths */}
                            <Box as="section">
                                <Heading as="h2" variant="h2">My strengths</Heading>
                                <Text><Text as="span" fontWeight="bold">Work ethics:</Text> I take pride in the work I do, and won't accept anything from myself but the best I can manage.</Text>
                                <Text><Text as="span" fontWeight="bold">Eager to help:</Text> I'm there for my colleagues. Rest assured if they ask for my help I'll be there for them.</Text>
                                <Text><Text as="span" fontWeight="bold">Broad knowledge:</Text> over the years I've been lucky to meet many great people from different walks of life who have shared some of their knowledge with me. On top of that, I'm always excited to experiment with new things.</Text>
                                <Text><Text as="span" fontWeight="bold">Problem solver:</Text> I give my best when I'm faced with a problem and I need to figure out a solution.</Text>
                            </Box>
                            {/* Education */}
                            <Box as="section">
                                <Heading as="h2" variant="h2">Education</Heading>
                                <Text>I completed my Bachelor degree in International Economics at the <Link href="https://www.unipd.it" target="_blank">University of Padova</Link> (Italy) in December 2015. My final mark was 106/110.</Text>
                                <Text>I focused mainly on the topics of marketing and economic and monetary policy.</Text>
                            </Box>
                            {/* Work experiences */}
                            <Box as="section">
                                <Heading as="h2" variant="h2">Work experience</Heading>
                                {/* RBYC */}
                                <WorkExperience>
                                    <Heading as="h3" variant="h3">Sports Development Officer @ <Link href="https://rbyc.org.au" target="_blank">Royal Brighton Yacht Club</Link></Heading>
                                    <Heading as="h4" variant="h4">October 2017 - present | Melbourne, AU</Heading>
                                    <Text>While I help out in many different areas around the club, my main tasks involve:</Text>
                                    <UnorderedList fontSize="xs">
                                        <ListItem>
                                            Managing and promoting all boating courses, liaising with the national body for sailing (Australian Sailing), local authorities and internal stakeholders to ensure compliance with rules and regulations and provide the highest member equity.
                                    </ListItem>
                                        <ListItem>
                                            Budget the BU's revenue and expenses for the season and closely monitor goals throughout the financial year.
                                    </ListItem>
                                        <ListItem>
                                            Producing creative and original forms of advertising to promote all RBYC activities across all BU’s.
                                    </ListItem>
                                        <ListItem>
                                            Designing, developing and maintaining Club’s website (Wordpress on Amazon EC2 instance)
                                    </ListItem>
                                    </UnorderedList>
                                </WorkExperience>
                                {/* ULTIMATE */}
                                <WorkExperience>
                                    <Heading as="h3" variant="h3">Software Developer @ <Link href="https://ultimate.srl" target="_blank">ULTIMATE Srl</Link></Heading>
                                    <Heading as="h4" variant="h4">December 2017 - present | Venice, Italy (remote work)</Heading>
                                    <Text>This is a startup I have been working with for some years now. As the sole developer I develop and maintain the entire codebase for the Ultimate wine refrigerators line-up, which comprises:</Text>
                                    <UnorderedList fontSize="xs">
                                        <ListItem>
                                            Microcontroller code to monitor sensors and control outputs, written in C++.
                                    </ListItem>
                                        <ListItem>
                                            Machine client software to interface with the Firebase Realtime Database, written in Node.JS.
                                    </ListItem>
                                        <ListItem>
                                            Firebase Cloud Functions for various tasks including push notifications.
                                    </ListItem>
                                        <ListItem>
                                            Android and iOS client app to monitor and control the machine, using Flutter.
                                    </ListItem>
                                    </UnorderedList>
                                </WorkExperience>
                                {/* VdV */}
                                <WorkExperience>
                                    <Heading as="h3" variant="h3">Boatyard Manager @ <Link href="http://ventodivenezia.it" target="_blank">VdV Srl</Link></Heading>
                                    <Heading as="h4" variant="h4">January 2016 - August 2017 | Venice, Italy</Heading>
                                    <Text>Worked in a managerial role in a fast-growing startup in the nautical services sector. I performed all sorts of tasks, but the most relevant ones are:</Text>
                                    <UnorderedList fontSize="xs">
                                        <ListItem>Managed every aspect of each repair and maintenance work in the largest marina in Venice.</ListItem>
                                        <ListItem>Introduced more advanced audit procedures, relying on custom reports built by me with Microsoft Power BI.</ListItem>
                                    </UnorderedList>
                                </WorkExperience>
                            </Box>
                        </Box>
                    </motion.div>
                </Grid>
            </Container>
            <MyFooter></MyFooter>
        </>
    );
}
