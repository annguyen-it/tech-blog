import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function NewBottom() {
  return (
    <ButtonGroup variant="flat" h="20" display="flex" alignItems="center">
      <Button variant="primary" colorScheme="blue">
        Publish
      </Button>
      <Button fontWeight="normal">Save draft</Button>
    </ButtonGroup>
  );
}

export default React.memo(NewBottom);
