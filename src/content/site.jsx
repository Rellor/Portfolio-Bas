/**
 * Everything on the desktop that is not a project.
 *
 * `shortcuts` are the icons on the right of the screen, `windows` are the
 * windows they open. A shortcut opens the window with the same `id`, and the
 * Projects window is the one with `kind: "projects"` - it builds itself from
 * src/content/projects.jsx.
 */

import Text from "@/components/atoms/text";
import ContactList from "@/components/molecules/contact-list";
import ProfileCard from "@/components/molecules/profile-card";
import TitleBlock from "@/components/molecules/title-block";
import DefinitionList from "@/components/molecules/definition-list";
import SkillsOverview from "@/components/organisms/skills-overview";
import { skillGroups } from "@/content/skills";
import { usesIntro, usesSections } from "@/content/uses";

export const site = {
  name: "Bas de Roller",
  metadata: {
    title: "Bas de Roller",
    description: "Created by Bas de Roller",
  },
};

/** Add or remove a way to reach me by editing this list. */
const contactEntries = [
  {
    label: "Email",
    value: "Basderoller@gmail.com",
    href: "mailto:basderoller@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Bas de Roller",
    href: "https://www.linkedin.com/in/bas-de-roller-330733143/",
  },
  { label: "Github", value: "Rellor", href: "https://github.com/Rellor" },
];

/**
 * The icons on the desktop, top to bottom. The first four come in two sets: the
 * redrawn ones in /public/desktop (used here) and the original ones in /public
 * (projectsIcon.png, aboutIcon.png, contactIcon.png and MeIcon.png). To go back
 * to the originals, change the `src` of that shortcut. `spacing.top` is the gap above the
 * icon on desktop, `spacing.topMobile` the gap on small screens.
 */
export const shortcuts = [
  {
    id: "projects",
    title: "Projects",
    icon: { src: "/desktop/projects.png", alt: "ProjectsIcon" },
    spacing: { top: "1rem", topMobile: "0.5rem", right: "0.25rem", left: "auto" },
  },
  {
    id: "about",
    title: "About",
    icon: { src: "/desktop/about.png", alt: "AboutIcon" },
    spacing: { top: "0.4rem", topMobile: "0.4rem", right: "0.25rem", left: "auto" },
  },
  {
    id: "contact",
    title: "Contact",
    icon: { src: "/desktop/contact.png", alt: "ContactIcon" },
    spacing: { top: "0.4rem", topMobile: "0.4rem", right: "0.25rem", left: "auto" },
  },
  {
    id: "me",
    title: "Me",
    icon: { src: "/desktop/me.png", alt: "Me Icon" },
    spacing: { top: "0.4rem", topMobile: "0.4rem", right: "0.25rem", left: "auto" },
  },
  {
    id: "uses",
    title: "Uses",
    icon: { src: "/usesIcon.png", alt: "Uses Icon" },
    spacing: { top: "0.4rem", topMobile: "0.4rem", right: "0.25rem", left: "auto" },
  },
  {
    id: "settings",
    title: "Settings",
    icon: { src: "/settingsIcon.png", alt: "Settings Icon" },
    spacing: { top: "0.4rem", topMobile: "0.4rem", right: "0.25rem", left: "auto" },
  },
];

/**
 * The windows, in the order they are stacked on first load. Set `openByDefault`
 * to have a window open when the site loads.
 */
