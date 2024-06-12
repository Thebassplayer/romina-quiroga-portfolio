"use client";
import React from "react";
import ChangingWord from "../ChangingWord/ChangingWord";
import useLanguaje from "@/hooks/useLanguaje";

const HeroHome = () => {
  const { eng } = useLanguaje();

  if (!eng) {
    return (
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
        <p>form of</p>
        <p>&nbsp;</p>
        <ChangingWord />
      </div>
    </div>
  );
};

export default HeroHome;
