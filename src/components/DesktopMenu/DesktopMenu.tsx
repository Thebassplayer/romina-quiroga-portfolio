"use client";
import React from "react";
import Fingerprint from "../Icons/Fingerprint";
import EmailIcon from "../Icons/EmailIcon";
import AboutIcon from "../Icons/AboutIcon";
import LanguajeIcon from "../Icons/languajeIcon";
import Link from "next/link";
import cx from "@/app/utils/classesReducer";

type DesktopMenuElement = {
  title: {
    spa: string;
    eng?: string;
  };
  icon: any;
  path: string;
};

const DESKTOP_MENU: DesktopMenuElement[] = [
  {
    title: {
      spa: "Proyectos",
    },
    icon: <Fingerprint />,
    path: "/proyects",
  },
  {
    title: {
      spa: "Sobre Mi",
    },
    icon: <AboutIcon />,
    path: "/about",
  },
  {
    title: {
      spa: "Contacto",
    },
    icon: <EmailIcon />,
    path: "/contact",
  },
];

type DesktopMenuProps = {
  className?: string;
};

const DesktopMenu = ({ className }: DesktopMenuProps) => {
  return (
    <nav className={cx("w-screen", className)}>
      <ul className="flex w-full flex-row justify-evenly px-80 py-16 font-SansationLg">
        {DESKTOP_MENU.map((element, index) => (
          <li key={`${index}-${element.path}`}>
            <Link href={element.path} className="flex text-3xl">
              {element.icon}
              <p className="ml-2 border-l-2 border-black pl-2">
                {element.title.spa}
              </p>
            </Link>
          </li>
        ))}
        <li className="flex text-2xl">
          <LanguajeIcon />
          <p className="ml-2 border-l-2 border-black pl-2">Ingles</p>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
