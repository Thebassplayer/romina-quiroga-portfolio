"use client";

import Link from "next/link";
import React from "react";
import LanguajeIcon from "../../Icons/languajeIcon";
import { usePathname } from "next/navigation";
import useLanguage from "@/hooks/useLang";

const LANGUAJE_BUTTON_TEXT = {
  eng: "English",
  esp: "Español",
};

const LanguajeButton = () => {
  const lang = useLanguage();
  const path = usePathname();
  const newpath = lang === "eng" ? path : "?eng=true";
  const text = LANGUAJE_BUTTON_TEXT[lang];

  return (
    <Link href={newpath} className="flex lg:text-2xl">
      <LanguajeIcon />
      <p className="ml-2 h-min border-l-2 border-black pl-2 hover:underline">
        {text}
      </p>
    </Link>
  );
};

export default LanguajeButton;
