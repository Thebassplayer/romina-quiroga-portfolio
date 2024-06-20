import React from "react";

type ProyectContainerProps = {
  children: React.ReactNode;
};

const ProyectContainer = ({ children }: ProyectContainerProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      {children}
    </div>
  );
};

export default ProyectContainer;
