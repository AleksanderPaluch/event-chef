import { createContext, useContext, useState } from "react";
import { type Lang } from "./FormTranslations";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: "pl",
  setLang: () => {},
});

const getSavedLang = (): Lang => {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "pl") return saved;
  return "pl";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getSavedLang);

  const setLang = (newLang: Lang) => {
    localStorage.setItem("lang", newLang);
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);