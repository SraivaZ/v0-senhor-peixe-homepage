"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    hora: "",
    contacto: "",
    pessoas: "",
    notas: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="relative py-8 px-6">
        <Link
          href="/"
          className="absolute left-6 top-8 text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
          aria-label="Voltar à Homepage"
        >
          <HomeIcon className="w-8 h-8" />
        </Link>

        <div className="flex flex-col items-center">
          <Link href="/">
            <FishLogo className="w-20 h-24" />
          </Link>
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
            <h2 className="font-serif text-2xl text-[#2c3e50] mb-4">
              Pedido de Reserva Enviado
            </h2>
            <p className="text-[#5a6c7d] leading-relaxed max-w-md mx-auto mb-8">
              Obrigado pelo seu pedido de reserva. Entraremos em contacto consigo
              brevemente para confirmar a disponibilidade.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  nome: "",
                  data: "",
                  hora: "",
                  contacto: "",
                  pessoas: "",
                  notas: "",
                });
              }}
              className="font-serif text-sm tracking-widest text-[#1e3a5f] hover:text-[#c9a96e] transition-colors"
            >
              FAZER NOVA RESERVA
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <form onSubmit={handleSubmit} className="space-y-12">
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
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] placeholder:text-[#a0a0a0] transition-colors"
                placeholder="O seu nome completo"
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
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </optgroup>
                </select>
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
                  required
                  value={formData.contacto}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#d4d0c8] focus:border-[#1e3a5f] outline-none py-3 font-serif text-lg text-[#2c3e50] placeholder:text-[#a0a0a0] transition-colors"
                  placeholder="+351 XXX XXX XXX"
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
                placeholder="Alergias, ocasiões especiais, pedidos específicos..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center px-16 py-4 bg-[#1e3a5f] text-white font-serif text-sm tracking-[0.25em] hover:bg-[#2c3e50] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  }`}
                >
                  SOLICITAR RESERVA
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                  </span>
                )}
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-[#8a9ba8] font-serif leading-relaxed">
              Para grupos superiores a 10 pessoas ou eventos privados,
              <br />
              contacte-nos directamente pelo telefone{" "}
              <a
                href="tel:+351218955892"
                className="text-[#1e3a5f] hover:text-[#c9a96e] transition-colors"
              >
                +351 21 895 5892
              </a>
            </p>
          </form>
        )}
      </div>

      {/* Social Icons */}
      <div className="fixed bottom-6 right-6 flex items-center gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-7 h-7" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-7 h-7" />
        </a>
        <a
          href="https://tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
          aria-label="TripAdvisor"
        >
          <TripAdvisorIcon className="w-7 h-7" />
        </a>
        <a
          href="https://thefork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c3e50] hover:text-[#1e3a5f] transition-colors"
          aria-label="TheFork"
        >
          <TheForkIcon className="w-7 h-7" />
        </a>
      </div>
    </main>
  );
}
