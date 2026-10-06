"use client";

import { useEffect, useRef, useState } from "react";

import Icon from "@/components/atoms/icon";
import StartMenu from "@/components/organisms/start-menu";

import "./taskbar.scss";

const formatTime = (date) =>
  date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });

/**
 * The bar along the bottom: a Start button with its menu, a button for every
 * open window and a clock.
 *
 * @param {object} props
 * @param {string} props.name Shown in the Start menu banner.
 * @param {{id: string, title: string, icon?: {src: string, alt: string}, active: boolean, minimized: boolean}[]} props.items
 *   One per open window.
 * @param {(id: string) => void} props.onItemClick
 * @param {object[]} props.menuEntries Passed to `StartMenu` as `entries`.
 * @param {object[]} props.projectGroups Passed to `StartMenu`.
 * @param {(id: string) => void} props.onOpen
 * @param {() => void} props.onRestart
 */
export default function Taskbar({
  name,
  items,
  onItemClick,
  menuEntries,
  projectGroups,
  onOpen,
  onRestart,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const rootRef = useRef(null);

  // The clock starts empty so server and browser agree, then ticks.
  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const timer = setInterval(tick, 15000);
    return () => clearInterval(timer);
  }, []);

  // Close the menu when clicking elsewhere or pressing Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="taskbar" ref={rootRef}>
      <div className="taskbar__start">
        <button
          type="button"
          className="taskbar__startButton"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="taskbar__logo" aria-hidden="true" />
          Start
        </button>
        {menuOpen ? (
          <StartMenu
            title={name}
            entries={menuEntries}
            projectGroups={projectGroups}
            onOpen={(id) => {
              setMenuOpen(false);
              onOpen(id);
            }}
            onRestart={() => {
              setMenuOpen(false);
              onRestart();
            }}
          />
        ) : null}
      </div>

      <ul className="taskbar__items">
        {items.map((item) => (
          <li key={item.id} className="taskbar__itemWrap">
            <button
              type="button"
              className={
                item.active ? "taskbar__item taskbar__item--active" : "taskbar__item"
              }
              aria-pressed={item.active}
              onClick={() => onItemClick(item.id)}
            >
              {item.icon ? <Icon src={item.icon.src} alt="" size={20} /> : null}
              <span className="taskbar__title">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="taskbar__clock" aria-label="Time">
        {time}
      </div>
    </div>
  );
}
