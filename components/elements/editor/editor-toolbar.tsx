import {
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { forwardRef, RefObject } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { EditorRef } from "./editor";
import { EditorTool, EditorToolsData } from "./editor-tools";

type EditorToolbarProps = ButtonGroupProps & {
  editorRef: RefObject<EditorRef>;
  tools: EditorTool[];
};

export const EditorToolbar = forwardRef<HTMLDivElement, EditorToolbarProps>(
  ({ editorRef, tools, ...props }, ref) => {
    function onClick(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      tool: EditorTool
    ) {
      e.preventDefault();
      editorRef.current?.onClickTool(tool);
    }

    return (
      <ButtonGroup {...props} ref={ref}>
        {tools.map((tool) => (
          <Tooltip
            label={EditorToolsData[tool].label}
            openDelay={350}
            key={tool}
          >
            <IconButton
              onClick={(e) => onClick(e, tool)}
              aria-label={EditorToolsData[tool].label}
              icon={EditorToolsData[tool].icon}
              fontSize={props.fontSize}
            ></IconButton>
          </Tooltip>
        ))}
        <IconButton
          aria-label="More options"
          icon={<MdOutlineMoreVert />}
          fontSize={props.fontSize}
          ml="auto !important"
        ></IconButton>
      </ButtonGroup>
    );
  }
);
