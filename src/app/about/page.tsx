"use client";

import { useSearchParams } from "next/navigation";

const ABOUT_TEXT = {
  esp: {
    leftHero: "Soy Romi, Diseñadora UX UI de Buenos Aires para el mundo",
    rightHero: [
      "Soy Romina Quiroga, una diseñadora de UX/UI con más de tres años de experiencia en el diseño de productos digitales para diversos dispositivos. Me apasiona crear soluciones claras y sencillas para problemas complejos, utilizando herramientas como Figma, Adobe XD, Sketch, y Bootstrap entre otras. Mi enfoque se basa en mejorar las interacciones digitales a través de la simplicidad y la funcionalidad intuitiva.",
      "Actualmente trabajo como diseñadora de UX/UI en 3R Developments, una empresa dedicada al desarrollo de software a medida para clientes de diferentes sectores. Colaboro con el equipo de desarrollo en la integración de gráficos y mejoras basadas en el análisis de usuarios. Mi objetivo es crear diseños minimalistas y centrados en el usuario, manteniendo un diseño limpio y funcional.",
      "También como artista visual, me expreso a través de la pintura, el dibujo y la fotografía, siempre he sido una alma creativa. Desde que era pequeña, me he dedicado a las artes plásticas, compartiendo mis obras en diferentes plataformas y vendiendo mis propias pinturas.",
    ],
  },
  eng: {
    leftHero: "I am Romi, UX UI Designer from Buenos Aires to the world",
    rightHero: [
      "I am Romina Quiroga, a UX/UI designer with more than three years of experience in designing digital products for various devices. I am passionate about creating clear and simple solutions for complex problems, using tools such as Figma, Adobe XD, Sketch, and Bootstrap among others. My focus is on improving digital interactions through simplicity and intuitive functionality.",
      "I currently work as a UX/UI designer at 3R Developments, a company dedicated to developing custom software for clients in different sectors. I collaborate with the development team in the integration of graphics and improvements based on user analysis. My goal is to create minimalist and user-centered designs, maintaining a clean and functional design.",
      "Also as a visual artist, I express myself through painting, drawing, and photography, I have always been a creative soul. Since I was a child, I have been dedicated to the plastic arts, sharing my works on different platforms and selling my own paintings.",
    ],
  },
};

const About = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng ? ABOUT_TEXT.eng : ABOUT_TEXT.esp;
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-2 divide-x-2 divide-solid divide-black">
        <div className="flex h-full w-[410px] items-center justify-center justify-self-end pr-32">
          <p className="font-roboto text-5xl font-extralight">
            {text.leftHero}
          </p>
        </div>
        <div className="flex w-[670px] flex-col gap-4 pl-32">
          {text.rightHero.map((paragraph, index) => (
            <p key={index} className="font-roboto text-xl font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
