"use client";
import { Suspense } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="flex h-full w-full items-start justify-center pt-20">
      <Suspense>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default Contact;
