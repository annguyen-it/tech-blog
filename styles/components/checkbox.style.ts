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
        bg: "primary",
        borderColor: "primary",

        _hover: {
          bg: "primary",
          borderColor: "primary",
        },
      },

      _indeterminate: {
        bg: "primary",
        borderColor: "primary",
      },
    },
  }),
  sizes: {},
  variants: {},
  defaultProps: {},
};
