import Link from "next/link"
import { FishLogo } from "@/components/fish-logo"

const navLinks = [
  { href: "/gastronomia", label: "Gastronomia" },
  { href: "/garrafeira", label: "Garrafeira" },
  { href: "/o-nosso-espaco", label: "O Nosso Espaço" },
  { href: "/reservas", label: "Reservas" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/contactos", label: "Contactos" },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
            {/* Ocean Background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://i.ibb.co/tpwVgpWM/Chat-GPT-Image-9-05-2026-14-06-41.png" 
          alt="Ocean Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>


      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <button 
          className="text-white/90 text-sm tracking-widest hover:text-white transition-colors font-serif"
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        {/* Glassmorphism Panel */}
        <div className="w-full max-w-md rounded-2xl backdrop-blur-md bg-black/60 border border-white/20 shadow-2xl overflow-hidden">
          {/* Header Section with darker background */}
          <div className="bg-slate-700/60 backdrop-blur-sm px-8 pt-8 pb-6 text-center">
            <Link href="/" className="inline-block group">
              <img 
  src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png" 
  alt="Logo Senhor Peixe" 
  className="mx-auto mb-4 h-24 w-auto object-contain" 
/>

              <h1 className="text-3xl sm:text-4xl tracking-[0.2em] text-white font-serif font-normal mb-3">
                SENHOR PEIXE
              </h1>
            </Link>
            <p className="text-white/80 text-xs sm:text-sm tracking-[0.15em] uppercase leading-relaxed">
              Cozinha Portuguesa<br />
              Peixe e Marisco
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="px-8 py-8">
            <ul className="space-y-5 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg sm:text-xl text-white/90 hover:text-white transition-colors tracking-wide font-serif inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-8 pb-8 pt-2 text-center">
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-serif">
              Desde 1999
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
