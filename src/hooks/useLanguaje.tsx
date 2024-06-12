"use client";
import { useSearchParams } from "next/navigation";

const useLanguaje = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  return { eng };
};

export default useLanguaje;
