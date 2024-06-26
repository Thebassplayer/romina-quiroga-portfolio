"use client";
import { ContactForm } from "@/schemas/contactForm.schema";
import { useState } from "react";

if (!process.env.NEXT_PUBLIC_CONTACT_API) {
  throw new Error("NEXT_PUBLIC_CONTACT_API is not defined");
}

const contactApi = process.env.NEXT_PUBLIC_CONTACT_API;

const useContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

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

  const subscribeButtonValue = ({
    loading,
    success,
    error,
  }: {
    loading: boolean;
    success: boolean;
    error: boolean;
  }) => {
    if (loading) {
      return "Enviando...";
    } else if (success) {
      return "Enviado!";
    } else if (error) {
      return "Error al enviar, intenta de nuevo";
    } else {
      return "Enviar";
    }
  };

  return { subscribe, loading, error, success, subscribeButtonValue };
};

export default useContact;
