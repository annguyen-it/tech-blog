import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaHashtag,
  FaHome,
  FaQuestion,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";

function Tile({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      display="flex"
      alignItems="center"
      px="4"
      py="2"
      borderRadius="md"
      _hover={{
        background: "rgba(59, 73, 223, 0.1)",
        textDecoration: "underline",
      }}
    >
      {children}
    </Link>
  );
}

function Introduction() {
  return (
    <Stack
      as="nav"
      boxShadow="0 0 0 1px rgba(23, 23, 23, 0.05)"
      borderRadius="md"
      background="white"
      p="4"
      spacing="4"
    >
      <Heading size="md">
        <Link href="/" color="blue">
          DEV Community 👩&zwj;💻👨&zwj;💻
        </Link>{" "}
        is a community of 938,136 amazing developers
      </Heading>
      <Text>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </Text>

      <Stack direction="column" spacing="1">
        <Button
          variant="outline"
          colorScheme="blue"
          fontWeight="600"
          as="a"
          href="#"
        >
          Create account
        </Button>

        <Button
          variant="ghost"
          colorScheme="blue"
          fontWeight="400"
          as="a"
          href="#"
        >
          Log in
        </Button>
      </Stack>
    </Stack>
  );
}

function Category() {
  const categories = [
    {
      title: "Home",
      icon: <FaHome />,
      href: "/",
    },
    {
      title: "Hashtags",
      icon: <FaHashtag />,
      href: "/hashtags",
    },
    {
      title: "FAQ",
      icon: <FaQuestion />,
      href: "/faq",
    },
  ];

  return (
    <Box as="nav">
      <List>
        {categories.map((cat) => (
          <ListItem key={cat.href}>
            <Tile href={cat.href}>
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
    <Stack as="nav" direction="row">
      <IconButton
        variant="ghost"
        aria-label="twitter"
        icon={<FaTwitter />}
        title="Twitter"
      ></IconButton>
      <IconButton
        variant="ghost"
        aria-label="facebook"
        icon={<FaFacebookF />}
        title="Facebook"
      ></IconButton>
      <IconButton
        variant="ghost"
        aria-label="github"
        icon={<FaGithub />}
        title="Github"
      ></IconButton>
      <IconButton
        variant="ghost"
        aria-label="instagram"
        icon={<FaInstagram />}
        title="Instagram"
      ></IconButton>
      <IconButton
        variant="ghost"
        aria-label="twitch"
        icon={<FaTwitch />}
        title="Twitch"
      ></IconButton>
    </Stack>
  );
}

function Tag() {
  const tags = [
    "javascript",
    "webdev",
    "beginners",
    "programming",
    "react",
    "python",
    "angular",
    "csharp",
    "cplusplus",
    "ruby",
  ];

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

export default function IndexLeft() {
  return (
    <Stack as="aside" spacing="4">
      <Introduction></Introduction>
      <Category></Category>
      <SocialNetwork></SocialNetwork>
      <Tag></Tag>
    </Stack>
  );
}
