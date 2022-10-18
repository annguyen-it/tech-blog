import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";

export default function NewBottom() {
  return (
    <ButtonGroup variant="ghost" h="20" display="flex" alignItems="center">
      <Button variant="solid" colorScheme="blue">Publish</Button>
      <Button fontWeight="normal">Save draft</Button>
      <IconButton
        aria-label="Post setting"
        icon={<MdOutlineSettings />}
        fontSize="xl"
      ></IconButton>
      <Button fontWeight="normal">Revert new changes</Button>
    </ButtonGroup>
  );
}
