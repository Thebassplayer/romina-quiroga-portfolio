import { z } from "zod";

const contactFormSchema = z.object({
  nombre: z
    .string({
      message: "Ingresa tu nombre",
    })
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  email: z
    .string({
      message: "Ingresa tu email",
    })
    .email("Ingresa un email válido")
    .max(100, "El email no puede tener más de 100 caracteres"),
  message: z
    .string({
      message: "Ingresa tu mensaje",
    })
    .max(500, "El mensaje no puede tener más de 500 caracteres"),
});

export default contactFormSchema;
//
