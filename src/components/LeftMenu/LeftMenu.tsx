"use client";
import cx from "@/app/utils/classesReducer";
import SocialLinks from "../SocialLinks/SocialLinks";
import RQLink from "../RQLink/RQLink";

type LeftMenuProps = {
  className?: string;
};

const LeftMenu = ({ className }: LeftMenuProps) => {
  return (
    <div className={cx("w-200 h-full flex-col pl-4", className)}>
      <div className="grow">
        <RQLink />
      </div>
      <SocialLinks className="mb-20 flex-col" />
    </div>
  );
};

export default LeftMenu;