export const windows = [
  {
    id: "contact",
    title: "Contact",
    accent: "teal",
    openByDefault: true,
    layout: {
      width: "30%",
      height: "25%",
      mobileWidth: "80%",
      mobileHeight: "70%",
      left: "55vw",
      top: "7vh",
      leftMobile: "10vw",
      topMobile: "10vh",
    },
    content: (
      <>
        <Text variant="body">Feel free to contact me!</Text>
        <ContactList entries={contactEntries} />
      </>
    ),
  },
  {
    id: "projects",
    kind: "projects",
    title: "Projects",
    accent: "navy",
    openByDefault: true,
    layout: {
      width: "48%",
      // The biggest window on the desktop, so all project sections fit.
      height: "72%",
      mobileWidth: "90%",
      mobileHeight: "80%",
      left: "38vw",
      top: "22vh",
      leftMobile: "5vw",
      topMobile: "10vh",
    },
  },
  {
    id: "uses",
    title: "Uses",
    accent: "orange",
    layout: {
      width: "32%",
      minWidth: "26rem",
      height: "70%",
      mobileWidth: "90%",
      mobileHeight: "75%",
      left: "30vw",
      top: "12vh",
      leftMobile: "5vw",
      topMobile: "8vh",
    },
    content: (
      <>
        <TitleBlock title="Uses" />
        <Text variant="body">{usesIntro}</Text>
        <br />
        {usesSections.map((section) => (
          <section key={section.title}>
            <TitleBlock title={section.title} size="small" />
            <DefinitionList rows={section.rows} />
          </section>
        ))}
      </>
    ),
  },
  {
    id: "settings",
    kind: "settings",
    title: "Settings",
    accent: "green",
    layout: {
      width: "34%",
      minWidth: "26rem",
      height: "78%",
      mobileWidth: "90%",
      mobileHeight: "80%",
      left: "50vw",
      top: "9vh",
      leftMobile: "5vw",
      topMobile: "8vh",
    },
  },
  {
    id: "about",
    title: "About me",
    accent: "crimson",
    openByDefault: true,
    layout: {
      width: "36%",
      minWidth: "28rem",
      height: "84%",
      mobileWidth: "90%",
      mobileHeight: "80%",
      left: "2vw",
      top: "7vh",
      leftMobile: "5vw",
      topMobile: "5vh",
    },
    content: (
      <>
        <TitleBlock title="Welcome" />
        <Text variant="body">
          My name is Bas, a programmer and designer driven by creativity. The
          projects here show what I like to build.
        </Text>
        <br />
        <Text variant="body">
          Most of my work is websites built with React, Next.js and TypeScript.
          The styling is SCSS or Tailwind CSS and the content lives in a
          headless CMS like Contentful or Directus. I build the content models
          and migrations too. Every site starts in Figma. Accessibility and
          testing are part of the routine. The game design minor added Unity and
          C#.
        </Text>
        <br />
        <TitleBlock title="Skills and tools" size="small" />
        <SkillsOverview groups={skillGroups} />
        <br />
        <TitleBlock title="Working with AI" size="small" />
        <Text variant="body">
          AI is part of the daily workflow. It helps with boilerplate and with
          explaining unfamiliar code. It also reviews changes and tries out
          ideas.
        </Text>
        <br />
        <Text variant="body">
          Coding and learning stay part of every project. AI saves time on the
          boring parts.
        </Text>
        <br />
        <TitleBlock title="About this site" size="small" />
        <Text variant="body">
          This site started out as a portfolio built completely by hand. Later it
          was rebuilt and extended with the help of AI (Claude Code) to optimise
          the code and add small details.
        </Text>
        <br />
        <Text variant="body">
          The ideas and the retro style are my own and some of the original code
          is still in there. AI did a lot of the building and I&apos;m happy with
          that. It&apos;s a great tool for speeding things up and it made it easy
          to try ideas and polish the details.
        </Text>
        <br />
        <TitleBlock title="Outside of work" size="small" />
        <Text variant="body">
          Outside of work it is usually a drink with friends or a game together.
          Music and movies are big too. Have a look around!
        </Text>
      </>
    ),
  },
  {
    id: "me",
    title: "Bas",
    accent: "purple",
    layout: {
      width: "17%",
      height: "40%",
      mobileWidth: "80%",
      mobileHeight: "70%",
      left: "25vw",
      top: "10vh",
      leftMobile: "5vw",
      topMobile: "5vh",
    },
    content: (
      <ProfileCard
        details={[
          { label: "Age", value: "26" },
          { label: "Location", value: "Purmerend, The Netherlands" },
        ]}
      />
    ),
  },
];

/**
 * The Settings window. `id` ties each setting to its state in src/app/page.js,
 * and also names the localStorage key it is remembered under. A `toggle` is a
 * checkbox, a `choice` picks one of its `options`. The values of the choices
 * have to match src/styles/theme.js and src/styles/themes.scss.
 */
export const settingOptions = [
  {
    id: "crt",
    type: "toggle",
    group: "Screen",
    label: "Old screen overlay",
    description: "Scanlines, a curved dark rim and a bit of flicker.",
  },
  {
    id: "desktop",
    type: "choice",
    group: "Desktop",
    label: "Desktop colour",
    options: [
      { value: "teal", label: "Teal", swatch: "#008080" },
      { value: "slate", label: "Slate", swatch: "#3a6ea5" },
      { value: "forest", label: "Forest", swatch: "#2f6f46" },
      { value: "plum", label: "Plum", swatch: "#6a3d8f" },
      { value: "rust", label: "Rust", swatch: "#a85432" },
      { value: "charcoal", label: "Charcoal", swatch: "#3b3f45" },
    ],
  },
  {
    id: "wallpaper",
    type: "choice",
    group: "Desktop",
    label: "Wallpaper",
    options: [
      { value: "blocks", label: "Blocks" },
      { value: "grid", label: "Grid" },
      { value: "plain", label: "Plain" },
    ],
  },
  {
    id: "titlebars",
    type: "choice",
    group: "Windows",
    label: "Title bars",
    description: "A colour per window or one colour for all of them.",
    options: [
      { value: "colourful", label: "Colourful" },
      { value: "classic", label: "Classic blue" },
      { value: "graphite", label: "Graphite" },
    ],
  },
];

/** Ids of the windows that are open when the site loads. */
export const defaultOpenWindowIds = windows
  .filter((window) => window.openByDefault)
  .map((window) => window.id);
