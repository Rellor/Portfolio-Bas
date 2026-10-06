import SettingToggle from "@/components/molecules/setting-toggle";
import TitleBlock from "@/components/molecules/title-block";
import Window from "@/components/organisms/window";

/**
 * The Settings window. Each entry in `settings` is a checkbox.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {object} props.layout Passed straight to `Window`.
 * @param {{id: string, label: string, description?: string, checked: boolean, onChange: (checked: boolean) => void}[]} props.settings
 * @param {number} props.zIndex
 * @param {() => void} props.onClose
 * @param {() => void} props.onFocus
 */
export default function SettingsWindow({
  title,
  layout,
  settings,
  zIndex,
  onClose,
  onFocus,
}) {
  return (
    <Window
      title={title}
      layout={layout}
      zIndex={zIndex}
      onClose={onClose}
      onFocus={onFocus}
    >
      <TitleBlock title="Display" size="small" />
      {settings.map((setting) => (
        <SettingToggle key={setting.id} {...setting} />
      ))}
    </Window>
  );
}
