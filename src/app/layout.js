import { Inter } from "next/font/google";

import Background from "@/components/organisms/background";
import { site } from "@/content/site";

import "@/styles/globals.css";
import "@/styles/fonts.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = site.metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
