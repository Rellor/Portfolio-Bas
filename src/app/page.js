"use client";
import { useState } from "react";

import styles from "./page.module.scss";

import Navigation from "@/components/nav";
import TitleBlock from "@/components/title";
import Window from "@/components/window";
import Shortcut from "@/components/shortcut";
import ContentBlock from "@/components/contentbox";

export default function Home() {
  //Open and close windows
  const [showWindowProjects, setShowWindowProjects] = useState(true);
  const [showWindowAboutme, setShowWindowAboutme] = useState(true);
  const [showWindowContact, setShowWindowContact] = useState(true);
  const [showWindowBungie, setShowWindowBungie] = useState(false);
  const [showWindowUnityGame, setShowWindowUnityGame] = useState(false);
  const [showWindowGorillaz, setShowWindowGorillaz] = useState(false);
  const [showWindowFrogwarts, setShowWindowFrogwarts] = useState(false);
  const [showWindowRPG, setShowWindowRPG] = useState(false);
  let [zindex, setZindex] = useState(0);

  const sendDataToParentProjects = (index) => {
    setShowWindowProjects(index);
  };

  const sendDataToParentAboutme = (index) => {
    setShowWindowAboutme(index);
  };
  const sendDataToParentContact = (index) => {
    setShowWindowContact(index);
  };

  const sendDataToParentBungie = (index) => {
    setShowWindowBungie(index);
  };

  const sendDataToParentUnityGame = (index) => {
    setShowWindowUnityGame(index);
  };

  const sendDataToParentGorillaz = (index) => {
    setShowWindowGorillaz(index);
  };

  const sendDataToParentFrogwarts = (index) => {
    setShowWindowFrogwarts(index);
  };

  const sendDataToParentRPG = (index) => {
    setShowWindowRPG(index);
  };

  const sendDataToParent = () => {
    zindex++;
    setZindex(zindex);
  };

  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.content}>
        <Shortcut
          title={"Projects"}
          margin={"5rem"}
          marginTop={"2rem"}
          marginRight={"3rem"}
          marginLeft={"auto"}
          src={"/projectsIcon.png"}
          alt={"ProjectsIcon"}
          sendDataToParent={sendDataToParentProjects}
        />
        <Shortcut
          title={"About"}
          margin={"1rem"}
          marginRight={"3rem"}
          marginLeft={"auto"}
          src={"/aboutIcon.png"}
          alt={"AboutIcon"}
          sendDataToParent={sendDataToParentAboutme}
        />
        <Shortcut
          title={"Contact"}
          margin={"1rem"}
          marginRight={"3rem"}
          marginLeft={"auto"}
          src={"/contactIcon.png"}
          alt={"ContactIcon"}
          sendDataToParent={sendDataToParentContact}
        />
        {/*<Shortcut
          title={"Screensaver"}
          margin={"1rem"}
          marginRight={"3rem"}
          marginLeft={"auto"}
          src={"/ScreenSaverIcon.png"}
          alt={"ScreensaverIcon"}
  />*/}
        {showWindowContact && (
          <Window
            title={"Contact"}
            sendDataToParent={sendDataToParentContact}
            sendMoreDataToParent={sendDataToParent}
            width={"30%"}
            mobileWidth={"80%"}
            height={"40%"}
            mobileHeight={"70%"}
            zindex={zindex}
            left={"55vw"}
            leftMobile={"10vw"}
            top={"7vh"}
            topMobile={"10vh"}
          >
            <p className={styles.black}>Feel free to contact me!</p>
            <a className={styles.black} href="mailto:basderoller@gmail.com">
              Email: <span className={styles.blue}>Basderoller@gmail.com</span>
            </a>
            <br />
            <a className={styles.black} href="tel:+31647520856">
              Nummer: <span className={styles.blue}>+31 647520856</span>
            </a>
          </Window>
        )}

        {showWindowProjects && (
          <Window
            title={"Projects"}
            sendDataToParent={sendDataToParentProjects}
            sendMoreDataToParent={sendDataToParent}
            width={"35%"}
            mobileWidth={"90%"}
            height={"45%"}
            mobileHeight={"70%"}
            zindex={zindex}
            left={"33vw"}
            leftMobile={"5vw"}
            top={"40vh"}
            topMobile={"12vh"}
          >
            <div className={styles.projectContent}>
              <Shortcut
                title={"Bungie.net"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/BungienetIcon.png"}
                alt={"Bungie.net Icon"}
                sendDataToParent={sendDataToParentBungie}
              />

              <Shortcut
                title={"Pasta la vista"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/UnityGameIcon.png"}
                alt={"Pasta la vista Icon"}
                sendDataToParent={sendDataToParentUnityGame}
              />

              <Shortcut
                title={"Momentary bliss"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/MomentaryBlissIcon.png"}
                alt={"Momentary bliss Icon"}
                sendDataToParent={sendDataToParentGorillaz}
              />

              {/*<Shortcut
                title={"Portfolio Caitlyn Rijks"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/PortfilioCRIcon.png"}
                alt={"Portfolio Caitlyn Rijks Icon"}
                sendDataToParent={sendDataToParentBungie}
        />*/}

              <Shortcut
                title={"Frogwarts"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/FrogwartsIcon.png"}
                alt={"Frogwarts Icon"}
                sendDataToParent={sendDataToParentFrogwarts}
              />

              <Shortcut
                title={"Text based RPG"}
                margin={"1rem"}
                marginRight={"0rem"}
                marginLeft={"0"}
                src={"/TextRPGIcon.png"}
                alt={"Text RPG Icon"}
                sendDataToParent={sendDataToParentRPG}
              />
            </div>
          </Window>
        )}

        {showWindowAboutme && (
          <Window
            title={"About me"}
            sendDataToParent={sendDataToParentAboutme}
            sendMoreDataToParent={sendDataToParent}
            width={"30%"}
            mobileWidth={"80%"}
            height={"75%"}
            mobileHeight={"70%"}
            zindex={zindex}
            left={"2vw"}
            leftMobile={"5vw"}
            top={"7vh"}
            topMobile={"5vh"}
          >
            <TitleBlock title={"Welcome"} />
            <p className={styles.black}>
              I am Bas, a passionate programmer and designer driven by
              creativity. My work reflects my love for innovative solutions, and
              I take pride in crafting projects that showcase my unique
              perspective. My expertise lies in HTML/CSS and JavaScript, while
              my exposure to game design during my minor has also equipped me
              with proficiency in Unity and C#. Beyond my professional hobby’s,
              I love to have a drink with friends or play games with them. I
              also am a huge fan of music and movies.
            </p>
            <br />
            <p className={styles.black}>
              I am excited to show you what I&apos;ve been up to in my
              portfolio!
            </p>
          </Window>
        )}

        {showWindowBungie && (
          <Window
            title={"Bungie.net"}
            sendDataToParent={sendDataToParentBungie}
            sendMoreDataToParent={sendDataToParent}
            width={"60%"}
            mobileWidth={"90%"}
            height={"80%"}
            mobileHeight={"95%"}
            zindex={zindex}
            left={"15vw"}
            leftMobile={"5vw"}
            top={"12vh"}
            topMobile={"2vh"}
          >
            <TitleBlock title={"Bungie.net"} />
            <ContentBlock contentType={"Bungie"} />
          </Window>
        )}

        {showWindowUnityGame && (
          <Window
            title={"Pasta la vista"}
            sendDataToParent={sendDataToParentUnityGame}
            sendMoreDataToParent={sendDataToParent}
            width={"60%"}
            mobileWidth={"90%"}
            height={"80%"}
            mobileHeight={"95%"}
            zindex={zindex}
            left={"15vw"}
            leftMobile={"5vw"}
            top={"12vh"}
            topMobile={"2vh"}
          >
            <TitleBlock title={"Pasta la vista"} />
            <div className={styles.iframe}>
              <iframe
                frameborder="0"
                src="https://itch.io/embed/1465557?border_width=0&amp;bg_color=1C1C1C&amp;fg_color=000000&amp;link_color=fa5bee&amp;border_color=333333"
                width="206"
                height="165"
              >
                <a href="https://rellor10.itch.io/pasta-la-vista">
                  Pasta la vista by Rellor10
                </a>
              </iframe>
            </div>
            <ContentBlock contentType={"UnityGame"} />
          </Window>
        )}
        {showWindowGorillaz && (
          <Window
            title={"Momentary Bliss"}
            sendDataToParent={sendDataToParentGorillaz}
            sendMoreDataToParent={sendDataToParent}
            width={"60%"}
            mobileWidth={"90%"}
            height={"80%"}
            mobileHeight={"95%"}
            zindex={zindex}
            left={"15vw"}
            leftMobile={"5vw"}
            top={"12vh"}
            topMobile={"2vh"}
          >
            <TitleBlock title={"Momentary Bliss"} />
            <ContentBlock contentType={"Gorillaz"} />
          </Window>
        )}

        {showWindowFrogwarts && (
          <Window
            title={"Frogwarts"}
            sendDataToParent={sendDataToParentFrogwarts}
            sendMoreDataToParent={sendDataToParent}
            width={"60%"}
            mobileWidth={"90%"}
            height={"80%"}
            mobileHeight={"95%"}
            zindex={zindex}
            left={"15vw"}
            leftMobile={"5vw"}
            top={"12vh"}
            topMobile={"2vh"}
          >
            <TitleBlock title={"Frogwarts"} />
            <div className={styles.iframe}>
              <iframe
                frameborder="0"
                src="https://itch.io/embed/1497802?border_width=0&amp;bg_color=1C1C1C&amp;fg_color=222222&amp;link_color=edddb0&amp;border_color=654e44"
                width="206"
                height="165"
              >
                <a href="https://rellor10.itch.io/frogwarts">
                  Frogwarts by Rellor10
                </a>
              </iframe>
            </div>
            <ContentBlock contentType={"Frogwarts"} />
          </Window>
        )}

        {showWindowRPG && (
          <Window
            title={"Text based RPG"}
            sendDataToParent={sendDataToParentRPG}
            sendMoreDataToParent={sendDataToParent}
            width={"60%"}
            mobileWidth={"90%"}
            height={"80%"}
            mobileHeight={"95%"}
            zindex={zindex}
            left={"15vw"}
            leftMobile={"5vw"}
            top={"12vh"}
            topMobile={"2vh"}
          >
            <TitleBlock title={"Text based RPG"} />
            <ContentBlock contentType={"RPG"} />
          </Window>
        )}
      </div>
    </main>
  );
}
