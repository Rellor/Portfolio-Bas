/**
 * The skills overview in the About window: the tools used in projects found on
 * GitHub, plus the ones from the Fyris and Framna work. The icons are pixelized
 * logos in /public/skills (from Simple Icons, CC0).
 *
 * To add a tool, drop a pixel icon in /public/skills and add it to a group.
 */

const icon = (slug) => ({ src: `/skills/${slug}.png`, alt: "" });

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    color: "pink",
    skills: [
      { name: "HTML", icon: icon("html5") },
      { name: "CSS", icon: icon("css3") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "C#", icon: icon("csharp") },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    color: "blue",
    skills: [
      { name: "React", icon: icon("react") },
      { name: "Next.js", icon: icon("nextdotjs") },
      { name: "Node.js", icon: icon("nodedotjs") },
      { name: "Express", icon: icon("express") },
      { name: "Radix UI", icon: icon("radixui") },
      { name: "Unity", icon: icon("unity") },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    color: "yellow",
    skills: [
      { name: "Sass", icon: icon("sass") },
      { name: "Tailwind CSS", icon: icon("tailwindcss") },
      { name: "styled-components", icon: icon("styledcomponents") },
    ],
  },
  {
    id: "data",
    title: "Data and content",
    color: "green",
    skills: [
      { name: "D3", icon: icon("d3dotjs") },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "Contentful", icon: icon("contentful") },
      { name: "Directus", icon: icon("directus") },
      { name: "Algolia", icon: icon("algolia") },
    ],
  },
  {
    id: "quality",
    title: "Testing and tooling",
    color: "purple",
    skills: [
      { name: "Jest", icon: icon("jest") },
      { name: "Vitest", icon: icon("vitest") },
      { name: "Storybook", icon: icon("storybook") },
      { name: "Playwright", icon: icon("playwright") },
      { name: "Figma", icon: icon("figma") },
      { name: "GitHub", icon: icon("github") },
    ],
  },
];
