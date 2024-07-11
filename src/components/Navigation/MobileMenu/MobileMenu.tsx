import cx from "@/app/utils/classesReducer";

type MobileMenuProps = {
  className: string;
};

const MobileMenu = ({ className }: MobileMenuProps) => {
  return <div className={cx(className)}>MobileMenu</div>;
};

export default MobileMenu;
