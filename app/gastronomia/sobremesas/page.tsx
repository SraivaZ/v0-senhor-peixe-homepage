"use client"

import Link from "next/link"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

type MenuItem = {
  name: string
  price: string
}

type MenuSection = {
  title: string
  subtitle?: string
  items: MenuItem[]
}

const dessertSections: MenuSection[] = [
  {
    title: "SOBREMESAS",
    subtitle: "Desserts · Postres · Desserts",
    items: [
      { name: "Baba de Camelo", price: "5" },
      { name: "Bolo Fatia", price: "5" },
      { name: "Cheesecake", price: "5,50" },
      { name: "Doce da Casa", price: "5,50" },
      { name: "Mousse Café", price: "5" },
      { name: "Mousse Chocolate", price: "5" },
      { name: "Mousse Manga", price: "5" },
      { name: "Pudim de Ovos", price: "5,50" },
    ],
  },
  {
    title: "FRUTAS",
    subtitle: "Fruit · Fruta · Fruits",
    items: [
      { name: "Prato Fruta Tropical", price: "19" },
      { name: "Abacaxi", price: "5" },
      { name: "Manga", price: "5" },
      { name: "Papaia", price: "5" },
      { name: "Salada de Frutas", price: "5" },
      { name: "Laranja", price: "3,50" },
      { name: "Kiwi", price: "3,50" },
    ],
  },
  {
    title: "NA ÉPOCA",
    subtitle: "Seasonal · De temporada · De saison",
    items: [
      { name: "Maçã Assada", price: "6" },
      { name: "Pêra Bêbada", price: "5" },
      { name: "Morangos", price: "6" },
      { name: "Morangos c/ Chantilly", price: "7" },
      { name: "Cerejas", price: "6" },
      { name: "Melão", price: "5" },
      { name: "Meloa", price: "5" },
    ],
  },
]

function BrandHeader() {
  return (
    <header className="brand-header">
      <div className="brand-logo" aria-hidden="true">
        <img src="/images/logo-peixe.png" alt="" />
      </div>

      <p className={`brand-name ${cinzel.className}`}>SENHOR PEIXE</p>

      <div className="brand-rule" />

      <h1 className={`page-title ${cinzel.className}`}>SOBREMESAS</h1>
      <p className={`page-subtitle ${cinzel.className}`}>
        DESSERTS · FRUTAS · NA ÉPOCA
      </p>
    </header>
  )
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-row">
      <div className="item-name">{item.name}</div>
      <div className="price-dots" aria-hidden="true" />
      <div className="item-price">{item.price}</div>
    </div>
  )
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="menu-section">
      <div className="section-heading">
        <h2 className={`section-title ${cinzel.className}`}>{section.title}</h2>
        {section.subtitle ? <p className="section-subtitle">{section.subtitle}</p> : null}
      </div>

      <div className="section-list">
        {section.items.map((item) => (
          <MenuRow key={`${section.title}-${item.name}`} item={item} />
        ))}
      </div>
    </section>
  )
}

function CoverPage() {
  return (
    <section className="menu-page cover-page" aria-label="Capa carta de sobremesas">
      <img
        className="cover-image"
        src="/CAPA SOBREMESAS.png"
        alt="Carta de Sobremesas Senhor Peixe"
      />
    </section>
  )
}

function DessertsPage() {
  return (
    <section className="menu-page content-page">
      <div className="page-border page-border-outer" />
      <div className="page-border page-border-inner" />

      <BrandHeader />

      <main className="content-grid">
        {dessertSections.map((section) => (
          <MenuSectionBlock key={section.title} section={section} />
        ))}
      </main>

      <footer className="menu-footer">
        <p>PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR</p>
        <p>
          PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE · PRECIOS EN €,
          INCLUYEN IVA AL TIPO LEGAL VIGENTE · PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR
        </p>
      </footer>
    </section>
  )
}

