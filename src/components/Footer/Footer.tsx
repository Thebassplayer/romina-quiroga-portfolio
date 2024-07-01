"use client";
import RQLink from "../RQLink/RQLink";
import SocialLinks from "../SocialLinks/SocialLinks";
import cx from "@/app/utils/classesReducer";

type FooterProps = {
  className?: string;
};

const MobileFooter = ({ className }: FooterProps) => {
  return (
    <div
      className={cx(
        "flex w-full flex-col items-start gap-8 py-8 pl-4 lg:hidden",
        className,
      )}
    >
      <RQLink />
      <SocialLinks />
    </div>
  );
};

export default MobileFooter;
