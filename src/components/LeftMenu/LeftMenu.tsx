import cx from "@/app/utils/classesReducer";
import Link from "next/link";
import LinkedInIcon from "../Icons/LinkedinIcon";
import BehanceIcon from "../Icons/BehanceIcon";
import TextTransition from "../RQButton/RQButton";
import SocialLinks from "../SocialLinks/SocialLinks";

type LeftMenuProps = {
  className?: string;
};

const LeftMenu = ({ className }: LeftMenuProps) => {
  return (
    <div className={cx("w-200 flex h-full flex-col pl-4", className)}>
      <div className="grow">
        <Link href="/">
          <TextTransition className="mt-28 font-roboto text-2xl font-bold" />
        </Link>
      </div>
      <SocialLinks className="mb-20" />
    </div>
  );
};

export default LeftMenu;
