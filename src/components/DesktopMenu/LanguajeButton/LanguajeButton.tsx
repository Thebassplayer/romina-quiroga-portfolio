import Link from "next/link";
import React from "react";
import LanguajeIcon from "../../Icons/languajeIcon";
import { useSearchParams } from "next/navigation";

const LanguajeButton = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;

  const languaje = eng ? "español" : "english";

  return (
    <Link href={!eng ? "?eng=true" : "?eng=false"} className="flex text-2xl">
      <LanguajeIcon />
      <p className="ml-2 h-min border-l-2 border-black pl-2">{languaje}</p>
    </Link>
  );
};

export default LanguajeButton;
