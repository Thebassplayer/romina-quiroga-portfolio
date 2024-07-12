"use client";
import { useState } from "react";
import Fingerprint from "@/components/Icons/Fingerprint";
import RetainQueryLink from "@/components/RetainQueryLink/RetainQueryLink";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

type ProyectsButtonMobileProps = {
  toggleHamburgerMenu?: () => void;
};

const PROYECTS_BUTTON_DATA = {
  title: {
    spa: "Proyectos",
    eng: "Proyects",
  },
  icon: <Fingerprint />,
};

const PROYECTS = [
  { title: "Mercado Home", path: "/proyects/mercado-home" },
  { title: "Paella", path: "/proyects/paella" },
  { title: "App Home", path: "/proyects/app-home" },
  { title: "Madre Dachshund", path: "/proyects/madre-dachshund" },
];

const toggleMenuVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0,
    },
  },
};

const ProyectsButtonMobile = ({
  toggleHamburgerMenu,
}: ProyectsButtonMobileProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { title, icon } = PROYECTS_BUTTON_DATA;
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true";
  const text = eng ? title.eng : title.spa;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex cursor-pointer" onClick={toggleMenu}>
        {icon}
        <p className="ml-2 border-l-2 border-black pl-2 hover:underline">
          {text}
        </p>
      </div>
      {/* Desplegable menu */}
      <motion.ul
        initial="hidden"
        animate={menuVisible ? "visible" : "hidden"}
        variants={toggleMenuVariants}
        className="absolute -left-[184px] top-0 flex w-fit flex-col gap-2 border-2 border-black bg-white/70 p-4 pt-2 *:text-base"
      >
        {PROYECTS.map((element, index) => (
          <li key={`${index}-${element.title}`} onClick={toggleHamburgerMenu}>
            <RetainQueryLink href={element.path}>
              <p className="hover:underline">{element.title}</p>
            </RetainQueryLink>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProyectsButtonMobile;
