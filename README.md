# Portfolio - Bas de Roller

A desktop-metaphor portfolio built with [Next.js](https://nextjs.org/) (app router),
SCSS and [react-draggable](https://github.com/react-grid-layout/react-draggable).

## Getting started

```bash
yarn install
yarn dev      # http://localhost:3000
```

Other scripts:

```bash
yarn build    # production build
yarn start    # serve the production build
yarn lint     # eslint
yarn audit    # check dependencies for known vulnerabilities
```

## Adding content

All copy, images and window positions live in `src/content/`. You should not have
to touch a component to add work to the site.

### A new project

1. Put the shortcut icon in `public/` and the screenshots in `public/<project>/`.
2. Add an entry to `projects` in [`src/content/projects.jsx`](src/content/projects.jsx).
3. Add its `id` to one of the groups in `projectGroups` in the same file (Work - Framna, Work - Fyris or School projects).

```jsx
{
  id: "my-project",
  title: "My project",                    // label under the shortcut icon
  meta: "2026 - React/Next.js",           // small line under the heading
  icon: { src: "/MyIcon.png", alt: "My project icon" },
  layout: PROJECT_LAYOUT,
  blocks: [
    { type: "image", src: "/my-project/shot.png", alt: "My project home page" },
    { type: "text", text: "What I built and what I learned." },
    { type: "video", src: "/my-project/clip.mp4" },
    {
      type: "text",
      content: (
        <Text variant="body">
          Copy with a <Link href="https://example.com">link</Link> in it.
        </Text>
      ),
    },
  ],
}
```

### A new section in the Projects window

Add a group to `projectGroups`. The order of the groups is the order they appear
in, and `projectIds` decides the order of the icons inside a group.

```jsx
export const projectGroups = [
  { id: "framna", title: "Work - Framna", projectIds: ["rdu", "ric"] },
  { id: "school", title: "School projects", projectIds: ["ajax", "bungie", "..."] },
];
```

### Anything else on the desktop

[`src/content/site.jsx`](src/content/site.jsx) holds the name in the navigation
bar, the page metadata, the contact details, the desktop shortcuts and the
About / Contact / Me windows. A shortcut opens the window with the same `id`, and
`openByDefault` decides which windows are open when the site loads.

### Metadata, preview image and favicon

- The title, description and keywords are in `site.metadata` in
  [`src/content/site.jsx`](src/content/site.jsx); the rest (Open Graph, Twitter
  card, theme colour) is assembled in [`src/app/layout.js`](src/app/layout.js).
- The image shown when the site is shared is
  [`src/app/opengraph-image.png`](src/app/opengraph-image.png) (1200 x 630, also
  used as `twitter-image.png`), with its description in the `.alt.txt` files.
- The favicon files sit in `src/app`: `favicon.ico` (16 and 32 px), `icon.png`
  and `apple-icon.png`. The previous favicons are kept as
  `faviconPrevious.png` and `faviconOld.ico`.
- The site address used for those links comes from `NEXT_PUBLIC_SITE_URL`, or
  Vercel's production address, or `https://portfolio-rellor.vercel.app`.

### Settings, the taskbar and the boot screen

- **Settings** (desktop colour, wallpaper, title bars, old screen overlay) are
  listed in `settingOptions` in [`src/content/site.jsx`](src/content/site.jsx).
  A choice needs a matching value in [`src/styles/theme.js`](src/styles/theme.js)
  and a rule in [`src/styles/themes.scss`](src/styles/themes.scss). Choices are
  remembered in localStorage.
- **The Uses window** reads from [`src/content/uses.js`](src/content/uses.js),
  and the skills in About me from [`src/content/skills.js`](src/content/skills.js)
  (pixel icons in `public/skills`).
- **The taskbar** lists every open window; clicking one hides, shows or focuses
  it. The Start menu is built from the desktop shortcuts and the project groups,
  so a new project shows up there without extra work.
- **Windows** can be dragged to the left or right edge of the desktop to fill
  half of it, or to the top edge to maximize. Double-clicking a title bar
  maximizes or restores it.
- **Keyboard:** the Start menu opens with the up and down arrow keys and works
  with the arrow keys, Home, End, typing a letter and Escape. Alt + ` (Shift for
  backwards) switches between the open windows. Alt+Tab belongs to the
  operating system, so a web page cannot use it.
- **The 404 page** is a blue screen (`src/app/not-found.js`); any key goes back
  to the desktop.
- **The boot screen** shows once per visit (sessionStorage). "Restart" in the
  Start menu plays it again and resets the windows.

## Structure

The components follow [atomic design](https://bradfrost.com/blog/post/atomic-web-design/):
small pieces are combined into bigger ones, and only the content files know what
the site actually says.

```
src/
  app/                      Next.js app router entry points
  components/
    atoms/                  text, heading, link, icon, close-button
    molecules/              shortcut, title-block, text-block, media-block,
                            embed-block, shortcut-group, contact-list,
                            profile-card
    organisms/              window, navigation, background, content-blocks,
                            project-window, projects-window
    templates/desktop/      the page frame: navigation bar + desktop area
  content/                  everything the site says (see above)
  hooks/                    useWindowDimensions, useWindowManager
  styles/                   variables, fonts, global css, breakpoints
```

Rule of thumb: an atom never knows about the site, a molecule combines atoms, an
organism combines molecules into something you can point at ("a window"), and the
template arranges organisms on the page.

## Security

- Dependencies are checked with `yarn audit`; `resolutions` in `package.json`
  pins patched versions of transitive dependencies.
- `next.config.js` sets a Content Security Policy (which limits framing to the
  itch.io players), `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy` and HSTS, and hides the
  `X-Powered-By` header. These headers need a Node/Vercel deployment - a plain
  static export would have to set them on the CDN instead.
- External links get `rel="noopener noreferrer"` through the `Link` atom.
