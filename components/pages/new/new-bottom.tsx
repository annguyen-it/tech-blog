import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { EditPost, Response } from "../../../models";

function NewBottom() {
  const { getValues } = useFormContext<EditPost>();
  const router = useRouter();

  async function onPublish(isPublic = true) {
    // console.log(process.env);
    try {
      const { data } = await axios.post<Response<{ id: number }>>(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts`,
        {
          ...getValues(),
          mode: isPublic ? 1 : 0,
        }
      );
      router.push(`/post/${data.data.id}`);
    } catch (e) {}
  }

  return (
    <ButtonGroup h="20" display="flex" alignItems="center">
      <Button onClick={() => onPublish()}>Publish</Button>
      <Button
        onClick={() => onPublish(false)}
        variant="flat"
        fontWeight="normal"
      >
        Save draft
      </Button>
    </ButtonGroup>
  );
}

export default memo(NewBottom);
