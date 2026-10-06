"use client";

import Shortcut from "@/components/molecules/shortcut";
import ProjectWindow from "@/components/organisms/project-window";
import CrtOverlay from "@/components/organisms/crt-overlay";
import ProjectsWindow from "@/components/organisms/projects-window";
import SettingsWindow from "@/components/organisms/settings-window";
import Window from "@/components/organisms/window";
import DesktopTemplate from "@/components/templates/desktop";
import { projects, resolvedProjectGroups } from "@/content/projects";
import {
  defaultOpenWindowIds,
  settingOptions,
  shortcuts,
  site,
  windows,
} from "@/content/site";
import useStoredSetting from "@/hooks/useStoredSetting";
import useWindowManager from "@/hooks/useWindowManager";

export default function Home() {
  const { isOpen, zIndexOf, open, close, focus } =
    useWindowManager(defaultOpenWindowIds);
  const [crt, setCrt] = useStoredSetting("setting-crt", true);

  // Settings state by option id, so adding an option only needs a hook above.
  const settingStates = { crt: { checked: crt, onChange: setCrt } };

  const renderWindow = (windowDef) => {
    if (!isOpen(windowDef.id)) {
      return null;
    }

    const shared = {
      key: windowDef.id,
      title: windowDef.title,
      accent: windowDef.accent,
      layout: windowDef.layout,
      zIndex: zIndexOf(windowDef.id),
      onClose: () => close(windowDef.id),
      onFocus: () => focus(windowDef.id),
    };

    if (windowDef.kind === "projects") {
      return (
        <ProjectsWindow
          {...shared}
          groups={resolvedProjectGroups}
          onOpenProject={open}
        />
      );
    }

    if (windowDef.kind === "settings") {
      return (
        <SettingsWindow
          {...shared}
          settings={settingOptions.map((option) => ({
            ...option,
            ...settingStates[option.id],
          }))}
        />
      );
    }

    return <Window {...shared}>{windowDef.content}</Window>;
  };

  const renderProjectWindow = (project) =>
    isOpen(project.id) ? (
      <ProjectWindow
        key={project.id}
        project={project}
        zIndex={zIndexOf(project.id)}
        onClose={() => close(project.id)}
        onFocus={() => focus(project.id)}
      />
    ) : null;

  return (
    <>
      <CrtOverlay enabled={crt} />
      <DesktopTemplate
        navigationTitle={site.name}
        shortcuts={shortcuts.map((shortcut) => (
          <Shortcut
            key={shortcut.id}
            title={shortcut.title}
            icon={shortcut.icon}
            spacing={shortcut.spacing}
            onOpen={() => open(shortcut.id)}
          />
        ))}
        windows={
          <>
            {windows.map(renderWindow)}
            {projects.map(renderProjectWindow)}
          </>
        }
      />
    </>
  );
}
