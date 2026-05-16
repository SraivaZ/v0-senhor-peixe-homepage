"use client"

type WineRow = {
  region: string
  year: string
  name: string
  grapes: string
  price: string
  countryLabel?: never
}

type CountryRow = {
  countryLabel: string
  region?: never
  year?: never
  name?: never
  grapes?: never
  price?: never
}

type DividerRow = {
  divider: true
  volume?: string
  region?: never
  year?: never
  name?: never
  grapes?: never
  price?: never
  countryLabel?: never
}

type Row = WineRow | CountryRow | DividerRow

const navy = "#10243d"
const gold = "#b88a45"
const muted = "#617287"
const paper = "#f7f3ec"

const spain = "Espanha · España · Spain · Espagne · Spanien"
const france = "França · Francia · France · Frankreich"
const italy = "Itália · Italia · Italy · Italie · Italien"
const germany = "Alemanha · Alemania · Germany · Allemagne · Deutschland"
const austria = "Áustria · Austria · Autriche · Österreich"
const hungary = "Hungria · Hungría · Hungary · Hongrie · Ungarn"

const wineByGlassSparkling: Row[] = [
  { region: "Bairrada", year: "2022", name: "Quinta do Ortigão", grapes: "Baga", price: "7" },
  { countryLabel: france },
  { region: "Champagne", year: "-", name: "Telmont Réserve Brut", grapes: "Chardonnay, Pinot Meunier, Pinot Noir", price: "17" },
]

const wineByGlassWhite: Row[] = [
  { region: "Vinho Verde", year: "2023", name: "Expressoes", grapes: "Alvarinho", price: "7" },
  { region: "Vinho Verde", year: "2023", name: "Varanda do Conde", grapes: "Alvarinho, Trajadura", price: "5" },
  { region: "Douro", year: "2022", name: "Quinta Nova", grapes: "Gouveio, Viosinho, Rabigato", price: "7" },
  { region: "Península de Setúbal", year: "2023", name: "Dona Ermelinda Reserva", grapes: "Arinto, Chardonnay, Viognier", price: "6" },
  { region: "Madeira", year: "2023", name: "Ilha", grapes: "Verdelho", price: "7" },
  { countryLabel: spain },
  { region: "Rías Baixas", year: "2023", name: "Santiago Ruiz", grapes: "Albariño, Loureiro, Treixadura, Caiño Blanco, Godello", price: "7" },
]

const wineByGlassRose: Row[] = [
  { region: "Douro", year: "2023", name: "Portal", grapes: "Touriga Nacional, Tinta Roriz, Tinta Barroca", price: "6" },
  { countryLabel: france },
  { region: "Provença", year: "2024", name: "Whispering Angel", grapes: "Grenache, Rolle, Syrah, Cinsault, Tibouren", price: "9" },
]

const wineByGlassRed: Row[] = [
  { region: "Douro", year: "2022", name: "Quinta dos Aciprestes", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "6" },
  { region: "Douro", year: "2020", name: "Poças Vale de Cavalos Reserva", grapes: "Tinta Roriz, Touriga Franca, Touriga Nacional", price: "7" },
  { region: "Península de Setúbal", year: "2021", name: "Dona Ermelinda Reserva", grapes: "Syrah, Aragonez, Castelão", price: "6" },
  { region: "Alentejo", year: "2021", name: "Herdade do Rocim Amphora", grapes: "Moreto, Tinta Grossa, Trincadeira", price: "6" },
]

const page3SparklingRows: Row[] = [
  { region: "Bairrada", year: "2022", name: "Kompassus Private Collection", grapes: "Baga", price: "55" },
  { region: "Bairrada", year: "2022", name: "Quinta do Ortigão", grapes: "Baga", price: "39" },
  { region: "Bairrada", year: "2021", name: "Quinta do Poço do Lobo Baga Blanc de Noirs", grapes: "Baga", price: "59" },
  { region: "Douro", year: "2020", name: "Vértice Millésime", grapes: "Gouveio, Malvasia Fina, Rabigato, Viosinho", price: "70" },
  { countryLabel: italy },
  { region: "Trento DOC", year: "2019", name: "Ferrari Perlé", grapes: "Chardonnay", price: "92" },
]

const page3RoseRows: Row[] = [
  { region: "Douro", year: "2023", name: "Portal", grapes: "Touriga Nacional, Tinta Roriz, Tinta Barroca", price: "25" },
  { divider: true, volume: "75cl" },
  { region: "Douro", year: "2023", name: "Portal", grapes: "Touriga Nacional, Tinta Roriz, Tinta Barroca", price: "25" },
  { countryLabel: france },
  { region: "Provença", year: "2024", name: "Whispering Angel", grapes: "Grenache, Rolle, Syrah, Cinsault, Tibouren", price: "52" },
  { region: "Provença", year: "2021", name: "Château d'Esclans", grapes: "Grenache, Rolle", price: "90" },
]

