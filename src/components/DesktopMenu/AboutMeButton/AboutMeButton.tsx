import AboutIcon from "../../Icons/AboutIcon";
import Link from "next/link";
import useLanguaje from "@/hooks/useLanguaje";

const ABOUT_ME_BUTTON_DATA = {
  title: {
    spa: "Sobre Mi",
    eng: "About Me",
  },
  icon: <AboutIcon />,
  path: "/about",
};

const AboutMeButton = () => {
  const { title, icon, path } = ABOUT_ME_BUTTON_DATA;
  const { eng } = useLanguaje();
  const text = eng ? title.eng : title.spa;

  return (
    <Link href={path} className="flex">
      {icon}
      <p className="ml-2 border-l-2 border-black pl-2">{text}</p>
    </Link>
  );
};

export default AboutMeButton;
