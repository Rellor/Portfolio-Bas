import { useId } from "react";

import "./setting-toggle.scss";

/**
 * A labelled checkbox with a short explanation underneath.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.description]
 * @param {boolean} props.checked
 * @param {(checked: boolean) => void} props.onChange
 */
export default function SettingToggle({ label, description, checked, onChange }) {
  const id = useId();

  return (
    <div className="settingToggle">
      <input
        id={id}
        type="checkbox"
        className="settingToggle__box"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label htmlFor={id} className="settingToggle__label">
        {label}
        {description ? (
          <span className="settingToggle__description">{description}</span>
        ) : null}
      </label>
    </div>
  );
}
