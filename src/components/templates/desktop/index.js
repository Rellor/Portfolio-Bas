import Navigation from "@/components/organisms/navigation";

import styles from "./desktop.module.scss";

/**
 * The page frame: a navigation bar with the desktop area underneath it. The
 * desktop area is the positioning context that windows are dragged inside.
 *
 * @param {object} props
 * @param {string} props.navigationTitle
 * @param {React.ReactNode} props.shortcuts Desktop shortcuts.
 * @param {React.ReactNode} props.windows Open windows.
 */
export default function DesktopTemplate({
  navigationTitle,
  shortcuts,
  windows,
}) {
  return (
    <main className={styles.main}>
      <Navigation title={navigationTitle} />
      <div className={styles.content}>
        {shortcuts}
        {windows}
      </div>
    </main>
  );
}
