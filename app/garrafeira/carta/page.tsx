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

const navy = "#12345c"
const gold = "#c79a4b"
const muted = "#9a9a9a"
const paper = "#f7f3ec"

const france = "FRANÇA · FRANCE · FRANCIA · FRANKREICH"
const italia = "ITÁLIA · ITALY · ITALIE · ITALIEN"
const argentina = "ARGENTINA · ARGENTINA · ARGENTINE · ARGENTINIEN"
const chile = "CHILE · CHILE · CHILI · CHILE"
const espanha = "ESPANHA · SPAIN · ESPAGNE · SPANIEN"

const wineByGlassSparkling: Row[] = [
  { region: "Douro", year: "2018", name: "Vértice", grapes: "Gouveio", price: "14" },
  { region: "Douro", year: "2022", name: "Vértice Rosé", grapes: "Gouveio, Malvasia Fina, Touriga Franca", price: "12" },
  { countryLabel: france },
  { region: "Champagne", year: "NV", name: "Gaston Révolte 1er Cru Tradition", grapes: "Chardonnay, Pinot Noir", price: "20" },
]

const wineByGlassWhite: Row[] = [
  { region: "Vinho Verde", year: "2023", name: "Anselmo Mendes, Curtimenta", grapes: "Alvarinho", price: "18" },
  { region: "Vinho Verde", year: "2018", name: "Cinética", grapes: "Alvarinho", price: "9" },
  { region: "Douro", year: "2020", name: "Guyot", grapes: "Vinhas Velhas", price: "12" },
  { region: "Dão", year: "2023", name: "Quinta dos Carvalhais 1.5L", grapes: "Encruzado", price: "14" },
  { region: "Alentejo", year: "2022", name: "Lobo de Vasconcellos, LV Reserva 1.5L", grapes: "Arinto, Verdelho", price: "15" },
  { region: "Açores", year: "2022", name: "Cerca dos Frades", grapes: "Arinto dos Açores, Verdelho, Terrantez", price: "16" },
  { countryLabel: france },
  { region: "Borgonha", year: "2023", name: 'Brocard, Chablis "Saint Claire"', grapes: "Chardonnay", price: "17" },
]

const wineByGlassRose: Row[] = [
  { region: "Douro", year: "2024", name: "Vallado", grapes: "Touriga Nacional", price: "7" },
  { countryLabel: france },
  { region: "Provença", year: "2024", name: "Whispering Angel", grapes: "Grenache, Rolle, Syrah, Cinsault, Tibouren", price: "14" },
]

const wineByGlassRed: Row[] = [
  { region: "Douro", year: "2022", name: "Niepoort, Batuta", grapes: "Vinhas Velhas", price: "30" },
  { region: "Douro", year: "2010", name: "Quinta do Infantado 1.5L", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "20" },
  { region: "Douro", year: "2021", name: "Quinta do Vallado", grapes: "Sousão", price: "15" },
  { region: "Dão", year: "2018", name: "Villa Oliveira", grapes: "Touriga Nacional", price: "28" },
  { region: "Lisboa", year: "2020", name: "Adega Mãe, Atlântico", grapes: "Pinot Noir", price: "12" },
  { region: "Alentejo", year: "2021", name: "Alento Reserva", grapes: "Aragonez, Syrah, Alicante Bouschet, Touriga Nacional", price: "9" },
  { region: "Alentejo", year: "2019", name: "Quinta do Mouro", grapes: "Aragonez, Alicante Bouschet, Cabernet Sauvignon", price: "19" },
  { countryLabel: france },
  { region: "Borgonha", year: "2023", name: "Domaine Gerard Julien, Bourgogne Origine", grapes: "Pinot Noir", price: "17" },
]