const page3WhiteRows: Row[] = [
  { region: "Douro", year: "2023", name: "Castello d'Alba Vinhas Velhas", grapes: "Viosinho, Rabigato, Códega do Larinho, Gouveio", price: "-" },
  { region: "Douro", year: "-", name: "Isento Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Planalto", grapes: "", price: "-" },
  { divider: true, volume: "75cl" },
  { region: "Vinho Verde", year: "2023", name: "Anselmo Mendes, Curtimenta", grapes: "Alvarinho", price: "73" },
  { region: "Vinho Verde", year: "2018", name: "Cinética", grapes: "Alvarinho", price: "35" },
  { region: "Vinho Verde", year: "-", name: "Parcela Única", grapes: "", price: "-" },
]

const page4WhiteRows: Row[] = [
  { region: "Vinho Verde", year: "2023", name: "Expressões", grapes: "Alvarinho", price: "36" },
  { region: "Vinho Verde", year: "2023", name: "Varanda do Conde", grapes: "Alvarinho, Trajadura", price: "25" },
  { region: "Douro", year: "2022", name: "Quinta Nova", grapes: "Gouveio, Viosinho, Rabigato", price: "35" },
  { region: "Douro", year: "2023", name: "Redoma", grapes: "Rabigato, Códega, Viosinho, Arinto", price: "59" },
  { region: "Douro", year: "2023", name: "Redoma Reserva", grapes: "Rabigato, Códega, Viosinho, Arinto", price: "95" },
  { region: "Douro", year: "2023", name: "Vallado Reserva", grapes: "Rabigato, Gouveio, Viosinho, Arinto", price: "47" },
  { region: "Douro", year: "2023", name: "Quinta do Crasto Superior", grapes: "Viosinho, Verdelho", price: "36" },
  { region: "Douro", year: "2022", name: "Quinta do Crasto Reserva Vinhas Velhas", grapes: "Viosinho, Rabigato, Verdelho", price: "72" },
  { region: "Douro", year: "2022", name: "Quinta do Crasto Vinha da Ponte", grapes: "Viosinho, Rabigato", price: "210" },
  { region: "Douro", year: "2021", name: "Quinta do Noval Cedro do Noval", grapes: "Viosinho, Gouveio, Arinto", price: "36" },
  { region: "Douro", year: "2022", name: "Conceito", grapes: "Rabigato, Códega, Arinto", price: "42" },
]

const page5WhiteRows: Row[] = [
  { region: "Dão", year: "2023", name: "Quinta dos Roques Encruzado", grapes: "Encruzado", price: "39" },
  { region: "Dão", year: "2023", name: "Quinta dos Roques Reserva Encruzado", grapes: "Encruzado", price: "60" },
  { region: "Dão", year: "2021", name: "Taboadella Reserva", grapes: "Encruzado", price: "48" },
  { region: "Bairrada", year: "2022", name: "Luis Pato Vinhas Velhas", grapes: "Bical, Cercial, Sercialinho", price: "43" },
  { region: "Bairrada", year: "2022", name: "Luis Pato Quinta do Ribeirinho Pé Franco", grapes: "Bical", price: "110" },
  { region: "Lisboa", year: "2023", name: "Quinta de Chocapalha Arinto", grapes: "Arinto", price: "32" },
  { region: "Lisboa", year: "2022", name: "Quinta de Chocapalha Vinha Mãe", grapes: "Arinto", price: "55" },
  { region: "Península de Setúbal", year: "2023", name: "Dona Ermelinda Reserva", grapes: "Arinto, Chardonnay, Viognier", price: "28" },
  { region: "Península de Setúbal", year: "2022", name: "Dona Ermelinda Grande Reserva", grapes: "Antão Vaz, Arinto, Chardonnay, Viognier", price: "39" },
  { region: "Alentejo", year: "2023", name: "Esporão Reserva", grapes: "Antão Vaz, Arinto, Roupeiro", price: "36" },
  { region: "Alentejo", year: "2023", name: "Esporão Private Selection", grapes: "Semillon", price: "70" },
  { region: "Madeira", year: "2023", name: "Ilha", grapes: "Verdelho", price: "36" },
]

