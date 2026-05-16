"use client"

import Link from "next/link"
import { Cinzel, Cormorant_Garamond, Playfair_Display } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
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
      {
        name: "MISTAS DE MARISCO",
        note: "PREÇO SOB CONSULTA",
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
      { name: "DOURADA", note: "+0,6KG", price: "58" },
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
      { name: "ROBALO", note: "+0,6KG", price: "58" },
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
        name: "HAMBURGUER DE SOJA",
        price: "18",
        description: "COM BATATA COZIDA E SALADA",
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

function PremiumFrame({ cover = false }: { cover?: boolean }) {
  return (
    <img
      src={cover ? "/senhor-peixe-frame.png" : "/senhor-peixe-menu-frame.png"}
      alt=""
      className={cover ? "sp-frame-image sp-cover-frame-image" : "sp-frame-image"}
      aria-hidden="true"
      draggable={false}
      decoding="sync"
      loading="eager"
    />
  )
}

function Ornament({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`sp-ornament ${small ? "sp-ornament-small" : ""}`}
      aria-hidden="true"
    >
      <span />
      <strong>◇</strong>
      <span />
    </div>
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
        <h2 className={cinzel.className}>
          {title}
          {unitLabel && <em>/{unitLabel}</em>}
        </h2>
        <span />
      </div>

      {subtitle && <p className={cinzel.className}>{subtitle}</p>}

      <div className="sp-title-double-line" aria-hidden="true">
        <span />
        <span />
      </div>
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

      <h1 className={playfair.className}>Senhor Peixe</h1>

      <Ornament small />
    </header>
  )
}

