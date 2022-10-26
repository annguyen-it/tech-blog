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
import { NewSuggestionContext } from ".";
import { Editor, EditorRef } from "../../components/elements/editor/editor";
import { EditorToolbar } from "../../components/elements/editor/editor-toolbar";
import { AutoResizeTextarea } from "../../components/elements/textarea/auto-resize-textarea";
import { Post } from "../../models";

function CoverPhoto() {
  const { register, setValue, control } = useFormContext<Post>();
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
        ></Image>
      )}

      <Tooltip label="Use ratio of 100:42 for best results">
        <Button onClick={() => imageRef.current?.click()} variant="outline">
          {coverImage ? "Change" : "Add a cover image"}
        </Button>
      </Tooltip>
      {coverImage && (
        <Button
          onClick={() => setValue("coverImage", null)}
          variant="ghost"
          color="red"
          _hover={{ backgroundColor: "grey-900-rgba-2" }}
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
      ></Input>
      {!!coverImage && <Box></Box>}
    </Flex>
  );
}

function Title() {
  const { setSuggestionField } = useContext(NewSuggestionContext);
  const { register } = useFormContext();
  const ref = useRef<HTMLTextAreaElement | null>(null);

  return (
    <Box mb="2">
      <AutoResizeTextarea
        {...register("title")}
        ref={ref}
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
      ></AutoResizeTextarea>
    </Box>
  );
}

function Hashtags() {
  const { setSuggestionField } = useContext(NewSuggestionContext);
  const { setValue, control } = useFormContext<Post>();
  const { hashtags } = useWatch({ control });
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenPopup, setIsOpenPopup] = useBoolean();
  const [editingHashtagIndex, setEditingHashtagIndex] = useState(-1);

  if (!hashtags) {
    return <></>;
  }

  const items = [
    {
      hashtag: "beginners",
      description:
        '"A journey of a thousand miles begins with a single step." - Chinese Proverb',
    },
    {
      hashtag: "programming",
      description: "The magic behind computers. 💻",
    },
    {
      hashtag: "tutorial",
      description:
        "Tutorial is a general purpose tag. We welcome all types of tutorial - code related or not! It's all about learning, and using tutorials to teach others!",
    },
  ];

  function onClickHashtag(index: number) {
    setEditingHashtagIndex(index);
    const input = inputRef.current;
    if (!input) {
      return;
    }

    input.focus();
    input.value = hashtags![index];
  }

  function updateHashtags(hashtag?: string) {
    if (!hashtag) {
      return;
    }

    if (editingHashtagIndex !== -1) {
      setValue(
        "hashtags",
        hashtags!.reduce<string[]>((acc, curr, i) => {
          if (i !== editingHashtagIndex) {
            acc.push(curr);
          } else if (hashtag) {
            acc.push(hashtag);
          }
          return acc;
        }, [])
      );
    } else {
      if (!hashtags!.includes(hashtag)) {
        setValue("hashtags", [...hashtags!, hashtag]);
      }
    }
  }

  function onBlur() {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    updateHashtags(input.value);

    setTimeout(() => {
      if (document.activeElement !== input) {
        setEditingHashtagIndex(-1);
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
      updateHashtags(input.value);
      setIsOpenPopup.off();
      setEditingHashtagIndex(-1);
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
            {/* Hashtags */}
            {hashtags.map((hashtag, index) => (
              <ListItem
                key={hashtag}
                display={editingHashtagIndex === index ? "none" : ""}
                order={index + 1}
              >
                <ButtonGroup
                  variant="hashtag"
                  size="sm"
                  isAttached
                  mr="1"
                  mb="1"
                >
                  <Button
                    onClick={() => onClickHashtag(index)}
                    px="1"
                    fontWeight="400"
                    fontSize="md"
                    cursor="text"
                  >
                    # {hashtag}
                  </Button>
                  <IconButton
                    onClick={() =>
                      setValue(
                        "hashtags",
                        hashtags.filter((v) => v !== hashtag)
                      )
                    }
                    aria-label={`Remove ${hashtag}`}
                    icon={<MdOutlineClose />}
                    px="1"
                    fontSize="xl"
                    _hover={{ color: "red" }}
                  ></IconButton>
                </ButtonGroup>
              </ListItem>
            ))}

            {/* Input to add item */}
            <ListItem
              alignSelf="center"
              order={
                editingHashtagIndex !== -1
                  ? editingHashtagIndex + 1
                  : hashtags.length + 1
              }
            >
              <Input
                ref={inputRef}
                variant="unstyled"
                placeholder={
                  hashtags.length ? "Add another..." : "Add up to 4 tags..."
                }
                onClick={setIsOpenPopup.on}
                onFocus={() =>
                  setSuggestionField({
                    name: "hashtags",
                    y: inputRef.current?.getBoundingClientRect().y || 0,
                  })
                }
                onKeyDown={onKeyDown}
                onBlur={() => onBlur()}
                px="0.5"
                py="px"
              ></Input>
            </ListItem>
          </List>
        </PopoverTrigger>

        {/* Popup */}
        <Portal containerRef={popupRef}>
          <PopoverContent w="auto">
            <PopoverHeader p="3">
              <Heading fontSize="lg">Top hashtags</Heading>
            </PopoverHeader>
            <PopoverBody p="1" maxH="500px" overflow="auto">
              <List>
                {items
                  .filter((item) => hashtags.indexOf(item.hashtag) === -1)
                  .map((item) => (
                    <ListItem key={item.hashtag} cursor="pointer">
                      <Box
                        onClick={() => updateHashtags(item.hashtag)}
                        p="3"
                        borderRadius="md"
                        _hover={{ backgroundColor: "grey-100" }}
                      >
                        <Box fontWeight="500">#{item.hashtag}</Box>
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

      {/* Hashtag wrapper */}
      <Box ref={popupRef} pos="absolute" top="8" w="full" bg="red"></Box>
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
        bg="base-0"
        fontSize="xl"
        flexShrink="0"
      ></EditorToolbar>

      <Editor<Post>
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
      ></Editor>
    </Flex>
  );
}

export function NewMainEdit() {
  return (
    <>
      <Box px="16" py="8">
        <CoverPhoto></CoverPhoto>
        <Title></Title>
        <Hashtags></Hashtags>
      </Box>

      <Body></Body>
    </>
  );
}
