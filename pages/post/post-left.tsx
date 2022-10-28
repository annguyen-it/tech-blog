import { Box, Stack, Link, IconButton } from "@chakra-ui/react";
import { BsSuitHeart, BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

function Action() {
  return (
    <Stack as="nav" direction="column">
      <Box>
        <Link display="flex" flexDirection="column">
          <IconButton
            borderRadius="50%"
            fontSize="24px"
            variant="ghost"
            aria-label="Like"
            icon={<BsSuitHeart />}
            title="Like"
            _hover={{ backgroundColor: "#dda0dd" }}
          ></IconButton>
          2
        </Link>
      </Box>
      <Box>
        <Link display="flex" flexDirection="column">
          <IconButton
            borderRadius="50%"
            fontSize="24px"
            variant="ghost"
            aria-label="Comment"
            icon={<FaRegComment />}
            title="Jump to Comment"
            _hover={{ backgroundColor: "#f2ca27" }}
          ></IconButton>
          6
        </Link>
      </Box>
      <Box>
        <Link display="flex" flexDirection="column">
          <IconButton
            borderRadius="50%"
            fontSize="24px"
            variant="ghost"
            aria-label="Save"
            icon={<BsBookmark />}
            title="Save"
            _hover={{ backgroundColor: "primary-darker-rgba" }}
          ></IconButton>
          10
        </Link>
      </Box>
    </Stack>
  );
}

export default function PostLeft() {
  return <Action />;
}
