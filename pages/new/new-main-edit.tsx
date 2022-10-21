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
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdOutlineClose } from "react-icons/md";
import { Editor, EditorRef } from "../../components/elements/editor/editor";
import { EditorToolbar } from "../../components/elements/editor/editor-toolbar";
import { AutoResizeTextarea } from "../../components/elements/textarea/auto-resize-textarea";
import { Post } from "../../models";

type ChildProps<T extends keyof Post> = {
  value: Post[T];
  onChange: (value: Post[T]) => void;
};

function CoverPhoto({ value, onChange }: ChildProps<"coverImage">) {
  const [preview, setPreview] = useState<string>("");
  const imageRef = useRef<HTMLInputElement>(null);

  function onClickUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      onChange(e.target.files[0]);
    }
  }

  function onRemoveImage() {
    if (imageRef.current) {
      imageRef.current.value = "";
    }
    onChange(null);
  }

  useEffect(() => {
    if (!value) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(value);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  return (
    <Flex mb="5" align="center">
      {value && (
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
          {value ? "Change" : "Add a cover image"}
        </Button>
      </Tooltip>
      {value && (
        <Button
          variant="ghost"
          color="red"
          _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          onClick={onRemoveImage}
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
      {!!value && <Box></Box>}
    </Flex>
  );
}

function Title({ value, onChange }: ChildProps<"title">) {
  return (
    <Box mb="2">
      <AutoResizeTextarea
        w="full"
        placeholder="New post title here..."
        fontSize="5xl"
        fontWeight="800"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></AutoResizeTextarea>
    </Box>
  );
}

function Hashtags({ value, onChange }: ChildProps<"hashtags">) {
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenPopup, setIsOpenPopup] = useBoolean();
  const [editingHashtagIndex, setEditingHashtagIndex] = useState(-1);

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
    input.value = value[index];
  }

  function addHashtag(hashtag?: string) {
    if (hashtag) {
      onChange([...value, hashtag]);
    }
  }

  function onBlur() {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    if (editingHashtagIndex !== -1) {
      onChange(
        value.reduce<string[]>((acc, curr, i) => {
          if (i !== editingHashtagIndex) {
            acc.push(curr);
          } else if (input.value) {
            acc.push(input.value);
          }
          return acc;
        }, [])
      );
    } else {
      addHashtag(input.value);
    }

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

    if (e.key === "Enter") {
      e.preventDefault();
      addHashtag(input.value);
      setIsOpenPopup.off();
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
            {value.map((hashtag, index) => (
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
                    onClick={() => onChange(value.filter((v) => v !== hashtag))}
                    aria-label={`Remove ${hashtag}`}
                    icon={<MdOutlineClose />}
                    px="1"
                    fontSize="xl"
                    _hover={{ color: "red" }}
                  ></IconButton>
                </ButtonGroup>
              </ListItem>
            ))}
            <ListItem
              alignSelf="center"
              order={
                editingHashtagIndex !== -1
                  ? editingHashtagIndex + 1
                  : value.length + 1
              }
            >
              <Input
                ref={inputRef}
                variant="unstyled"
                placeholder={
                  value.length ? "Add another..." : "Add up to 4 tags..."
                }
                onClick={setIsOpenPopup.on}
                onBlur={() => onBlur()}
                onKeyDown={onKeyDown}
                px="0.5"
                py="px"
              ></Input>
            </ListItem>
          </List>
        </PopoverTrigger>
        <Portal containerRef={popupRef}>
          <PopoverContent w="auto">
            <PopoverHeader p="3">
              <Heading fontSize="lg">Top hashtags</Heading>
            </PopoverHeader>
            <PopoverBody p="1" maxH="500px" overflow="auto">
              <List>
                {items
                  .filter((item) => value.indexOf(item.hashtag) === -1)
                  .map((item) => (
                    <ListItem key={item.hashtag} cursor="pointer">
                      <Box
                        onClick={() => addHashtag(item.hashtag)}
                        p="3"
                        borderRadius="md"
                        _hover={{
                          backgroundColor: "var(--chakra-colors-grey-100)",
                        }}
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
      <Box ref={popupRef} pos="absolute" top="8" w="full" bg="red"></Box>
    </Box>
  );
}

function Body({ value, onChange }: ChildProps<"body">) {
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
        bg="rgba(249, 249, 249)"
        fontSize="xl"
        flexShrink="0"
      ></EditorToolbar>

      <Editor
        ref={editorRef}
        value={value}
        onTextChange={(body) => onChange(body)}
        fontSize="lg"
        placeholder="Write your post content here..."
      ></Editor>
    </Flex>
  );
}

type NewMainEditProps = {
  value: Post;
  onChange: (value: Partial<Post>) => void;
};
export function NewMainEdit({ value, onChange }: NewMainEditProps) {
  // console.log(value)
  return (
    <>
      <Box px="16" py="8">
        <CoverPhoto
          value={value.coverImage}
          onChange={(coverImage) => onChange({ coverImage })}
        ></CoverPhoto>
        <Title
          value={value.title}
          onChange={(title) => onChange({ title })}
        ></Title>
        <Hashtags
          value={value.hashtags}
          onChange={(hashtags) => onChange({ hashtags })}
        ></Hashtags>
      </Box>

      <Body value={value.body} onChange={(body) => onChange({ body })}></Body>
    </>
  );
}
