import React from "react";

type ProyectContainerProps = {
  children: React.ReactNode;
};

const ProyectContainer = ({ children }: ProyectContainerProps) => {
  return <div className="flex w-full justify-center">{children}</div>;
};

export default ProyectContainer;
