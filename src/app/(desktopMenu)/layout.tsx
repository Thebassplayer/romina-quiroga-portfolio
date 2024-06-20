"use client";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import GoTopButton from "@/components/GoTopButton/GoTopButton";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center">
        <DesktopMenu />
        <div className="justify-cente mt-12 flex w-full grow">{children}</div>
      </div>
      <GoTopButton />
    </>
  );
};

export default Layout;
