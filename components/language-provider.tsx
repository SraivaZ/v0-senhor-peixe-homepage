"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "pt" | "en"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("senhor-peixe-language")

    if (savedLanguage === "pt" || savedLanguage === "en") {
      setLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage
    }
  }, [])

  function toggleLanguage() {
    const newLanguage = language === "pt" ? "en" : "pt"

    setLanguage(newLanguage)
    localStorage.setItem("senhor-peixe-language", newLanguage)
    document.documentElement.lang = newLanguage
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
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