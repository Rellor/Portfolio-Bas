import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function FrogwartsBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/frogwarts/WorkContentFrogwarts1.png"
        width={400}
        height={228}
        alt="Frogwarts work image 1"
        className="image"
      />
      <TextBlock
        text={
          "Frogwarts is the result of the first team project of the minor game design. In this project I was allowed to make a game together with 4 others. Within this project I was the main developer and also responsible for the delivery of the game."
        }
      />
      <Image
        src="/frogwarts/WorkContentFrogwarts2.png"
        width={400}
        height={228}
        alt="Frogwarts work image 2"
        className="image"
      />
      <TextBlock
        text={
          "You play in frogwarts as a first year student at a magical school. Your frog escapes and you quickly go after it. What you just don't know is that the place where the frog went is a forbidden floor at this school where there are all monsters. Fight the monsters, upgrade and defeat the boss!"
        }
      />
      <Image
        src="/frogwarts/WorkContentFrogwarts3.png"
        width={400}
        height={228}
        alt="Frogwarts work image 3"
        className="image"
      />
      <TextBlock
        content={
          <p>
            You can play the game online at Itch.io using{" "}
            <a
              className={styles.blue}
              href="https://rellor10.itch.io/frogwarts"
              target="blank"
            >
              this link
            </a>
            . Have fun!
          </p>
        }
      />
    </div>
  );
}
