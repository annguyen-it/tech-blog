import { ComponentStyleConfig } from "@chakra-ui/react";

export const LinkStyles: ComponentStyleConfig = {
  baseStyle: {
    color: "grey-900",
    _hover: {
      color: "primary-darker",
    },
  },
  sizes: {},
  variants: {
    blue: {
      color: "primary",
    },
    secondary: {
      color: "grey-700",
    },
  },
  defaultProps: {},
};
