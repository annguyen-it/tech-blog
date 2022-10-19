import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
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
  },
  defaultProps: {},
};
