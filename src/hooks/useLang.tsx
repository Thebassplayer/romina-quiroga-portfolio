import { useSearchParams } from "next/navigation";

type Lang = "esp" | "eng";

const useLanguage = (): Lang => {
  const searchParams = useSearchParams();
  const lang: Lang = searchParams.get("eng") === "true" ? "eng" : "esp";
  return lang;
};

export default useLanguage;
