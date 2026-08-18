import { Children } from "react";

import TitleBlock from "@/components/molecules/title-block";

import "./shortcut-group.scss";

/**
 * A titled group of shortcuts, e.g. "Older work" inside the Projects window.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children Shortcut components.
 */
export default function ShortcutGroup({ title, children }) {
  const hasShortcuts = Children.count(children) > 0;

  return (
    <section className="shortcutGroup">
      <TitleBlock title={title} size="small" />
      {hasShortcuts ? (
        <div className="shortcutGroup__items">{children}</div>
      ) : null}
    </section>
  );
}
