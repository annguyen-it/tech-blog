import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Editor, EditorRef } from "../../components/elements/editor/editor";
import { EditorToolbar } from "../../components/elements/editor/editor-toolbar";
import { Markdown } from "../../components/elements/text/markdown";
import { AutoResizeTextarea } from "../../components/elements/textarea/auto-resize-textarea";

export default function NewTop() {
  const [value, setValue] = useState(`**bold**
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
`);
  const editorRef = useRef<EditorRef>(null);

  return (
    <Flex
      h="calc(100vh - 56px - 80px)"
      direction="column"
      borderRadius="md"
      boxShadow="0 0 0 1px rgba(23, 23, 23, 0.1)"
      bg="white"
      overflow="auto"
    >
      {/* Top */}
      <Box px="16" py="8">
        <Box mb="5">
          <Button variant="outline">Add a cover image</Button>
        </Box>
        <Box mb="2">
          <AutoResizeTextarea
            w="full"
            placeholder="New post title here..."
            fontSize="5xl"
            fontWeight="800"
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
          value={value}
          onTextChange={setValue}
          fontSize="lg"
          placeholder="Write your post content here..."
        ></Editor>

        <Box mt="10" fontSize="xl">
          <Markdown children={value}></Markdown>
        </Box>
      </Flex>
    </Flex>
  );
}
