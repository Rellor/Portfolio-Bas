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
    meta: "2026 - Framna - React/Next.js/TypeScript - Contentful/SCSS - Radix UI - Storybook/Vitest - Mailchimp",
    icon: { src: "/RduIcon.png", alt: "RDU Airport Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            Framna rebuilt the website of Raleigh-Durham International Airport.
            The old site was hard to use and even harder to change. The new one
            runs on Contentful with a new design system. It&apos;s live at{" "}
            <Link href="https://www.rdu.com">rdu.com</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "My part was a big chunk of the front end. The reusable components and the header were mine. So were the flight search and the flight lists. The news section and the interactive airport map too. On top of that I built the Contentful content models and migrations.",
      },
      {
        type: "text",
        text: "Close to the launch it was mostly design feedback and content checks. Every release also had to get through test and acceptance before it went to production.",
      },
    ],
  },
  {
    id: "ric",
    title: "RIC Airport",
    windowTitle: "Richmond Airport (RIC)",
    heading: "Richmond Airport",
    meta: "2026 - Framna - React/Next.js/TypeScript - Contentful/SCSS - Algolia - Storybook/Vitest",
    icon: { src: "/RicIcon.png", alt: "RIC Airport Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            Richmond International Airport was the second airport site at
            Framna. It&apos;s live at{" "}
            <Link href="https://flyrichmond.com">flyrichmond.com</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design came from another agency. We built it as a Contentful website so the airport can manage its own content. Most of my time went into the flight list and the flight details. Parking availability, search and the accessibility of the forms came next.",
      },
      {
        type: "text",
        text: "Both airports share the same foundation so a lot of the RDU work could be reused. For the launch the redirects from the old site and the security settings needed work too.",
      },
    ],
  },
  {
    id: "metis",
    title: "Metis",
    windowTitle: "Metis",
    heading: "Metis",
    meta: "Fyris - Design and front-end - Figma - Next.js/Tailwind CSS",
    icon: { src: "/MetisIcon.png", alt: "Metis Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            Metis is a monitoring tool for public affairs and policy teams. It
            follows politics with AI summaries and alerts and adds comments from
            experts. The product website is live at{" "}
            <Link href="https://metismonitor.nl">metismonitor.nl</Link>. Design
            and front-end were done for Fyris.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design was made in Figma and built in Next.js with Tailwind CSS. Radix UI handles the interactive parts and the icons come from Lucide. The site comes in Dutch and English. Visitors are counted with Umami and that needs no cookies.",
      },
    ],
  },
  {
    id: "echo",
    title: "Metis Echo",
    windowTitle: "Metis Echo",
    heading: "Metis Echo",
    meta: "Fyris - Design and front-end - Figma - Next.js/Tailwind CSS",
    icon: { src: "/EchoIcon.png", alt: "Metis Echo Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            Metis Echo turns plenary and committee debates into transcripts you
            can search by text, speaker or party. An AI summary and a chatbot
            sit on top. Design and front-end were mine. See the result at{" "}
            <Link href="https://echo.metismonitor.nl">echo.metismonitor.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The build is the same as Metis: Next.js with Tailwind CSS and Radix UI. Embla handles the carousel. Sentry catches errors so problems show up before a user mentions them.",
      },
    ],
  },
  {
    id: "stakecircle",
    title: "StakeCircle",
    windowTitle: "StakeCircle",
    heading: "StakeCircle",
    meta: "Fyris - Design and front-end - Figma - Next.js/Tailwind CSS/D3",
    icon: { src: "/StakeCircleIcon.png", alt: "StakeCircle Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            StakeCircle is stakeholder management software made by and for
            public affairs professionals. It covers everything from logging
            contact to planning the next move. The product website is live at{" "}
            <Link href="https://stakecircle.nl/en">stakecircle.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design was made in Figma and built with Next.js and Tailwind CSS. The site comes in Dutch and English. D3 draws the interactive network graph that shows how stakeholders connect. Radix UI and Lucide cover the components and icons.",
      },
    ],
  },
  {
    id: "kloosterkerk",
    title: "Kloosterkerk",
    windowTitle: "De Kloosterkerk",
    heading: "De Kloosterkerk",
    meta: "Fyris - Design and front-end - Figma - Next.js/Tailwind CSS/Directus",
    icon: { src: "/KloosterkerkIcon.png", alt: "Kloosterkerk Icon" },
    layout: PROJECT_LAYOUT,
    blocks: [
      {
        type: "text",
        content: (
          <Text variant="body">
            The Kloosterkerk is a church in the centre of The Hague with a full
            agenda of services and concerts. Design and front-end of the website
            were done for them. It is live at{" "}
            <Link href="https://www.kloosterkerk.nl">kloosterkerk.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design started in Figma. The site runs on Next.js with Tailwind CSS and Directus as the CMS. The church can manage the agenda and the news without a developer. Sliders use Keen Slider and donations go through Mollie. The newsletter runs on Mailchimp and tickets are sold on their own subdomain.",
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
            This project was the introduction to building a responsive website.
            An existing site served as the design so all the attention could go
            to the code. That site was{" "}
            <Link href="https://www.bungie.net/7/en/Destiny">bungie.net</Link>.
            Breakpoints make it work on mobile and desktop and the result turned
            out well. See it with{" "}
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
        text: "The hardest part was getting every element to behave on desktop and on all the different phones. This is the end result of the mobile home page.",
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
            Two pages of bungie.net were rebuilt. One is the main page and the
            other is the{" "}
            <Link href="/oldWork/basiswebsite/play.html">Destiny 2</Link> page in
            the navigation. This is the mobile version of the Destiny 2 page.
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
        text: "At Moyu the work revolved around Shopify. It lets sellers set up a professional webshop. Managing and optimising the shop made things smoother for customers.",
      },
      {
        type: "image",
        src: "/moyu/SanityImage.png",
        alt: "Moyu work image 2",
      },
      {
        type: "text",
        text: "Together with other developers a content management system was set up in Sanity. That made publishing content and updating the website a lot simpler.",
      },
      {
        type: "image",
        src: "/moyu/WorkContentMoyu3.png",
        alt: "Moyu work image 3",
      },
      {
        type: "text",
        text: "Several parts of the new website were designed and built out into one consistent whole. That gave the brand a clearer look and feel.",
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
        text: "The long internship at Ajax Business is where my programming skills grew the most. They went straight into the portfolio you're looking at now.",
      },
      {
        type: "image",
        src: "/ajax/WorkContentAjax2.2.png",
        alt: "Ajax work image 2",
      },
      {
        type: "text",
        text: "This project was about setting up a React project with atomic design and building components that talk to an API. SASS kept the CSS organised.",
      },
      {
        type: "text",
        text: "There isn't much to show yet because the project is still unreleased. Curious about the approach or the technical side? Just ask. Always happy to talk about it.",
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
        text: "The minor in game design at the HvA ended with a solo project called the bootcamp. We learned Unity and had to make a platformer. It needed 3 to 5 levels that get harder along the way and at least 15 minutes of gameplay.",
      },
      {
        type: "image",
        src: "/pasta/WorkContentPasta2.png",
        alt: "Pasta work image 2",
      },
      {
        type: "text",
        text: "That became Pasta la vista. You play a piece of pasta finding its way through a strange world. It is full of black holes and spinning locations. There is flying food and an evil wizard.",
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
            It got a 10 and I&apos;m pretty proud of that. You can play it on
            itch.io via{" "}
            <Link href="https://rellor10.itch.io/pasta-la-vista">this link</Link>.
            Have fun!
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
            One of the most fun projects so far. The assignment was to pick a
            song and shape the lyrics around it. The pick was{" "}
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
        text: "First came the title designs. Four were made and the one that fit the lyrics and the music best won.",
      },
      {
        type: "image",
        src: "/gorillaz/WorkContentGorillaz3.gif",
        alt: "Momentary Bliss animation",
      },
      {
        type: "text",
        text: "That design grew into a GIF and the GIF became the final video. The goal was to show the chaos of the song with fast moving drawings. The actual music video uses that style too.",
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
        text: "Frogwarts is the result of the first team project of the game design minor. The team had 5 people and I was the main developer. That also made me responsible for delivering the game.",
      },
      {
        type: "image",
        src: "/frogwarts/WorkContentFrogwarts2.png",
        alt: "Frogwarts work image 2",
      },
      {
        type: "text",
        text: "You play a first year student at a magical school whose frog escapes. Going after it leads to a forbidden floor full of monsters. Fight them, upgrade and take down the boss!",
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
            You can play it online on itch.io via{" "}
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
            The goal of this project was to learn the basics of JavaScript.
            Making a game with it made that a lot more fun. Dark Souls was the
            inspiration and the story takes place in the Middle Ages. You can
            try it via <Link href="/oldWork/textbasedRPG/index.html">this link</Link>.
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
        text: "You explore a grid map with loot and text events. There are bonfires and bosses and a merchant. The legend on the right shows what each colour means.",
      },
      {
        type: "image",
        src: "/rpg/WorkContentRPG3.png",
        alt: "RPG work image 3",
      },
      {
        type: "text",
        text: "Along the way you meet the merchant to buy gear. There are a few display modes too. Two of them are the 8-bit mode and the hacker mode.",
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
    projectIds: ["metis", "echo", "stakecircle", "kloosterkerk"],
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
