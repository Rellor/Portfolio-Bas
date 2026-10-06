"use client";

import { useEffect, useState } from "react";

import "./boot-screen.scss";

const SEGMENTS = 20;
const STEP_MS = 110;
// For visitors who asked their system for less motion: the same screen, but
// over almost at once.
const REDUCED_STEP_MS = 15;

const STATUS = [
  "Starting up...",
  "Loading windows...",
  "Loading projects...",
  "Warming up the desktop...",
  "Ready",
];

/**
 * A short start-up screen with a loading bar, shown when the site opens. Any
 * key or click skips it.
 *
 * @param {object} props
 * @param {string} props.name Shown above the bar.
 * @param {() => void} props.onDone Called when the screen has faded away.
 */
export default function BootScreen({ name, onDone }) {
  const [filled, setFilled] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setInterval(
      () => setFilled((count) => Math.min(count + 1, SEGMENTS)),
      reduce ? REDUCED_STEP_MS : STEP_MS,
    );
    return () => clearInterval(timer);
  }, []);

  // A moment of "Ready" once the bar is full, then fade out.
  useEffect(() => {
    if (filled < SEGMENTS) return undefined;
    const timer = setTimeout(() => setLeaving(true), 350);
    return () => clearTimeout(timer);
  }, [filled]);

  useEffect(() => {
    if (!leaving) return undefined;
    const timer = setTimeout(onDone, 350);
    return () => clearTimeout(timer);
  }, [leaving, onDone]);

  // Any key skips.
  useEffect(() => {
    const skip = () => setLeaving(true);
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, []);

  const status = STATUS[Math.min(Math.floor((filled / SEGMENTS) * (STATUS.length - 1)), STATUS.length - 1)];

  return (
    <div
      className={leaving ? "bootScreen bootScreen--leaving" : "bootScreen"}
      onClick={() => setLeaving(true)}
      role="status"
      aria-label="Loading the portfolio"
    >
      <div className="bootScreen__content">
        <p className="bootScreen__logo" aria-hidden="true" />
        <h1 className="bootScreen__name">{name}</h1>
        <p className="bootScreen__tagline">Portfolio</p>

        <div
          className="bootScreen__bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={SEGMENTS}
          aria-valuenow={filled}
        >
          {Array.from({ length: SEGMENTS }, (_, index) => (
            <span
              key={index}
              className={
                index < filled ? "bootScreen__segment bootScreen__segment--on" : "bootScreen__segment"
              }
            />
          ))}
        </div>

        <p className="bootScreen__status">{status}</p>
        <p className="bootScreen__skip">Click or press any key to skip</p>
      </div>
    </div>
  );
}
