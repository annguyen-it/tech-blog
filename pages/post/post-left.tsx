import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Share } from "../../data";
import { Post } from "../../models";

function LoginBox() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      zIndex="99"
      background="rgb(255, 255, 255)"
    >
      <Box>
        <Text>Log in to continue</Text>
      </Box>
    </Stack>
  );
}

type PostLeftType = {
  post: Post;
};
export default function PostLeft({ post }: PostLeftType) {
  const { status } = useSession();
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const toast = useToast();

  console.log(post);

  const like = () => {
    if (status === "authenticated") {
      setLikeCount((prev) => prev + 1);
    } else {
      return <LoginBox />;
    }
  };

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ description: "Copied successfully" });
    } catch (err) {
      toast({
        title: "An error occurred",
        description: err as any,
        status: "error",
      });
    }
  }

  return (
    <ButtonGroup
      variant="flat"
      position="sticky"
      inset="0"
      top="24"
      w="full"
      zIndex="1"
    >
      <Stack as="nav" spacing="4" m="auto" textAlign="center">
        <Tooltip label="Like">
          <Flex direction="column" align="center">
            <IconButton
              onClick={like}
              borderRadius="50%"
              fontSize="24px"
              aria-label="Like"
              icon={<FaRegHeart />}
              colorScheme="red"
            ></IconButton>
            <Text>{likeCount}</Text>
          </Flex>
        </Tooltip>
        <Tooltip label="Jump to Comment">
          <Flex direction="column" align="center">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Comment"
              icon={<FaRegComment />}
              colorScheme="yellow"
              disabled
            ></IconButton>
            <Text>{post.viewCount}</Text>
          </Flex>
        </Tooltip>
        <Tooltip label="Save">
          <Flex direction="column" align="center">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Save"
              icon={<FaRegBookmark />}
              colorScheme="indigo"
              disabled
            ></IconButton>
            <Text>{post.shareCount}</Text>
          </Flex>
        </Tooltip>

        <Popover placement="right-start">
          <PopoverTrigger>
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Save"
              icon={<BsThreeDots />}
            ></IconButton>
          </PopoverTrigger>

          <PopoverArrow />
          <PopoverContent w="max-content" minW="250px">
            <PopoverBody>
              <ButtonGroup variant="flat" w="full">
                <Flex direction="column" w="full">
                  <Button
                    onClick={() => copyToClipboard()}
                    display="inline-block"
                    fontWeight="700"
                    backgroundColor="inherit"
                    textAlign="left"
                  >
                    Copy link
                  </Button>
                  {Share.map((share, i) => (
                    <Button
                      display="inline-block"
                      key={i}
                      fontWeight="400"
                      textAlign="left"
                    >
                      {share.text}
                    </Button>
                  ))}
                  <Button
                    display="inline-block"
                    fontWeight="400"
                    textAlign="left"
                    as="a"
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                    target="_blank"
                  >
                    Share to Twitter
                  </Button>
                  <Button
                    display="inline-block"
                    fontWeight="400"
                    textAlign="left"
                    as="a"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                  >
                    Share to Facebook
                  </Button>
                </Flex>
              </ButtonGroup>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </ButtonGroup>
  );
}
