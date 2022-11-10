import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { memo } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { categories, tags } from "../data";

type TileProps = {
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
};
function Tile({ children, href, disabled }: TileProps) {
  return (
    <Link
      href={href}
      variant="secondary"
      display="flex"
      alignItems="center"
      px="4"
      py="2"
      borderRadius="md"
      _hover={{
        background: "primary.400.rgba",
        color: "primary.600",
        textDecoration: "underline",
      }}
      cursor={disabled ? "not-allowed" : "pointer"}
    >
      {children}
    </Link>
  );
}

function Introduction() {
  const router = useRouter();

  return (
    <Stack
      as="nav"
      boxShadow="0 0 0 1px var(--chakra-colors-grey-900-rgba-2)"
      borderRadius="md"
      background="white"
      p="4"
      spacing="4"
      data-cy="home_introduction"
    >
      <Heading size="md">
        <Link href="/" variant="blue">
          Tech blog
        </Link>{" "}
        is a community of 938,136 amazing developers
      </Heading>
      <Text>
        We&apos;re a place where coders share, stay up-to-date and grow their
        careers.
      </Text>

      <Stack direction="column" spacing="1">
        <Button
          onClick={() => router.push("/signup")}
          variant="outline"
          fontWeight="600"
        >
          Create account
        </Button>

        <Button
          onClick={() => router.push("/login")}
          variant="flat"
          fontWeight="400"
        >
          Log in
        </Button>
      </Stack>
    </Stack>
  );
}

function Category() {
  return (
    <Box as="nav">
      <List>
        {categories.map((cat) => (
          <ListItem key={cat.href}>
            <Tile href={cat.href} disabled={cat.disabled}>
              <Box mr="2"> {cat.icon}</Box> {cat.title}
            </Tile>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function SocialNetwork() {
  return (
    <ButtonGroup as="nav" variant="flat">
      <IconButton aria-label="twitter" icon={<FaTwitter />} title="Twitter" />
      <IconButton
        aria-label="facebook"
        icon={<FaFacebookF />}
        title="Facebook"
      />
      <IconButton aria-label="github" icon={<FaGithub />} title="Github" />
      <IconButton
        aria-label="instagram"
        icon={<FaInstagram />}
        title="Instagram"
      />
      <IconButton aria-label="twitch" icon={<FaTwitch />} title="Twitch" />
    </ButtonGroup>
  );
}

function Tag() {
  return (
    <Box as="nav">
      <Heading as="h3" size="sm" p="2">
        Popular Tags
      </Heading>
      <Box maxH="42vh" overflow="auto">
        {tags.map((tag) => (
          <Tile key={tag} href={`/t/${tag}`}>
            #{tag}
          </Tile>
        ))}
      </Box>
    </Box>
  );
}

function IndexLeft() {
  const { status } = useSession();

  return (
    <Stack as="aside" spacing="4">
      {status === "unauthenticated" && <Introduction />}
      <Category />
      <SocialNetwork />
      <Tag />
    </Stack>
  );
}

export default memo(IndexLeft);
