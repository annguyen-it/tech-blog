import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/button.style";
import { TextAreaStyles } from "./components/textarea.style";

export const theme = extendTheme({
  colors: {
    "primary": "rgb(59, 73, 223)",
    "primary-darker": "rgb(47, 58, 178)",
    "primary-rgba": "rgba(59, 73, 223, 0.1)",
  },
  components: {
    Textarea: TextAreaStyles,
    Button: ButtonStyles,
  },
});
