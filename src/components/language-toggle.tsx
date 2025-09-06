"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"
import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import i18n from "@/lib/i18n"

const languages = [
  { code: "en", name: "US English", flag: "🇺🇸" },
  { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
]

const LanguageContext = createContext<{
  currentLanguage: string
  setLanguage: (lang: string) => void
}>({
  currentLanguage: "en",
  setLanguage: () => {},
})

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  const { t } = useTranslation()

  return {
    ...context,
    t, // Now uses react-i18next's t function
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("kmrl:language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ml")) {
      setCurrentLanguage(savedLanguage)
      i18n.changeLanguage(savedLanguage) // Update i18next language
    }
  }, [])

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang)
    localStorage.setItem("kmrl:language", lang)
    i18n.changeLanguage(lang) // Update i18next language
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>{children}</LanguageContext.Provider>
}

export function LanguageToggle() {
  const { currentLanguage, setLanguage } = useLanguage()
  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage === language.code && (
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                layoutId="language-indicator"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
