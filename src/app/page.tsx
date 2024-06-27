"use client";

import { useRef } from "react";
import HeroHome from "@/components/HeroHome/HeroHome";
import { Suspense } from "react";
import ProyectsCarrousell from "@/components/ProyectsCarrousell/ProyectsCarrousell";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import GoTopButton from "@/components/GoTopButton/GoTopButton";
export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <section ref={topRef} className="h-screen w-screen overflow-x-hidden">
        <div className="flex h-full w-full flex-col items-center">
          <DesktopMenu className="z-50" />
          <div className="flex grow justify-center">
            <Suspense>
              <HeroHome />
            </Suspense>
          </div>
        </div>
        <ProyectsCarrousell />
      </section>

      <GoTopButton />
    </>
  );
}
