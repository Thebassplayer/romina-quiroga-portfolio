import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <DesktopMenu />
      <div className="justify-cente mt-12 flex w-full grow">{children}</div>
    </div>
  );
};

export default layout;
