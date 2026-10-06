import Navigation from "@/components/organisms/navigation";

import styles from "./desktop.module.scss";

/**
 * The page frame: a navigation bar on top, the desktop area in the middle and
 * the taskbar along the bottom. The desktop area is the positioning context
 * that windows are dragged inside.
 *
 * @param {object} props
 * @param {string} props.navigationTitle
 * @param {React.ReactNode} props.shortcuts Desktop shortcuts.
 * @param {React.ReactNode} props.windows Open windows.
 * @param {React.ReactNode} [props.taskbar]
 */
export default function DesktopTemplate({
  navigationTitle,
  shortcuts,
  windows,
  taskbar,
}) {
  return (
    <main className={styles.main}>
      <Navigation title={navigationTitle} />
      <div className={styles.content}>
        <div className={styles.shortcuts}>{shortcuts}</div>
        {windows}
      </div>
      {taskbar}
    </main>
  );
}
