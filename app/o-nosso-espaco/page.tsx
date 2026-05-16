"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

const translations = {
  pt: {
    close: "Fechar",
    pageTitle: "O Nosso Espaço",
    pageSubtitle:
      "Ambientes pensados para receber com elegância, conforto e vista privilegiada.",
    interior: "Interior",
    exterior: "Exterior",
    privateRoom: "Sala privada",
    upperDeck: "The Upper Deck",
    exclusiveExperience: "Uma Experiência Exclusiva",
    exclusiveDescription:
      "O nosso espaço privado oferece uma vista deslumbrante e um ambiente íntimo para ocasiões especiais. Com capacidade até 50 pessoas, é o local perfeito para jantares de negócios, celebrações familiares ou eventos privados.",
    reservePrivateRoom: "Reservar sala privada",
    footer: "Senhor Peixe — Desde 1999",
    interiorImages: [
      { src: "/images/space/interior-1.jpg", alt: "Sala de jantar principal" },
      { src: "/images/space/interior-2.jpg", alt: "Bar e zona de vinhos" },
      { src: "/images/space/interior-3.jpg", alt: "Detalhes da decoração" },
    ],
    exteriorImages: [
      { src: "/images/space/exterior-1.jpg", alt: "Esplanada com vista rio" },
      { src: "/images/space/exterior-2.jpg", alt: "Terraço ao entardecer" },
      { src: "/images/space/exterior-3.jpg", alt: "Jardim exterior" },
    ],
    upperDeckImages: [
      { src: "/images/space/upper-deck-1.jpg", alt: "Sala privada vista geral" },
      { src: "/images/space/upper-deck-2.jpg", alt: "Detalhes mesa privada" },
    ],
    upperDeckHeroAlt: "The Upper Deck - Vista panorâmica",
  },
  en: {
    close: "Close",
    pageTitle: "The Space",
    pageSubtitle:
      "Spaces designed to welcome guests with elegance, comfort and a privileged view.",
    interior: "Interior",
    exterior: "Exterior",
    privateRoom: "Private room",
    upperDeck: "The Upper Deck",
    exclusiveExperience: "An Exclusive Experience",
    exclusiveDescription:
      "Our private space offers a stunning view and an intimate atmosphere for special occasions. With capacity for up to 50 guests, it is the perfect setting for business dinners, family celebrations or private events.",
    reservePrivateRoom: "Book private room",
    footer: "Senhor Peixe — Since 1999",
    interiorImages: [
      { src: "/images/space/interior-1.jpg", alt: "Main dining room" },
      { src: "/images/space/interior-2.jpg", alt: "Bar and wine area" },
      { src: "/images/space/interior-3.jpg", alt: "Decor details" },
    ],
    exteriorImages: [
      { src: "/images/space/exterior-1.jpg", alt: "Terrace with river view" },
      { src: "/images/space/exterior-2.jpg", alt: "Terrace at sunset" },
      { src: "/images/space/exterior-3.jpg", alt: "Outdoor garden" },
    ],
    upperDeckImages: [
      { src: "/images/space/upper-deck-1.jpg", alt: "Private room overview" },
      { src: "/images/space/upper-deck-2.jpg", alt: "Private table details" },
    ],
    upperDeckHeroAlt: "The Upper Deck - Panoramic view",
  },
} as const

export default function ONossoEspacoPage() {
  const { language } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const t = translations[language]
  const interiorImages = t.interiorImages
  const exteriorImages = t.exteriorImages
  const upperDeckImages = t.upperDeckImages

  const openLightbox = (image: { src: string; alt: string }) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="espaco" />

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
            {t.pageTitle}
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-serif text-sm italic leading-relaxed tracking-[0.08em] text-white/75 sm:text-base">
            {t.pageSubtitle}
          </p>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Interior Section */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.interior}
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {interiorImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      </div>

      {/* Exterior Section */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.exterior}
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {exteriorImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      </div>

      {/* The Upper Deck Section */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.privateRoom}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.upperDeck}
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

          {/* Hero Image with Text Overlay */}
          <div className="relative mb-10 overflow-hidden rounded-2xl shadow-xl">
            <button
              onClick={() =>
                openLightbox({
                  src: "/images/space/upper-deck-hero.jpg",
                  alt: t.upperDeckHeroAlt,
                })
              }
              className="w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
            >
              <div className="relative aspect-[4/5] sm:aspect-[21/9]">
                <Image
                  src="/images/space/upper-deck-hero.jpg"
                  alt={t.upperDeckHeroAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white sm:p-10 md:p-12">
                  <h3 className="mb-3 font-serif text-2xl tracking-wide sm:text-3xl">
                    {t.exclusiveExperience}
                  </h3>

                  <p className="max-w-2xl font-serif text-sm leading-relaxed text-white/90 sm:text-base">
                    {t.exclusiveDescription}
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Additional Gallery Images */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {upperDeckImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            ))}
          </div>

          {/* Reservation CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/reservas"
              className="inline-flex min-w-56 items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(16,36,61,0.18)] transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d] hover:text-[#f8ead8] hover:shadow-[0_0_0_1px_rgba(200,169,106,0.45),0_18px_42px_rgba(16,36,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
            >
              {t.reservePrivateRoom}
            </Link>
          </div>
        </div>
      </section>

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
            {t.footer}
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-10 text-white/80 transition-colors hover:text-white"
            aria-label={t.close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-8 w-8"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="h-full max-h-[85vh] w-full rounded-lg object-contain"
            />

            <p className="mt-4 text-center font-serif text-sm text-white/70">
              {currentImage.alt}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}