"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  )
}

function TheForkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm-3 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm6 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm-3 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1z" />
    </svg>
  )
}

const INITIAL_FORM_DATA = {
  nome: "",
  data: "",
  hora: "",
  contacto: "",
  pessoas: "",
  notas: "",
}

const DINNER_TIMES = [
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
] as const

function getDayFromDateString(dateString: string): number | null {
  if (!dateString) return null
  return new Date(`${dateString}T00:00:00`).getDay()
}

function isDinnerTime(hora: string): boolean {
  return DINNER_TIMES.some((t) => t === hora)
}

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sundayLunchPrompt, setSundayLunchPrompt] = useState(false)
  const [state] = useForm("meenpror")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const selectedDay = getDayFromDateString(formData.data)
  const isMondayClosed = selectedDay === 1
  const isSundayLunchOnly = selectedDay === 0
  const isSundayDinnerSelection = isSundayLunchOnly && isDinnerTime(formData.hora)

  const availabilityAllowsSubmit = !isMondayClosed && !isSundayDinnerSelection

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === "data") {
      const day = getDayFromDateString(value)

      setFormData((prev) => {
        const next = { ...prev, data: value }

        if (day === 0 && isDinnerTime(prev.hora)) {
          next.hora = ""
          setSundayLunchPrompt(true)
        } else {
          setSundayLunchPrompt(false)
        }

        return next
      })

      return
    }

    if (name === "hora") {
      setFormData({ ...formData, hora: value })
      if (value) setSundayLunchPrompt(false)
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitted(false)
    setSubmitError("")

    const day = getDayFromDateString(formData.data)

    if (day === 1) {
      setSubmitError("Estamos encerrados à segunda-feira.")
      return
    }

    if (day === 0 && isDinnerTime(formData.hora)) {
      setSubmitError("Ao domingo só aceitamos reservas ao almoço.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meenpror", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Novo pedido de reserva - Senhor Peixe",
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar reserva")
      }

      setIsSubmitted(true)
      setFormData({ ...INITIAL_FORM_DATA })
      setSundayLunchPrompt(false)
    } catch (error) {
      setSubmitError(
        "Não foi possível enviar o pedido. Por favor, tente novamente ou contacte-nos por telefone."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true)
      setFormData({ ...INITIAL_FORM_DATA })
      setSundayLunchPrompt(false)
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
            aria-controls="reservas-site-menu"
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
              id="reservas-site-menu"
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
                    className="block rounded-xl bg-white/10 px-4 py-3 font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300"
                  >
                    Reservas
                  </Link>

                  <Link
                    href="/contactos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
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

      {/* Header Elegant */}
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
            Reservas
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-serif text-sm italic leading-relaxed tracking-[0.08em] text-white/75 sm:text-base">
            Reserve a sua mesa e deixe-nos preparar uma experiência à sua medida.
          </p>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-16 text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
            Pedido de reserva
          </p>

          <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
            <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
              -
            </span>

            <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
              A sua mesa
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

        {isSubmitted ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#10243d]/10">
              <svg
                className="h-10 w-10 text-[#10243d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="mb-5 font-serif text-2xl text-[#10243d]">
              Pedido de Reserva Enviado
            </h2>

            <div className="space-y-2 text-center font-serif leading-relaxed text-[#5f7285]">
              <p>Obrigado pelo seu pedido de reserva.</p>
              <p>
                A nossa equipa entrará em contacto consigo brevemente
                <br />
                para confirmar a disponibilidade.
              </p>
            </div>

            <div
              className="mx-auto mt-12 h-px w-28 bg-gradient-to-r from-transparent via-[#c8a96a]/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-12">
            {/* Nome */}
            <div className="group">
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
                autoComplete="name"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                placeholder="O seu nome completo"
              />

              <ValidationError
                prefix="Nome"
                field="nome"
                errors={state.errors}
                className="mt-2 font-serif text-sm text-[#b65a5a]"
              />
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="group">
                <label
                  htmlFor="data"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Data
                </label>

                <input
                  type="date"
                  id="data"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                />

                {isMondayClosed && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 font-serif text-sm leading-relaxed text-[#b65a5a]"
                  >
                    Estamos encerrados à segunda-feira.
                  </p>
                )}

                <ValidationError
                  prefix="Data"
                  field="data"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="hora"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Hora
                </label>

                <select
                  id="hora"
                  name="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full cursor-pointer border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                >
                  <option value="">Selecione</option>

                  <optgroup label="Almoço">
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                  </optgroup>

                  <optgroup label="Jantar">
                    <option value="19:00" disabled={isSundayLunchOnly}>
                      19:00
                    </option>
                    <option value="19:30" disabled={isSundayLunchOnly}>
                      19:30
                    </option>
                    <option value="20:00" disabled={isSundayLunchOnly}>
                      20:00
                    </option>
                    <option value="20:30" disabled={isSundayLunchOnly}>
                      20:30
                    </option>
                    <option value="21:00" disabled={isSundayLunchOnly}>
                      21:00
                    </option>
                    <option value="21:30" disabled={isSundayLunchOnly}>
                      21:30
                    </option>
                    <option value="22:00" disabled={isSundayLunchOnly}>
                      22:00
                    </option>
                  </optgroup>
                </select>

                {sundayLunchPrompt && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 font-serif text-sm leading-relaxed text-[#5a6c7d]"
                  >
                    Por favor, escolha um horário de almoço.
                  </p>
                )}

                <ValidationError
                  prefix="Hora"
                  field="hora"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>
            </div>

            {/* Contacto e Pessoas */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="group">
                <label
                  htmlFor="contacto"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Contacto
                </label>

                <PhoneInput
                  id="contacto"
                  name="contacto"
                  international
                  defaultCountry="PT"
                  value={formData.contacto}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      contacto: value || "",
                    }))
                  }
                  className="phone-input-senhor-peixe"
                  placeholder="O seu número de telefone"
                  required
                />

                <ValidationError
                  prefix="Contacto"
                  field="contacto"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="pessoas"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  Número de Pessoas
                </label>

                <select
                  id="pessoas"
                  name="pessoas"
                  required
                  value={formData.pessoas}
                  onChange={handleChange}
                  className="w-full cursor-pointer border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                >
                  <option value="">Selecione</option>
                  <option value="1">1 Pessoa</option>
                  <option value="2">2 Pessoas</option>
                  <option value="3">3 Pessoas</option>
                  <option value="4">4 Pessoas</option>
                  <option value="5">5 Pessoas</option>
                  <option value="6">6 Pessoas</option>
                  <option value="7">7 Pessoas</option>
                  <option value="8">8 Pessoas</option>
                  <option value="9">9 Pessoas</option>
                  <option value="10">10+ Pessoas</option>
                </select>

                <ValidationError
                  prefix="Número de Pessoas"
                  field="pessoas"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>
            </div>

            {/* Notas */}
            <div className="group">
              <label
                htmlFor="notas"
                className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
              >
                Notas Adicionais
              </label>

              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={formData.notas}
                onChange={handleChange}
                className="w-full resize-none border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                placeholder="Indique-nos, por favor, eventuais alergias, ocasiões especiais, preferências de mesa ou necessidades específicas de acessibilidade."
              />

              <ValidationError
                prefix="Notas"
                field="notas"
                errors={state.errors}
                className="mt-2 font-serif text-sm text-[#b65a5a]"
              />
            </div>

            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                className="text-center font-serif text-sm leading-relaxed text-[#b65a5a]"
              >
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting || !availabilityAllowsSubmit}
                aria-busy={isSubmitting}
                className="relative inline-flex min-w-64 items-center justify-center overflow-hidden rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-9 py-4 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-lg shadow-[#10243d]/10 transition-all duration-300 hover:bg-[#10243d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Solicitar Reserva
                </span>

                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    <span className="tracking-[0.18em]">A enviar...</span>
                  </span>
                )}
              </button>
            </div>

            <p className="text-center font-serif text-sm leading-relaxed text-[#8a9ba8]">
              Para reservas superiores a 10 pessoas ou pedidos de eventos privados,
              <br />
              recomendamos o contacto direto através do telefone,
              <br />
              para melhor acompanhamento do pedido.
              <br />

              <a
                href="tel:+351218955892"
                className="mt-2 inline-block text-[#10243d] transition-colors hover:text-[#c8a96a]"
              >
                +351 21 895 5892
              </a>
            </p>
          </form>
        )}
      </div>

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
          href="https://tripadvisor.com"
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