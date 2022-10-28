import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function FourOhFour() {
  const { status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  return (
    <Box as="section" py="10" bg="white" data-cy="404">
      <Container maxW="5xl">
        <Box w="83.3333%" mx="auto" textAlign="center">
          <Box
            h="400px"
            backgroundImage="url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);"
            backgroundPosition="center"
          >
            <Heading as="h1" mt="5" fontSize="80px">
              404
            </Heading>
          </Box>

          <Box mt="-50px">
            <Heading as="h2" mt="5" mb="2.5">
              Look like you&apos;re lost
            </Heading>

            <Text mb="2.5">The page you are looking for is not available!</Text>

            <Link
              href="/"
              display="inline-block"
              my="5"
              px="5"
              py="2.5"
              bg="#39ac31"
              color="white"
            >
              Go to Home
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
