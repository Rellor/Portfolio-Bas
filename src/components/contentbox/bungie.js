import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function BungieBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/bungie/WorkContentBungie1.png"
        width={400}
        height={228}
        alt="Bungie work image 1"
        className="image"
      />
      <TextBlock
        content={
          <p>
            In this project, I started learning how to make a responsive
            webpage. In order to give full attention to coding, I chose to use
            an existing website. This website became{" "}
            <a
              className={styles.blue}
              href="https://www.bungie.net/7/en/Destiny"
              target="blank"
            >
              {" "}
              bungie.net
            </a>
            . For this project I used breakpoints to make sure the website is
            usable on mobile and desktop. I am very pleased with the end result.
            You can see it with{" "}
            <a
              className={styles.blue}
              href="/oldWork/basiswebsite/index.html"
              target="blank"
            >
              this link
            </a>
            .
          </p>
        }
      />

      <Image
        src="/bungie/WorkContentBungie2.png"
        width={400}
        height={228}
        alt="Bungie work image 2"
        className="image"
      />

      <TextBlock
        content={
          "One of the biggest challenges in this project is getting all the different elements responsive on desktop and all the different phones. Here you can see the end result of the mobile home page."
        }
      />

      <Image
        src="/bungie/WorkContentBungie3.png"
        width={400}
        height={228}
        alt="Bungie work image 3"
        className="image"
      />

      <TextBlock
        content={
          <p>
            During the project I have been working on 2 pages within bungie.net.
            One of these pages is the main page and the other page can be found
            by clicking on{" "}
            <a
              className={styles.blue}
              href="/oldWork/basiswebsite/play.html"
              target="blank"
            >
              Destiny 2
            </a>{" "}
            within the navigation of the website. The image below shows the
            mobile version of the{" "}
            <a
              className={styles.blue}
              href="/oldWork/basiswebsite/play.html"
              target="blank"
            >
              {" "}
              Destiny 2{" "}
            </a>{" "}
            page.
          </p>
        }
      />
    </div>
  );
}
