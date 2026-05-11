"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Fish Logo Component
function FishLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="10" width="70" height="100" rx="4" fill="#1e3a5f" />
      <g fill="white">
        <ellipse cx="50" cy="55" rx="22" ry="28" />
        <path d="M50 25 L45 35 L50 32 L55 35 Z" />
        <path d="M30 45 Q25 55 30 65 Q35 55 30 45" />
        <path d="M70 45 Q75 55 70 65 Q65 55 70 45" />
        <circle cx="50" cy="50" r="3" fill="#1e3a5f" />
        <path d="M40 70 Q50 80 60 70" fill="none" stroke="#1e3a5f" strokeWidth="2" />
        <path d="M35 58 L42 55 M35 62 L42 60 M35 66 L42 65" stroke="#1e3a5f" strokeWidth="1" />
        <path d="M65 58 L58 55 M65 62 L58 60 M65 66 L58 65" stroke="#1e3a5f" strokeWidth="1" />
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
  );
}

// Home Icon
function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
    </svg>
  );
}

// Social Icons
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TripAdvisorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  );
}

function TheForkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm-3 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm6 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm-3 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1z" />
    </svg>
  );
}

const INITIAL_FORM_DATA = {
  nome: "",
  data: "",
  hora: "",
  contacto: "",
  pessoas: "",
  notas: "",
};

const DINNER_TIMES = [
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
] as const;

function getDayFromDateString(dateString: string): number | null {
  if (!dateString) return null;
  return new Date(`${dateString}T00:00:00`).getDay();
}

function isDinnerTime(hora: string): boolean {
  return DINNER_TIMES.some((t) => t === hora);
}

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sundayLunchPrompt, setSundayLunchPrompt] = useState(false);
  const [state, handleSubmit] = useForm("meenpror");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const selectedDay = getDayFromDateString(formData.data);
  const isMondayClosed = selectedDay === 1;
  const isSundayLunchOnly = selectedDay === 0;
  const isSundayDinnerSelection = isSundayLunchOnly && isDinnerTime(formData.hora);
  const availabilityAllowsSubmit =
    !isMondayClosed && !isSundayDinnerSelection;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "data") {
      const day = getDayFromDateString(value);
      setFormData((prev) => {
        const next = { ...prev, data: value };
        if (day === 0 && isDinnerTime(prev.hora)) {
          next.hora = "";
          setSundayLunchPrompt(true);
        } else {
          setSundayLunchPrompt(false);
        }
        return next;
      });
      return;
    }

    if (name === "hora") {
      setFormData({ ...formData, hora: value });
      if (value) setSundayLunchPrompt(false);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setIsSubmitted(false);
    setSubmitError("");
  
    const day = getDayFromDateString(formData.data);
  
    if (day === 1) {
      setSubmitError("Estamos encerrados à segunda-feira.");
      return;
    }
  
    if (day === 0 && isDinnerTime(formData.hora)) {
      setSubmitError("Ao domingo só aceitamos reservas ao almoço.");
      return;
    }
  
    setIsSubmitting(true);
  
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
      });
  
      if (!response.ok) {
        throw new Error("Erro ao enviar reserva");
      }
  
      setIsSubmitted(true);
      setFormData({ ...INITIAL_FORM_DATA });
      setSundayLunchPrompt(false);
    } catch (error) {
      setSubmitError(
        "Não foi possível enviar o pedido. Por favor, tente novamente ou contacte-nos por telefone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setFormData({ ...INITIAL_FORM_DATA });
      setSundayLunchPrompt(false);
    }
  }, [state.succeeded]);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#faf9f7]/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#1e3a5f] hover:text-[#c9a55a] transition-colors duration-300"
            aria-label="Voltar à página inicial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          <Link href="/" className="flex flex-col items-center group">
            <img
  src="https://i.ibb.co/mCtT8PJ5/so-peixe-sem-olho.png"
  alt="Senhor Peixe Logo"
  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
