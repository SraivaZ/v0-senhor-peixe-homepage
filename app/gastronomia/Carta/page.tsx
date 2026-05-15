"use client"

import Link from "next/link"
import { Cormorant_Garamond, Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

type Item = {
  name: string
  note?: string
  unit?: string
  price?: string
  description?: string
  compact?: boolean
}

type Section = {
  title: string
  unitLabel?: string
  subtitle?: string
  items: Item[]
}

const couvertSections: Section[] = [
  {
    title: "COUVERT",
    items: [
      { name: "AZEITONAS", price: "2" },
      { name: "MANTEIGA", price: "2" },
      { name: "PÃO", price: "2" },
      { name: "PÃO TORRADO COM MANTEIGA", price: "3" },
      { name: "PATÉ", note: "SARDINHA / ATUM", price: "3" },
      { name: "QUEIJO AZEITÃO / ALENTEJANO", price: "7" },
      {
        name: "TÁBUA DE QUEIJOS",
        note: "3 QUEIJOS, DOCE, MARMELADA, NOZES, UVAS, TOSTAS",
        price: "28",
        compact: true,
      },
    ],
  },
  {
    title: "ENTRADAS",
    items: [
      { name: "BIQUEIRÃO", price: "7" },
      { name: "PEIXINHOS FRITOS", price: "6" },
      { name: "PRATO DE PRESUNTO", price: "17" },
      { name: "SALADA DE CENOURA", price: "5" },
      { name: "SALADA DE POLVO", price: "7" },
      { name: "COCKTAIL DE CAMARÃO", price: "13" },
    ],
  },
  {
    title: "ENTRADAS QUENTES",
    items: [
      { name: "AMÊIJOAS", price: "26" },
      { name: "AMÊIJOLA", price: "21" },
      { name: "BERBIGÃO", price: "19" },
      { name: "LONGUEIRÃO", price: "19" },
      { name: "LAPAS", price: "24" },
      { name: "CAMARÃO AO ALHO", price: "19" },
      { name: "TIRAS DE CHOCO", price: "7" },
      { name: "GAMBA DO ALGARVE", price: "22" },
      { name: "MEXILHÃO", price: "17" },
      { name: "VIEIRA", unit: "UN", price: "5" },
      { name: "ZAMBURINAS", unit: "UN", price: "4" },
      { name: "CASCO SAPATEIRA COM PÃO TORRADO", unit: "UN", price: "28" },
      { name: "CARABINEIROS", unit: "/KG", price: "160" },
      { name: "CAMARÃO TIGRE", unit: "/KG", price: "120" },
    ],
  },
]

const especialidadesSections: Section[] = [
  {
    title: "ESPECIALIDADES",
    items: [
      { name: "AÇORDA DE CAMARÃO", note: "2 PAX", price: "46" },
      {
        name: "AÇORDA DE CAMARÃO",
        note: "1 PAX",
        price: "24",
        description:
          "AÇORDA CREMOSA DE PÃO ALENTEJANO, AZEITE, ALHO, COENTROS, OVO, CAMARÃO MOÇAMBIQUE E LISTADO FRITO",
      },
      { name: "ARROZ DE CHERNE E AMÊIJOAS", note: "2 PAX", price: "53" },
      {
        name: "ARROZ DE CHERNE E AMÊIJOAS",
        note: "3 PAX",
        price: "74",
        description: "ARROZ AGULHA COM CHERNE AOS CUBOS E AMÊIJOAS",
      },
      {
        name: "ARROZ DO MAR",
        note: "2 PAX",
        price: "75",
        description:
          "MISTO DE MARISCOS: BOCAS DE SAPATEIRA / CARANGUEJO, CAMARÃO, MEXILHÃO, AMÊIJOA, BERBIGÃO",
      },
      { name: "ARROZ DE LAGOSTA", unit: "/KG", price: "130" },
      {
        name: "ARROZ DE LAVAGANTE",
        unit: "/KG",
        price: "110",
        description: "ARROZ AGULHA COM LAGOSTA / LAVAGANTE AO KILO",
      },
      { name: "MASSA DE CHERNE", note: "1 PAX", price: "26" },
      {
        name: "MASSA DE CHERNE",
        note: "2 PAX",
        price: "50",
        description: "CHERNE AOS CUBOS COM MASSA DE COTOVELINHOS",
      },
      { name: "CALDEIRADA", note: "2 PAX", price: "48" },
      {
        name: "CALDEIRADA",
        note: "3 PAX",
        price: "72",
        description:
          "REFOGADO TOMATE, CEBOLA E PIMENTO, COM MISTO DE PEIXES TÍPICOS DA CALDEIRADA",
      },
      { name: "PEIXE À PESCADOR", note: "2 PAX", price: "52" },
      {
        name: "PEIXE À PESCADOR",
        note: "1 PAX",
        price: "27",
        description:
          "CHERNE COZIDO COM BATATAS, CEBOLA E PIMENTOS. PRATO RÚSTICO DE SETÚBAL",
      },
      {
        name: "BITOQUE DE CAMARÃO",
        note: "1 PAX",
        price: "27",
        description:
          "CAMARÃO FRITO, BATATA FRITA ÀS RODELAS, ARROZ BRANCO, OVO ESTRELADO",
      },
      {
        name: "CHOCO FRITO",
        note: "1 PAX",
        price: "18",
        description:
          "TIRAS DE CHOCO FRITO EM POLME CROCANTE DE MILHO, BATATA FRITA, SALADA",
      },
    ],
  },
]

const peixesSections: Section[] = [
  {
    title: "PEIXE",
    unitLabel: "KG",
    subtitle: "ACOMPANHADOS COM BATATA COZIDA COM PELE",
    items: [
      { name: "BESUGO", price: "45" },
      { name: "CABEÇA DE CHERNE / GAROUPA", price: "45" },
      { name: "CANTARIL", price: "63" },
      { name: "CHERNE", price: "83" },
      { name: "CHOCOS", price: "48" },
      { name: "DOURADA", price: "42" },
      { name: "DOURADA", note: "+0,600KG", price: "58" },
      { name: "GAROUPA", price: "72" },
      { name: "GORAZ", price: "70" },
      { name: "IMPERADOR", price: "91" },
      { name: "LINGUADO", price: "62" },
      { name: "LULAS", price: "53" },
      { name: "OVAS", price: "48" },
      { name: "PARGO", price: "65" },
      { name: "PEIXE GALO", price: "73" },
      { name: "PREGADO", price: "68" },
      { name: "ROBALO", price: "42" },
      { name: "ROBALO", note: "+0,600 KG", price: "58" },
      { name: "RASCASSO", price: "75" },
      { name: "RODOVALHO", price: "73" },
      { name: "SALMONETES", price: "71" },
      { name: "SALONGO", price: "58" },
      { name: "SARGO", price: "60" },
      { name: "SARDINHA", note: "6 UN", price: "18" },
    ],
  },
  {
    title: "À LAGAREIRO",
    items: [
      {
        name: "BACALHAU NA BRASA",
        price: "26",
        description: "POSTA GRELHADA NO CARVÃO COM BATATA A MURRO",
      },
      {
        name: "POLVO NA BRASA",
        price: "26",
        description:
          "TENTÁCULOS DE POLVO GRELHADOS NO CARVÃO, BATATA A MURRO E GRELOS",
      },
    ],
  },
]

const mariscoSections: Section[] = [
  {
    title: "MARISCO",
    unitLabel: "KG",
    items: [
      { name: "BURRIÉ", price: "42" },
      { name: "CANILHA", price: "85" },
      { name: "BUZIOS", price: "50" },
      { name: "CAMARÃO ESPINHO", price: "108" },
      { name: "CAMARÃO MOÇAMBIQUE", price: "64" },
      { name: "CAMARÃO RABO AZUL", price: "80" },
      { name: "CAMARÃO LISTADO", price: "75" },
      { name: "CAMARÃO TIGRE", price: "120" },
      { name: "CARABINEIROS", price: "160" },
      { name: "GAMBA BRANCA DO ALGARVE", price: "71" },
      { name: "BRUXAS", price: "150" },
      { name: "LAGOSTA", price: "130" },
      { name: "LAVAGANTE", price: "110" },
      { name: "LAGOSTIM", price: "150" },
      { name: "OSTRAS", price: "40" },
      { name: "PERCEBES", price: "89" },
      { name: "SAPATEIRA", price: "45" },
      { name: "SANTOLA", price: "45" },
      { name: "PATAS DE CARANGUEJO DO ALASCA", price: "170" },
    ],
  },
  {
    title: "CARNE",
    items: [
      { name: "BIFE DO LOMBO*", note: "HALAL", price: "32" },
      { name: "BIFE DA VAZIA*", price: "24" },
      {
        name: "ENTRECÔTE*",
        note: "MATURADO 60 DIAS",
        price: "27",
        description: "*TODOS BIFES ACOMPANHAM COM BATATA FRITA E SALADA",
      },
      {
        name: "CARNE PORCO IBÉRICO",
        price: "23",
        description:
          "CARNE DE PORCO FRITO EM MASSA DE PIMENTÃO C/AMEIJOAS E BATATA FRITA",
      },
    ],
  },
  {
    title: "VEGAN",
    items: [
      {
        name: "HAMBURGUER DE SOJA COM BATATA COZIDA, SALADA",
        price: "18",
      },
    ],
  },
]

const sopasSections: Section[] = [
  {
    title: "SOPAS",
    items: [
      { name: "CREME DE MARISCO", price: "8" },
      { name: "SOPA DE PEIXE", price: "6" },
      { name: "SOPA DE LEGUMES", price: "4" },
    ],
  },
  {
    title: "ACOMPANHAMENTOS",
    items: [
      { name: "ARROZ ALHO", price: "7" },
      { name: "ARROZ BRANCO", price: "4" },
      { name: "ARROZ FEIJÃO", price: "7" },
      { name: "ARROZ GRELOS", price: "7" },
      { name: "ARROZ TOMATE", price: "7" },
      { name: "AÇORDA DE OVAS", price: "10" },
      { name: "BATATA - DOCE", price: "4" },
      { name: "BATATA FRITA", price: "4" },
      { name: "OVO", note: "FRITO, COZIDO", price: "2" },
    ],
  },
  {
    title: "LEGUMES/SALADAS",
    items: [
      { name: "LEGUMES", price: "5" },
      { name: "LEGUMES SALTEADOS", price: "6" },
      { name: "SALADA", price: "5" },
      { name: "SALADA DE PIMENTOS", price: "6" },
    ],
  },
  {
    title: "MOLHOS",
    items: [
      { name: "AZEITE E ALHO", price: "3" },
      { name: "ESCABECHE", price: "3" },
      { name: "FIGADOS", price: "2" },
      { name: "MANTEIGA", price: "2" },
      { name: "VERDE", price: "3" },
    ],
  },
]

function Ornament({ small = false }: { small?: boolean }) {
  return (
    <div className={`sp-ornament ${small ? "sp-ornament-small" : ""}`} aria-hidden="true">
      <span />
      <strong>◆</strong>
      <span />
    </div>
  )
}

function CoverCorners() {
  return (
    <>
      <div className="sp-art-corner sp-art-corner-top-left">
        <span className="sp-corner-line sp-corner-line-a" />
        <span className="sp-corner-line sp-corner-line-b" />
        <span className="sp-corner-line sp-corner-line-c" />
        <span className="sp-corner-leaf" />
      </div>

      <div className="sp-art-corner sp-art-corner-top-right">
        <span className="sp-corner-line sp-corner-line-a" />
        <span className="sp-corner-line sp-corner-line-b" />
        <span className="sp-corner-line sp-corner-line-c" />
        <span className="sp-corner-leaf" />
      </div>

      <div className="sp-art-corner sp-art-corner-bottom-left">
        <span className="sp-corner-line sp-corner-line-a" />
        <span className="sp-corner-line sp-corner-line-b" />
        <span className="sp-corner-line sp-corner-line-c" />
        <span className="sp-corner-leaf" />
      </div>

      <div className="sp-art-corner sp-art-corner-bottom-right">
        <span className="sp-corner-line sp-corner-line-a" />
        <span className="sp-corner-line sp-corner-line-b" />
        <span className="sp-corner-line sp-corner-line-c" />
        <span className="sp-corner-leaf" />
      </div>
    </>
  )
}

function MenuCorners() {
  return (
    <>
      <div className="sp-menu-corner sp-menu-corner-top-left" />
      <div className="sp-menu-corner sp-menu-corner-top-right" />
      <div className="sp-menu-corner sp-menu-corner-bottom-left" />
      <div className="sp-menu-corner sp-menu-corner-bottom-right" />
    </>
  )
}

function SectionTitle({
  title,
  unitLabel,
  subtitle,
}: {
  title: string
  unitLabel?: string
  subtitle?: string
}) {
  return (
    <div className="sp-section-title">
      <div className="sp-title-row">
        <span />
        <h2 className={playfair.className}>{title}</h2>
        <span />
        {unitLabel && <em className={playfair.className}>{unitLabel}</em>}
      </div>

      {subtitle && <p className={playfair.className}>{subtitle}</p>}

      <strong aria-hidden="true">◆</strong>
    </div>
  )
}

function MenuHeader() {
  return (
    <header className="sp-menu-header">
      <img
        src="/senhor-peixe-logo%20branco.png"
        alt="Senhor Peixe"
        className="sp-menu-logo"
      />

      <h1 className={playfair.className}>SENHOR PEIXE</h1>

      <Ornament small />
    </header>
  )
}

function ItemRow({ name, note, unit, price, description, compact }: Item) {
  return (
    <li className={`sp-item-wrap ${description ? "sp-has-description" : ""}`}>
      <div className={`sp-item ${compact ? "sp-item-compact" : ""}`}>
        <span className="sp-item-label">
          <span className="sp-item-name">{name}</span>
          {note && <span className="sp-item-note">({note})</span>}
          {unit && <span className="sp-item-unit">{unit}</span>}
        </span>

        <span className="sp-leader" aria-hidden="true" />

        {price && <span className="sp-price">{price}</span>}
      </div>

      {description && <p className="sp-description">({description})</p>}
    </li>
  )
}

function MenuPage({
  sections,
  dense = false,
  fish = false,
  shellfish = false,
  sides = false,
}: {
  sections: Section[]
  dense?: boolean
  fish?: boolean
  shellfish?: boolean
  sides?: boolean
}) {
  return (
    <section
      className={`sp-page sp-menu-page ${dense ? "sp-dense-page" : ""} ${
        fish ? "sp-fish-page" : ""
      } ${shellfish ? "sp-shellfish-page" : ""} ${sides ? "sp-sides-page" : ""}`}
    >
      <div className="sp-menu-border sp-outer-menu-border" />
      <div className="sp-menu-border sp-inner-menu-border" />

      <MenuCorners />

      <div className="sp-paper-texture" />

      <div className="sp-menu-content">
        <MenuHeader />

        <div className="sp-sections">
          {sections.map((section) => (
            <section className="sp-menu-section" key={section.title}>
              <SectionTitle
                title={section.title}
                unitLabel={section.unitLabel}
                subtitle={section.subtitle}
              />

              <ul>
                {section.items.map((item, index) => (
                  <ItemRow key={`${section.title}-${item.name}-${index}`} {...item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer>
          <Ornament small />
        </footer>
      </div>
    </section>
  )
}

export default function CartaGastronomiaPage() {
  return (
    <main className={`sp-shell ${cormorant.className}`}>
      <Link href="/gastronomia" className="sp-back-link">
        Voltar
      </Link>

      <section className="sp-page sp-cover">
        <div className="sp-cover-border sp-outer-cover-border" />
        <div className="sp-cover-border sp-inner-cover-border" />

        <CoverCorners />

        <div className="sp-cover-content">
          <img
            src="/senhor-peixe-logo%20branco.png"
            alt="Senhor Peixe"
            className="sp-cover-logo"
          />

          <h1 className={playfair.className}>SENHOR PEIXE</h1>

          <Ornament />

          <div className={`sp-cover-subtitle ${playfair.className}`}>
            <p>Cozinha Portuguesa</p>
            <p>Peixe e Marisco</p>
          </div>

          <p className={`sp-since ${playfair.className}`}>DESDE 1999</p>

          <div className="sp-small-line" />
        </div>
      </section>

      <MenuPage sections={couvertSections} />
      <MenuPage sections={especialidadesSections} dense />
      <MenuPage sections={peixesSections} fish />
      <MenuPage sections={mariscoSections} shellfish />
      <MenuPage sections={sopasSections} sides />

      <style jsx global>{`
        :root {
          --sp-ink: #06264a;
          --sp-ink-soft: #1c4266;
          --sp-gold: #b88a45;
          --sp-gold-soft: rgba(184, 138, 69, 0.62);
          --sp-gold-light: rgba(184, 138, 69, 0.3);
          --sp-paper: #fbf7ee;
          --sp-paper-edge: #efe2cf;
          --sp-page-width: 794px;
          --sp-page-ratio: 210 / 297;
        }

        * {
          box-sizing: border-box;
        }

        .sp-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.65), transparent 38%),
            #d8d0c2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 58px;
          padding: 48px 18px 76px;
        }

        .sp-back-link {
          align-self: flex-start;
          margin: 0 auto -28px;
          width: min(92vw, var(--sp-page-width));
          color: var(--sp-ink);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          opacity: 0.62;
        }

        .sp-back-link:hover {
          opacity: 1;
        }

        .sp-page {
          position: relative;
          width: min(92vw, var(--sp-page-width));
          aspect-ratio: var(--sp-page-ratio);
          overflow: hidden;
          page-break-after: always;
          break-after: page;
          box-shadow:
            0 28px 70px rgba(0, 0, 0, 0.16),
            0 2px 0 rgba(255, 255, 255, 0.55) inset;
        }

        .sp-cover {
          background:
            radial-gradient(circle at 50% 42%, #24466f 0%, #102e52 50%, #061d36 100%);
          color: #f8f0df;
        }

        .sp-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.055), transparent 34%, rgba(255,255,255,0.025) 64%, transparent 100%);
          pointer-events: none;
        }

        .sp-menu-page {
          background: var(--sp-paper);
          color: var(--sp-ink);
        }

        .sp-menu-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 36%, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.54) 46%, rgba(239,226,207,0.32) 100%),
            linear-gradient(90deg, rgba(184,138,69,0.04), transparent 16%, transparent 84%, rgba(184,138,69,0.04));
        }

        .sp-paper-texture {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.16;
          background:
            radial-gradient(circle at 22% 20%, rgba(184,138,69,0.055), transparent 24%),
            radial-gradient(circle at 78% 74%, rgba(6,38,74,0.025), transparent 32%);
        }

        .sp-cover-border,
        .sp-menu-border {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }

        .sp-outer-cover-border {
          inset: 29px;
          border: 1.8px solid rgba(184, 138, 69, 0.9);
        }

        .sp-inner-cover-border {
          inset: 43px;
          border: 0.8px solid rgba(184, 138, 69, 0.72);
        }

        .sp-outer-menu-border {
          inset: 23px;
          border: 1px solid var(--sp-gold-soft);
        }

        .sp-inner-menu-border {
          inset: 36px;
          border: 0.65px solid var(--sp-gold-light);
        }

        .sp-art-corner {
          position: absolute;
          width: 86px;
          height: 86px;
          z-index: 3;
          pointer-events: none;
          color: rgba(184, 138, 69, 0.88);
        }

        .sp-art-corner-top-left {
          top: 38px;
          left: 38px;
        }

        .sp-art-corner-top-right {
          top: 38px;
          right: 38px;
          transform: scaleX(-1);
        }

        .sp-art-corner-bottom-left {
          bottom: 38px;
          left: 38px;
          transform: scaleY(-1);
        }

        .sp-art-corner-bottom-right {
          bottom: 38px;
          right: 38px;
          transform: scale(-1);
        }

        .sp-corner-line {
          position: absolute;
          display: block;
          background: currentColor;
        }

        .sp-corner-line-a {
          top: 0;
          left: 0;
          width: 39px;
          height: 2px;
        }

        .sp-corner-line-b {
          top: 0;
          left: 0;
          width: 2px;
          height: 39px;
        }

        .sp-corner-line-c {
          top: 13px;
          left: 13px;
          width: 2px;
          height: 39px;
          box-shadow:
            12px -12px 0 0 currentColor,
            0 39px 0 0 currentColor,
            39px 0 0 0 currentColor;
        }

        .sp-corner-line-c::before {
          content: "";
          position: absolute;
          top: -13px;
          left: 13px;
          width: 39px;
          height: 2px;
          background: currentColor;
        }

        .sp-corner-line-c::after {
          content: "";
          position: absolute;
          top: 39px;
          left: 0;
          width: 52px;
          height: 2px;
          background: currentColor;
        }

        .sp-corner-leaf {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 22px;
          height: 22px;
          border: 2px solid currentColor;
          border-radius: 0 100% 0 100%;
          transform: rotate(-45deg);
        }

        .sp-corner-leaf::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -2px;
          width: 2px;
          height: 26px;
          background: currentColor;
          transform: translateX(-50%) rotate(45deg);
          opacity: 0.85;
        }

        .sp-menu-corner {
          position: absolute;
          z-index: 3;
          width: 66px;
          height: 66px;
          pointer-events: none;
          color: rgba(184, 138, 69, 0.58);
        }

        .sp-menu-corner::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 1.05px solid currentColor;
          border-left: 1.05px solid currentColor;
          border-top-left-radius: 56px;
        }

        .sp-menu-corner::after {
          content: "";
          position: absolute;
          top: 10px;
          left: 10px;
          width: 54px;
          height: 54px;
          border-top: 0.7px solid currentColor;
          border-left: 0.7px solid currentColor;
          border-top-left-radius: 46px;
          opacity: 0.48;
        }

        .sp-menu-corner-top-left {
          top: 23px;
          left: 23px;
        }

        .sp-menu-corner-top-right {
          top: 23px;
          right: 23px;
          transform: scaleX(-1);
        }

        .sp-menu-corner-bottom-left {
          bottom: 23px;
          left: 23px;
          transform: scaleY(-1);
        }

        .sp-menu-corner-bottom-right {
          bottom: 23px;
          right: 23px;
          transform: scale(-1);
        }

        .sp-cover-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 82px 70px;
        }

        .sp-cover-logo {
          width: clamp(165px, 25vw, 235px);
          height: auto;
          object-fit: contain;
          margin-bottom: 42px;
          filter: drop-shadow(0 9px 16px rgba(0, 0, 0, 0.22));
        }

        .sp-cover h1 {
          margin: 0;
          color: #f8f0df;
          font-size: clamp(68px, 8.6vw, 94px);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 8px 20px rgba(0, 0, 0, 0.24);
        }

        .sp-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          width: min(430px, 68%);
          margin: 50px auto 48px;
          color: var(--sp-gold);
        }

        .sp-ornament span {
          height: 1px;
          flex: 1;
          background: linear-gradient(to right, transparent, rgba(184,138,69,0.68));
        }

        .sp-ornament span:last-child {
          background: linear-gradient(to left, transparent, rgba(184,138,69,0.68));
        }

        .sp-ornament strong {
          font-size: 20px;
          line-height: 1;
          font-weight: 400;
        }

        .sp-ornament-small {
          width: 126px;
          gap: 10px;
          margin: 11px auto 0;
        }

        .sp-ornament-small strong {
          font-size: 8px;
          transform: scaleX(0.84);
        }

        .sp-cover-subtitle {
          color: var(--sp-gold);
          text-transform: uppercase;
          letter-spacing: 0.32em;
          font-size: clamp(16px, 1.9vw, 21px);
          line-height: 1.95;
          font-weight: 500;
        }

        .sp-cover-subtitle p {
          margin: 0;
        }

        .sp-since {
          margin: 50px 0 0;
          color: var(--sp-gold);
          font-size: clamp(15px, 1.7vw, 20px);
          line-height: 1;
          letter-spacing: 0.36em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .sp-small-line {
          width: 56px;
          height: 1px;
          margin-top: 34px;
          background: rgba(184, 138, 69, 0.82);
        }

        .sp-menu-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 48px 112px 44px;
        }

        .sp-menu-header {
          text-align: center;
          flex: 0 0 auto;
        }

        .sp-menu-logo {
          width: 76px;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto 7px;
          filter: brightness(0) saturate(100%) invert(14%) sepia(51%)
            saturate(1190%) hue-rotate(179deg) brightness(88%) contrast(97%);
        }

        .sp-menu-header h1 {
          margin: 0;
          color: var(--sp-ink);
          font-size: 33px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.105em;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: none;
        }

        .sp-sections {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 25px;
          padding-bottom: 2px;
        }

        .sp-menu-section {
          width: 100%;
        }

        .sp-section-title {
          margin-bottom: 10px;
          text-align: center;
          color: var(--sp-ink);
        }

        .sp-title-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto;
          align-items: center;
          column-gap: 18px;
        }

        .sp-title-row span {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(184,138,69,0.62), transparent);
        }

        .sp-title-row em {
          color: var(--sp-ink);
          font-size: 12px;
          line-height: 1;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transform: translateY(1px);
        }

        .sp-section-title h2 {
          margin: 0;
          color: var(--sp-ink);
          font-size: 27px;
          line-height: 0.98;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: none;
        }

        .sp-section-title p {
          margin: 8px 0 0;
          color: var(--sp-ink-soft);
          font-size: 10.2px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sp-section-title > strong {
          display: block;
          margin-top: 8px;
          color: rgba(184, 138, 69, 0.86);
          font-size: 8px;
          line-height: 1;
          font-weight: 400;
          transform: scaleX(0.82);
        }

        .sp-menu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sp-item-wrap + .sp-item-wrap {
          margin-top: 4px;
        }

        .sp-item {
          display: flex;
          align-items: baseline;
          width: 100%;
          min-width: 0;
          color: var(--sp-ink);
          font-size: 14px;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-item-compact {
          font-size: 10.4px;
          letter-spacing: 0.12em;
        }

        .sp-item-label {
          display: inline-flex;
          align-items: baseline;
          min-width: 0;
          max-width: 76%;
          white-space: nowrap;
          flex: 0 1 auto;
        }

        .sp-item-name {
          white-space: nowrap;
        }

        .sp-item-note {
          margin-left: 6px;
          font-size: 0.62em;
          letter-spacing: 0.13em;
          font-weight: 600;
          opacity: 0.9;
          white-space: nowrap;
        }

        .sp-item-unit {
          margin-left: 6px;
          font-size: 0.54em;
          letter-spacing: 0.11em;
          font-weight: 600;
          color: var(--sp-ink);
          opacity: 0.86;
          white-space: nowrap;
        }

        .sp-leader {
          flex: 1 1 auto;
          min-width: 22px;
          height: 1px;
          margin: 0 8px;
          transform: translateY(-4px);
          background-image: radial-gradient(
            circle,
            rgba(6, 38, 74, 0.34) 0.7px,
            transparent 1.05px
          );
          background-size: 5px 1px;
          background-repeat: repeat-x;
          background-position: left center;
          opacity: 0.6;
        }

        .sp-price {
          flex: 0 0 32px;
          min-width: 32px;
          text-align: right;
          letter-spacing: 0.02em;
          font-weight: 600;
          white-space: nowrap;
        }

        .sp-description {
          margin: 4px 0 0;
          max-width: 91%;
          color: var(--sp-ink-soft);
          font-size: 8px;
          line-height: 1.28;
          letter-spacing: 0.115em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .sp-has-description {
          margin-bottom: 8px;
        }

        .sp-dense-page .sp-sections {
          justify-content: flex-start;
          padding-top: 24px;
        }

        .sp-dense-page .sp-section-title {
          margin-bottom: 18px;
        }

        .sp-dense-page .sp-item {
          font-size: 12.6px;
          line-height: 1.12;
          letter-spacing: 0.145em;
        }

        .sp-dense-page .sp-item-wrap + .sp-item-wrap {
          margin-top: 3px;
        }

        .sp-dense-page .sp-description {
          font-size: 7.35px;
          line-height: 1.24;
          letter-spacing: 0.1em;
          max-width: 90%;
        }

        .sp-fish-page .sp-menu-content,
        .sp-shellfish-page .sp-menu-content,
        .sp-sides-page .sp-menu-content {
          padding: 44px 112px 42px;
        }

        .sp-fish-page .sp-menu-logo,
        .sp-shellfish-page .sp-menu-logo,
        .sp-sides-page .sp-menu-logo {
          width: 73px;
          margin-bottom: 7px;
        }

        .sp-fish-page .sp-menu-header h1,
        .sp-shellfish-page .sp-menu-header h1,
        .sp-sides-page .sp-menu-header h1 {
          font-size: 32px;
        }

        .sp-fish-page .sp-sections,
        .sp-shellfish-page .sp-sections,
        .sp-sides-page .sp-sections {
          justify-content: flex-start;
          padding-top: 23px;
        }

        .sp-fish-page .sp-menu-section + .sp-menu-section {
          margin-top: 18px;
        }

        .sp-shellfish-page .sp-menu-section + .sp-menu-section {
          margin-top: 25px;
        }

        .sp-sides-page .sp-menu-section + .sp-menu-section {
          margin-top: 33px;
        }

        .sp-fish-page .sp-section-title,
        .sp-shellfish-page .sp-section-title,
        .sp-sides-page .sp-section-title {
          margin-bottom: 11px;
        }

        .sp-fish-page .sp-section-title h2,
        .sp-shellfish-page .sp-section-title h2,
        .sp-sides-page .sp-section-title h2 {
          font-size: 25px;
          letter-spacing: 0.15em;
        }

        .sp-fish-page .sp-item,
        .sp-shellfish-page .sp-item,
        .sp-sides-page .sp-item {
          font-size: 13px;
          line-height: 1.11;
          letter-spacing: 0.15em;
        }

        .sp-fish-page .sp-item-wrap + .sp-item-wrap,
        .sp-shellfish-page .sp-item-wrap + .sp-item-wrap,
        .sp-sides-page .sp-item-wrap + .sp-item-wrap {
          margin-top: 3.1px;
        }

        .sp-fish-page .sp-description,
        .sp-shellfish-page .sp-description,
        .sp-sides-page .sp-description {
          margin-top: 3px;
          font-size: 7.65px;
          line-height: 1.18;
          letter-spacing: 0.105em;
        }

        .sp-fish-page .sp-price,
        .sp-shellfish-page .sp-price,
        .sp-sides-page .sp-price {
          flex-basis: 34px;
          min-width: 34px;
        }

        .sp-shellfish-page .sp-menu-content {
          padding-top: 42px;
        }

        .sp-shellfish-page .sp-menu-section:first-child .sp-item {
          font-size: 12.55px;
          line-height: 1.08;
        }

        .sp-shellfish-page .sp-menu-section:first-child .sp-item-wrap + .sp-item-wrap {
          margin-top: 3px;
        }

        .sp-shellfish-page .sp-menu-section:nth-child(2) .sp-item,
        .sp-shellfish-page .sp-menu-section:nth-child(3) .sp-item {
          font-size: 12.15px;
          letter-spacing: 0.14em;
        }

        .sp-shellfish-page .sp-menu-section:nth-child(3) {
          margin-top: 28px;
        }

        .sp-sides-page .sp-menu-content {
          padding-top: 45px;
        }

        .sp-sides-page .sp-sections {
          padding-top: 25px;
        }

        .sp-sides-page .sp-section-title h2 {
          font-size: 25px;
          letter-spacing: 0.14em;
        }

        .sp-sides-page .sp-item {
          font-size: 13.15px;
          line-height: 1.18;
          letter-spacing: 0.15em;
        }

        .sp-sides-page .sp-menu-section:nth-child(2) .sp-item {
          font-size: 12.9px;
        }

        .sp-sides-page .sp-menu-section:nth-child(3) {
          margin-top: 34px;
        }

        .sp-sides-page .sp-menu-section:nth-child(4) {
          margin-top: 32px;
        }

        .sp-menu-content footer {
          flex: 0 0 auto;
        }

        .sp-menu-content footer .sp-ornament {
          width: 116px;
          margin: 10px auto 0;
        }

        @media (max-width: 760px) {
          .sp-shell {
            gap: 34px;
            padding: 28px 10px 48px;
          }

          .sp-back-link {
            width: min(94vw, var(--sp-page-width));
            margin-bottom: -16px;
          }

          .sp-page {
            width: 94vw;
          }

          .sp-menu-content,
          .sp-fish-page .sp-menu-content,
          .sp-shellfish-page .sp-menu-content,
          .sp-sides-page .sp-menu-content {
            padding: 34px 42px 32px;
          }

          .sp-menu-logo,
          .sp-fish-page .sp-menu-logo,
          .sp-shellfish-page .sp-menu-logo,
          .sp-sides-page .sp-menu-logo {
            width: 52px;
            margin-bottom: 7px;
          }

          .sp-menu-header h1,
          .sp-fish-page .sp-menu-header h1,
          .sp-shellfish-page .sp-menu-header h1,
          .sp-sides-page .sp-menu-header h1 {
            font-size: clamp(23px, 6.6vw, 32px);
            letter-spacing: 0.07em;
          }

          .sp-ornament-small {
            width: 108px;
            margin-top: 11px;
          }

          .sp-sections,
          .sp-dense-page .sp-sections,
          .sp-fish-page .sp-sections,
          .sp-shellfish-page .sp-sections,
          .sp-sides-page .sp-sections {
            padding-top: 17px;
          }

          .sp-section-title {
            margin-bottom: 7px;
          }

          .sp-section-title h2,
          .sp-fish-page .sp-section-title h2,
          .sp-shellfish-page .sp-section-title h2,
          .sp-sides-page .sp-section-title h2 {
            font-size: clamp(16px, 4.4vw, 22px);
            letter-spacing: 0.115em;
          }

          .sp-title-row {
            column-gap: 10px;
          }

          .sp-title-row em {
            font-size: clamp(7px, 1.8vw, 10px);
            letter-spacing: 0.1em;
          }

          .sp-section-title p {
            font-size: clamp(6px, 1.7vw, 8px);
            letter-spacing: 0.08em;
          }

          .sp-section-title > strong {
            margin-top: 5px;
            font-size: 8px;
          }

          .sp-item,
          .sp-dense-page .sp-item,
          .sp-fish-page .sp-item,
          .sp-shellfish-page .sp-item,
          .sp-sides-page .sp-item,
          .sp-shellfish-page .sp-menu-section:first-child .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(2) .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(3) .sp-item,
          .sp-sides-page .sp-menu-section:nth-child(2) .sp-item {
            font-size: clamp(8px, 2.35vw, 11.5px);
            line-height: 1.12;
            letter-spacing: 0.1em;
          }

          .sp-item-compact {
            font-size: clamp(6.8px, 1.95vw, 9.5px);
          }

          .sp-item-wrap + .sp-item-wrap,
          .sp-dense-page .sp-item-wrap + .sp-item-wrap,
          .sp-fish-page .sp-item-wrap + .sp-item-wrap,
          .sp-shellfish-page .sp-item-wrap + .sp-item-wrap,
          .sp-sides-page .sp-item-wrap + .sp-item-wrap,
          .sp-shellfish-page .sp-menu-section:first-child .sp-item-wrap + .sp-item-wrap {
            margin-top: 3px;
          }

          .sp-description,
          .sp-dense-page .sp-description,
          .sp-fish-page .sp-description,
          .sp-shellfish-page .sp-description,
          .sp-sides-page .sp-description {
            font-size: clamp(5px, 1.5vw, 7px);
            line-height: 1.2;
            letter-spacing: 0.075em;
          }

          .sp-leader {
            min-width: 12px;
            margin: 0 5px;
            background-size: 5px 1px;
          }

          .sp-price,
          .sp-fish-page .sp-price,
          .sp-shellfish-page .sp-price,
          .sp-sides-page .sp-price {
            flex-basis: 21px;
            min-width: 21px;
          }
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: white;
          }

          .sp-shell {
            display: block;
            padding: 0;
            margin: 0;
            background: white;
          }

          .sp-back-link {
            display: none;
          }

          .sp-page {
            width: 210mm;
            height: 297mm;
            aspect-ratio: auto;
            box-shadow: none;
            page-break-after: always;
            break-after: page;
          }
        }
      `}</style>
    </main>
  )
}