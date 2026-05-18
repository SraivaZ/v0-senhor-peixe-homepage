"use client"

import type { ReactNode } from "react"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

type WineRow = {
  region?: string
  year?: string
  name?: string
  grapes?: string
  price?: string
  countryLabel?: string
}

type WineSection = {
  title: string
  subtitle: string
  volume?: string
  rows: WineRow[]
  compact?: boolean
  simple?: boolean
}

const wineByGlassSparkling: WineRow[] = [{ year: "NV", price: "6" }]
const wineByGlassWhite: WineRow[] = [{ year: "NV", price: "5" }]
const wineByGlassRose: WineRow[] = [{ year: "NV", price: "6" }]
const wineByGlassRed: WineRow[] = [{ year: "NV", price: "6" }]

const champagneRows: WineRow[] = [
  { region: "Champagne", year: "NV", name: "Charles Mignon", grapes: "Pinot Meunier, Chardonnay, Pinot Noir", price: "70" },
  { region: "Champagne", year: "NV", name: "Louis Roederer Collection", grapes: "Chardonnay, Pinot Noir, Pinot Meunier", price: "100" },
  { region: "Champagne", year: "NV", name: "Ruinart Blanc de Blancs", grapes: "Chardonnay", price: "160" },
  { region: "Champagne", year: "NV", name: "Cattier", grapes: "Pinot Meunier, Pinot Noir, Chardonnay", price: "79" },
  { region: "Champagne", year: "NV", name: "Diamant Blanc de Blancs", grapes: "Chardonnay", price: "120" },
  { region: "Champagne", year: "NV", name: "Moët & Chandon Ice Impérial", grapes: "Pinot Noir, Pinot Meunier, Chardonnay", price: "120" },
  { region: "Champagne", year: "NV", name: "Moët & Chandon Nectar Impérial", grapes: "Pinot Noir, Pinot Meunier, Chardonnay", price: "110" },
  { region: "Champagne", year: "NV", name: "Cristal", grapes: "Pinot Noir, Chardonnay", price: "630" },
]

const champagneRoseRows: WineRow[] = [
  { region: "Champagne", year: "2006", name: "Bollinger Limited Edition", grapes: "Pinot Noir, Chardonnay", price: "190" },
  { region: "Champagne", year: "NV", name: "Diamant Rosé", grapes: "Pinot Noir, Chardonnay", price: "160" },
  { region: "Champagne", year: "NV", name: "Ruinart Rosé", grapes: "Chardonnay, Pinot Noir", price: "180" },
]

const sparklingRows: WineRow[] = [
  { region: "Trás-os-Montes", year: "NV", name: "Quinta do Sobreiró Reserva Bruto", grapes: "", price: "50" },
  { region: "Távora-Varosa", year: "NV", name: "Raposeira Brut", grapes: "Malvasia Fina, Cerceal, Gouveio", price: "29" },
  { region: "Távora-Varosa", year: "NV", name: "Raposeira Blanc de Noirs", grapes: "Touriga Nacional, Tinta Roriz", price: "30" },
  { region: "Távora-Varosa", year: "NV", name: "Murganheira Super Reserva Brut", grapes: "", price: "37" },
  { region: "Bairrada", year: "NV", name: "Ortigão Cuvée", grapes: "Baga, Bical, Arinto", price: "33" },
  { region: "Bairrada", year: "NV", name: "Marquês de Marialva", grapes: "Bical, Arinto, Baga", price: "27" },
  { region: "Bairrada", year: "NV", name: "Marquês de Marialva Rosé", grapes: "Baga", price: "29" },
]

const halfRoseRows: WineRow[] = [
  { region: "Portugal", year: "NV", name: "Mateus Rosé", grapes: "Baga, Rufete, Tinta Barroca, Touriga Franca", price: "10" },
]

const halfWhiteRows: WineRow[] = [
  { region: "Douro", year: "NV", name: "Castello d’Alba Reserva Branco", grapes: "Viosinho, Rabigato, Códega do Larinho, Gouveio", price: "13" },
  { region: "Vinho Verde", year: "NV", name: "Bico Amarelo", grapes: "Loureiro, Alvarinho, Avesso", price: "10" },
  { region: "Douro", year: "NV", name: "Planalto", grapes: "Viosinho, Malvasia Fina, Gouveio, Códega, Rabigato, Moscatel", price: "9" },
  { region: "Península de Setúbal", year: "NV", name: "Dona Ermelinda Branco", grapes: "Fernão Pires, Antão Vaz, Arinto, Chardonnay", price: "9" },
  { region: "Douro", year: "NV", name: "Isento Branco", grapes: "", price: "13" },
]

