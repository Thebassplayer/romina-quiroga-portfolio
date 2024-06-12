import HeroHome from "@/components/HeroHome/HeroHome";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <section className="flex h-screen w-screen items-center justify-center">
        <Suspense>
          <HeroHome />
        </Suspense>
      </section>
    </>
  );
}
