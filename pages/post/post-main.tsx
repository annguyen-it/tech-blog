import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostMain({ dataPost }: PostMainProps) {
  return (
    <Stack as="nav" spacing="2">
      <Box borderRadius="md">
        <Image priority={true} src={dataPost.coverImage} alt={dataPost.title} />
      </Box>
      <Stack marginTop="0" bg="white" overflow="hidden" h="100vh">
        <Markdown>{dataPost.body}</Markdown>
      </Stack>
    </Stack>
  );
}
