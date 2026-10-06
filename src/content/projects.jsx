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
            The old site was hard to use and even harder to change, so the new
            one runs on Contentful with a new design system. It&apos;s live at{" "}
            <Link href="https://www.rdu.com">rdu.com</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "My part was a big chunk of the front end: the reusable components, the header, flight search and flight lists, the news section and the interactive airport map. On top of that came the Contentful content models and migrations behind them.",
      },
      {
        type: "text",
        text: "Towards the launch it was mostly design feedback, content checks and getting every release through test, acceptance and production.",
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
        text: "The design came from another agency and we turned it into a Contentful website, so the airport can manage its own content. Most of my time went into the flight list and flight details, parking availability, search and making the forms more accessible.",
      },
      {
        type: "text",
        text: "Both airports share the same foundation, so a lot of the RDU work could be reused here. For the launch there were also redirects from the old site, security settings and the releases to take care of.",
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
            Metis is a monitoring tool for public affairs, communication and
            policy teams. It keeps track of politics with AI summaries, alerts
            and comments from experts. For Fyris I designed and built the
            product website, which you can find at{" "}
            <Link href="https://metismonitor.nl">metismonitor.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design was made in Figma and built in Next.js with Tailwind CSS. Radix UI takes care of the interactive parts, the icons are from Lucide and the whole site comes in Dutch and English. Visitor numbers are tracked with Umami, which doesn't need cookies.",
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
            can search by text, speaker or party, with an AI summary and a
            chatbot on top. Design and front-end were mine, and you can see the
            result at{" "}
            <Link href="https://echo.metismonitor.nl">echo.metismonitor.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "Same recipe as Metis: Figma for the design, Next.js and Tailwind CSS for the build, with Radix UI for the components. Embla handles the carousel and Sentry catches errors, so problems show up before a user mentions them.",
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
            StakeCircle is software for stakeholder management, made by and for
            public affairs professionals. It covers the whole cycle from
            logging contact to planning your next move. The product website
            lives at{" "}
            <Link href="https://stakecircle.nl/en">stakecircle.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "I designed it in Figma and built it with Next.js and Tailwind CSS, in Dutch and English. D3 draws the interactive network graph, which shows how stakeholders connect, and Radix UI and Lucide cover the components and icons.",
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
            agenda of services, concerts and events. I designed and built the
            website, which is live at{" "}
            <Link href="https://www.kloosterkerk.nl">kloosterkerk.nl</Link>.
          </Text>
        ),
      },
      {
        type: "text",
        text: "The design started in Figma. The site runs on Next.js with Tailwind CSS and Directus as the CMS, so the church can manage the agenda, news and pages without a developer. Sliders are built with Keen Slider, donations go through Mollie, the newsletter through Mailchimp and tickets are sold on their own subdomain.",
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
            This project was my introduction to building a responsive website.
            To give all attention to the code I picked an existing site as the
            design: <Link href="https://www.bungie.net/7/en/Destiny">bungie.net</Link>.
            Breakpoints make sure it works on both mobile and desktop, and I&apos;m
            happy with how it turned out. You can see the result with{" "}
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
            Two pages of bungie.net were rebuilt: the main page and the{" "}
            <Link href="/oldWork/basiswebsite/play.html">Destiny 2</Link> page,
            which you reach through the navigation. This is the mobile version
            of the Destiny 2 page.
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
        text: "At Moyu I worked with Shopify, which lets sellers set up a professional webshop. I helped manage and optimise the shop to make things a bit smoother for customers.",
      },
      {
        type: "image",
        src: "/moyu/SanityImage.png",
        alt: "Moyu work image 2",
      },
      {
        type: "text",
        text: "Together with other developers I set up a content management system in Sanity. That made publishing content and updating the website a lot simpler.",
      },
      {
        type: "image",
        src: "/moyu/WorkContentMoyu3.png",
        alt: "Moyu work image 3",
      },
      {
        type: "text",
        text: "I also designed several parts of the new website and built them out into one consistent whole, which strengthened the look and feel of the brand.",
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
        text: "My long internship at Ajax Business is where my programming skills grew the most. I could apply it right away to the portfolio you're looking at now.",
      },
      {
        type: "image",
        src: "/ajax/WorkContentAjax2.2.png",
        alt: "Ajax work image 2",
      },
      {
        type: "text",
        text: "In this project I learned to set up a React project with atomic design and to build components that talk to an API. SASS kept the CSS organised.",
      },
      {
        type: "text",
        text: "Unfortunately there isn't much to show yet, since the project is still unreleased. Curious about the approach or the technical side? Ask me, I'm happy to talk about it.",
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
        text: "The minor in game design at the HvA ended with a solo project: the bootcamp. We learned Unity and had to make a platformer with 3 to 5 levels that get harder along the way, and at least 15 minutes of gameplay.",
      },
      {
        type: "image",
        src: "/pasta/WorkContentPasta2.png",
        alt: "Pasta work image 2",
      },
      {
        type: "text",
        text: "My answer was Pasta la vista, a platformer where you play a piece of pasta finding its way through a strange world full of black holes, spinning locations, flying food and an evil wizard.",
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
            It got a 10, which I&apos;m pretty proud of. You can play it on itch.io
            via <Link href="https://rellor10.itch.io/pasta-la-vista">this link</Link>.
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
            song and shape the lyrics around it, and I went with{" "}
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
        text: "First came the title designs. I made 4 and picked the one that fit the lyrics, the title and the style of the music best.",
      },
      {
        type: "image",
        src: "/gorillaz/WorkContentGorillaz3.gif",
        alt: "Momentary Bliss animation",
      },
      {
        type: "text",
        text: "With that design I worked on a GIF that became the final video. The goal was to show the chaos of the song with fast moving drawings, which is also the style of the actual music video.",
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
        text: "Frogwarts is the result of the first team project of the game design minor. We were a team of 5 and I was the main developer, which also made me responsible for delivering the game.",
      },
      {
        type: "image",
        src: "/frogwarts/WorkContentFrogwarts2.png",
        alt: "Frogwarts work image 2",
      },
      {
        type: "text",
        text: "You play a first year student at a magical school whose frog escapes. Going after it leads you to a forbidden floor full of monsters. Fight them, upgrade and take down the boss!",
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
            The goal of this project was to learn the basics of JavaScript, and
            making a game with it made that a lot more fun. Dark Souls was the
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
        text: "You explore a grid map with loot, text events, bonfires, a merchant and bosses. The legend on the right keeps track of what each colour means.",
      },
      {
        type: "image",
        src: "/rpg/WorkContentRPG3.png",
        alt: "RPG work image 3",
      },
      {
        type: "text",
        text: "Along the way you meet the merchant to buy gear. There are also a few different display modes, like the 8-bit mode and the hacker mode.",
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
