import { useState } from "react";

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

  return (
    <div className="startMenu" role="menu" aria-label="Start menu">
      <div className="startMenu__banner" aria-hidden="true">
        <span>{title}</span>
      </div>
      <ul className="startMenu__list">
        {entries.map((entry) =>
          entry.id === "projects" ? (
            <li key={entry.id}>
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
            <li key={entry.id}>
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
        <li>
          <button type="button" role="menuitem" className="startMenu__item" onClick={onRestart}>
            <span className="startMenu__restart" aria-hidden="true" />
            <span>Restart</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
