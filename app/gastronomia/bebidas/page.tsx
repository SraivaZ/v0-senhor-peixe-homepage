"use client"

import type { ReactNode } from "react"
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

type DrinkRow = {
  name?: string
  description?: string
  volume?: string
  price?: string
  groupLabel?: string
}

type DrinkSection = {
  id?: string
  title: string
  subtitle: string
  volume?: string
  rows: DrinkRow[]
  compact?: boolean
  dense?: boolean
}

type IndexEntry = {
  href: string
  label: string
  detail: string
}

const authorCocktails: DrinkRow[] = [
  { name: "Brisa do Mar", description: "Gin, cordial de lima e limão, vinho Madeira Sercial", price: "14" },
  { name: "Nectar da Sereia", description: "Mocktail · Grenadine, sumo de laranja, xarope de blue curaçao", price: "15" },
  { name: "Maré Tropical", description: "Rum, maracujá, manga, gengibre", price: "14" },
]

const classicCocktails: DrinkRow[] = [
  { name: "Rossini", description: "Prosecco, morango", price: "10" },
  { name: "Mimosa", description: "Prosecco, laranja", price: "10" },
  { name: "Negroni", description: "Gin, Campari, vermute tinto reserva especial", price: "12" },
  { name: "Caipirinha", description: "Cachaça, citrinos frescos, açúcar amarelo", price: "13" },
  { name: "Margarita", description: "Tequila, triple sec, citrinos frescos", price: "12" },
  { name: "Mojito", description: "Rum, infusão de hortelã, sumo de lima, calda de hortelã", price: "13" },
  { name: "Old Fashioned", description: "Whiskey, Angostura bitter, calda de açúcar", price: "14" },
  { name: "Aperol Spritz", description: "Prosecco, Aperol, água com gás", price: "14" },
]

const mocktails: DrinkRow[] = [
  { name: "Limonada Hortelã Azul", price: "9" },
  { name: "Limonada Morango / Flor Hibisco", price: "9" },
  { name: "Limonada Manga / Maracujá", price: "9" },
  { name: "Virgin Mojito", price: "11" },
]

const naturalJuices: DrinkRow[] = [
  { name: "Laranja", price: "5" },
  { name: "Limonada", price: "5" },
]

const sangrias: DrinkRow[] = [
  { name: "Senhor Peixe", price: "23" },
  { name: "Espumante", price: "22" },
  { name: "Maracujá", price: "22" },
  { name: "Branca", price: "20" },
  { name: "Tinta", price: "20" },
]

const waters: DrinkRow[] = [
  { name: "Água Luso", volume: "50cl", price: "3,5" },
  { name: "Água c/ Gás", volume: "25cl", description: "Pedras, Castelo", price: "3" },
  { name: "Água Tónica", volume: "20cl", price: "3,5" },
]

const softDrinks: DrinkRow[] = [
  { name: "Sprite", volume: "33cl", price: "3,5" },
  { name: "Coca-Cola", volume: "33cl", price: "3,5" },
  { name: "Coca-Cola Zero", volume: "33cl", price: "3,5" },
  { name: "Fanta Laranja", volume: "33cl", price: "3,5" },
  { name: "Ginger Ale", volume: "20cl", price: "3,5" },
  { name: "Fuze Tea Limão", volume: "33cl", price: "3,5" },
  { name: "Fuze Tea Manga / Ananás", volume: "33cl", price: "3,5" },
  { name: "Fuze Tea Pêssego", volume: "33cl", price: "3,5" },
  { name: "Guaraná Brasil", volume: "33cl", price: "4" },
]

const draftBeers: DrinkRow[] = [
  { name: "Flute de Cerveja", volume: "18cl", price: "3" },
  { name: "Imperial", volume: "20cl", price: "3" },
  { name: "Panachê", volume: "20cl", price: "3" },
  { name: "Caneca", volume: "40cl", price: "5,5" },
]

const bottledBeers: DrinkRow[] = [
  { name: "Sagres", price: "4" },
  { name: "Super Bock", price: "4" },
  { name: "Heineken", price: "5" },
  { name: "Preta", price: "4,5" },
  { name: "S/ Álcool Branca / Preta", price: "4,5" },
  { name: "Bandida do Pomar", price: "4,5" },
  { name: "Bohemia", price: "4,5" },
]

const moscatelRows: DrinkRow[] = [
  { name: "Moscatel D. Ermelinda", price: "5" },
  { name: "Moscatel Roxo D. Ermelinda", price: "9" },
  { name: "Moscatel Superior D. Ermelinda", price: "11" },
  { name: "Moscatel S.V.P. 10 Anos", price: "12" },
  { name: "Moscatel Favaios 1980", price: "27" },
  { name: "Moscatel Favaios 1989", price: "31" },
  { name: "Moscatel Favaios 1999", price: "25" },
]

const carcavelosRows: DrinkRow[] = [
  { name: "Vila Oeiras 7 Anos", price: "8" },
  { name: "Vila Oeiras Superior 15 Anos", price: "16" },
]

const madeiraRows: DrinkRow[] = [
  { name: "J.H. Gonçalves Meio Seco", description: "Tinta Negra", price: "9" },
  { name: "Justino's 10 Anos", description: "Malvasia", price: "11" },
]