/>
            <span className="font-serif text-sm tracking-[0.3em] text-[#1e3a5f] mt-1">
              SENHOR PEIXE
            </span>
          </Link>

          <div className="w-7" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2c3e50] tracking-wide mb-3">
            Reservas
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto" />
        </div>

        {isSubmitted ? (
          /* Success Message */
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#1e3a5f]"
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
          <h2 className="font-serif text-2xl text-[#2c3e50] mb-5">
            Pedido de Reserva Enviado
          </h2>
          <div className="space-y-2 text-center text-[#5f7285] font-serif leading-relaxed">
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
          /* Reservation Form */
          <form
  onSubmit={handleFormSubmit}
  className="space-y-12"
>
            {/* Nome */}
            <div className="group">
              <label
                htmlFor="nome"
                className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
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
                className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] placeholder:text-[#a0a0a0] transition-colors"
                placeholder="O seu nome completo"
              />
              <ValidationError
                prefix="Nome"
                field="nome"
                errors={state.errors}
                className="mt-2 text-sm text-[#b65a5a] font-serif"
              />
            </div>

            {/* Data e Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label
                  htmlFor="data"
                  className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
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
                  className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] transition-colors"
                />
                {isMondayClosed && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 text-sm text-[#b65a5a] font-serif leading-relaxed"
                  >
                    Estamos encerrados à segunda-feira.
                  </p>
                )}
                <ValidationError
                  prefix="Data"
                  field="data"
                  errors={state.errors}
                  className="mt-2 text-sm text-[#b65a5a] font-serif"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="hora"
                  className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
                >
                  Hora
                </label>
                <select
                  id="hora"
                  name="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] transition-colors cursor-pointer"
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
                    className="mt-2 text-sm text-[#5a6c7d] font-serif leading-relaxed"
                  >
                    Por favor, escolha um horário de almoço.
                  </p>
                )}
                <ValidationError
                  prefix="Hora"
                  field="hora"
                  errors={state.errors}
                  className="mt-2 text-sm text-[#b65a5a] font-serif"
                />
              </div>
            </div>

            {/* Contacto e Pessoas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label
                  htmlFor="contacto"
                  className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
                >
                  Contacto
                </label>
                <input
                  type="tel"
                  id="contacto"
                  name="contacto"
                  autoComplete="tel"
                  required
                  value={formData.contacto}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] placeholder:text-[#a0a0a0] transition-colors"
                  placeholder="+351 XXX XXX XXX"
                />
                <ValidationError
                  prefix="Contacto"
                  field="contacto"
                  errors={state.errors}
                  className="mt-2 text-sm text-[#b65a5a] font-serif"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="pessoas"
                  className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
                >
                  Número de Pessoas
                </label>
                <select
                  id="pessoas"
                  name="pessoas"
                  required
                  value={formData.pessoas}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] transition-colors cursor-pointer"
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
                  className="mt-2 text-sm text-[#b65a5a] font-serif"
                />
              </div>
            </div>

            {/* Notas */}
            <div className="group">
              <label
                htmlFor="notas"
                className="block font-serif text-sm tracking-widest text-[#5a6c7d] mb-2 uppercase"
              >
                Notas Adicionais
              </label>
              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={formData.notas}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] placeholder:text-[#a0a0a0] transition-colors resize-none"
                placeholder="Indique-nos, por favor, eventuais alergias, ocasiões especiais, preferências de mesa ou necessidades específicas de acessibilidade."
              />
              <ValidationError
                prefix="Notas"
                field="notas"
                errors={state.errors}
                className="mt-2 text-sm text-[#b65a5a] font-serif"
              />
            </div>

            {submitError && (
  <div
    role="alert"
    aria-live="assertive"
    className="text-center text-sm text-[#b65a5a] font-serif leading-relaxed"
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
                className="relative inline-flex items-center justify-center px-16 py-4 bg-[#1e3a5f] text-white font-serif text-sm tracking-[0.25em] hover:bg-[#2c3e50] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
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
                      className="animate-spin h-5 w-5 text-white mr-3"
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
                    <span className="tracking-[0.2em]">A enviar...</span>
                  </span>
                )}
              </button>
            </div>

                {/* Note */}
                <p className="text-center text-sm text-[#8a9ba8] font-serif leading-relaxed">
                    Para reservas superiores a 10 pessoas ou pedidos de eventos privados,
                    <br />
                    recomendamos o contacto direto através do telefone,
                    <br />
                    para melhor acompanhamento do pedido.
                    <br />
                    <a
                      href="tel:+351218955892"
                      className="inline-block mt-2 text-[#1e3a5f] hover:text-[#c9a96e] transition-colors"
                    >
                      +351 21 895 5892
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="fixed bottom-4 right-4 flex items-center gap-2 md:gap-4 md:bottom-6 md:right-6">
              <a
                href="https://www.instagram.com/restaurante.senhor.peixe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
                aria-label="TripAdvisor"
              >
                <TripAdvisorIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://thefork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
                aria-label="TheFork"
              >
                <TheForkIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </main>
        );
      }