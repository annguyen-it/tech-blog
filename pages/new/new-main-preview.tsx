import { Box, Heading } from "@chakra-ui/react";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

type PreviewProps = {
  value: Post;
};

export function NewMainPreview({ value }: PreviewProps) {
  return (
    <Box as="article">
      <Box as="header" pt="8">
        <Heading as="h1">{value.title}</Heading>
      </Box>
      <Box px="16" py="8">
        <Markdown>{value.body}</Markdown>
      </Box>
    </Box>
  );
}
