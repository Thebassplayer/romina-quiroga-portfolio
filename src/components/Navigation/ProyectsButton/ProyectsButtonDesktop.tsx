"use client";
import Fingerprint from "@/components/Icons/Fingerprint";
import RetainQueryLink from "@/components/RetainQueryLink/RetainQueryLink";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

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

const ProyectsButtonDesktop = () => {
  const { title, icon } = PROYECTS_BUTTON_DATA;
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng ? title.eng : title.spa;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative flex flex-col items-center"
    >
      <div className="flex cursor-pointer">
        {icon}
        <p className="ml-2 border-l-2 border-black pl-2">{text}</p>
      </div>
      {/* Desplegable menu */}
      <motion.ul
        variants={toogleMenu}
        className="absolute top-10  flex w-fit flex-col gap-2 pt-2 *:text-base"
      >
        {PROYECTS.map((element, index) => (
          <li key={`${index}-${element.title}`}>
            <RetainQueryLink href={element.path}>
              <p className="hover:underline">{element.title}</p>
            </RetainQueryLink>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProyectsButtonDesktop;
