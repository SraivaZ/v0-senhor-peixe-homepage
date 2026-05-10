"use client";

import Link from "next/link";
import { useState } from "react";

export default function ReservasPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#faf9f7]/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-[#1e3a5f]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              className="w-7 h-7">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          <Link href="/" className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/mCtT8PJ5/so-peixe-sem-olho.png"
              alt="Senhor Peixe Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-serif text-sm tracking-[0.3em] text-[#1e3a5f] mt-1">
              SENHOR PEIXE
            </span>
          </Link>

          <div className="w-7" />
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-6 py-12">

        <h1 className="text-center font-serif text-4xl mb-10 text-[#2c3e50]">
          Reservas
        </h1>

        {/* FORM */}
        <form
          action="https://formspree.io/f/meenpror"
          method="POST"
          className="space-y-8"
          onSubmit={() => setIsSubmitting(true)}
        >

          <input type="hidden" name="_subject" value="Nova Reserva Senhor Peixe" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Nome */}
          <input
            name="nome"
            required
            placeholder="Nome"
            className="w-full border-b py-3 bg-transparent outline-none"
          />

          {/* Data */}
          <input
            type="date"
            name="data"
            required
            className="w-full border-b py-3 bg-transparent outline-none"
          />

          {/* Hora */}
          <select
            name="hora"
            required
            className="w-full border-b py-3 bg-transparent"
          >
            <option value="">Hora</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>

          {/* Contacto */}
          <input
            name="contacto"
            required
            placeholder="Contacto"
            className="w-full border-b py-3 bg-transparent"
          />

          {/* Pessoas */}
          <select
            name="pessoas"
            required
            className="w-full border-b py-3 bg-transparent"
          >
            <option value="">Pessoas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>

          {/* Notas */}
          <textarea
            name="notas"
            placeholder="Notas adicionais"
            className="w-full border-b py-3 bg-transparent"
          />

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full py-4 bg-[#1e3a5f] text-white tracking-widest"
          >
            {isSubmitting ? "A ENVIAR..." : "SOLICITAR RESERVA"}
          </button>

        </form>
      </div>
    </main>
  );
}