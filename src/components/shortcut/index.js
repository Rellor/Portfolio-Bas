import "./shortcut.scss";
import Image from "next/image";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimentions";

export default function Shortcut({
  title,
  margin,
  marginTop,
  marginRight,
  marginLeft,
  src,
  alt,
  sendDataToParent,
}) {
  let [showWindow, setShowWindow] = useState(null);
  const { windowWidth } = useWindowDimensions();
  let ShortcutStyle;

  if (windowWidth < 768) {
    ShortcutStyle = {
      marginTop: marginTop ? marginTop : "1.5rem",
      marginRight: "0.5rem",
      marginLeft: "0rem",
    };
  } else {
    ShortcutStyle = {
      marginTop: margin,
      marginRight: marginRight,
      marginLeft: marginLeft,
    };
  }

  const openWindow = () => {
    setShowWindow((showWindow = true));
    sendDataToParent(showWindow);
  };

  return (
    <div className="shortcut" style={ShortcutStyle}>
      <a onClick={openWindow}>
        <Image src={src} width={70} height={70} alt={alt} />
        <h3> {title} </h3>
      </a>
    </div>
  );
}
