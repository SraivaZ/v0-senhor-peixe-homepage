"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

const BACKGROUND_IMAGE =
  "https://i.ibb.co/qL7pTchy/Chat-GPT-Image-13-05-2026-23-04-15.png"

const PHONE_NUMBERS = [
  { label: "+351 21 895 5892", href: "tel:+351218955892" },
  { label: "+351 914 671 702", href: "tel:+351914671702" },
]

const EMAIL = "reservas@senhorpeixe.pt"
const INSTAGRAM_URL = "https://www.instagram.com/restaurante.senhor.peixe/"

const translations = {
  pt: {
    reserve: "Reservar",
    menu: "Menu",
    close: "Fechar",
    gastronomy: "Gastronomia",
    wine: "Garrafeira",
    space: "O Espaço",
    reservations: "Reservas",
    about: "Sobre Nós",
    contacts: "Contactos",
    subtitle: "Cozinha Portuguesa · Peixe e Marisco",
    since: "Desde 1999",
    discover: "Descubra Mais",
    choosePhone: "Escolha o número para ligar",
    emailCopied: "Email copiado",
    language: "English",
    languageLabel: "Mudar para inglês",
    phoneLabel: "Ligar",
    emailLabel: "Copiar email",
    instagramLabel: "Instagram",
  },
  en: {
    reserve: "Book",
    menu: "Menu",
    close: "Close",
    gastronomy: "Gastronomy",
    wine: "Wine Cellar",
    space: "The Space",
    reservations: "Reservations",
    about: "About Us",
    contacts: "Contacts",
    subtitle: "Portuguese Cuisine · Fish and Seafood",
    since: "Since 1999",
    discover: "Discover More",
    choosePhone: "Choose a number to call",
    emailCopied: "Email copied",
    language: "Português",
    languageLabel: "Switch to Portuguese",
    phoneLabel: "Call",
    emailLabel: "Copy email",
    instagramLabel: "Instagram",
  },
}

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const t = translations[language]

  const navLinks = [
    { href: "/gastronomia", label: t.gastronomy },
    { href: "/garrafeira", label: t.wine },
    { href: "/o-nosso-espaco", label: t.space },
    { href: "/reservas", label: t.reservations },
    { href: "/sobre-nos", label: t.about },
    { href: "/contactos", label: t.contacts },
  ]

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 2200)

    return () => window.clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    document.body.style.overflow = menuOpen || phoneOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, phoneOpen])

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = EMAIL
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
    }
  }

  function handleToggleLanguage() {
    toggleLanguage()
    setMenuOpen(false)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#020b12] text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE}
          alt="Ocean background"
          className="h-full w-full object-cover object-[44%_center] opacity-100 md:object-center"
        />

        {/* Premium treatment */}
        <div className="absolute inset-0 bg-[#03111f]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b12]/62 via-[#061826]/18 to-[#020b12]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/14 via-transparent to-[#020b12]/32" />
      </div>

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-6 py-5 sm:gap-5 sm:px-8 sm:py-7 lg:px-12">
          <Link
            href="/reservas"
            className="border border-[#c9a46a]/80 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#d8b77b] transition hover:bg-[#c9a46a]/10 hover:text-[#f1d7a0] sm:px-8 sm:py-4 sm:text-xs"
          >
            {t.reserve}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="group flex h-12 w-12 items-center justify-center rounded-full text-[#d8b77b] transition hover:bg-white/5 sm:h-14 sm:w-14"
            aria-label={t.menu}
          >
            <span className="flex w-7 flex-col gap-1.5">
              <span className="h-px w-full bg-current transition group-hover:w-5" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current transition group-hover:w-5" />
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-28 text-center sm:px-8 md:pb-36 md:pt-32">
        <div className="mb-8 flex items-center justify-center gap-5 text-[#c9a46a] sm:mb-10 sm:gap-7">
          <span className="h-px w-12 bg-[#c9a46a]/70 sm:w-16" />

          <img
            src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
            alt="Senhor Peixe"
            className="h-12 w-auto object-contain opacity-95 sm:h-16 md:h-20"
          />

          <span className="h-px w-12 bg-[#c9a46a]/70 sm:w-16" />
        </div>

        <Link href="/" className="group">
          <h1 className="font-serif text-[3.2rem] font-normal uppercase leading-[0.95] tracking-[0.16em] text-white drop-shadow-2xl transition group-hover:text-white/90 sm:text-[5.5rem] md:text-[7.2rem] lg:text-[8.5rem]">
            Senhor
            <br className="sm:hidden" /> Peixe
          </h1>
        </Link>

        <p className="mt-8 max-w-3xl text-[10px] uppercase leading-relaxed tracking-[0.34em] text-[#d8b77b] sm:mt-9 sm:text-sm md:text-base">
          {t.subtitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-5 text-[#d8b77b] sm:mt-9">
          <span className="h-px w-10 bg-[#c9a46a]/80" />
          <p className="font-serif text-base italic tracking-wide sm:text-xl">
            {t.since}
          </p>
          <span className="h-px w-10 bg-[#c9a46a]/80" />
        </div>
      </section>

      {/* Bottom bar - icons only */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#c9a46a]/35 bg-[#03111f]/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 sm:px-8 md:flex-row md:gap-8 lg:px-12">
          <div className="flex items-center justify-center gap-8 text-[#d8b77b]">
            <button
              type="button"
              onClick={() => setPhoneOpen(true)}
              className="transition hover:text-[#f1d7a0]"
              aria-label={t.phoneLabel}
              title={t.phoneLabel}
            >
              <PhoneIcon className="h-5 w-5" />
            </button>

            <span className="h-8 w-px bg-[#c9a46a]/35" />

            <button
              type="button"
              onClick={handleCopyEmail}
              className="transition hover:text-[#f1d7a0]"
              aria-label={t.emailLabel}
              title={t.emailLabel}
            >
              <MailIcon className="h-5 w-5" />
            </button>

            <span className="h-8 w-px bg-[#c9a46a]/35" />

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#f1d7a0]"
              aria-label={t.instagramLabel}
              title={t.instagramLabel}
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <a
            href="#"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }}
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.34em] text-[#d8b77b] transition hover:text-[#f1d7a0] sm:text-xs"
          >
            <ChevronDownIcon className="h-4 w-4" />
            {t.discover}
          </a>
        </div>
      </footer>

      {/* Menu drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#020b12]/80 backdrop-blur-md">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label={t.close}
            onClick={() => setMenuOpen(false)}
          />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-[#c9a46a]/25 bg-[#03111f]/95 px-8 py-8 shadow-2xl sm:px-10">
            <div className="flex items-center justify-between">
              <p className="font-serif text-sm uppercase tracking-[0.32em] text-[#d8b77b]">
                {t.menu}
              </p>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
              >
                {t.close}
              </button>
            </div>

            <nav className="mt-16">
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href === "/reservas" && (
                      <div
                        className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-[#c9a46a]/35 to-transparent"
                        aria-hidden="true"
                      />
                    )}

                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group inline-flex font-serif text-xl text-white/90 transition hover:text-[#d8b77b] sm:text-2xl"
                    >
                      {link.label}
                      <span className="ml-4 mt-3.5 h-px w-0 bg-[#c9a46a] transition-all duration-300 group-hover:w-12" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto border-t border-[#c9a46a]/25 pt-8">
              <button
                type="button"
                onClick={handleToggleLanguage}
                aria-label={t.languageLabel}
                className="text-sm uppercase tracking-[0.28em] text-[#d8b77b] transition hover:text-[#f1d7a0]"
              >
                {t.language}
              </button>

              <div className="mt-8 flex items-center gap-6 text-[#d8b77b]">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    setPhoneOpen(true)
                  }}
                  className="transition hover:text-[#f1d7a0]"
                  aria-label={t.phoneLabel}
                  title={t.phoneLabel}
                >
                  <PhoneIcon className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="transition hover:text-[#f1d7a0]"
                  aria-label={t.emailLabel}
                  title={t.emailLabel}
                >
                  <MailIcon className="h-5 w-5" />
                </button>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#f1d7a0]"
                  aria-label={t.instagramLabel}
                  title={t.instagramLabel}
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Phone chooser */}
      {phoneOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020b12]/80 px-6 backdrop-blur-md">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label={t.close}
            onClick={() => setPhoneOpen(false)}
          />

          <div className="relative w-full max-w-sm border border-[#c9a46a]/35 bg-[#03111f]/95 p-8 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setPhoneOpen(false)}
              className="absolute right-5 top-5 text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
            >
              {t.close}
            </button>

            <p className="mt-8 font-serif text-xl text-white">
              {t.choosePhone}
            </p>

            <div className="mt-8 space-y-4">
              {PHONE_NUMBERS.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="block border border-[#c9a46a]/45 px-6 py-4 font-serif text-lg tracking-[0.12em] text-[#d8b77b] transition hover:bg-[#c9a46a]/10 hover:text-[#f1d7a0]"
                >
                  {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Copy toast */}
      {copied && (
        <div className="fixed bottom-28 left-1/2 z-[60] -translate-x-1/2 border border-[#c9a46a]/40 bg-[#03111f]/95 px-6 py-4 text-center text-xs uppercase tracking-[0.22em] text-[#d8b77b] shadow-2xl backdrop-blur-md sm:text-sm">
          {t.emailCopied}
        </div>
      )}
    </main>
  )
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}