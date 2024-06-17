"use client";
import RetainQueryLink from "@/components/RetainQueryLink/RetainQueryLink";
import EmailIcon from "../../Icons/EmailIcon";
import { useSearchParams } from "next/navigation";

const CONTACT_BUTTON_DATA = {
  title: {
    spa: "Contacto",
    eng: "Contact",
  },
  icon: <EmailIcon />,
  path: "/contact",
};

const ContactButton = () => {
  const { title, icon, path } = CONTACT_BUTTON_DATA;
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng ? title.eng : title.spa;

  return (
    <RetainQueryLink href={path} className="flex">
      {icon}
      <p className="ml-2 border-l-2 border-black pl-2">{text}</p>
    </RetainQueryLink>
  );
};

export default ContactButton;
