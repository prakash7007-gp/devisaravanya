"use client";

import { createContext, useContext, useState } from "react";
import en from "@/translations/en.json";
import ta from "@/translations/ta.json";

type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ta");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  const translations = language === "en" ? en : ta;

  const t = (key: string) => {
    return key.split(".").reduce((obj: any, k: string) => obj?.[k], translations) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