const page3SparklingRows: Row[] = [
  { region: "Douro", year: "2018", name: "Vértice", grapes: "Gouveio", price: "60" },
  { region: "Douro", year: "2022", name: "Vértice Rosé", grapes: "Gouveio, Malvasia Fina, Touriga Franca", price: "45" },
  { region: "Bairrada", year: "2016", name: "Kompassus Grande Reserva", grapes: "Pinot Noir", price: "69" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró Reserva Bruto", grapes: "", price: "-" },
  { countryLabel: france },
  { region: "Champagne", year: "NV", name: "Gaston Révolte 1er Cru Tradition", grapes: "Chardonnay, Pinot Noir", price: "76" },
  { region: "Champagne", year: "NV", name: "G. H. Mumm Cordon Rouge", grapes: "Pinot Meunier, Pinot Noir, Chardonnay", price: "89" },
  { region: "Champagne", year: "NV", name: "Veuve Clicquot Rosé", grapes: "Pinot Meunier, Pinot Noir, Chardonnay", price: "130" },
  { region: "Champagne", year: "NV", name: "Perrier-Jouët Blanc de Blancs", grapes: "Chardonnay", price: "160" },
  { region: "Champagne", year: "NV", name: "Moët & Chandon Nectar Impérial", grapes: "Pinot Meunier, Pinot Noir, Chardonnay", price: "130" },
  { region: "Champagne", year: "2015", name: "Dom Pérignon Vintage Brut", grapes: "Pinot Noir, Chardonnay", price: "390" },
]

const page3RoseRows: Row[] = [
  { region: "Portugal", year: "-", name: "Mateus Rosé", grapes: "", price: "-" },
  { divider: true, volume: "75cl" },
  { region: "Douro", year: "2024", name: "Vallado", grapes: "Touriga Nacional", price: "25" },
  { region: "Douro", year: "-", name: "Assobio Rosé", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Fita Preta, Cuvée nº9", grapes: "Aragonez, Castelão, Trincadeira", price: "40" },
  { region: "Alentejo", year: "-", name: "Quinta do Carmo Rosé", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Dona Ermelinda Rosé", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Catarina Rosé", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Vale Pradinhos Rosé", grapes: "", price: "-" },
  { region: "Portugal", year: "-", name: "Mateus Rosé", grapes: "", price: "-" },
  { countryLabel: france },
  { region: "Provença", year: "2024", name: "Whispering Angel", grapes: "Grenache, Rolle, Syrah, Cinsault, Tibouren", price: "52" },
  { region: "Provença", year: "2021", name: "Château d'Esclans", grapes: "Grenache, Rolle", price: "90" },
]

const page3WhiteRows: Row[] = [
  { region: "Douro", year: "2023", name: "Castello d'Alba Reserva", grapes: "Viosinho, Rabigato, Códega do Larinho, Gouveio", price: "-" },
  { region: "Douro", year: "-", name: "Isento Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Planalto", grapes: "", price: "-" },
  { divider: true, volume: "75cl" },
  { region: "Vinho Verde", year: "2023", name: "Anselmo Mendes, Curtimenta", grapes: "Alvarinho", price: "73" },
  { region: "Vinho Verde", year: "2018", name: "Cinética", grapes: "Alvarinho", price: "35" },
  { region: "Vinho Verde", year: "-", name: "Parcela Única", grapes: "", price: "-" },
]

const page4WhiteRows: Row[] = [
  { region: "Vinho Verde", year: "2023", name: "Quinta do Ameal Loureiro", grapes: "Loureiro", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Milagres by Quinta da Pedra", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Mar Salgado", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Bico Amarelo", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Quinta de Azevedo Escolha", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Ronfe Trajadura", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Muros de Melgaço", grapes: "", price: "-" },
  { region: "Vinho Verde", year: "-", name: "Palácio da Brejoeira", grapes: "", price: "-" },
  { region: "Douro", year: "2020", name: "Guyot", grapes: "Vinhas Velhas", price: "50" },
  { region: "Douro", year: "2022", name: "Menin Grande Reserva", grapes: "Arinto", price: "98" },
  { region: "Douro", year: "2023", name: "Quinta da Pedra Escrita", grapes: "Verdelho, Alvarinho, Rabigato, Viogner", price: "38" },
  { region: "Douro", year: "2023", name: "Vallado Reserva", grapes: "Rabigato, Gouveio, Arinto", price: "62" },
  { region: "Douro", year: "2023", name: "Wine & Soul, Guru", grapes: "Códega do Larinho, Gouveio, Rabigato, Viosinho", price: "84" },
  { region: "Douro", year: "-", name: "Quinta das Carvalhas Colheita", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Três Bagos Sauvignon Blanc", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "CARM Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Isento Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Assobio", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Redoma Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Casa Velha", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Crasto Superior", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Vinha Grande", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Planalto", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Arribas Douro", grapes: "", price: "-" },
  { region: "Dão", year: "2022", name: "António Madeira", grapes: "Vinhas Velhas", price: "80" },
  { region: "Dão", year: "2022", name: "Definido", grapes: "Vinhas Velhas", price: "92" },
  { region: "Dão", year: "2023", name: "Quinta dos Carvalhais", grapes: "Encruzado", price: "52" },
  { region: "Dão", year: "NV", name: "Quinta dos Carvalhais, Especial", grapes: "Encruzado, Gouveio, Semillion", price: "135" },
  { region: "Dão", year: "2023", name: "Taboadella Reserva Encruzado", grapes: "Encruzado", price: "-" },
  { region: "Dão", year: "-", name: "Soito Encruzado", grapes: "", price: "-" },
  { region: "Dão", year: "-", name: "Bella Sauvignon Blanc", grapes: "", price: "-" },
  { region: "Beira Atlântico", year: "2023", name: "Quinta Foz de Arouce", grapes: "Cercial", price: "53" },
  { region: "Beira Interior", year: "-", name: "Beyra Reserva Quartz", grapes: "", price: "-" },
  { region: "Bairrada", year: "2022", name: "Prior Lucas Fénix", grapes: "Bical, Rabo de Ovelha, Maria Gomes, Cercial, Arinto", price: "55" },
  { region: "Bairrada", year: "2022", name: "Quinta das Bágeiras Reserva", grapes: "Bical, Maria Gomes", price: "35" },
  { region: "Bairrada", year: "-", name: "Ortigão", grapes: "", price: "-" },
  { region: "Tejo", year: "2021", name: "Casa Cadaval", grapes: "Riesling", price: "44" },
  { region: "Tejo", year: "2023", name: "Ninfa Escolha", grapes: "Sauvignon Blanc", price: "45" },
]

const page5WhiteRows: Row[] = [
  { region: "Lisboa", year: "2022", name: "Adega Mãe", grapes: "Vital", price: "49" },
  { region: "Lisboa", year: "2022", name: "Quinta San Michel, Malvarinto", grapes: "Malvasia, Arinto", price: "57" },
  { region: "Lisboa", year: "-", name: "Quinta do Gradil - Arinto", grapes: "", price: "-" },
  { region: "Lisboa", year: "-", name: "Quinta do Gradil - Viosinho", grapes: "", price: "-" },
  { region: "Lisboa", year: "-", name: "Prova Régia", grapes: "", price: "-" },
  { region: "Lisboa", year: "-", name: "Quinta da Alorna", grapes: "", price: "-" },
  { region: "Lisboa", year: "-", name: "Alorna", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "2024", name: "Quinta do Piloto Collection", grapes: "Moscatel Roxo", price: "25" },
  { region: "P. Setúbal", year: "-", name: "Bacalhôa Chardonnay", grapes: "Chardonnay", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Serra Mãe Sauvignon Blanc", grapes: "Sauvignon Blanc", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Dona Ermelinda Reserva", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Ermelinda Sauvignon Blanc & Verdelho", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Catarina", grapes: "", price: "-" },
  { region: "Alentejo", year: "NV", name: "António Maçanita, Morgado de Oliveira", grapes: "Arinto", price: "300" },
  { region: "Alentejo", year: "2022", name: "Lobo de Vasconcellos, LV Reserva 1.5L", grapes: "Arinto, Verdelho", price: "120" },
  { region: "Alentejo", year: "2023", name: "XXVI Talhas Mestre Daniel", grapes: "Antão Vaz, Roupeiro, Perrum", price: "48" },
  { region: "Alentejo", year: "-", name: "Quinta do Carmo Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Pêra-Manca", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Quinta do Carmo", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Herdade dos Grous Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Esporão Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Adega Mayor", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Paço do Conde Antão Vaz e Verdelho", grapes: "Antão Vaz, Verdelho", price: "-" },
  { region: "Alentejo", year: "-", name: "Divai Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Revelado", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Plansel Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Plansel Viosinho", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Esquecido Arinto", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Reserva do Comendador", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Quinta da Plansel Antão Vaz", grapes: "Antão Vaz", price: "-" },
  { region: "Alentejo", year: "-", name: "Já Te Disse Viognier", grapes: "", price: "-" },
  { region: "Açores", year: "2022", name: "Cerca dos Frades", grapes: "Arinto dos Açores, Verdelho, Terrantez", price: "63" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró Grande Reserva", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró Reserva", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Flor do Tua Reserva", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Flor do Sal", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Folha do Meio", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Vale Pradinhos", grapes: "", price: "-" },
]

const page6Rows: Row[] = [
  { countryLabel: france },
  { region: "Borgonha", year: "2023", name: 'Brocard, Chablis "Saint Claire"', grapes: "Chardonnay", price: "69" },
  { region: "Borgonha", year: "2022", name: "Domaine Latour-Giraud, Meursault 1er Cru Genevières", grapes: "Chardonnay", price: "260" },
]

const page6Red375Rows: Row[] = [
  { region: "Douro", year: "2023", name: "Castello d'Alba Reserva", grapes: "Touriga Franca, Tinta Roriz, Touriga Nacional", price: "-" },
  { region: "Douro", year: "2022", name: "Assobio", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "-" },
  { region: "Douro", year: "-", name: "Isento Reserva", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "2023", name: "Dona Ermelinda", grapes: "", price: "-" },
]

const page6Red75Rows: Row[] = [
  { region: "Douro", year: "2015", name: "Barca Velha", grapes: "", price: "1200" },
  { region: "Douro", year: "-", name: "Chryseia", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "-" },
  { region: "Douro", year: "-", name: "D. Antónia Adelaide Ferreira", grapes: "", price: "-" },
  { region: "Douro", year: "2011", name: "Cadão PM Vinhas Velhas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Bastardo", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Palácio Távora Grande Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Tinta Francisca", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Popa Homenagem", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Borges Grande Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "B.C. Douro Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Crasto Vinhas Velhas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Carvalhas Tinta Francisca", grapes: "", price: "-" },
  { region: "Douro", year: "2017", name: "Oboé", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "3 Litros Vinhas Velhas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Séries", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Duas Margens Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Vacaria Grande Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Vacaria Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Corte Princesa Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Gaivosa Primeiros Anos", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Gaivosa", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Castas Escondidas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Oboe Vinha da Parcela", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Távora Varosa Vinhas Velhas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Costa Boal Homenagem", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta do Portal", grapes: "", price: "-" },
]

const page7RedRows: Row[] = [
  { region: "Douro", year: "-", name: "Xisto Preto Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Carvalhas Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Íncola", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Isento Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Isento Grande Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Assobio", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Corte Grande Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Consensual Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "CARM Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta das Murças", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Rede Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Odisseia", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Esteva Magnum", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Reserva Especial Casa Ferreirinha", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Legado", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Carvalhas Vinhas Velhas Quinta das Carvalhas", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Duas Quintas Reserva", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta dos Aciprestes Grande Reserva Sousão", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta dos Aciprestes GRTN Talhão 14", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Quinta da Leda", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Callabriga", grapes: "", price: "-" },
  { region: "Douro", year: "-", name: "Vinha Grande", grapes: "", price: "-" },
  { region: "Douro", year: "2022", name: "Quinta da Manoella VV", grapes: "Vinhas Velhas", price: "190" },
  { region: "Douro", year: "2019", name: "Menin Estates, Dona Beatriz", grapes: "Vinhas Velhas", price: "350" },
  { region: "Douro", year: "2022", name: "Monte Xisto Órbita", grapes: "Touriga Nacional, Vinhas Velhas", price: "67" },
  { region: "Douro", year: "2022", name: "Niepoort, Batuta", grapes: "Vinhas Velhas", price: "120" },
  { region: "Douro", year: "2021", name: "Poças, Vinha da Roga", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "47" },
  { region: "Douro", year: "2021", name: "Poeira", grapes: "Vinhas Velhas", price: "92" },
  { region: "Douro", year: "2020", name: "Lavradores de Feitoria, Meruge", grapes: "Tinta Roriz, Vinhas Velhas", price: "60" },
  { region: "Douro", year: "2022", name: "Quinta do Crasto Reserva", grapes: "Vinhas Velhas", price: "75" },
  { region: "Douro", year: "2019", name: "Quinta do Crasto, Vinha da Ponte", grapes: "Vinhas Velhas", price: "440" },
  { region: "Douro", year: "2010", name: "Quinta do Infantado 1.5L", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "160" },
  { region: "Douro", year: "2021", name: "Quinta do Vallado", grapes: "Sousão", price: "58" },
  { region: "Douro", year: "2022", name: "Quinta do Vallado, Vinha da Coroa", grapes: "Vinhas Velhas", price: "130" },
  { region: "Douro", year: "2022", name: "Quinta Vale D. Maria, Vinha da Francisca", grapes: "Sousão, Touriga Franca, Touriga Nacional, Rufete e Tinta Francisca", price: "175" },
  { region: "Dão", year: "-", name: "Conde de Santar", grapes: "", price: "-" },
]

const page8RedRows: Row[] = [
  { region: "Dão", year: "-", name: "Borges Dão Reserva", grapes: "", price: "-" },
  { region: "Dão", year: "-", name: "Quinta dos Carvalhais Único", grapes: "", price: "-" },
  { region: "Dão", year: "-", name: "Casa de Santar Reserva", grapes: "", price: "-" },
  { region: "Dão", year: "-", name: "Soito", grapes: "", price: "-" },
  { region: "Dão", year: "-", name: "Quinta Picos do Couto Grande Escolha", grapes: "", price: "-" },
  { region: "Dão", year: "2022", name: "Ideal", grapes: "Touriga Nacional, Tinta Roriz, Alfrocheiro, Jaen", price: "40" },
  { region: "Dão", year: "2018", name: "Villa Oliveira", grapes: "Touriga Nacional", price: "110" },
  { region: "Bairrada", year: "2023", name: "Filipa Pato, Dinâmica", grapes: "Baga", price: "35" },
  { region: "Bairrada", year: "2011", name: "Luís Pato, BTT", grapes: "Baga, Touriga Nacional, Tinto Cão", price: "55" },
  { region: "Bairrada", year: "2013", name: "Luis Pato, Quinta do Ribeirinho", grapes: "Baga", price: "380" },
  { region: "Tejo", year: "2022", name: "Casa Cadaval", grapes: "Trincadeira Preta", price: "30" },
  { region: "Lisboa", year: "-", name: "Quinta do Gradil Tannat", grapes: "", price: "-" },
  { region: "Lisboa", year: "-", name: "Mourisca", grapes: "", price: "-" },
  { region: "Lisboa", year: "2020", name: "Adega Mãe, Atlântico", grapes: "Pinot Noir", price: "48" },
  { region: "Lisboa", year: "2021", name: "Quinta do Monte d'Oiro Reserva", grapes: "Syrah, Viognier", price: "88" },
  { region: "P. Setúbal", year: "-", name: "Bacalhôa Merlot", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Ermelinda Vinho das Grutas", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Dona Ermelinda Reserva", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Dona Ermelinda Grande Reserva", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "-", name: "Catarina", grapes: "", price: "-" },
  { region: "P. Setúbal", year: "2018", name: "Pegos Claros Grande Escolha", grapes: "Castelão", price: "61" },
  { region: "Alentejo", year: "2014", name: "Herdadeade do Peso Ícone", grapes: "Alicante Bouschet, Syrah", price: "-" },
  { region: "Alentejo", year: "2013", name: "Pêra-Manca", grapes: "", price: "-" },
  { region: "Alentejo", year: "2013", name: "Tonel 3-4", grapes: "", price: "-" },
  { region: "Alentejo", year: "2016", name: "Blog", grapes: "", price: "-" },
  { region: "Alentejo", year: "2021", name: "Adega Mayor Touriga Nacional", grapes: "Touriga Nacional", price: "-" },
  { region: "Alentejo", year: "-", name: "Adega Mayor", grapes: "", price: "-" },
  { region: "Alentejo", year: "2021", name: "Adega Mayor Reserva do Comendador", grapes: "Alicante Bouschet, Syrah, Touriga Nacional", price: "-" },
  { region: "Alentejo", year: "-", name: "Furtiva Lágrima", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Crónica #328 JRV", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Ímpar", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Quinta do Quetzal Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Síbio", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Herdadeade da Arcebispa Grande Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Nunes Barata Grande Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Poliphonia Signature", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Grande Rocim", grapes: "", price: "-" },
]

const page9RedRows: Row[] = [
  { region: "Alentejo", year: "-", name: "Preta", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Bela Luz Rocim", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Grou Family Collection", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Entre Tantos Edição Especial Reserva Nacional", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Blog Bivarietal", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Ânfora NB", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Visconde Borba Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Já Te Disse", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Santos da Casa Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Duas Famílias Alicante Bouschet", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Herdadeade das Servas Sem Barrica", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Torre de Palma Musas", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Torre de Palma Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Vidigueira", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Paço do Conde Grande Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Vicentino", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Nunes Barata Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Pai Chão Adega Mayor", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Quinta do Carmo", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Esporão Reserva", grapes: "", price: "-" },
  { region: "Alentejo", year: "-", name: "Essência - Herdadeade do Peso", grapes: "", price: "-" },
  { region: "Alentejo", year: "2021", name: "Alento Reserva", grapes: "Aragonez, Syrah, Alicante Bouschet, Touriga Nacional", price: "39" },
  { region: "Alentejo", year: "2021", name: "Lobo de Vasconcellos, LV Reserva", grapes: "Syrah, Touriga Nacional, Alicante Bouschet", price: "65" },
  { region: "Alentejo", year: "2017", name: "Mouchão", grapes: "Alicante Bouschet, Trincadeira", price: "98" },
  { region: "Alentejo", year: "2018", name: "Pêra-Manca", grapes: "Aragonez, Trincadeira", price: "730" },
  { region: "Alentejo", year: "2019", name: "Quinta do Mouro", grapes: "Aragonez, Alicante Bouschet, Cabernet Sauvignon", price: "78" },
  { region: "Alentejo", year: "2019", name: "Esporão Private Selection", grapes: "Alicante Bouschet, Aragonez, Syrah", price: "150" },
  { region: "Alentejo", year: "2019", name: "Susana Esteban, Procura", grapes: "Vinhas Velhas", price: "82" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró DOC", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró Cima Grande Reserva", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Quinta do Sobreiró Único", grapes: "", price: "-" },
  { region: "Trás-os-Montes", year: "-", name: "Flor do Tua Reserva", grapes: "", price: "-" },
  { countryLabel: france },
  { region: "Bordéus", year: "2021", name: "Château Malescasse", grapes: "Merlot, Cabernet Sauvignon, Petit Verdot", price: "82" },
  { region: "Bordéus", year: "2011", name: "Château Margaux", grapes: "Cabernet Sauvignon, Cabernet Franc, Merlot, Petit Verdot", price: "1300" },
  { region: "Bordéus", year: "2008", name: "Pétrus", grapes: "Merlot", price: "4900" },
]

const page10RedRows: Row[] = [
  { region: "Rhône", year: "2020", name: "Domaine Rostaing, Côte Rôtie, Ampodium", grapes: "Syrah, Viognier", price: "170" },
  { region: "Rhône", year: "-", name: "Perrin - Château de Beaucastel Rouge", grapes: "", price: "-" },
  { region: "Borgonha", year: "2023", name: "Domaine Gerard Julien, Bourgogne Origine", grapes: "Pinot Noir", price: "70" },
  { region: "Borgonha", year: "2022", name: "Domaine Taupenot-Merme Auxey Duresses 1er Cru", grapes: "Pinot Noir", price: "135" },
  { countryLabel: italia },
  { region: "Toscana", year: "-", name: "Tenuta Casenuove IGT", grapes: "", price: "-" },
  { countryLabel: argentina },
  { region: "Valle de Uco", year: "2020", name: "Zuccardi, Concreto", grapes: "Malbec", price: "105" },
  { countryLabel: chile },
  { region: "Valle de Maipo", year: "2016", name: "Almaviva", grapes: "Cabernet Sauvignon, Carmenere, Cabernet Franc, Petit Verdot", price: "570" },
  { countryLabel: espanha },
  { region: "Toro", year: "2015", name: "Termanthia", grapes: "Tinta de Toro", price: "450" },
]

const sweetRows: Row[] = [
  { region: "Porto", year: "NV", name: "Sandeman", grapes: "Tawny 20 anos", price: "14" },
  { region: "Porto", year: "1985", name: "Dalva Colheita", grapes: "", price: "21" },
  { region: "Porto", year: "2020", name: "Ferreira LBV", grapes: "", price: "7" },
  { region: "Porto", year: "2006", name: "Kopke White Colheita", grapes: "", price: "12" },
  { region: "Moscatel", year: "NV", name: "Alambre", grapes: "Moscatel de Setúbal Superior 20 Anos", price: "10" },
  { region: "Moscatel", year: "2007", name: "Família Horácio Simões, Moscatel Roxo Superior", grapes: "", price: "8" },
  { region: "Madeira", year: "NV", name: "Blandy’s Verdelho", grapes: "10 anos", price: "7" },
  { region: "Madeira", year: "NV", name: "Blandy’s Rich Malmsey", grapes: "15 anos", price: "11" },
  { region: "Carcavelos", year: "NV", name: "Villa Oeiras", grapes: "7 anos", price: "7" },
  { region: "Colares", year: "2018", name: "Casal Santa Maria, Colheita Tardia", grapes: "", price: "9" },
  { region: "Ilha do Pico", year: "NV", name: "Ilha do Pico, Licoroso", grapes: "10 anos", price: "12" },
  { region: "Sauternes", year: "2012", name: "Château Sigalas Rabaud 1er Cru", grapes: "Sémillion, Sauvignon Blanc", price: "13" },
]

function CountryLabel({ label }: { label: string }) {
    const [first, ...rest] = label.split(" · ")
  
    return (
      <div className="country-row">
        <span className="country-first">{first}</span>
        {rest.map((item, index) => (
          <span key={`${label}-${item}-${index}`}> · {item}</span>
        ))}
      </div>
    )
  }
  
  function MenuHeader({
    title = "GARRAFAS",
    subtitle = "BOTTLES · BOTELLAS · BOUTEILLE · FLASCHE",
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
        {(title || subtitle || volume) && (
          <>
            <div className="section-title-wrap">
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <span>{volume}</span>
            </div>
  
            <div className="section-line" />
          </>
        )}
  
        <div className="rows">
          {rows.map((row, index) => {
            if ("divider" in row) {
              return (
                <div className="divider-row" key={`divider-${index}`}>
                  <span>{row.volume}</span>
                </div>
              )
            }
  
            if ("countryLabel" in row) {
              return <CountryLabel key={`country-${index}`} label={row.countryLabel} />
            }
  
            return (
              <div className="wine-row" key={`${row.name}-${index}`}>
                <div className="region">{row.region}</div>
                <div className="year">{row.year}</div>
                <div className="name">{row.name}</div>
                <div className="grapes">{row.grapes}</div>
                <div className="price">{row.price}</div>
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
  .page-shell {
    --mobile-scale: calc((100vw - 20px) / 793.7);
    padding: 10px 10px;
    gap: 0;
    overflow-x: hidden;
    align-items: center;
  }

  .a4-page {
    flex: 0 0 auto;
    width: 210mm;
    min-height: 297mm;
    transform: scale(var(--mobile-scale));
    transform-origin: top center;
    margin-bottom: calc((297mm * var(--mobile-scale)) - 297mm + 24px);
  }
}
  
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
  
            html,
            body {
              background: ${paper};
            }
  
            .page-shell {
              padding: 0;
              gap: 0;
              background: ${paper};
            }
  
            .a4-page {
              width: 210mm;
              min-height: 297mm;
              box-shadow: none;
              page-break-after: always;
              break-after: page;
            }
          }
        `}</style>
      </main>
    )
  }