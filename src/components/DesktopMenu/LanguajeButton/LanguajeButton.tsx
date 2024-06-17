"use client";
import Link from "next/link";
import React from "react";
import LanguajeIcon from "../../Icons/languajeIcon";
import { usePathname, useSearchParams } from "next/navigation";

const LanguajeButton = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const newpath = eng ? path : "?eng=true";
  const text = eng ? "Español" : "English";

  return (
    <Link href={newpath} className="flex text-2xl">
      <LanguajeIcon />
      <p className="ml-2 h-min border-l-2 border-black pl-2">{text}</p>
    </Link>
  );
};

export default LanguajeButton;
