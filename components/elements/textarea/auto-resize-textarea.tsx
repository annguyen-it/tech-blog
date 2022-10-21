import { Textarea, TextareaProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import ResizeTextarea from "react-textarea-autosize";

export const AutoResizeTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>((props, ref) => {
  return (
    <Textarea
      {...props}
      ref={ref}
      as={ResizeTextarea}
      variant="unstyled"
      w="100%"
      minH="unset"
      p="0"
      overflow="hidden"
      resize="none"
      minRows={1}
    />
  );
});

AutoResizeTextarea.displayName = "AutoResizeTextarea";
