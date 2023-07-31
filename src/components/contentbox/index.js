import "./contentbox.scss";

import BungieBox from "./bungie";
import PastaBox from "./pasta";
import GorillazBox from "./gorillaz";
import FrogwartsBox from "./frogwarts";
import RPGBox from "./rpg";

export default function ContentBlock({ contentType }) {
  if (contentType === "Bungie") {
    return <BungieBox />;
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
}