const halfRedRows: WineRow[] = [
  { region: "Douro", year: "NV", name: "Castello d’Alba Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "14" },
  { region: "Douro", year: "NV", name: "Assobio Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "10" },
  { region: "Península de Setúbal", year: "NV", name: "Dona Ermelinda Tinto", grapes: "Castelão, Aragonez, Trincadeira", price: "9" },
  { region: "Douro", year: "NV", name: "Isento Tinto", grapes: "", price: "13" },
]

const roseRows: WineRow[] = [
  { region: "Douro", year: "NV", name: "Assobio Rosé", grapes: "Touriga Nacional, Tinta Roriz, Touriga Franca", price: "19" },
  { region: "Península de Setúbal", year: "NV", name: "Bacalhôa Roxo Rosé", grapes: "Moscatel Roxo", price: "23" },
  { region: "Península de Setúbal", year: "NV", name: "Casa Ermelinda Freitas Rosé", grapes: "Castelão, Touriga Nacional, Syrah", price: "22" },
  { region: "Portugal", year: "NV", name: "Mateus Rosé", grapes: "Baga, Rufete, Tinta Barroca, Touriga Franca", price: "18" },
  { region: "Trás-os-Montes", year: "NV", name: "Vale Pradinhos Rosé", grapes: "", price: "24" },
]

const whitePage1Rows: WineRow[] = [
  { region: "Vinho Verde", year: "NV", name: "Quinta de Azevedo Escolha", grapes: "Loureiro, Alvarinho", price: "27" },
  { region: "Vinho Verde", year: "NV", name: "Bico Amarelo", grapes: "Loureiro, Alvarinho, Avesso", price: "19" },
  { region: "Vinho Verde", year: "NV", name: "Mar Salgado", grapes: "Loureiro, Trajadura", price: "19" },
  { region: "Vinho Verde", year: "NV", name: "Qta Ameal Loureiro", grapes: "Loureiro", price: "23" },
  { region: "Vinho Verde", year: "NV", name: "Muros Melgaço", grapes: "Alvarinho", price: "38" },
  { region: "Vinho Verde", year: "NV", name: "Palácio da Brejoeira", grapes: "Alvarinho", price: "40" },
  { region: "Vinho Verde", year: "NV", name: "Milagres by Quinta da Pedra", grapes: "Alvarinho", price: "35" },
  { region: "Vinho Verde", year: "NV", name: "Parcela Única", grapes: "Alvarinho", price: "78" },
  { region: "Vinho Verde", year: "NV", name: "Ronfe", grapes: "Alvarinho", price: "28" },
  { region: "Trás-os-Montes", year: "NV", name: "Quinta do Sobreiró Grande Reserva Branco", grapes: "", price: "32" },
  { region: "Trás-os-Montes", year: "NV", name: "Quinta do Sobreiró Reserva Branco", grapes: "", price: "22" },
  { region: "Trás-os-Montes", year: "NV", name: "Vale Pradinhos Branco", grapes: "", price: "31" },
  { region: "Trás-os-Montes", year: "NV", name: "Flor do Tua Reserva Branco", grapes: "", price: "23" },
  { region: "Douro", year: "NV", name: "Quinta da Rede Reserva Branco", grapes: "Viosinho, Rabigato, Gouveio, Arinto", price: "33" },
  { region: "Douro", year: "NV", name: "Planalto Branco", grapes: "Viosinho, Malvasia Fina, Gouveio, Códega, Rabigato, Moscatel", price: "18" },
  { region: "Douro", year: "NV", name: "Redoma Reserva Branco", grapes: "Rabigato, Códega, Viosinho, Arinto", price: "75" },
  { region: "Douro", year: "NV", name: "Isento Reserva Branco", grapes: "Códega do Larinho, Viosinho", price: "24" },
  { region: "Douro", year: "NV", name: "CARM Reserva Branco", grapes: "Rabigato, Códega do Larinho, Viosinho", price: "28" },
  { region: "Douro", year: "NV", name: "Assobio Branco", grapes: "Viosinho, Rabigato, Gouveio, Códega do Larinho", price: "18" },
  { region: "Douro", year: "NV", name: "Casa Velha Branco", grapes: "", price: "24" },
  { region: "Douro", year: "NV", name: "Quinta do Crasto Superior Branco", grapes: "Viosinho, Verdelho", price: "36" },
  { region: "Douro", year: "NV", name: "Três Bagos Branco", grapes: "Viosinho, Rabigato, Gouveio, Malvasia Fina", price: "29" },
]

const whitePage2Rows: WineRow[] = [
  { region: "Douro", year: "NV", name: "Odisseia Branco", grapes: "Rabigato, Viosinho, Gouveio", price: "25" },
  { region: "Douro", year: "NV", name: "Vinha Grande Branco", grapes: "Viosinho, Arinto, Rabigato, Gouveio", price: "27" },
  { region: "Beira Interior", year: "NV", name: "Beyra Reserva Quartz", grapes: "Síria, Fonte Cal", price: "26" },
  { region: "Douro", year: "NV", name: "Castello d’Alba Reserva Branco", grapes: "Viosinho, Rabigato, Códega do Larinho, Gouveio", price: "25" },
  { region: "Beira Interior", year: "NV", name: "Vinha do Carloto Branco", grapes: "Síria, Fonte Cal", price: "24" },
  { region: "Dão", year: "NV", name: "Bella Elegance Branco", grapes: "", price: "30" },
  { region: "Dão", year: "NV", name: "Quinta dos Carvalhais Branco", grapes: "Encruzado, Gouveio", price: "48" },
  { region: "Dão", year: "NV", name: "Quinta dos Carvalhais Colheita Branco", grapes: "Encruzado, Gouveio", price: "29" },
  { region: "Dão", year: "NV", name: "Taboadella Branco", grapes: "Encruzado, Bical, Cercial", price: "29" },
  { region: "Dão", year: "NV", name: "Soito Branco", grapes: "Encruzado, Malvasia Fina", price: "31" },
  { region: "Dão", year: "NV", name: "Quinta dos Carvalhiços Reserva Branco", grapes: "Encruzado", price: "33" },
  { region: "Dão", year: "NV", name: "Dona Sancha Vinha Avarenta Branco", grapes: "Encruzado", price: "36" },
  { region: "Bairrada", year: "NV", name: "Ortigão Branco", grapes: "Bical, Arinto, Maria Gomes", price: "22" },
  { region: "Portugal — blend Bairrada/Lisboa", year: "NV", name: "Silk & Spice White", grapes: "Bical, Arinto, Chardonnay", price: "21" },
  { region: "Lisboa", year: "NV", name: "Quinta do Gradil Arinto", grapes: "Arinto", price: "20" },
  { region: "Lisboa", year: "NV", name: "Quinta do Gradil Viosinho", grapes: "Viosinho", price: "20" },
  { region: "Lisboa", year: "NV", name: "Prova Régia Arinto", grapes: "Arinto", price: "21" },
  { region: "Lisboa", year: "NV", name: "Mar Salgado Arinto/Chardonnay", grapes: "Arinto, Chardonnay", price: "24" },
  { region: "Península de Setúbal", year: "NV", name: "Quinta da Bacalhôa Chardonnay", grapes: "Chardonnay", price: "25" },
  { region: "Península de Setúbal", year: "NV", name: "Dona Ermelinda Reserva Branco", grapes: "Arinto, Chardonnay, Viognier", price: "17" },
  { region: "Península de Setúbal", year: "NV", name: "Ermelinda Freitas Branco", grapes: "Fernão Pires, Arinto", price: "21" },
]

const whitePage3Rows: WineRow[] = [
  { region: "Alentejo", year: "NV", name: "Adega Mayor Reserva Branco", grapes: "Antão Vaz, Arinto, Verdelho", price: "22" },
  { region: "Alentejo", year: "NV", name: "Esquecido (Casa Relvas) Branco", grapes: "", price: "34" },
  { region: "Alentejo", year: "NV", name: "Herdade dos Grous Reserva Branco", grapes: "Antão Vaz, Arinto, Gouveio", price: "40" },
  { region: "Alentejo", year: "NV", name: "Já Te Disse Branco", grapes: "", price: "70" },
  { region: "Alentejo", year: "NV", name: "Paço do Conde Branco", grapes: "Antão Vaz, Arinto, Roupeiro", price: "17" },
  { region: "Alentejo", year: "NV", name: "Quinta do Carmo Branco", grapes: "Arinto, Antão Vaz, Roupeiro", price: "23" },
  { region: "Alentejo", year: "NV", name: "Esporão Reserva Branco", grapes: "Antão Vaz, Arinto, Roupeiro", price: "33" },
  { region: "Alentejo", year: "NV", name: "Esporão Colheita Branco", grapes: "", price: "22" },
  { region: "Alentejo", year: "NV", name: "Divai Reserva Branco", grapes: "Antão Vaz, Arinto", price: "41" },
  { region: "Alentejo", year: "NV", name: "Revelado Branco", grapes: "", price: "30" },
  { region: "Alentejo", year: "NV", name: "Pêra-Manca Branco", grapes: "Antão Vaz, Arinto", price: "108" },
  { region: "Alentejo", year: "NV", name: "Reserva do Comendador Branco", grapes: "Antão Vaz, Arinto, Verdelho", price: "48" },
  { region: "Alentejo", year: "NV", name: "Flor de Sal Branco", grapes: "Antão Vaz, Arinto", price: "22" },
  { region: "Alentejo", year: "NV", name: "Folha do Meio Branco", grapes: "", price: "27" },
  { region: "Alentejo", year: "NV", name: "Quinta do Carmo Reserva Branco", grapes: "Arinto, Antão Vaz, Roupeiro", price: "45" },
  { region: "Alentejo", year: "NV", name: "Vicentino Branco", grapes: "Sauvignon Blanc, Arinto, Alvarinho", price: "23" },
  { region: "Alentejo", year: "NV", name: "Pousio Reserva Branco", grapes: "Antão Vaz, Arinto", price: "35" },
]

const redPage1Rows: WineRow[] = [
  { region: "Trás-os-Montes", year: "NV", name: "Quinta do Sobreiró Grande Reserva Tinto", grapes: "", price: "40" },
  { region: "Trás-os-Montes", year: "NV", name: "Quinta do Sobreiró Reserva Tinto", grapes: "", price: "29" },
  { region: "Trás-os-Montes", year: "NV", name: "Flor do Tua Reserva Tinto", grapes: "", price: "28" },
  { region: "Douro", year: "NV", name: "Assobio Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "19" },
  { region: "Douro", year: "2023", name: "Isento Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "24" },
  { region: "Douro", year: "2020", name: "Isento Grande Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "42" },
  { region: "Douro", year: "2014", name: "Casa Ferreirinha Tinta Francisca", grapes: "Tinta Francisca", price: "180" },
  { region: "Douro", year: "NV", name: "Quinta da Leda Tinto", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinto Cão", price: "98" },
  { region: "Douro", year: "2019", name: "Castas Escondidas Tinto", grapes: "", price: "65" },
  { region: "Douro", year: "NV", name: "Callabriga Tinto", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz", price: "40" },
  { region: "Douro", year: "NV", name: "CARM Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "33" },
  { region: "Douro", year: "NV", name: "Oboé 17 Tinto", grapes: "", price: "60" },
  { region: "Douro", year: "NV", name: "Odisseia Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "25" },
  { region: "Douro", year: "NV", name: "Quinta do Crasto Altitude Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz, Sousão", price: "38" },
  { region: "Douro", year: "NV", name: "Quinta do Crasto Vinhas Velhas Tinto", grapes: "Vinhas Velhas", price: "70" },
  { region: "Dão", year: "2011", name: "Conde de Santar Tinto", grapes: "Touriga Nacional, Alfrocheiro, Tinta Roriz", price: "122" },
  { region: "Dão", year: "NV", name: "Soito Tinto", grapes: "Touriga Nacional, Alfrocheiro, Jaen, Tinta Roriz", price: "29" },
  { region: "Beira Interior", year: "NV", name: "Carloto Tinto", grapes: "", price: "27" },
  { region: "Lisboa", year: "NV", name: "Quinta de Vale Mourisco Syrah", grapes: "Syrah", price: "31" },
  { region: "Península de Setúbal", year: "NV", name: "Dona Ermelinda Reserva Tinto", grapes: "Syrah, Aragonez, Castelão", price: "17" },
  { region: "Península de Setúbal", year: "2020", name: "D. Ermelinda Grande Reserva Tinto", grapes: "Syrah, Touriga Nacional, Aragonez", price: "63" },
  { region: "Alentejo", year: "NV", name: "Adega Mayor Reserva Tinto", grapes: "Alicante Bouschet, Aragonez, Touriga Nacional", price: "23" },
]

const redPage2Rows: WineRow[] = [
  { region: "Alentejo", year: "2009", name: "Grou Family Collection Tinto", grapes: "", price: "189" },
  { region: "Alentejo", year: "2016", name: "Blog Bi-Varietal Tinto", grapes: "Alicante Bouschet, Syrah", price: "135" },
  { region: "Alentejo", year: "2016", name: "Blog Tinto", grapes: "Alicante Bouschet, Syrah, Touriga Nacional", price: "90" },
  { region: "Alentejo", year: "2015", name: "Fita Preta Grande Reserva Tinto", grapes: "Alicante Bouschet, Aragonez, Trincadeira", price: "131" },
  { region: "Alentejo", year: "2013", name: "Furtiva Lágrima Tinto", grapes: "", price: "95" },
  { region: "Alentejo", year: "2011", name: "Ímpar Tinto", grapes: "", price: "133" },
  { region: "Alentejo", year: "2020", name: "Já Te Disse Tinto", grapes: "", price: "149" },
  { region: "Alentejo", year: "2013", name: "Mouchão Tonel 3-4 Tinto", grapes: "Alicante Bouschet", price: "300" },
  { region: "Alentejo", year: "2020", name: "Torre de Palma Musas Tinto", grapes: "Alicante Bouschet, Aragonez, Touriga Nacional, Tinta Miúda", price: "159" },
  { region: "Alentejo", year: "2021", name: "Torre de Palma Reserva Tinto", grapes: "Alicante Bouschet, Aragonez, Touriga Nacional, Tinta Miúda", price: "47" },
  { region: "Alentejo", year: "NV", name: "Esporão Reserva Tinto", grapes: "Aragonez, Trincadeira, Cabernet Sauvignon, Alicante Bouschet", price: "38" },
  { region: "Alentejo", year: "NV", name: "Reserva do Comendador Tinto", grapes: "Alicante Bouschet, Aragonez, Syrah", price: "63" },
  { region: "Alentejo", year: "NV", name: "Paço do Conde Grande Reserva Tinto", grapes: "Alicante Bouschet, Syrah, Touriga Nacional", price: "60" },
  { countryLabel: "ITÁLIA · ITALIA · ITALY · ITALIE · ITALIEN" },
  { region: "Toscana", year: "2015", name: "Toscana Chianti", grapes: "Sangiovese", price: "138" },
  { countryLabel: "FRANÇA · FRANCIA · FRANCE · FRANKREICH" },
  { region: "Haut-Médoc", year: "2017", name: "Château Malescasse", grapes: "Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot", price: "93" },
  { region: "Châteauneuf-du-Pape", year: "2015", name: "Château de Beaucastel Rhône", grapes: "Grenache, Mourvèdre, Syrah, Counoise", price: "140" },
]

const exceptionalRows: WineRow[] = [
  { region: "Douro", year: "2004", name: "Barca Velha Tinto", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinto Cão", price: "1050" },
  { region: "Alentejo", year: "2013", name: "Pêra-Manca Tinto", grapes: "Trincadeira, Aragonez", price: "850" },
  { region: "Douro", year: "2009", name: "Legado Tinto", grapes: "Vinhas Velhas", price: "580" },
  { region: "Alentejo", year: "2015", name: "Crónica 328 Tinto", grapes: "", price: "316" },
  { region: "Trás-os-Montes", year: "2015", name: "Costa Boal Homenagem Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "193" },
  { region: "Douro", year: "2014", name: "Antónia Adelaide Ferreira Tinto", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinto Cão", price: "200" },
  { region: "Douro", year: "2014", name: "Tinta Francisca Tinto", grapes: "Tinta Francisca", price: "180" },
  { region: "Alentejo", year: "2020", name: "Incola Tinto", grapes: "Alicante Bouschet, Trincadeira, Aragonez", price: "250" },
  { region: "Alentejo", year: "2013", name: "Mouchão Tonel 3-4 Tinto", grapes: "Alicante Bouschet", price: "300" },
  { region: "Alentejo", year: "2015", name: "Grande Rocim Tinto", grapes: "Alicante Bouschet, Touriga Nacional, Aragonez", price: "150" },
  { region: "Dão", year: "2015", name: "Quinta dos Carvalhais Único Tinto", grapes: "Touriga Nacional", price: "185" },
  { region: "Alentejo", year: "2009", name: "Grou Family Collection Tinto", grapes: "", price: "189" },
  { region: "Alentejo", year: "2014", name: "H.P. Ícone Tinto", grapes: "", price: "159" },
  { region: "Douro", year: "2020", name: "Quinta da Gaivosa Tinto", grapes: "Vinhas Velhas", price: "103" },
  { region: "Douro", year: "2017", name: "Quinta da Corte Grande Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "114" },
  { region: "Douro", year: "2020", name: "Quinta da Vacaria Grande Reserva Tinto", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "140" },
  { region: "Douro", year: "2009", name: "Casa Ferreirinha Reserva Especial Tinto", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinto Cão", price: "660" },
]

const largeFormatRows: WineRow[] = [
  { region: "Península de Setúbal", year: "2008", name: "Herdade Portocarro Tinto · Magnum 1,5L", grapes: "Touriga Nacional, Aragonez, Cabernet Sauvignon", price: "133" },
  { region: "Douro", year: "2008", name: "Quinta da Leda Tinto · Magnum 1,5L", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinto Cão", price: "190" },
  { region: "Douro", year: "2020", name: "Callabriga Tinto · Magnum 1,5L", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz", price: "92" },
  { region: "Douro", year: "2013", name: "Esteva Tinto · Magnum 1,5L", grapes: "Tinta Roriz, Touriga Franca, Tinta Barroca, Touriga Nacional", price: "60" },
  { region: "Douro", year: "2010", name: "Vinhas Velhas Tinto · Magnum 1,5L", grapes: "Vinhas Velhas", price: "570" },
  { region: "Douro", year: "2019", name: "Vinha Grande Tinto · Magnum 1,5L", grapes: "Touriga Franca, Touriga Nacional, Tinta Roriz, Tinta Barroca", price: "72" },
  { region: "Douro", year: "2015", name: "Real Companhia Velha Séries Tinto · Magnum 1,5L", grapes: "", price: "90" },
  { region: "Alentejo", year: "2021", name: "Quinta do Carmo Tinto · Magnum 1,5L", grapes: "Aragonez, Trincadeira, Alicante Bouschet, Cabernet Sauvignon", price: "60" },
  { region: "Alentejo", year: "2008", name: "Reserva do Comendador Tinto · Magnum 1,5L", grapes: "Alicante Bouschet, Aragonez, Syrah", price: "163" },
  { region: "Alentejo", year: "2018", name: "Paço do Conde Tinto · Double Magnum 3L", grapes: "Aragonez, Trincadeira", price: "128" },
  { region: "Douro", year: "NV", name: "Quinta da Vacaria Grande Reserva Tinto · Double Magnum 3L", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "650" },
  { region: "Douro", year: "NV", name: "Quinta da Vacaria Tinto · Jeroboam 5L", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", price: "550" },
  { region: "Alentejo", year: "2019", name: "Paço do Conde Tinto · Imperial 6L", grapes: "Aragonez, Trincadeira", price: "168" },
  { region: "Alentejo", year: "2019", name: "Paço do Conde Tinto · Salmanazar 9L", grapes: "Aragonez, Trincadeira", price: "285" },
  { region: "Alentejo", year: "2019", name: "Paço do Conde Tinto · Baltazar 12L", grapes: "Aragonez, Trincadeira", price: "487" },
  { region: "Alentejo", year: "2018", name: "Pai Chão Tinto · Baltazar 12L", grapes: "", price: "1700" },
  { region: "Alentejo", year: "2019", name: "Reserva do Comendador Tinto · Baltazar 12L", grapes: "Alicante Bouschet, Aragonez, Syrah", price: "1300" },
]

const HERO_LOGO = "/senhor-peixe-logo.png"
const COVER_IMAGE = "/CAPA VINHOS.png"
const BOTTLES_TITLE = "GARRAFAS"
const BOTTLES_SUBTITLE = "BOTTLES · BOTELLAS · BOUTEILLE · FLASCHE"

function Page({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`wine-page ${className}`}>{children}</section>
}

function formatWineName(name?: string) {
  if (!name) return null

  return name.split(/(\d+(?:,\d+)?L)/g).map((part, index) => {
    if (/^\d+(?:,\d+)?L$/.test(part)) {
      return (
        <span key={`${part}-${index}`} className="wine-unit">
          {part}
        </span>
      )
    }

    return part
  })
}

function Header({
  mainTitle = "VINHOS",
  mainSubtitle = "WINE · VINO · VIN · WEINE",
}: {
  mainTitle?: string
  mainSubtitle?: string
}) {
  return (
    <header className="wine-header">
      <img src={HERO_LOGO} alt="Senhor Peixe" className="wine-logo" />
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
      <img src={COVER_IMAGE} alt="Carta de Vinhos Senhor Peixe" className="cover-image" />
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

function WineRows({ rows, compact = false, simple = false }: { rows: WineRow[]; compact?: boolean; simple?: boolean }) {
  return (
    <div className={`wine-rows ${compact ? "wine-rows-compact" : ""} ${simple ? "wine-rows-simple" : ""}`}>
      {rows.map((row, index) => {
        if (row.countryLabel) {
          return (
            <div key={`${row.countryLabel}-${index}`} className="country-label">
              {row.countryLabel}
            </div>
          )
        }

        if (simple) {
          return (
            <div key={`${row.year}-${row.price}-${index}`} className="wine-row-simple">
              <div className="wine-year">{row.year}</div>
              <div className="wine-price">{row.price}</div>
            </div>
          )
        }

        return (
          <div key={`${row.name}-${row.year}-${index}`} className="wine-row">
            <div className="wine-region">{row.region}</div>
            <div className="wine-year">{row.year}</div>
            <div className="wine-name">{formatWineName(row.name)}</div>
            <div className="wine-grapes">{row.grapes}</div>
            <div className="wine-price">{row.price}</div>
          </div>
        )
      })}
    </div>
  )
}

function WineSectionBlock({ title, subtitle, volume, rows, compact, simple }: WineSection) {
  return (
    <section className="wine-section">
      <SectionHeader title={title} subtitle={subtitle} volume={volume} />
      <WineRows rows={rows} compact={compact} simple={simple} />
    </section>
  )
}

function WineListPage({ sections, className = "" }: { sections: WineSection[]; className?: string }) {
  return (
    <Page className={`list-page bottles-page ${className}`}>
      <Header mainTitle={BOTTLES_TITLE} mainSubtitle={BOTTLES_SUBTITLE} />
      <div className="top-gold-rule" />
      <div className="sections-stack">
        {sections.map((section, index) => (
          <WineSectionBlock key={`${section.title}-${index}`} {...section} />
        ))}
      </div>
      <FooterOrnament />
    </Page>
  )
}

function WineByGlassPage() {
  return (
    <Page className="list-page by-glass-page">
      <Header
        mainTitle="VINHO A COPO"
        mainSubtitle="WINE BY THE GLASS · VINO A COPA · VIN AU VERRE · WEIN IM GLAS"
      />
      <div className="top-gold-rule" />
      <div className="sections-stack">
        <WineSectionBlock title="ESPUMANTE" subtitle="Sparkling · Espumoso · Mousseux · Sekt" volume="15cl" rows={wineByGlassSparkling} simple />
        <WineSectionBlock title="BRANCO" subtitle="White · Blancos · Blancs · Weiss" volume="15cl" rows={wineByGlassWhite} simple />
        <WineSectionBlock title="ROSÉ" subtitle="Rosé · Rosado · Rosé" volume="15cl" rows={wineByGlassRose} simple />
        <WineSectionBlock title="TINTO" subtitle="Red · Tintos · Rouges · Rotwein" volume="15cl" rows={wineByGlassRed} simple />
      </div>
      <FooterOrnament />
    </Page>
  )
}

function SummaryPage() {
  return (
    <Page className="summary-page">
      <section className="summary-content">
        <div className="summary-top-line" />

        <h2 className={`summary-title ${cinzel.className}`}>A NOSSA GARRAFEIRA</h2>

        <div className="summary-text">
          <p>
            A seleção de vinhos do Senhor Peixe foi pensada para acompanhar a cozinha portuguesa, o peixe fresco e o
            marisco, reunindo referências nacionais e internacionais, vinhos a copo, garrafas especiais e grandes
            formatos.
          </p>

          <p>Para harmonizações ou sugestões, a nossa equipa terá todo o gosto em aconselhar.</p>
        </div>

        <div className={`${cinzel.className} summary-notice`}>
          <p>A NOSSA OFERTA DE VINHOS É ATUALIZADA COM FREQUÊNCIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.</p>
          <p>OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.</p>
        </div>

        <div className={`${cinzel.className} summary-prices`}>
          <p>PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR</p>
          <p>
            PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE |
            PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ
          </p>
        </div>
      </section>

      <FooterOrnament />
    </Page>
  )
}

export default function CartaVinhosPage() {
  return (
    <main className={`wine-menu-shell ${cormorant.className}`}>
      <CoverPage />

      <WineByGlassPage />

      <WineListPage
        sections={[
          { title: "CHAMPAGNE", subtitle: "Champagne · Champaña · Champagne · Champagner", volume: "75cl", rows: champagneRows, compact: true },
          { title: "CHAMPAGNE ROSÉ", subtitle: "Rosé Champagne · Champaña Rosé", volume: "75cl", rows: champagneRoseRows, compact: true },
          { title: "ESPUMANTE", subtitle: "Sparkling · Espumoso · Mousseux · Sekt", volume: "75cl", rows: sparklingRows, compact: true },
        ]}
      />

      <WineListPage
        sections={[
          { title: "ROSÉ", subtitle: "Rosé · Rosado · Rosé", volume: "37,5cl", rows: halfRoseRows },
          { title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "37,5cl", rows: halfWhiteRows },
          { title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "37,5cl", rows: halfRedRows },
          { title: "ROSÉ", subtitle: "Rosé · Rosado · Rosé", volume: "75cl", rows: roseRows },
        ]}
      />

      <WineListPage sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage1Rows, compact: true }]} />
      <WineListPage sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage2Rows, compact: true }]} />
      <WineListPage sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage3Rows, compact: true }]} />
      <WineListPage sections={[{ title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "75cl", rows: redPage1Rows, compact: true }]} />
      <WineListPage sections={[{ title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "75cl", rows: redPage2Rows, compact: true }]} />
      <WineListPage sections={[{ title: "VINHOS DE EXCEÇÃO", subtitle: "Exceptional wines · Vinos de excepción · Vins d’exception", volume: "75cl", rows: exceptionalRows, compact: true }]} />
      <WineListPage sections={[{ title: "GRANDES FORMATOS", subtitle: "Large formats · Grandes formatos · Grands formats", rows: largeFormatRows, compact: true }]} />

      <SummaryPage />

      <style jsx global>{`
        :root {
          --wine-navy: #10243d;
          --wine-gold: #b88a45;
          --wine-muted: #617287;
          --wine-paper: #f7f3ec;
          --wine-paper-edge: #e9e3d8;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--wine-paper-edge);
        }

        .wine-menu-shell {
          min-height: 100vh;
          background: var(--wine-paper-edge);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 40px 20px;
          color: var(--wine-navy);
        }

        .wine-page {
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
        }

        .cover-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 26mm 22mm 34mm;
        }

        .image-cover-page {
          display: block;
          height: 297mm;
          min-height: 297mm;
          padding: 0;
          background: #061f35;
        }

        .cover-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wine-header {
          text-align: center;
          width: 100%;
        }

        .wine-logo {
          width: 33mm;
          height: 33mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 7mm;
        }

        .brand-title {
          margin: 0;
          color: var(--wine-navy);
          font-size: 24px;
          line-height: 1;
          letter-spacing: 8.5px;
          font-weight: 700;
        }

        .gold-small-line {
          width: 17mm;
          height: 1px;
          background: var(--wine-gold);
          margin: 8.5mm auto 10mm;
        }

        .main-title {
          margin: 0;
          color: var(--wine-gold);
          font-size: 40px;
          line-height: 1;
          letter-spacing: 14px;
          font-weight: 500;
        }

        .main-subtitle {
          margin: 7mm 0 0;
          color: var(--wine-navy);
          font-size: 13px;
          line-height: 1;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .by-glass-page .main-title,
        .bottles-page .main-title {
          font-size: 38px;
          letter-spacing: 13px;
        }

        .by-glass-page .main-subtitle,
        .bottles-page .main-subtitle {
          font-size: 12.4px;
          letter-spacing: 1.1px;
        }

        .top-gold-rule {
          width: 100%;
          height: 1px;
          background: var(--wine-gold);
          margin: 8mm 0 12mm;
        }

        .sections-stack {
          width: 100%;
        }

        .wine-section {
          margin-bottom: 9mm;
        }

        .by-glass-page .wine-section {
          margin-bottom: 12mm;
        }

        .wine-section:last-child {
          margin-bottom: 0;
        }

        .section-heading {
          position: relative;
          width: 100%;
          padding-bottom: 3.1mm;
          margin-bottom: 3.8mm;
        }

        .section-title-wrap {
          text-align: center;
          padding: 0 23mm;
        }

        .section-title {
          margin: 0;
          color: var(--wine-navy);
          font-size: 24px;
          line-height: 1;
          letter-spacing: 8px;
          font-weight: 500;
        }

        .section-subtitle {
          margin: 2mm 0 0;
          color: var(--wine-navy);
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
        }

        .section-volume {
          position: absolute;
          right: 0;
          bottom: 5.2mm;
          width: 12mm;
          text-align: right;
          color: var(--wine-muted);
          font-size: 11px;
          line-height: 1;
          font-weight: 400;
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
          background: var(--wine-navy);
          opacity: 0.95;
        }

        .wine-rows {
          display: flex;
          flex-direction: column;
          gap: 3mm;
        }

        .wine-rows-compact {
          gap: 2.1mm;
        }

        .wine-rows-simple {
          gap: 0;
        }

        .wine-row {
          display: grid;
          grid-template-columns: 31mm 15mm 58mm 1fr 12mm;
          column-gap: 5mm;
          align-items: baseline;
          color: var(--wine-navy);
          font-size: 12.35px;
          line-height: 1.14;
        }

        .wine-row-simple {
          display: grid;
          grid-template-columns: 1fr 12mm;
          column-gap: 5mm;
          align-items: baseline;
          color: var(--wine-navy);
          font-size: 13.2px;
          line-height: 1;
          padding: 0 1mm;
        }

        .wine-rows-compact .wine-row {
          grid-template-columns: 30mm 14mm 57mm 1fr 11mm;
          column-gap: 4.5mm;
          font-size: 11.45px;
          line-height: 1.12;
        }

        .wine-region,
        .wine-grapes {
          font-weight: 500;
        }

        .wine-year {
          font-weight: 500;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .wine-name {
          font-weight: 600;
          line-height: 1.06;
        }

        .wine-unit {
          display: inline-block;
          vertical-align: baseline;
          line-height: 1;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
          transform: translateY(-0.01em);
        }

        .wine-grapes {
          line-height: 1.1;
        }

        .wine-price {
          text-align: right;
          font-weight: 700;
          font-size: 1.08em;
          line-height: 1;
          letter-spacing: 0.01em;
          align-self: baseline;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .country-label {
          text-align: center;
          color: var(--wine-muted);
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.35px;
          margin: 1.4mm 0 0.4mm;
          text-transform: uppercase;
        }

        .wine-rows-compact .country-label {
          font-size: 11px;
          margin: 1mm 0 0.2mm;
        }

        .summary-content {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  padding-top: 5mm;
}

.summary-top-line {
  width: 100%;
  height: 1px;
  background: var(--wine-gold);
  margin: 0 auto;
}

.summary-title {
  margin: 39mm 0 0;
  color: var(--wine-navy);
  font-size: 28px;
  line-height: 1;
  letter-spacing: 10px;
  font-weight: 500;
}

.summary-text {
  max-width: 128mm;
  margin: 22mm auto 0;
  color: var(--wine-navy);
  font-size: 18.5px;
  line-height: 1.55;
  font-weight: 500;
}

.summary-text p {
  margin: 0 0 17mm;
}

.summary-text p:last-child {
  margin-bottom: 0;
}

.summary-notice {
  margin: 18mm auto 0;
  padding: 7mm 10mm;
  border-top: 1px solid var(--wine-gold);
  border-bottom: 1px solid var(--wine-gold);
  max-width: 145mm;
}

.summary-notice p {
  margin: 0 0 6mm;
  color: var(--wine-navy);
  font-size: 12.5px;
  line-height: 1.35;
  letter-spacing: 1.8px;
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
  color: var(--wine-navy);
  font-size: 11.5px;
  line-height: 1.35;
  letter-spacing: 0.35px;
  font-weight: 700;
  text-transform: uppercase;
  font-variant-numeric: lining-nums tabular-nums;
  font-feature-settings: "lnum" 1, "tnum" 1;
}

.summary-prices p:last-child {
  margin-bottom: 0;
  color: var(--wine-muted);
  font-size: 10.2px;
  line-height: 1.35;
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
          color: var(--wine-gold);
        }

        .ornament-line {
          width: 34mm;
          height: 1px;
          background: var(--wine-gold);
          display: block;
        }

        .ornament-diamond {
          color: var(--wine-gold);
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
            background: var(--wine-paper-edge);
          }

          .wine-menu-shell {
            width: 100%;
            max-width: 100%;
            padding: 28px 10px 48px;
            gap: 34px;
            overflow-x: hidden;
          }

          .wine-page {
            width: 94vw;
            height: 132.914vw;
            min-height: 0;
            max-height: 132.914vw;
            padding: 8.06vw 4.48vw 6.71vw;
            box-shadow: 0 10px 34px rgba(0, 0, 0, 0.14);
          }

          .image-cover-page {
            height: 132.914vw;
            min-height: 0;
            padding: 0;
          }

          .wine-logo {
            width: 14.77vw;
            height: 14.77vw;
            margin-bottom: 3.13vw;
          }

          .brand-title {
            font-size: 2.85vw;
            letter-spacing: 1.01vw;
          }

          .gold-small-line {
            width: 7.61vw;
            margin: 3.8vw auto 4.48vw;
          }

          .main-title {
            font-size: 4.75vw;
            letter-spacing: 1.66vw;
          }

          .main-subtitle {
            margin-top: 3.13vw;
            font-size: 1.54vw;
            letter-spacing: 0.12vw;
          }

          .by-glass-page .main-title,
          .bottles-page .main-title {
            font-size: 4.5vw;
            letter-spacing: 1.54vw;
          }

          .by-glass-page .main-subtitle,
          .bottles-page .main-subtitle {
            font-size: 1.47vw;
            letter-spacing: 0.13vw;
          }

          .top-gold-rule {
            margin: 3.58vw 0 5.37vw;
          }

          .wine-section {
            margin-bottom: 4.03vw;
          }

          .by-glass-page .wine-section {
            margin-bottom: 5.37vw;
          }

          .section-heading {
            padding-bottom: 1.39vw;
            margin-bottom: 1.7vw;
          }

          .section-title-wrap {
            padding: 0 10.3vw;
          }

          .section-title {
            font-size: 2.85vw;
            letter-spacing: 0.95vw;
          }

          .section-subtitle {
            margin-top: 0.9vw;
            font-size: 1.42vw;
          }

          .section-volume {
            right: 0;
            bottom: 2.33vw;
            width: 5.37vw;
            text-align: right;
            font-size: 1.3vw;
          }

          .wine-rows {
            gap: 1.34vw;
          }

          .wine-rows-compact {
            gap: 0.94vw;
          }

          .wine-row {
            grid-template-columns: 13.88vw 6.71vw 25.95vw 1fr 5.37vw;
            column-gap: 2.24vw;
            font-size: 1.47vw;
            line-height: 1.14;
          }

          .wine-row-simple {
            grid-template-columns: 1fr 5.37vw;
            column-gap: 2.24vw;
            font-size: 1.57vw;
            padding: 0 0.45vw;
          }

          .wine-rows-compact .wine-row {
            grid-template-columns: 13.43vw 6.27vw 25.5vw 1fr 4.92vw;
            column-gap: 2.01vw;
            font-size: 1.36vw;
            line-height: 1.12;
          }

          .country-label {
            font-size: 1.42vw;
            margin: 0.63vw 0 0.18vw;
          }

          .wine-rows-compact .country-label {
            font-size: 1.3vw;
            margin: 0.45vw 0 0.09vw;
          }

          .summary-content {
  padding-top: 2.24vw;
}

.summary-title {
  margin-top: 17.46vw;
  font-size: 3.13vw;
  letter-spacing: 1.12vw;
}

.summary-text {
  max-width: 57.32vw;
  margin-top: 9.85vw;
  font-size: 2.07vw;
}

.summary-text p {
  margin-bottom: 7.61vw;
}

.summary-notice {
  margin-top: 8.06vw;
  padding: 3.13vw 4.48vw;
  max-width: 64.94vw;
}

.summary-notice p {
  margin-bottom: 2.69vw;
  font-size: 1.48vw;
  letter-spacing: 0.21vw;
}

.summary-prices {
  max-width: 70.75vw;
  margin-top: 3.13vw;
}

.summary-prices p {
  margin-bottom: 1.03vw;
  font-size: 1.36vw;
}

.summary-prices p:last-child {
  font-size: 1.2vw;
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
            background: var(--wine-paper);
            overflow: visible;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .wine-menu-shell {
            display: block;
            width: 210mm;
            min-height: auto;
            padding: 0;
            margin: 0;
            gap: 0;
            background: var(--wine-paper);
            overflow: visible;
          }

          .wine-page {
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

          .image-cover-page {
            padding: 0;
          }

          .wine-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }
        }
      `}</style>
    </main>
  )
}