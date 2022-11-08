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
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MdSearch } from "react-icons/md";
import { NextUtils } from "../../utils/next";

function Navigation({ session }: { session: Session | null }) {
  const router = useRouter();

  if (!session) {
    return <></>;
  }

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
      url: "/out",
      divider: true,
      dataCy: "layout_sign-out",
    },
  ];

  return (
    <Box>
      <UnorderedList m="0" styleType="none">
        {items.map(({ label, subLabel, url, divider, dataCy }) => (
          <ListItem
            key={url}
            mt={divider ? 2 : 0}
            pt={divider ? 2 : 0}
            borderTopWidth={divider ? 1 : 0}
            borderColor="base-20"
          >
            <Button
              variant="flat-link"
              onClick={() => NextUtils.navigate(router, url)}
              w="full"
              h={subLabel ? "auto !important" : undefined}
              data-cy={dataCy}
            >
              {subLabel && (
                <Box>
                  <Text fontWeight="500">{label}</Text>
                  <Text as="small">@{subLabel}</Text>
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

type FadeProps = {
  display: boolean;
  children: React.ReactNode;
};
function Fade({ children, display }: FadeProps) {
  return (
    <Box
      width={display ? undefined : 0}
      visibility={display ? "visible" : "hidden"}
      opacity={display ? 1 : 0}
      transition="all 300ms, visibility 0ms"
    >
      {children}
    </Box>
  );
}

export default function TopBar() {
  const { data, status } = useSession();
  const router = useRouter();

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
          <Box
            onClick={() => NextUtils.navigate(router, "/")}
            cursor="pointer"
            data-cy="layout_logo"
          >
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
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Right */}
      <Box flex="1" display="flex" justifyContent="flex-end">
        {/* Authenticated */}
        <Fade display={status === "authenticated"}>
          <ButtonGroup spacing="3">
            <Button
              onClick={() => NextUtils.navigate(router, "/new")}
              variant="primary-outline"
              colorScheme="blue"
              fontWeight="600"
              data-cy="layout_create-post"
            >
              Create Post
            </Button>

            <Popover placement="bottom-end" gutter={1}>
              <PopoverTrigger>
                <IconButton
                  aria-label="Navigation menu"
                  icon={
                    <Image
                      src={data?.user?.image || ""}
                      alt="Avatar"
                      w="full"
                      h="full"
                      bg="grey-600"
                      borderRadius="full"
                    />
                  }
                  variant="solid"
                  p="1"
                  borderRadius="full"
                  data-cy="layout_avatar"
                />
              </PopoverTrigger>
              <PopoverContent w="max-content" minW="250px">
                <PopoverBody mx="-1">
                  <Navigation session={data} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </Fade>

        {/* Unauthenticated */}
        <Fade display={status === "unauthenticated"}>
          <ButtonGroup spacing="3" flex="1" justifyContent="flex-end">
            <Button
              onClick={() => NextUtils.navigate(router, "/login")}
              variant="flat"
              colorScheme="blue"
              fontWeight="400"
              data-cy="layout_login"
            >
              Log in
            </Button>

            <Button
              onClick={() => NextUtils.navigate(router, "/signup")}
              variant="primary-outline"
              colorScheme="blue"
              fontWeight="600"
            >
              Create account
            </Button>
          </ButtonGroup>
        </Fade>
      </Box>
    </Flex>
  );
}
