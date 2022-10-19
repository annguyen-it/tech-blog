import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";

type NewTopProps = {
  edit: boolean;
  setEdit: (edit: boolean) => void;
};
export default function NewTop({ edit, setEdit }: NewTopProps) {
  return (
    <Flex h="14" alignItems="center">
      <Box mr="4">Logo</Box>
      <Heading flexGrow="1" fontSize="md" fontWeight="500">
        Create post
      </Heading>
      <ButtonGroup as="nav" variant="flat">
        <Button onClick={() => setEdit(true)} fontWeight={edit ? 600 : 400}>
          Edit
        </Button>
        <Button onClick={() => setEdit(false)} fontWeight={edit ? 400 : 600}>
          Preview
        </Button>
      </ButtonGroup>
      <IconButton
        aria-label="Cancel"
        variant="flat"
        icon={<MdOutlineClose />}
        title="Close editor"
        pos="absolute"
        top="2"
        right="2"
        fontSize="2xl"
      ></IconButton>
    </Flex>
  );
}
