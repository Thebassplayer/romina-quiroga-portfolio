import { usePathname } from "next/navigation";
import React from "react";
import RQButton from "../RQButton/RQButton";
import RetainQueryLink from "../RetainQueryLink/RetainQueryLink";

const RQLink = () => {
  const path = usePathname();
  const isHome = path === "/";

  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {isHome ? (
        <button onClick={scrollToTop} title="Go Top">
          <RQButton className="font-roboto text-2xl font-bold lg:mt-28" />
        </button>
      ) : (
        <RetainQueryLink href="/">
          <RQButton className="mt-28 font-roboto text-2xl font-bold" />
        </RetainQueryLink>
      )}
    </>
  );
};

export default RQLink;
