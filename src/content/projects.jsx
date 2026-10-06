/**
 * Every project on the site lives in this file.
 *
 * To add a project:
 *   1. Drop its icon in `/public` and its screenshots in `/public/<project>/`.
 *   2. Add an entry to `projects` below.
 *   3. Add its `id` to one of the groups in `projectGroups`.
 *
 * A project entry looks like this:
 *
 *   {
 *     id: "my-project",                       // unique, used to open the window
 *     title: "My project",                    // label under the shortcut icon
 *     windowTitle: "My project",              // title bar, defaults to `title`
 *     heading: "My project",                  // heading inside, defaults to `title`
 *     meta: "2026 - React/Next.js",           // small line under the heading
 *     icon: { src: "/MyIcon.png", alt: "My project icon" },
 *     layout: PROJECT_LAYOUT,                 // size and position of the window
 *     embed: { ... },                         // optional itch.io style embed
 *     blocks: [ ... ],                        // the body, top to bottom
 *   }
 *
 * Blocks are rendered in order and wrap into two columns:
 *   { type: "image", src: "/my-project/shot.png", alt: "..." }
 *   { type: "video", src: "/my-project/clip.mp4" }
 *   { type: "text", text: "A paragraph of plain copy." }
 *   { type: "text", content: <Text variant="body">Copy with a <Link href="...">link</Link>.</Text> }
 */

import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";

/** Shared size and position for every project window. */
export const PROJECT_LAYOUT = {
  width: "60%",
  height: "80%",
  mobileWidth: "90%",
  mobileHeight: "95%",
  left: "15vw",
  top: "12vh",
  leftMobile: "5vw",
  topMobile: "2vh",
};

