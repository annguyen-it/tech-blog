import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NewBottom() {
  return (
    <ButtonGroup variant="ghost" h="20" display="flex" alignItems="center">
      <Button variant="solid" colorScheme="blue">
        Publish
      </Button>
      <Button fontWeight="normal">Save draft</Button>
    </ButtonGroup>
  );
}
