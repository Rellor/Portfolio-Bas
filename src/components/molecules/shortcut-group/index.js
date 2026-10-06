import { Children } from "react";

import Text from "@/components/atoms/text";
import TitleBlock from "@/components/molecules/title-block";

import "./shortcut-group.scss";

/**
 * A titled group of shortcuts, e.g. "Older work" inside the Projects window.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children Shortcut components.
 * @param {string} [props.emptyLabel] Shown instead of the shortcuts when the group has none.
 */
export default function ShortcutGroup({ title, emptyLabel, children }) {
  const hasShortcuts = Children.count(children) > 0;

  return (
    <section className="shortcutGroup">
      <TitleBlock title={title} size="small" />
      {hasShortcuts ? (
        <div className="shortcutGroup__items">{children}</div>
      ) : emptyLabel ? (
        <Text variant="body" className="shortcutGroup__empty">
          {emptyLabel}
        </Text>
      ) : null}
    </section>
  );
}