export const projects = [
  {
    id: "rdu",
    title: "RDU Airport",
    windowTitle: "Raleigh-Durham Airport (RDU)",
    heading: "Raleigh-Durham Airport",
    meta: "2026 - Framna - Contentful/SCSS",
    icon: { src: "/RduIcon.png", alt: "RDU Airport Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            At Framna I helped rebuild the website of Raleigh-Durham
            International Airport. The old site was hard to change and hard to
            use, so the new one runs on Contentful with a new design system. It
            launched in 2026 at <Link href="https://www.rdu.com">rdu.com</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "I built a large part of the front end, from the reusable components up to the header, flight search and flight lists, the news section and the interactive airport map. I also set up the Contentful content models and migrations behind them.",
      },
      {
        type: "text",
        text: "Towards the launch I worked on design feedback, content checks and getting every release through test, acceptance and production.",
      },
    ],
  },
  {
    id: "ric",
    title: "RIC Airport",
    windowTitle: "Richmond Airport (RIC)",
    heading: "Richmond Airport",
    meta: "2026 - Framna - Contentful/SCSS",
    icon: { src: "/RicIcon.png", alt: "RIC Airport Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            The second airport site I worked on at Framna is for Richmond
            International Airport. It launched in 2026 at{" "}
            <Link href="https://flyrichmond.com">flyrichmond.com</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design came from another agency and we built it as a Contentful website, so the airport can manage its own content. I worked on the flight list and flight details, parking availability, search and the accessibility of the forms.",
      },
      {
        type: "text",
        text: "Because both airports share the same foundation, I could reuse a lot of what I built for RDU. For launch I also took care of redirects from the old site, security settings and the releases.",
      },
    ],
  },
  {
    id: "bungie",
    title: "Bungie.net",
    windowTitle: "Bungie.net",
    heading: "Bungie.net",
    meta: "2022 - HTML/CSS/JavaScript",
    icon: { src: "/BungienetIcon.png", alt: "Bungie.net Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "image",
        src: "/bungie/WorkContentBungie1.png",
        alt: "Bungie work image 1",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            In this project, I started learning how to make a responsive
            webpage. In order to give full attention to coding, I chose to use an
            existing website. This website became{" "}
            <Link href="https://www.bungie.net/7/en/Destiny">bungie.net</Link>.
            For this project I used breakpoints to make sure the website is
            usable on mobile and desktop. I am very pleased with the end result.
            You can see it with{" "}
            <Link href="/oldWork/basiswebsite/index.html">this link</Link>.
          </Text>
        ),
      },
      {
        type: "image",
        src: "/bungie/WorkContentBungie2.png",
        alt: "Bungie work image 2",
      },
      {
        type: "text",
        text: "One of the biggest challenges in this project is getting all the different elements responsive on desktop and all the different phones. Here you can see the end result of the mobile home page.",
      },
      {
        type: "image",
        src: "/bungie/WorkContentBungie3.png",
        alt: "Bungie work image 3",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            During the project I have been working on 2 pages within bungie.net.
            One of these pages is the main page and the other page can be found
            by clicking on{" "}
            <Link href="/oldWork/basiswebsite/play.html">Destiny 2</Link> within
            the navigation of the website. The image below shows the mobile
            version of the{" "}
            <Link href="/oldWork/basiswebsite/play.html">Destiny 2</Link> page.
          </Text>
        ),
      },
    ],
  },
  {
    id: "moyu",
    title: "Moyu webshop",
    windowTitle: "Moyu webshop",
    heading: "Moyu webshop",
    meta: "2021 - HTML/CSS/JavaScript - Shopify/Sanity/Tailwind",
    icon: { src: "/MoyuIconPixels.png", alt: "Moyu webshop Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "image",
        src: "/moyu/WorkContentMoyu.png",
        alt: "Moyu work image 1",
      },
      {
        type: "text",
        text: "During my work period at Moyu, I gained experience in using Shopify, a powerful tool that enables sellers to build professional online webshops. My involvement in managing and optimizing the webshop contributed to enhancing the customer experience.",
      },
      {
        type: "image",
        src: "/moyu/SanityImage.png",
        alt: "Moyu work image 2",
      },
      {
        type: "text",
        text: "In collaboration with other talented programmers, I contributed to setting up a content management system using Sanity. Through effective teamwork and careful implementation, we managed and published content, significantly simplifying website functionality and content updates.",
      },
      {
        type: "image",
        src: "/moyu/WorkContentMoyu3.png",
        alt: "Moyu work image 3",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            I designed various aspects of the new website and developed them into
            a cohesive and attractive whole. My contribution to creating an
            engaging website positively impacted user interaction and
            strengthened the company&apos;s brand identity.
          </Text>
        ),
      },
    ],
  },
  {
    id: "ajax",
    title: "Ajax Business",
    windowTitle: "Ajax business",
    heading: "Ajax business",
    meta: "2023 - HTML/SCSS/JavaScript - React/Next.js",
    icon: { src: "/AjaxIcon.png", alt: "Ajax Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "image",
        src: "/ajax/WorkContentAjax1.png",
        alt: "Ajax work image 1",
      },
      {
        type: "text",
        text: "During my long internship, I had the opportunity to work on Ajax business, which led to significant growth in my programming skills. Afterwards, I could apply these skills to the portfolio website you are currently viewing!",
      },
      {
        type: "image",
        src: "/ajax/WorkContentAjax2.2.png",
        alt: "Ajax work image 2",
      },
      {
        type: "text",
        text: "In this project, I learned how to set up a React project using atomic design. I also worked on creating React components that interact with an API. To keep the CSS organized, we used SASS, which allows you to add extra structure to your project.",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            Unfortunately, I can&apos;t show much of it yet due to the project
            still being unreleased. If you&apos;re interested in my approach or
            any other technical knowledge I gained during this project, I&apos;d
            be happy to answer questions about it in a conversation
          </Text>
        ),
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta la vista",
    windowTitle: "Pasta la vista",
    heading: "Pasta la vista",
    meta: "2022 - C# - Unity",
    icon: { src: "/UnityGameIcon.png", alt: "Pasta la vista Icon" },
    layout: PROJECT_LAYOUT,
    embed: {
      src: "https://itch.io/embed/1465557?border_width=0&bg_color=1C1C1C&fg_color=000000&link_color=fa5bee&border_color=333333",
      title: "Pasta la vista on itch.io",
      fallback: {
        href: "https://rellor10.itch.io/pasta-la-vista",
        label: "Pasta la vista by Rellor10",
      },
    },
    blocks: [
      {
        type: "image",
        src: "/pasta/WorkContentPasta1.png",
        alt: "Pasta work image 1",
      },
      {
        type: "text",
        text: "I am currently done with a minor in game design at the HvA. This minor consists of a number of projects where you have to work in teams and a project where you make something yourself. This solo project is called the bootcamp. In this bootcamp we learn to use the program Unity. The assignment for the bootcamp is to make a platformer game. The game should contain 3-5 levels that increase in difficulty the further you get in the levels. Also, the game must have 15 minutes of gameplay. ",
      },
      {
        type: "image",
        src: "/pasta/WorkContentPasta2.png",
        alt: "Pasta work image 2",
      },
      {
        type: "text",
        text: "As a bootcamp game I came up with the platformer pasta la vista. In this game you are a piece of pasta that must find its way through a strange world filled with black holes, spinning locations, flying food and an evil wizard.",
      },
      {
        type: "image",
        src: "/pasta/WorkContentPasta3.png",
        alt: "Pasta work image 3",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            I am proud to announce that I have gotten a 10 for this project. And
            I encourage you to also try it for yourself! Via{" "}
            <Link href="https://rellor10.itch.io/pasta-la-vista">this link</Link>{" "}
            you can play my game on itch.io. Have fun!
          </Text>
        ),
      },
    ],
  },
  {
    id: "gorillaz",
    title: "Momentary bliss",
    windowTitle: "Momentary Bliss",
    heading: "Momentary Bliss",
    meta: "2020 - Adobe after effects",
    icon: { src: "/MomentaryBlissIcon.png", alt: "Momentary bliss Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      { type: "video", src: "/gorillaz/Lyricsvideo.mp4" },
      {
        type: "text",
        content: (
          <Text variant="body">
            This is one of the most fun projects I&apos;ve been able to do so
            far. The assignment was to pick a song and shape the accompanying
            song text. The song I had chosen was{" "}
            <Link href="https://www.youtube.com/watch?v=QTt7301PR5k&ab_channel=Gorillaz">
              Momentary Bliss
            </Link>{" "}
            by Gorillaz.
          </Text>
        ),
      },
      {
        type: "image",
        src: "/gorillaz/WorkContentGorillaz2.png",
        alt: "Momentary Bliss title designs",
      },
      {
        type: "text",
        text: "I started to design titles based on the song. 4 different designs were created and I chose the one that best fit the lyrics, title and style of the music.",
      },
      {
        type: "image",
        src: "/gorillaz/WorkContentGorillaz3.gif",
        alt: "Momentary Bliss animation",
      },
      {
        type: "text",
        text: "With the chosen design I continued working on a GIF that would eventually become the final video. My goal with the GIF was to show the chaos that the song expresses with the help of fast moving drawings. This is a style that is also used in the actual music video.",
      },
    ],
  },
  {
    id: "frogwarts",
    title: "Frogwarts",
    windowTitle: "Frogwarts",
    heading: "Frogwarts",
    meta: "2022 - C# - Unity",
    icon: { src: "/FrogwartsIcon.png", alt: "Frogwarts Icon" },
    layout: PROJECT_LAYOUT,
    embed: {
      src: "https://itch.io/embed/1497802?border_width=0&bg_color=1C1C1C&fg_color=222222&link_color=edddb0&border_color=654e44",
      title: "Frogwarts on itch.io",
      fallback: {
        href: "https://rellor10.itch.io/frogwarts",
        label: "Frogwarts by Rellor10",
      },
    },
    blocks: [
      {
        type: "image",
        src: "/frogwarts/WorkContentFrogwarts1.png",
        alt: "Frogwarts work image 1",
      },
      {
        type: "text",
        text: "Frogwarts is the result of the first team project of the minor game design. In this project I was allowed to make a game together with 4 others. Within this project I was the main developer and also responsible for the delivery of the game.",
      },
      {
        type: "image",
        src: "/frogwarts/WorkContentFrogwarts2.png",
        alt: "Frogwarts work image 2",
      },
      {
        type: "text",
        text: "You play in frogwarts as a first year student at a magical school. Your frog escapes and you quickly go after it. What you just don't know is that the place where the frog went is a forbidden floor at this school where there are all monsters. Fight the monsters, upgrade and defeat the boss!",
      },
      {
        type: "image",
        src: "/frogwarts/WorkContentFrogwarts3.png",
        alt: "Frogwarts work image 3",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            You can play the game online at Itch.io using{" "}
            <Link href="https://rellor10.itch.io/frogwarts">this link</Link>.
            Have fun!
          </Text>
        ),
      },
    ],
  },
  {
    id: "rpg",
    title: "Text based RPG",
    windowTitle: "Text based RPG",
    heading: "Text based RPG",
    meta: "2019 - HTML/CSS/JavaScript",
    icon: { src: "/TextRPGIcon.png", alt: "Text RPG Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "image",
        src: "/rpg/WorkContentRPG1.png",
        alt: "RPG work image 1",
      },
      {
        type: "text",
        content: (
          <Text variant="body">
            The goal of this project was to learn the basics of JavaScript. In
            the course of the project, I got to learn a lot about JavaScript and
            it was also super fun to make a game with it! I took Dark souls as
            inspiration for my game and it takes place in the Middle Ages.{" "}
            <br />
            <br />
            You can try the game yourself via{" "}
            <Link href="/oldWork/textbasedRPG/index.html">this link</Link>.
          </Text>
        ),
      },
      {
        type: "image",
        src: "/rpg/WorkContentRPG2.png",
        alt: "RPG work image 2",
      },
      {
        type: "text",
        text: "One of the biggest challenges in this project is getting all the different elements responsive on desktop and all the different phones. Here you can see the end result of the mobile home page.",
      },
      {
        type: "image",
        src: "/rpg/WorkContentRPG3.png",
        alt: "RPG work image 3",
      },
      {
        type: "text",
        text: "During the project I have been working on 2 pages within bungie.net. One of these pages is the main page and the other page can be found by clicking on Destiny 2 within the navigation of the website. The image below shows the mobile version of the Destiny 2 page.",
      },
    ],
  },
];

/**
 * The sections inside the Projects window, top to bottom. Each `projectIds`
 * entry has to match an `id` in `projects` above, and the order here is the
 * order the icons appear in.
 */
export const projectGroups = [
  {
    id: "framna",
    title: "Work - Framna",
    projectIds: ["rdu", "ric"],
  },
  {
    id: "fyris",
    title: "Work - Fyris",
    // Add the ids of Fyris projects here. While empty it shows "Coming soon".
    projectIds: [],
    emptyLabel: "Coming soon",
  },
  {
    id: "school",
    title: "School projects",
    projectIds: ["ajax", "bungie", "moyu", "pasta", "gorillaz", "frogwarts", "rpg"],
  },
];

const projectsById = new Map(projects.map((project) => [project.id, project]));

/** Looks up a project by id. */
export const getProject = (id) => projectsById.get(id);

/** The groups with their projects resolved, ready to render. */
export const resolvedProjectGroups = projectGroups.map((group) => ({
  ...group,
  projects: group.projectIds.map(getProject).filter(Boolean),
}));
