"use client";

import RetainQueryLink from "@/components/RetainQueryLink/RetainQueryLink";
import { useSearchParams } from "next/navigation";
import HomeIcon from "@/components/Icons/HomeIcon";

const HOME_BUTTON_DATA = {
  title: {
    spa: "Inicio",
    eng: "Home",
  },
  icon: <HomeIcon />,
  path: "/",
};

const HomeButton = () => {
  const { title, icon, path } = HOME_BUTTON_DATA;
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng ? title.eng : title.spa;

  return (
    <RetainQueryLink href={path} className="flex">
      {icon}
      <p className="ml-2 border-l-2 border-black pl-2 hover:underline">
        {text}
      </p>
    </RetainQueryLink>
  );
};

export default HomeButton;
