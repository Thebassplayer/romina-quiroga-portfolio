"use client";
import Link from "next/link";
import React from "react";
import LanguajeIcon from "../../Icons/languajeIcon";
import useLanguaje from "@/hooks/useLanguaje";

const LanguajeButton = () => {
  const { eng } = useLanguaje();
  const path = eng ? "?eng=false" : "?eng=true";
  const text = eng ? "Español" : "English";

  return (
    <Link href={path} className="flex text-2xl">
      <LanguajeIcon />
      <p className="ml-2 h-min border-l-2 border-black pl-2">{text}</p>
    </Link>
  );
};

export default LanguajeButton;
