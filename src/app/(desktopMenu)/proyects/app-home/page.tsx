import React from "react";
import ProyectHeader from "../components/ProyectHeader";
import ProyectContainer from "../components/ProyectContainer";
import Image from "next/image";
import app_home_img from "../../../../../public/assets/apphome_proyect.jpg";

const AppHome = () => {
  return (
    <ProyectContainer>
      <ProyectHeader
        title="App Home"
        subtitle="App"
        role="Investigación y diseño"
        date="mayo/2022"
      />
      <Image src={app_home_img} alt="App Home Image" />
    </ProyectContainer>
  );
};

export default AppHome;
