"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

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

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Senhor+Peixe/@38.7711153,-9.0950749,17z/data=!4m15!1m8!3m7!1s0xd19318fae5b0243:0x774590368c5ec79b!2sR.+da+Pimenta+35,+Parque+das+Na%C3%A7%C3%B5es,+1990-254+Lisboa!3b1!8m2!3d38.7711111!4d-9.0925!16s%2Fg%2F11rg64rhkz!3m5!1s0xd19337acbb1ab1b:0xeb80fb06738c323!8m2!3d38.7710801!4d-9.0923458!16s%2Fg%2F1tjfj34m?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"

const INSTAGRAM_URL = "https://www.instagram.com/restaurante.senhor.peixe/"
const FACEBOOK_URL = "https://facebook.com"
const TRIPADVISOR_URL =
  "https://www.tripadvisor.pt/Restaurant_Review-g189158-d1163802-Reviews-Sr_Peixe-Lisbon_Lisbon_District_Central_Portugal.html"

const translations = {
  pt: {
    pageTitle: "Sobre Nós",
    pageSubtitle:
      "Uma história ligada ao mar, à frescura e à tradição portuguesa.",

    introSmallTitle: "A nossa essência",
    introTitle: "Do mar, para o seu prato",
    introText:
      "O Senhor Peixe Restaurante Marisqueira abriu as portas ao público a 11 de Março de 1999 em Lisboa, com um pé no rio Tejo. Situado no Parque das Nações, o nosso restaurante tem como missão trazer-lhe o melhor que o mar nos oferece. Peixe fresco, marisco e uma seleção de vinhos que temos a confiança que o vai deixar muito satisfeito.",
    introQuote: "É Setúbal em Lisboa... e o mar no seu prato.",

    secondSmallTitle: "Tradição e frescura",
    secondTitle: "Setúbal aqui tão perto",
    secondText:
      "Setúbal em Lisboa, com tudo o que o mar dá. Peixes vivos, grelhados no carvão de azinho e mariscos. Mas não faltará a saladinha de polvo, o choco frito, o escabeche. E ainda os moscatéis, os vinhos, os queijos de Azeitão e a doçaria... ou mesmo o bife da vazia para desenjoar.",

    whereWeAre: "Onde estamos",
    addressTitle: "Morada",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisboa",
    viewLocation: "Ver localização",

    visitTitle: "Quando nos visita",
    scheduleTitle: "Horário",
    tuesdayToSaturday: "Terça a Sábado",
    sunday: "Domingo",

    footer: "Senhor Peixe — Desde 1999",

    imageAltTejo: "Vista do Rio Tejo no Parque das Nações",
    imageAltSeafood: "Marisco fresco",
    imageAltExterior: "Exterior do restaurante Senhor Peixe",
  },
  en: {
    pageTitle: "About Us",
    pageSubtitle:
      "A story connected to the sea, freshness and Portuguese tradition.",

    introSmallTitle: "Our essence",
    introTitle: "From the sea, to your plate",
    introText:
      "Senhor Peixe Restaurante Marisqueira opened its doors to the public on March 11, 1999 in Lisbon, with the Tagus River close by. Located in Parque das Nações, our restaurant’s mission is to bring you the very best the sea has to offer. Fresh fish, seafood and a wine selection that we are confident will leave you very satisfied.",
    introQuote: "Setúbal in Lisbon... and the sea on your plate.",

    secondSmallTitle: "Tradition and freshness",
    secondTitle: "Setúbal so close by",
    secondText:
      "Setúbal in Lisbon, with everything the sea provides. Live fish, grilled over holm oak charcoal, and seafood. There is also octopus salad, fried cuttlefish, escabeche, moscatel wines, wines, Azeitão cheeses and traditional sweets... or even a sirloin steak for those looking for something different.",

    whereWeAre: "Where we are",
    addressTitle: "Address",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisbon",
    viewLocation: "View location",

    visitTitle: "When to visit us",
    scheduleTitle: "Opening Hours",
    tuesdayToSaturday: "Tuesday to Saturday",
    sunday: "Sunday",

    footer: "Senhor Peixe — Since 1999",

    imageAltTejo: "View of the Tagus River in Parque das Nações",
    imageAltSeafood: "Fresh seafood",
    imageAltExterior: "Exterior of Senhor Peixe restaurant",
  },
} as const

export default function SobreNosPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="sobre" />

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

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Intro Title */}
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.introSmallTitle}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.introTitle}
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

          {/* Section 1 */}
          <section className="mb-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-base leading-relaxed text-[#5f7285] sm:text-lg">
                {t.introText}
              </p>

              <p className="mt-8 font-serif text-lg italic leading-relaxed text-[#10243d] sm:text-xl">
                {t.introQuote}
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-72 w-full sm:h-96">
                <Image
                  src="/images/about/tejo-river.jpg"
                  alt={t.imageAltTejo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-auto mb-16 max-w-5xl">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          {/* Section 2 Title */}
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.secondSmallTitle}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.secondTitle}
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

          {/* Section 2 */}
          <section className="mb-20">
            <p className="mx-auto mb-12 max-w-3xl text-center font-serif text-base leading-relaxed text-[#5f7285] sm:text-lg">
              {t.secondText}
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-80">
                <Image
                  src="/images/about/fresh-seafood.jpg"
                  alt={t.imageAltSeafood}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-80">
                <Image
                  src="/images/about/restaurant-exterior.jpg"
                  alt={t.imageAltExterior}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </div>
          </section>

          {/* Decorative Divider - only lines */}
          <div className="mb-16 flex items-center justify-center">
            <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#c8a96a]/60 to-transparent" />
          </div>

          {/* Info Cards */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.whereWeAre}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.addressTitle}
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <p className="mx-auto mt-6 max-w-sm font-serif text-base leading-relaxed text-[#5f7285]">
                {t.address}
              </p>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-6 py-3 font-serif text-xs uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(16,36,61,0.18)] transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d] hover:text-[#f8ead8] hover:shadow-[0_0_0_1px_rgba(200,169,106,0.45),0_18px_42px_rgba(16,36,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
              >
                {t.viewLocation}
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.visitTitle}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.scheduleTitle}
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <div className="mt-6 space-y-3 font-serif text-base leading-relaxed text-[#5f7285]">
                <p>{t.tuesdayToSaturday}</p>
                <p className="text-[#10243d]">12:00-15:30 / 19:00-22:30</p>

                <p className="pt-3">{t.sunday}</p>
                <p className="text-[#10243d]">12:00-15:30</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Social Icons */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6 md:gap-4">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="TripAdvisor"
        >
          <TripAdvisorIcon className="h-6 w-6 md:h-7 md:w-7" />
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
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  )
}