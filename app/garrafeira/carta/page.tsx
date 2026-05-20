"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
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

type IndexEntry = {
  href: string
  label: string
  detail: string
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
  { region: "Bairrada", year: "NV", name: "Silk & Spice White", grapes: "Bical, Arinto, Chardonnay", price: "21" },
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

type MenuLanguage = "pt" | "en" | "es" | "fr" | "de" | "it" | "ru" | "zh" | "ar" | "hi"

const supportedLanguages: MenuLanguage[] = ["pt", "en", "es", "fr", "de", "it", "ru", "zh", "ar", "hi"]

function normalizeLanguage(language?: string): MenuLanguage {
  const code = (language || "pt").toLowerCase().split("-")[0] as MenuLanguage
  return supportedLanguages.includes(code) ? code : "pt"
}

const wineCopy: Record<
  MenuLanguage,
  {
    backLabel: string
    indexTitle: string
    indexSubtitle: string
    bottlesTitle: string
    bottlesSubtitle: string
    wineByGlassTitle: string
    wineByGlassSubtitle: string
    summaryTitle: string
    summaryParagraphs: string[]
    summaryNotice: string[]
    corkageFee: string
    taxNote: string
    taxTranslations: string
    indexEntries: IndexEntry[]
  }
> = {
  pt: {
    backLabel: "Voltar",
    indexTitle: "Índice",
    indexSubtitle: "Carta de Vinhos",
    bottlesTitle: "GARRAFAS",
    bottlesSubtitle: "BOTTLES · BOTELLAS · BOUTEILLE · FLASCHE",
    wineByGlassTitle: "VINHO A COPO",
    wineByGlassSubtitle: "WINE BY THE GLASS · VINO A COPA · VIN AU VERRE · WEIN IM GLAS",
    summaryTitle: "A NOSSA GARRAFEIRA",
    summaryParagraphs: [
      "A seleção de vinhos do Senhor Peixe foi pensada para acompanhar a cozinha portuguesa, o peixe fresco e o marisco, reunindo referências nacionais e internacionais, vinhos a copo, garrafas especiais e grandes formatos.",
      "Para harmonizações ou sugestões, a nossa equipa terá todo o gosto em aconselhar.",
    ],
    summaryNotice: [
      "A NOSSA OFERTA DE VINHOS É ATUALIZADA COM FREQUÊNCIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "TAXA DE ROLHA 15",
    taxNote: "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
    taxTranslations:
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Vinho a Copo", detail: "" },
      { href: "#champagne-espumante", label: "Champagne", detail: "Champagne · Rosé · Espumante" },
      { href: "#meias-garrafas", label: "Meias Garrafas", detail: "Rosé · Branco · Tinto" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Branco", detail: "" },
      { href: "#tinto", label: "Tinto", detail: "" },
      { href: "#vinhos-excecao", label: "Vinhos de Exceção", detail: "Seleção especial" },
      { href: "#grandes-formatos", label: "Grandes Formatos", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  en: {
    backLabel: "Back",
    indexTitle: "Index",
    indexSubtitle: "Wine List",
    bottlesTitle: "BOTTLES",
    bottlesSubtitle: "Bottles",
    wineByGlassTitle: "WINE BY THE GLASS",
    wineByGlassSubtitle: "Wine by the glass",
    summaryTitle: "OUR WINE CELLAR",
    summaryParagraphs: [
      "Senhor Peixe’s wine selection was designed to accompany Portuguese cuisine, fresh fish and seafood, bringing together national and international references, wines by the glass, special bottles and large formats.",
      "For pairings or suggestions, our team will be delighted to advise.",
    ],
    summaryNotice: [
      "OUR WINE LIST IS UPDATED FREQUENTLY. THE ONLINE LIST MAY NOT BE THE CURRENT VERSION.",
      "A NOSSA OFERTA DE VINHOS É ATUALIZADA COM FREQUÊNCIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.",
    ],
    corkageFee: "CORKAGE FEE 15",
    taxNote: "PRICE IN €, INCLUDES VAT AT THE CURRENT LEGAL RATE",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Wine by the Glass", detail: "" },
      { href: "#champagne-espumante", label: "Champagne", detail: "Champagne · Rosé · Sparkling" },
      { href: "#meias-garrafas", label: "Half Bottles", detail: "Rosé · White · Red" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "White", detail: "" },
      { href: "#tinto", label: "Red", detail: "" },
      { href: "#vinhos-excecao", label: "Exceptional Wines", detail: "Special selection" },
      { href: "#grandes-formatos", label: "Large Formats", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  es: {
    backLabel: "Volver",
    indexTitle: "Índice",
    indexSubtitle: "Carta de Vinos",
    bottlesTitle: "BOTELLAS",
    bottlesSubtitle: "Botellas",
    wineByGlassTitle: "VINO A COPA",
    wineByGlassSubtitle: "Vino a copa",
    summaryTitle: "NUESTRA BODEGA",
    summaryParagraphs: [
      "La selección de vinos de Senhor Peixe fue pensada para acompañar la cocina portuguesa, el pescado fresco y el marisco, reuniendo referencias nacionales e internacionales, vinos por copa, botellas especiales y grandes formatos.",
      "Para maridajes o sugerencias, nuestro equipo estará encantado de aconsejarle.",
    ],
    summaryNotice: [
      "NUESTRA OFERTA DE VINOS SE ACTUALIZA CON FRECUENCIA. LA CARTA ONLINE PUEDE NO SER LA VERSIÓN VIGENTE.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "DESCORCHE 15",
    taxNote: "PRECIO EN €, INCLUYE IVA AL TIPO LEGAL VIGENTE",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Vino a Copa", detail: "" },
      { href: "#champagne-espumante", label: "Champagne", detail: "Champagne · Rosé · Espumoso" },
      { href: "#meias-garrafas", label: "Medias Botellas", detail: "Rosé · Blanco · Tinto" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Blanco", detail: "" },
      { href: "#tinto", label: "Tinto", detail: "" },
      { href: "#vinhos-excecao", label: "Vinos de Excepción", detail: "Selección especial" },
      { href: "#grandes-formatos", label: "Grandes Formatos", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  fr: {
    backLabel: "Retour",
    indexTitle: "Index",
    indexSubtitle: "Carte des Vins",
    bottlesTitle: "BOUTEILLES",
    bottlesSubtitle: "Bouteilles",
    wineByGlassTitle: "VIN AU VERRE",
    wineByGlassSubtitle: "Vin au verre",
    summaryTitle: "NOTRE CAVE",
    summaryParagraphs: [
      "La sélection de vins du Senhor Peixe a été pensée pour accompagner la cuisine portugaise, le poisson frais et les fruits de mer, en réunissant des références nationales et internationales, des vins au verre, des bouteilles spéciales et de grands formats.",
      "Pour les accords ou les suggestions, notre équipe se fera un plaisir de vous conseiller.",
    ],
    summaryNotice: [
      "NOTRE SÉLECTION DE VINS EST RÉGULIÈREMENT MISE À JOUR. LA CARTE EN LIGNE PEUT NE PAS ÊTRE LA VERSION EN VIGUEUR.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "DROIT DE BOUCHON 15",
    taxNote: "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Vin au Verre", detail: "" },
      { href: "#champagne-espumante", label: "Champagne", detail: "Champagne · Rosé · Mousseux" },
      { href: "#meias-garrafas", label: "Demi-Bouteilles", detail: "Rosé · Blanc · Rouge" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Blanc", detail: "" },
      { href: "#tinto", label: "Rouge", detail: "" },
      { href: "#vinhos-excecao", label: "Vins d’Exception", detail: "Sélection spéciale" },
      { href: "#grandes-formatos", label: "Grands Formats", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  de: {
    backLabel: "Zurück",
    indexTitle: "Index",
    indexSubtitle: "Weinkarte",
    bottlesTitle: "FLASCHEN",
    bottlesSubtitle: "Flaschen",
    wineByGlassTitle: "WEIN IM GLAS",
    wineByGlassSubtitle: "Wein im Glas",
    summaryTitle: "UNSER WEINKELLER",
    summaryParagraphs: [
      "Die Weinauswahl des Senhor Peixe wurde zusammengestellt, um die portugiesische Küche, frischen Fisch und Meeresfrüchte zu begleiten, mit nationalen und internationalen Referenzen, Weinen im Glas, besonderen Flaschen und großen Formaten.",
      "Für Empfehlungen und passende Begleitungen berät Sie unser Team sehr gerne.",
    ],
    summaryNotice: [
      "UNSERE WEINAUSWAHL WIRD REGELMÄSSIG AKTUALISIERT. DIE ONLINE-KARTE IST MÖGLICHERWEISE NICHT DIE AKTUELLE VERSION.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "KORKGELD 15",
    taxNote: "PREIS IN €, INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Wein im Glas", detail: "" },
      { href: "#champagne-espumante", label: "Champagner", detail: "Champagne · Rosé · Sekt" },
      { href: "#meias-garrafas", label: "Halbe Flaschen", detail: "Rosé · Weiss · Rot" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Weiss", detail: "" },
      { href: "#tinto", label: "Rot", detail: "" },
      { href: "#vinhos-excecao", label: "Besondere Weine", detail: "Spezialauswahl" },
      { href: "#grandes-formatos", label: "Großformate", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  it: {
    backLabel: "Indietro",
    indexTitle: "Indice",
    indexSubtitle: "Carta dei Vini",
    bottlesTitle: "BOTTIGLIE",
    bottlesSubtitle: "Bottiglie",
    wineByGlassTitle: "VINO AL CALICE",
    wineByGlassSubtitle: "Vino al calice",
    summaryTitle: "LA NOSTRA CANTINA",
    summaryParagraphs: [
      "La selezione di vini di Senhor Peixe è stata pensata per accompagnare la cucina portoghese, il pesce fresco e i frutti di mare, riunendo etichette nazionali e internazionali, vini al calice, bottiglie speciali e grandi formati.",
      "Per abbinamenti o suggerimenti, il nostro team sarà lieto di consigliarvi.",
    ],
    summaryNotice: [
      "LA NOSTRA OFFERTA DI VINI VIENE AGGIORNATA FREQUENTEMENTE. LA CARTA ONLINE POTREBBE NON ESSERE LA VERSIONE IN VIGORE.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "DIRITTO DI TAPPO 15",
    taxNote: "PREZZO IN €, IVA INCLUSA ALL’ALIQUOTA LEGALE IN VIGORE",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Vino al Calice", detail: "" },
      { href: "#champagne-espumante", label: "Champagne", detail: "Champagne · Rosé · Spumante" },
      { href: "#meias-garrafas", label: "Mezze Bottiglie", detail: "Rosé · Bianco · Rosso" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Bianco", detail: "" },
      { href: "#tinto", label: "Rosso", detail: "" },
      { href: "#vinhos-excecao", label: "Vini d’Eccezione", detail: "Selezione speciale" },
      { href: "#grandes-formatos", label: "Grandi Formati", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  ru: {
    backLabel: "Назад",
    indexTitle: "Указатель",
    indexSubtitle: "Винная карта",
    bottlesTitle: "БУТЫЛКИ",
    bottlesSubtitle: "Бутылки",
    wineByGlassTitle: "ВИНО ПО БОКАЛАМ",
    wineByGlassSubtitle: "Вино по бокалам",
    summaryTitle: "НАШ ВИННЫЙ ПОГРЕБ",
    summaryParagraphs: [
      "Винная подборка Senhor Peixe создана для сопровождения португальской кухни, свежей рыбы и морепродуктов, объединяя национальные и международные позиции, вина по бокалам, особые бутылки и большие форматы.",
      "Наша команда с удовольствием поможет с выбором и сочетаниями.",
    ],
    summaryNotice: [
      "НАША ВИННАЯ КАРТА ЧАСТО ОБНОВЛЯЕТСЯ. ОНЛАЙН-ВЕРСИЯ МОЖЕТ НЕ СООТВЕТСТВОВАТЬ АКТУАЛЬНОЙ.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "ПРОБКОВЫЙ СБОР 15",
    taxNote: "ЦЕНА В €, ВКЛЮЧАЕТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "Вино по Бокалам", detail: "" },
      { href: "#champagne-espumante", label: "Шампанское", detail: "Champagne · Rosé · Игристое" },
      { href: "#meias-garrafas", label: "Полубутылки", detail: "Rosé · Белое · Красное" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "Белое", detail: "" },
      { href: "#tinto", label: "Красное", detail: "" },
      { href: "#vinhos-excecao", label: "Особые Вина", detail: "Специальная подборка" },
      { href: "#grandes-formatos", label: "Большие Форматы", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  zh: {
    backLabel: "返回",
    indexTitle: "目录",
    indexSubtitle: "葡萄酒单",
    bottlesTitle: "瓶装酒",
    bottlesSubtitle: "瓶装酒",
    wineByGlassTitle: "杯装酒",
    wineByGlassSubtitle: "杯装酒",
    summaryTitle: "我们的酒窖",
    summaryParagraphs: [
      "Senhor Peixe 的葡萄酒精选旨在搭配葡萄牙料理、鲜鱼和海鲜，汇集本国与国际酒款、杯装酒、特别酒瓶以及大瓶装。",
      "如需配餐建议或推荐，我们的团队将很乐意为您服务。",
    ],
    summaryNotice: [
      "我们的葡萄酒选择会定期更新。线上酒单可能并非当前版本。",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "开瓶费 15",
    taxNote: "价格为欧元，已包含现行法定税率的增值税",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "杯装酒", detail: "" },
      { href: "#champagne-espumante", label: "香槟", detail: "Champagne · Rosé · 起泡酒" },
      { href: "#meias-garrafas", label: "半瓶装", detail: "Rosé · 白葡萄酒 · 红葡萄酒" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "白葡萄酒", detail: "" },
      { href: "#tinto", label: "红葡萄酒", detail: "" },
      { href: "#vinhos-excecao", label: "臻选佳酿", detail: "特别精选" },
      { href: "#grandes-formatos", label: "大瓶装", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  ar: {
    backLabel: "رجوع",
    indexTitle: "الفهرس",
    indexSubtitle: "قائمة النبيذ",
    bottlesTitle: "زجاجات",
    bottlesSubtitle: "زجاجات",
    wineByGlassTitle: "النبيذ بالكأس",
    wineByGlassSubtitle: "النبيذ بالكأس",
    summaryTitle: "قبو النبيذ لدينا",
    summaryParagraphs: [
      "تم اختيار قائمة النبيذ في Senhor Peixe لترافق المطبخ البرتغالي والأسماك الطازجة والمأكولات البحرية، مع مراجع وطنية ودولية ونبيذ بالكأس وزجاجات خاصة وأحجام كبيرة.",
      "يسعد فريقنا بتقديم الاقتراحات المناسبة والمساعدة في الاختيار.",
    ],
    summaryNotice: [
      "يتم تحديث قائمة النبيذ لدينا بشكل متكرر. قد لا تكون القائمة الإلكترونية هي النسخة الحالية.",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "رسوم فتح الزجاجة 15",
    taxNote: "السعر باليورو، شامل ضريبة القيمة المضافة حسب المعدل القانوني الحالي",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "النبيذ بالكأس", detail: "" },
      { href: "#champagne-espumante", label: "شمبانيا", detail: "Champagne · Rosé · نبيذ فوار" },
      { href: "#meias-garrafas", label: "نصف زجاجة", detail: "Rosé · أبيض · أحمر" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "أبيض", detail: "" },
      { href: "#tinto", label: "أحمر", detail: "" },
      { href: "#vinhos-excecao", label: "نبيذ استثنائي", detail: "اختيار خاص" },
      { href: "#grandes-formatos", label: "أحجام كبيرة", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
  hi: {
    backLabel: "वापस",
    indexTitle: "सूची",
    indexSubtitle: "वाइन सूची",
    bottlesTitle: "बोतलें",
    bottlesSubtitle: "बोतलें",
    wineByGlassTitle: "ग्लास वाइन",
    wineByGlassSubtitle: "ग्लास वाइन",
    summaryTitle: "हमारा वाइन सेलर",
    summaryParagraphs: [
      "Senhor Peixe की वाइन चयन पुर्तगाली भोजन, ताज़ी मछली और समुद्री भोजन के साथ मेल खाने के लिए तैयार की गई है, जिसमें राष्ट्रीय और अंतरराष्ट्रीय संदर्भ, ग्लास वाइन, विशेष बोतलें और बड़े प्रारूप शामिल हैं।",
      "पेयरिंग या सुझावों के लिए हमारी टीम खुशी से सलाह देगी।",
    ],
    summaryNotice: [
      "हमारी वाइन सूची नियमित रूप से अपडेट की जाती है। ऑनलाइन सूची वर्तमान संस्करण न भी हो सकती है।",
      "OUR WINE LIST OFFER IS OFTEN UPDATED. THIS ONLINE LIST MIGHT NOT BE THE CURRENT VERSION.",
    ],
    corkageFee: "कॉर्केज शुल्क 15",
    taxNote: "कीमत € में है, मौजूदा कानूनी दर पर VAT शामिल है",
    taxTranslations:
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    indexEntries: [
      { href: "#vinho-a-copo", label: "ग्लास वाइन", detail: "" },
      { href: "#champagne-espumante", label: "शैम्पेन", detail: "Champagne · Rosé · स्पार्कलिंग" },
      { href: "#meias-garrafas", label: "आधी बोतलें", detail: "Rosé · सफेद · लाल" },
      { href: "#rose", label: "Rosé", detail: "" },
      { href: "#branco", label: "सफेद", detail: "" },
      { href: "#tinto", label: "लाल", detail: "" },
      { href: "#vinhos-excecao", label: "विशेष वाइन", detail: "विशेष चयन" },
      { href: "#grandes-formatos", label: "बड़े प्रारूप", detail: "Magnum · Double Magnum · Jeroboam" },
    ],
  },
}

const sectionTitleTranslations: Record<MenuLanguage, Record<string, string>> = {
  pt: {},
  en: {
    "ESPUMANTE": "SPARKLING",
    "BRANCO": "WHITE",
    "TINTO": "RED",
    "VINHOS DE EXCEÇÃO": "EXCEPTIONAL WINES",
    "GRANDES FORMATOS": "LARGE FORMATS",
  },
  es: {
    "ESPUMANTE": "ESPUMOSO",
    "BRANCO": "BLANCO",
    "TINTO": "TINTO",
    "VINHOS DE EXCEÇÃO": "VINOS DE EXCEPCIÓN",
    "GRANDES FORMATOS": "GRANDES FORMATOS",
  },
  fr: {
    "ESPUMANTE": "MOUSSEUX",
    "BRANCO": "BLANC",
    "TINTO": "ROUGE",
    "VINHOS DE EXCEÇÃO": "VINS D’EXCEPTION",
    "GRANDES FORMATOS": "GRANDS FORMATS",
  },
  de: {
    "ESPUMANTE": "SEKT",
    "BRANCO": "WEISS",
    "TINTO": "ROT",
    "VINHOS DE EXCEÇÃO": "BESONDERE WEINE",
    "GRANDES FORMATOS": "GROSSFORMATE",
  },
  it: {
    "ESPUMANTE": "SPUMANTE",
    "BRANCO": "BIANCO",
    "TINTO": "ROSSO",
    "VINHOS DE EXCEÇÃO": "VINI D’ECCEZIONE",
    "GRANDES FORMATOS": "GRANDI FORMATI",
  },
  ru: {
    "ESPUMANTE": "ИГРИСТОЕ",
    "BRANCO": "БЕЛОЕ",
    "TINTO": "КРАСНОЕ",
    "VINHOS DE EXCEÇÃO": "ОСОБЫЕ ВИНА",
    "GRANDES FORMATOS": "БОЛЬШИЕ ФОРМАТЫ",
  },
  zh: {
    "ESPUMANTE": "起泡酒",
    "BRANCO": "白葡萄酒",
    "TINTO": "红葡萄酒",
    "VINHOS DE EXCEÇÃO": "臻选佳酿",
    "GRANDES FORMATOS": "大瓶装",
  },
  ar: {
    "ESPUMANTE": "نبيذ فوار",
    "BRANCO": "أبيض",
    "TINTO": "أحمر",
    "VINHOS DE EXCEÇÃO": "نبيذ استثنائي",
    "GRANDES FORMATOS": "أحجام كبيرة",
  },
  hi: {
    "ESPUMANTE": "स्पार्कलिंग",
    "BRANCO": "सफेद",
    "TINTO": "लाल",
    "VINHOS DE EXCEÇÃO": "विशेष वाइन",
    "GRANDES FORMATOS": "बड़े प्रारूप",
  },
}

const sectionSubtitleTranslations: Record<MenuLanguage, Record<string, string>> = {
  pt: {},
  en: {
    "Champagne · Champaña · Champagne · Champagner": "Champagne",
    "Rosé Champagne · Champaña Rosé": "Rosé Champagne",
    "Sparkling · Espumoso · Mousseux · Sekt": "Sparkling",
    "Rosé · Rosado · Rosé": "Rosé",
    "White · Blancos · Blancs · Weiss": "White",
    "Red · Tintos · Rouges · Rotwein": "Red",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Exceptional wines",
    "Large formats · Grandes formatos · Grands formats": "Large formats",
  },
  es: {
    "Champagne · Champaña · Champagne · Champagner": "Champaña",
    "Rosé Champagne · Champaña Rosé": "Champaña Rosé",
    "Sparkling · Espumoso · Mousseux · Sekt": "Espumoso",
    "Rosé · Rosado · Rosé": "Rosado",
    "White · Blancos · Blancs · Weiss": "Blanco",
    "Red · Tintos · Rouges · Rotwein": "Tinto",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Vinos de excepción",
    "Large formats · Grandes formatos · Grands formats": "Grandes formatos",
  },
  fr: {
    "Champagne · Champaña · Champagne · Champagner": "Champagne",
    "Rosé Champagne · Champaña Rosé": "Champagne Rosé",
    "Sparkling · Espumoso · Mousseux · Sekt": "Mousseux",
    "Rosé · Rosado · Rosé": "Rosé",
    "White · Blancos · Blancs · Weiss": "Blanc",
    "Red · Tintos · Rouges · Rotwein": "Rouge",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Vins d’exception",
    "Large formats · Grandes formatos · Grands formats": "Grands formats",
  },
  de: {
    "Champagne · Champaña · Champagne · Champagner": "Champagner",
    "Rosé Champagne · Champaña Rosé": "Rosé Champagner",
    "Sparkling · Espumoso · Mousseux · Sekt": "Sekt",
    "Rosé · Rosado · Rosé": "Rosé",
    "White · Blancos · Blancs · Weiss": "Weiss",
    "Red · Tintos · Rouges · Rotwein": "Rot",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Besondere Weine",
    "Large formats · Grandes formatos · Grands formats": "Großformate",
  },
  it: {
    "Champagne · Champaña · Champagne · Champagner": "Champagne",
    "Rosé Champagne · Champaña Rosé": "Champagne Rosé",
    "Sparkling · Espumoso · Mousseux · Sekt": "Spumante",
    "Rosé · Rosado · Rosé": "Rosé",
    "White · Blancos · Blancs · Weiss": "Bianco",
    "Red · Tintos · Rouges · Rotwein": "Rosso",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Vini d’eccezione",
    "Large formats · Grandes formatos · Grands formats": "Grandi formati",
  },
  ru: {
    "Champagne · Champaña · Champagne · Champagner": "Шампанское",
    "Rosé Champagne · Champaña Rosé": "Розе Шампань",
    "Sparkling · Espumoso · Mousseux · Sekt": "Игристое",
    "Rosé · Rosado · Rosé": "Розе",
    "White · Blancos · Blancs · Weiss": "Белое",
    "Red · Tintos · Rouges · Rotwein": "Красное",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "Особые вина",
    "Large formats · Grandes formatos · Grands formats": "Большие форматы",
  },
  zh: {
    "Champagne · Champaña · Champagne · Champagner": "香槟",
    "Rosé Champagne · Champaña Rosé": "桃红香槟",
    "Sparkling · Espumoso · Mousseux · Sekt": "起泡酒",
    "Rosé · Rosado · Rosé": "桃红",
    "White · Blancos · Blancs · Weiss": "白葡萄酒",
    "Red · Tintos · Rouges · Rotwein": "红葡萄酒",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "臻选佳酿",
    "Large formats · Grandes formatos · Grands formats": "大瓶装",
  },
  ar: {
    "Champagne · Champaña · Champagne · Champagner": "شمبانيا",
    "Rosé Champagne · Champaña Rosé": "شمبانيا روزيه",
    "Sparkling · Espumoso · Mousseux · Sekt": "نبيذ فوار",
    "Rosé · Rosado · Rosé": "روزيه",
    "White · Blancos · Blancs · Weiss": "أبيض",
    "Red · Tintos · Rouges · Rotwein": "أحمر",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "نبيذ استثنائي",
    "Large formats · Grandes formatos · Grands formats": "أحجام كبيرة",
  },
  hi: {
    "Champagne · Champaña · Champagne · Champagner": "शैम्पेन",
    "Rosé Champagne · Champaña Rosé": "रोज़े शैम्पेन",
    "Sparkling · Espumoso · Mousseux · Sekt": "स्पार्कलिंग",
    "Rosé · Rosado · Rosé": "रोज़े",
    "White · Blancos · Blancs · Weiss": "सफेद",
    "Red · Tintos · Rouges · Rotwein": "लाल",
    "Exceptional wines · Vinos de excepción · Vins d’exception": "विशेष वाइन",
    "Large formats · Grandes formatos · Grands formats": "बड़े प्रारूप",
  },
}

function getWineCopy(language?: string) {
  return wineCopy[normalizeLanguage(language)]
}

function translateSectionTitle(title: string, language?: string) {
  const normalizedLanguage = normalizeLanguage(language)
  return sectionTitleTranslations[normalizedLanguage][title] ?? title
}

function translateSectionSubtitle(subtitle: string, language?: string) {
  const normalizedLanguage = normalizeLanguage(language)
  return sectionSubtitleTranslations[normalizedLanguage][subtitle] ?? subtitle
}


function Page({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`wine-page ${className}`}>
      {children}
    </section>
  )
}

function cleanWineName(name?: string) {
  if (!name) return ""

  return name
    .replace(/\bTinto\b/g, "")
    .replace(/\bBranco\b/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+·/g, " ·")
    .trim()
}

function formatWineName(name?: string) {
  const cleanedName = cleanWineName(name)
  if (!cleanedName) return null

  return cleanedName.split(/(\d+(?:-\d+)?(?:,\d+)?L?)/g).map((part, index) => {
    if (/^\d+(?:-\d+)?(?:,\d+)?L?$/.test(part)) {
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

function IndexPage() {
  const { language } = useLanguage()
  const copy = getWineCopy(language)

  return (
    <Page className="index-page" id="indice">
      <Header mainTitle={copy.indexTitle} mainSubtitle={copy.indexSubtitle} />

      <nav className="index-grid" aria-label={copy.indexSubtitle}>
        {copy.indexEntries.map((entry, index) => (
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
  const { language } = useLanguage()
  const translatedTitle = translateSectionTitle(title, language)
  const translatedSubtitle = translateSectionSubtitle(subtitle, language)

  return (
    <div className="section-heading">
      <div className="section-title-wrap">
        <h3 className={`section-title ${cinzel.className}`}>{translatedTitle}</h3>
        <p className="section-subtitle">{translatedSubtitle}</p>
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

function WineListPage({
  sections,
  className = "",
  id,
}: {
  sections: WineSection[]
  className?: string
  id?: string
}) {
  const { language } = useLanguage()
  const copy = getWineCopy(language)

  return (
    <Page id={id} className={`list-page bottles-page ${className}`}>
      <Header mainTitle={copy.bottlesTitle} mainSubtitle={copy.bottlesSubtitle} />
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
  const { language } = useLanguage()
  const copy = getWineCopy(language)

  return (
    <Page className="list-page by-glass-page" id="vinho-a-copo">
      <Header mainTitle={copy.wineByGlassTitle} mainSubtitle={copy.wineByGlassSubtitle} />
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
  const { language } = useLanguage()
  const copy = getWineCopy(language)

  return (
    <Page className="summary-page" id="garrafeira">
      <section className="summary-content">
        <h2 className={`summary-title ${cinzel.className}`}>{copy.summaryTitle}</h2>

        <div className="summary-title-line" />

        <div className="summary-text">
          {copy.summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={`${cinzel.className} summary-notice`}>
          {copy.summaryNotice.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>

        <div className={`${cinzel.className} corkage-fee`}>{copy.corkageFee}</div>

        <div className={`${cinzel.className} summary-prices`}>
          <p>{copy.taxNote}</p>
          <p>{copy.taxTranslations}</p>
        </div>
      </section>

      <FooterOrnament />
    </Page>
  )
}

export default function CartaVinhosPage() {
  const { language } = useLanguage()
  const normalizedLanguage = normalizeLanguage(language)
  const copy = getWineCopy(language)

  return (
    <main lang={normalizedLanguage} className={`wine-menu-shell wine-lang-${normalizedLanguage} ${cormorant.className}`}>
      <Link href="/garrafeira" className="sp-back-link">
        {copy.backLabel}
      </Link>

      <CoverPage />

      <IndexPage />

      <WineByGlassPage />

      <WineListPage
        id="champagne-espumante"
        sections={[
          { title: "CHAMPAGNE", subtitle: "Champagne · Champaña · Champagne · Champagner", volume: "75cl", rows: champagneRows, compact: true },
          { title: "CHAMPAGNE ROSÉ", subtitle: "Rosé Champagne · Champaña Rosé", volume: "75cl", rows: champagneRoseRows, compact: true },
          { title: "ESPUMANTE", subtitle: "Sparkling · Espumoso · Mousseux · Sekt", volume: "75cl", rows: sparklingRows, compact: true },
        ]}
      />

<WineListPage
  id="meias-garrafas"
  sections={[
    { title: "ROSÉ", subtitle: "Rosé · Rosado · Rosé", volume: "37,5cl", rows: halfRoseRows },
    { title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "37,5cl", rows: halfWhiteRows },
    { title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "37,5cl", rows: halfRedRows },
  ]}
/><WineListPage
  id="rose"
  sections={[
    { title: "ROSÉ", subtitle: "Rosé · Rosado · Rosé", volume: "75cl", rows: roseRows },
  ]}
/>

      <WineListPage id="branco" sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage1Rows, compact: true }]} />
      <WineListPage sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage2Rows, compact: true }]} />
      <WineListPage sections={[{ title: "BRANCO", subtitle: "White · Blancos · Blancs · Weiss", volume: "75cl", rows: whitePage3Rows, compact: true }]} />
      <WineListPage id="tinto" sections={[{ title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "75cl", rows: redPage1Rows, compact: true }]} />
      <WineListPage sections={[{ title: "TINTO", subtitle: "Red · Tintos · Rouges · Rotwein", volume: "75cl", rows: redPage2Rows, compact: true }]} />
      <WineListPage id="vinhos-excecao" sections={[{ title: "VINHOS DE EXCEÇÃO", subtitle: "Exceptional wines · Vinos de excepción · Vins d’exception", volume: "75cl", rows: exceptionalRows, compact: true }]} />
      <WineListPage id="grandes-formatos" sections={[{ title: "GRANDES FORMATOS", subtitle: "Large formats · Grandes formatos · Grands formats", rows: largeFormatRows, compact: true }]} />

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

        .index-page {
          padding: 12mm 24mm 15mm;
        }

        .index-page .wine-logo {
          width: 25mm;
          height: 25mm;
          margin-bottom: 5.2mm;
        }

        .index-page .brand-title {
          font-size: 22px;
          letter-spacing: 7.2px;
        }

        .index-page .gold-small-line {
          width: 17mm;
          margin: 6.2mm auto 7.4mm;
        }

        .index-page .main-title {
          font-size: 46px;
          letter-spacing: 12px;
        }

        .index-page .main-subtitle {
          margin-top: 4.2mm;
          font-size: 12px;
          letter-spacing: 1.35px;
        }

        .index-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 82%;
          margin: 12mm auto 0;
        }

        .index-card {
          min-height: 18.6mm;
          border: 0;
          border-bottom: 1px solid rgba(184, 138, 69, 0.52);
          background: transparent;
          color: var(--wine-navy);
          text-decoration: none;
          display: grid;
          grid-template-columns: 18mm 1fr;
          grid-template-rows: auto auto;
          column-gap: 5mm;
          align-items: center;
          padding: 3.4mm 0 4mm;
          transition:
            border-color 180ms ease,
            transform 180ms ease;
        }

        .index-card:hover {
          border-color: var(--wine-gold);
          transform: translateX(1.5mm);
        }

        .index-number {
          grid-row: 1 / span 2;
          align-self: center;
          color: var(--wine-gold);
          font-size: 21px;
          line-height: 1;
          letter-spacing: 0.08em;
          font-weight: 500;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .index-label {
          color: var(--wine-navy);
          font-size: 21px;
          line-height: 1;
          letter-spacing: 3.4px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .index-detail {
          margin-top: 1.1mm;
          color: #344b67;
          font-size: 12.4px;
          line-height: 1.14;
          font-weight: 600;
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

       .by-glass-page .section-subtitle,
.bottles-page .section-subtitle {
  color: var(--wine-gold);
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
  display: none;
}

.summary-title {
  margin: 39mm 0 0;
  color: var(--wine-navy);
  font-size: 28px;
  line-height: 1;
  letter-spacing: 10px;
  font-weight: 500;
}

.summary-title-line {
  width: 100%;
  height: 1px;
  background: var(--wine-gold);
  margin: 12mm auto 0;
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

        .corkage-fee {
          margin: 8mm auto 0;
          color: var(--wine-navy);
          font-size: 11.5px;
          line-height: 1.35;
          letter-spacing: 0.35px;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
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

  .sp-back-link {
    width: min(94vw, 210mm);
    margin: 0 auto -16px;
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

  .index-page {
    padding: 5.37vw 10.75vw 6.71vw;
  }

  .index-page .wine-logo {
    width: 11.2vw;
    height: 11.2vw;
    margin-bottom: 2.33vw;
  }

  .index-page .brand-title {
    font-size: 2.6vw;
    letter-spacing: 0.86vw;
  }

  .index-page .gold-small-line {
    width: 7.61vw;
    margin: 2.78vw auto 3.31vw;
  }

  .index-page .main-title {
    font-size: 5.15vw;
    letter-spacing: 1.34vw;
  }

  .index-page .main-subtitle {
    margin-top: 1.88vw;
    font-size: 1.43vw;
    letter-spacing: 0.16vw;
  }

  .index-grid {
    width: 84%;
    margin-top: 5.37vw;
  }

  .index-card {
    min-height: 8.33vw;
    grid-template-columns: 8.06vw 1fr;
    column-gap: 2.24vw;
    padding: 1.52vw 0 1.79vw;
  }

  .index-card:hover {
    transform: none;
  }

  .index-number {
    font-size: 2.35vw;
  }

  .index-label {
    font-size: 2.45vw;
    letter-spacing: 0.4vw;
  }

  .index-detail {
    margin-top: 0.49vw;
    font-size: 1.48vw;
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

  .summary-title-line {
    margin-top: 5.37vw;
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

  .corkage-fee {
    margin-top: 3.58vw;
    font-size: 1.9vw;
    letter-spacing: 0.28vw;
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

  .sp-back-link {
    display: none;
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