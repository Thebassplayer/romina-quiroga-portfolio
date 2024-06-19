import React, { SVGProps } from "react";

const AboutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.375 9.60939C9.375 9.60939 9.45937 7.6758 11.3402 6.12541C12.457 5.2049 13.7982 4.9383 15 4.92189C16.0975 4.90841 17.0783 5.09416 17.6648 5.38009C18.6674 5.87111 20.625 7.06642 20.625 9.60939C20.625 12.2854 18.9152 13.4983 16.9717 14.8348C15.0281 16.1713 14.5312 17.482 14.5312 18.9844"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.5312 25.3119C15.5668 25.3119 16.4062 24.4724 16.4062 23.4369C16.4062 22.4014 15.5668 21.5619 14.5312 21.5619C13.4957 21.5619 12.6562 22.4014 12.6562 23.4369C12.6562 24.4724 13.4957 25.3119 14.5312 25.3119Z"
        fill="black"
      />
    </svg>
  );
};

export default AboutIcon;
