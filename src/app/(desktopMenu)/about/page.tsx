"use client";
import { Suspense } from "react";
import AboutHero from "./components/Hero/Hero";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import BootstrapIcon from "@/components/Icons/BootstrapIcon";
import HTMLIcon from "@/components/Icons/HtmlIcon";

const About = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-evenly">
      <Suspense>
        <AboutHero />
      </Suspense>
      <div className="flex w-10/12 justify-center gap-10 py-12">
        <FigmaIcon className="size-16" />
        <BootstrapIcon className="size-16" />
        <HTMLIcon className="size-16" />
      </div>
    </div>
  );
};

export default About;
