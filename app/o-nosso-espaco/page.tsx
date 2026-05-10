"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FishLogo } from "@/components/fish-logo"

const interiorImages = [
  { src: "/images/space/interior-1.jpg", alt: "Sala de jantar principal" },
  { src: "/images/space/interior-2.jpg", alt: "Bar e zona de vinhos" },
  { src: "/images/space/interior-3.jpg", alt: "Detalhes da decoração" },
]

const exteriorImages = [
  { src: "/images/space/exterior-1.jpg", alt: "Esplanada com vista rio" },
  { src: "/images/space/exterior-2.jpg", alt: "Terraço ao entardecer" },
  { src: "/images/space/exterior-3.jpg", alt: "Jardim exterior" },
]

const upperDeckImages = [
  { src: "/images/space/upper-deck-1.jpg", alt: "Sala privada vista geral" },
  { src: "/images/space/upper-deck-2.jpg", alt: "Detalhes mesa privada" },
]

export default function ONossoEspacoPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const openLightbox = (image: { src: string; alt: string }) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Home Icon */}
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

          {/* Center Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <img
  src="https://i.ibb.co/mCtT8PJ5/so-peixe-sem-olho.png"
  alt="Senhor Peixe Logo"
  className="w-16 h-16 object-contain"
/>
            <span className="font-serif text-sm tracking-[0.3em] text-[#1e3a5f] mt-1">
              SENHOR PEIXE
            </span>
          </Link>

          {/* Spacer for balance */}
          <div className="w-7" />
        </div>
      </header>

      {/* Interior Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#1e3a5f]">
              INTERIOR
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a55a] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interiorImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9a55a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Exterior Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#1e3a5f]">
              EXTERIOR
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a55a] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exteriorImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9a55a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* The Upper Deck Section - Premium Highlight */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-[#1e3a5f]">
              THE UPPER DECK
            </h2>
            <div className="w-16 h-0.5 bg-[#c9a55a] mx-auto mt-3" />
            <p className="font-serif italic text-[#1e3a5f]/70 mt-4 text-lg">
              Sala Privada
            </p>
          </div>

          {/* Hero Image with Text Overlay */}
          <div className="relative mb-10 rounded-xl overflow-hidden">
            <button
              onClick={() =>
                openLightbox({
                  src: "/images/space/upper-deck-hero.jpg",
                  alt: "The Upper Deck - Vista panorâmica",
                })
              }
              className="w-full focus:outline-none focus:ring-2 focus:ring-[#c9a55a] focus:ring-offset-2 rounded-xl"
            >
              <div className="relative aspect-[21/9]">
                <Image
                  src="/images/space/upper-deck-hero.jpg"
                  alt="The Upper Deck - Vista panorâmica"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-3">
                    Uma Experiência Exclusiva
                  </h3>
                  <p className="font-serif text-white/90 max-w-2xl text-sm md:text-base leading-relaxed">
                    O nosso espaço privado oferece uma vista deslumbrante e um
                    ambiente íntimo para ocasiões especiais. Com capacidade até
                    20 pessoas, é o local perfeito para jantares de negócios,
                    celebrações familiares ou eventos privados.
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Additional Gallery Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upperDeckImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9a55a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* Reservation CTA */}
          <div className="text-center mt-12">
            <Link
              href="/reservas"
              className="inline-block font-serif text-sm tracking-[0.2em] text-[#1e3a5f] border border-[#1e3a5f] px-8 py-3 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-300"
            >
              RESERVAR SALA PRIVADA
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-block">
          <img
  src="https://i.ibb.co/mCtT8PJ5/so-peixe-sem-olho.png"
  alt="Senhor Peixe Logo"
  className="w-20 h-20 object-contain mx-auto"
/>
          </Link>
          <p className="font-serif text-xs tracking-[0.3em] text-[#1e3a5f]/60 mt-4">
            DESDE 1999
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fechar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-8 h-8"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh] rounded-lg"
            />
            <p className="text-white/70 text-center mt-4 font-serif text-sm">
              {currentImage.alt}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
