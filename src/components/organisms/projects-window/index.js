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
 * @param {number} props.zIndex
 * @param {() => void} props.onClose
 * @param {() => void} props.onFocus
 */
export default function ProjectsWindow({
  title,
  layout,
  groups,
  onOpenProject,
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
      {groups.map((group) => (
        <ShortcutGroup key={group.id} title={group.title}>
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
