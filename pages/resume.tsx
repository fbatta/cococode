import { Box, Grid, Text, Heading, UnorderedList, ListItem, Link as ChakraLink } from "@chakra-ui/layout";
import Image from "next/image";
import { WorkExperience } from "../components/workExperience";
import { Tag } from "@chakra-ui/tag";
import Link from "next/link";
import { MainDiv } from "../components/main";

export default function Resume() {
    return (
        <MainDiv>
            <Grid templateColumns={['auto', 'repeat(2, auto)']} columnGap="4">
                <Box
                    mt={["0", "14"]}
                    justifySelf="center"
                    position="relative"
                    boxSize={150}
                    clipPath="circle(50%)"><Image alt="Coco being kissed by a cow" src="/images/coco-cow.jpg" layout="fill" objectFit="cover" />
                </Box>
                {/* the actual content */}
                <Box>
                    {/* Intro */}
                    <Box as="section">
                        <Heading as="h1" variant="h1">Resume</Heading>
                        <Text>
                            I've been part of the sailing industry for 6 years, mixing my passion of the sport with my interests in economics, marketing and software development.
                        </Text>
                        <Text>
                            Over the years I've worked on several high-complexity software projects, both professionally and as a hobby. I have written code for embedded systems, Node.JS apps (both for clients and servers), web apps based on Next.js and Wordpress, and mobile apps using the Flutter framework.
                        </Text>
                        <Text>
                            I want to make coding my next career path: I'm primarily looking for positions as as web or mobile app developer, but will eagerly consider other offers if I find them stimulating!
                        </Text>
                    </Box>
                    {/* Strengths */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">My strengths</Heading>
                        <Text><Text as="span" fontWeight="bold">🏋️‍♂️ Work ethics:</Text> I take pride in the work I do, and won't accept anything from myself but the best I can manage.</Text>
                        <Text><Text as="span" fontWeight="bold">🤝 Eager to help:</Text> I'm there for my colleagues. Rest assured if they ask for my help I'll be there for them.</Text>
                        <Text><Text as="span" fontWeight="bold">📚 Broad knowledge:</Text> over the years I've been lucky to meet many great people from different walks of life who have shared some of their knowledge with me. On top of that, I'm always excited to experiment with new things.</Text>
                        <Text><Text as="span" fontWeight="bold">🛠 Problem solver:</Text> I give my best when I'm faced with a problem and I need to figure out a solution.</Text>
                    </Box>
                    {/* Skills */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">Skills</Heading>
                        <Heading as="h3" variant="h3">Front-end web development</Heading>
                        <Box>
                            <Tag borderRadius="full" colorScheme="teal" fontSize="md" px="3" py="1" m="1">React</Tag>
                            <Tag borderRadius="full" colorScheme="teal" fontSize="md" px="3" py="1" m="1">Next.js</Tag>
                            <Tag borderRadius="full" colorScheme="teal" fontSize="md" px="3" py="1" m="1">React UI frameworks</Tag>
                            <Tag borderRadius="full" colorScheme="teal" fontSize="md" px="3" py="1" m="1">WordPress</Tag>
                            <Tag borderRadius="full" colorScheme="teal" fontSize="md" px="3" py="1" m="1">a11y</Tag>
                        </Box>
                        <Heading as="h3" variant="h3">Back-end web development</Heading>
                        <Box>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">Node.JS</Tag>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">PHP</Tag>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">RDBMS</Tag>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">Firebase</Tag>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">EC2</Tag>
                            <Tag borderRadius="full" colorScheme="cyan" fontSize="md" px="3" py="1" m="1">Ubuntu Server</Tag>
                        </Box>
                        <Heading as="h3" variant="h3">Tooling</Heading>
                        <Box>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Git</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">VSCode</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">TypeScript</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Android Studio</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">XCode</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Nginx</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Various CLIs</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Slack</Tag>
                            <Tag borderRadius="full" colorScheme="purple" fontSize="md" px="3" py="1" m="1">Zoom</Tag>
                        </Box>
                        <Heading as="h3" variant="h3">Other programming languages</Heading>
                        <Box>
                            <Tag borderRadius="full" colorScheme="red" fontSize="md" px="3" py="1" m="1">Flutter (Dart)</Tag>
                            <Tag borderRadius="full" colorScheme="red" fontSize="md" px="3" py="1" m="1">C++</Tag>
                            <Tag borderRadius="full" colorScheme="red" fontSize="md" px="3" py="1" m="1">R</Tag>
                        </Box>
                        <Heading as="h3" variant="h3">Not IT-related</Heading>
                        <Box>
                            <Tag borderRadius="full" colorScheme="orange" fontSize="md" px="3" py="1" m="1">Digital marketing</Tag>
                            <Tag borderRadius="full" colorScheme="orange" fontSize="md" px="3" py="1" m="1">Effective communication</Tag>
                            <Tag borderRadius="full" colorScheme="orange" fontSize="md" px="3" py="1" m="1">Budgeting</Tag>
                        </Box>
                    </Box>
                    {/* Education */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">Education</Heading>
                        <Text>I completed my Bachelor degree in International Economics at the <ChakraLink href="https://www.unipd.it" target="_blank">University of Padova</ChakraLink> (Italy) in December 2015. My final mark was 106/110.</Text>
                        <Text>I focused mainly on the topics of marketing and economic and monetary policy.</Text>
                    </Box>
                    {/* Work experiences */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">Work experience</Heading>
                        {/* RBYC */}
                        <WorkExperience>
                            <Heading as="h3" variant="h3">Sports Development Officer @ <ChakraLink href="https://rbyc.org.au" target="_blank">Royal Brighton Yacht Club</ChakraLink></Heading>
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
                            <Heading as="h3" variant="h3">Software Developer @ <ChakraLink href="https://ultimate.srl" target="_blank">ULTIMATE Srl</ChakraLink></Heading>
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
                        <WorkExperience variant="last-child">
                            <Heading as="h3" variant="h3">Boatyard Manager @ <ChakraLink href="http://ventodivenezia.it" target="_blank">VdV Srl</ChakraLink></Heading>
                            <Heading as="h4" variant="h4">January 2016 - August 2017 | Venice, Italy</Heading>
                            <Text>Worked in a managerial role in a fast-growing startup in the nautical services sector. I performed all sorts of tasks, but the most relevant ones are:</Text>
                            <UnorderedList fontSize="xs">
                                <ListItem>Managed every aspect of each repair and maintenance work in the largest marina in Venice.</ListItem>
                                <ListItem>Introduced more advanced audit procedures, relying on custom reports built by me with Microsoft Power BI.</ListItem>
                            </UnorderedList>
                        </WorkExperience>
                    </Box>
                    {/* Nice to haves */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">The nice-to-have's</Heading>
                        <Text>I speak 4 languages: I've got excellent Italian 🇮🇹 and English 🇬🇧 skills, I'm very good at Spanish 🇪🇸 and I know a bit of French 🇫🇷 too. Might come in handy if you're dealing with certain foreign clients.</Text>
                        <Text>I'm a trained first-aider with up-to-date qualifications.</Text>
                    </Box>
                    {/* Hobbies */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">Hobbies and interests</Heading>
                        <Text>Read all about it <Link href="/interests"><ChakraLink>here</ChakraLink></Link>.</Text>
                    </Box>
                    {/* References */}
                    <Box as="section">
                        <Heading as="h2" variant="h2">References</Heading>
                        <Text>References are available on request. 😊</Text>
                    </Box>
                </Box>
            </Grid>
        </MainDiv>
    );
}
