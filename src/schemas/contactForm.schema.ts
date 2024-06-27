import { z } from "zod";

const contactFormMessages = {
  esp: {
    nameRequired: "Ingresa tu nombre",
    nameMax: "El nombre no puede tener más de 50 caracteres",
    emailRequired: "Ingresa tu email",
    emailInvalid: "Ingresa un email válido",
    emailMax: "El email no puede tener más de 100 caracteres",
    messageRequired: "Ingresa tu mensaje",
    messageMax: "El mensaje no puede tener más de 500 caracteres",
  },
  eng: {
    nameRequired: "Enter your name",
    nameMax: "Name cannot be more than 50 characters",
    emailRequired: "Enter your email",
    emailInvalid: "Enter a valid email",
    emailMax: "Email cannot be more than 100 characters",
    messageRequired: "Enter your message",
    messageMax: "Message cannot be more than 500 characters",
  },
};

export type Lang = "esp" | "eng";

export const getContactFormSchema = (lang: Lang) => {
  const messages = contactFormMessages[lang];

  return z.object({
    name: z
      .string({
        required_error: messages.nameRequired,
      })
      .max(50, messages.nameMax),
    email: z
      .string({
        required_error: messages.emailRequired,
      })
      .email(messages.emailInvalid)
      .max(100, messages.emailMax),
    message: z
      .string({
        required_error: messages.messageRequired,
      })
      .max(500, messages.messageMax),
  });
};

export const contactFormSchema = getContactFormSchema("eng");

export type ContactForm = z.infer<ReturnType<typeof getContactFormSchema>>;
