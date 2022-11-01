import { Box, Stack, Link, Text, Heading, Button, Tag } from "@chakra-ui/react";
import { listings, helps, discuss, challenge } from "../data";

function Listings() {
  return (
    <Box
      background="grey-50"
      borderRadius="md"
      boxShadow="0 0 0 1px var(--chakra-colors-grey-900-rgba-2)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="grey-100"
      >
        <Heading p="4" size="md">
          Listings
        </Heading>
        <Button
          as="a"
          variant="link"
          href="/"
          p="4"
          color="Blue"
          fontSize="sm"
          _hover={{ color: "blue" }}
        >
          See all
        </Button>
      </Box>

      <Box>
        {listings.map((box, i) => (
          <Link
            key={i}
            href="/"
            h="24"
            display="block"
            p="4"
            borderBottom="1px solid"
            borderColor="grey-100"
            _hover={{ background: "white" }}
          >
            <Text>{box.title}</Text>
            <Text color="grey" fontSize="sm">
              {box.event}
            </Text>
          </Link>
        ))}
      </Box>
      <Box w="100%" h="12" p="2" textAlign="center">
        <Link href="/" color="black" _hover={{ color: "primary-darker" }}>
          Create a Listing
        </Link>
      </Box>
    </Box>
  );
}

function Help() {
  return (
    <Box background="grey-50" borderRadius="md">
      <Box borderBottom="1px solid" borderColor="grey-100" h="12">
        <Link
          as="h3"
          p="2"
          fontWeight="bold"
          fontSize="1.25rem"
          href="/"
          _hover={{ color: "primary-darker" }}
        >
          #help
        </Link>
      </Box>

      <Box>
        {helps.map((box, i) => (
          <Link
            href="/"
            key={i}
            display="block"
            alignItems="center"
            h="28"
            borderBottom="1px solid"
            borderColor="grey-100"
            _hover={{ background: "white" }}
          >
            <Text pl="4" pt="4" pr="4">
              {box.title}
            </Text>
            {box.numberCmt == 0 ? (
              <Tag backgroundColor="yellow-300" borderRadius="md">
                New
              </Tag>
            ) : (
              <Text pl="4" pr="4" color="grey" fontSize="sm">
                {box.numberCmt} comments
              </Text>
            )}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

function Discuss() {
  return (
    <Box background="grey-50" borderRadius="md">
      <Box borderBottom="1px solid" borderColor="grey-100" h="12">
        <Link
          as="h3"
          p="2"
          fontWeight="bold"
          fontSize="1.25rem"
          href="/"
          _hover={{ color: "primary-darker" }}
        >
          #discuss
        </Link>
      </Box>

      <Box>
        {discuss.map((box, i) => (
          <Link
            href="/"
            key={i}
            display="block"
            alignItems="center"
            h="28"
            borderBottom="1px solid"
            borderColor="grey-100"
            _hover={{ background: "white" }}
          >
            <Text pl="4" pt="4" pr="4">
              {box.title}
            </Text>
            {box.numberCmt == 0 ? (
              <Tag backgroundColor="yellow-300" borderRadius="md">
                New
              </Tag>
            ) : (
              <Text pl="4" pr="4" color="grey" fontSize="sm">
                {box.numberCmt} comments
              </Text>
            )}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

function Challenge() {
  return (
    <Box background="grey-50" borderRadius="md">
      <Box borderBottom="1px solid" borderColor="grey-50" h="12">
        <Link
          as="h3"
          p="2"
          fontWeight="bold"
          fontSize="1.25rem"
          href="/"
          _hover={{ color: "primary-darker" }}
        >
          #challenge
        </Link>
      </Box>

      <Box>
        {challenge.map((box, i) => (
          <Link
            href="/"
            key={i}
            display="block"
            alignItems="center"
            h="28"
            borderBottom="1px solid"
            borderColor="grey-100"
            _hover={{ background: "white" }}
          >
            <Text pl="4" pt="4" pr="4">
              {box.title}
            </Text>
            {box.numberCmt == 0 ? (
              <Tag backgroundColor="yellow-300" borderRadius="md">
                New
              </Tag>
            ) : (
              <Text pl="4" pr="4" color="grey" fontSize="sm">
                {box.numberCmt} comments
              </Text>
            )}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default function IndexRight() {
  return (
    <Stack as="aside" spacing="4">
      <Listings />
      <Help />
      <Discuss />
      <Challenge />
    </Stack>
  );
}
