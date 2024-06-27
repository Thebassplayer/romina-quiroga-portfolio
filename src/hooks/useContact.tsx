"use client";
import { ContactForm } from "@/schemas/contactForm.schema";
import { useState } from "react";
import useLanguage from "./useLang";

if (!process.env.NEXT_PUBLIC_CONTACT_API) {
  throw new Error("NEXT_PUBLIC_CONTACT_API is not defined");
}

const contactApi = process.env.NEXT_PUBLIC_CONTACT_API;

const SEND_BUTTON_TEXTS = {
  esp: {
    sending: "Enviando...",
    sent: "Enviado!",
    error: "Error al enviar, intenta de nuevo",
    default: "Enviar",
  },
  eng: {
    sending: "Sending...",
    sent: "Sent!",
    error: "Error sending, try again",
    default: "Send",
  },
};

const useContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const lang = useLanguage();
  const text = SEND_BUTTON_TEXTS[lang];

  const subscribe = async (data: ContactForm) => {
    try {
      setLoading(true);
      const response = await fetch(contactApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setError(true);
    }
  };

  const contactButtonValueGenerator = ({
    loading,
    success,
    error,
  }: {
    loading: boolean;
    success: boolean;
    error: boolean;
  }) => {
    if (loading) {
      return text.sending;
    } else if (success) {
      return text.sent;
    } else if (error) {
      return text.error;
    } else {
      return text.default;
    }
  };

  const contactButtonValue = contactButtonValueGenerator({
    loading,
    success,
    error,
  });

  return { subscribe, loading, error, success, contactButtonValue };
};

export default useContact;
