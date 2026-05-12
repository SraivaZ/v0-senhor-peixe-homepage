"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const menuCategories = [
  { id: "entradas", label: "Entradas" },
  { id: "especialidades-mar", label: "Especialidades do Mar" },
  { id: "especialidades-terra", label: "Especialidades da Terra" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "sobremesas", label: "Sobremesas" },
]

const menuItems = {
  entradas: [
    {
      name: "Camarão ao Alho",
      description: "Camarões salteados com alho, azeite e ervas aromáticas",
      image: "/images/dishes/camarao-alho.jpg",
    },
    {
      name: "Percebes",
      description: "Percebes frescos cozidos ao natural com sal marinho",
      image: "/images/dishes/percebes.jpg",
    },
    {
      name: "Ameijoas à Bulhão Pato",
      description: "Ameijoas salteadas com alho, coentros e vinho branco",
      image: "/images/dishes/camarao-alho.jpg",
    },
    {
      name: "Peixinhos da Horta",
      description: "Feijão verde empanado servido com molho tártaro caseiro",
      image: "/images/dishes/percebes.jpg",
    },
  ],
  "especialidades-mar": [
    {
      name: "Robalo Grelhado",
      description: "Robalo fresco grelhado com azeite e limão, servido com legumes",
      image: "/images/dishes/robalo-grelhado.jpg",
    },
    {
      name: "Cataplana de Marisco",
      description: "Tradicional cataplana com camarão, amêijoas, mexilhão e peixe",
      image: "/images/dishes/cataplana.jpg",
    },
    {
      name: "Bacalhau à Brás",
      description: "Bacalhau desfiado com batata palha, ovos e azeitonas",
      image: "/images/dishes/robalo-grelhado.jpg",
    },
    {
      name: "Arroz de Tamboril",
      description: "Arroz cremoso de tamboril com gambas e coentros",
      image: "/images/dishes/cataplana.jpg",
    },
  ],
  "especialidades-terra": [
    {
      name: "Bife à Café de Paris",
      description: "Bife da vazia grelhado com manteiga aromatizada especial",
      image: "/images/dishes/bife-cafe.jpg",
    },
    {
      name: "Secretos de Porco Preto",
      description: "Secretos de porco ibérico grelhados na perfeição",
      image: "/images/dishes/bife-cafe.jpg",
    },
    {
      name: "Picanha na Brasa",
      description: "Picanha grelhada no ponto, servida com arroz e farofa",
      image: "/images/dishes/bife-cafe.jpg",
    },
    {
      name: "Lombinho de Vitela",
      description: "Lombinho de vitela grelhado com molho de cogumelos",
      image: "/images/dishes/bife-cafe.jpg",
    },
  ],
  acompanhamentos: [
    {
      name: "Batatas a Murro",
      description: "Batatas assadas esmagadas com alho e azeite",
      image: "/images/dishes/batatas.jpg",
    },
    {
      name: "Legumes Grelhados",
      description: "Seleção de legumes da época grelhados com ervas",
      image: "/images/dishes/batatas.jpg",
    },
    {
      name: "Arroz de Tomate",
      description: "Arroz aromático com tomate fresco e manjericão",
      image: "/images/dishes/batatas.jpg",
    },
    {
      name: "Espinafres Salteados",
      description: "Espinafres frescos salteados com alho e azeite",
      image: "/images/dishes/batatas.jpg",
    },
  ],
  sobremesas: [
    {
      name: "Pastel de Nata",
      description: "Tradicional pastel de nata com canela e açúcar em pó",
      image: "/images/dishes/pastel-nata.jpg",
    },
    {
      name: "Mousse de Chocolate",
      description: "Mousse de chocolate negro com crocante de amêndoa",
      image: "/images/dishes/pastel-nata.jpg",
    },
    {
      name: "Arroz Doce",
      description: "Arroz doce cremoso com canela, receita tradicional",
      image: "/images/dishes/pastel-nata.jpg",
    },
    {
      name: "Tarte de Amêndoa",
      description: "Tarte de amêndoa do Algarve com gelado de baunilha",
      image: "/images/dishes/pastel-nata.jpg",
    },
  ],
}

