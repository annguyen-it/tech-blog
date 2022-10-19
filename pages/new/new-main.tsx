import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Tabs,
  Tooltip,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Editor, EditorRef } from "../../components/elements/editor/editor";
import { EditorToolbar } from "../../components/elements/editor/editor-toolbar";
import { Markdown } from "../../components/elements/text/markdown";
import { AutoResizeTextarea } from "../../components/elements/textarea/auto-resize-textarea";

type ChildProps = {
  value: Post;
  setValue?: Dispatch<SetStateAction<Post>>;
};
function Edit(props: ChildProps) {
  const editorRef = useRef<EditorRef>(null);

  return (
    <>
      {/* Top */}
      <Box px="16" py="8">
        <Box mb="5">
          <Tooltip label="Use ratio of 100:42 for best results">
            <Button variant="outline">Add a cover image</Button>
          </Tooltip>
        </Box>
        <Box mb="2">
          <AutoResizeTextarea
            w="full"
            placeholder="New post title here..."
            fontSize="5xl"
            fontWeight="800"
            value={props.value.title}
          ></AutoResizeTextarea>
        </Box>
        <Box>
          <Input variant="unstyled" placeholder="Add up to 4 tags..."></Input>
        </Box>
      </Box>

      {/* Bottom */}
      <Flex px="16" py="8" flexDir="column" flexGrow="1">
        <EditorToolbar
          editorRef={editorRef}
          tools={[
            "BOLD",
            "ITALIC",
            "LINK",
            "ORDERED_LIST",
            "UNORDERED_LIST",
            "HEADING",
            "QUOTE",
            "IMAGE",
            "CODE",
            "CODE_BLOCK",
            "UNDERLINE",
            "STRIKETHROUGH",
            "LINE_DIVIDER",
            "HELP",
          ]}
          variant="ghost"
          spacing="1"
          size="lg"
          pos="sticky"
          mx="-16"
          mb="6"
          px="16"
          py="2"
          bg="rgba(249, 249, 249)"
          fontSize="xl"
          flexShrink="0"
        ></EditorToolbar>

        <Editor
          ref={editorRef}
          value={props.value.body}
          onTextChange={(body) =>
            props.setValue?.((prevState) => ({ ...prevState, body }))
          }
          fontSize="lg"
          placeholder="Write your post content here..."
        ></Editor>
      </Flex>
    </>
  );
}

function Preview(props: ChildProps) {
  return (
    <Box as="article">
      <Box as="header" pt="8">
        <Heading as="h1">{props.value.title}</Heading>
      </Box>
      <Box px="16" py="8">
        <Markdown children={props.value.body}></Markdown>;
      </Box>
    </Box>
  );
}

type NewMainProps = { edit: boolean };
export type Post = {
  coverImage?: string;
  title: string;
  body: string;
};
export default function NewMain({ edit }: NewMainProps) {
  const [value, setValue] = useState<Post>({
    title: "This is title",
    body: `**bold**
  _italic_
  [link](url)
  [](url)
  
  1. ordered list
  
  - unordered list
  
  # h1
  ## h2
  ### h3
  #### h4
  ##### h5
  ###### h6
  
  > quote
  
  \`code\`
  
  \`\`\`
  code block
  \`\`\`
  
  ~~Strikethrough~~
  
  <u>underline<u>

  --- 
`,
  });

  return (
    <Flex
      h="calc(100vh - 56px - 80px)"
      direction="column"
      borderRadius="md"
      boxShadow="0 0 0 1px rgba(23, 23, 23, 0.1)"
      bg="white"
      overflow="auto"
    >
      {edit && <Edit value={value} setValue={setValue}></Edit>}
      {!edit && <Preview value={value} />}
    </Flex>
  );
}
