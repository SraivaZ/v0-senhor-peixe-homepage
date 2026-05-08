"use client"

import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"
import { FishLogo } from "@/components/fish-logo"

const wineRegions = [
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
]

export default function GarrafeiraPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/90 backdrop-blur-sm">
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

          <Link href="/" className="flex flex-col items-center">
            <FishLogo className="w-10 h-10 text-[#1e3a5f]" />
            <span className="font-serif text-xs tracking-[0.3em] text-[#1e3a5f] mt-1">SENHOR PEIXE</span>
          </Link>

          <div className="w-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/garrafeira-hero.jpg"
          alt="Garrafeira Senhor Peixe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#faf9f7]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[0.2em] drop-shadow-lg">
              GARRAFEIRA
            </h1>
            <p className="font-serif text-lg text-white/90 mt-4 tracking-[0.15em] italic drop-shadow-md">
              Uma seleção criteriosa dos melhores vinhos portugueses
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl text-[#1e3a5f] tracking-[0.15em]">CARTA DE VINHOS</h2>
          <div className="w-16 h-0.5 bg-[#c9a959] mx-auto mt-4" />
        </div>

        {/* Embedded Wine List (styled as PDF document) */}
        <div className="bg-white rounded-sm shadow-2xl shadow-black/10 border border-[#e8e6e3] overflow-hidden">
          {/* Document Header */}
          <div className="bg-[#1e3a5f] px-8 py-6 text-center">
            <FishLogo className="w-12 h-12 text-white mx-auto mb-2" />
            <h3 className="font-serif text-xl text-white tracking-[0.2em]">SENHOR PEIXE</h3>
            <p className="font-serif text-sm text-white/70 tracking-[0.1em] mt-1">CARTA DE VINHOS</p>
          </div>

          {/* Scrollable Wine List */}
          <div className="max-h-[70vh] overflow-y-auto scroll-smooth">
            <div className="px-8 md:px-16 py-12 space-y-16">
              {wineRegions.map((region, index) => (
                <div key={region.region}>
                  {/* Region Title */}
                  <div className="text-center mb-10">
                    <h4 className="font-serif text-xl text-[#1e3a5f] tracking-[0.2em]">{region.region}</h4>
                    <div className="flex items-center justify-center gap-4 mt-3">
                      <div className="h-px w-12 bg-[#c9a959]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a959]" />
                      <div className="h-px w-12 bg-[#c9a959]" />
                    </div>
                  </div>

                  {/* Wines */}
                  <div className="space-y-8">
                    {region.wines.map((wine) => (
                      <div key={wine.name} className="group">
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="flex-1">
                            <h5 className="font-serif text-base text-[#2d3748] tracking-wide">
                              {wine.name}
                              <span className="text-[#718096] ml-2">{wine.year}</span>
                            </h5>
                            <p className="text-sm text-[#a0aec0] mt-1 italic">{wine.grape}</p>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="hidden md:inline-block flex-shrink-0 w-24 border-b border-dotted border-[#e2e8f0]" />
                            <span className="font-serif text-[#1e3a5f] whitespace-nowrap">{wine.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Section Divider */}
                  {index < wineRegions.length - 1 && (
                    <div className="mt-16 flex items-center justify-center">
                      <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#e8e6e3] to-transparent" />
                    </div>
                  )}
                </div>
              ))}

              {/* Footer Note */}
              <div className="text-center pt-8 pb-4 border-t border-[#e8e6e3]">
                <p className="font-serif text-sm text-[#a0aec0] italic">
                  Preços sujeitos a disponibilidade. IVA incluído.
                </p>
                <p className="font-serif text-xs text-[#cbd5e0] mt-2 tracking-[0.1em]">
                  SENHOR PEIXE — DESDE 1999
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-10">
          <a
            href="/carta-vinhos.pdf"
            download
            className="inline-flex items-center gap-3 font-serif text-sm tracking-[0.15em] text-[#1e3a5f] border border-[#1e3a5f] px-8 py-3 hover:bg-[#1e3a5f] hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            DESCARREGAR PDF
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#e8e6e3]">
        <Link href="/">
          <FishLogo className="w-10 h-10 text-[#1e3a5f] mx-auto mb-3 hover:text-[#2c5282] transition-colors" />
        </Link>
        <p className="font-serif text-sm text-[#a0aec0] tracking-[0.15em]">DESDE 1999</p>
      </footer>
    </div>
  )
}
