import "./contentbox.scss";

import BungieBox from "./bungie";
import PastaBox from "./pasta";
import GorillazBox from "./gorillaz";
import FrogwartsBox from "./frogwarts";
import RPGBox from "./rpg";
import MoyuBox from "./moyu";
import AjaxBox from "./ajax";

export default function ContentBlock({ contentType }) {
  if (contentType === "Bungie") {
    return <BungieBox />;
  }

  if (contentType === "Moyu") {
    return <MoyuBox />;
  }

  if (contentType === "UnityGame") {
    return <PastaBox />;
  }

  if (contentType === "Gorillaz") {
    return <GorillazBox />;
  }

  if (contentType === "Frogwarts") {
    return <FrogwartsBox />;
  }

  if (contentType === "RPG") {
    return <RPGBox />;
  }

  if (contentType === "Ajax") {
    return <AjaxBox />;
  }
}
