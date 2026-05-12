"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

// Fish Logo Component
function FishLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Senhor Peixe Logo"
    >
      <rect x="10" y="10" width="80" height="100" fill="#10243d" rx="4" />
      <g transform="translate(20, 25)">
        <path
          d="M30 5 C20 0, 5 10, 5 30 C5 50, 20 60, 35 55 C25 50, 20 40, 20 30 C20 20, 25 10, 30 5"
          fill="white"
        />
        <path
          d="M35 8 C45 3, 55 10, 55 25 C55 40, 45 50, 30 55 C45 50, 50 40, 50 28 C50 16, 42 8, 35 8"
          fill="white"
        />
        <circle cx="42" cy="22" r="3" fill="#10243d" />
        <path d="M55 20 C58 18, 62 20, 60 25 C58 22, 55 22, 55 20" fill="white" />
        <path d="M10 5 C15 0, 25 2, 28 8 C20 5, 15 5, 10 5" fill="white" />
        <path d="M8 8 C12 3, 20 5, 22 10 C16 8, 12 8, 8 8" fill="white" />
      </g>
      <text
        x="50"
        y="95"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontFamily="serif"
        letterSpacing="1"
      >
        SENHOR PEIXE
      </text>
    </svg>
  )
}

// Social Icons
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TripAdvisorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.5l1.922-1.886a5.976 5.976 0 004.075 1.6 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.91C14.5 8.075 13.096 9.45 12 11.372c-1.096-1.922-2.5-3.297-4.504-4.207A11.577 11.577 0 0112 6.255zM6.003 9.79a4.006 4.006 0 110 8.013 4.006 4.006 0 010-8.013zm11.994 0a4.006 4.006 0 110 8.013 4.006 4.006 0 010-8.013zM6.003 11.79a2.003 2.003 0 100 4.006 2.003 2.003 0 000-4.006zm11.994 0a2.003 2.003 0 100 4.006 2.003 2.003 0 000-4.006z" />
    </svg>
  )
}

function TheForkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 3.6v7.2l-2.4 2.4 1.697 1.697L12 15.394l1.903 1.903L15.6 15.6l-2.4-2.4V6h-2.4z" />
    </svg>
  )
}

// Contact Icons
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="8" r="3" fill="currentColor" />
      <circle cx="36" cy="16" r="3" fill="currentColor" />
      <circle cx="36" cy="32" r="3" fill="currentColor" />
      <circle cx="12" cy="16" r="3" fill="currentColor" />
      <circle cx="12" cy="32" r="3" fill="currentColor" />
      <path d="M20 40 C16 42, 8 40, 6 36" strokeLinecap="round" />
    </svg>
  )
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="4" y="10" width="40" height="28" rx="2" />
      <path d="M4 14 L24 26 L44 14" />
      <circle cx="24" cy="24" r="6" />
      <path d="M30 24 C30 20, 27 18, 24 18 C21 18, 18 20, 18 24 C18 28, 21 30, 24 30 C26 30, 28 29, 30 27" />
    </svg>
  )
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  )
}

