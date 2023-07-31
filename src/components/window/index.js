import "./window.scss";
import Draggable from "react-draggable";
import useWindowDimensions from "@/hooks/useWindowDimentions";
import { useState } from "react";
import React from "react";

export default function Window({
  children,
  title,
  sendDataToParent,
  sendMoreDataToParent,
  height,
  width,
  mobileWidth,
  mobileHeight,
  zindex,
  left,
  leftMobile,
  top,
  topMobile,
}) {
  const [showWindow, setShowWindow] = useState(null);
  let [finalZindex, setFinalZindex] = useState(zindex);
  const { windowWidth } = useWindowDimensions();
  let finalWidth;
  let finalHeight;

  const updateZindex = () => {
    setFinalZindex(zindex + 1);
    sendMoreDataToParent(finalZindex);
  };

  const toggleWindow = () => {
    //event.preventDefault();
    setShowWindow(!showWindow);
    sendDataToParent(showWindow);
  };

  if (windowWidth < 768) {
    finalWidth = mobileWidth;
    finalHeight = mobileHeight;
    left = leftMobile;
    top = topMobile;
  } else {
    finalWidth = width;
    finalHeight = height;
  }

  const windowstyle = {
    width: finalWidth,
    height: finalHeight,
    left: left,
    top: top,
    overflow: "hidden",
    zIndex: finalZindex,
  };

  return (
    <Draggable handle=".titlebar" bounds={"parent"} onStart={updateZindex}>
      <div className="window" style={windowstyle} onClick={updateZindex}>
        <div className="titlebar">
          <p>{title}</p>
          <a onMouseUp={toggleWindow}>X</a>
        </div>
        <div className="contentbox">{children}</div>
      </div>
    </Draggable>
  );
}
