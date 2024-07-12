import type { Metadata } from "next";
import "./globals.css";
import cx from "./utils/classesReducer";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import { Suspense } from "react";
import MobileMenu from "@/components/Navigation/MobileMenu/MobileMenu";

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
          <MobileMenu className="fixed top-0 z-50 block lg:hidden" />
          <Suspense>
            <LeftMenu className="left-0 z-50 hidden lg:fixed lg:flex" />
          </Suspense>
          {children}
        </main>
      </body>
    </html>
  );
}
