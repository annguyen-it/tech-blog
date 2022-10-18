import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";

export default function NewTop() {
  return (
    <Flex h="14" alignItems="center">
      <Box mr="4">Logo</Box>
      <Heading flexGrow="1" fontSize="md">
        Create post
      </Heading>
      <ButtonGroup as="nav" variant="ghost">
        <Button>Edit</Button>
        <Button>Preview</Button>
      </ButtonGroup>
      <IconButton
        aria-label="Cancel"
        variant="ghost"
        icon={<MdOutlineClose />}
        pos="absolute"
        top="2"
        right="2"
        fontSize="2xl"
      ></IconButton>
    </Flex>
  );
}
