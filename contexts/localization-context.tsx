"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LocalizationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined)

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const isRTL = language === "ar"

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, isRTL }}>
      <div className={isRTL ? "rtl" : "ltr"} dir={isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </LocalizationContext.Provider>
  )
}

export function useLocalization() {
  const context = useContext(LocalizationContext)
  if (context === undefined) {
    throw new Error("useLocalization must be used within a LocalizationProvider")
  }
  return context
}
