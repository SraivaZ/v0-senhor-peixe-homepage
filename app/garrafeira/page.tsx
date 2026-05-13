"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

const translations = {
  pt: {
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    mainMenu: "Menu principal",
    home: "Início",
    gastronomy: "Gastronomia",
    wine: "Garrafeira",
    space: "O Nosso Espaço",
    reservations: "Reservas",
    contacts: "Contactos",
    about: "Sobre Nós",
    pageTitle: "Garrafeira",
    pageSubtitle: "Uma seleção criteriosa dos melhores vinhos portugueses.",
    wineSelection: "Seleção de vinhos",
    wineListTitle: "Carta de Vinhos",
    wineListDescription:
      "Uma carta pensada para acompanhar a nossa cozinha, com referências nacionais cuidadosamente selecionadas.",
    fullCarta: "Carta completa",
    wines: "Vinhos",
    fullWineDescription:
      "Aqui pode consultar a nossa carta de vinhos completa, com todas as referências disponíveis.",
    openCarta: "Abrir carta",
    footer: "Senhor Peixe — Desde 1999",
    language: "English",
    languageLabel: "Mudar para inglês",
    wineRegions: [
      {
        region: "DOURO",
        wines: [
          { name: "Quinta do Crasto Reserva", year: "2019", grape: "Touriga Nacional, Tinta Roriz", price: "45€" },
          { name: "Niepoort Redoma", year: "2020", grape: "Touriga Franca, Tinta Amarela", price: "38€" },
          { name: "Quinta do Vale Meão", year: "2018", grape: "Touriga Nacional", price: "85€" },
          { name: "Prats & Symington Chryseia", year: "2019", grape: "Touriga Nacional, Touriga Franca", price: "95€" },
        ],
      },
      {
        region: "ALENTEJO",
        wines: [
          { name: "Herdade do Esporão Reserva", year: "2020", grape: "Aragonez, Trincadeira", price: "32€" },
          { name: "Mouchão Tonel 3-4", year: "2017", grape: "Alicante Bouschet", price: "55€" },
          { name: "Cartuxa Colheita", year: "2021", grape: "Aragonez, Trincadeira", price: "28€" },
          { name: "Quinta do Mouro", year: "2018", grape: "Aragonez", price: "48€" },
        ],
      },
      {
        region: "DÃO",
        wines: [
          { name: "Quinta dos Roques Reserva", year: "2019", grape: "Touriga Nacional, Alfrocheiro", price: "35€" },
          { name: "Casa da Passarella O Oenólogo", year: "2018", grape: "Touriga Nacional", price: "42€" },
          { name: "Álvaro Castro Reserva", year: "2020", grape: "Touriga Nacional, Tinta Roriz", price: "38€" },
        ],
      },
      {
        region: "VINHOS VERDES",
        wines: [
          { name: "Soalheiro Alvarinho", year: "2022", grape: "Alvarinho", price: "22€" },
          { name: "Anselmo Mendes Contacto", year: "2022", grape: "Alvarinho", price: "18€" },
          { name: "Quinta de Azevedo", year: "2022", grape: "Loureiro, Alvarinho", price: "15€" },
        ],
      },
      {
        region: "BAIRRADA",
        wines: [
          { name: "Luís Pato Vinha Pan", year: "2019", grape: "Baga", price: "45€" },
          { name: "Sidónio de Sousa Garrafeira", year: "2015", grape: "Baga", price: "65€" },
          { name: "Campolargo Baga", year: "2018", grape: "Baga", price: "38€" },
        ],
      },
      {
        region: "CHAMPAGNES & ESPUMANTES",
        wines: [
          { name: "Dom Pérignon", year: "2012", grape: "Chardonnay, Pinot Noir", price: "280€" },
          { name: "Veuve Clicquot Brut", year: "NV", grape: "Pinot Noir, Chardonnay", price: "85€" },
          { name: "Murganheira Czar", year: "2018", grape: "Pinot Noir, Chardonnay", price: "35€" },
        ],
      },
    ],
  },
  en: {
    closeMenu: "Close menu",
    openMenu: "Open menu",
    mainMenu: "Main menu",
    home: "Home",
    gastronomy: "Gastronomy",
    wine: "Wine Cellar",
    space: "The Space",
    reservations: "Reservations",
    contacts: "Contacts",
    about: "About Us",
    pageTitle: "Wine Cellar",
    pageSubtitle: "A carefully curated selection of the finest Portuguese wines.",
    wineSelection: "Wine selection",
    wineListTitle: "Wine List",
    wineListDescription:
      "A wine list designed to complement our cuisine, with carefully selected Portuguese references.",
    fullCarta: "Full list",
    wines: "Wines",
    fullWineDescription:
      "Here you can view our complete wine list, with all available references.",
    openCarta: "Open list",
    footer: "Senhor Peixe — Since 1999",
    language: "Português",
    languageLabel: "Switch to Portuguese",
    wineRegions: [
      {
        region: "DOURO",
        wines: [
          { name: "Quinta do Crasto Reserva", year: "2019", grape: "Touriga Nacional, Tinta Roriz", price: "45€" },
          { name: "Niepoort Redoma", year: "2020", grape: "Touriga Franca, Tinta Amarela", price: "38€" },
          { name: "Quinta do Vale Meão", year: "2018", grape: "Touriga Nacional", price: "85€" },
          { name: "Prats & Symington Chryseia", year: "2019", grape: "Touriga Nacional, Touriga Franca", price: "95€" },
        ],
      },
      {
        region: "ALENTEJO",
        wines: [
          { name: "Herdade do Esporão Reserva", year: "2020", grape: "Aragonez, Trincadeira", price: "32€" },
          { name: "Mouchão Tonel 3-4", year: "2017", grape: "Alicante Bouschet", price: "55€" },
          { name: "Cartuxa Colheita", year: "2021", grape: "Aragonez, Trincadeira", price: "28€" },
          { name: "Quinta do Mouro", year: "2018", grape: "Aragonez", price: "48€" },
        ],
      },
      {
        region: "DÃO",
        wines: [
          { name: "Quinta dos Roques Reserva", year: "2019", grape: "Touriga Nacional, Alfrocheiro", price: "35€" },
          { name: "Casa da Passarella O Oenólogo", year: "2018", grape: "Touriga Nacional", price: "42€" },
          { name: "Álvaro Castro Reserva", year: "2020", grape: "Touriga Nacional, Tinta Roriz", price: "38€" },
        ],
      },
      {
        region: "VINHO VERDE",
        wines: [
          { name: "Soalheiro Alvarinho", year: "2022", grape: "Alvarinho", price: "22€" },
          { name: "Anselmo Mendes Contacto", year: "2022", grape: "Alvarinho", price: "18€" },
          { name: "Quinta de Azevedo", year: "2022", grape: "Loureiro, Alvarinho", price: "15€" },
        ],
      },
      {
        region: "BAIRRADA",
        wines: [
          { name: "Luís Pato Vinha Pan", year: "2019", grape: "Baga", price: "45€" },
          { name: "Sidónio de Sousa Garrafeira", year: "2015", grape: "Baga", price: "65€" },
          { name: "Campolargo Baga", year: "2018", grape: "Baga", price: "38€" },
        ],
      },
      {
        region: "CHAMPAGNES & SPARKLING WINES",
        wines: [
          { name: "Dom Pérignon", year: "2012", grape: "Chardonnay, Pinot Noir", price: "280€" },
          { name: "Veuve Clicquot Brut", year: "NV", grape: "Pinot Noir, Chardonnay", price: "85€" },
          { name: "Murganheira Czar", year: "2018", grape: "Pinot Noir, Chardonnay", price: "35€" },
        ],
      },
    ],
  },
} as const

