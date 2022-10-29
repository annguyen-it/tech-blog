import {
  Box,
  Stack,
  Link,
  IconButton,
  Tooltip,
  Popover,
  PopoverTrigger,
  ButtonGroup,
  Button,
  PopoverBody,
  PopoverContent,
  PopoverArrow
} from "@chakra-ui/react";
import { BsSuitHeart, BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Share, Posts } from "../../data";
import { useSession } from "next-auth/react";

function handleLike() {
  
}

function Action() {
  const {status } = useSession();
  console.log(status)

  return (
    <Stack as="nav" direction="column">
      <Box>
        <Link display="flex" flexDirection="column">
          <Tooltip label="Like">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              variant="ghost"
              aria-label="Like"
              icon={<BsSuitHeart />}
              _hover={{
                backgroundColor: "rgba(220, 38, 38 , 0.1)",
                color: "rgba(220, 38, 38)",
              }}
            ></IconButton>
          </Tooltip>
        </Link>
      </Box>
      <Box>
        <Link display="flex" flexDirection="column">
          <Tooltip label="Jump to Comment">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              variant="ghost"
              aria-label="Comment"
              icon={<FaRegComment />}
              _hover={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                color: "rgb(245, 158, 11)",
              }}
            ></IconButton>
          </Tooltip>
        </Link>
      </Box>
      <Box>
        <Link display="flex" flexDirection="column">
          <Tooltip label="Save">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              variant="ghost"
              aria-label="Save"
              icon={<BsBookmark />}
              title="Save"
              _hover={{ backgroundColor: "rgba(47,58,108, 0.1)" }}
            ></IconButton>
          </Tooltip>
        </Link>
      </Box>

      <Popover placement="right-start">
        <PopoverTrigger>
          <IconButton
            borderRadius="50%"
            fontSize="24px"
            variant="ghost"
            aria-label="Save"
            icon={<BsThreeDots />}
            _hover={{ backgroundColor: "rgba(47,58,108, 0.1)" }}
          ></IconButton>
        </PopoverTrigger>
        <PopoverArrow />
        <PopoverContent w="max-content" minW="250px">
          <PopoverBody >
            <ButtonGroup display='flex' flexDirection='column'>
              <Button fontWeight='700' backgroundColor="inherit" _hover={{ color: "blue" }}>
                Copy link
              </Button>
              {Share.map((share,i) => (
                <Button key={i} backgroundColor="inherit" _hover={{ color: "blue" }}>
                {share.text}
              </Button>
              ))}
            </ButtonGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  );
}

export default function PostLeft() {
  return <Action />;
}
