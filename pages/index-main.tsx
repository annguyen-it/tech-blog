import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Posts } from "../data";

type NavButtonsType = {
  selectedTabIndex: number;
  setSelectedTabIndex: (tabIndex: number) => void;
};
function NavButtons({ selectedTabIndex, setSelectedTabIndex }: NavButtonsType) {
  const router = useRouter();
  const buttons = [
    {
      label: "Relevant",
      url: "/",
    },
    {
      label: "Latest",
      url: "/latest",
    },
    {
      label: "Top",
      url: "/top/week",
    },
  ];

  function onClick(index: number) {
    setSelectedTabIndex(index);
    router.push(buttons[index].url);
  }

  return (
    <ButtonGroup variant="ghost" spacing="0">
      {buttons.map(({ label }, index) => (
        <Button
          key={index}
          onClick={() => onClick(index)}
          fontSize="lg"
          fontWeight={index === selectedTabIndex ? 700 : 400}
          color={index === selectedTabIndex ? "base.100" : "base.70"}
          _hover={{
            background: "white",
            color: "primary.500",
          }}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

function Post() {
  const router = useRouter();

  return (
    <Stack spacing="2">
      {Posts.map((post, i) => (
        <Box
          as="article"
          key={post.id}
          bg="white"
          boxShadow="0 0 0 1px rgba(23, 23, 23, 0.1)"
          borderRadius="md"
          overflow="hidden"
        >
          {/* Image */}
          {i == 0 && (
            <AspectRatio ratio={21 / 9}>
              <Image src={post.image} alt={post.title} />
            </AspectRatio>
          )}

          <Stack direction="column" p="5" spacing="2">
            {/* Author */}
            <Stack direction="row" spacing="2">
              <Avatar
                name={post.author.name}
                size="sm"
                src={post.author.image}
              />
              <Box lineHeight="shorter">
                <Box fontSize="sm" fontWeight="500">
                  <Link href={`/u/${post.author.url}`}>{post.author.name}</Link>
                </Box>
                <Box fontSize="xs">
                  {post.createdDate.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {post.createdDate.getDate()}
                </Box>
              </Box>
            </Stack>

            {/* Body */}
            <Stack pl="10" spacing="1">
              <Heading fontSize="3xl">
                <Link href={`/post/${post.url}`}>{post.title}</Link>
              </Heading>

              {/* Tags */}
              <ButtonGroup variant="flat" size="sm" spacing="0">
                {post.tags.map((tag, i) => (
                  <Button
                    key={i}
                    onClick={() => router.push(`/t/${tag}`)}
                    fontWeight="400"
                  >
                    #{tag}
                  </Button>
                ))}
              </ButtonGroup>

              {/* Buttons */}
              <Flex justify="space-between">
                <ButtonGroup variant="flat" size="sm" spacing="0">
                  {post.likes && (
                    <Button
                      onClick={() => router.push(`/post/${post.url}`)}
                      leftIcon={<FaRegHeart />}
                      fontWeight="400"
                    >
                      {post.likes} like{post.likes > 1 && "s"}
                    </Button>
                  )}
                  <Button
                    onClick={() => router.push(`${post.url}#comments`)}
                    leftIcon={<FaRegComment />}
                    fontWeight="400"
                  >
                    {!post.comments && "Add comment"}
                    {post.comments == 1 && "1 comment"}
                    {post.comments > 1 && `${post.comments} comments`}
                  </Button>
                </ButtonGroup>

                <Stack direction="row" align="center">
                  <Box fontSize="xs">
                    {post.timeToRead} min{post.timeToRead > 1 && "s"} to read
                  </Box>
                  <IconButton
                    variant="flat"
                    icon={<FaRegBookmark />}
                    aria-label="Save post"
                  />
                </Stack>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

export default function IndexMain() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <Stack as="main" spacing="2">
      <Box as="nav">
        <NavButtons
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
        />
      </Box>
      <Box>
        <Post />
      </Box>
    </Stack>
  );
}
