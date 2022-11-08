import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

export const CheckboxStyles: ComponentStyleConfig = {
  baseStyle: definePartsStyle({
    control: {
      _checked: {
        bg: "primary.500",
        borderColor: "primary.500",

        _hover: {
          bg: "primary.500",
          borderColor: "primary.500",
        },
      },

      _indeterminate: {
        bg: "primary.500",
        borderColor: "primary.500",
      },
    },
  }),
  sizes: {},
  variants: {},
  defaultProps: {},
};
