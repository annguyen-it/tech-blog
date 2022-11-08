import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/button.style";
import { CheckboxStyles } from "./components/checkbox.style";
import { LinkStyles } from "./components/link.style";
import { TableStyles } from "./components/table.style";
import { TextAreaStyles } from "./components/textarea.style";

export const theme = extendTheme({
  colors: {
    primary: {
      "400.rgba": "rgba(59, 73, 223, 0.1)",
      500: "rgb(59, 73, 223)",
      600: "rgb(47, 58, 178)",
      700: "rgb(47, 58, 178)",
    },
    base: {
      0: "#f9f9f9",
      20: "#d6d6d7",
      50: "#8a8a8a",
      60: "#717171",
      70: "#575757",
      80: "#3d3d3d",
      90: "#242424",
      100: "#090909",
    },
    grey: {
      50: "rgb(250, 250, 250)",
      100: "rgb(245, 245, 245)",
      200: "rgb(229, 229, 229)",
      600: "rgb(82, 82, 82)",
      700: "rgb(64, 64, 64)",
      900: "rgb(23, 23, 23)",
      "900.rgba": "rgba(23, 23, 23, 0.1)",
      "900.rgba.2": "rgba(23, 23, 23, 0.05)",
    },
    indigo: {
      500: "rgb(99, 102, 241)",
      600: "rgb(79, 70, 229)",
    },
    yellow: {
      300: "rgb(252, 211, 77)",
      500: "rgb(245, 158, 11)",
      600: "rgb(217, 119, 6)",
    },
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
