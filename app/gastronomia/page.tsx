"use client"

import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"
import { FishLogo } from "@/components/fish-logo"
import { useEffect, useState } from "react"

const menuCategories = [
  { id: "entradas", label: "Entradas" },
  { id: "saladas", label: "Saladas" },
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
  saladas: [
    {
      name: "Salada de Polvo",
      description: "Polvo grelhado com azeite, cebola roxa e coentros frescos",
      image: "/images/dishes/salada-polvo.jpg",
    },
    {
      name: "Salada Mista",
      description: "Alface, tomate, cebola e pepino com vinagrete da casa",
      image: "/images/dishes/salada-polvo.jpg",
    },
    {
      name: "Salada de Bacalhau",
      description: "Bacalhau desfiado com grão-de-bico, ovo e salsa",
      image: "/images/dishes/salada-polvo.jpg",
    },
    {
      name: "Salada César com Camarão",
      description: "Alface romana, croutons, parmesão e camarão grelhado",
      image: "/images/dishes/salada-polvo.jpg",
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

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 60
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header with Background */}
      <header className="relative h-72 sm:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/menu-header.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Home Icon */}
        <Link
          href="/"
          className="absolute top-6 left-6 z-20 text-white/80 hover:text-white transition-colors duration-300"
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

        {/* Central Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="bg-[#1e3a5f] p-4 rounded-lg mb-2">
            <FishLogo className="w-16 h-16 text-white" />
          </div>
          <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-serif">
            Senhor Peixe
          </span>
          <h1 className="text-4xl sm:text-5xl text-white font-serif tracking-[0.15em] mt-2 italic">
            MENU
          </h1>
        </div>
      </header>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-[#1e3a5f] shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-2 sm:gap-6 py-4 overflow-x-auto scrollbar-hide">
            {menuCategories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => scrollToSection(category.id)}
                  className={`text-sm sm:text-base whitespace-nowrap px-2 py-1 transition-colors font-serif tracking-wide ${
                    activeSection === category.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {menuCategories.map((category, categoryIndex) => (
          <section key={category.id} id={category.id} className="mb-16 scroll-mt-20">
            {/* Section Title with Divider */}
            {categoryIndex > 0 && (
              <div className="flex items-center justify-center mb-12">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
              </div>
            )}
            
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.15em] text-stone-800 uppercase">
                {category.label}
              </h2>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mx-auto mt-3" />
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {menuItems[category.id as keyof typeof menuItems]?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Dish Image */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Dish Info */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-serif font-medium text-stone-800 uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#1e3a5f]/80 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] py-8 text-center">
        <Link href="/" className="inline-block group">
          <FishLogo className="w-10 h-10 mx-auto text-white/80 group-hover:text-white transition-colors" />
        </Link>
        <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-serif mt-3">
          Senhor Peixe — Desde 1999
        </p>
      </footer>
    </main>
  )
}
