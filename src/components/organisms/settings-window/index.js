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
 * @param {object} props.windowProps Everything else goes straight to `Window`.
 */
export default function SettingsWindow({
  title,
  layout,
  settings,
  ...windowProps
}) {
  return (
    <Window title={title} layout={layout} {...windowProps}>
      <TitleBlock title="Display" size="small" />
      {settings.map((setting) => (
        <SettingToggle key={setting.id} {...setting} />
      ))}
    </Window>
  );
}
