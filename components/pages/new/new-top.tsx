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
import { useRouter } from "next/router";
import { memo, useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { NewSuggestionContext } from "../../../pages/new";

type NewTopProps = {
  edit: boolean;
  setEdit: (edit: boolean) => void;
};
function NewTop({ edit, setEdit }: NewTopProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { setSuggestionField } = useContext(NewSuggestionContext);

  function onChangeTab(edit: boolean) {
    setEdit(edit);
    if (!edit) {
      setSuggestionField(null);
    }
  }

  return (
    <Flex h="14" alignItems="center">
      <Box mr="4">Logo</Box>
      <Heading flexGrow="1" fontSize="md" fontWeight="500">
        Create post
      </Heading>
      <ButtonGroup as="nav" variant="flat">
        <Button onClick={() => onChangeTab(true)} fontWeight={edit ? 600 : 400}>
          Edit
        </Button>
        <Button
          onClick={() => onChangeTab(false)}
          fontWeight={edit ? 400 : 600}
        >
          Preview
        </Button>
      </ButtonGroup>

      <IconButton
        onClick={onOpen}
        icon={<MdOutlineClose />}
        variant="flat"
        aria-label="Cancel"
        title="Close the editor"
        pos={{ lg: "absolute" }}
        top="2"
        right="2"
        fontSize="2xl"
      />

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
            You&apos;ve made changes to your post. Do you want to navigate to
            leave this page?
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => router.push("/")} colorScheme="red" mr={3}>
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

export default memo(NewTop, (prev, next) => {
  return prev.edit === next.edit;
});
