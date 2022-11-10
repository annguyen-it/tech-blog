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
} from "@chakra-ui/react";
import router from "next/router";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostMain({ dataPost }: PostMainProps) {
  return (
    <Box as="article" mb="4" bg="white" borderRadius="md" overflow="hidden">
      {/* Header */}
      <Box as="header">
        {dataPost.coverImage && (
          <Box>
            <AspectRatio ratio={21 / 9}>
              <Image
                borderTopRadius="md"
                src={dataPost.coverImage}
                alt={dataPost.title}
              />
            </AspectRatio>
          </Box>
        )}

        <Stack spacing="2" pt="8" px="12">
          {/* Author */}
          <Stack direction="row" align="center" spacing="3" mb="3">
            <Avatar
              name="Author"
              size="sm"
              src={dataPost.user.image ?? undefined}
            />
            <Box lineHeight="shorter">
              <Box fontWeight="700">
                <Link href={`/u/${dataPost.user.nickname}`} color="grey.700">
                  {dataPost.user.name}
                </Link>
              </Box>
              <Box fontSize="xs" color="base.60">
                Posted on{" "}
                {new Date(dataPost.createdAt).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {new Date(dataPost.createdAt).getDate()}
              </Box>
            </Box>
          </Stack>

          {/* Title */}
          <Heading as="h1" fontSize="4xl" fontWeight="800">
            {dataPost.title}
          </Heading>

          {/* Tags */}
          {dataPost.tags?.length && (
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
          )}
        </Stack>
      </Box>

      {/* Body */}
      <Box py="8" px="12">
        <Markdown>{dataPost.content}</Markdown>
      </Box>
    </Box>
  );
}