export default function GastronomiaPage() {
  const [activeSection, setActiveSection] = useState("entradas")
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 120)

      const sections = menuCategories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }))

      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const navHeight = window.innerWidth < 640 ? 82 : 92
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Floating Site Menu */}
      <div className="fixed left-4 top-4 z-[80] sm:left-6 sm:top-5">
        {isMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[70] cursor-default"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="relative z-[90]">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="gastronomia-site-menu"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:text-white"
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
              id="gastronomia-site-menu"
              className="mt-4 max-h-[calc(100vh-110px)] w-64 overflow-y-auto rounded-2xl border border-white/20 bg-[#10243d]/95 p-3 shadow-2xl backdrop-blur-xl"
            >
              <nav aria-label="Menu principal">
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
                    Início
                  </Link>

                  <Link
                    href="/gastronomia"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl bg-white/10 px-4 py-3 font-serif text-sm tracking-wide text-[#c8a96a] transition-all duration-300"
                  >
                    Gastronomia
                  </Link>

                  <Link
                    href="/garrafeira"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Garrafeira
                  </Link>

                  <Link
                    href="/o-nosso-espaco"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    O Nosso Espaço
                  </Link>
                </div>

                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="space-y-1">
                  <Link
                    href="/reservas"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Reservas
                  </Link>

                  <Link
                    href="/contactos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Contactos
                  </Link>

                  <Link
                    href="/sobre-nos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-sm tracking-wide text-white/78 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Sobre Nós
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Header with Background */}
      <header className="relative h-[360px] overflow-hidden sm:h-[430px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/RpWCc7kM/Chat-GPT-Image-12-05-2026-00-30-57.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        </div>

        {/* Central Logo */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center pb-20 text-center">
          <img
            src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
            alt="Senhor Peixe Logo"
            className="mb-4 h-16 w-16 object-contain drop-shadow-lg sm:h-20 sm:w-20"
          />

          <span className="font-serif text-xs uppercase tracking-[0.35em] text-white/80">
            Senhor Peixe
          </span>

          <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-white sm:text-5xl">
            Menu
          </h1>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-30 -mt-[76px] transition-all duration-500 ${
          isHeaderScrolled
            ? "border-b border-white/10 bg-[#10243d]/95 shadow-xl backdrop-blur-xl"
            : "border-y border-white/15 bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-6xl px-0 sm:px-4">
          <div
            className={`transition-all duration-500 ${
              isHeaderScrolled ? "py-3" : "py-4"
            }`}
          >
            {isHeaderScrolled && (
              <div className="mb-3 text-center">
                <span className="font-serif text-xs uppercase tracking-[0.35em] text-white/70">
                  Senhor Peixe
                </span>
              </div>
            )}

            <div className="w-full overflow-x-auto overflow-y-hidden px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ul className="flex min-w-max items-center justify-start gap-2 sm:justify-center sm:gap-3">
                {menuCategories.map((category) => (
                  <li key={category.id} className="shrink-0">
                    <button
                      onClick={() => scrollToSection(category.id)}
                      className={`whitespace-nowrap rounded-md border px-4 py-2 font-serif text-xs tracking-wide transition-all duration-300 sm:text-sm ${
                        activeSection === category.id
                          ? "border-white/35 bg-white/18 text-white"
                          : "border-white/15 bg-white/5 text-white/75 hover:border-white/35 hover:bg-white/12 hover:text-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-16 scroll-mt-24 sm:scroll-mt-28"
          >
            {/* Section Title with Divider */}
            {categoryIndex > 0 && (
              <div className="mb-12 flex items-center justify-center">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
              </div>
            )}

            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  {category.label}
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

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {menuItems[category.id as keyof typeof menuItems]?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Dish Image */}
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Dish Info */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-base font-medium uppercase tracking-wide text-stone-800 sm:text-lg">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#1e3a5f]/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Full Menu PDF */}
        <section className="mt-20 scroll-mt-24 sm:scroll-mt-28">
          <div className="mb-12 flex items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              Carta completa
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                Menu completo
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

            <p className="mx-auto mt-6 max-w-xl font-serif text-sm leading-relaxed text-[#5f7285] sm:text-base">
              Aqui pode consultar a nossa carta completa, com todos os produtos
              disponíveis e respetiva seleção gastronómica.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="/docs/carta-senhor-peixe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-56 items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#10243d]"
              >
                Abrir carta
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] py-8 text-center">
        <Link href="/" className="inline-block group">
          <img
            src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
            alt="Senhor Peixe Logo"
            className="mx-auto h-16 w-16 object-contain"
          />
        </Link>

        <p className="mt-3 font-serif text-xs uppercase tracking-[0.2em] text-white/60">
          Senhor Peixe — Desde 1999
        </p>
      </footer>
    </main>
  )
}