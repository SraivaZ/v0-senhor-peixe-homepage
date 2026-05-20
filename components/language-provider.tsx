"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language =
  | "pt"
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "ru"
  | "zh"
  | "ar"
  | "hi"

export const languages: { code: Language; label: string; short: string }[] = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "zh", label: "中文", short: "中文" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "hi", label: "हिन्दी", short: "HI" },
]

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function isLanguage(value: string | null): value is Language {
  return languages.some((item) => item.code === value)
}

function applyDocumentLanguage(language: Language) {
  document.documentElement.lang = language
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("senhor-peixe-language")

    if (isLanguage(savedLanguage)) {
      setLanguageState(savedLanguage)
      applyDocumentLanguage(savedLanguage)
    } else {
      applyDocumentLanguage("pt")
    }
  }, [])

  function setLanguage(newLanguage: Language) {
    setLanguageState(newLanguage)
    localStorage.setItem("senhor-peixe-language", newLanguage)
    applyDocumentLanguage(newLanguage)
  }

  function toggleLanguage() {
    const currentIndex = languages.findIndex((item) => item.code === language)
    const nextLanguage = languages[(currentIndex + 1) % languages.length]?.code ?? "pt"

    setLanguage(nextLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}