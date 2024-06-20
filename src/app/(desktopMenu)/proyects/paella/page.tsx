import Image from "next/image";
import ProyectContainer from "../components/ProyectContainer";
import ProyectHeader from "../components/ProyectHeader";
import paella_img from "../../../../../public/assets/paella_proyect.jpg";

const Paella = () => {
  return (
    <ProyectContainer>
      <ProyectHeader
        title="PAELLA"
        subtitle="Landing Page Responsive"
        role="Investigación y diseño"
        date="agosto/2023"
      />
      <Image src={paella_img} alt="MadreDachshund Image" />
    </ProyectContainer>
  );
};

export default Paella;
