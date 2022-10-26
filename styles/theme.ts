import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/button.style";
import { TableStyles } from "./components/table.style";
import { TextAreaStyles } from "./components/textarea.style";

export const theme = extendTheme({
  colors: {
    primary: "rgb(59, 73, 223)",
    "primary-darker": "rgb(47, 58, 178)",
    "primary-rgba": "rgba(59, 73, 223, 0.1)",
    "base-20": "#d6d6d7",
    "base-50": "#8a8a8a",
    "base-70": "#575757",
    "grey-100": "rgb(245, 245, 245)",
    "grey-600": "rgb(82, 82, 82)",
    "grey-700": "rgb(64, 64, 64)",
    "grey-900": "rgb(23, 23, 23)",
    "grey-900-rgba": "rgba(23, 23, 23, 0.1)",
  },
  components: {
    Textarea: TextAreaStyles,
    Button: ButtonStyles,
    Table: TableStyles,
  },
});
