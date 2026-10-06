"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

import CloseButton from "@/components/atoms/close-button";
import Text from "@/components/atoms/text";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { accentFor } from "@/styles/accents";
import { MOBILE_BREAKPOINT } from "@/styles/breakpoints";

import "./window.scss";

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
 * @param {string} props.layout.mobileWidth
 * @param {string} props.layout.mobileHeight
 * @param {string} props.layout.left Desktop offset, e.g. "15vw".
 * @param {string} props.layout.top
 * @param {string} props.layout.leftMobile
 * @param {string} props.layout.topMobile
 * @param {string} [props.accent] Title bar colour, one of `ACCENTS`. Defaults to
 *   a stable colour picked from the title.
 * @param {number} [props.zIndex]
 * @param {() => void} props.onClose
 * @param {() => void} props.onFocus Called when the window is clicked or dragged.
 */
export default function Window({
  title,
  children,
  layout = {},
  accent,
  zIndex = 0,
  onClose,
  onFocus,
}) {
  const nodeRef = useRef(null);
  const { windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  const style = {
    width: isMobile ? layout.mobileWidth : layout.width,
    height: isMobile ? layout.mobileHeight : layout.height,
    left: isMobile ? layout.leftMobile : layout.left,
    top: isMobile ? layout.topMobile : layout.top,
    overflow: "hidden",
    zIndex,
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window__handle"
      bounds="parent"
      onStart={onFocus}
    >
      <div
        ref={nodeRef}
        className={`window window--${accent ?? accentFor(title)}`}
        style={style}
        onClick={onFocus}
      >
        <div className="window__titlebar">
          <div className="window__handle">
            <Text>{title}</Text>
          </div>
          <CloseButton onClose={onClose} label={`Close ${title}`} />
        </div>

        <div className="window__body">{children}</div>
      </div>
    </Draggable>
  );
}