const lateHarvestRows: DrinkRow[] = [
  { name: "D. Ermelinda", price: "7" },
  { name: "Qta Gradil", price: "9" },
  { name: "Herdade dos Grous", price: "13" },
]

const portoRubyRows: DrinkRow[] = [
  { name: "D. Antónia", price: "10" },
  { name: "LBV Ramos Pinto", price: "11" },
  { name: "LBV Quinta da Corte", price: "13" },
]

const portoTawnyRows: DrinkRow[] = [
  { name: "Sandeman 10 Anos", price: "12" },
  { name: "Sandeman 20 Anos", price: "19" },
  { name: "Taylor's 30 Anos", price: "30" },
  { name: "Taylor's 40 Anos", price: "56" },
  { name: "Menin 50 Anos", volume: "Bottle", price: "400" },
  { name: "Offley", price: "7" },
]

const whitePortRows: DrinkRow[] = [
  { name: "Offley", price: "6" },
  { name: "Maria Antónia", price: "8" },
  { name: "Sandeman Fine White", price: "6" },
]

const rosePortRows: DrinkRow[] = [{ name: "Croft Pink", price: "6" }]

const vermouthRows: DrinkRow[] = [
  { name: "Martini Bianco", price: "6" },
  { name: "Martini Rosso", price: "6" },
  { name: "Campari", price: "8" },
  { name: "Fernet-Branca", price: "6" },
]

const liqueurRows: DrinkRow[] = [
  { name: "Amarguinha", price: "7" },
  { name: "Beirão", price: "8" },
  { name: "Triple Sec", price: "6" },
  { name: "Frangélico", price: "7" },
  { name: "Ginjinha", price: "5" },
  { name: "Limoncello", price: "7" },
  { name: "Tia Maria", price: "6" },
  { name: "Creme de Cassis", price: "7" },
  { name: "Macieira Cream", price: "7" },
  { name: "Ricard", price: "7" },
]

const ginRows: DrinkRow[] = [
  { name: "Gordon's", price: "8" },
  { name: "Opium", price: "9" },
  { name: "Sharish", price: "12" },
  { name: "Sharish Blue", price: "14" },
  { name: "Sharish Receita do Patrão", price: "16" },
  { name: "Hendrick's", price: "16" },
  { name: "Hendrick's Grand Cabaret", price: "18" },
  { name: "Nordés", price: "16" },
  { name: "Gin Mare", price: "17" },
]

const scotchRows: DrinkRow[] = [
  { name: "Blue Label", description: "Blended Ultra Premium", price: "60" },
  { name: "Black Label 12 Anos", description: "Blended", price: "13" },
  { name: "Cutty Sark Prohibition Edition", description: "Blended", price: "15" },
  { name: "Double Black Label", description: "Blended", price: "14" },
  { name: "Antiquary", description: "Blended", price: "9" },
  { name: "Famous Grouse", description: "Blended", price: "10" },
  { name: "J&B", description: "Blended", price: "8" },
  { name: "Cutty Sark", description: "Blended", price: "8" },
  { name: "Pig's Nose", description: "Blended", price: "10" },
  { name: "Red Label", description: "Blended", price: "9" },
  { name: "Whyte & Mackay", description: "Blended", price: "10" },
  { name: "The Macallan 12 Anos", description: "Single Malt", price: "28" },
  { name: "Balvenie 12 Anos", description: "Single Malt", price: "16" },
  { name: "Glengoyne", description: "Single Malt", price: "15" },
  { name: "Glenrothes", description: "Single Malt", price: "16" },
  { name: "Tamdhu 12 Anos", description: "Single Malt", price: "16" },
]

const irishWhiskeyRows: DrinkRow[] = [
  { name: "Bushmills", description: "Blended", price: "11" },
  { name: "Jameson", description: "Blended", price: "10" },
  { name: "Tullamore Dew", price: "13" },
]

const usaWhiskeyRows: DrinkRow[] = [{ name: "Jack Daniel's", description: "Tennessee", price: "14" }]

const japaneseWhiskyRows: DrinkRow[] = [
  { name: "Yamazakura", price: "14" },
  { name: "Nikka Days", price: "17" },
]

const aguardenteRows: DrinkRow[] = [
  { name: "Louriana XO", price: "32" },
  { name: "Palácio Brejoeira Reserva", price: "26" },
  { name: "Adega Velha XO 12 Anos", price: "20" },
  { name: "Adega Velha 13 Anos", price: "22" },
  { name: "Aliança XO 20 Anos", price: "24" },
  { name: "Aliança XO 40 Anos", price: "37" },
  { name: "Vinha do Contador", price: "25" },
  { name: "CRF", price: "9" },
  { name: "Palácio Brejoeira Bagaceira", price: "19" },
  { name: "Adamus Bagaceira", price: "18" },
  { name: "Quinta do Estanho Velha Bagaceira", price: "22" },
  { name: "São Domingos Bagaceira", price: "6" },
]

const medronhoRows: DrinkRow[] = [
  { name: "Arbum Serra do Caldeirão", price: "18" },
  { name: "Lenda da Beira Pampilhosa da Serra", price: "14" },
]

const cognacRows: DrinkRow[] = [
  { name: "Remy Martin XO", price: "40" },
  { name: "Remy Martin VSOP", price: "20" },
  { name: "Hennessy VS", price: "17" },
]

