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
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Post, Response } from "../models";

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
          disabled={index > 0}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

function Post() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async function func() {
      const res = await axios.get<Response<Post[]>>(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts?page=${page}`
      );
      const newPosts = res.data.data;
      setPosts((state) => [...state, ...newPosts]);
    })();
  }, [page]);

  return (
    <Stack spacing="2">
      {posts.map((post, i) => (
        <Box
          as="article"
          key={i}
          bg="white"
          boxShadow="0 0 0 1px rgba(23, 23, 23, 0.1)"
          borderRadius="md"
          overflow="hidden"
        >
          {/* Image */}
          {i == 0 && post.coverImage && (
            <AspectRatio ratio={21 / 9}>
              <Image src={post.coverImage} alt={post.title} />
            </AspectRatio>
          )}

          <Stack direction="column" p="5" spacing="2">
            {/* Author */}
            <Stack direction="row" spacing="2">
              <Avatar
                name={post.user.name || ""}
                size="sm"
                src={post.user.image ?? undefined}
              />
              <Box lineHeight="shorter">
                <Box fontSize="sm" fontWeight="500">
                  <Link href={`/u/${post.user.nickname}`}>
                    {post.user.name}
                  </Link>
                </Box>
                <Box fontSize="xs">
                  {new Date(post.createdAt).toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {new Date(post.createdAt).getDate()}
                </Box>
              </Box>
            </Stack>

            {/* Body */}
            <Stack pl="10" spacing="1">
              <Heading fontSize="3xl">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </Heading>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <ButtonGroup variant="flat" size="sm" spacing="0">
                  {post.tags?.map((tag, i) => (
                    <Button
                      key={i}
                      onClick={() => router.push(`/t/${tag}`)}
                      fontWeight="400"
                    >
                      #{tag}
                    </Button>
                  ))}
                </ButtonGroup>
              )}

              {/* Buttons */}
              <Flex justify="space-between" align="center">
                <ButtonGroup variant="flat" size="sm" spacing="0">
                  <Button
                    onClick={() => router.push(`/post/${post.id}`)}
                    leftIcon={<FaRegHeart />}
                    fontWeight="400"
                  >
                    {post.likeCount} like{post.likeCount > 1 && "s"}
                  </Button>
                  <Button
                    onClick={() => router.push(`/post/${post.id}#comments`)}
                    leftIcon={<FaRegComment />}
                    disabled
                    fontWeight="400"
                  >
                    {!post.viewCount && "Add comment"}
                    {post.viewCount == 1 && "1 comment"}
                    {post.viewCount > 1 && `${post.viewCount} comments`}
                  </Button>
                </ButtonGroup>

                <Stack direction="row" align="center">
                  {/* <Box fontSize="xs">
                    {post.timeToRead} min{post.timeToRead > 1 && "s"} to read
                  </Box> */}
                  <IconButton
                    variant="flat"
                    icon={<FaRegBookmark />}
                    aria-label="Save post"
                    disabled
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
