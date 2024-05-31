import path from "path";
import React from "react";

const DESKTOP_MENU = [
  {
    title: {
      spa: "Proyectos",
    },
    path: "/proyects",
  },
  {
    title: {
      spa: "Sobre Mi",
    },
    path: "/about",
  },
  {
    title: {
      spa: "Contacto",
    },
    path: "/contact",
  },
  {
    title: {
      spa: "Ingles",
    },
  },
];

const DesktopMenu = () => {
  return (
    <nav className="absolute top-0 w-screen">
      <ul className="flex w-full flex-row justify-evenly px-80 py-16 font-SansationLg">
        <li className="text-2xl">Proyectos</li>
        <li className="text-2xl">Sobre Mi</li>
        <li className="text-2xl">Email</li>
        <li className="text-2xl">Ingles</li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
