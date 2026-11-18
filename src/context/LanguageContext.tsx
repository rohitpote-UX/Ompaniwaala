"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationSchema } from "@/translations";

export type Language = "en" | "mr" | "hi";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  cycleLang: () => void;
  toggleLang: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ranjeet_language_preference";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage or browser language on mount
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "mr" || savedLang === "hi") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.setAttribute("data-lang", savedLang);
      } else {
        document.documentElement.lang = "en";
        document.documentElement.setAttribute("data-lang", "en");
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.setAttribute("data-lang", newLang);
    }
  };

  const cycleLang = () => {
    if (lang === "en") setLang("mr");
    else if (lang === "mr") setLang("hi");
    else setLang("en");
  };

  const toggleLang = cycleLang;

  const currentTranslations = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        cycleLang,
        toggleLang,
        t: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
