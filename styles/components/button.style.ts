import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      bg: "primary",
      color: "#f9f9f9",
      _hover: {
        bg: "primary-darker",
      },
    },
    flat: {
      bg: "rgba(0, 0, 0, 0)",
      color: "#171717",
      _hover: {
        bg: "primary-rgba",
        color: "primary",
      },
    },
    "flat-link": {
      justifyContent: "start",
      px: "4",
      py: "2",
      bg: "rgba(0, 0, 0, 0)",
      color: "#171717",
      fontWeight: "400",
      _hover: {
        bg: "primary-rgba",
        color: "primary",
        textDecoration: "underline",
      },
    },
    hashtag: {
      bg: "grey-900-rgba",
      color: "grey-700",
    },
  },
  defaultProps: {},
};
