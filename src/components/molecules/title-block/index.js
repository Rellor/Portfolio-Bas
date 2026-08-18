import Heading from "@/components/atoms/heading";
import Text from "@/components/atoms/text";

import "./title-block.scss";

/**
 * A window or section heading with an optional line of metadata under it.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {React.ReactNode} [props.meta] e.g. "2023 - React/Next.js".
 * @param {"large"|"small"} [props.size]
 */
export default function TitleBlock({ title, meta, size = "large" }) {
  const classNames = size === "small" ? "title title--small" : "title";

  return (
    <div className={classNames}>
      <Heading level={2}> {title} </Heading>
      {meta ? <Text variant="body"> {meta} </Text> : null}
    </div>
  );
}
