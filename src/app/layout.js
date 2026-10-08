import { Inter } from "next/font/google";

import Background from "@/components/organisms/background";
import { site } from "@/content/site";

import "@/styles/globals.css";
import "@/styles/fonts.scss";
import "@/styles/themes.scss";

const inter = Inter({ subsets: ["latin"] });

// Where the site lives. Needed to turn the preview image into a full address.
// Set NEXT_PUBLIC_SITE_URL when the site moves to its own domain, Vercel's
// production address is picked up by itself.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://portfolio-rellor.vercel.app");

export const metadata = {
  metadataBase: new URL(siteUrl),
  // A page can set a short title, e.g. "Page not found", and gets the name added.
  title: { default: site.metadata.title, template: `%s | ${site.name}` },
  description: site.metadata.description,
  keywords: site.metadata.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  // The preview images come from opengraph-image.png and twitter-image.png.
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.metadata.title,
    description: site.metadata.description,
    locale: "en_GB",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
  },
};

// The browser bar on phones takes the colour of the desktop.
export const viewport = { themeColor: "#008080" };

// Puts the saved colours on <html> before the page is drawn, so a visitor who
// picked another desktop colour does not see the default one flash by. The
// same values are set again by the page once it is running (src/app/page.js).
const themeScript = `(function(){try{var keys={desktop:"setting-desktop",wallpaper:"setting-wallpaper",titlebars:"setting-titlebars"};var root=document.documentElement;for(var name in keys){var value=localStorage.getItem(keys[name]);if(value){root.dataset[name]=value;}}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    // The script changes <html> before React starts, hence the suppress flag.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
