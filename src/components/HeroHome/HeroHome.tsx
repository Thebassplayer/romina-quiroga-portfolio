"use client";
import React, { Suspense } from "react";
import ChangingWord from "../ChangingWord/ChangingWord";
import useLanguage from "@/hooks/useLang";

const HeroHome = () => {
  const lang = useLanguage();

  if (lang !== "eng") {
    return (
      <div className="flex w-full flex-col justify-center text-3xl *:font-roboto lg:w-[750px] lg:text-8xl">
        <div className="hidden justify-start lg:flex lg:flex-col">
          <div className="flex">
            <p>El</p>
            <p>&nbsp;</p>
            <p className="font-extralight">diseño</p>
            <p>&nbsp;</p>
            <p className="font-roboto">es una</p>
          </div>
          <div className="flex justify-start">
            <p>forma de</p>
            <p>&nbsp;</p>
            <Suspense>
              <ChangingWord />
            </Suspense>
          </div>
        </div>
        <div className="flex flex-col justify-start text-7xl lg:hidden">
          <div className="flex">
            <p>El</p>
            <p>&nbsp;</p>
            <p className="font-extralight">diseño</p>
          </div>
          <p className="font-roboto">es una</p>
          <p>forma de</p>
          <div className="flex">
            <Suspense>
              <ChangingWord />
            </Suspense>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center *:font-roboto *:text-8xl lg:w-[750px]">
      <div className="flex justify-start">
        <p>Design</p>
        <p>&nbsp;</p>
        <p className="font-extralight">is a</p>
      </div>
      <div className="flex justify-start">
        <p>way of</p>
        <p>&nbsp;</p>
        <ChangingWord />
      </div>
    </div>
  );
};

export default HeroHome;
