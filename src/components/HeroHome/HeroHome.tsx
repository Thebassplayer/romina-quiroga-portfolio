"use client";
import React, { Suspense } from "react";
import ChangingWord from "../ChangingWord/ChangingWord";
import { useSearchParams } from "next/navigation";

const HeroHome = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;

  if (!eng) {
    return (
      <Suspense>
        <div className="flex flex-col justify-center *:font-roboto *:text-8xl lg:w-[750px]">
          <div className="flex justify-start">
            <p>El</p>
            <p>&nbsp;</p>
            <p className="font-extralight">diseño</p>
            <p>&nbsp;</p>
            <p className="font-roboto">es una</p>
          </div>
          <div className="flex justify-start">
            <p>forma de</p>
            <p>&nbsp;</p>
            <ChangingWord />
          </div>
        </div>
      </Suspense>
    );
  }
  return (
    <Suspense>
      <div className="flex flex-col justify-center *:font-roboto *:text-8xl lg:w-[750px]">
        <div className="flex justify-start">
          <p>Design</p>
          <p>&nbsp;</p>
          <p className="font-extralight">is a</p>
        </div>
        <div className="flex justify-start">
          <p>form of</p>
          <p>&nbsp;</p>
          <ChangingWord />
        </div>
      </div>
    </Suspense>
  );
};

export default HeroHome;
