/**
 * A small square button in a window title bar: minimize, maximize or close.
 * It is a real button so it can be reached with the keyboard.
 *
 * @param {object} props
 * @param {() => void} props.onClick
 * @param {string} props.label Accessible label, e.g. "Minimize About me".
 * @param {React.ReactNode} props.children The glyph inside the button.
 * @param {string} [props.className] Extra class names, e.g. "closeButton".
 */
export default function TitleButton({ onClick, label, children, className = "" }) {
  return (
    <button
      type="button"
      className={["titleButton", className].filter(Boolean).join(" ")}
      onClick={(event) => {
        // The window also focuses itself on click, so only this should run.
        event.stopPropagation();
        onClick();
      }}
      aria-label={label}
    >
      {children}
    </button>
  );
}
