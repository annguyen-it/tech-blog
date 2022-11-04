import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/button.style";
import { CheckboxStyles } from "./components/checkbox.style";
import { LinkStyles } from "./components/link.style";
import { TableStyles } from "./components/table.style";
import { TextAreaStyles } from "./components/textarea.style";

export const theme = extendTheme({
  colors: {
    primary: "rgb(59, 73, 223)",
    "primary-rgba": "rgba(59, 73, 223, 0.1)",
    "primary-darker": "rgb(47, 58, 178)",
    "primary-darker-rgba": "rgba(47, 58, 178, 0.1)",
    "base-0": "#f9f9f9",
    "base-20": "#d6d6d7",
    "base-50": "#8a8a8a",
    "base-60": "#717171",
    "base-70": "#575757",
    "base-100": "#090909",
    "grey-50": "rgb(250, 250, 250)",
    "grey-100": "rgb(245, 245, 245)",
    "grey-200": "rgb(229, 229, 229)",
    "grey-600": "rgb(82, 82, 82)",
    "grey-700": "rgb(64, 64, 64)",
    "grey-900": "rgb(23, 23, 23)",
    "grey-900-rgba": "rgba(23, 23, 23, 0.1)",
    "grey-900-rgba-2": "rgba(23, 23, 23, 0.05)",
    "yellow-300": "rgb(252, 211, 77)",
    github: {
      500: "#24292e", 
      600: "#000000", 
    },
    google: {
      500: "#db4437", 
      600: "#e57368", 
    },
  },
  components: {
    Button: ButtonStyles,
    Checkbox: CheckboxStyles,
    Link: LinkStyles,
    Table: TableStyles,
    Textarea: TextAreaStyles,
  },
});
