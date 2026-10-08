"use client";

import { useRef, useState } from "react";
import Draggable from "react-draggable";

import CloseButton from "@/components/atoms/close-button";
import TitleButton from "@/components/atoms/title-button";
import Text from "@/components/atoms/text";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { accentFor } from "@/styles/accents";
import { MOBILE_BREAKPOINT } from "@/styles/breakpoints";

import "./window.scss";

// How close to the edge of the desktop, in pixels, a drag has to get to snap.
const SNAP_DISTANCE = 12;

/** The pointer position of a mouse or touch event. */
const pointOf = (event) =>
  event.touches?.[0] ?? event.changedTouches?.[0] ?? event;

/**
 * A draggable window. Everything about its size and position comes from a
 * single `layout` object so the content files stay readable.
 *
 * @param {object} props
 * @param {string} props.title Shown in the title bar.
 * @param {React.ReactNode} props.children
 * @param {object} props.layout
 * @param {string} props.layout.width Desktop width, e.g. "60%".
 * @param {string} props.layout.height Desktop height.
 * @param {string} [props.layout.minWidth] Desktop minimum width, for windows
 *   whose content needs a certain width, e.g. "28rem". Never wider than the screen.
 * @param {string} props.layout.mobileWidth
 * @param {string} props.layout.mobileHeight
 * @param {string} props.layout.left Desktop offset as a share of the desktop area, e.g. "15%".
 * @param {string} props.layout.top
 * @param {string} props.layout.leftMobile
 * @param {string} props.layout.topMobile
 * @param {string} [props.accent] Title bar colour, one of `ACCENTS`. Defaults to
 *   a stable colour picked from the title.
 * @param {number} [props.zIndex]
 * @param {boolean} [props.isMinimized] Hidden, but kept so it can come back.
 * @param {boolean} [props.isMaximized] Fills the whole desktop area.
 * @param {() => void} [props.onMinimize]
 * @param {() => void} [props.onToggleMaximize] Also brings a snapped window back.
 * @param {"left"|"right"|null} [props.snap] The half of the desktop the window
 *   is snapped to.
 * @param {(zone: "left"|"right"|"top") => void} [props.onSnap] Called when a
 *   drag ends at an edge: "left" and "right" for a half, "top" for maximize.
 * @param {() => void} props.onClose
 * @param {() => void} props.onFocus Called when the window is pressed or dragged.
 */
export default function Window({
  title,
  children,
  layout = {},
  accent,
  zIndex = 0,
  isMinimized = false,
  isMaximized = false,
  snap = null,
  onMinimize,
  onToggleMaximize,
  onSnap,
  onClose,
  onFocus,
}) {
  const nodeRef = useRef(null);
  const { windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;
  // The outline shown while a drag is near an edge: { zone, rect } or null.
  const [preview, setPreview] = useState(null);
  const isFilled = isMaximized || Boolean(snap);

  // Where would the window snap if it were dropped here?
  const snapTarget = (event) => {
    const desktop = nodeRef.current?.offsetParent;
    if (!desktop || !onSnap || isMobile) return null;
    const area = desktop.getBoundingClientRect();
    const { clientX, clientY } = pointOf(event);
    let zone = null;
    if (clientY - area.top < SNAP_DISTANCE) zone = "top";
    else if (clientX - area.left < SNAP_DISTANCE) zone = "left";
    else if (area.right - clientX < SNAP_DISTANCE) zone = "right";
    if (!zone) return null;
    const half = area.width / 2;
    const rect = {
      top: {
        left: area.left,
        top: area.top,
        width: area.width,
        height: area.height,
      },
      left: {
        left: area.left,
        top: area.top,
        width: half,
        height: area.height,
      },
      right: {
        left: area.left + half,
        top: area.top,
        width: half,
        height: area.height,
      },
    }[zone];
    return { zone, rect };
  };

  const onDrag = (event) => {
    const target = snapTarget(event);
    // Only update when the zone changes, so dragging stays cheap.
    setPreview((current) =>
      current?.zone === target?.zone ? current : target,
    );
  };

  const onStop = (event) => {
    const target = snapTarget(event);
    setPreview(null);
    if (target) onSnap(target.zone);
  };

  const style = {
    width: isMobile ? layout.mobileWidth : layout.width,
    minWidth: isMobile ? undefined : layout.minWidth,
    maxWidth: "100%",
    height: isMobile ? layout.mobileHeight : layout.height,
    left: isMobile ? layout.leftMobile : layout.left,
    top: isMobile ? layout.topMobile : layout.top,
    overflow: "hidden",
    zIndex,
  };

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        handle=".window__handle"
        bounds="parent"
        onStart={onFocus}
        onDrag={onDrag}
        onStop={onStop}
        disabled={isFilled}
      >
        <div
          ref={nodeRef}
          className={[
            "window",
            `window--${accent ?? accentFor(title)}`,
            isMaximized ? "window--maximized" : "",
            snap ? `window--snap-${snap}` : "",
            isMinimized ? "window--minimized" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={style}
          // Raise the window when the pointer goes down on it, not when the
          // click ends. An icon inside this window opens another window on that
          // click and that window has to end up in front of this one. (Draggable
          // takes over onMouseDown, so this uses the pointer event.)
          onPointerDown={onFocus}
        >
          <div className="window__titlebar" onDoubleClick={onToggleMaximize}>
            <div className="window__handle">
              <Text>{title}</Text>
            </div>
            <div className="window__controls">
              {onMinimize ? (
                <TitleButton onClick={onMinimize} label={`Minimize ${title}`}>
                  <span className="titleButton__glyph titleButton__glyph--minimize" />
                </TitleButton>
              ) : null}
              {onToggleMaximize ? (
                <TitleButton
                  onClick={onToggleMaximize}
                  label={`${isFilled ? "Restore" : "Maximize"} ${title}`}
                >
                  <span
                    className={`titleButton__glyph titleButton__glyph--${
                      isFilled ? "restore" : "maximize"
                    }`}
                  />
                </TitleButton>
              ) : null}
              <CloseButton onClose={onClose} label={`Close ${title}`} />
            </div>
          </div>

          {/* Focusable, so the keyboard can scroll long content. The label names it. */}
        <div className="window__body" role="region" aria-label={title} tabIndex={0}>
          {children}
        </div>
        </div>
      </Draggable>
      {preview ? (
        <div
          className="window__snapPreview"
          style={preview.rect}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
