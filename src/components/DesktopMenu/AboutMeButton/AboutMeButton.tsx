import { useSearchParams } from "next/navigation";
import AboutIcon from "../../Icons/AboutIcon";
import Link from "next/link";

const ABOUT_ME_BUTTON_DATA = {
  title: {
    spa: "Sobre Mi",
    eng: "About Me",
  },
  icon: <AboutIcon />,
  path: "/about",
};

const AboutMeButton = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng
    ? ABOUT_ME_BUTTON_DATA.title.eng
    : ABOUT_ME_BUTTON_DATA.title.spa;

  const path = ABOUT_ME_BUTTON_DATA.path;
  const icon = ABOUT_ME_BUTTON_DATA.icon;

  return (
    <Link href={path} className="flex">
      {icon}
      <p className="ml-2 border-l-2 border-black pl-2">{text}</p>
    </Link>
  );
};

export default AboutMeButton;
