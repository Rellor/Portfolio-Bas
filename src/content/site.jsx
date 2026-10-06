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
 * The icons on the desktop, top to bottom. `spacing.top` is the gap above the
 * icon on desktop, `spacing.topMobile` the gap on small screens.
 */
export const shortcuts = [
  {
    id: "projects",
    title: "Projects",
    icon: { src: "/projectsIcon.png", alt: "ProjectsIcon" },
    spacing: { top: "5rem", topMobile: "2rem", right: "3rem", left: "auto" },
  },
  {
    id: "about",
    title: "About",
    icon: { src: "/aboutIcon.png", alt: "AboutIcon" },
    spacing: { top: "1rem", right: "3rem", left: "auto" },
  },
  {
    id: "contact",
    title: "Contact",
    icon: { src: "/contactIcon.png", alt: "ContactIcon" },
    spacing: { top: "1rem", right: "3rem", left: "auto" },
  },
  {
    id: "me",
    title: "Me",
    icon: { src: "/MeIcon.png", alt: "Me Icon" },
    spacing: { top: "1rem", right: "3rem", left: "auto" },
  },
  {
    id: "settings",
    title: "Settings",
    icon: { src: "/settingsIcon.png", alt: "Settings Icon" },
    spacing: { top: "1rem", right: "3rem", left: "auto" },
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
      height: "40%",
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
      width: "36%",
      // Taller than the other small windows so both project sections fit.
      height: "55%",
      mobileWidth: "90%",
      mobileHeight: "70%",
      left: "33vw",
      top: "40vh",
      leftMobile: "5vw",
      topMobile: "12vh",
    },
  },
  {
    id: "settings",
    kind: "settings",
    title: "Settings",
    accent: "green",
    layout: {
      width: "26%",
      height: "30%",
      mobileWidth: "80%",
      mobileHeight: "45%",
      left: "60vw",
      top: "30vh",
      leftMobile: "10vw",
      topMobile: "15vh",
    },
  },
  {
    id: "about",
    title: "About me",
    accent: "crimson",
    openByDefault: true,
    layout: {
      width: "30%",
      height: "75%",
      mobileWidth: "80%",
      mobileHeight: "70%",
      left: "2vw",
      top: "7vh",
      leftMobile: "5vw",
      topMobile: "5vh",
    },
    content: (
      <>
        <TitleBlock title="Welcome" />
        <Text variant="body">
          My name is Bas, a passionate programmer and designer driven by
          creativity. My work reflects my love for innovative solutions, and I
          take pride in crafting projects that showcase my perspective. My
          expertise lies in HTML/CSS and JavaScript, while my exposure to game
          design during my minor has also equipped me with proficiency in Unity
          and C#.
          <br /> <br />
          Beyond my professional hobby&apos;s, I love to have a drink with
          friends or play games with them. I also am a huge fan of music and
          movies.
        </Text>
        <br />
        <Text variant="body">
          I am excited to show you what I&apos;ve been up to in my portfolio!
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
        photo={{ src: "/Bas.png", alt: "Me" }}
        details={[
          { label: "Age", value: "23" },
          { label: "Location", value: "Purmerend, The Netherlands" },
        ]}
      />
    ),
  },
];

/**
 * The checkboxes in the Settings window. `id` is also the localStorage key
 * suffix the choice is remembered under; the page wires each one up to its
 * state in src/app/page.js.
 */
export const settingOptions = [
  {
    id: "crt",
    label: "Old screen overlay",
    description: "Scanlines, a curved dark rim and a bit of flicker.",
  },
];

/** Ids of the windows that are open when the site loads. */
export const defaultOpenWindowIds = windows
  .filter((window) => window.openByDefault)
  .map((window) => window.id);
