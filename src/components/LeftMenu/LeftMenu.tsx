"use client";
import cx from "@/app/utils/classesReducer";
import TextTransition from "../RQButton/RQButton";
import SocialLinks from "../SocialLinks/SocialLinks";
import RetainQueryLink from "../RetainQueryLink/RetainQueryLink";
import { usePathname } from "next/navigation";

type LeftMenuProps = {
  className?: string;
};

const LeftMenu = ({ className }: LeftMenuProps) => {
  const path = usePathname();
  const isHome = path === "/";

  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={cx("w-200 h-full flex-col pl-4", className)}>
      <div className="grow">
        {isHome ? (
          <button onClick={scrollToTop} title="Go Top">
            <TextTransition className="mt-28 font-roboto text-2xl font-bold" />
          </button>
        ) : (
          <RetainQueryLink href="/">
            <TextTransition className="mt-28 font-roboto text-2xl font-bold" />
          </RetainQueryLink>
        )}
      </div>
      <SocialLinks className="mb-20" />
    </div>
  );
};

export default LeftMenu;
