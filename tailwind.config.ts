import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SansationLg: ["Sansation-Light", "sans-serif"],
        roboto: ["var(--font-rb)"],
      },
      colors: {
        primary: "#E3FF00",
        secondary: "#0142FE",
        primarylight: "rgba(227, 255, 0, 0.22)",
        secondarylight: "rgba(1, 66, 254, 0.44)",
      },
      backgroundImage: {
        "romi-gradient": "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
};
export default config;
