import cx from "@/app/utils/classesReducer";
import Link from "next/link";
import PinterestIcon from "../Icons/PinterestIcon";
import LinkedInIcon from "../Icons/LinkedinIcon";
import BehanceIcon from "../Icons/BehanceIcon";
import TextTransition from "../RQButton/RQButton";

type LeftMenuProps = {
  className?: string;
};

const LeftMenu = ({ className }: LeftMenuProps) => {
  return (
    <div className={cx("w-200 flex h-full flex-col pl-4", className)}>
      <div className="grow">
        <Link href="/">
          <h1 className="mt-28 font-roboto text-2xl font-bold">RQ</h1>
        </Link>
        <TextTransition />
      </div>
      <div className="mb-20 flex grow flex-col items-center justify-end gap-4">
        <Link href={"https://www.linkedin.com/in/rominagquiroga/"}>
          <LinkedInIcon className="size-8" />
        </Link>
        <Link href={"https://www.behance.net/rominagquiroga"}>
          <BehanceIcon className="size-10" />
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
