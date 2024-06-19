"use client";
import { Suspense } from "react";
import AboutHero from "./components/Hero/Hero";

const About = () => {
  return (
    <div className="flex w-full grow items-center justify-center">
      <Suspense>
        <AboutHero />
      </Suspense>
    </div>
  );
};

export default About;
