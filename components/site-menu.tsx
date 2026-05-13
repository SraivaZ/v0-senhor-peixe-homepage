"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

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

const translations = {
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
    language: "English",
    languageLabel: "Mudar para inglês",
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
    language: "Português",
    languageLabel: "Switch to Portuguese",
  },
} as const

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
  const { language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = translations[language]
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

  function handleToggleLanguage() {
    toggleLanguage()
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed left-4 top-4 z-[80] sm:left-6 sm:top-5">
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[70] cursor-default"
          aria-label={t.closeMenu}
          onClick={() => setIsMenuOpen(false)}
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
                        onClick={() => setIsMenuOpen(false)}
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

              <button
                type="button"
                onClick={handleToggleLanguage}
                aria-label={t.languageLabel}
                className="block w-full rounded-xl px-4 py-3 text-left font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {t.language}
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}