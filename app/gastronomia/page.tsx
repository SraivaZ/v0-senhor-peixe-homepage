"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

const translations = {
  pt: {
    pageTitle: "Menu",
    fullCarta: "Carta completa",
    fullMenu: "Menu completo",
    fullMenuDescription:
      "Aqui pode consultar a nossa carta completa, com todos os produtos disponíveis e respetiva seleção gastronómica.",
    openCarta: "Abrir carta",
    openBeveragesCarta: "Carta bebidas",
    openDessertsCarta: "Carta sobremesas",
    footer: "Senhor Peixe — Desde 1999",
    menuCategories: [
      { id: "entradas", label: "Entradas" },
      { id: "especialidades-mar", label: "Especialidades do Mar" },
      { id: "especialidades-terra", label: "Especialidades da Terra" },
      { id: "acompanhamentos", label: "Acompanhamentos" },
      { id: "sobremesas", label: "Sobremesas" },
    ],
    menuItems: {
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
    },
  },
  en: {
    pageTitle: "Menu",
    fullCarta: "Full menu",
    fullMenu: "Complete Menu",
    fullMenuDescription:
      "Here you can view our complete menu, with all available products and the respective gastronomic selection.",
    openCarta: "Open menu",
    openBeveragesCarta: "Drinks menu",
    openDessertsCarta: "Desserts menu",
    footer: "Senhor Peixe — Since 1999",
    menuCategories: [
      { id: "entradas", label: "Starters" },
      { id: "especialidades-mar", label: "Sea Specialities" },
      { id: "especialidades-terra", label: "Meat Specialities" },
      { id: "acompanhamentos", label: "Side Dishes" },
      { id: "sobremesas", label: "Desserts" },
    ],
    menuItems: {
      entradas: [
        {
          name: "Garlic Prawns",
          description: "Prawns sautéed with garlic, olive oil and aromatic herbs",
          image: "/images/dishes/camarao-alho.jpg",
        },
        {
          name: "Goose Barnacles",
          description: "Fresh goose barnacles cooked naturally with sea salt",
          image: "/images/dishes/percebes.jpg",
        },
        {
          name: "Clams Bulhão Pato Style",
          description: "Clams sautéed with garlic, coriander and white wine",
          image: "/images/dishes/camarao-alho.jpg",
        },
        {
          name: "Peixinhos da Horta",
          description: "Green beans in a light batter, served with homemade tartar sauce",
          image: "/images/dishes/percebes.jpg",
        },
      ],
      "especialidades-mar": [
        {
          name: "Grilled Sea Bass",
          description: "Fresh sea bass grilled with olive oil and lemon, served with vegetables",
          image: "/images/dishes/robalo-grelhado.jpg",
        },
        {
          name: "Seafood Cataplana",
          description: "Traditional cataplana with prawns, clams, mussels and fish",
          image: "/images/dishes/cataplana.jpg",
        },
        {
          name: "Bacalhau à Brás",
          description: "Shredded cod with thin fried potatoes, eggs and olives",
          image: "/images/dishes/robalo-grelhado.jpg",
        },
        {
          name: "Monkfish Rice",
          description: "Creamy monkfish rice with prawns and coriander",
          image: "/images/dishes/cataplana.jpg",
        },
      ],
      "especialidades-terra": [
        {
          name: "Café de Paris Steak",
          description: "Grilled sirloin steak with our special aromatic butter",
          image: "/images/dishes/bife-cafe.jpg",
        },
        {
          name: "Iberian Pork Secretos",
          description: "Perfectly grilled Iberian pork secretos",
          image: "/images/dishes/bife-cafe.jpg",
        },
        {
          name: "Grilled Picanha",
          description: "Grilled picanha served with rice and farofa",
          image: "/images/dishes/bife-cafe.jpg",
        },
        {
          name: "Veal Tenderloin",
          description: "Grilled veal tenderloin with mushroom sauce",
          image: "/images/dishes/bife-cafe.jpg",
        },
      ],
      acompanhamentos: [
        {
          name: "Smashed Potatoes",
          description: "Roasted smashed potatoes with garlic and olive oil",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Grilled Vegetables",
          description: "Selection of seasonal vegetables grilled with herbs",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Tomato Rice",
          description: "Aromatic rice with fresh tomato and basil",
          image: "/images/dishes/batatas.jpg",
        },
        {
          name: "Sautéed Spinach",
          description: "Fresh spinach sautéed with garlic and olive oil",
          image: "/images/dishes/batatas.jpg",
        },
      ],
      sobremesas: [
        {
          name: "Pastel de Nata",
          description: "Traditional custard tart with cinnamon and powdered sugar",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Chocolate Mousse",
          description: "Dark chocolate mousse with almond crumble",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Rice Pudding",
          description: "Creamy rice pudding with cinnamon, prepared in the traditional way",
          image: "/images/dishes/pastel-nata.jpg",
        },
        {
          name: "Almond Tart",
          description: "Algarve almond tart with vanilla ice cream",
          image: "/images/dishes/pastel-nata.jpg",
        },
      ],
    },
  },
} as const

