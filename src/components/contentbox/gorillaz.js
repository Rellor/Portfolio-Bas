import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function GorillazBox({}) {
  return (
    <div className="contentBox">
      <video width={400} height={228} controls className="image">
        <source src="/gorillaz/Lyricsvideo.mp4" type="video/mp4" />
        <p>Sorry, your browser does not support videos.</p>
      </video>

      <TextBlock
        content={
          <p>
            This is one of the most fun projects I&apos;ve been able to do so
            far. The assignment was to pick a song and shape the accompanying
            song text. The song I had chosen was{" "}
            <a
              className={styles.blue}
              href="https://www.youtube.com/watch?v=QTt7301PR5k&ab_channel=Gorillaz"
              target="blank"
            >
              Momentary Bliss
            </a>{" "}
            by Gorillaz.
          </p>
        }
      />
      <Image
        src="/gorillaz/WorkContentGorillaz2.png"
        width={400}
        height={228}
        alt="Bungie work image 2"
        className="image"
      />
      <TextBlock
        text={
          "I started to design titles based on the song. 4 different designs were created and I chose the one that best fit the lyrics, title and style of the music."
        }
      />
      <Image
        src="/gorillaz/WorkContentGorillaz3.gif"
        width={400}
        height={228}
        alt="Bungie work image 3"
        className="image"
      />
      <TextBlock
        text={
          "With the chosen design I continued working on a GIF that would eventually become the final video. My goal with the GIF was to show the chaos that the song expresses with the help of fast moving drawings. This is a style that is also used in the actual music video."
        }
      />
    </div>
  );
}
