import Link from "next/link"

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
      {/* Imagem de Fundo (Mar) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: "url('https://i.ibb.co/prRL3zg7/sea-20260206-115727-6731-1-5x.jpg')" }}
      >
        {/* Overlay para escurecer o mar e destacar o painel central */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Seletor de Idioma */}
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <button 
          className="text-white/90 text-sm tracking-widest hover:text-white transition-colors font-serif"
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        
        {/* Painel Central com Efeito Glassmorphism */}
        <div className="w-full max-w-md rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Cabeçalho com o Logótipo e Nome */}
          <div className="bg-slate-900/60 backdrop-blur-sm px-8 pt-10 pb-6 text-center">
            <Link href="/" className="inline-block group">
              {/* O TEU LOGO DO PEIXE BRANCO */}
              <img 
                src="https://ibb.co" 
                alt="Logo Senhor Peixe" 
                className="mx-auto mb-6 h-20 w-auto object-contain brightness-110 drop-shadow-lg" 
              />
              <h1 className="text-3xl sm:text-4xl tracking-[0.25em] text-white font-serif font-normal mb-3">
                SENHOR PEIXE
              </h1>
            </Link>
            <p className="text-white/80 text-xs sm:text-sm tracking-[0.2em] uppercase leading-relaxed font-light">
              Cozinha Portuguesa<br />
              Peixe e Marisco
            </p>
          </div>

          {/* Links de Navegação */}
          <nav className="px-8 py-10">
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg sm:text-xl text-white/90 hover:text-white transition-all tracking-widest font-serif inline-block relative group"
                  >
                    {link.label}
                    {/* Linha animada ao passar o rato */}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rodapé do Painel */}
          <div className="px-8 pb-8 pt-2 text-center">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-serif">
              Desde 1999
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