const brandyRumRows: DrinkRow[] = [
  { name: "Constantino Edição Limitada", price: "11" },
  { name: "Macieira", price: "5" },
  { name: "Diplomático", price: "18" },
  { name: "Burgal 1888", price: "19" },
]

const vodkaTequilaRows: DrinkRow[] = [
  { name: "Grey Goose", price: "13" },
  { name: "Sombrero Negro", price: "10" },
]

const coffeeRows: DrinkRow[] = [
  { name: "Café", price: "2" },
  { name: "Descafeinado", price: "2,5" },
  { name: "Café Duplo", price: "4" },
  { name: "Cappuccino", price: "4,5" },
  { name: "Abatanado", price: "2,5" },
  { name: "Café Pingado", price: "2,5" },
  { name: "Meia de Leite", price: "4" },
  { name: "Carioca Café", price: "2" },
  { name: "Irish Coffee", price: "7" },
]

const teaRows: DrinkRow[] = [
  {
    name: "Chás",
    description: "Verde, preto, camomila, cidreira, tília, frutos vermelhos, lúcia lima, menta, hortelã",
    price: "3,5",
  },
  { name: "Chá de Limão", price: "3" },
  { name: "Carioca de Limão", price: "2" },
]

const indexEntries: IndexEntry[] = [
  { href: "#cocktails", label: "Cocktails", detail: "Autor · Clássicos" },
  { href: "#mocktails-sangrias", label: "Mocktails", detail: "Sumos naturais · Sangrias" },
  { href: "#aguas-refrigerantes", label: "Águas", detail: "Refrigerantes" },
  { href: "#cervejas", label: "Cervejas", detail: "Pressão · Garrafas" },
  { href: "#fortificados", label: "Fortificados", detail: "Moscatel · Madeira · Late Harvest" },
  { href: "#porto", label: "Porto", detail: "Ruby · Tawny · Branco · Rosé" },
  { href: "#bar-licores", label: "Bar", detail: "Vermutes · Licores" },
  { href: "#gins", label: "Gins", detail: "Seleção de gin" },
  { href: "#whisky-escocia", label: "Whisky", detail: "Escócia" },
  { href: "#whisky-internacional", label: "Whiskey", detail: "Irlanda · EUA · Japão" },
  { href: "#aguardentes", label: "Destilados", detail: "Aguardentes · Medronho" },
  { href: "#cognac-rum", label: "Cognac & Rum", detail: "Cognac · Rum · Vodka · Tequila" },
  { href: "#cafetaria", label: "Cafetaria", detail: "Café · Chás · Infusões" },
]

const HERO_LOGO = "/senhor-peixe-logo.png"
const COVER_IMAGE = "/CAPA BEBIDAS.png"
const DRINKS_TITLE = "BEBIDAS"
const DRINKS_SUBTITLE = "DRINKS · BEBIDAS · BOISSONS · GETRÄNKE"

function Page({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`drink-page ${className}`}>
      {children}
    </section>
  )
}

function normalizePrice(price?: string) {
  if (!price) return null

  const normalized = price.trim().replace(".", ",")

  if (!normalized.includes(",")) {
    return normalized
  }

  const [euros, cents = ""] = normalized.split(",")
  return `${euros},${cents.padEnd(2, "0").slice(0, 2)}`
}

function Header({
  mainTitle = DRINKS_TITLE,
  mainSubtitle = DRINKS_SUBTITLE,
}: {
  mainTitle?: string
  mainSubtitle?: string
}) {
  return (
    <header className="drink-header">
      <img src={HERO_LOGO} alt="Senhor Peixe" className="drink-logo" />
      <h1 className={`brand-title ${cinzel.className}`}>SENHOR PEIXE</h1>
      <div className="gold-small-line" />
      <h2 className={`main-title ${cinzel.className}`}>{mainTitle}</h2>
      <p className={`main-subtitle ${cinzel.className}`}>{mainSubtitle}</p>
    </header>
  )
}

function FooterOrnament() {
  return (
    <div className="footer-ornament" aria-hidden="true">
      <span className="ornament-line" />
      <span className="ornament-diamond">◇</span>
      <span className="ornament-line" />
    </div>
  )
}

function CoverPage() {
  return (
    <Page className="cover-page image-cover-page">
      <img src={COVER_IMAGE} alt="Carta de Bebidas Senhor Peixe" className="cover-image" />
    </Page>
  )
}

function IndexPage() {
  return (
    <Page className="index-page" id="indice">
      <Header mainTitle="ÍNDICE" mainSubtitle="BEVERAGE LIST · CARTA DE BEBIDAS" />
      <div className="top-gold-rule" />

      <nav className="index-grid" aria-label="Índice da carta de bebidas">
        {indexEntries.map((entry, index) => (
          <a key={entry.href} href={entry.href} className="index-card">
            <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
            <span className={`index-label ${cinzel.className}`}>{entry.label}</span>
            <span className="index-detail">{entry.detail}</span>
          </a>
        ))}
      </nav>

      <FooterOrnament />
    </Page>
  )
}

function SectionHeader({ title, subtitle, volume }: { title: string; subtitle: string; volume?: string }) {
  return (
    <div className="section-heading">
      <div className="section-title-wrap">
        <h3 className={`section-title ${cinzel.className}`}>{title}</h3>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      {volume ? <span className="section-volume">{volume}</span> : null}
      <span className="section-rule" />
    </div>
  )
}

