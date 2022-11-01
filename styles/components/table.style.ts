import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

export const TableStyles: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    "new-suggestion": definePartsStyle({
      th: {
        px: "4",
        py: "1",
        lineHeight: "4",
        fontSize: "xs",
      },
      td: {
        p: "2",
        fontSize: "sm",
        lineHeight: "4",
      },
      caption: {
        px: "4",
        py: "2",
        fontSize: "xs",
      },
    }),
  },
  variants: {},
  defaultProps: {},
};
