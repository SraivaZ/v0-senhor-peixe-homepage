"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

function FishLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-label="Senhor Peixe Logo"
    >
      <path d="M50 15c-8 0-15 3-20 8l-5-8c-1-1.5-3-1.5-4 0l-5 8c-1 1.5 0 3.5 2 3.5h6c-2 4-3 9-3 14 0 20 13 35 29 35s29-15 29-35S66 15 50 15zm-15 30c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zm20 15c-8 0-12-4-12-4 1-2 5-3 12-3s11 1 12 3c0 0-4 4-12 4z" />
      <path d="M70 25c2-3 6-5 10-5 2 0 4 0.5 5.5 1.5-4 2-7 5-9 9-2-2-4-4-6.5-5.5z" />
    </svg>
  );
}

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative py-8 px-6">
        <Link
          href="/"
          className="absolute left-6 top-8 text-[#1e3a5f] hover:text-[#c9a227] transition-colors"
          aria-label="Voltar à Homepage"
        >
          <Home size={28} strokeWidth={1.5} />
        </Link>

        <div className="flex flex-col items-center">
          <Link href="/" className="block">
            <div className="w-20 h-20 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <FishLogo className="w-14 h-14 text-white" />
            </div>
          </Link>

          <h1 className="mt-6 font-serif text-3xl md:text-4xl tracking-wide text-[#2c2c2c]">
            Sobre Nós
          </h1>
          <div className="w-16 h-0.5 bg-[#c9a227] mt-3" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Section 1: Do mar, para o seu prato */}
        <section className="mb-20">
          <h2 className="font-serif text-xl md:text-2xl italic text-center text-[#2c2c2c] mb-8">
            Do mar, para o seu prato
          </h2>

          <p className="font-serif text-base md:text-lg text-[#4a4a4a] text-center leading-relaxed mb-12 max-w-3xl mx-auto">
            O Senhor Peixe Restaurante Marisqueira abriu as portas ao público a
            11 de Março de 1999 em Lisboa, com um pé no rio Tejo. Situado no
            Parque das Nações, o nosso restaurante tem como missão trazer-lhe o
            melhor que o mar nos oferece. Peixe fresco, marisco e uma selecção
            de vinhos que temos a confiança que o vai deixar muito satisfeito.
          </p>

          <p className="font-serif text-lg md:text-xl italic text-center text-[#1e3a5f] mb-12">
            É Setúbal em Lisboa... e o mar no seu prato.
          </p>

          {/* Image: Tejo River */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/tejo-river.jpg"
              alt="Vista do Rio Tejo no Parque das Nações"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 2: Setúbal aqui tão perto */}
        <section className="mb-20">
          <h2 className="font-serif text-xl md:text-2xl italic text-center text-[#2c2c2c] mb-8">
            Setúbal aqui tão perto
          </h2>

          <p className="font-serif text-base md:text-lg text-[#4a4a4a] text-center leading-relaxed mb-12 max-w-3xl mx-auto">
            Setúbal em Lisboa, com tudo o que o mar dá. Peixes vivos, grelhados
            no carvão de azinho e mariscos. Mas não faltará a saladinha de
            polvo, o choco frito, o escabeche. E ainda os moscatéis, os vinhos,
            os queijos de azeitão e a doçaria... ou mesmo o bife da vazia para
            desenjoar.
          </p>

          {/* Two column images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/fresh-seafood.jpg"
                alt="Marisco fresco"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/restaurant-exterior.jpg"
                alt="Exterior do restaurante Senhor Peixe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#c9a227]/50" />
          <FishLogo className="w-8 h-8 text-[#1e3a5f]" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#c9a227]/50" />
        </div>

        {/* Morada */}
        <section className="text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
            Morada
          </h3>
          <div className="w-12 h-0.5 bg-[#c9a227] mx-auto mb-6" />

          <p className="font-serif text-base md:text-lg text-[#4a4a4a] flex items-center justify-center gap-2 flex-wrap">
            Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte,
            1990-254 Lisboa
            <a
              href="https://maps.google.com/?q=Rua+da+Pimenta+35+Lisboa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] hover:text-[#c9a227] transition-colors"
              aria-label="Ver no Google Maps"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </a>
          </p>
        </section>

        {/* Horário */}
        <section className="text-center mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
            Horário
          </h3>
          <div className="w-12 h-0.5 bg-[#c9a227] mx-auto mb-6" />

          <div className="font-serif text-base md:text-lg text-[#4a4a4a] space-y-1">
            <p>Terça a Sábado 12:00-15:30/19:00-22:30</p>
            <p>Domingo 12:30-15:30</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="font-serif text-sm text-[#4a4a4a] tracking-widest">
            DESDE 1999
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/senhorpeixe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c2c2c] hover:text-[#1e3a5f] transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/senhorpeixe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c2c2c] hover:text-[#1e3a5f] transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TripAdvisor */}
            <a
              href="https://tripadvisor.com/senhorpeixe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c2c2c] hover:text-[#1e3a5f] transition-colors"
              aria-label="TripAdvisor"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 5.997 5.997 0 0 0 4.04-10.43L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM6.003 17.212a3.996 3.996 0 1 1 0-7.992 3.996 3.996 0 0 1 0 7.992zm5.997-4.287a6.013 6.013 0 0 0-1.37-3.796 11.718 11.718 0 0 1 2.37-.237c.834 0 1.647.083 2.436.247a6.013 6.013 0 0 0-1.436 3.786zm6.003 4.287a3.996 3.996 0 1 1 0-7.992 3.996 3.996 0 0 1 0 7.992zM6.003 11.22a1.998 1.998 0 1 0 0 3.996 1.998 1.998 0 0 0 0-3.996zm11.994 0a1.998 1.998 0 1 0 0 3.996 1.998 1.998 0 0 0 0-3.996z" />
              </svg>
            </a>

            {/* TheFork */}
            <a
              href="https://thefork.com/senhorpeixe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c2c2c] hover:text-[#1e3a5f] transition-colors"
              aria-label="TheFork"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
