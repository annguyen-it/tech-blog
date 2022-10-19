import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { Editor, EditorRef } from "../../components/elements/editor/editor";
import { EditorToolbar } from "../../components/elements/editor/editor-toolbar";
import { Markdown } from "../../components/elements/text/markdown";
import { AutoResizeTextarea } from "../../components/elements/textarea/auto-resize-textarea";

type ChildProps = {
  value: Post;
  setValue?: Dispatch<SetStateAction<Post>>;
};
function Edit({ value, setValue }: ChildProps) {
  const editorRef = useRef<EditorRef>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  function onClickUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setValue?.((prevState) => ({
        ...prevState,
        coverImage: e.target.files![0],
      }));
    }
  }

  return (
    <>
      {/* Top */}
      <Box px="16" py="8">
        {/* Cover photo */}
        <Flex mb="5" align="center">
          {value.coverImage && (
            <Image
              src={URL.createObjectURL(value.coverImage)}
              h="105px"
              w="250px"
              objectFit="scale-down"
              overflowWrap="anywhere"
              borderRadius="md"
            ></Image>
          )}

          <Tooltip label="Use ratio of 100:42 for best results">
            <Button onClick={() => imageRef.current?.click()} variant="outline">
              {value.coverImage ? "Change" : "Add a cover image"}
            </Button>
          </Tooltip>
          {value.coverImage && (
            <Button
              variant="ghost"
              color="red"
              _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              onClick={() =>
                setValue?.((prevState) => ({
                  ...prevState,
                  coverImage: null,
                }))
              }
            >
              Remove
            </Button>
          )}
          <Input
            ref={imageRef}
            onChange={onClickUpload}
            type="file"
            accept="image/*"
            display="none"
          ></Input>
          {!!value.coverImage && <Box></Box>}
        </Flex>

        {/* Title */}
        <Box mb="2">
          <AutoResizeTextarea
            w="full"
            placeholder="New post title here..."
            fontSize="5xl"
            fontWeight="800"
            value={value.title}
          ></AutoResizeTextarea>
        </Box>

        {/* Tags */}
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
          value={value.body}
          onTextChange={(body) =>
            setValue?.((prevState) => ({ ...prevState, body }))
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
  coverImage: File | null;
  title: string;
  body: string;
};
export default function NewMain({ edit }: NewMainProps) {
  const [value, setValue] = useState<Post>({
    title: "",
    body: "",
    coverImage: null,
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
