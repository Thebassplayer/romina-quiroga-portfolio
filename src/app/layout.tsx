import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import cx from "./utils/classesReducer";

const roboto = Roboto({
  weight: "700",
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
          "font-SansationLg bg-romi-gradient overflow-y-auto bg-cover bg-center",
        )}
      >
        <main className="relative flex flex-col">
          <nav className="absolute top-0 w-screen">
            <ul className="flex w-full flex-row justify-evenly px-80 py-16">
              <li className="text-2xl">Proyectos</li>
              <li className="text-2xl">Sobre Mi</li>
              <li className="text-2xl">Email</li>
              <li className="text-2xl">Ingles</li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