export default function CartaSobremesasPage() {
  return (
    <main className={`menu-shell ${cormorant.className}`}>
      <Link href="/gastronomia" className={`back-link ${cinzel.className}`}>
        Voltar
      </Link>

      <CoverPage />
      <DessertsPage />

      <style jsx>{`
        .menu-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 32rem),
            linear-gradient(180deg, #071b2d 0%, #10243d 45%, #071b2d 100%);
          padding: 34px 18px 64px;
          color: #10243d;
        }

        .back-link {
          position: fixed;
          left: 24px;
          top: 22px;
          z-index: 20;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 92px;
          height: 38px;
          border: 1px solid rgba(200, 169, 106, 0.72);
          border-radius: 999px;
          background: rgba(7, 27, 45, 0.7);
          color: #f7f2e9;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .back-link:hover {
          background: rgba(200, 169, 106, 0.22);
          border-color: rgba(200, 169, 106, 0.95);
          transform: translateY(-1px);
        }

        .menu-page {
          position: relative;
          width: min(100%, 794px);
          min-height: 1123px;
          margin: 0 auto 34px;
          overflow: hidden;
          background: #f7f2e9;
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(200, 169, 106, 0.28);
        }

        .cover-page {
          display: flex;
          align-items: stretch;
          justify-content: center;
          padding: 0;
          background: #f7f2e9;
        }

        .cover-image {
          width: 100%;
          height: 100%;
          min-height: 1123px;
          display: block;
          object-fit: cover;
        }

        .content-page {
          padding: 82px 78px 76px;
        }

        .page-border {
          position: absolute;
          pointer-events: none;
          border: 1px solid rgba(184, 130, 58, 0.64);
        }

        .page-border-outer {
          inset: 28px;
        }

        .page-border-inner {
          inset: 42px;
          opacity: 0.58;
        }

        .brand-header {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .brand-logo {
          width: 86px;
          height: 86px;
          margin-bottom: 20px;
        }

        .brand-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .brand-name {
          margin: 0;
          color: #10243d;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: 0.42em;
          font-weight: 500;
        }

        .brand-rule {
          width: 72px;
          height: 1px;
          margin: 26px 0 24px;
          background: #b8823a;
        }

        .page-title {
          margin: 0;
          color: #b8823a;
          font-size: 48px;
          line-height: 1;
          letter-spacing: 0.34em;
          font-weight: 400;
        }

        .page-subtitle {
          margin: 18px 0 0;
          color: #10243d;
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: 0.22em;
          font-weight: 600;
        }

        .content-grid {
          position: relative;
          z-index: 1;
          margin-top: 58px;
          display: grid;
          gap: 42px;
        }

        .menu-section {
          position: relative;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(184, 130, 58, 0.42);
        }

        .section-title {
          margin: 0;
          color: #10243d;
          font-size: 25px;
          line-height: 1.05;
          letter-spacing: 0.22em;
          font-weight: 500;
        }

        .section-subtitle {
          margin: 0 0 2px;
          color: rgba(16, 36, 61, 0.68);
          font-size: 14px;
          line-height: 1.2;
          text-align: right;
          white-space: nowrap;
        }

        .section-list {
          display: grid;
          gap: 10px;
          padding-top: 16px;
        }

        .menu-row {
          display: grid;
          grid-template-columns: minmax(0, auto) 1fr auto;
          align-items: baseline;
          column-gap: 10px;
          min-height: 28px;
        }

        .item-name {
          color: #2b2926;
          font-size: 18px;
          line-height: 1.22;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .price-dots {
          height: 1px;
          border-bottom: 1px dotted rgba(16, 36, 61, 0.34);
          transform: translateY(-4px);
        }

        .item-price {
          min-width: 44px;
          color: #10243d;
          font-size: 18px;
          line-height: 1.1;
          text-align: right;
          font-weight: 600;
        }

        .menu-footer {
          position: absolute;
          left: 78px;
          right: 78px;
          bottom: 60px;
          z-index: 1;
          display: grid;
          gap: 8px;
          text-align: center;
          color: rgba(16, 36, 61, 0.76);
          font-size: 9.5px;
          line-height: 1.45;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .menu-footer p {
          margin: 0;
        }

        @media print {
          .menu-shell {
            background: #fff;
            padding: 0;
          }

          .back-link {
            display: none;
          }

          .menu-page {
            width: 794px;
            min-height: 1123px;
            margin: 0;
            box-shadow: none;
            break-after: page;
            page-break-after: always;
          }
        }

        @media (max-width: 860px) {
          .menu-shell {
            padding: 0 0 36px;
          }

          .back-link {
            left: 14px;
            top: 14px;
            min-width: 78px;
            height: 34px;
            font-size: 10px;
            background: rgba(7, 27, 45, 0.82);
          }

          .menu-page {
            width: 100vw;
            min-height: calc(100vw * 1.414);
            margin-bottom: 18px;
            box-shadow: none;
          }

          .cover-image {
            min-height: calc(100vw * 1.414);
          }

          .content-page {
            padding: 9.8vw 8.2vw 10vw;
          }

          .page-border-outer {
            inset: 3.2vw;
          }

          .page-border-inner {
            inset: 4.8vw;
          }

          .brand-logo {
            width: 11vw;
            height: 11vw;
            margin-bottom: 2.6vw;
          }

          .brand-name {
            font-size: clamp(13px, 3vw, 24px);
            letter-spacing: 0.35em;
          }

          .brand-rule {
            width: 9vw;
            margin: 3.3vw 0 3vw;
          }

          .page-title {
            font-size: clamp(25px, 6.4vw, 48px);
            letter-spacing: 0.28em;
          }

          .page-subtitle {
            margin-top: 2.2vw;
            font-size: clamp(8px, 1.65vw, 12px);
            letter-spacing: 0.17em;
          }

          .content-grid {
            margin-top: 6.5vw;
            gap: 4.2vw;
          }

          .section-heading {
            gap: 12px;
            padding-bottom: 1.7vw;
          }

          .section-title {
            font-size: clamp(15px, 3.3vw, 25px);
            letter-spacing: 0.18em;
          }

          .section-subtitle {
            font-size: clamp(9px, 1.8vw, 14px);
          }

          .section-list {
            gap: 1.1vw;
            padding-top: 2vw;
          }

          .menu-row {
            column-gap: 7px;
            min-height: 3.6vw;
          }

          .item-name,
          .item-price {
            font-size: clamp(12px, 2.25vw, 18px);
          }

          .item-price {
            min-width: 34px;
          }

          .menu-footer {
            left: 8.2vw;
            right: 8.2vw;
            bottom: 5.6vw;
            font-size: clamp(6.5px, 1.1vw, 9.5px);
            gap: 0.9vw;
          }
        }

        @media (max-width: 520px) {
          .content-page {
            padding-left: 7vw;
            padding-right: 7vw;
          }

          .section-heading {
            display: block;
          }

          .section-subtitle {
            margin-top: 0.9vw;
            text-align: left;
            white-space: normal;
          }

          .item-name,
          .item-price {
            font-size: clamp(11px, 2.65vw, 14px);
          }

          .menu-row {
            min-height: 20px;
          }

          .menu-footer {
            left: 7vw;
            right: 7vw;
          }
        }
      `}</style>
    </main>
  )
}
