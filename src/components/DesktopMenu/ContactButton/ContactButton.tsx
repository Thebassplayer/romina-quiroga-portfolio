import React from "react";
import EmailIcon from "../../Icons/EmailIcon";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CONTACT_BUTTON_DATA = {
  title: {
    spa: "Contacto",
    eng: "Contact",
  },
  icon: <EmailIcon />,
  path: "/contact",
};

const ContactButton = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng
    ? CONTACT_BUTTON_DATA.title.eng
    : CONTACT_BUTTON_DATA.title.spa;
  const path = CONTACT_BUTTON_DATA.path;
  const icon = CONTACT_BUTTON_DATA.icon;

  return (
    <Link href={path} className="flex">
      {icon}
      <p className="ml-2 border-l-2 border-black pl-2">{text}</p>
    </Link>
  );
};

export default ContactButton;
