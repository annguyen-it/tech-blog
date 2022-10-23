import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

type NewTopProps = {
  edit: boolean;
  setEdit: (edit: boolean) => void;
};
function NewTop({ edit, setEdit }: NewTopProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
        icon={<MdOutlineClose />}
        variant="flat"
        aria-label="Cancel"
        title="Close editor"
        pos="absolute"
        top="2"
        right="2"
        fontSize="2xl"
      ></IconButton>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You have unsaved changes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You've made changes to your post. Do you want to navigate to leave
            this page?
          </ModalBody>

          <ModalFooter>
            <Button as="a" href="/" colorScheme="red" mr={3}>
              Yes, leave the page
            </Button>
            <Button colorScheme="blackAlpha" onClick={onClose}>
              No, keep editing
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default React.memo(NewTop, (prev, next) => {
  return prev.edit === next.edit;
});
