import cx from "@/app/utils/classesReducer";
import HamburgerMenu from "../HamburgerMenu/HamburguerMenu";

type MobileMenuProps = {
  className: string;
};

const MobileMenu = ({ className }: MobileMenuProps) => {
  return (
    <div className={cx(className, "flex w-full justify-end p-4")}>
      {/* <HamburgerMenu /> */}
    </div>
  );
};

export default MobileMenu;
