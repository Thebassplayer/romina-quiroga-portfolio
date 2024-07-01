import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import MobileFooter from "@/components/Footer/Footer";
import GoTopButton from "@/components/GoTopButton/GoTopButton";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center">
        <DesktopMenu className="hidden lg:block" />
        <div className="justify-cente mt-16 flex w-full grow px-10 lg:px-20">
          {children}
        </div>
        <MobileFooter />
      </div>
      <GoTopButton />
    </>
  );
};

export default Layout;