type MenuCategoryId = keyof typeof translations.pt.menuItems

export default function GastronomiaPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState<MenuCategoryId>("entradas")
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const categoryNavRef = useRef<HTMLDivElement | null>(null)

  const t = translations[language]
  const menuCategories = t.menuCategories
  const menuItems = t.menuItems

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
            setActiveSection(section.id as MenuCategoryId)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuCategories])

  useEffect(() => {
    const nav = categoryNavRef.current
    if (!nav) return

    const resetPosition = () => {
      nav.scrollTo({ left: 0, behavior: "auto" })
    }

    resetPosition()
    const timeoutId = window.setTimeout(resetPosition, 80)

    return () => window.clearTimeout(timeoutId)
  }, [isHeaderScrolled])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const navHeight = window.innerWidth < 640 ? 82 : 148
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="gastronomia" />

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
            {t.pageTitle}
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
            ? "border-b border-[#e2bd93]/25 bg-[#10243d]/95 shadow-xl shadow-black/20 backdrop-blur-xl"
            : "border-y border-white/15 bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-6xl px-0 sm:px-4">
          <div
            className={`transition-all duration-500 ${
              isHeaderScrolled ? "py-7 sm:py-7 md:py-8" : "py-4"
            }`}
          >
            {isHeaderScrolled && (
              <div className="mb-5 text-center sm:mb-6 md:mb-7">
                <span className="font-serif text-base uppercase leading-none tracking-[0.32em] text-white/80 sm:text-2xl sm:tracking-[0.35em] md:text-[30px] lg:text-[32px]">
                  Senhor Peixe
                </span>
              </div>
            )}

            <div
              ref={categoryNavRef}
              className={`w-full overflow-x-auto overflow-y-hidden pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isHeaderScrolled ? "pl-[150px] sm:px-4" : "pl-4 sm:px-4"
              }`}
            >
              <ul className="flex min-w-max items-center justify-start gap-1.5 sm:justify-center sm:gap-3">
                {menuCategories.map((category) => (
                  <li key={category.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => scrollToSection(category.id)}
                      className={`whitespace-nowrap rounded-md border px-2.5 py-2 font-serif text-[10px] tracking-[0.01em] transition-all duration-300 sm:px-4 sm:text-sm sm:tracking-wide ${
                        activeSection === category.id
                          ? isHeaderScrolled
                            ? "border-[#e2bd93]/80 bg-white/5 text-white shadow-[0_0_14px_rgba(226,189,147,0.18)]"
                            : "border-white/35 bg-white/18 text-white"
                          : isHeaderScrolled
                            ? "border-white/15 bg-white/5 text-white/75 hover:border-[#e2bd93]/45 hover:bg-white/8 hover:text-white"
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
            className="mb-16 scroll-mt-24 sm:scroll-mt-40"
          >
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

            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              {menuItems[category.id as MenuCategoryId]?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

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

        {/* Full Menu */}
        <section className="mt-20 scroll-mt-24 sm:scroll-mt-40">
          <div className="mb-12 flex items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.fullCarta}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.fullMenu}
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
              {t.fullMenuDescription}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <Link
                href="/gastronomia/Carta"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openCarta}
              </Link>

              <Link
                href="/gastronomia/bebidas"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openBeveragesCarta}
              </Link>

              <Link
                href="/gastronomia/sobremesas"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
              >
                {t.openDessertsCarta}
              </Link>
            </div>
          </div>
        </section>
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