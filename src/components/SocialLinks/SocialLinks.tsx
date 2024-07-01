import Link from "next/link";
import React from "react";
import LinkedInIcon from "../Icons/LinkedinIcon";
import BehanceIcon from "../Icons/BehanceIcon";
import cx from "@/app/utils/classesReducer";

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cx("flex grow justify-end gap-4", className)}>
      <Link
        href={"https://www.linkedin.com/in/rominagquiroga/"}
        className="hover:scale-105"
      >
        <LinkedInIcon className="size-10" />
      </Link>
      <Link
        href={"https://www.behance.net/rominagquiroga"}
        className="hover:scale-105"
      >
        <BehanceIcon className="size-10" />
      </Link>
    </div>
  );
};

export default SocialLinks;
