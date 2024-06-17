import cx from "@/app/utils/classesReducer";
import Link from "next/link";
import TextTransition from "../RQButton/RQButton";
import SocialLinks from "../SocialLinks/SocialLinks";
import RetainQueryLink from "../RetainQueryLink/RetainQueryLink";

type LeftMenuProps = {
  className?: string;
};

const LeftMenu = ({ className }: LeftMenuProps) => {
  return (
    <div className={cx("w-200 flex h-full flex-col pl-4", className)}>
      <div className="grow">
        <RetainQueryLink href="/">
          <TextTransition className="mt-28 font-roboto text-2xl font-bold" />
        </RetainQueryLink>
      </div>
      <SocialLinks className="mb-20" />
    </div>
  );
};

export default LeftMenu;
