"use client";
import useContact from "@/hooks/useContact";
import { contactFormSchema } from "@/schemas/contactForm.schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter, useSearchParams } from "next/navigation";

const CONTACT_FORM_TEXTS = {
  esp: {
    nameInput: "Nombre",
    namePlaceholder: "Tu nombre",
    emailInput: "Email",
    emailPlaceholder: "tu@mail.com",
    messageInput: "Mensaje",
    messagePlaceholder: "Tu mensaje",
  },
  eng: {
    nameInput: "Name",
    namePlaceholder: "Your name",
    emailInput: "Email",
    emailPlaceholder: "your@email.com",
    messageInput: "Message",
    messagePlaceholder: "Your message",
  },
};

const ContactForm = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const text = eng ? CONTACT_FORM_TEXTS.eng : CONTACT_FORM_TEXTS.esp;
  const { subscribe, loading, success, error, contactButtonValue } =
    useContact();

  const router = useRouter();

  useEffect(() => {
    if (success) {
      router.push("/");
    }
  }, [loading, success, error, router]);
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={toFormikValidationSchema(contactFormSchema)}
      onSubmit={(values) => subscribe(values)}
    >
      {({ isSubmitting }) => (
        <Form className="animate-in text-foreground flex w-1/2 flex-col justify-center gap-2 p-4 *:font-roboto">
          <div className="mb-6 flex w-full flex-col">
            <label className="text-md text-white" htmlFor="name">
              {text.nameInput}
            </label>
            <Field
              className="rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="name"
              placeholder={text.namePlaceholder}
              maxLength={50}
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="text-sm text-black"
            />
          </div>

          <div className="mb-6 flex w-full flex-col">
            <label className="text-md text-white" htmlFor="email">
              {text.emailInput}
            </label>
            <Field
              className="rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="email"
              maxLength={100}
              placeholder={text.emailPlaceholder}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-black"
            />
          </div>

          <div className="mb-6 flex w-full flex-col">
            <label className="text-md text-white" htmlFor="message">
              {text.messageInput}
            </label>
            <Field
              as="textarea"
              className="max-h-48 resize-y rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="message"
              placeholder={text.messagePlaceholder}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-sm text-black"
            />
          </div>

          <button
            className="mt-10 rounded-md border px-4 py-2 text-white hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {contactButtonValue}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
