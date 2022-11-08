import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
  useBoolean,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { MdOutlineClose } from "react-icons/md";
import { NewSuggestionContext } from "../../../pages/new";
import { Editor, EditorRef } from "../../elements/editor/editor";
import { EditorToolbar } from "../../elements/editor/editor-toolbar";
import { AutoResizeTextarea } from "../../elements/textarea/auto-resize-textarea";
import { EditPost } from "../../../models";

function CoverPhoto() {
  const { register, setValue, control } = useFormContext<EditPost>();
  const { coverImage } = useWatch({ control });
  const [preview, setPreview] = useState<string>("");
  const imageRef = useRef<HTMLInputElement>(null);

  function onClickUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setValue("coverImage", e.target.files[0]);
    }
  }

  useEffect(() => {
    if (!coverImage) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(coverImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [coverImage]);

  useEffect(() => {
    if (!preview && imageRef.current) {
      imageRef.current.value = "";
    }
  }, [preview]);

  return (
    <Flex mb="5" align="center">
      {coverImage && (
        <Image
          src={preview}
          alt="Post cover"
          h="105px"
          w="250px"
          objectFit="scale-down"
          overflowWrap="anywhere"
          borderRadius="md"
        />
      )}

      <Tooltip label="Use ratio of 100:42 for best results">
        <Button onClick={() => imageRef.current?.click()} variant="rock">
          {coverImage ? "Change" : "Add a cover image"}
        </Button>
      </Tooltip>
      {coverImage && (
        <Button
          onClick={() => setValue("coverImage", null)}
          variant="flat"
          colorScheme="red"
          color="red"
        >
          Remove
        </Button>
      )}
      <Input
        {...register("coverImage")}
        ref={imageRef}
        onChange={onClickUpload}
        type="file"
        accept="image/*"
        display="none"
      />
      {!!coverImage && <Box />}
    </Flex>
  );
}

function Title() {
  const { setSuggestionField } = useContext(NewSuggestionContext);
  const { register } = useFormContext<EditPost>();
  const { ref: refCallback, ...registerItem } = register("title");
  const ref = useRef<HTMLTextAreaElement | null>(null);

  return (
    <Box mb="2">
      <AutoResizeTextarea
        {...registerItem}
        ref={(e) => {
          refCallback(e);
          ref.current = e;
        }}
        onFocus={() =>
          setSuggestionField({
            name: "title",
            y: ref.current?.getBoundingClientRect().y || 0,
          })
        }
        w="full"
        minH="unset"
        placeholder="New post title here..."
        fontSize="5xl"
        fontWeight="800"
      />
    </Box>
  );
}

function Tags() {
  const { setSuggestionField } = useContext(NewSuggestionContext);
  const { setValue, control } = useFormContext<EditPost>();
  const { tags } = useWatch({ control });
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenPopup, setIsOpenPopup] = useBoolean();
  const [editingTagIndex, setEditingTagIndex] = useState(-1);

  if (!tags) {
    return <></>;
  }

  const items = [
    {
      tag: "beginners",
      description:
        '"A journey of a thousand miles begins with a single step." - Chinese Proverb',
    },
    {
      tag: "programming",
      description: "The magic behind computers. 💻",
    },
    {
      tag: "tutorial",
      description:
        "Tutorial is a general purpose tag. We welcome all types of tutorial - code related or not! It's all about learning, and using tutorials to teach others!",
    },
  ];

  function onClickTag(index: number) {
    setEditingTagIndex(index);
    const input = inputRef.current;
    if (!input) {
      return;
    }

    input.focus();
    input.value = tags![index];
  }

  function updateTags(tag?: string) {
    if (!tag) {
      return;
    }

    if (editingTagIndex !== -1) {
      setValue(
        "tags",
        tags!.reduce<string[]>((acc, curr, i) => {
          if (i !== editingTagIndex) {
            acc.push(curr);
          } else if (tag) {
            acc.push(tag);
          }
          return acc;
        }, [])
      );
    } else {
      if (!tags!.includes(tag)) {
        setValue("tags", [...tags!, tag]);
      }
    }
  }

  function onBlur() {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    updateTags(input.value);

    setTimeout(() => {
      if (document.activeElement !== input) {
        setEditingTagIndex(-1);
        setIsOpenPopup.off();
        input.value = "";
      }
    }, 200);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const notPreventKeyList = [
      "Backspace",
      "Delete",
      "ArrowRight",
      "ArrowLeft",
    ];

    if (
      (!notPreventKeyList.includes(e.key) && e.key.length > 1) ||
      !/\w/.test(e.key)
    ) {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      updateTags(input.value);
      setIsOpenPopup.off();
      setEditingTagIndex(-1);
      input.value = "";
    }
  }

  return (
    <Box pos="relative">
      <Popover
        isOpen={isOpenPopup}
        onClose={setIsOpenPopup.off}
        autoFocus={false}
        matchWidth={true}
      >
        <PopoverTrigger>
          <List w="full" display="flex" flexWrap="wrap">
            {/* Tags */}
            {tags.map((tag, index) => (
              <ListItem
                key={tag}
                display={editingTagIndex === index ? "none" : ""}
                order={index + 1}
              >
                <ButtonGroup variant="tag" size="sm" isAttached mr="1" mb="1">
                  <Button
                    onClick={() => onClickTag(index)}
                    px="1"
                    fontWeight="400"
                    fontSize="md"
                    cursor="text"
                  >
                    # {tag}
                  </Button>
                  <IconButton
                    onClick={() =>
                      setValue(
                        "tags",
                        tags.filter((v) => v !== tag)
                      )
                    }
                    aria-label={`Remove ${tag}`}
                    icon={<MdOutlineClose />}
                    px="1"
                    fontSize="xl"
                    _hover={{ color: "red" }}
                  />
                </ButtonGroup>
              </ListItem>
            ))}

            {/* Input to add item */}
            <ListItem
              alignSelf="center"
              order={
                editingTagIndex !== -1 ? editingTagIndex + 1 : tags.length + 1
              }
            >
              <Input
                ref={inputRef}
                variant="unstyled"
                placeholder={
                  tags.length ? "Add another..." : "Add up to 4 tags..."
                }
                onClick={setIsOpenPopup.on}
                onFocus={() =>
                  setSuggestionField({
                    name: "tags",
                    y: inputRef.current?.getBoundingClientRect().y || 0,
                  })
                }
                onKeyDown={onKeyDown}
                onBlur={() => onBlur()}
                px="0.5"
                py="px"
              />
            </ListItem>
          </List>
        </PopoverTrigger>

        {/* Popup */}
        <Portal containerRef={popupRef}>
          <PopoverContent w="auto">
            <PopoverHeader p="3">
              <Heading fontSize="lg">Top tags</Heading>
            </PopoverHeader>
            <PopoverBody p="1" maxH="500px" overflow="auto">
              <List>
                {items
                  .filter((item) => tags.indexOf(item.tag) === -1)
                  .map((item) => (
                    <ListItem key={item.tag} cursor="pointer">
                      <Box
                        onClick={() => updateTags(item.tag)}
                        p="3"
                        borderRadius="md"
                        _hover={{ backgroundColor: "grey.100" }}
                      >
                        <Box fontWeight="500">#{item.tag}</Box>
                        <Text noOfLines={2} fontSize="sm">
                          {item.description}
                        </Text>
                      </Box>
                    </ListItem>
                  ))}
              </List>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      {/* Tag wrapper */}
      <Box ref={popupRef} pos="absolute" top="8" w="full" bg="red" />
    </Box>
  );
}

function Body() {
  const { setSuggestionField } = useContext(NewSuggestionContext);
  const editorRef = useRef<EditorRef>(null);

  return (
    <Flex px="16" py="8" flexDir="column" flexGrow="1">
      <EditorToolbar
        editorRef={editorRef}
        variant="flat"
        spacing="1"
        size="md"
        pos="sticky"
        mx="-16"
        mb="6"
        px="16"
        py="2"
        bg="base.0"
        fontSize="xl"
        flexShrink="0"
      />

      <Editor<EditPost>
        ref={editorRef}
        onFocus={() =>
          setSuggestionField({
            name: "body",
            y: editorRef.current?.getBoundingClientRect().y || 0,
          })
        }
        controlKey="body"
        minRows={8}
        fontSize="lg"
        placeholder="Write your post content here..."
      />
    </Flex>
  );
}

export default function NewMainEdit() {
  return (
    <>
      <Box px="16" py="8">
        <CoverPhoto />
        <Title />
        {/* <Tags /> */}
      </Box>

      <Body />
    </>
  );
}
