import contactFormSchema from "@/schemas/contactForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const subscriptionApi = process.env.NEXT_PUBLIC_CONTACT_API;

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ nombre: "", email: "", message: "" }}
      validationSchema={toFormikValidationSchema(contactFormSchema)}
      onSubmit={async (values) => {
        await fetch(subscriptionApi || "", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="animate-in text-foreground flex w-1/2 flex-col justify-center gap-2 p-4 *:font-roboto">
          <div className="mb-6 flex w-full flex-col">
            <label className="text-md text-white" htmlFor="nombre">
              Nombre
            </label>
            <Field
              className="rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="nombre"
              placeholder="Tu nombre"
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
              Email
            </label>
            <Field
              className="rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="email"
              maxLength={100}
              placeholder="your@mail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-black"
            />
          </div>

          <div className="mb-6 flex w-full flex-col">
            <label className="text-md text-white" htmlFor="message">
              Deja tu mensaje
            </label>
            <Field
              as="textarea"
              className="max-h-48 resize-y rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              name="message"
              placeholder="Tu mensaje"
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
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
