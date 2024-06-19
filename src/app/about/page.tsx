"use client";
import { Suspense } from "react";
import AboutHero from "./components/Hero/Hero";

const About = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Suspense>
        <AboutHero />
      </Suspense>
    </div>
  );
};

export default About;
