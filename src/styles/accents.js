/**
 * Title bar colours. The names match the `$accents` map in
 * src/styles/variables.scss, which defines the actual colours.
 */
export const ACCENTS = ["navy", "purple", "teal", "crimson", "orange", "green"];

/**
 * A stable accent for a window, so each window keeps its colour between
 * visits without the content files having to choose one.
 *
 * @param {string} key Anything unique for the window, e.g. its title.
 */
export function accentFor(key) {
  let hash = 0;
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return ACCENTS[hash % ACCENTS.length];
}
