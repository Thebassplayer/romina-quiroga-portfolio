import React from "react";
import ProyectHeader from "../components/ProyectHeader";
import ProyectContainer from "../components/ProyectContainer";
import Image from "next/image";
import madredachshund_img from "../../../../../public/assets/maderdachshund_proyect.jpg";

const MadreDachShund = () => {
  return (
    <ProyectContainer>
      <ProyectHeader
        title="MADRE DACHSHUND"
        subtitle="Web responsive"
        role="Investigación y diseño"
        date="julio/2020"
      />
      <Image src={madredachshund_img} alt="MadreDachshund Image" />
    </ProyectContainer>
  );
};

export default MadreDachShund;
