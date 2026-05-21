"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { languages, type Language, useLanguage } from "@/components/language-provider"

type ActivePage =
  | "home"
  | "gastronomia"
  | "garrafeira"
  | "espaco"
  | "reservas"
  | "sobre"
  | "contactos"

type SiteMenuProps = {
  activePage?: ActivePage
}

type MenuTranslation = {
  closeMenu: string
  openMenu: string
  mainMenu: string
  brand: string
  home: string
  gastronomy: string
  wine: string
  space: string
  reservations: string
  about: string
  contacts: string
  language: string
  languageLabel: string
}

const translations: Record<Language, MenuTranslation> = {
  pt: {
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    mainMenu: "Menu principal",
    brand: "Senhor Peixe",
    home: "Início",
    gastronomy: "Gastronomia",
    wine: "Garrafeira",
    space: "O Nosso Espaço",
    reservations: "Reservas",
    about: "Sobre Nós",
    contacts: "Contactos",
    language: "Português",
    languageLabel: "Escolher idioma",
  },
  en: {
    closeMenu: "Close menu",
    openMenu: "Open menu",
    mainMenu: "Main menu",
    brand: "Senhor Peixe",
    home: "Home",
    gastronomy: "Gastronomy",
    wine: "Wine Cellar",
    space: "The Space",
    reservations: "Reservations",
    about: "About Us",
    contacts: "Contacts",
    language: "English",
    languageLabel: "Choose language",
  },
  es: {
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    mainMenu: "Menú principal",
    brand: "Senhor Peixe",
    home: "Inicio",
    gastronomy: "Gastronomía",
    wine: "Bodega",
    space: "Nuestro Espacio",
    reservations: "Reservas",
    about: "Sobre Nosotros",
    contacts: "Contactos",
    language: "Español",
    languageLabel: "Elegir idioma",
  },
  fr: {
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    mainMenu: "Menu principal",
    brand: "Senhor Peixe",
    home: "Accueil",
    gastronomy: "Gastronomie",
    wine: "Cave à Vin",
    space: "Notre Espace",
    reservations: "Réservations",
    about: "À Propos",
    contacts: "Contacts",
    language: "Français",
    languageLabel: "Choisir la langue",
  },
  de: {
    closeMenu: "Menü schließen",
    openMenu: "Menü öffnen",
    mainMenu: "Hauptmenü",
    brand: "Senhor Peixe",
    home: "Startseite",
    gastronomy: "Gastronomie",
    wine: "Weinkeller",
    space: "Unser Raum",
    reservations: "Reservierungen",
    about: "Über Uns",
    contacts: "Kontakt",
    language: "Deutsch",
    languageLabel: "Sprache wählen",
  },
  it: {
    closeMenu: "Chiudi menu",
    openMenu: "Apri menu",
    mainMenu: "Menu principale",
    brand: "Senhor Peixe",
    home: "Home",
    gastronomy: "Gastronomia",
    wine: "Cantina",
    space: "Il Nostro Spazio",
    reservations: "Prenotazioni",
    about: "Chi Siamo",
    contacts: "Contatti",
    language: "Italiano",
    languageLabel: "Scegli lingua",
  },
  ru: {
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
    mainMenu: "Главное меню",
    brand: "Senhor Peixe",
    home: "Главная",
    gastronomy: "Гастрономия",
    wine: "Винный погреб",
    space: "Наше пространство",
    reservations: "Бронирование",
    about: "О нас",
    contacts: "Контакты",
    language: "Русский",
    languageLabel: "Выбрать язык",
  },
  zh: {
    closeMenu: "关闭菜单",
    openMenu: "打开菜单",
    mainMenu: "主菜单",
    brand: "Senhor Peixe",
    home: "首页",
    gastronomy: "美食",
    wine: "酒窖",
    space: "我们的空间",
    reservations: "预订",
    about: "关于我们",
    contacts: "联系方式",
    language: "中文",
    languageLabel: "选择语言",
  },
  ar: {
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة",
    mainMenu: "القائمة الرئيسية",
    brand: "Senhor Peixe",
    home: "الرئيسية",
    gastronomy: "فن الطهي",
    wine: "قبو النبيذ",
    space: "مساحتنا",
    reservations: "الحجوزات",
    about: "من نحن",
    contacts: "جهات الاتصال",
    language: "العربية",
    languageLabel: "اختيار اللغة",
  },
  hi: {
    closeMenu: "मेनू बंद करें",
    openMenu: "मेनू खोलें",
    mainMenu: "मुख्य मेनू",
    brand: "Senhor Peixe",
    home: "होम",
    gastronomy: "गैस्ट्रोनॉमी",
    wine: "वाइन सेलर",
    space: "हमारा स्थान",
    reservations: "आरक्षण",
    about: "हमारे बारे में",
    contacts: "संपर्क",
    language: "हिन्दी",
    languageLabel: "भाषा चुनें",
  },
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function getActivePageFromPath(pathname: string): ActivePage {
  const path = normalizePath(pathname)

  if (path === "/") return "home"
  if (path.startsWith("/gastronomia")) return "gastronomia"
  if (path.startsWith("/garrafeira")) return "garrafeira"
  if (path.startsWith("/o-nosso-espaco")) return "espaco"
  if (path.startsWith("/reservas")) return "reservas"
  if (path.startsWith("/sobre-nos")) return "sobre"
  if (path.startsWith("/contactos")) return "contactos"

  return "home"
}

export function SiteMenu({ activePage }: SiteMenuProps) {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const t = translations[language] ?? translations.pt
  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0]
  const currentActivePage = activePage ?? getActivePageFromPath(pathname)

  const navLinks: {
    id: ActivePage
    href: string
    label: string
  }[] = [
    { id: "home", href: "/", label: t.home },
    { id: "gastronomia", href: "/gastronomia", label: t.gastronomy },
    { id: "garrafeira", href: "/garrafeira", label: t.wine },
    { id: "espaco", href: "/o-nosso-espaco", label: t.space },
    { id: "reservas", href: "/reservas", label: t.reservations },
    { id: "sobre", href: "/sobre-nos", label: t.about },
    { id: "contactos", href: "/contactos", label: t.contacts },
  ]

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        setIsLanguageOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  function handleChooseLanguage(newLanguage: Language) {
    setLanguage(newLanguage)
    setIsLanguageOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed left-4 top-4 z-[80] sm:left-6 sm:top-5">
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[70] cursor-default"
          aria-label={t.closeMenu}
          onClick={() => {
            setIsMenuOpen(false)
            setIsLanguageOpen(false)
          }}
        />
      )}

      <div className="relative z-[90]">
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          className={`group flex h-12 w-12 items-center justify-center rounded-full border shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-300 sm:h-11 sm:w-11 ${
            isMenuOpen
              ? "border-[#c8a96a] bg-[#10243d] text-white"
              : "border-[#c8a96a]/35 bg-[#10243d]/90 text-white hover:border-[#c8a96a] hover:bg-[#10243d]"
          }`}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {isMenuOpen && (
          <div
            id="site-menu"
            className="mt-4 max-h-[calc(100vh-110px)] w-72 overflow-y-auto rounded-2xl border border-white/20 bg-[#10243d]/95 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:w-64"
          >
            <nav aria-label={t.mainMenu}>
              <div className="px-4 pb-4 pt-3">
                <p className="font-serif text-[10px] uppercase tracking-[0.35em] text-white/45">
                  {t.brand}
                </p>
              </div>

              <div className="space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = currentActivePage === link.id
                  const shouldSeparateAfterHome = index === 1
                  const shouldSeparateBeforeReservations = index === 4

                  return (
                    <div key={link.href}>
                      {shouldSeparateAfterHome && (
                        <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      )}

                      {shouldSeparateBeforeReservations && (
                        <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      )}

                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsLanguageOpen(false)
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-xl px-4 py-3 font-serif text-sm tracking-wide transition-all duration-300 ${
                          isActive
                            ? "bg-white/10 text-[#c8a96a] shadow-inner shadow-white/5"
                            : "text-white/78 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                <button
                  type="button"
                  onClick={() => setIsLanguageOpen((open) => !open)}
                  aria-label={t.languageLabel}
                  aria-expanded={isLanguageOpen}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <span>{currentLanguage?.label ?? t.language}</span>
                  <span className="text-xs text-[#c8a96a]/80">{isLanguageOpen ? "−" : "+"}</span>
                </button>

                {isLanguageOpen && (
                  <div className="mt-1 space-y-1 rounded-xl bg-white/[0.03] p-1">
                    {languages
                      .filter((option) => option.code !== language)
                      .map((option) => (
                        <button
                          type="button"
                          key={option.code}
                          onClick={() => handleChooseLanguage(option.code)}
                          className="block w-full rounded-lg px-3 py-2 text-left font-serif text-[13px] tracking-wide text-white/72 transition-all duration-300 hover:bg-white/10 hover:text-[#c8a96a]"
                        >
                          {option.label}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
