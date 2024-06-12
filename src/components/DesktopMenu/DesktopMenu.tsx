"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Fingerprint from "../Icons/Fingerprint";
import EmailIcon from "../Icons/EmailIcon";
import AboutIcon from "../Icons/AboutIcon";
import LanguajeIcon from "../Icons/languajeIcon";
import Link from "next/link";
import cx from "@/app/utils/classesReducer";
import path from "path";

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

const PROYECTS = [
  { title: "Mercado Home", path: "/proyects/mercado-home" },
  { title: "Paella", path: "/proyects/paella" },
  { title: "App Home", path: "/proyects/app-home" },
  { title: "Madre Dachshund", path: "/proyects/madre-dachshund" },
];

type DesktopMenuProps = {
  className?: string;
};

const toogleMenu = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const DesktopMenu = ({ className }: DesktopMenuProps) => {
  return (
    <nav className={cx("w-screen", className)}>
      <ul className="flex w-full flex-row justify-evenly px-80 py-16 font-SansationLg *:text-3xl">
        <li className="relative">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="flex flex-col items-center"
          >
            <div className="flex cursor-pointer">
              <Fingerprint />
              <p className="ml-2 border-l-2 border-black pl-2">Proyectos</p>
            </div>
            {/* Desplegable menu */}
            <motion.ul
              variants={toogleMenu}
              className="flex w-fit flex-col gap-2 pt-2 *:text-base"
            >
              {PROYECTS.map((element, index) => (
                <li key={`${index}-${element.title}`}>
                  <Link href={element.path}>
                    <p className="hover:underline">{element.title}</p>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </li>
        {DESKTOP_MENU.map((element, index) => (
          <li key={`${index}-${element.path}`}>
            <Link href={element.path} className="flex">
              {element.icon}
              <p className="ml-2 border-l-2 border-black pl-2">
                {element.title.spa}
              </p>
            </Link>
          </li>
        ))}
        <li>
          <Link href={"?eng=true"} className="flex text-2xl">
            <LanguajeIcon />
            <p className="ml-2 h-min border-l-2 border-black pl-2">Ingles</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
