import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function RPGBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/rpg/WorkContentRPG1.png"
        width={400}
        height={228}
        alt="RPG work image 1"
        className="image"
      />
      <TextBlock
        content={
          <p>
            The goal of this project was to learn the basics of JavaScript. In
            the course of the project, I got to learn a lot about JavaScript and
            it was also super fun to make a game with it! I took Dark souls as
            inspiration for my game and it takes place in the Middle Ages.{" "}
            <br />
            <br />
            You can try the game yourself via{" "}
            <a
              className={styles.blue}
              href="/oldWork/textbasedRPG/index.html"
              target="blank"
            >
              this link
            </a>
            .
          </p>
        }
      />

      <Image
        src="/rpg/WorkContentRPG2.png"
        width={400}
        height={228}
        alt="RPG work image 2"
        className="image"
      />

      <TextBlock
        text={
          "One of the biggest challenges in this project is getting all the different elements responsive on desktop and all the different phones. Here you can see the end result of the mobile home page."
        }
      />

      <Image
        src="/rpg/WorkContentRPG3.png"
        width={400}
        height={228}
        alt="RPG work image 3"
        className="image"
      />

      <TextBlock
        text={
          "During the project I have been working on 2 pages within bungie.net. One of these pages is the main page and the other page can be found by clicking on Destiny 2 within the navigation of the website. The image below shows the mobile version of the Destiny 2 page."
        }
      />
    </div>
  );
}
