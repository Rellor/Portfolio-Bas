/**
 * The skills overview in the About window: which tools were used in which
 * year. The years come from GitHub (my own repos plus the airport repos), so
 * a tool only shows up in a year when there is code for it.
 *
 * To add a tool, put it in the right group with the years it was used. To add
 * a year, extend `skillYears`.
 */

export const skillYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

/**
 * `color` is one of the colours in `$skill-colors`
 * (src/components/organisms/skills-timeline/skills-timeline.scss).
 */
export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    color: "pink",
    skills: [
      { name: "HTML", years: [2020, 2021, 2022, 2023, 2026] },
      { name: "CSS", years: [2020, 2021, 2022, 2023, 2026] },
      { name: "JavaScript", years: [2020, 2021, 2022, 2023, 2026] },
      { name: "TypeScript", years: [2026] },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    color: "blue",
    skills: [
      { name: "React", years: [2021, 2022, 2023, 2026] },
      { name: "Next.js", years: [2021, 2022, 2023, 2026] },
      { name: "Node + Express", years: [2021] },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    color: "yellow",
    skills: [
      { name: "Sass / SCSS", years: [2020, 2023, 2026] },
      { name: "Tailwind CSS", years: [2022, 2026] },
      { name: "styled-components", years: [2022] },
      { name: "Emotion", years: [2026] },
    ],
  },
  {
    id: "data",
    title: "Data and content",
    color: "green",
    skills: [
      { name: "D3", years: [2021, 2022] },
      { name: "MongoDB", years: [2021] },
      { name: "Contentful", years: [2026] },
      { name: "Algolia", years: [2026] },
    ],
  },
  {
    id: "quality",
    title: "Testing and tooling",
    color: "purple",
    skills: [
      { name: "Jest", years: [2026] },
      { name: "Vitest", years: [2026] },
      { name: "Storybook", years: [2026] },
      { name: "Playwright", years: [2026] },
    ],
  },
];
