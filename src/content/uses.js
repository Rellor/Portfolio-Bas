/**
 * The Uses window: the tools of the daily setup, as `label: items` rows. Only
 * tools that show up in the projects and repos on this site are listed. To add
 * a row, add it to the right section.
 */
export const usesIntro = "The setup behind the work: what gets used every day.";

export const usesSections = [
  {
    title: "Design",
    rows: [{ label: "Design", value: "Figma, for layouts, design systems and variables" }],
  },
  {
    title: "Code",
    rows: [
      { label: "Languages", value: "TypeScript, JavaScript, HTML, CSS" },
      { label: "Frameworks", value: "React, Next.js" },
      { label: "Styling", value: "SCSS, Tailwind CSS" },
      { label: "Content", value: "Contentful, Directus" },
      { label: "Packages", value: "Yarn" },
    ],
  },
  {
    title: "Quality",
    rows: [
      { label: "Linting", value: "ESLint, Biome" },
      { label: "Testing", value: "Vitest, Jest, Playwright, Storybook" },
      { label: "Analysis", value: "SonarQube" },
    ],
  },
  {
    title: "Workflow",
    rows: [
      { label: "Code", value: "GitHub and the gh command line tool" },
      { label: "Planning", value: "Jira and Notion" },
      { label: "AI", value: "Claude Code, as a helper and not a replacement" },
    ],
  },
];
