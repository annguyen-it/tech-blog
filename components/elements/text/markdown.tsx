import {
  Box,
  Code,
  Heading,
  Link,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = { children: string };

export function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        a: ({ node, ...props }) => <Link {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            style={{ paddingLeft: "20px", borderLeft: "4px solid #d6d6d7" }}
            {...props}
          />
        ),
        code: ({ node, inline, ...props }) => (
          <Code
            {...props}
            px="1"
            borderRadius="md"
            bg="rgba(0, 0, 0, 0.1)"
            fontSize="80%"
            color="inherit"
          />
        ),
        h1: ({ node, ...props }) => (
          <Heading as="h1" {...props} fontSize="4xl" />
        ),
        h2: ({ node, ...props }) => (
          <Heading as="h2" {...props} fontSize="3xl" />
        ),
        h3: ({ node, ...props }) => (
          <Heading as="h3" {...props} fontSize="2xl" />
        ),
        h4: ({ node, ...props }) => (
          <Heading as="h4" {...props} fontSize="xl" />
        ),
        h5: ({ node, ...props }) => (
          <Heading as="h5" {...props} fontSize="lg" />
        ),
        h6: ({ node, ...props }) => (
          <Heading as="h6" {...props} fontSize="md" />
        ),
        ol: ({ node, ordered, ...props }) => <OrderedList {...props} />,
        p: ({ node, ...props }) => <Text {...props} />,
        pre: ({ node, ...props }) => (
          <Box p="5" borderRadius="md" bg="#08090a" color="#f8f8f2">
            <pre {...props} />
          </Box>
        ),
        ul: ({ node, ordered, ...props }) => <UnorderedList {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
