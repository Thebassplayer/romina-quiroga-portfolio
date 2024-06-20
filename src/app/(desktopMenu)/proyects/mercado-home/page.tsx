import React from "react";
import ProyectHeader from "../components/ProyectHeader";
import ProyectContainer from "../components/ProyectContainer";
import Image from "next/image";
import mercadohome_img from "../../../../../public/assets/mercadohome_proyect.jpg";

const MercadoHome = () => {
  return (
    <ProyectContainer>
      <ProyectHeader
        title="MERCADO HOME"
        subtitle="Web responsive"
        role="Investigación y diseño"
        date="noviembre/2023"
      />
      <Image src={mercadohome_img} alt="MadreDachshund Image" />
    </ProyectContainer>
  );
};

export default MercadoHome;
