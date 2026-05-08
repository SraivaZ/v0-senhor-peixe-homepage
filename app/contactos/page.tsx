"use client"

import Link from "next/link"
import { useState } from "react"

// Fish Logo Component
function FishLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" y="10" width="80" height="100" fill="#1e3a5f" rx="4" />
      <g transform="translate(20, 25)">
        <path
          d="M30 5 C20 0, 5 10, 5 30 C5 50, 20 60, 35 55 C25 50, 20 40, 20 30 C20 20, 25 10, 30 5"
          fill="white"
        />
        <path
          d="M35 8 C45 3, 55 10, 55 25 C55 40, 45 50, 30 55 C45 50, 50 40, 50 28 C50 16, 42 8, 35 8"
          fill="white"
        />
        <circle cx="42" cy="22" r="3" fill="#1e3a5f" />
        <path
          d="M55 20 C58 18, 62 20, 60 25 C58 22, 55 22, 55 20"
          fill="white"
        />
        <path
          d="M10 5 C15 0, 25 2, 28 8 C20 5, 15 5, 10 5"
          fill="white"
        />
        <path
          d="M8 8 C12 3, 20 5, 22 10 C16 8, 12 8, 8 8"
          fill="white"
        />
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

// Home Icon
function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
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

// Phone Icon (vintage rotary style)
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

// Email Icon (envelope with @)
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

// Map Pin Icon
function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  )
}

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nome: "", email: "", mensagem: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const googleMapsUrl = "https://www.google.com/maps/place/Rua+da+Pimenta+35,+1990-254+Lisboa,+Portugal"
  const googleMapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5!2d-9.0939!3d38.7633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19316a4c5b1b8d%3A0x0!2sRua%20da%20Pimenta%2035%2C%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1699999999999!5m2!1spt-PT!2spt"

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="relative py-8 px-6">
        {/* Home Icon */}
        <Link
          href="/"
          className="absolute left-6 top-8 text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
          aria-label="Voltar à homepage"
        >
          <HomeIcon className="w-10 h-10" />
        </Link>

        {/* Centered Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="Senhor Peixe - Homepage">
            <FishLogo className="w-24 h-28 hover:opacity-80 transition-opacity duration-300" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* Morada Section */}
        <section className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#2d2d2d] tracking-wide mb-3">
            Morada
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-lg text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
          >
            <span>Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisboa</span>
            <MapPinIcon className="w-5 h-5 text-[#1e3a5f]" />
          </a>
        </section>

        {/* Horário Section */}
        <section className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#2d2d2d] tracking-wide mb-3">
            Horário
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>
          <div className="font-serif text-lg text-[#2d2d2d] space-y-1">
            <p>Terça a Sábado 12:00-15:30/19:00-22:30</p>
            <p>Domingo 12:30-15:30</p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="space-y-10 mb-20">
          {/* Phone */}
          <div className="flex items-center justify-center gap-8">
            <PhoneIcon className="w-12 h-12 text-[#2d2d2d]" />
            <a
              href="tel:+351218955892"
              className="font-serif text-2xl text-[#2d2d2d] tracking-wider hover:text-[#1e3a5f] transition-colors duration-300"
            >
              +351 21 895 5892
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-8">
            <EmailIcon className="w-12 h-12 text-[#2d2d2d]" />
            <a
              href="mailto:restaurante.senhor.peixe@gmail.com"
              className="font-serif text-xl text-[#2d2d2d] tracking-wide hover:text-[#1e3a5f] transition-colors duration-300"
            >
              restaurante.senhor.peixe@gmail.com
            </a>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl text-[#2d2d2d] tracking-wide mb-3 text-center">
            Localização
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="400"
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
        <section>
          <h2 className="font-serif text-3xl text-[#2d2d2d] tracking-wide mb-3 text-center">
            Envie-nos uma Mensagem
          </h2>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="block font-serif text-sm text-[#2d2d2d] tracking-wider uppercase mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-[#d4d4d4] rounded-md font-serif text-[#2d2d2d] focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] transition-colors duration-300"
                placeholder="O seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-serif text-sm text-[#2d2d2d] tracking-wider uppercase mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-[#d4d4d4] rounded-md font-serif text-[#2d2d2d] focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] transition-colors duration-300"
                placeholder="o.seu@email.com"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="mensagem"
                className="block font-serif text-sm text-[#2d2d2d] tracking-wider uppercase mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-[#d4d4d4] rounded-md font-serif text-[#2d2d2d] focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] transition-colors duration-300 resize-none"
                placeholder="A sua mensagem..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-3 bg-[#1e3a5f] text-white font-serif text-sm tracking-widest uppercase hover:bg-[#2d4a6f] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-md"
              >
                {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="text-center py-4">
                <p className="font-serif text-[#1e3a5f] text-lg">
                  Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                </p>
              </div>
            )}
          </form>
        </section>
      </main>

      {/* Footer with Social Icons */}
      <footer className="fixed bottom-6 right-6">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-8 h-8" />
          </a>
          <a
            href="https://tripadvisor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
            aria-label="TripAdvisor"
          >
            <TripAdvisorIcon className="w-8 h-8" />
          </a>
          <a
            href="https://thefork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d2d2d] hover:text-[#1e3a5f] transition-colors duration-300"
            aria-label="TheFork"
          >
            <TheForkIcon className="w-8 h-8" />
          </a>
        </div>
      </footer>
    </div>
  )
}
