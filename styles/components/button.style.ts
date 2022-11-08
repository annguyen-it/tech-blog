import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    solid: defineStyle(({ colorScheme: c }) => ({
      bg: `${c}.500`,
      color: "white",
      _hover: {
        bg: `${c}.600`,
        _disabled: {
          bg: `${c}.500`,
        },
      },
      _active: {
        bg: `${c}.600`,
      },
    })),
    outline: defineStyle(({ colorScheme: c }) => ({
      bg: "white",
      color: `${c}.500`,
      border: "1px solid",
      borderColor: `${c}.500`,
      _hover: {
        bg: `${c}.500`,
        color: "white",
      },
    })),
    flat: defineStyle(({ colorScheme: c, theme }) => ({
      bg: "rgba(0, 0, 0, 0)",
      color: "grey.900",
      _hover: {
        bg: transparentize(`${c}.500`, 0.1)(theme),
        color: `${c}.600`,
      },
    })),
    "flat-link": {
      justifyContent: "start",
      px: "4",
      py: "2",
      bg: "rgba(0, 0, 0, 0)",
      color: "grey.900",
      fontWeight: "400",
      _hover: {
        bg: "primary.400.rgba",
        color: "primary.500",
        textDecoration: "underline",
      },
    },
    tag: {
      bg: "grey.900.rgba",
      color: "grey.700",
    },
    rock: {
      color: "base.80",
      border: "2px solid",
      borderColor: "base.20",
    },
  },
  defaultProps: {
    colorScheme: "primary",
  },
};
