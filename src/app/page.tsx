import HeroHome from "@/components/HeroHome/HeroHome";
import { Suspense } from "react";
import Proyects from "./proyects/page";
import ProyectsCarrousell from "@/components/ProyectsCarrousell/ProyectsCarrousell";
export default function Home() {
  return (
    <>
      <section className="h-screen w-screen overflow-y-scroll">
        <div className="flex h-full w-full  items-center justify-center">
          <Suspense>
            <HeroHome />
          </Suspense>
        </div>
        <ProyectsCarrousell />
      </section>
    </>
  );
}