const page6Rows: Row[] = [
  { countryLabel: spain },
  { region: "Rías Baixas", year: "2023", name: "Santiago Ruiz", grapes: "Albariño, Loureiro, Treixadura, Caiño Blanco, Godello", price: "40" },
  { region: "Rías Baixas", year: "2023", name: "Pazo Señorans", grapes: "Albariño", price: "45" },
  { region: "Rueda", year: "2023", name: "José Pariente", grapes: "Verdejo", price: "38" },
  { countryLabel: france },
  { region: "Loire", year: "2023", name: "Pascal Jolivet Sancerre", grapes: "Sauvignon Blanc", price: "65" },
  { region: "Loire", year: "2022", name: "Domaine Vacheron Sancerre", grapes: "Sauvignon Blanc", price: "83" },
  { region: "Borgonha", year: "2022", name: "Jean-Marc Brocard Chablis", grapes: "Chardonnay", price: "58" },
  { region: "Borgonha", year: "2021", name: "Joseph Drouhin Meursault", grapes: "Chardonnay", price: "135" },
]

const page6Red375Rows: Row[] = [
  { region: "Douro", year: "2021", name: "Quinta dos Aciprestes", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "18" },
]

const page6Red75Rows: Row[] = [
  { region: "Douro", year: "2022", name: "Quinta dos Aciprestes", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "30" },
  { region: "Douro", year: "2020", name: "Poças Vale de Cavalos Reserva", grapes: "Tinta Roriz, Touriga Franca, Touriga Nacional", price: "34" },
  { region: "Douro", year: "2020", name: "Quinta Nova Reserva", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "45" },
  { region: "Douro", year: "2020", name: "Quinta Nova Grande Reserva", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "75" },
]

