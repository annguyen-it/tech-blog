import { Avatar, Box, Button, Text, Link, Stack, Flex } from "@chakra-ui/react";
import { Post } from "../../models";

type PostMainProps = { dataPost: Post };
export default function PostRight({ dataPost }: PostMainProps) {
  // console.log(dataPost);
  return (
    <Stack spacing="4">
      <Stack
        spacing="4"
        pb="4"
        px="4"
        bg="white"
        borderTopWidth="32px"
        borderStyle="solid"
        borderColor="black"
        borderRadius="md"
      >
        <Box display="flex" alignItems="center" mt="-4">
          <Link
            href={`/u/${dataPost.user.nickname}`}
            textDecor="none !important"
          >
            <Stack direction="row" align="end">
              <Avatar name="Author" src={dataPost.user.image ?? undefined} />
              <Box fontSize="xl" fontWeight="800">
                {dataPost.user.name}
              </Box>
            </Stack>
          </Link>
        </Box>

        <Button mt="6">Follow</Button>

        {dataPost.user.bio && <Text color="base.70">{dataPost.user.bio}</Text>}

        <Stack spacing="3" color="grey.600">
          {dataPost.user.work && (
            <Box>
              <Box fontSize="xs" fontWeight="700" textTransform="uppercase">
                Work
              </Box>
              <Box>{dataPost.user.work}</Box>
            </Box>
          )}

          {dataPost.user.joined && (
            <Box>
              <Box fontSize="xs" fontWeight="700" textTransform="uppercase">
                Joined
              </Box>
              <Box>
                {dataPost.user.joined?.toLocaleString("default", {
                  month: "long",
                })}{" "}
                {dataPost.user.joined?.getDate()}
              </Box>
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
