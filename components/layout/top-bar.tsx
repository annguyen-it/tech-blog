import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { MdSearch } from "react-icons/md";

function Navigation({ session }: { session: Session }) {
  const { user } = session;
  const nickname = user?.name?.toLowerCase().split(" ").join("");

  const items = [
    {
      label: user?.name,
      subLabel: nickname,
      url: `/${nickname}`,
    },
    {
      divider: true,
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      label: "Create Post",
      url: "/new",
    },
    {
      label: "Reading List",
      url: "/reading-list",
    },
    {
      label: "Settings",
      url: "/settings",
    },
    {
      label: "Sign Out",
      url: "/sign-out",
      divider: true,
    },
  ];

  return (
    <Box>
      <UnorderedList m="0" styleType="none">
        {items.map(({ label, subLabel, url, divider }) => (
          <ListItem
            key={url}
            mt={divider ? 2 : 0}
            pt={divider ? 2 : 0}
            borderTopWidth={divider ? 1 : 0}
            borderColor="var(--chakra-colors-base-20)"
          >
            <Button
              as="a"
              variant="flat-link"
              href={url}
              w="full"
              h={subLabel ? "auto !important" : undefined}
            >
              {subLabel && (
                <Box>
                  <Text fontWeight="500">{label}</Text>
                  <small>@{subLabel}</small>
                </Box>
              )}
              {!subLabel && label}
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default function TopBar() {
  const { data: session } = useSession();
  console.log(session);

  function handleSignIn() {
    signIn("github");
  }

  return (
    <Flex
      pos="fixed"
      top="0"
      left="0"
      right="0"
      h="14"
      py="2"
      px="4"
      bg="white"
      boxShadow="0 1px 1px rgba(0, 0, 0, 0.1)"
      zIndex="1"
    >
      {/* Left */}
      <Flex flex="1">
        <Flex align="center" ml="5" mr="10">
          <Box as="a" href="/">
            Logo
          </Box>
        </Flex>

        <InputGroup size="md">
          <Input placeholder="Search..." />
          <InputRightElement>
            <IconButton
              aria-label="Search keyword"
              icon={<MdSearch />}
              variant="ghost"
              h="97%"
              fontSize="24px"
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Right */}
      <ButtonGroup spacing="3" flex="1" justifyContent="flex-end">
        {session && (
          <>
            <Button
              as="a"
              variant="outline"
              colorScheme="blue"
              href="/new"
              fontWeight="600"
            >
              Create Post
            </Button>

            {/* <IconButton
              aria-label="Notification"
              icon={<BellIcon />}
              variant="ghost"
              fontSize="25px"
              ></IconButton> */}

            <Popover size="" placement="bottom-end" gutter={1}>
              <PopoverTrigger>
                <IconButton
                  aria-label="Navigation menu"
                  icon={
                    <Image
                      src={session.user?.image || ""}
                      alt="Avatar"
                      w="full"
                      h="full"
                      bg="var(--chakra-colors-grey-600)"
                      borderRadius="full"
                    />
                  }
                  colorScheme="gray"
                  p="1"
                  borderRadius="full"
                />
              </PopoverTrigger>
              <PopoverContent w="max-content" minW="250px">
                <PopoverBody mx="-1">
                  <Navigation session={session} />
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* <Button
              onClick={() => signOut()}
              // as="a"
              variant="outline"
              colorScheme="blue"
              // href="#"
              fontWeight="600"
            >
              Logout
            </Button> */}
          </>
        )}

        {!session && (
          <>
            <Button
              onClick={handleSignIn}
              // as="a"
              variant="ghost"
              colorScheme="blue"
              // href="#"
              fontWeight="400"
            >
              Log in
            </Button>

            <Button
              as="a"
              variant="outline"
              colorScheme="blue"
              href="#"
              fontWeight="600"
            >
              Create account
            </Button>
          </>
        )}
      </ButtonGroup>
    </Flex>
  );
}
