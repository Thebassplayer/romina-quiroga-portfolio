import React from "react";
import ProyectHeader from "../components/ProyectHeader";
import ProyectContainer from "../components/ProyectContainer";

const AppHome = () => {
  return (
    <ProyectContainer>
      <ProyectHeader
        title="App Home"
        subtitle="App"
        role="Investigación y diseño"
        date="mayo/2022"
      />
    </ProyectContainer>
  );
};

export default AppHome;
