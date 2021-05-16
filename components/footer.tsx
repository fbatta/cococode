import { Container, Divider, Grid, Box, Heading, Link, UnorderedList, ListItem } from "@chakra-ui/layout";

export function MyFooter() {
    return (
        <>
            <Container maxW="container.md">
                <Divider></Divider>
                <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gridRowGap="3">
                    <Box>
                        <Heading as="h3" size="md" py="2">Useful links</Heading>
                        <UnorderedList listStyleType="none" ml="unset">
                            <ListItem><Link href="https://twitter.com/Beitz25" target="_blank">Twitter</Link></ListItem>
                            <ListItem><Link href="https://github.com/fbatta" target="_blank">GitHub</Link></ListItem>
                            <ListItem><Link href="https://www.linkedin.com/in/battaglinifrancesco/" target="_blank">LinkedIn</Link></ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading as="h3" size="md" py="2">Contact info</Heading>
                        <UnorderedList listStyleType="none" ml="unset">
                            <ListItem>Email: me@cococode.dev</ListItem>
                            <ListItem>...or DM me on any of my social media platforms :)</ListItem>
                        </UnorderedList>
                    </Box>
                </Grid>
                {/* a bit of padding at the */}
                <Box h="10" w="full"></Box>
            </Container>
        </>
    );
}
