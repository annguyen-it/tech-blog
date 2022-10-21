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
    hashtag: {
      bg: "var(--chakra-colors-grey-900-rgba)",
      color: "var(--chakra-colors-grey-700)",
    }
  },
  defaultProps: {},
};
