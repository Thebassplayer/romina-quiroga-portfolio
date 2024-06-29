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
      <section ref={topRef} className="h-screen w-screen">
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <DesktopMenu className="absolute top-0 z-50 hidden  lg:block" />
          <div className="flex justify-center">
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
