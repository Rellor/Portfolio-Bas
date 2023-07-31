import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function PastaBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/pasta/WorkContentPasta1.png"
        width={400}
        height={228}
        alt="Pasta work image 1"
        className="image"
      />
      <TextBlock
        text={
          "I am currently done with a minor in game design at the HvA. This minor consists of a number of projects where you have to work in teams and a project where you make something yourself. This solo project is called the bootcamp. In this bootcamp we learn to use the program Unity. The assignment for the bootcamp is to make a platformer game. The game should contain 3-5 levels that increase in difficulty the further you get in the levels. Also, the game must have 15 minutes of gameplay. "
        }
      />

      <Image
        src="/pasta/WorkContentPasta2.png"
        width={400}
        height={228}
        alt="Pasta work image 2"
        className="image"
      />

      <TextBlock
        text={
          "As a bootcamp game I came up with the platformer pasta la vista. In this game you are a piece of pasta that must find its way through a strange world filled with black holes, spinning locations, flying food and an evil wizard."
        }
      />

      <Image
        src="/pasta/WorkContentPasta3.png"
        width={400}
        height={228}
        alt="Pasta work image 3"
        className="image"
      />

      <TextBlock
        content={
          <p>
            I am proud to announce that I have gotten a 10 for this project. And
            I encourage you to also try it for yourself! Via{" "}
            <a
              className={styles.blue}
              href="https://rellor10.itch.io/pasta-la-vista"
              target="blank"
            >
              this link{" "}
            </a>{" "}
            you can play my game on itch.io. Have fun!
          </p>
        }
      />
    </div>
  );
}
