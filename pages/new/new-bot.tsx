import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";

export default function NewTop() {
  return (
    <ButtonGroup h="20" variant="ghost">
      <Button variant="solid">Publish</Button>
      <Button fontWeight="normal">Save draft</Button>
      <IconButton
        aria-label="Post setting"
        icon={<MdOutlineSettings />}
        fontSize="xl"
      ></IconButton>
      {/* <Button>Revert new changes</Button> */}
    </ButtonGroup>
  );
}
