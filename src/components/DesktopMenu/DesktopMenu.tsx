"use client";

import cx from "@/app/utils/classesReducer";
import LanguajeButton from "./LanguajeButton/LanguajeButton";
import AboutMeButton from "./AboutMeButton/AboutMeButton";
import ContactButton from "./ContactButton/ContactButton";
import ProyectsButton from "./ProyectsButton/ProyectsButton";
import { Suspense } from "react";

const DESKTOP_MENU = [
  {
    component: (
      <Suspense>
        <AboutMeButton />
      </Suspense>
    ),
    id: "about",
  },
  {
    component: (
      <Suspense>
        <ContactButton />
      </Suspense>
    ),
    id: "contact",
  },
];

type DesktopMenuProps = {
  className?: string;
};

const DesktopMenu = ({ className }: DesktopMenuProps) => {
  return (
    <nav className={cx("w-screen", className)}>
      <ul className="flex w-full flex-row justify-evenly px-80 pt-16 font-SansationLg *:text-3xl">
        <li className="relative">
          <Suspense>
            <ProyectsButton />
          </Suspense>
        </li>
        {DESKTOP_MENU.map((element, index) => (
          <li key={`${index}-${element.id}`}>{element.component}</li>
        ))}
        <li>
          <Suspense>
            <LanguajeButton />
          </Suspense>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
