import type { Metadata } from "next";
import "./globals.css";
import cx from "./utils/classesReducer";

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
      <body className={cx("font-SansationLg")}>{children}</body>
    </html>
  );
}
