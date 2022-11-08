import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Text,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostRight({ dataPost }: PostMainProps) {
  // console.log(dataPost);
  return (
    <Stack direction="column" p="7" spacing="2" bg="white" borderTopRadius="md">
      <Box display="flex" alignItems="center">
        <Avatar
          name={dataPost.author.name}
          size="md"
          src={dataPost.author.image}
        />
        <Box fontSize="xl" fontWeight="800" paddingLeft="10px">
          <Link href={`/u/${dataPost.author.url}`}>{dataPost.author.name}</Link>
        </Box>
      </Box>
      <Button marginTop="6">Follow</Button>
      <Text>{dataPost.author.intro}</Text>
      
      <Box>
        <Text fontSize='sm' fontWeight='600'>WORK:</Text>
        <Text fontSize="xs">{dataPost.author.work}</Text>
      </Box>
      <Box>
        <Text fontSize='sm' fontWeight='600'>JOINED:</Text>
        <Box fontSize="xs">
              {dataPost.author.joined.toLocaleString("default", {
                month: "long",
              })}{" "}
              {dataPost.author.joined.getDate()}
            </Box>
      </Box>
    </Stack>
  );
}
