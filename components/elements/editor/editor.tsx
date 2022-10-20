import { TextareaProps } from "@chakra-ui/react";
import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { AutoResizeTextarea } from "../textarea/auto-resize-textarea";
import { EditorTool } from "./editor-tools";

export type EditorRef = {
  onClickTool: (tool: EditorTool) => void;
};

type EditorProps = TextareaProps & {
  onTextChange?: (s: string) => void;
};

export const Editor = forwardRef<EditorRef, EditorProps>(
  ({ onTextChange, ...props }, ref) => {
    const [value, setValue] = useState(props.value as string);
    const [selection, setSelection] = useState<{
      start: number;
      end: number;
    } | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function add(character: string) {
      const textarea = textareaRef.current!;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      textarea.focus({ preventScroll: false });

      setValue(
        value.substring(0, start) +
          "\n" +
          character +
          "\n" +
          value.substring(start)
      );
      setSelection({
        start: textarea.selectionStart + character.length + 2,
        end: textarea.selectionEnd + character.length + 2,
      });
    }

    function addOrRemove(character: string) {
      const textarea = textareaRef.current!;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentString = value.substring(start, end);
      const prevChar =
        start === 0 || value.charAt(start - 1) === "\n" ? "" : "\n";
      const afterChar =
        end === value.length || value.charAt(end) === "\n" ? "" : "\n";

      textarea.focus({ preventScroll: false });

      if (currentString.indexOf(character) === 0) {
        setValue(
          value.substring(0, start) + value.substring(start + character.length)
        );
        setSelection({
          start: textarea.selectionStart,
          end: textarea.selectionEnd - character.length,
        });
      } else {
        setValue(
          value.substring(0, start) +
            prevChar +
            character +
            value.substring(start, end) +
            afterChar +
            value.substring(end)
        );
        setSelection({
          start: textarea.selectionStart + (prevChar ? 1 : 0),
          end:
            textarea.selectionEnd +
            character.length +
            (prevChar ? 1 : 0) +
            (afterChar ? 1 : 0),
        });
      }
    }

    function addOrRemoveBoth(character: string, numberOfChar: number) {
      const textarea = textareaRef.current!;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      let charString = character.repeat(numberOfChar);

      textarea.focus({ preventScroll: false });

      if (start !== end) {
        if (
          // |**bold**|
          value.substring(start, start + numberOfChar) === charString &&
          value.substring(end - numberOfChar, end) === charString
        ) {
          // Remove
          setValue(
            value.substring(0, start) +
              value.substring(start + numberOfChar, end - numberOfChar) +
              value.substring(end + numberOfChar)
          );
          setSelection({
            start: textarea.selectionStart,
            end: textarea.selectionEnd - numberOfChar * 2,
          });
        } else if (
          // **|bold|**
          value.substring(start - numberOfChar, start) === charString &&
          value.substring(end, end + numberOfChar) === charString
        ) {
          // Remove
          setValue(
            value.substring(0, start - numberOfChar) +
              value.substring(start, end) +
              value.substring(end + numberOfChar)
          );
          setSelection({
            start: textarea.selectionStart - numberOfChar,
            end: textarea.selectionEnd - numberOfChar,
          });
        } else {
          setValue(charString + value.substring(start, end) + charString);
          setSelection({
            start: textarea.selectionStart,
            end: textarea.selectionEnd + numberOfChar * 2,
          });
        }
      } else {
        charString = character.repeat(numberOfChar * 2);
        if (
          value.substring(start - numberOfChar, end + numberOfChar) ===
          charString
        ) {
          // Remove
          setValue(
            value.substring(0, start - numberOfChar) +
              value.substring(start + numberOfChar)
          );
          setSelection({
            start: textarea.selectionStart - numberOfChar,
            end: textarea.selectionStart - numberOfChar,
          });
        } else {
          setValue(
            value.substring(0, start) + charString + value.substring(start)
          );
          setSelection({
            start: textarea.selectionStart + numberOfChar,
            end: textarea.selectionStart + numberOfChar,
          });
        }
      }
    }

    function onSelect() {
      const textarea = textareaRef.current!;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      setSelection({ start, end });
    }

    function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
      setValue(e.target.value);
      onTextChange?.(e.target.value);
    }

    useEffect(() => {
      if (!selection || !textareaRef.current) {
        return;
      }
      const { start, end } = selection;
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(start, end);
    }, [selection]);

    useEffect(() => {
      onTextChange?.(value);
    }, [onTextChange, value]);

    useImperativeHandle(ref, () => ({
      onClickTool: (tool) => {
        if (!textareaRef.current) {
          return;
        }

        switch (tool) {
          case "BOLD":
            addOrRemoveBoth("*", 2);
            break;
          case "ITALIC":
            addOrRemoveBoth("_", 1);
            break;
          case "CODE":
            addOrRemoveBoth("`", 1);
            break;
          case "STRIKETHROUGH":
            addOrRemoveBoth("~", 2);
            break;
          case "ORDERED_LIST":
            addOrRemove("1. ");
            break;
          case "UNORDERED_LIST":
            addOrRemove("- ");
            break;
          case "QUOTE":
            addOrRemove("> ");
            break;
          case "LINE_DIVIDER":
            add("---");
            break;
        }
      },
    }));

    return (
      <AutoResizeTextarea
        {...props}
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onSelect={onSelect}
      ></AutoResizeTextarea>
    );
  }
);

Editor.displayName = "Editor";
