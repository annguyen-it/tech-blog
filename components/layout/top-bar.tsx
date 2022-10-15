import {
  IconButton,
  InputRightElement,
  InputGroup,
  Flex,
  Text,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

export default function TopBar() {
  return (
    <Flex
      h="56px"
      py="2"
      px="4"
      bg="white"
      boxShadow="0 1px 1px rgba(0, 0, 0, 0.1)"
    >
      {/* Left */}
      <Flex flex="1">
        <Flex align="center" ml="5" mr="10">
          <Text>Logo</Text>
        </Flex>

        <InputGroup size="md">
          <Input placeholder="Search..." />
          <InputRightElement>
            <IconButton
              aria-label="Search keyword"
              icon={<MdSearch />}
              h="97%"
              variant="ghost"
              fontSize="24px"
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Right */}
      <Stack flex="1" justify="flex-end" direction="row" spacing="3">
        <Button
          variant="ghost"
          colorScheme="blue"
          fontWeight="400"
          as="a"
          href="#"
        >
          Log in
        </Button>

        {/* <IconButton
            aria-label="Search keyword"
            icon={<BellIcon />}
            variant="ghost"
            fontSize="25px"
          ></IconButton> */}

        <Button
          variant="outline"
          colorScheme="blue"
          fontWeight="600"
          as="a"
          href="#"
        >
          Create account
        </Button>
      </Stack>
    </Flex>
  );
}
