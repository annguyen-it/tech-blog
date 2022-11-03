import { Box, Image, Stack } from "@chakra-ui/react";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostMain({ dataPost }: PostMainProps) {
  return (
    <Stack as="nav" spacing="2">
      <Box borderRadius="md">
        <Image src={dataPost.coverImage} />
      </Box>
      <Stack marginTop="0" bg="white" overflow="hidden" h="100vh">
        <Markdown>{dataPost.body}</Markdown>
      </Stack>
    </Stack>
  );
}
