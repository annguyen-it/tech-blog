import { Box, Stack, Link, Text, Heading } from "@chakra-ui/react";
import { listings, helps, discuss, challenge } from "../data";

function Listings() {
  return (
    <Box background="rgb(250,250,250)" borderRadius="md">
      <Box
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid rgb(245,245,245)"
      >
        <Heading p="4" size="md">
          Listings
        </Heading>
        <Link p="4" href="/" color="Blue" _hover={{ color: "blue" }}>
          See all
        </Link>
      </Box>

      <Box>
        {listings.map((box, i) => (
          <Link
            href="/"
            key={i}
            display="block"
            alignItems="center"
            h="24"
            borderBottom="1px solid rgb(245,245,245)"
            _hover={{ background: "white" }}
          >
            <Text pl="4" pt="4" pr="4">
              {box.title}
            </Text>
            <Text pl="4" pr="4" color="grey" fontSize="sm">
              {box.event}
            </Text>
          </Link>
        ))}
      </Box>
      <Box w="100%" h="12" p="2" textAlign="center">
        <Link href="/" color="black" _hover={{ color: "rgb(47, 58, 178)" }}>
          Create a Listing
        </Link>
      </Box>
    </Box>
  );
}


function Help() {
  return (
    <Box background="rgb(250,250,250)" borderRadius="md">
      <Box borderBottom="1px solid rgb(245,245,245)" h="12">
        <Link
          as="h3"
          p="2"
          fontWeight="bold"
          fontSize="1.25rem"
          href="/"
          _hover={{ color: "rgb(47, 58,178)" }}
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
            borderBottom="1px solid rgb(245,245,245)"
            _hover={{ background: "white" }}
          >
            <Text pl="4" pt="4" pr="4">
              {box.title}
            </Text>
            {box.numberCmt == 0 ? (
                <Text pl="4" pr="4" backgroundColor='rgb(252,211,77)' w='20%' borderRadius="md">
                    New
                </Text>
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
      <Box background="rgb(250,250,250)" borderRadius="md">
        <Box borderBottom="1px solid rgb(245,245,245)" h="12">
          <Link
            as="h3"
            p="2"
            fontWeight="bold"
            fontSize="1.25rem"
            href="/"
            _hover={{ color: "rgb(47, 58,178)" }}
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
              borderBottom="1px solid rgb(245,245,245)"
              _hover={{ background: "white" }}
            >
              <Text pl="4" pt="4" pr="4">
                {box.title}
              </Text>
              {box.numberCmt == 0 ? (
                  <Text pl="4" pr="4" backgroundColor='rgb(252,211,77)' w='20%' borderRadius="md">
                      New
                  </Text>
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
      <Box background="rgb(250,250,250)" borderRadius="md">
        <Box borderBottom="1px solid rgb(245,245,245)" h="12">
          <Link
            as="h3"
            p="2"
            fontWeight="bold"
            fontSize="1.25rem"
            href="/"
            _hover={{ color: "rgb(47, 58,178)" }}
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
              borderBottom="1px solid rgb(245,245,245)"
              _hover={{ background: "white" }}
            >
              <Text pl="4" pt="4" pr="4">
                {box.title}
              </Text>
              {box.numberCmt == 0 ? (
                  <Text pl="4" pr="4" backgroundColor='rgb(252,211,77)' w='20%' borderRadius="md">
                      New
                  </Text>
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
