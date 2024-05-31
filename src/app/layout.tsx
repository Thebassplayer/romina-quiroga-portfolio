import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import cx from "./utils/classesReducer";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";

const roboto = Roboto({
  weight: "400",
  variable: "--font-rb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romina Quiroga Portfolio",
  description: "UX-UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx("overflow-y-auto bg-romi-gradient bg-cover bg-center")}
      >
        <main className="relative flex flex-col">
          <DesktopMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
