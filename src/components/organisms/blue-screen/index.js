"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import "./blue-screen.scss";

/**
 * The 404 page, as a blue screen. Any key (or the link) goes back to the
 * desktop.
 *
 * @param {object} props
 * @param {string} [props.name] Shown in the bar at the top.
 */
export default function BlueScreen({ name = "Bas de Roller" }) {
  const router = useRouter();

  useEffect(() => {
    const goHome = (event) => {
      // Leave browser shortcuts alone: Cmd+R, Ctrl+L and the like.
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      router.push("/");
    };
    window.addEventListener("keydown", goHome);
    return () => window.removeEventListener("keydown", goHome);
  }, [router]);

  return (
    <main className="blueScreen">
      <h1 className="blueScreen__title">{name}</h1>
      <p>
        A fatal exception 404 has occurred at 0028:C0034B23 in VXD PORTFOLIO(01)
        + 00010E36. The current page will be terminated.
      </p>
      <ul className="blueScreen__list">
        <li>The page you asked for could not be found.</li>
        <li>Press any key to return to the desktop.</li>
      </ul>
      <p>
        <Link href="/" className="blueScreen__link">
          Press any key to continue
        </Link>
        <span className="blueScreen__cursor" aria-hidden="true">
          _
        </span>
      </p>
    </main>
  );
}
