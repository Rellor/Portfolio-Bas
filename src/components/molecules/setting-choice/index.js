import { useId } from "react";

import "./setting-choice.scss";

/**
 * One choice out of a few, shown as radio buttons. An option can carry a
 * `swatch` colour that is drawn next to its label.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.description]
 * @param {{value: string, label: string, swatch?: string}[]} props.options
 * @param {string} props.value The selected option's value.
 * @param {(value: string) => void} props.onChange
 */
export default function SettingChoice({ label, description, options, value, onChange }) {
  const name = useId();

  return (
    <fieldset className="settingChoice">
      <legend className="settingChoice__label">{label}</legend>
      {description ? (
        <p className="settingChoice__description">{description}</p>
      ) : null}
      <div className="settingChoice__options">
        {options.map((option) => (
          <label key={option.value} className="settingChoice__option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="settingChoice__input"
            />
            {option.swatch ? (
              <span
                className="settingChoice__swatch"
                style={{ backgroundColor: option.swatch }}
                aria-hidden="true"
              />
            ) : null}
            <span className="settingChoice__text">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