function DrinkRows({ rows, compact = false, dense = false }: { rows: DrinkRow[]; compact?: boolean; dense?: boolean }) {
  return (
    <div className={`drink-rows ${compact ? "drink-rows-compact" : ""} ${dense ? "drink-rows-dense" : ""}`}>
      {rows.map((row, index) => {
        if (row.groupLabel) {
          return (
            <div key={`${row.groupLabel}-${index}`} className={`group-label ${cinzel.className}`}>
              {row.groupLabel}
            </div>
          )
        }

        return (
          <div key={`${row.name}-${row.price}-${index}`} className={`drink-row ${row.description ? "drink-row-described" : ""}`}>
            <div className="drink-copy">
              <div className="drink-name-line">
                <span className="drink-name">{row.name}</span>
                {row.volume ? <span className="drink-measure">{row.volume}</span> : null}
              </div>
              {row.description ? <p className="drink-description">{row.description}</p> : null}
            </div>
            <div className="drink-price">{normalizePrice(row.price)}</div>
          </div>
        )
      })}
    </div>
  )
}

function DrinkSectionBlock({ id, title, subtitle, volume, rows, compact, dense }: DrinkSection) {
  return (
    <section id={id} className={`drink-section ${dense ? "drink-section-dense" : ""}`}>
      <SectionHeader title={title} subtitle={subtitle} volume={volume} />
      <DrinkRows rows={rows} compact={compact} dense={dense} />
    </section>
  )
}

function DrinkListPage({
  sections,
  className = "",
  mainTitle = DRINKS_TITLE,
  mainSubtitle = DRINKS_SUBTITLE,
  pageId,
}: {
  sections: DrinkSection[]
  className?: string
  mainTitle?: string
  mainSubtitle?: string
  pageId?: string
}) {
  return (
    <Page id={pageId} className={`list-page ${className}`}>
      <Header mainTitle={mainTitle} mainSubtitle={mainSubtitle} />
      <div className="top-gold-rule" />
      <div className="sections-stack">
        {sections.map((section, index) => (
          <DrinkSectionBlock key={`${section.title}-${index}`} {...section} />
        ))}
      </div>
      <FooterOrnament />
    </Page>
  )
}

function SummaryPage() {
  return (
    <Page className="summary-page" id="resumo">
      <section className="summary-content">
        <h2 className={`summary-title ${cinzel.className}`}>A NOSSA CARTA DE BEBIDAS</h2>

        <div className="summary-title-line" />

        <div className="summary-text">
          <p>
            A carta de bar do Senhor Peixe reúne cocktails de autor, clássicos, mocktails, sangrias, destilados,
            fortificados, cafetaria e uma seleção pensada para acompanhar peixe fresco, marisco e cozinha portuguesa.
          </p>

          <p>Para sugestões, harmonizações ou serviço especial, a nossa equipa terá todo o gosto em aconselhar.</p>
        </div>

        <div className={`${cinzel.className} summary-notice`}>
          <p>A NOSSA CARTA DE BEBIDAS É ATUALIZADA REGULARMENTE, A NOSSA EQUIPA TERÁ TODO O GOSTO EM ACONSELHAR.</p>
        </div>

        <div className={`${cinzel.className} summary-prices`}>
          <p>TODOS OS PRODUTOS “NÃO SOLICITADOS” COLOCADOS NA MESA, SE FOREM CONSUMIDOS SERÃO COBRADOS PELO VALOR QUE ESTÁ NO MENU</p>
          <p>PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR</p>
          <p>PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE</p>
          <p>PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR</p>
          <p>PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE</p>
        </div>
      </section>

      <FooterOrnament />
    </Page>
  )
}

