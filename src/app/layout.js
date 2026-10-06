import { Inter } from "next/font/google";

import Background from "@/components/organisms/background";
import { site } from "@/content/site";

import "@/styles/globals.css";
import "@/styles/fonts.scss";
import "@/styles/themes.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = site.metadata;

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
