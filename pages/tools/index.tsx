import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Tools() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  function onClear() {
    setInput("");
  }

  async function onConfirm() {
    setLoading(true);
    setResult([]);
    setError(null);

    // const d1 = Date.now();

    fetch("/api/tools", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ url: input }),
    })
      .then((res) => res.json())
      .then(({ videos, error }) => {
        setResult(videos);
        setError(error);
      })
      .finally(() => {
        // console.log((Date.now() - d1) / 1000);
        setLoading(false);
      });
  }

  return (
    <Box
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
    >
      <Container h="full" bg="white" minW="container.lg">
        <Stack spacing="4" p="8">
          <FormControl>
            <FormLabel>Đường dẫn bài viết</FormLabel>
            <InputGroup>
              <Input value={input} onChange={(e) => setInput(e.target.value)} />
              <InputRightElement width="4.5rem">
                <IconButton
                  onClick={() => onClear()}
                  icon={<FaTimes />}
                  aria-label="clear"
                  colorScheme="red"
                  variant="flat"
                  size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button isLoading={loading} onClick={() => onConfirm()}>
            Xác nhận
          </Button>

          {result.length > 0 && (
            <Box>
              <Heading>Kết quả tìm kiếm</Heading>
              <UnorderedList>
                {result.map((r, i) => (
                  <ListItem key={i}>
                    <Link isExternal href={r}>
                      {r}
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}

          {error && (
            <Box>
              <Heading>Đã có lỗi xảy ra</Heading>
              <Text>{error.name}</Text>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default Tools;