function ItemRow({ name, note, unit, price, description, compact }: Item) {
  const hasPrice = Boolean(price)

  return (
    <li
      className={`sp-item-wrap ${description ? "sp-has-description" : ""} ${
        !hasPrice ? "sp-item-wrap-no-price" : ""
      }`}
    >
      <div
        className={`sp-item ${compact ? "sp-item-compact" : ""} ${
          !hasPrice ? "sp-item-no-price" : ""
        }`}
      >
        <span className="sp-item-label">
          <span className="sp-item-name">{name}</span>
          {note && <span className="sp-item-note">({note})</span>}
          {unit && <span className="sp-item-unit">({unit})</span>}
        </span>

        {hasPrice && <span className="sp-leader" aria-hidden="true" />}

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
      <PremiumFrame />

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

        <footer className="sp-legal">
          PREÇO EM <span className="sp-euro">€</span>, INCLUI IVA À TAXA LEGAL EM VIGOR
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
        <PremiumFrame cover />

        <div className="sp-cover-texture" />

        <div className="sp-cover-content">
          <img
            src="/senhor-peixe-logo%20branco.png"
            alt="Senhor Peixe"
            className="sp-cover-logo"
          />

          <h1 className={playfair.className}>Senhor Peixe</h1>

          <Ornament />

          <div className={`sp-cover-subtitle ${playfair.className}`}>
            <p>Cozinha Portuguesa</p>
            <p>Peixe e Marisco</p>
          </div>

          <p className={`sp-since ${playfair.className}`}>
            <span>DESDE</span>
            <span className="sp-since-number">1999</span>
          </p>

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
          --sp-site-blue: #112f51;
          --sp-cover-blue: #061c35;
          --sp-cover-blue-mid: #0a2948;
          --sp-ink: #092747;
          --sp-ink-soft: #385472;
          --sp-gold: #c59a61;
          --sp-gold-bright: #d9a85d;
          --sp-paper: #fffdf8;
          --sp-page-width: 794px;
          --sp-page-ratio: 210 / 297;
        }

        * {
          box-sizing: border-box;
        }

        .sp-shell,
        .sp-shell * {
          font-weight: 700 !important;
        }

        .sp-shell {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 255, 255, 0.85),
              transparent 34%
            ),
            #e7ded0;
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
          color: var(--sp-site-blue);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          opacity: 0.58;
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
            0 26px 62px rgba(40, 29, 16, 0.13),
            0 0 0 1px rgba(255, 255, 255, 0.7) inset;
        }

        .sp-frame-image {
          position: absolute;
          inset: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
          object-fit: fill;
          pointer-events: none;
          user-select: none;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          image-rendering: auto;
        }

        .sp-cover-frame-image {
          z-index: 8;
        }

        .sp-cover {
          color: #fbf4e7;
          background:
            radial-gradient(
              circle at 50% 39%,
              rgba(24, 70, 107, 0.62) 0%,
              rgba(11, 42, 74, 0.42) 34%,
              transparent 58%
            ),
            radial-gradient(
              circle at 50% 50%,
              var(--sp-cover-blue-mid) 0%,
              var(--sp-cover-blue) 62%,
              #031426 100%
            );
        }

        .sp-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.04),
              transparent 34%,
              rgba(255, 255, 255, 0.022) 68%,
              transparent 100%
            ),
            radial-gradient(
              circle at 50% 42%,
              rgba(255, 255, 255, 0.06),
              transparent 20%
            );
          opacity: 0.82;
        }

        .sp-cover::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            transparent 0%,
            transparent 58%,
            rgba(0, 0, 0, 0.22) 100%
          );
          opacity: 0.7;
        }

        .sp-cover-texture {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.42;
          mix-blend-mode: soft-light;
          background-image:
            radial-gradient(
              circle at 14% 18%,
              rgba(255, 255, 255, 0.13) 0 0.45px,
              transparent 0.75px
            ),
            radial-gradient(
              circle at 68% 32%,
              rgba(255, 255, 255, 0.1) 0 0.45px,
              transparent 0.7px
            ),
            radial-gradient(
              circle at 45% 78%,
              rgba(217, 168, 93, 0.12) 0 0.45px,
              transparent 0.75px
            ),
            repeating-linear-gradient(
              34deg,
              rgba(255, 255, 255, 0.028) 0 1px,
              transparent 1px 7px
            ),
            repeating-linear-gradient(
              124deg,
              rgba(0, 0, 0, 0.04) 0 1px,
              transparent 1px 9px
            );
          background-size:
            12px 12px,
            17px 17px,
            23px 23px,
            140px 140px,
            160px 160px;
        }

        .sp-menu-page {
          background: var(--sp-paper);
          color: var(--sp-ink);
        }

        .sp-menu-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 54px 112px 36px;
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
          padding: 82px 76px;
          transform: translateY(-3px);
        }

        .sp-cover-logo {
          width: clamp(188px, 26.5vw, 252px);
          height: auto;
          object-fit: contain;
          margin-bottom: 44px;
          filter:
            drop-shadow(0 10px 18px rgba(0, 0, 0, 0.28))
            drop-shadow(0 0 16px rgba(255, 255, 255, 0.08));
        }

        .sp-cover h1 {
          display: block;
          width: 100%;
          margin: 0 auto;
          padding-left: 0.045em;
          color: #fff9ee;
          font-size: clamp(58px, 7vw, 76px);
          line-height: 0.95;
          letter-spacing: 0.055em;
          text-align: center;
          text-transform: none;
          font-variant-caps: small-caps;
          white-space: nowrap;
          text-shadow:
            0 10px 20px rgba(0, 0, 0, 0.32),
            0 0 1px rgba(255, 255, 255, 0.52);
        }

        .sp-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          width: min(390px, 64%);
          margin: 48px auto 44px;
          color: var(--sp-gold-bright);
        }

        .sp-ornament span {
          height: 1px;
          flex: 1;
          background: linear-gradient(
            to right,
            transparent,
            rgba(217, 168, 93, 0.95)
          );
        }

        .sp-ornament span:last-child {
          background: linear-gradient(
            to left,
            transparent,
            rgba(217, 168, 93, 0.95)
          );
        }

        .sp-ornament strong {
          font-size: 17px;
          line-height: 1;
          font-weight: 400 !important;
          transform: translateY(-0.5px);
        }

        .sp-ornament-small {
          width: 136px;
          gap: 9px;
          margin: 10px auto 0;
        }

        .sp-ornament-small strong {
          font-size: 9px;
        }

        .sp-cover-subtitle {
          color: var(--sp-gold-bright);
          text-transform: uppercase;
          letter-spacing: 0.31em;
          font-size: clamp(15px, 1.75vw, 19px);
          line-height: 2.04;
          text-shadow: 0 5px 14px rgba(0, 0, 0, 0.22);
        }

        .sp-cover-subtitle p {
          margin: 0;
        }

        .sp-since {
          margin: 52px 0 0;
          color: var(--sp-gold-bright);
          font-size: clamp(14px, 1.55vw, 18px);
          line-height: 1;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          text-shadow: 0 5px 14px rgba(0, 0, 0, 0.22);
        }

        .sp-since-number {
          letter-spacing: 0.2em;
          font-variant-numeric: lining-nums proportional-nums;
          font-feature-settings: "lnum" 1, "pnum" 1;
        }

        .sp-small-line {
          width: 54px;
          height: 1px;
          margin-top: 46px;
          background: rgba(217, 168, 93, 0.95);
        }

        .sp-menu-header {
          text-align: center;
          flex: 0 0 auto;
        }

        .sp-menu-logo {
          width: 72px;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto 7px;
          filter: brightness(0) saturate(100%) invert(14%) sepia(50%)
            saturate(1200%) hue-rotate(179deg) brightness(88%) contrast(97%);
        }

        .sp-menu-header h1 {
          margin: 0;
          color: var(--sp-site-blue);
          font-size: 34px;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: none;
          font-variant-caps: small-caps;
          white-space: nowrap;
        }

        .sp-sections {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 48px;
          padding-bottom: 14px;
        }

        .sp-menu-section {
          width: 100%;
        }

        .sp-menu-section + .sp-menu-section {
          margin-top: 24px;
        }

        .sp-section-title {
          margin-bottom: 10px;
          text-align: center;
          color: var(--sp-site-blue);
        }

        .sp-title-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          column-gap: 18px;
        }

        .sp-title-row span {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(197, 154, 97, 0.56),
            transparent
          );
        }

        .sp-section-title h2,
        .sp-fish-page .sp-section-title h2,
        .sp-shellfish-page .sp-section-title h2,
        .sp-sides-page .sp-section-title h2 {
          margin: 0;
          color: var(--sp-site-blue);
          font-size: 28px;
          line-height: 1;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sp-section-title h2 em {
          margin-left: 8px;
          font-size: 7.1px;
          line-height: 1;
          font-style: normal;
          letter-spacing: 0.08em;
          color: var(--sp-site-blue);
          vertical-align: middle;
        }

        .sp-section-title p {
          margin: 8px 0 0;
          color: var(--sp-ink-soft);
          font-size: 7.1px;
          line-height: 1;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .sp-title-double-line {
          width: 104px;
          margin: 9px auto 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sp-title-double-line span {
          display: block;
          height: 0.7px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(197, 154, 97, 0.72),
            transparent
          );
        }

        .sp-menu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sp-item-wrap + .sp-item-wrap,
        .sp-dense-page .sp-item-wrap + .sp-item-wrap,
        .sp-fish-page .sp-item-wrap + .sp-item-wrap,
        .sp-shellfish-page .sp-item-wrap + .sp-item-wrap,
        .sp-sides-page .sp-item-wrap + .sp-item-wrap,
        .sp-shellfish-page
          .sp-menu-section:first-child
          .sp-item-wrap
          + .sp-item-wrap {
          margin-top: 4px;
        }

        .sp-item,
        .sp-item-compact,
        .sp-dense-page .sp-item,
        .sp-fish-page .sp-item,
        .sp-shellfish-page .sp-item,
        .sp-sides-page .sp-item,
        .sp-shellfish-page .sp-menu-section:first-child .sp-item,
        .sp-shellfish-page .sp-menu-section:nth-child(2) .sp-item,
        .sp-shellfish-page .sp-menu-section:nth-child(3) .sp-item {
          display: flex;
          align-items: baseline;
          width: 100%;
          min-width: 0;
          color: var(--sp-ink);
          font-size: 12.6px;
          line-height: 1.2;
          letter-spacing: 0.105em;
          text-transform: uppercase;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-item-label {
          display: inline-flex;
          align-items: baseline;
          min-width: 0;
          max-width: 78%;
          white-space: nowrap;
          flex: 0 1 auto;
        }

        .sp-item-name {
          white-space: nowrap;
        }

        .sp-item-note,
        .sp-item-unit {
          margin-left: 5px;
          font-size: 7.1px;
          line-height: 1;
          letter-spacing: 0.04em;
          color: var(--sp-ink-soft);
          opacity: 0.88;
          white-space: nowrap;
        }

        .sp-item-no-price {
          justify-content: center;
          text-align: center;
        }

        .sp-item-no-price .sp-item-label {
          max-width: 100%;
          justify-content: center;
        }

        .sp-item-wrap-no-price {
          margin-top: 10px;
        }

        .sp-leader {
          flex: 1 1 auto;
          min-width: 22px;
          height: 1px;
          margin: 0 8px;
          transform: translateY(-4px);
          background-image: linear-gradient(
            to right,
            rgba(197, 154, 97, 0.34) 35%,
            transparent 0%
          );
          background-size: 6px 1px;
          background-repeat: repeat-x;
          background-position: left center;
        }

        .sp-price {
          flex: 0 0 34px;
          min-width: 34px;
          text-align: right;
          letter-spacing: 0.01em;
          white-space: nowrap;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-description,
        .sp-dense-page .sp-description,
        .sp-fish-page .sp-description,
        .sp-shellfish-page .sp-description,
        .sp-sides-page .sp-description {
          margin: 4px 0 0;
          max-width: 91%;
          color: var(--sp-ink-soft);
          font-size: 7.1px;
          line-height: 1.26;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sp-has-description {
          margin-bottom: 8px;
        }

        .sp-dense-page .sp-sections {
          padding-top: 48px;
        }

        .sp-dense-page .sp-section-title {
          margin-bottom: 18px;
        }

        .sp-fish-page .sp-menu-content,
        .sp-shellfish-page .sp-menu-content,
        .sp-sides-page .sp-menu-content {
          padding: 50px 112px 36px;
        }

        .sp-fish-page .sp-menu-logo,
        .sp-shellfish-page .sp-menu-logo,
        .sp-sides-page .sp-menu-logo {
          width: 70px;
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
          padding-top: 48px;
        }

        .sp-fish-page .sp-menu-section + .sp-menu-section,
        .sp-shellfish-page .sp-menu-section + .sp-menu-section,
        .sp-sides-page .sp-menu-section + .sp-menu-section {
          margin-top: 24px;
        }

        .sp-fish-page .sp-section-title,
        .sp-shellfish-page .sp-section-title,
        .sp-sides-page .sp-section-title {
          margin-bottom: 11px;
        }

        .sp-shellfish-page .sp-menu-content {
          padding-top: 48px;
        }

        .sp-shellfish-page .sp-menu-section:nth-child(3) {
          margin-top: 24px;
        }

        .sp-sides-page .sp-menu-content {
          padding-top: 52px;
        }

        .sp-sides-page .sp-menu-header {
          margin-bottom: 0;
        }

        .sp-sides-page .sp-sections {
          padding-top: 48px;
        }

        .sp-sides-page .sp-section-title {
          margin-bottom: 14px;
        }

        .sp-sides-page .sp-item-wrap + .sp-item-wrap {
          margin-top: 5px;
        }

        .sp-legal {
          flex: 0 0 auto;
          text-align: center;
          color: #172a40;
          font-size: 7px;
          line-height: 1;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          opacity: 0.88;
          font-variant-numeric: lining-nums proportional-nums;
          font-feature-settings: "lnum" 1, "pnum" 1;
        }

        .sp-euro {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.95em;
          letter-spacing: 0;
          vertical-align: baseline;
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

          .sp-cover-content {
            padding: 62px 42px;
          }

          .sp-cover-logo {
            width: clamp(130px, 32vw, 175px);
            margin-bottom: 30px;
          }

          .sp-cover h1 {
            width: 100%;
            padding-left: 0.035em;
            font-size: clamp(42px, 12vw, 60px);
            letter-spacing: 0.04em;
            text-align: center;
          }

          .sp-ornament {
            width: min(290px, 70%);
            margin: 34px auto 34px;
          }

          .sp-cover-subtitle {
            font-size: clamp(12px, 3vw, 15px);
            letter-spacing: 0.22em;
          }

          .sp-since {
            margin-top: 38px;
            gap: 18px;
            font-size: clamp(11px, 2.8vw, 14px);
          }

          .sp-since-number {
            letter-spacing: 0.12em;
          }

          .sp-menu-content,
          .sp-fish-page .sp-menu-content,
          .sp-shellfish-page .sp-menu-content,
          .sp-sides-page .sp-menu-content {
            padding: 34px 42px 30px;
          }

          .sp-menu-logo,
          .sp-fish-page .sp-menu-logo,
          .sp-shellfish-page .sp-menu-logo,
          .sp-sides-page .sp-menu-logo {
            width: 50px;
            margin-bottom: 6px;
          }

          .sp-menu-header h1,
          .sp-fish-page .sp-menu-header h1,
          .sp-shellfish-page .sp-menu-header h1,
          .sp-sides-page .sp-menu-header h1 {
            font-size: clamp(23px, 6.4vw, 31px);
            letter-spacing: 0.06em;
          }

          .sp-ornament-small {
            width: 104px;
            margin-top: 10px;
          }

          .sp-sections,
          .sp-dense-page .sp-sections,
          .sp-fish-page .sp-sections,
          .sp-shellfish-page .sp-sections,
          .sp-sides-page .sp-sections {
            padding-top: 28px;
          }

          .sp-menu-section + .sp-menu-section,
          .sp-fish-page .sp-menu-section + .sp-menu-section,
          .sp-shellfish-page .sp-menu-section + .sp-menu-section,
          .sp-sides-page .sp-menu-section + .sp-menu-section {
            margin-top: 16px;
          }

          .sp-section-title h2,
          .sp-fish-page .sp-section-title h2,
          .sp-shellfish-page .sp-section-title h2,
          .sp-sides-page .sp-section-title h2 {
            font-size: clamp(16px, 4.2vw, 22px);
            letter-spacing: 0.1em;
          }

          .sp-title-row {
            column-gap: 10px;
          }

          .sp-section-title p,
          .sp-section-title h2 em,
          .sp-item-note,
          .sp-item-unit {
            font-size: clamp(5px, 1.5vw, 7.1px);
            letter-spacing: 0.055em;
          }

          .sp-title-double-line {
            width: 82px;
            margin-top: 7px;
            gap: 3px;
          }

          .sp-item,
          .sp-item-compact,
          .sp-dense-page .sp-item,
          .sp-fish-page .sp-item,
          .sp-shellfish-page .sp-item,
          .sp-sides-page .sp-item,
          .sp-shellfish-page .sp-menu-section:first-child .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(2) .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(3) .sp-item {
            font-size: clamp(8px, 2.35vw, 11.5px);
            line-height: 1.12;
            letter-spacing: 0.075em;
          }

          .sp-item-wrap + .sp-item-wrap,
          .sp-dense-page .sp-item-wrap + .sp-item-wrap,
          .sp-fish-page .sp-item-wrap + .sp-item-wrap,
          .sp-shellfish-page .sp-item-wrap + .sp-item-wrap,
          .sp-sides-page .sp-item-wrap + .sp-item-wrap,
          .sp-shellfish-page
            .sp-menu-section:first-child
            .sp-item-wrap
            + .sp-item-wrap {
            margin-top: 3px;
          }

          .sp-item-wrap-no-price {
            margin-top: 8px;
          }

          .sp-description,
          .sp-dense-page .sp-description,
          .sp-fish-page .sp-description,
          .sp-shellfish-page .sp-description,
          .sp-sides-page .sp-description {
            font-size: clamp(5px, 1.5vw, 7px);
            line-height: 1.2;
            letter-spacing: 0.055em;
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

          .sp-legal {
            font-size: 5.5px;
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
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .sp-frame-image {
            width: 210mm;
            height: 297mm;
            object-fit: fill;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </main>
  )
}