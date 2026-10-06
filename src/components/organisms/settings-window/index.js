import SettingChoice from "@/components/molecules/setting-choice";
import SettingToggle from "@/components/molecules/setting-toggle";
import TitleBlock from "@/components/molecules/title-block";
import Window from "@/components/organisms/window";

/**
 * The Settings window. A setting is either a checkbox (`type: "toggle"`) or one
 * choice out of a few (`type: "choice"`). Settings with the same `group` are
 * shown together under one heading, in the order they are given.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {object} props.layout Passed straight to `Window`.
 * @param {object[]} props.settings Each has `id`, `type`, `group`, `label` and
 *   optionally `description`. A toggle also has `checked` and `onChange`, a
 *   choice has `options`, `value` and `onChange`.
 * @param {object} props.windowProps Everything else goes straight to `Window`.
 */
export default function SettingsWindow({ title, layout, settings, ...windowProps }) {
  const groups = [];
  settings.forEach((setting) => {
    let group = groups.find((entry) => entry.title === setting.group);
    if (!group) {
      group = { title: setting.group, settings: [] };
      groups.push(group);
    }
    group.settings.push(setting);
  });

  return (
    <Window title={title} layout={layout} {...windowProps}>
      {groups.map((group) => (
        <section key={group.title}>
          <TitleBlock title={group.title} size="small" />
          {group.settings.map(({ type, group: _group, ...setting }) =>
            type === "choice" ? (
              <SettingChoice key={setting.id} {...setting} />
            ) : (
              <SettingToggle key={setting.id} {...setting} />
            ),
          )}
        </section>
      ))}
    </Window>
  );
}