const page7RedRows: Row[] = [
  { region: "Douro", year: "2020", name: "Quinta do Crasto Superior", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz, Sousão", price: "39" },
  { region: "Douro", year: "2020", name: "Quinta do Crasto Reserva Vinhas Velhas", grapes: "Vinhas Velhas", price: "69" },
  { region: "Douro", year: "2019", name: "Quinta do Crasto Touriga Nacional", grapes: "Touriga Nacional", price: "105" },
  { region: "Douro", year: "2019", name: "Quinta do Crasto Vinha Maria Teresa", grapes: "Vinhas Velhas", price: "265" },
  { region: "Douro", year: "2019", name: "Quinta do Crasto Vinha da Ponte", grapes: "Vinhas Velhas", price: "265" },
  { region: "Douro", year: "2021", name: "Niepoort Redoma", grapes: "Touriga Franca, Tinta Roriz, Tinta Amarela, Tinto Cão", price: "52" },
  { region: "Douro", year: "2020", name: "Niepoort Batuta", grapes: "Vinhas Velhas", price: "115" },
  { region: "Douro", year: "2020", name: "Niepoort Charme", grapes: "Tinta Roriz, Touriga Franca", price: "145" },
  { region: "Douro", year: "2020", name: "Quinta do Noval Cedro do Noval", grapes: "Touriga Nacional, Syrah, Tinta Roriz", price: "36" },
  { region: "Douro", year: "2019", name: "Quinta do Noval Reserva", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "74" },
  { region: "Douro", year: "2019", name: "Quinta do Noval Nacional", grapes: "Touriga Nacional", price: "690" },
]

const page8RedRows: Row[] = [
  { region: "Dão", year: "2020", name: "Quinta dos Roques", grapes: "Touriga Nacional, Jaen, Alfrocheiro, Tinta Roriz", price: "36" },
  { region: "Dão", year: "2020", name: "Quinta dos Roques Reserva", grapes: "Touriga Nacional, Jaen, Alfrocheiro, Tinta Roriz", price: "55" },
  { region: "Dão", year: "2019", name: "Taboadella Reserva", grapes: "Touriga Nacional, Alfrocheiro, Tinta Roriz", price: "52" },
  { region: "Bairrada", year: "2019", name: "Luis Pato Vinhas Velhas", grapes: "Baga", price: "42" },
  { region: "Bairrada", year: "2019", name: "Luis Pato Quinta do Ribeirinho Pé Franco", grapes: "Baga", price: "110" },
  { region: "Lisboa", year: "2020", name: "Quinta de Chocapalha Reserva", grapes: "Touriga Nacional, Tinta Roriz, Syrah", price: "38" },
  { region: "Lisboa", year: "2019", name: "Quinta de Chocapalha Vinha Mãe", grapes: "Tinta Roriz, Touriga Nacional, Syrah", price: "65" },
  { region: "Península de Setúbal", year: "2021", name: "Dona Ermelinda Reserva", grapes: "Syrah, Aragonez, Castelão", price: "29" },
  { region: "Península de Setúbal", year: "2020", name: "Dona Ermelinda Grande Reserva", grapes: "Syrah, Touriga Nacional, Aragonez", price: "44" },
  { region: "Alentejo", year: "2021", name: "Herdade do Rocim Amphora", grapes: "Moreto, Tinta Grossa, Trincadeira", price: "32" },
]

const page9RedRows: Row[] = [
  { region: "Alentejo", year: "2021", name: "Esporão Reserva", grapes: "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet", price: "38" },
  { region: "Alentejo", year: "2019", name: "Esporão Private Selection", grapes: "Alicante Bouschet, Aragonez, Syrah", price: "75" },
  { region: "Alentejo", year: "2020", name: "Mouchão", grapes: "Alicante Bouschet, Trincadeira", price: "75" },
  { region: "Alentejo", year: "2017", name: "Mouchão Tonel 3-4", grapes: "Alicante Bouschet", price: "165" },
  { countryLabel: spain },
  { region: "Rioja", year: "2018", name: "La Rioja Alta Viña Ardanza Reserva", grapes: "Tempranillo, Garnacha", price: "67" },
  { region: "Ribera del Duero", year: "2020", name: "Emilio Moro", grapes: "Tinto Fino", price: "58" },
  { region: "Ribera del Duero", year: "2019", name: "Malleolus", grapes: "Tinto Fino", price: "95" },
  { region: "Toro", year: "2019", name: "Numanthia", grapes: "Tinta de Toro", price: "115" },
]

const page10RedRows: Row[] = [
  { countryLabel: france },
  { region: "Bordeaux", year: "2018", name: "Château Giscours", grapes: "Cabernet Sauvignon, Merlot", price: "135" },
  { region: "Borgonha", year: "2020", name: "Joseph Drouhin Côte de Beaune", grapes: "Pinot Noir", price: "98" },
  { region: "Rhône", year: "2020", name: "Domaine de Beaurenard Châteauneuf-du-Pape", grapes: "Grenache, Syrah, Mourvèdre", price: "105" },
  { countryLabel: italy },
  { region: "Toscana", year: "2020", name: "Marchesi Antinori Tignanello", grapes: "Sangiovese, Cabernet Sauvignon, Cabernet Franc", price: "210" },
  { region: "Piemonte", year: "2019", name: "Pio Cesare Barolo", grapes: "Nebbiolo", price: "125" },
]

const sweetRows: Row[] = [
  { region: "Porto", year: "-", name: "Poças Ruby", grapes: "", price: "6" },
  { region: "Porto", year: "-", name: "Poças Tawny", grapes: "", price: "6" },
  { region: "Porto", year: "-", name: "Poças 10 Anos", grapes: "", price: "9" },
  { region: "Porto", year: "-", name: "Poças 20 Anos", grapes: "", price: "15" },
  { region: "Porto", year: "-", name: "Poças 30 Anos", grapes: "", price: "25" },
  { region: "Porto", year: "-", name: "Poças 40 Anos", grapes: "", price: "38" },
  { region: "Porto", year: "2018", name: "Quinta do Noval LBV", grapes: "", price: "8" },
  { region: "Porto", year: "2017", name: "Quinta do Noval Vintage", grapes: "", price: "22" },
  { region: "Madeira", year: "-", name: "Blandy's 5 Anos Sercial", grapes: "", price: "7" },
  { region: "Madeira", year: "-", name: "Blandy's 10 Anos Malvasia", grapes: "", price: "10" },
  { region: "Setúbal", year: "-", name: "Moscatel de Setúbal", grapes: "", price: "5" },
  { region: "Setúbal", year: "-", name: "Moscatel Roxo", grapes: "", price: "8" },
  { countryLabel: france },
  { region: "Sauternes", year: "2018", name: "Château Roumieu-Lacoste", grapes: "Sémillon, Sauvignon Blanc", price: "12" },
  { countryLabel: hungary },
  { region: "Tokaji", year: "2017", name: "Royal Tokaji 5 Puttonyos", grapes: "Furmint, Hárslevelű", price: "18" },
]

function MenuHeader({
  title = "VINHOS",
  subtitle = "WINE · VINO · VIN · WEINE",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <header className="menu-header">
      <img src="/senhor-peixe-logo.png" alt="Senhor Peixe" className="logo" />
      <h1>SENHOR PEIXE</h1>
      <div className="small-gold-line" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="gold-line" />
    </header>
  )
}

function Section({
  title,
  subtitle,
  volume,
  rows,
  compact = false,
}: {
  title: string
  subtitle: string
  volume: string
  rows: Row[]
  compact?: boolean
}) {
  return (
    <section className={compact ? "wine-section compact-section" : "wine-section"}>
      {(title || subtitle) && (
        <div className="section-title-wrap">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {volume && <span>{volume}</span>}
        </div>
      )}

      <div className="section-line" />

      <div className="rows">
        {rows.map((row, index) => {
          if ("divider" in row) {
            return (
              <div className="divider-row" key={`divider-${index}`}>
                {row.volume && <span>{row.volume}</span>}
              </div>
            )
          }

          if ("countryLabel" in row) {
            return (
              <div
                className={`country-row ${index === 0 ? "country-first" : ""}`}
                key={`${row.countryLabel}-${index}`}
              >
                {row.countryLabel}
              </div>
            )
          }

          return (
            <div className="wine-row" key={`${row.name}-${index}`}>
              <span className="region">{row.region}</span>
              <span className="year">{row.year}</span>
              <span className="name">{row.name}</span>
              <span className="grapes">{row.grapes}</span>
              <span className="price">{row.price}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function FooterMark() {
  return (
    <footer className="footer-mark">
      <div />
      <span>✣</span>
      <div />
    </footer>
  )
}

function CoverPage() {
  return (
    <section className="a4-page cover-page">
      <div className="cover-center">
        <img src="/senhor-peixe-logo.png" alt="Senhor Peixe" className="cover-logo" />
        <h1>SENHOR PEIXE</h1>
        <div className="cover-small-line" />
        <h2>VINHOS</h2>
        <p className="cover-subtitle">WINE · VINO · VIN · WEINE</p>
      </div>

      <div className="cover-footer">
        <div className="cover-ornament">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <p className="cover-note-main">
          A NOSSA OFERTA DE VINHOS É ATUALIZADA COM FREQUÊNCIA.
          <br />
          A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.
        </p>

        <p className="cover-note-secondary">
          OUR WINE LIST OFFER IS OFTEN UPDATED.
          <br />
          THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.
        </p>
      </div>
    </section>
  )
}

function WineByGlassPage() {
  return (
    <section className="a4-page wine-page">
      <MenuHeader
        title="VINHO A COPO"
        subtitle="WINE BY THE GLASS · VINO A COPA · VIN AU VERRE · WEIN IM GLAS"
      />

      <div className="content">
        <Section title="ESPUMANTE" subtitle="Sparkling · Espumoso · Mousseux · Sekt" volume="15cl" rows={wineByGlassSparkling} />
        <Section title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="15cl" rows={wineByGlassWhite} />
        <Section title="ROSÉ" subtitle="Rosé · Rosado · Rosé" volume="15cl" rows={wineByGlassRose} />
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="15cl" rows={wineByGlassRed} />
      </div>

      <FooterMark />
    </section>
  )
}

function BottlePage({
  children,
  compact = false,
}: {
  children: React.ReactNode
  compact?: boolean
}) {
  return (
    <section className={compact ? "a4-page wine-page compact-page" : "a4-page wine-page"}>
      <MenuHeader />
      <div className="content">{children}</div>
      <FooterMark />
    </section>
  )
}

export default function CartaVinhosPage() {
  return (
    <main className="page-shell">
      <CoverPage />
      <WineByGlassPage />

      <BottlePage compact>
        <Section title="ESPUMANTE" subtitle="Sparkling · Espumoso · Mousseux · Sekt" volume="75cl" rows={page3SparklingRows} compact />
        <Section title="ROSÉ" subtitle="Rose · Rosado · Rosé" volume="37,5cl" rows={page3RoseRows} compact />
        <Section title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="37,5cl" rows={page3WhiteRows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="75cl" rows={page4WhiteRows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="75cl" rows={page5WhiteRows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="75cl" rows={page6Rows} compact />
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="37,5cl" rows={page6Red375Rows} compact />
        <Section title="" subtitle="" volume="75cl" rows={page6Red75Rows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="75cl" rows={page7RedRows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="75cl" rows={page8RedRows} compact />
      </BottlePage>

      <BottlePage compact>
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="75cl" rows={page9RedRows} compact />
      </BottlePage>

      <BottlePage>
        <Section title="TINTO" subtitle="Red · Rojo · Rouge · Rot" volume="75cl" rows={page10RedRows} />
      </BottlePage>

      <section className="a4-page wine-page sweet-page">
        <MenuHeader
          title="VINHOS DOCES E FORTIFICADOS"
          subtitle="SWEET AND FORTIFIED WINES · VINOS DULCES Y FORTIFICADOS · VINS DOUX ET FORTIFIÉS · SÜSSE WEINE UND LIKÖRWEINE"
        />

        <div className="content sweet-content">
          <Section title="" subtitle="" volume="5cl" rows={sweetRows} />
        </div>

        <div className="tax-note">
          <p>PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR</p>
          <span>PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE</span>
          <span>PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ</span>
        </div>

        <FooterMark />
      </section>

      <style jsx global>{`
        .page-shell {
          min-height: 100vh;
          background: #e9e3d8;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 40px 20px;
        }

        .a4-page {
          width: 210mm;
          min-height: 297mm;
          background:
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.72) 0%,
              rgba(247, 243, 236, 0.96) 62%,
              rgba(238, 232, 222, 1) 100%
            );
          color: ${navy};
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.16);
          position: relative;
          font-family: Georgia, "Times New Roman", serif;
          overflow: hidden;
        }

        .cover-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 32mm 22mm 36mm;
        }

        .cover-center {
          transform: translateY(-26mm);
        }

        .cover-logo {
          width: 47mm;
          height: 47mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 11mm;
        }

        .cover-page h1 {
          margin: 0;
          color: ${navy};
          font-size: 27px;
          line-height: 1;
          letter-spacing: 10px;
          font-weight: 700;
        }

        .cover-small-line {
          width: 17mm;
          height: 1.2px;
          background: ${gold};
          margin: 14mm auto 19mm;
        }

        .cover-page h2 {
          margin: 0;
          color: ${gold};
          font-size: 57px;
          line-height: 1;
          letter-spacing: 18px;
          font-weight: 500;
        }

        .cover-subtitle {
          margin: 12mm 0 0;
          color: ${navy};
          font-size: 15px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .cover-footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 40mm;
          text-align: center;
        }

        .cover-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8mm;
          color: ${gold};
          margin-bottom: 16mm;
        }

        .cover-ornament span {
          width: 47mm;
          height: 1px;
          background: ${gold};
        }

        .cover-ornament strong {
          font-size: 24px;
          line-height: 1;
          font-weight: 400;
        }

        .cover-note-main {
          margin: 0;
          color: ${navy};
          font-size: 13px;
          line-height: 1.75;
          letter-spacing: 2.2px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .cover-note-secondary {
          margin: 8mm 0 0;
          color: ${muted};
          font-size: 13px;
          line-height: 1.75;
          letter-spacing: 2px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .wine-page {
          padding: 28mm 10mm 14mm;
        }

        .compact-page {
          padding-top: 18mm;
        }

        .menu-header {
          text-align: center;
        }

        .logo {
          width: 31mm;
          height: 31mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 6mm;
        }

        .compact-page .logo {
          width: 29mm;
          height: 29mm;
          margin-bottom: 5mm;
        }

        .menu-header h1 {
          margin: 0;
          color: ${navy};
          font-size: 23px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 700;
        }

        .small-gold-line {
          width: 15mm;
          height: 1px;
          background: ${gold};
          margin: 9mm auto 12mm;
        }

        .compact-page .small-gold-line {
          margin: 7mm auto 9mm;
        }

        .menu-header h2 {
          margin: 0;
          color: ${gold};
          font-size: 38px;
          line-height: 1;
          letter-spacing: 14px;
          font-weight: 500;
        }

        .menu-header p {
          margin: 8mm 0 0;
          color: ${navy};
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.8px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .gold-line {
          width: 100%;
          height: 1px;
          background: ${gold};
          margin: 9mm 0 13mm;
        }

        .compact-page .gold-line {
          margin: 7mm 0 9mm;
        }

        .content {
          width: 100%;
        }

        .wine-section {
          margin-bottom: 9mm;
        }

        .compact-section {
          margin-bottom: 7mm;
        }

        .section-title-wrap {
          position: relative;
          text-align: center;
          margin-bottom: 2mm;
          min-height: 9mm;
        }

        .section-title-wrap h2 {
          margin: 0;
          color: ${navy};
          font-size: 24px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 500;
        }

        .section-title-wrap p {
          margin: 2mm 0 0;
          color: ${navy};
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
        }

        .section-title-wrap span {
          position: absolute;
          right: 3mm;
          bottom: 0;
          color: ${muted};
          font-size: 11px;
          line-height: 1;
          font-weight: 400;
        }

        .section-line {
          height: 1px;
          background: ${navy};
          opacity: 0.95;
          margin-bottom: 4mm;
        }

        .rows {
          display: flex;
          flex-direction: column;
          gap: 3.2mm;
        }

        .compact-section .rows {
          gap: 2.1mm;
        }

        .wine-row {
          display: grid;
          grid-template-columns: 31mm 18mm 60mm 1fr 12mm;
          column-gap: 5mm;
          align-items: baseline;
          color: ${navy};
          font-size: 14px;
          line-height: 1.22;
        }

        .compact-section .wine-row {
          grid-template-columns: 30mm 17mm 58mm 1fr 11mm;
          column-gap: 5mm;
          font-size: 12.6px;
          line-height: 1.18;
        }

        .region,
        .year,
        .grapes {
          font-weight: 500;
        }

        .name,
        .price {
          font-weight: 700;
        }

        .price {
          text-align: right;
        }

        .country-row {
          text-align: center;
          color: ${muted};
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin: 1.2mm 0 0.4mm;
          text-transform: uppercase;
        }

        .compact-section .country-row {
          font-size: 11px;
          margin: 1mm 0 0.2mm;
        }

        .country-first {
          color: ${gold};
        }

        .divider-row {
          height: 1px;
          background: ${navy};
          opacity: 0.95;
          position: relative;
          margin: 2mm 0 3mm;
        }

        .divider-row span {
          position: absolute;
          right: 3mm;
          top: -3.5mm;
          color: ${muted};
          font-size: 11px;
          font-weight: 400;
        }

        .footer-mark {
          position: absolute;
          left: 50%;
          bottom: 11mm;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 6mm;
          color: ${gold};
        }

        .footer-mark div {
          width: 34mm;
          height: 1px;
          background: ${gold};
        }

        .footer-mark span {
          font-size: 22px;
          line-height: 1;
        }

        .sweet-page {
          padding-top: 18mm;
          padding-bottom: 14mm;
        }

        .sweet-page .logo {
          width: 27mm;
          height: 27mm;
          margin-bottom: 5mm;
        }

        .sweet-page .menu-header h1 {
          font-size: 22px;
          letter-spacing: 7px;
        }

        .sweet-page .small-gold-line {
          margin: 7mm auto 9mm;
        }

        .sweet-page .menu-header h2 {
          max-width: 150mm;
          margin: 0 auto;
          font-size: 31px;
          line-height: 1.12;
          letter-spacing: 10px;
        }

        .sweet-page .menu-header p {
          max-width: 178mm;
          margin: 6mm auto 0;
          font-size: 10.5px;
          line-height: 1.25;
          letter-spacing: 0.35px;
        }

        .sweet-page .gold-line {
          margin: 7mm 0 10mm;
        }

        .sweet-content {
          padding-bottom: 42mm;
        }

        .sweet-page .wine-section {
          margin-bottom: 0;
        }

        .sweet-page .rows {
          gap: 2.45mm;
        }

        .sweet-page .wine-row {
          grid-template-columns: 31mm 18mm 63mm 1fr 10mm;
          column-gap: 5mm;
          font-size: 12.4px;
          line-height: 1.08;
        }

        .sweet-page .name {
          line-height: 1.05;
        }

        .tax-note {
          position: absolute;
          left: 10mm;
          right: 10mm;
          bottom: 27mm;
          text-align: center;
          text-transform: uppercase;
          background: transparent;
          padding-top: 0;
          z-index: 2;
        }

        .tax-note p {
          margin: 0 0 2mm;
          color: ${navy};
          font-size: 9.5px;
          line-height: 1.2;
          letter-spacing: 0.9px;
          font-weight: 700;
        }

        .tax-note span {
          display: block;
          color: ${muted};
          font-size: 8px;
          line-height: 1.45;
          letter-spacing: 0.35px;
          font-weight: 700;
        }

        @media screen and (max-width: 900px) {
          html,
          body {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
            background: #e9e3d8;
          }

          .page-shell {
            width: 100%;
            max-width: 100%;
            min-height: 100vh;
            padding: 28px 10px 48px;
            gap: 34px;
            overflow-x: hidden;
            align-items: center;
          }

          .a4-page {
            width: 94vw;
            height: 132.914vw;
            min-height: 0;
            max-height: 132.914vw;
            flex: 0 0 auto;
            margin: 0 auto;
            box-shadow: 0 10px 34px rgba(0, 0, 0, 0.14);
            zoom: 1;
            transform: none;
            overflow: hidden;
          }

          .cover-page {
            padding: 14.32vw 9.85vw 16.11vw;
          }

          .cover-center {
            transform: translateY(-11.64vw);
          }

          .cover-logo {
            width: 21.05vw;
            height: 21.05vw;
            margin-bottom: 4.92vw;
          }

          .cover-page h1 {
            font-size: 3.2vw;
            letter-spacing: 1.18vw;
          }

          .cover-small-line {
            width: 7.61vw;
            height: 1px;
            margin: 6.27vw auto 8.51vw;
          }

          .cover-page h2 {
            font-size: 6.75vw;
            letter-spacing: 2.13vw;
          }

          .cover-subtitle {
            margin-top: 5.37vw;
            font-size: 1.78vw;
            letter-spacing: 0.95vw;
          }

          .cover-footer {
            bottom: 17.9vw;
          }

          .cover-ornament {
            gap: 3.58vw;
            margin-bottom: 7.16vw;
          }

          .cover-ornament span {
            width: 21.05vw;
          }

          .cover-ornament strong {
            font-size: 2.84vw;
          }

          .cover-note-main,
          .cover-note-secondary {
            font-size: 1.54vw;
            line-height: 1.75;
          }

          .cover-note-main {
            letter-spacing: 0.26vw;
          }

          .cover-note-secondary {
            margin-top: 3.58vw;
            letter-spacing: 0.24vw;
          }

          .wine-page {
            padding: 12.53vw 4.48vw 6.27vw;
          }

          .compact-page {
            padding-top: 8.06vw;
          }

          .menu-header {
            text-align: center;
          }

          .logo {
            width: 13.88vw;
            height: 13.88vw;
            margin-bottom: 2.69vw;
          }

          .compact-page .logo {
            width: 12.98vw;
            height: 12.98vw;
            margin-bottom: 2.24vw;
          }

          .menu-header h1 {
            font-size: 2.72vw;
            letter-spacing: 0.95vw;
          }

          .small-gold-line {
            width: 6.71vw;
            margin: 4.03vw auto 5.37vw;
          }

          .compact-page .small-gold-line {
            margin: 3.13vw auto 4.03vw;
          }

          .menu-header h2 {
            font-size: 4.5vw;
            letter-spacing: 1.66vw;
          }

          .menu-header p {
            margin-top: 3.58vw;
            font-size: 1.42vw;
            letter-spacing: 0.1vw;
          }

          .gold-line {
            margin: 4.03vw 0 5.82vw;
          }

          .compact-page .gold-line {
            margin: 3.13vw 0 4.03vw;
          }

          .wine-section {
            margin-bottom: 4.03vw;
          }

          .compact-section {
            margin-bottom: 3.13vw;
          }

          .section-title-wrap {
            margin-bottom: 0.9vw;
            min-height: 4.03vw;
          }

          .section-title-wrap h2 {
            font-size: 2.84vw;
            letter-spacing: 0.95vw;
          }

          .section-title-wrap p {
            margin-top: 0.9vw;
            font-size: 1.42vw;
          }

          .section-title-wrap span {
            right: 1.34vw;
            font-size: 1.3vw;
          }

          .section-line {
            margin-bottom: 1.79vw;
          }

          .rows {
            gap: 1.43vw;
          }

          .compact-section .rows {
            gap: 0.94vw;
          }

          .wine-row {
            grid-template-columns: 13.88vw 8.06vw 26.86vw 1fr 5.37vw;
            column-gap: 2.24vw;
            font-size: 1.66vw;
            line-height: 1.22;
          }

          .compact-section .wine-row {
            grid-template-columns: 13.43vw 7.61vw 25.95vw 1fr 4.92vw;
            column-gap: 2.24vw;
            font-size: 1.49vw;
            line-height: 1.18;
          }

          .country-row {
            font-size: 1.42vw;
            margin: 0.54vw 0 0.18vw;
          }

          .compact-section .country-row {
            font-size: 1.3vw;
            margin: 0.45vw 0 0.09vw;
          }

          .divider-row {
            margin: 0.9vw 0 1.34vw;
          }

          .divider-row span {
            right: 1.34vw;
            top: -1.57vw;
            font-size: 1.3vw;
          }

          .footer-mark {
            bottom: 4.92vw;
            gap: 2.69vw;
          }

          .footer-mark div {
            width: 15.22vw;
          }

          .footer-mark span {
            font-size: 2.61vw;
          }

          .sweet-page {
            padding-top: 8.06vw;
            padding-bottom: 6.27vw;
          }

          .sweet-page .logo {
            width: 12.09vw;
            height: 12.09vw;
            margin-bottom: 2.24vw;
          }

          .sweet-page .menu-header h1 {
            font-size: 2.61vw;
            letter-spacing: 0.83vw;
          }

          .sweet-page .small-gold-line {
            margin: 3.13vw auto 4.03vw;
          }

          .sweet-page .menu-header h2 {
            max-width: 67.14vw;
            font-size: 3.67vw;
            letter-spacing: 1.18vw;
          }

          .sweet-page .menu-header p {
            max-width: 79.62vw;
            margin-top: 2.69vw;
            font-size: 1.24vw;
          }

          .sweet-page .gold-line {
            margin: 3.13vw 0 4.48vw;
          }

          .sweet-content {
            padding-bottom: 18.8vw;
          }

          .sweet-page .rows {
            gap: 1.1vw;
          }

          .sweet-page .wine-row {
            grid-template-columns: 13.88vw 8.06vw 28.2vw 1fr 4.48vw;
            column-gap: 2.24vw;
            font-size: 1.47vw;
            line-height: 1.08;
          }

          .tax-note {
            left: 4.48vw;
            right: 4.48vw;
            bottom: 12.09vw;
          }

          .tax-note p {
            margin-bottom: 0.9vw;
            font-size: 1.13vw;
            letter-spacing: 0.11vw;
          }

          .tax-note span {
            font-size: 0.95vw;
            letter-spacing: 0.04vw;
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
            background: ${paper};
            overflow: visible;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .page-shell {
            display: block;
            width: 210mm;
            min-height: auto;
            padding: 0;
            margin: 0;
            gap: 0;
            background: ${paper};
            overflow: visible;
          }

          .a4-page {
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
            zoom: 1;
            transform: none;
          }

          .a4-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }
        }
      `}</style>
    </main>
  )
}