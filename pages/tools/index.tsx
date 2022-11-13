import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";

function Tools() {
  const [input, setInput] = useState(
    "https://thanhnien.vn/thang-gion-gia-o-lach-tray-clb-hai-phong-tro-thanh-a-quan-v-league-2022-post1521063.html"
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string[]>([]);

  async function onConfirm() {
    setLoading(true);
    setResult([]);

    fetch("/api/tools", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ url: input }),
    })
      .then((res) => res.json())
      .then(({ videos }) => setResult(videos))
      .finally(() => {
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
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
          </FormControl>
          <Button isLoading={loading} onClick={() => onConfirm()}>
            Xác nhận
          </Button>

          {result.length > 0 && (
            <Box>
              <Heading>Kết quả</Heading>
              <UnorderedList>
                {result.map((r, i) => (
                  <ListItem key={i}>
                    <Link isExternal href={r}>{r}</Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default Tools;
