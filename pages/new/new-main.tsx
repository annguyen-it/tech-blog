import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Post } from "../../models";
import { NewMainEdit } from "./new-main-edit";
import { NewMainPreview } from "./new-main-preview";

type NewMainProps = { edit: boolean };

export default function NewMain({ edit }: NewMainProps) {
  const [value, setValue] = useState<Post>({
    coverImage: null,
    title: "",
    body: "",
    hashtags: ["javascript", "newbie", "tutorial"],
  });

  return (
    <Flex
      h="calc(100vh - 56px - 80px)"
      direction="column"
      borderRadius="md"
      boxShadow="0 0 0 1px var(--chakra-colors-grey-900-rgba)"
      bg="white"
      overflow="auto"
    >
      {edit && (
        <NewMainEdit
          value={value}
          onChange={(value) =>
            setValue((prevState) => ({ ...prevState, ...value }))
          }
        ></NewMainEdit>
      )}
      {!edit && <NewMainPreview value={value} />}
    </Flex>
  );
}
