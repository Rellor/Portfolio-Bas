import Text from "@/components/atoms/text";

import "./text-block.scss";

/**
 * One column of copy next to a screenshot.
 *
 * @param {object} props
 * @param {string} [props.text] Plain text; rendered as a single paragraph.
 * @param {React.ReactNode} [props.content] Custom markup, for copy that
 *   contains links or line breaks.
 */
export default function TextBlock({ text, content }) {
  return (
    <div className="textDiv">
      {text ? <Text variant="body"> {text} </Text> : null}
      {content}
    </div>
  );
}
