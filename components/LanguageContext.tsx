"use client";

import React, { createContext, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language, TranslationDict, translations } from "@/utils/translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Detect active language from URL pathname
  const language: Language = (pathname === "/hi" || pathname.startsWith("/hi/")) ? "hi" : "en";

  useEffect(() => {
    // If the user lands on an English route but previously chose Hindi, redirect them to the /hi equivalent
    try {
      const storedLang = localStorage.getItem("paisamilega_lang") as Language;
      if (storedLang === "hi" && language === "en") {
        const newPath = pathname === "/" ? "/hi" : `/hi${pathname}`;
        router.push(newPath);
      }
    } catch (e) {
      console.warn("localStorage is not accessible in this mobile environment:", e);
    }
  }, [language, pathname, router]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    let newPath = pathname;
    if (lang === "hi") {
      newPath = pathname === "/" ? "/hi" : `/hi${pathname}`;
    } else {
      if (pathname === "/hi") {
        newPath = "/";
      } else if (pathname.startsWith("/hi/")) {
        newPath = pathname.replace(/^\/hi/, "");
      }
    }

    try {
      localStorage.setItem("paisamilega_lang", lang);
    } catch (e) {
      console.warn("Failed to set localStorage in this mobile environment:", e);
    }

    router.push(newPath);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
