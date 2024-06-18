import HeroHome from "@/components/HeroHome/HeroHome";
import Image from "next/image";
import { Suspense } from "react";
import app_home_background from "/public/assets/app_home_background.png";
import mercado_home_background from "/public/assets/mercado_home_background.png";
import paella_background from "/public/assets/paella_background.png";
import madre_dachshund_background from "/public/assets/madre_dachshund_background.png";

const PROYECTS = [
  {
    number: "1",
    title: "App Home",
    detail:
      "App Home es tu llave para transformar cualquier dispositivo en un hogar inteligente.",
    year: "2022",
    image: app_home_background,
  },
  {
    number: "2",
    title: "Mercado Home",
    detail:
      "Mercado Home es un motor de búsqueda de propiedades que compara precios de diferentes sitios web.",
    year: "2020",
    image: mercado_home_background,
  },
  {
    number: "3",
    title: "Paella",
    detail: "Paella es una Pagina web Responsive.",
    year: "2020",
    image: paella_background,
  },
  {
    number: "4",
    title: "Madre Dachshund",
    detail:
      "Madre Dachshund es una pagina web responsive creada para re dirigir el flujo de usuarios desde instagram.",
    year: "2023",
    image: madre_dachshund_background,
  },
];

export default function Home() {
  return (
    <>
      <section className="h-screen w-screen overflow-y-scroll">
        <div className="flex h-full w-full  items-center justify-center">
          <Suspense>
            <HeroHome />
          </Suspense>
        </div>
        {PROYECTS.map((proyect, index) => (
          <div
            className="grid h-full w-full grid-cols-6 items-center justify-center bg-white/30"
            key={proyect.number}
          >
            <div className="col-span-2 grid h-full grid-cols-6">
              <div className="col-span-3 col-start-3 flex h-1/3 flex-col gap-4 self-center *:font-roboto">
                <p className="text-7xl">{proyect.number}</p>
                <p className="text-4xl font-bold">{proyect.title}</p>
                <p className="text-2xl font-extralight">{proyect.detail}</p>
                <p className="text-xl">{proyect.year}</p>
              </div>
            </div>
            <div className="col-span-4 h-full py-10">
              <div className="relative h-full w-full">
                <Image
                  src={proyect.image}
                  alt="Picture of the author"
                  fill={true}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
