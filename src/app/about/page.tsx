const About = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-2 divide-x-2 divide-solid divide-black">
        <div className="flex h-full w-[410px] items-center justify-center justify-self-end pr-32">
          <p className="font-roboto text-5xl font-extralight">
            Soy Romi, Diseñadora UX UI de Buenos Aires para el mundo
          </p>
        </div>
        <div className="flex w-[670px] flex-col gap-4 pl-32">
          <p>
            Soy Romina Quiroga, una diseñadora de UX/UI con más de tres años de
            experiencia en el diseño de productos digitales para diversos
            dispositivos. Me apasiona crear soluciones claras y sencillas para
            problemas complejos, utilizando herramientas como Figma, Adobe XD,
            Sketch, y Bootstrap entre otras. Mi enfoque se basa en mejorar las
            interacciones digitales a través de la simplicidad y la
            funcionalidad intuitiva.
          </p>
          <p>
            Actualmente trabajo como diseñadora de UX/UI en 3R Developments, una
            empresa dedicada al desarrollo de software a medida para clientes de
            diferentes sectores. Colaboro con el equipo de desarrollo en la
            integración de gráficos y mejoras basadas en el análisis de
            usuarios. Mi objetivo es crear diseños minimalistas y centrados en
            el usuario, manteniendo un diseño limpio y funcional.
          </p>
          <p>
            También como artista visual, me expreso a través de la pintura, el
            dibujo y la fotografía, siempre he sido una alma creativa. Desde que
            era pequeña, me he dedicado a las artes plásticas, compartiendo mis
            obras en diferentes plataformas y vendiendo mis propias pinturas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
