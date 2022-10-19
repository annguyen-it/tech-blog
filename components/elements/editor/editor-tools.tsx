import {
  BiCode,
  BiCodeBlock,
  BiHeading,
  BiVerticalCenter,
} from "react-icons/bi";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdHelp,
  MdImage,
  MdLink,
  MdStrikethroughS,
} from "react-icons/md";

export const EditorToolsData = {
  BOLD: { label: "Bold", icon: <MdFormatBold /> },
  ITALIC: { label: "Italic", icon: <MdFormatItalic /> },
  LINK: { label: "Link", icon: <MdLink /> },
  ORDERED_LIST: { label: "Ordered list", icon: <MdFormatListBulleted /> },
  UNORDERED_LIST: { label: "Unordered list", icon: <MdFormatListNumbered /> },
  HEADING: { label: "Heading", icon: <BiHeading /> },
  QUOTE: { label: "Quote", icon: <MdFormatQuote /> },
  IMAGE: { label: "Image", icon: <MdImage /> },
  CODE: { label: "Code", icon: <BiCode /> },
  CODE_BLOCK: { label: "Code block", icon: <BiCodeBlock /> },
  UNDERLINE: { label: "Underline", icon: <MdFormatUnderlined /> },
  STRIKETHROUGH: { label: "Strikethrough", icon: <MdStrikethroughS /> },
  LINE_DIVIDER: { label: "Line divider", icon: <BiVerticalCenter /> },
  HELP: { label: "Help", icon: <MdHelp /> },
};

export type EditorTool = keyof typeof EditorToolsData;