export default function GarrafeiraPage() {
  const { language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = translations[language]
  const wineRegions = t.wineRegions

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

  function handleToggleLanguage() {
    toggleLanguage()
    setIsMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Floating Site Menu */}
      <div className="fixed left-4 top-4 z-[80] sm:left-6 sm:top-5">
        {isMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[70] cursor-default"
            aria-label={t.closeMenu}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="relative z-[90]">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="garrafeira-site-menu"
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
              id="garrafeira-site-menu"
              className="mt-4 max-h-[calc(100vh-110px)] w-64 overflow-y-auto rounded-2xl border border-white/20 bg-[#10243d]/95 p-3 shadow-2xl backdrop-blur-xl"
            >
              <nav aria-label={t.mainMenu}>
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
                    {t.home}
                  </Link>

                  <Link
                    href="/gastronomia"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {t.gastronomy}
                  </Link>

                  <Link
                    href="/garrafeira"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl bg-white/10 px-4 py-3 font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300"
                  >
                    {t.wine}
                  </Link>

                  <Link
                    href="/o-nosso-espaco"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {t.space}
                  </Link>
                </div>

                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="space-y-1">
                  <Link
                    href="/reservas"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {t.reservations}
                  </Link>

                  <Link
                    href="/contactos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {t.contacts}
                  </Link>

                  <Link
                    href="/sobre-nos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {t.about}
                  </Link>
                </div>

                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <button
                  type="button"
                  onClick={handleToggleLanguage}
                  aria-label={t.languageLabel}
                  className="block w-full rounded-xl px-4 py-3 text-left font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {t.language}
                </button>
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

      {/* Wine List Content */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
            {t.wineSelection}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="font-serif text-lg text-[#10243d]">-</span>

            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.22em] sm:tracking-[0.32em] text-[#10243d] uppercase">
              {t.wineListTitle}
            </h2>

            <span className="font-serif text-lg text-[#10243d]">-</span>
          </div>

          <div
            className="mx-auto mt-4 flex w-24 flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="h-px w-24 bg-[#e2bd93]/80" />
            <span className="h-px w-20 bg-[#e2bd93]/55" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-serif text-sm sm:text-base leading-relaxed text-[#5f7285]">
            {t.wineListDescription}
          </p>
        </div>

        <div className="space-y-16">
          {wineRegions.map((region, regionIndex) => (
            <section key={region.region}>
              {regionIndex > 0 && (
                <div className="flex items-center justify-center mb-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
                </div>
              )}

              <div className="text-center mb-12">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                  <span className="font-serif text-lg text-[#10243d]">-</span>

                  <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.22em] sm:tracking-[0.32em] text-[#10243d] uppercase">
                    {region.region}
                  </h3>

                  <span className="font-serif text-lg text-[#10243d]">-</span>
                </div>

                <div
                  className="mx-auto mt-4 flex w-24 flex-col items-center gap-1"
                  aria-hidden="true"
                >
                  <span className="h-px w-24 bg-[#e2bd93]/80" />
                  <span className="h-px w-20 bg-[#e2bd93]/55" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                {region.wines.map((wine) => (
                  <div key={wine.name} className="group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-serif text-base sm:text-lg font-medium uppercase tracking-wide text-stone-800">
                          {wine.name}
                          <span className="ml-2 text-sm text-stone-400">
                            {wine.year}
                          </span>
                        </h4>

                        <p className="mt-1 text-sm leading-relaxed text-[#1e3a5f]/80 italic">
                          {wine.grape}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-3 pt-1">
                        <span className="hidden w-16 border-b border-dotted border-stone-300 md:inline-block" />
                        <span className="font-serif text-base text-[#10243d] whitespace-nowrap">
                          {wine.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Full Wine PDF */}
        <section className="mt-20 scroll-mt-28">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.fullCarta}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="font-serif text-lg text-[#10243d]">-</span>

              <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.22em] sm:tracking-[0.32em] text-[#10243d] uppercase">
                {t.wines}
              </h2>

              <span className="font-serif text-lg text-[#10243d]">-</span>
            </div>

            <div
              className="mx-auto mt-4 flex w-24 flex-col items-center gap-1"
              aria-hidden="true"
            >
              <span className="h-px w-24 bg-[#e2bd93]/80" />
              <span className="h-px w-20 bg-[#e2bd93]/55" />
            </div>

            <p className="mx-auto mt-6 max-w-xl font-serif text-sm sm:text-base leading-relaxed text-[#5f7285]">
              {t.fullWineDescription}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="/docs/carta-vinhos-senhor-peixe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-56 items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm tracking-[0.18em] text-white uppercase transition-all duration-300 hover:bg-[#10243d]"
              >
                {t.openCarta}
              </a>
            </div>
          </div>
        </section>
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
              className="w-16 h-16 object-contain mx-auto"
            />
          </Link>

          <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-serif mt-3">
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  )
}