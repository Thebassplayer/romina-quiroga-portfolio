import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import cx from "./utils/classesReducer";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import { Suspense } from "react";

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
        className={cx("h-screen w-screen bg-romi-gradient bg-cover bg-center")}
      >
        <main className="relative flex h-screen w-screen grow flex-col">
          <Suspense>
            <LeftMenu className="fixed left-0 z-50" />
          </Suspense>
          {children}
        </main>
      </body>
    </html>
  );
}
