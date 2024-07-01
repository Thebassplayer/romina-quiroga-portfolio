import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import cx from "./utils/classesReducer";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import { Suspense } from "react";
import MobileFooter from "@/components/Footer/Footer";

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
        className={cx(
          "h-screen w-screen overflow-x-hidden bg-romi-gradient bg-cover bg-center",
        )}
      >
        <main className="flex h-screen w-screen flex-col">
          <Suspense>
            <LeftMenu className="left-0 z-50 hidden lg:fixed lg:flex" />
          </Suspense>
          {children}
        </main>
      </body>
    </html>
  );
}
