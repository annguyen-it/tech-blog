import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import router from "next/router";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostMain({ dataPost }: PostMainProps) {
  return (
    <Stack as="nav" spacing="2" bg="white" overflow="hidden">
      <Box>
        <AspectRatio ratio={21 / 9}>
          <Image
            borderTopRadius="md"
            src={dataPost.coverImage}
            alt={dataPost.title}
          />
        </AspectRatio>
      </Box>

      <Stack direction="column" p="5" spacing="2">
        {/* Author */}
        <Stack direction="row" spacing="2">
          <Avatar
            name={dataPost.author.name}
            size="sm"
            src={dataPost.author.image}
          />
          <Box lineHeight="shorter">
            <Box fontSize="sm" fontWeight="500">
              <Link href={`/u/${dataPost.author.url}`}>
                {dataPost.author.name}
              </Link>
            </Box>
            <Box fontSize="xs">
              {dataPost.createdAt.toLocaleString("default", {
                month: "long",
              })}{" "}
              {dataPost.createdAt.getDate()}
            </Box>
          </Box>
        </Stack>

        {/* Body */}
        <Stack pl="10" spacing="1">
          <Heading fontSize="3xl">
            <Text>{dataPost.title}</Text>
          </Heading>

          {/* Tags */}
          <ButtonGroup variant="flat" size="sm" spacing="0">
            {dataPost.tags.map((tag, i) => (
              <Button
                key={i}
                onClick={() => router.push(`/t/${tag}`)}
                fontWeight="400"
              >
                #{tag}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
        <Stack marginTop="0" bg="white" overflow="hidden">
          <Markdown>{dataPost.body}</Markdown>
        </Stack>
      </Stack>
    </Stack>
  );
}
