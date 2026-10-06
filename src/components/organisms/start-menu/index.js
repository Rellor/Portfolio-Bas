import { useEffect, useRef, useState } from "react";

import Icon from "@/components/atoms/icon";

import "./start-menu.scss";

/**
 * The menu that opens from the Start button. The Projects entry unfolds into
 * every project, grouped like in the Projects window.
 *
 * @param {object} props
 * @param {string} props.title Written along the side of the menu.
 * @param {{id: string, title: string, icon?: {src: string, alt: string}}[]} props.entries
 *   The top level entries. The one with id "projects" becomes the unfoldable one.
 * @param {{id: string, title: string, items: {id: string, title: string, icon?: {src: string, alt: string}}[]}[]} props.projectGroups
 * @param {(id: string) => void} props.onOpen Called with a window id.
 * @param {() => void} props.onRestart
 */
export default function StartMenu({ title, entries, projectGroups, onOpen, onRestart }) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const menuRef = useRef(null);
  // Set when the submenu was opened with the keyboard, so focus can move into it.
  const focusSubmenu = useRef(false);

  const items = () => [...menuRef.current.querySelectorAll('[role="menuitem"]')];

  // A menu opened with the keyboard starts on its first item.
  useEffect(() => {
    items()[0]?.focus();
  }, []);

  useEffect(() => {
    if (projectsOpen && focusSubmenu.current) {
      focusSubmenu.current = false;
      menuRef.current.querySelector(".startMenu__projects [role='menuitem']")?.focus();
    }
  }, [projectsOpen]);

  // Arrow keys move through the items, Right and Left open and close the
  // Projects submenu, and typing a letter jumps to an item starting with it.
  const onKeyDown = (event) => {
    const list = items();
    const index = list.indexOf(document.activeElement);
    const focusAt = (next) => list[(next + list.length) % list.length]?.focus();

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusAt(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusAt(index < 0 ? -1 : index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusAt(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusAt(-1);
    } else if (event.key === "ArrowRight") {
      const parent = document.activeElement;
      if (parent?.classList.contains("startMenu__item--parent")) {
        event.preventDefault();
        if (projectsOpen) {
          menuRef.current.querySelector(".startMenu__projects [role='menuitem']")?.focus();
        } else {
          focusSubmenu.current = true;
          setProjectsOpen(true);
        }
      }
    } else if (event.key === "ArrowLeft") {
      if (document.activeElement?.closest(".startMenu__projects")) {
        event.preventDefault();
        setProjectsOpen(false);
        menuRef.current.querySelector(".startMenu__item--parent")?.focus();
      }
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const letter = event.key.toLowerCase();
      const ordered = [...list.slice(index + 1), ...list.slice(0, index + 1)];
      ordered.find((item) => item.textContent.trim().toLowerCase().startsWith(letter))?.focus();
    }
  };

  return (
    <div className="startMenu" ref={menuRef} onKeyDown={onKeyDown}>
      <div className="startMenu__banner" aria-hidden="true">
        <span>{title}</span>
      </div>
      <ul className="startMenu__list" role="menu" aria-label="Start menu">
        {entries.map((entry) =>
          entry.id === "projects" ? (
            <li key={entry.id} role="none">
              <button
                type="button"
                role="menuitem"
                aria-expanded={projectsOpen}
                className="startMenu__item startMenu__item--parent"
                onClick={() => setProjectsOpen((open) => !open)}
              >
                {entry.icon ? <Icon src={entry.icon.src} alt="" size={28} /> : null}
                <span>{entry.title}</span>
                <span className="startMenu__chevron" aria-hidden="true">
                  {projectsOpen ? "v" : ">"}
                </span>
              </button>
              {projectsOpen ? (
                <div className="startMenu__projects">
                  <button
                    type="button"
                    role="menuitem"
                    className="startMenu__item startMenu__item--small"
                    onClick={() => onOpen(entry.id)}
                  >
                    <span>Open the Projects window</span>
                  </button>
                  {projectGroups.map((group) => (
                    <div key={group.id}>
                      <p className="startMenu__group">{group.title}</p>
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          role="menuitem"
                          className="startMenu__item startMenu__item--small"
                          onClick={() => onOpen(item.id)}
                        >
                          {item.icon ? <Icon src={item.icon.src} alt="" size={20} /> : null}
                          <span>{item.title}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}
            </li>
          ) : (
            <li key={entry.id} role="none">
              <button
                type="button"
                role="menuitem"
                className="startMenu__item"
                onClick={() => onOpen(entry.id)}
              >
                {entry.icon ? <Icon src={entry.icon.src} alt="" size={28} /> : null}
                <span>{entry.title}</span>
              </button>
            </li>
          ),
        )}
        <li className="startMenu__divider" role="separator" />
        <li role="none">
          <button type="button" role="menuitem" className="startMenu__item" onClick={onRestart}>
            <span className="startMenu__restart" aria-hidden="true" />
            <span>Restart</span>
          </button>
        </li>
        <li className="startMenu__hint" role="none">
          Alt + ` switches windows
        </li>
      </ul>
    </div>
  );
}
