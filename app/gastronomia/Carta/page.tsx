"use client"

import Link from "next/link"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="sp-section-title">
      <div className="sp-title-row">
        <span />
        <h2 className={cinzel.className}>{title}</h2>
        <span />
      </div>
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

      <h1>Senhor Peixe</h1>

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
}: {
  sections: Section[]
  dense?: boolean
}) {
  return (
    <section className={`sp-page sp-menu-page ${dense ? "sp-dense-page" : ""}`}>
      <div className="sp-menu-border sp-outer-menu-border" />
      <div className="sp-menu-border sp-inner-menu-border" />

      <MenuCorners />

      <div className="sp-paper-texture" />

      <div className="sp-menu-content">
        <MenuHeader />

        <div className="sp-sections">
          {sections.map((section) => (
            <section className="sp-menu-section" key={section.title}>
              <SectionTitle title={section.title} />

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

          <h1>SENHOR PEIXE</h1>

          <Ornament />

          <div className="sp-cover-subtitle">
            <p>Cozinha Portuguesa</p>
            <p>Peixe e Marisco</p>
          </div>

          <p className="sp-since">DESDE 1999</p>

          <div className="sp-small-line" />
        </div>
      </section>

      <MenuPage sections={couvertSections} />
      <MenuPage sections={especialidadesSections} dense />

      <style jsx global>{`
        :root {
          --sp-navy: #092b51;
          --sp-navy-soft: #17395b;
          --sp-blue-line: rgba(9, 43, 81, 0.5);

          --sp-gold: #c89b55;
          --sp-gold-light: rgba(200, 155, 85, 0.54);
          --sp-gold-line: rgba(200, 155, 85, 0.62);

          --sp-paper-center: #fffefa;
          --sp-paper: #fbf7ef;
          --sp-paper-soft: #f7f0e6;
          --sp-paper-edge: #efe5d5;

          --sp-page-width: 794px;
          --sp-page-ratio: 210 / 297;
        }

        * {
          box-sizing: border-box;
        }

        .sp-shell {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.42) 0%,
              rgba(226, 219, 207, 0.94) 58%,
              rgba(212, 203, 190, 1) 100%
            );
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 54px;
          padding: 48px 18px 70px;
        }

        .sp-back-link {
          align-self: flex-start;
          margin: 0 auto -26px;
          width: min(92vw, var(--sp-page-width));
          color: var(--sp-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          opacity: 0.7;
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
            0 24px 70px rgba(0, 0, 0, 0.18),
            0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .sp-cover {
          background:
            radial-gradient(
              circle at center,
              rgba(28, 54, 86, 0.98) 0%,
              rgba(14, 37, 62, 1) 52%,
              rgba(8, 27, 47, 1) 100%
            );
          color: #f8f3e8;
        }

        .sp-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.05),
              transparent 28%,
              rgba(255, 255, 255, 0.025) 52%,
              transparent 76%
            ),
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.025),
              transparent 62%
            );
          pointer-events: none;
        }

        .sp-menu-page {
          background:
            radial-gradient(
              circle at 50% 42%,
              var(--sp-paper-center) 0%,
              var(--sp-paper) 47%,
              var(--sp-paper-soft) 78%,
              var(--sp-paper-edge) 100%
            );
          color: var(--sp-navy);
        }

        .sp-menu-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.34) 0%,
              rgba(255, 255, 255, 0.08) 34%,
              transparent 64%,
              rgba(200, 155, 85, 0.018) 100%
            );
          opacity: 0.45;
        }

        .sp-paper-texture {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.18;
          background:
            radial-gradient(
              circle at 18% 16%,
              rgba(200, 155, 85, 0.04),
              transparent 26%
            ),
            radial-gradient(
              circle at 82% 70%,
              rgba(9, 43, 81, 0.02),
              transparent 32%
            );
        }

        .sp-cover-border,
        .sp-menu-border {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }

        .sp-outer-cover-border {
          inset: 28px;
          border: 2px solid rgba(200, 155, 85, 0.9);
        }

        .sp-inner-cover-border {
          inset: 42px;
          border: 1px solid rgba(200, 155, 85, 0.78);
        }

        .sp-outer-menu-border {
          inset: 22px;
          border: 1.4px solid rgba(200, 155, 85, 0.68);
        }

        .sp-inner-menu-border {
          inset: 34px;
          border: 1px solid rgba(200, 155, 85, 0.38);
        }

        .sp-art-corner {
          position: absolute;
          width: 86px;
          height: 86px;
          z-index: 3;
          pointer-events: none;
          color: rgba(200, 155, 85, 0.92);
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
          transform-origin: center;
          opacity: 0.85;
        }

        .sp-menu-corner {
          position: absolute;
          z-index: 3;
          width: 58px;
          height: 58px;
          pointer-events: none;
          color: rgba(200, 155, 85, 0.52);
        }

        .sp-menu-corner::before {
          content: "";
          position: absolute;
          inset: 0;
          border-top: 1.4px solid currentColor;
          border-left: 1.4px solid currentColor;
          border-top-left-radius: 50px;
        }

        .sp-menu-corner::after {
          content: "";
          position: absolute;
          top: 10px;
          left: 10px;
          width: 47px;
          height: 47px;
          border-top: 1px solid currentColor;
          border-left: 1px solid currentColor;
          border-top-left-radius: 40px;
          opacity: 0.5;
        }

        .sp-menu-corner-top-left {
          top: 22px;
          left: 22px;
        }

        .sp-menu-corner-top-right {
          top: 22px;
          right: 22px;
          transform: scaleX(-1);
        }

        .sp-menu-corner-bottom-left {
          bottom: 22px;
          left: 22px;
          transform: scaleY(-1);
        }

        .sp-menu-corner-bottom-right {
          bottom: 22px;
          right: 22px;
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
          color: #f8f3e8;
          font-size: clamp(70px, 8.8vw, 96px);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 7px 18px rgba(0, 0, 0, 0.28);
        }

        .sp-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          width: min(430px, 68%);
          margin: 50px auto 48px;
          color: rgba(200, 155, 85, 0.86);
        }

        .sp-ornament span {
          height: 1px;
          flex: 1;
          background: linear-gradient(
            to right,
            transparent,
            rgba(200, 155, 85, 0.58)
          );
        }

        .sp-ornament span:last-child {
          background: linear-gradient(
            to left,
            transparent,
            rgba(200, 155, 85, 0.58)
          );
        }

        .sp-ornament strong {
          font-size: 20px;
          line-height: 1;
          font-weight: 400;
        }

        .sp-ornament-small {
          width: 118px;
          gap: 10px;
          margin: 12px auto 0;
        }

        .sp-ornament-small strong {
          font-size: 9px;
          transform: scaleX(0.84);
        }

        .sp-cover-subtitle {
          color: var(--sp-gold);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: clamp(17px, 2vw, 22px);
          line-height: 1.95;
          font-weight: 500;
        }

        .sp-cover-subtitle p {
          margin: 0;
        }

        .sp-since {
          margin: 50px 0 0;
          color: var(--sp-gold);
          font-size: clamp(16px, 1.8vw, 21px);
          line-height: 1;
          letter-spacing: 0.38em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .sp-small-line {
          width: 56px;
          height: 1px;
          margin-top: 34px;
          background: rgba(200, 155, 85, 0.86);
        }

        .sp-menu-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 46px 108px 42px;
        }

        .sp-menu-header {
          text-align: center;
          flex: 0 0 auto;
        }

        .sp-menu-logo {
          width: 74px;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto 8px;
          filter: brightness(0) saturate(100%) invert(16%) sepia(54%)
            saturate(1130%) hue-rotate(179deg) brightness(86%) contrast(94%);
        }

        .sp-menu-header h1 {
          margin: 0;
          color: var(--sp-navy);
          font-size: 36px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.095em;
          text-transform: none;
          white-space: nowrap;
          text-shadow: none;
        }

        .sp-sections {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 24px;
          padding-bottom: 2px;
        }

        .sp-menu-section {
          width: 100%;
        }

        .sp-section-title {
          margin-bottom: 9px;
          text-align: center;
          color: var(--sp-navy);
        }

        .sp-title-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          column-gap: 17px;
        }

        .sp-title-row span {
          height: 1px;
          background: var(--sp-gold-line);
        }

        .sp-section-title h2 {
          margin: 0;
          color: var(--sp-navy);
          font-size: 26px;
          line-height: 0.98;
          font-weight: 500;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: none;
        }

        .sp-section-title > strong {
          display: block;
          margin-top: 8px;
          color: rgba(200, 155, 85, 0.86);
          font-size: 9px;
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
          color: var(--sp-navy);
          font-size: 14.6px;
          line-height: 1.18;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings:
            "lnum" 1,
            "tnum" 1;
        }

        .sp-item-compact {
          font-size: 10.8px;
          letter-spacing: 0.135em;
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
          font-size: 0.64em;
          letter-spacing: 0.14em;
          font-weight: 600;
          opacity: 0.93;
          white-space: nowrap;
        }

        .sp-item-unit {
          margin-left: 6px;
          font-family: inherit;
          font-size: 0.54em;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: var(--sp-navy);
          opacity: 0.9;
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
            rgba(9, 43, 81, 0.44) 0.8px,
            transparent 1.22px
          );
          background-size: 6px 1px;
          background-repeat: repeat-x;
          background-position: left center;
          opacity: 0.58;
        }

        .sp-price {
          flex: 0 0 30px;
          min-width: 30px;
          text-align: right;
          letter-spacing: 0.02em;
          font-weight: 600;
          white-space: nowrap;
        }

        .sp-description {
          margin: 4px 0 0;
          max-width: 91%;
          color: var(--sp-navy-soft);
          font-size: 8.35px;
          line-height: 1.28;
          letter-spacing: 0.125em;
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
          margin-bottom: 17px;
        }

        .sp-dense-page .sp-item {
          font-size: 13.05px;
          line-height: 1.1;
          letter-spacing: 0.158em;
        }

        .sp-dense-page .sp-item-wrap + .sp-item-wrap {
          margin-top: 3px;
        }

        .sp-dense-page .sp-has-description {
          margin-bottom: 7px;
        }

        .sp-dense-page .sp-description {
          font-size: 7.65px;
          line-height: 1.24;
          letter-spacing: 0.108em;
          max-width: 90%;
        }

        .sp-menu-content footer {
          flex: 0 0 auto;
        }

        .sp-menu-content footer .sp-ornament {
          width: 118px;
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

          .sp-menu-content {
            padding: 34px 42px 32px;
          }

          .sp-menu-logo {
            width: 52px;
            margin-bottom: 7px;
          }

          .sp-menu-header h1 {
            font-size: clamp(23px, 6.6vw, 32px);
            letter-spacing: 0.08em;
          }

          .sp-ornament-small {
            width: 108px;
            margin-top: 11px;
          }

          .sp-sections,
          .sp-dense-page .sp-sections {
            padding-top: 17px;
          }

          .sp-section-title {
            margin-bottom: 7px;
          }

          .sp-section-title h2 {
            font-size: clamp(16px, 4.4vw, 22px);
            letter-spacing: 0.12em;
          }

          .sp-section-title > strong {
            margin-top: 5px;
            font-size: 8px;
          }

          .sp-item,
          .sp-dense-page .sp-item {
            font-size: clamp(8px, 2.35vw, 11.5px);
            line-height: 1.12;
            letter-spacing: 0.105em;
          }

          .sp-item-compact {
            font-size: clamp(6.8px, 1.95vw, 9.5px);
          }

          .sp-item-wrap + .sp-item-wrap,
          .sp-dense-page .sp-item-wrap + .sp-item-wrap {
            margin-top: 3px;
          }

          .sp-has-description,
          .sp-dense-page .sp-has-description {
            margin-bottom: 5px;
          }

          .sp-description,
          .sp-dense-page .sp-description {
            font-size: clamp(5px, 1.5vw, 7px);
            line-height: 1.2;
            letter-spacing: 0.075em;
          }

          .sp-leader {
            min-width: 12px;
            margin: 0 5px;
            background-size: 5px 1px;
          }

          .sp-price {
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