const INITIAL_FORM_DATA = {
  nome: "",
  email: "",
  mensagem: "",
}

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [state, handleSubmit] = useForm("xykolbyw")

  useEffect(() => {
    if (state.submitting) {
      setIsSubmitted(false)
    }
  }, [state.submitting])

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ ...INITIAL_FORM_DATA })
      setIsSubmitted(true)

      const timeout = setTimeout(() => setIsSubmitted(false), 5000)

      return () => clearTimeout(timeout)
    }
  }, [state.succeeded])

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

  const googleMapsUrl =
    "https://www.google.com/maps/place/Rua+da+Pimenta+35,+1990-254+Lisboa,+Portugal"

  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5!2d-9.0939!3d38.7633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19316a4c5b1b8d%3A0x0!2sRua%20da%20Pimenta%2035%2C%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1699999999999!5m2!1spt-PT!2spt"

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Floating Site Menu */}
      <div className="fixed left-4 top-4 z-[80] sm:left-6 sm:top-5">
        {isMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[70] cursor-default"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="relative z-[90]">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="contactos-site-menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96a]/35 bg-[#10243d]/90 text-white shadow-lg shadow-black/15 backdrop-blur-md transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d]"
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
              id="contactos-site-menu"
              className="mt-4 max-h-[calc(100vh-110px)] w-64 overflow-y-auto rounded-2xl border border-white/20 bg-[#10243d]/95 p-3 shadow-2xl backdrop-blur-xl"
            >
              <nav aria-label="Menu principal">
                <div className="px-4 pb-3 pt-2">
                  <p className="font-serif text-[10px] uppercase tracking-[0.35em] text-white/45">
                    Senhor Peixe
                  </p>
                </div>

                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Início
                  </Link>

                  <Link
                    href="/gastronomia"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Gastronomia
                  </Link>

                  <Link
                    href="/garrafeira"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Garrafeira
                  </Link>

                  <Link
                    href="/o-nosso-espaco"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    O Nosso Espaço
                  </Link>
                </div>

                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="space-y-1">
                  <Link
                    href="/reservas"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Reservas
                  </Link>

                  <Link
                    href="/contactos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl bg-white/10 px-4 py-3 font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300"
                  >
                    Contactos
                  </Link>

                  <Link
                    href="/sobre-nos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Sobre Nós
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <header className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#10243d] sm:h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <img
            src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
            alt="Senhor Peixe Logo"
            className="mb-4 h-16 w-16 object-contain drop-shadow-lg sm:h-20 sm:w-20"
          />

          <span className="font-serif text-xs uppercase tracking-[0.35em] text-white/70">
            Senhor Peixe
          </span>

          <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-white sm:text-5xl">
            Contactos
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-serif text-sm italic leading-relaxed tracking-[0.08em] text-white/75 sm:text-base">
            Fale connosco, encontre-nos ou envie-nos a sua mensagem.
          </p>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              Informação
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                Como chegar até nós
              </h2>

              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>
            </div>

            <div
              className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
              aria-hidden="true"
            >
              <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
              <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white/75 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                Morada
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                Parque das Nações
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 font-serif text-base leading-relaxed text-[#5f7285] transition-colors hover:text-[#10243d]"
              >
                <span>
                  Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte,
                  1990-254 Lisboa
                </span>
                <MapPinIcon className="h-5 w-5 shrink-0 text-[#c8a96a]" />
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white/75 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                Horário
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                Estamos abertos
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <div className="mt-6 space-y-3 font-serif text-base leading-relaxed text-[#5f7285]">
                <p>Terça a Sábado</p>
                <p className="text-[#10243d]">12:00-15:30 / 19:00-22:30</p>

                <p className="pt-3">Domingo</p>
                <p className="text-[#10243d]">12:30-15:30</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href="tel:+351218955892"
              className="group flex items-center justify-center gap-5 rounded-2xl border border-stone-200/80 bg-white/75 p-7 shadow-sm transition-all duration-300 hover:border-[#c8a96a]/60 hover:shadow-md"
            >
              <PhoneIcon className="h-11 w-11 text-[#10243d] transition-colors group-hover:text-[#c8a96a]" />

              <div>
                <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">
                  Telefone
                </p>
                <p className="mt-2 font-serif text-xl tracking-wide text-[#10243d]">
                  +351 21 895 5892
                </p>
              </div>
            </a>

            <a
              href="mailto:restaurante.senhor.peixe@gmail.com"
              className="group flex items-center justify-center gap-5 rounded-2xl border border-stone-200/80 bg-white/75 p-7 shadow-sm transition-all duration-300 hover:border-[#c8a96a]/60 hover:shadow-md"
            >
              <EmailIcon className="h-11 w-11 text-[#10243d] transition-colors group-hover:text-[#c8a96a]" />

              <div>
                <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">
                  Email
                </p>
                <p className="mt-2 break-all font-serif text-base tracking-wide text-[#10243d] sm:text-lg">
                  restaurante.senhor.peixe@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Map */}
          <section className="mt-20">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
            </div>

            <div className="mb-10 text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                Localização
              </p>

              <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  Encontre-nos no mapa
                </h2>

                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>
              </div>

              <div
                className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
                aria-hidden="true"
              >
                <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
                <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-200/80 shadow-xl">
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Senhor Peixe"
                className="w-full"
              />
            </div>
          </section>

          {/* Contact Form */}
          <section className="mt-20">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
            </div>

            <div className="mb-12 text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                Mensagem
              </p>

              <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  Envie-nos uma mensagem
                </h2>

                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>
              </div>

              <div
                className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
                aria-hidden="true"
              >
                <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
                <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl space-y-10 rounded-2xl border border-stone-200/80 bg-white/75 p-6 shadow-sm sm:p-10"
            >
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Nome
                </label>

                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  required
                  autoComplete="name"
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder="O seu nome"
                />

                <ValidationError
                  prefix="Nome"
                  field="nome"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  autoComplete="email"
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder="o.seu@email.com"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full resize-none border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder="A sua mensagem..."
                />

                <ValidationError
                  prefix="Mensagem"
                  field="mensagem"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              {state.errors && state.errors.length > 0 && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="text-center font-serif text-sm leading-relaxed text-[#b65a5a]"
                >
                  O envio falhou. Verifique os dados e tente novamente.
                </div>
              )}

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  aria-busy={state.submitting}
                  className="relative inline-flex min-w-64 items-center justify-center overflow-hidden rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-9 py-4 font-serif text-sm uppercase tracking-[0.2em] text-white shadow-lg shadow-[#10243d]/10 transition-all duration-300 hover:bg-[#10243d] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      state.submitting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Enviar Mensagem
                  </span>

                  {state.submitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>

                      <span className="tracking-[0.2em]">A enviar...</span>
                    </span>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="text-center">
                  <p className="font-serif text-base leading-relaxed text-[#10243d]">
                    Mensagem enviada com sucesso. Entraremos em contacto brevemente.
                  </p>
                </div>
              )}
            </form>
          </section>
        </div>
      </section>

      {/* Social Icons */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6 md:gap-4">
        <a
          href="https://www.instagram.com/restaurante.senhor.peixe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href="https://www.tripadvisor.pt/Restaurant_Review-g189158-d1163802-Reviews-Sr_Peixe-Lisbon_Lisbon_District_Central_Portugal.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="TripAdvisor"
        >
          <TripAdvisorIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href="https://thefork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="TheFork"
        >
          <TheForkIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#10243d] py-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="inline-block group">
            <img
              src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
              alt="Senhor Peixe Logo"
              className="mx-auto h-16 w-16 object-contain"
            />
          </Link>

          <p className="mt-3 font-serif text-xs uppercase tracking-[0.2em] text-white/60">
            Senhor Peixe — Desde 1999
          </p>
        </div>
      </footer>
    </main>
  )
}