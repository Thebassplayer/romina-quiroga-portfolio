"use client";
import cx from "@/app/utils/classesReducer";
import { useState, useRef, useEffect, Suspense } from "react";
import HamburgerButton from "../HamburgerButton/HamburguerButton";
import AboutMeButton from "../AboutMeButton/AboutMeButton";
import ContactButton from "../ContactButton/ContactButton";
import HomeButton from "../HomeButton/HomeButton";
import LanguajeButton from "../LanguajeButton/LanguajeButton";
import ProyectsButtonMobile from "../ProyectsButton/ProyectsButtonMobile";

const MOBILE_MENU = [
  {
    component: (
      <Suspense>
        <HomeButton />
      </Suspense>
    ),
    id: "home",
  },
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

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {isOpen && (
        <ul
          ref={menuRef}
          className={cx(
            "absolute right-0 top-10 z-50 mt-2 flex flex-col gap-2 border-2 border-black bg-white/70 p-4 font-SansationLg text-black shadow-lg lg:*:text-xl",
          )}
        >
          {MOBILE_MENU.map((element, index) => (
            <li key={`${index}-${element.id}`} onClick={() => setIsOpen(false)}>
              {element.component}
            </li>
          ))}
          <li className="relative">
            <Suspense>
              <ProyectsButtonMobile
                toggleHamburgerMenu={() => setIsOpen(false)}
              />
            </Suspense>
          </li>
          <li>
            <Suspense>
              <LanguajeButton />
            </Suspense>
          </li>
        </ul>
      )}

      <HamburgerButton buttonRef={buttonRef} toggleNavMenu={toggleNavMenu} />
    </div>
  );
};

export default HamburgerMenu;
