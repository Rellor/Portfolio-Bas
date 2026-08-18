/**
 * The "X" in a window title bar. It is rendered as a button so it can be
 * reached with the keyboard, while the title bar styling keeps its look.
 *
 * @param {object} props
 * @param {() => void} props.onClose
 * @param {string} props.label Accessible label, e.g. "Close Projects".
 */
export default function CloseButton({ onClose, label }) {
  return (
    <button type="button" className="closeButton" onClick={onClose} aria-label={label}>
      X
    </button>
  );
}
