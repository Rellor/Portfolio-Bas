/**
 * A heading. The visual style comes from the component that renders it, which
 * keeps the atom reusable at every size.
 *
 * @param {object} props
 * @param {2|3|4} [props.level] Heading level, defaults to `2`.
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Heading({ level = 2, children, className = "" }) {
  const Tag = `h${level}`;

  return <Tag className={className}>{children}</Tag>;
}
