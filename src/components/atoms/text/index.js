import "./text.scss";

/**
 * A paragraph of text.
 *
 * @param {object}   props
 * @param {React.ReactNode} props.children
 * @param {"inherit"|"body"|"accent"} [props.variant] "body" forces the dark
 *   text colour used inside windows, "accent" the blue link colour.
 * @param {string}   [props.className] Extra class names from the parent.
 */
export default function Text({ children, variant = "inherit", className = "" }) {
  const classNames = ["text", `text--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <p className={classNames}>{children}</p>;
}
