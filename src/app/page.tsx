import HeroHome from "@/components/HeroHome/HeroHome";
import { Suspense } from "react";
import Proyects from "./(desktopMenu)/proyects/page";
import ProyectsCarrousell from "@/components/ProyectsCarrousell/ProyectsCarrousell";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
export default function Home() {
  return (
    <>
      <section className="h-screen w-screen overflow-y-scroll">
        <div className="flex h-full w-full  flex-col items-center">
          <DesktopMenu className="z-50" />
          <div className="flex grow justify-center">
            <Suspense>
              <HeroHome />
            </Suspense>
          </div>
        </div>
        <ProyectsCarrousell />
      </section>
    </>
  );
}