export default function CartaBebidasPage() {
  return (
    <main className={`drinks-menu-shell ${cormorant.className}`}>
      <Link href="/gastronomia" className="sp-back-link">
        Voltar
      </Link>

      <CoverPage />
      <IndexPage />

      <DrinkListPage
        pageId="cocktails"
        mainTitle="COCKTAILS"
        mainSubtitle="SIGNATURE · CLASSIC · MOCKTAILS"
        sections={[
          {
            title: "COCKTAILS DE AUTOR",
            subtitle: "Signature Cocktails · Cócteles de autor · Cocktails signature",
            rows: authorCocktails,
          },
          {
            title: "COCKTAILS CLÁSSICOS",
            subtitle: "Classic Cocktails · Cócteles clásicos · Cocktails classiques",
            rows: classicCocktails,
          },
        ]}
      />

      <DrinkListPage
        pageId="mocktails-sangrias"
        sections={[
          { title: "MOCKTAILS", subtitle: "Alcohol-free · Sin alcohol · Sans alcool", volume: "20cl", rows: mocktails },
          { title: "SUMOS NATURAIS", subtitle: "Fresh juices · Zumos naturales · Jus naturels", volume: "20cl", rows: naturalJuices },
          { title: "SANGRIAS", subtitle: "Sangrias · Sangrías · Sangrias", volume: "1L", rows: sangrias },
        ]}
      />

      <DrinkListPage
        pageId="aguas-refrigerantes"
        sections={[
          { title: "ÁGUAS", subtitle: "Waters · Aguas · Eaux · Wasser", rows: waters, compact: true },
          { title: "REFRIGERANTES", subtitle: "Soft drinks · Refrescos · Boissons fraîches", rows: softDrinks, compact: true },
        ]}
      />

      <DrinkListPage
        pageId="cervejas"
        mainTitle="CERVEJAS"
        mainSubtitle="DRAFT · BOTTLED"
        sections={[
          { title: "À PRESSÃO", subtitle: "Draft beer · Cerveza de barril · Bière pression", rows: draftBeers },
          { title: "GARRAFAS", subtitle: "Bottled beer · Cerveza botella · Bière bouteille", volume: "33cl", rows: bottledBeers },
        ]}
      />

      <DrinkListPage
        pageId="fortificados"
        mainTitle="FORTIFICADOS"
        mainSubtitle="MOSCATEL · CARCAVELOS · MADEIRA"
        sections={[
          { title: "MOSCATEL", subtitle: "Moscatel · Muscat · Moscatel", volume: "5cl", rows: moscatelRows, compact: true },
          { title: "CARCAVELOS", subtitle: "Carcavelos · Fortified wine", volume: "5cl", rows: carcavelosRows, compact: true },
          { title: "MADEIRA", subtitle: "Madeira wine · Vino de Madeira · Vin de Madère", volume: "5cl", rows: madeiraRows },
          { title: "LATE HARVEST", subtitle: "Late harvest · Vendimia tardía · Vendange tardive", volume: "5cl", rows: lateHarvestRows },
        ]}
      />

      <DrinkListPage
        pageId="porto"
        mainTitle="PORTO"
        mainSubtitle="RUBY · TAWNY · WHITE · ROSÉ"
        sections={[
          { title: "PORTO RUBY", subtitle: "Ruby Port · Porto Ruby · Porto Ruby", volume: "5cl", rows: portoRubyRows, compact: true },
          { title: "PORTO TAWNY", subtitle: "Tawny Port · Porto Tawny · Porto Tawny", volume: "5cl", rows: portoTawnyRows, compact: true },
          { title: "PORTOS BRANCOS", subtitle: "White Port · Porto blanco · Porto blanc", volume: "5cl", rows: whitePortRows, compact: true },
          { title: "PORTO ROSÉ", subtitle: "Rosé Port · Porto rosado · Porto rosé", volume: "5cl", rows: rosePortRows, compact: true },
        ]}
      />

      <DrinkListPage
        pageId="bar-licores"
        mainTitle="BAR"
        mainSubtitle="VERMUTES · LICORES"
        sections={[
          { title: "VERMUTES & BITTERS", subtitle: "Vermouths & bitters · Vermuts y bitters", volume: "5cl", rows: vermouthRows, compact: true },
          { title: "LICORES / CREAMS & PASTIS", subtitle: "Liqueurs · Cremes · Pastis", volume: "5cl", rows: liqueurRows, compact: true },
        ]}
      />

      <DrinkListPage
        pageId="gins"
        mainTitle="GINS"
        mainSubtitle="GIN · GINEBRAS · GINS"
        sections={[
          { title: "GINS", subtitle: "Gins · Ginebras · Gins", volume: "5cl", rows: ginRows, compact: true },
        ]}
      />

      <DrinkListPage
        pageId="whisky-escocia"
        mainTitle="WHISKY"
        mainSubtitle="SCOTCH · SINGLE MALT · BLENDED"
        sections={[
          { title: "ESCÓCIA", subtitle: "Scotland · Escocia · Écosse", volume: "5cl", rows: scotchRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        pageId="whisky-internacional"
        mainTitle="WHISKEY"
        mainSubtitle="IRISH · USA · JAPAN"
        sections={[
          { title: "IRLANDA", subtitle: "Ireland · Irlanda · Irlande", volume: "5cl", rows: irishWhiskeyRows, compact: true, dense: true },
          { title: "EUA", subtitle: "USA · Estados Unidos · États-Unis", volume: "5cl", rows: usaWhiskeyRows, compact: true, dense: true },
          { title: "JAPÃO", subtitle: "Japan · Japón · Japon", volume: "5cl", rows: japaneseWhiskyRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        pageId="aguardentes"
        mainTitle="DESTILADOS"
        mainSubtitle="AGUARDENTES · BAGACEIRA · MEDRONHO"
        sections={[
          { title: "AGUARDENTES & BAGACEIRA", subtitle: "Brandies · Aguardientes · Eaux-de-vie", volume: "5cl", rows: aguardenteRows, compact: true, dense: true },
          { title: "MEDRONHO", subtitle: "Medronho · Portuguese fruit spirit", volume: "5cl", rows: medronhoRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        pageId="cognac-rum"
        mainTitle="DESTILADOS"
        mainSubtitle="COGNAC · ARMAGNAC · RUM · VODKA"
        sections={[
          { title: "COGNACS & ARMAGNAC", subtitle: "Cognac · Armagnac", volume: "5cl", rows: cognacRows, compact: true, dense: true },
          { title: "BRANDY & RUM", subtitle: "Brandy · Rum · Ron · Rhum", volume: "5cl", rows: brandyRumRows, compact: true, dense: true },
          { title: "VODKA & TEQUILA", subtitle: "Vodka · Tequila", volume: "5cl", rows: vodkaTequilaRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        pageId="cafetaria"
        mainTitle="CAFETARIA"
        mainSubtitle="COFFEE · TEA · INFUSIONS"
        sections={[
          { title: "CAFETARIA", subtitle: "Coffee · Café · Café · Kaffee", rows: coffeeRows, compact: true },
          { title: "CHÁS & INFUSÕES", subtitle: "Teas & infusions · Tés e infusiones · Thés et infusions", rows: teaRows },
        ]}
      />

      <SummaryPage />

      <style jsx global>{`
        :root {
          --drink-navy: #10243d;
          --drink-gold: #b88a45;
          --drink-muted: #617287;
          --drink-paper: #f7f3ec;
          --drink-paper-edge: #e9e3d8;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--drink-paper-edge);
          scroll-behavior: smooth;
        }

        .drinks-menu-shell {
          min-height: 100vh;
          background: var(--drink-paper-edge);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 40px 20px;
          color: var(--drink-navy);
        }

        .sp-back-link {
          align-self: flex-start;
          margin: 0 auto -28px;
          width: min(92vw, 210mm);
          color: #c59a61;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          opacity: 0.85;
          transition:
            color 180ms ease,
            opacity 180ms ease;
        }

        .sp-back-link:hover {
          color: #a97d3f;
          opacity: 1;
        }

        .drink-page {
          width: 210mm;
          min-height: 297mm;
          background:
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.72) 0%,
              rgba(247, 243, 236, 0.97) 62%,
              rgba(238, 232, 222, 1) 100%
            );
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.16);
          position: relative;
          overflow: hidden;
          padding: 18mm 10mm 15mm;
          scroll-margin-top: 24px;
        }

        .cover-page {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 26mm 22mm 34mm;
        }

        .image-cover-page {
          display: block;
          height: 297mm;
          min-height: 297mm;
          padding: 0 !important;
          background: transparent;
        }

        .cover-page.image-cover-page {
          padding: 0 !important;
        }

        .cover-page.image-cover-page .cover-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
        }

        .cover-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .drink-header {
          text-align: center;
          width: 100%;
        }

        .drink-logo {
          width: 31mm;
          height: 31mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 6.4mm;
        }

        .brand-title {
          margin: 0;
          color: var(--drink-navy);
          font-size: 23px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 700;
        }

        .gold-small-line {
          width: 17mm;
          height: 1px;
          background: var(--drink-gold);
          margin: 7.5mm auto 9mm;
        }

        .main-title {
          margin: 0;
          color: var(--drink-gold);
          font-size: 37px;
          line-height: 1;
          letter-spacing: 12px;
          font-weight: 500;
        }

        .main-subtitle {
          margin: 6mm 0 0;
          color: var(--drink-navy);
          font-size: 12px;
          line-height: 1;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .top-gold-rule {
          width: 100%;
          height: 1px;
          background: var(--drink-gold);
          margin: 7mm 0 10mm;
        }

        .index-page {
          padding-left: 14mm;
          padding-right: 14mm;
        }

        .index-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 4.4mm 6mm;
          width: 100%;
          margin-top: 10mm;
        }

        .index-card {
          min-height: 25mm;
          border: 1px solid rgba(184, 138, 69, 0.58);
          background: rgba(255, 255, 255, 0.34);
          color: var(--drink-navy);
          text-decoration: none;
          display: grid;
          grid-template-columns: 12mm 1fr;
          grid-template-rows: auto auto;
          column-gap: 4mm;
          align-items: center;
          padding: 4mm 4.5mm;
          transition:
            border-color 180ms ease,
            transform 180ms ease,
            background 180ms ease;
        }

        .index-card:hover {
          border-color: var(--drink-gold);
          background: rgba(255, 255, 255, 0.54);
          transform: translateY(-1px);
        }

        .index-number {
          grid-row: 1 / span 2;
          color: var(--drink-gold);
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.08em;
          font-weight: 700;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .index-label {
          color: var(--drink-navy);
          font-size: 16px;
          line-height: 1;
          letter-spacing: 2.6px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .index-detail {
          margin-top: 1.5mm;
          color: var(--drink-muted);
          font-size: 12px;
          line-height: 1.18;
          font-weight: 600;
        }

        .index-note {
          margin: 18mm auto 0;
          color: var(--drink-muted);
          text-align: center;
          font-size: 17px;
          line-height: 1.4;
          font-style: italic;
          font-weight: 500;
        }

        .sections-stack {
          width: 100%;
        }

        .drink-section {
          margin-bottom: 7.4mm;
        }

        .drink-section-dense {
          margin-bottom: 5.4mm;
        }

        .drink-section:last-child {
          margin-bottom: 0;
        }

        .section-heading {
          position: relative;
          width: 100%;
          padding-bottom: 3mm;
          margin-bottom: 3.4mm;
        }

        .drink-section-dense .section-heading {
          padding-bottom: 2.5mm;
          margin-bottom: 2.6mm;
        }

        .section-title-wrap {
          text-align: center;
          padding: 0 28mm;
        }

        .section-title {
          margin: 0;
          color: var(--drink-navy);
          font-size: 21px;
          line-height: 1;
          letter-spacing: 5.6px;
          font-weight: 500;
        }

        .section-subtitle {
          margin: 1.8mm 0 0;
          color: var(--drink-gold);
          font-size: 11.6px;
          line-height: 1;
          font-weight: 700;
        }

        .section-volume {
          position: absolute;
          right: 0;
          bottom: 5mm;
          width: 24mm;
          text-align: right;
          color: var(--drink-muted);
          font-size: 11px;
          line-height: 1;
          font-weight: 500;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .section-rule {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--drink-navy);
          opacity: 0.95;
        }

        .drink-rows {
          display: flex;
          flex-direction: column;
          gap: 2.55mm;
        }

        .drink-rows-compact {
          gap: 2mm;
        }

        .drink-rows-dense {
          gap: 1.55mm;
        }

        .drink-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 18mm;
          column-gap: 5mm;
          align-items: baseline;
          color: var(--drink-navy);
          font-size: 12.6px;
          line-height: 1.12;
        }

        .drink-row-described {
          align-items: start;
        }

        .drink-rows-compact .drink-row {
          font-size: 11.8px;
          line-height: 1.08;
        }

        .drink-rows-dense .drink-row {
          font-size: 11px;
          line-height: 1.05;
        }

        .drink-copy {
          min-width: 0;
        }

        .drink-name-line {
          display: flex;
          align-items: baseline;
          gap: 2mm;
          min-width: 0;
        }

        .drink-name {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.035em;
        }

        .drink-measure {
          color: var(--drink-gold);
          font-size: 0.92em;
          line-height: 1;
          white-space: nowrap;
          font-weight: 700;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .drink-description {
          margin: 0.8mm 0 0;
          color: var(--drink-muted);
          font-size: 11.2px;
          line-height: 1.13;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.015em;
        }

        .drink-rows-compact .drink-description,
        .drink-rows-dense .drink-description {
          margin-top: 0.55mm;
          font-size: 10.2px;
          line-height: 1.08;
        }

        .drink-price {
          width: 18mm;
          text-align: right;
          justify-self: end;
          font-weight: 700;
          font-size: 1.1em;
          line-height: 1;
          letter-spacing: 0.01em;
          align-self: start;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .group-label {
          text-align: center;
          color: var(--drink-muted);
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0.8mm 0 0.2mm;
          text-transform: uppercase;
        }

        .summary-content {
          width: 100%;
          height: 100%;
          text-align: center;
          position: relative;
          padding-top: 5mm;
        }

        .summary-title {
          margin: 36mm 0 0;
          color: var(--drink-navy);
          font-size: 27px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 500;
        }

        .summary-title-line {
          width: 100%;
          height: 1px;
          background: var(--drink-gold);
          margin: 12mm auto 0;
        }

        .summary-text {
          max-width: 132mm;
          margin: 21mm auto 0;
          color: var(--drink-navy);
          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
        }

        .summary-text p {
          margin: 0 0 16mm;
        }

        .summary-text p:last-child {
          margin-bottom: 0;
        }

        .summary-notice {
          margin: 17mm auto 0;
          padding: 7mm 10mm;
          border-top: 1px solid var(--drink-gold);
          border-bottom: 1px solid var(--drink-gold);
          max-width: 145mm;
        }

        .summary-notice p {
          margin: 0 0 6mm;
          color: var(--drink-navy);
          font-size: 12.2px;
          line-height: 1.35;
          letter-spacing: 1.6px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .summary-notice p:last-child {
          margin-bottom: 0;
        }

        .summary-prices {
          width: 100%;
          max-width: 158mm;
          margin: 7mm auto 0;
          text-align: center;
        }

        .summary-prices p {
          margin: 0 0 2.3mm;
          color: var(--drink-navy);
          font-size: 11.1px;
          line-height: 1.35;
          letter-spacing: 0.35px;
          font-weight: 700;
          text-transform: uppercase;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .summary-prices p:first-child {
          max-width: 148mm;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 4.2mm;
          color: var(--drink-navy);
        }

        .summary-prices p:nth-child(n + 3) {
          color: var(--drink-muted);
          font-size: 10px;
          line-height: 1.35;
        }

        .summary-prices p:last-child {
          margin-bottom: 0;
        }

        .footer-ornament {
          position: absolute;
          left: 50%;
          bottom: 11mm;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8mm;
          color: var(--drink-gold);
        }

        .ornament-line {
          width: 34mm;
          height: 1px;
          background: var(--drink-gold);
          display: block;
        }

        .ornament-diamond {
          color: var(--drink-gold);
          font-size: 12px;
          line-height: 1;
          font-weight: 400;
        }

        @media screen and (max-width: 900px) {
          html,
          body {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
            background: var(--drink-paper-edge);
          }

          .drinks-menu-shell {
            width: 100%;
            max-width: 100%;
            padding: 28px 10px 48px;
            gap: 34px;
            overflow-x: hidden;
          }

          .sp-back-link {
            width: min(94vw, 210mm);
            margin: 0 auto -16px;
          }

          .drink-page {
            width: 94vw;
            height: 132.914vw;
            min-height: 0;
            max-height: 132.914vw;
            padding: 8.06vw 4.48vw 6.71vw;
            box-shadow: 0 10px 34px rgba(0, 0, 0, 0.14);
            scroll-margin-top: 5vw;
          }

          .image-cover-page {
            height: 132.914vw;
            min-height: 0;
            padding: 0 !important;
            background: transparent;
          }

          .cover-page {
            padding: 11.64vw 9.85vw 15.22vw;
          }

          .cover-page.image-cover-page {
            padding: 0 !important;
            background: transparent;
          }

          .cover-page.image-cover-page .cover-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
          }

          .drink-logo {
            width: 13.88vw;
            height: 13.88vw;
            margin-bottom: 2.86vw;
          }

          .brand-title {
            font-size: 2.73vw;
            letter-spacing: 0.95vw;
          }

          .gold-small-line {
            width: 7.61vw;
            margin: 3.36vw auto 4.03vw;
          }

          .main-title {
            font-size: 4.4vw;
            letter-spacing: 1.43vw;
          }

          .main-subtitle {
            margin-top: 2.69vw;
            font-size: 1.42vw;
            letter-spacing: 0.12vw;
          }

          .top-gold-rule {
            margin: 3.13vw 0 4.48vw;
          }

          .index-page {
            padding-left: 5.8vw;
            padding-right: 5.8vw;
          }

          .index-grid {
            gap: 1.95vw 2.68vw;
            margin-top: 4.48vw;
          }

          .index-card {
            min-height: 11.2vw;
            grid-template-columns: 5.37vw 1fr;
            column-gap: 1.79vw;
            padding: 1.79vw 2.01vw;
          }

          .index-number {
            font-size: 1.55vw;
          }

          .index-label {
            font-size: 1.9vw;
            letter-spacing: 0.31vw;
          }

          .index-detail {
            margin-top: 0.67vw;
            font-size: 1.42vw;
          }

          .index-note {
            margin-top: 8.06vw;
            font-size: 1.9vw;
          }

          .drink-section {
            margin-bottom: 3.31vw;
          }

          .drink-section-dense {
            margin-bottom: 2.42vw;
          }

          .section-heading {
            padding-bottom: 1.34vw;
            margin-bottom: 1.52vw;
          }

          .drink-section-dense .section-heading {
            padding-bottom: 1.12vw;
            margin-bottom: 1.16vw;
          }

          .section-title-wrap {
            padding: 0 12.54vw;
          }

          .section-title {
            font-size: 2.5vw;
            letter-spacing: 0.67vw;
          }

          .section-subtitle {
            margin-top: 0.81vw;
            font-size: 1.38vw;
          }

          .section-volume {
            right: 0;
            bottom: 2.24vw;
            width: 10.75vw;
            font-size: 1.3vw;
          }

          .drink-rows {
            gap: 1.14vw;
          }

          .drink-rows-compact {
            gap: 0.9vw;
          }

          .drink-rows-dense {
            gap: 0.69vw;
          }

          .drink-row {
            grid-template-columns: minmax(0, 1fr) 8.06vw;
            column-gap: 2.24vw;
            font-size: 1.5vw;
            line-height: 1.12;
          }

          .drink-rows-compact .drink-row {
            font-size: 1.4vw;
            line-height: 1.08;
          }

          .drink-rows-dense .drink-row {
            font-size: 1.3vw;
            line-height: 1.05;
          }

          .drink-name-line {
            gap: 0.9vw;
          }

          .drink-description {
            margin-top: 0.36vw;
            font-size: 1.33vw;
            line-height: 1.13;
          }

          .drink-rows-compact .drink-description,
          .drink-rows-dense .drink-description {
            margin-top: 0.25vw;
            font-size: 1.21vw;
          }

          .drink-price {
            width: 8.06vw;
          }

          .group-label {
            font-size: 1.3vw;
            letter-spacing: 0.24vw;
            margin: 0.36vw 0 0.09vw;
          }

          .summary-content {
            padding-top: 2.24vw;
          }

          .summary-title {
            margin-top: 16.12vw;
            font-size: 3.02vw;
            letter-spacing: 0.9vw;
          }

          .summary-title-line {
            margin-top: 5.37vw;
          }

          .summary-text {
            max-width: 59.08vw;
            margin-top: 9.4vw;
            font-size: 2.01vw;
          }

          .summary-text p {
            margin-bottom: 7.16vw;
          }

          .summary-notice {
            margin-top: 7.61vw;
            padding: 3.13vw 4.48vw;
            max-width: 64.94vw;
          }

          .summary-notice p {
            margin-bottom: 2.69vw;
            font-size: 1.45vw;
            letter-spacing: 0.19vw;
          }

          .summary-prices {
            max-width: 70.75vw;
            margin-top: 3.13vw;
          }

          .summary-prices p {
            margin-bottom: 1.03vw;
            font-size: 1.34vw;
          }

          .summary-prices p:first-child {
            max-width: 66.2vw;
            margin-bottom: 1.88vw;
          }

          .summary-prices p:nth-child(n + 3) {
            font-size: 1.19vw;
          }

          .footer-ornament {
            bottom: 4.92vw;
            gap: 3.58vw;
          }

          .ornament-line {
            width: 15.22vw;
          }

          .ornament-diamond {
            font-size: 1.42vw;
          }
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          html,
          body {
            width: 210mm;
            height: auto;
            margin: 0;
            padding: 0;
            background: var(--drink-paper);
            overflow: visible;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .drinks-menu-shell {
            display: block;
            width: 210mm;
            min-height: auto;
            padding: 0;
            margin: 0;
            gap: 0;
            background: var(--drink-paper);
            overflow: visible;
          }

          .sp-back-link {
            display: none;
          }

          .drink-page {
            width: 210mm;
            height: 297mm;
            min-height: 297mm;
            max-height: 297mm;
            margin: 0;
            box-sizing: border-box;
            box-shadow: none;
            overflow: hidden;
            page-break-after: always;
            break-after: page;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .drink-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }
        }
      `}</style>
    </main>
  )
}
