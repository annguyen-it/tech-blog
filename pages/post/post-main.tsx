import { Stack, Box, Image } from "@chakra-ui/react";
import { Markdown } from "../../components/elements/text/markdown";

type PostMainType = {
  dataPost: object;
};

export default function PostMain({ dataPost }: PostMainType) {
  const body = `## title\n
    ### title1\n
    #### title2\n
        **Hello**
        
    `;
  return (
    <Stack as="nav" spacing="2">
      <Box borderRadius="md">
        <Image src={dataPost.image} />
      </Box>
      <Stack marginTop="0" bg="white" overflow="hidden" h="100vh">
        <Markdown>{body}</Markdown>
      </Stack>
    </Stack>
  );
}
