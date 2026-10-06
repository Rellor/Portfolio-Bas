"use client";

import { useCallback, useEffect, useState } from "react";

import Shortcut from "@/components/molecules/shortcut";
import BootScreen from "@/components/organisms/boot-screen";
import CrtOverlay from "@/components/organisms/crt-overlay";
import ProjectWindow from "@/components/organisms/project-window";
import ProjectsWindow from "@/components/organisms/projects-window";
import SettingsWindow from "@/components/organisms/settings-window";
import Taskbar from "@/components/organisms/taskbar";
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
import useStoredChoice from "@/hooks/useStoredChoice";
import useStoredSetting from "@/hooks/useStoredSetting";
import useWindowManager from "@/hooks/useWindowManager";
import { THEME_DEFAULTS, THEME_OPTIONS } from "@/styles/theme";

// The boot screen only shows once per visit; "Restart" in the Start menu
// brings it back.
const BOOTED_KEY = "booted";

// What the taskbar and Start menu need to know about every window.
const iconById = Object.fromEntries([
  ...shortcuts.map((shortcut) => [shortcut.id, shortcut.icon]),
  ...projects.map((project) => [project.id, project.icon]),
]);
const titleById = Object.fromEntries([
  ...windows.map((windowDef) => [windowDef.id, windowDef.title]),
  ...projects.map((project) => [project.id, project.windowTitle ?? project.title]),
]);

const projectGroupsForMenu = resolvedProjectGroups.map((group) => ({
  id: group.id,
  title: group.title,
  items: group.projects.map((project) => ({
    id: project.id,
    title: project.title,
    icon: project.icon,
  })),
}));

export default function Home() {
  const manager = useWindowManager(defaultOpenWindowIds);
  const {
    isOpen,
    open,
    close,
    focus,
    minimize,
    restore,
    toggleMaximize,
    snap,
    cycle,
    reset,
  } = manager;

  const [booting, setBooting] = useState(true);
  const [crt, setCrt] = useStoredSetting("setting-crt", true);
  const [desktop, setDesktop] = useStoredChoice(
    "setting-desktop",
    THEME_DEFAULTS.desktop,
    THEME_OPTIONS.desktop,
  );
  const [wallpaper, setWallpaper] = useStoredChoice(
    "setting-wallpaper",
    THEME_DEFAULTS.wallpaper,
    THEME_OPTIONS.wallpaper,
  );
  const [titlebars, setTitlebars] = useStoredChoice(
    "setting-titlebars",
    THEME_DEFAULTS.titlebars,
    THEME_OPTIONS.titlebars,
  );

  // Skip the boot screen when it already ran in this visit.
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(BOOTED_KEY)) setBooting(false);
    } catch {
      // Storage unavailable: the boot screen just shows every time.
    }
  }, []);

  const finishBoot = useCallback(() => {
    try {
      window.sessionStorage.setItem(BOOTED_KEY, "1");
    } catch {
      // Nothing to do, see above.
    }
    setBooting(false);
  }, []);

  const restart = useCallback(() => {
    try {
      window.sessionStorage.removeItem(BOOTED_KEY);
    } catch {
      // Nothing to do, see above.
    }
    reset();
    setBooting(true);
  }, [reset]);

  // Alt+` (Shift to go back) switches between the open windows. Alt+Tab itself
  // belongs to the operating system, a web page never gets to see it.
  useEffect(() => {
    if (booting) return undefined;
    const onKeyDown = (event) => {
      if (event.altKey && event.code === "Backquote") {
        event.preventDefault();
        cycle(event.shiftKey ? -1 : 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [booting, cycle]);

  // The colours are applied by CSS through data attributes on <html>.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.desktop = desktop;
    root.dataset.wallpaper = wallpaper;
    root.dataset.titlebars = titlebars;
  }, [desktop, wallpaper, titlebars]);

  // Settings state by option id, so adding an option only needs a hook above.
  const settingStates = {
    crt: { checked: crt, onChange: setCrt },
    desktop: { value: desktop, onChange: setDesktop },
    wallpaper: { value: wallpaper, onChange: setWallpaper },
    titlebars: { value: titlebars, onChange: setTitlebars },
  };

  // Everything `Window` needs that depends on the window manager.
  const windowProps = (id) => ({
    zIndex: manager.zIndexOf(id),
    isMinimized: manager.isMinimized(id),
    isMaximized: manager.isMaximized(id),
    snap: manager.snapOf(id),
    onMinimize: () => minimize(id),
    onToggleMaximize: () => toggleMaximize(id),
    onSnap: (zone) => snap(id, zone),
    onClose: () => close(id),
    onFocus: () => focus(id),
  });

  const renderWindow = (windowDef) => {
    if (!isOpen(windowDef.id)) {
      return null;
    }

    const shared = {
      title: windowDef.title,
      accent: windowDef.accent,
      layout: windowDef.layout,
      ...windowProps(windowDef.id),
    };

    if (windowDef.kind === "projects") {
      return (
        <ProjectsWindow
          key={windowDef.id}
          {...shared}
          groups={resolvedProjectGroups}
          onOpenProject={open}
        />
      );
    }

    if (windowDef.kind === "settings") {
      return (
        <SettingsWindow
          key={windowDef.id}
          {...shared}
          settings={settingOptions.map((option) => ({
            ...option,
            ...settingStates[option.id],
          }))}
        />
      );
    }

    return (
      <Window key={windowDef.id} {...shared}>
        {windowDef.content}
      </Window>
    );
  };

  const renderProjectWindow = (project) =>
    isOpen(project.id) ? (
      <ProjectWindow
        key={project.id}
        project={project}
        {...windowProps(project.id)}
      />
    ) : null;

  const taskbarItems = manager.openIds.map((id) => ({
    id,
    title: titleById[id] ?? id,
    icon: iconById[id],
    minimized: manager.isMinimized(id),
    active: manager.activeId === id,
  }));

  // Like the real thing: a click brings a window back, to the front, or hides
  // the one that already is in front.
  const onTaskbarItemClick = (id) => {
    if (manager.isMinimized(id)) restore(id);
    else if (manager.activeId === id) minimize(id);
    else focus(id);
  };

  return (
    <>
      {booting ? <BootScreen name={site.name} onDone={finishBoot} /> : null}
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
        taskbar={
          <Taskbar
            name={site.name}
            items={taskbarItems}
            onItemClick={onTaskbarItemClick}
            menuEntries={shortcuts}
            projectGroups={projectGroupsForMenu}
            onOpen={open}
            onRestart={restart}
          />
        }
      />
    </>
  );
}
