import TitleButton from "@/components/atoms/title-button";

/**
 * The "X" in a window title bar.
 *
 * @param {object} props
 * @param {() => void} props.onClose
 * @param {string} props.label Accessible label, e.g. "Close Projects".
 */
export default function CloseButton({ onClose, label }) {
  return (
    <TitleButton onClick={onClose} label={label} className="closeButton">
      X
    </TitleButton>
  );
}
