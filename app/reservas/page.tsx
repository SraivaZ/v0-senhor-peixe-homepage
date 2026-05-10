client";

import Link from "next/link";
import { useState } from "react";

// (tudo o teu SVG icons mantém igual acima — não mexi para não quebrar nada)

export default function ReservasPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
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

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">

        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2c3e50]">
            Reservas
          </h1>
        </div>

        {/* FORM FORMSPREE */}
        <form
          action="https://formspree.io/f/meenpror"
          method="POST"
          className="space-y-12"
          onSubmit={() => setIsSubmitting(true)}
        >

          {/* hidden metadata */}
          <input type="hidden" name="_subject" value="Nova Reserva Senhor Peixe" />

          {/* Nome */}
          <div>
            <label className="block text-sm uppercase text-[#5a6c7d]">Nome</label>
            <input
              name="nome"
              required
              className="w-full border-b py-3 bg-transparent"
              placeholder="O seu nome"
            />
          </div>

          {/* Data e Hora */}
          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="date"
              name="data"
              required
              className="border-b py-3 bg-transparent"
            />

            <select
              name="hora"
              required
              className="border-b py-3 bg-transparent"
            >
              <option value="">Hora</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>19:00</option>
              <option>20:00</option>
            </select>

          </div>

          {/* Contacto / Pessoas */}
          <div className="grid md:grid-cols-2 gap-8">

            <input
              name="contacto"
              required
              className="border-b py-3 bg-transparent"
              placeholder="Contacto"
            />

            <select
              name="pessoas"
              required
              className="border-b py-3 bg-transparent"
            >
              <option value="">Pessoas</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

          </div>

          {/* Notas */}
          <textarea
            name="notas"
            rows={3}
            className="w-full border-b py-3 bg-transparent"
            placeholder="Notas adicionais"
          />

          {/* Submit */}
          <button
            type="submit"
            className="px-16 py-4 bg-[#1e3a5f] text-white tracking-[0.25em]"
          >
            {isSubmitting ? "A ENVIAR..." : "SOLICITAR RESERVA"}
          </button>

        </form>
      </div>
    </main>
  );