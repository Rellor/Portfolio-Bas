"use client";

import Icon from "@/components/atoms/icon";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { MOBILE_BREAKPOINT } from "@/styles/breakpoints";

import "./shortcut.scss";

const DEFAULT_SPACING = { top: "1rem", right: "0rem", left: "0" };

/**
 * A clickable desktop icon that opens a window.
 *
 * @param {object} props
 * @param {string} props.title Label under the icon.
 * @param {{src: string, alt: string}} [props.icon]
 * @param {() => void} props.onOpen
 * @param {{top?: string, topMobile?: string, right?: string, left?: string}} [props.spacing]
 *   Margins around the shortcut. `right` and `left` only apply on desktop.
 */
export default function Shortcut({ title, icon, onOpen, spacing }) {
  const { windowWidth } = useWindowDimensions();
  const { top, topMobile, right, left } = { ...DEFAULT_SPACING, ...spacing };

  const style =
    windowWidth < MOBILE_BREAKPOINT
      ? {
          marginTop: topMobile ?? "1.5rem",
          marginRight: "0.5rem",
          marginLeft: "0rem",
        }
      : { marginTop: top, marginRight: right, marginLeft: left };

  return (
    <div className="shortcut" style={style}>
      <button type="button" className="shortcut__button" onClick={onOpen}>
        {/* The label under the icon names the button, so the picture is decorative. */}
        {icon ? <Icon src={icon.src} alt="" /> : null}
        <span className="shortcut__label">{title}</span>
      </button>
    </div>
  );
}
