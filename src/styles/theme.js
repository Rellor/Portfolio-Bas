/**
 * The values the visitor can pick in Settings. They have to match the rules in
 * src/styles/themes.scss and the options in `settingOptions`
 * (src/content/site.jsx).
 */
export const THEME_OPTIONS = {
  desktop: ["teal", "slate", "forest", "plum", "rust", "charcoal"],
  wallpaper: ["blocks", "grid", "plain"],
  titlebars: ["colourful", "classic", "graphite"],
};

export const THEME_DEFAULTS = {
  desktop: "teal",
  wallpaper: "blocks",
  titlebars: "colourful",
};
