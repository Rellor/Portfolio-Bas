import "./globals.css";
import { Inter } from "next/font/google";

import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bas de Roller",
  description: "Created by Bas de Roller",
};

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
