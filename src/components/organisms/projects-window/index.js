import Shortcut from "@/components/molecules/shortcut";
import ShortcutGroup from "@/components/molecules/shortcut-group";
import Window from "@/components/organisms/window";

/**
 * The Projects window: one titled group of shortcuts per section, each opening
 * a project window.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {object} props.layout Passed straight to `Window`.
 * @param {{id: string, title: string, projects: object[]}[]} props.groups
 * @param {(projectId: string) => void} props.onOpenProject
 * @param {object} props.windowProps Everything else (z-index, accent, minimize
 *   and maximize handlers, ...) goes straight to `Window`.
 */
export default function ProjectsWindow({
  title,
  layout,
  groups,
  onOpenProject,
  ...windowProps
}) {
  return (
    <Window title={title} layout={layout} {...windowProps}>
      {groups.map((group) => (
        <ShortcutGroup
          key={group.id}
          title={group.title}
          emptyLabel={group.emptyLabel}
        >
          {group.projects.map((project) => (
            <Shortcut
              key={project.id}
              title={project.title}
              icon={project.icon}
              onOpen={() => onOpenProject(project.id)}
            />
          ))}
        </ShortcutGroup>
      ))}
    </Window>
  );
}
