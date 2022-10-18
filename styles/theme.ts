import { extendTheme } from "@chakra-ui/react";
import { TextAreaStyles } from "./components/textarea.style";

export const theme = extendTheme({
  colors: {},
  components: {
    Textarea: TextAreaStyles,
  },
});
