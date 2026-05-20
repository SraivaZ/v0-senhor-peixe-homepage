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
  { href: "#bar-licores", label: "Bar", detail: "Vermutes · Licores · Pastis · Gins" },
  { href: "#whisky-escocia", label: "Whisky", detail: "Escócia · Irlanda · EUA · Japão" },
  { href: "#aguardentes", label: "Destilados", detail: "Aguardentes · Medronho · Cognac · Rum · Vodka · Tequila" },
  { href: "#cafetaria", label: "Cafetaria", detail: "Café · Chás · Infusões" },
]

const HERO_LOGO = "/senhor-peixe-logo.png"
const COVER_IMAGE = "/CAPA BEBIDAS.png"
const DRINKS_TITLE = "BEBIDAS"
const DRINKS_SUBTITLE = "DRINKS · BEBIDAS · BOISSONS · GETRÄNKE"


type SupportedLanguage = "pt" | "en" | "es" | "fr" | "de" | "it" | "ru" | "zh" | "ar" | "hi"

type TranslationSet = Partial<Record<SupportedLanguage, string>>

const supportedLanguages: SupportedLanguage[] = ["pt", "en", "es", "fr", "de", "it", "ru", "zh", "ar", "hi"]

function normalizeLanguage(language: string | undefined): SupportedLanguage {
  if (language && supportedLanguages.includes(language as SupportedLanguage)) {
    return language as SupportedLanguage
  }

  return "pt"
}

const phraseTranslations: Record<string, TranslationSet> = {
  "Voltar": {
    en: "Back",
    es: "Volver",
    fr: "Retour",
    de: "Zurück",
    it: "Indietro",
    ru: "Назад",
    zh: "返回",
    ar: "رجوع",
    hi: "वापस",
  },
  "Carta de Bebidas Senhor Peixe": {
    en: "Senhor Peixe drinks menu",
    es: "Carta de bebidas Senhor Peixe",
    fr: "Carte des boissons Senhor Peixe",
    de: "Getränkekarte Senhor Peixe",
    it: "Carta delle bevande Senhor Peixe",
    ru: "Карта напитков Senhor Peixe",
    zh: "Senhor Peixe 饮品菜单",
    ar: "قائمة المشروبات Senhor Peixe",
    hi: "Senhor Peixe पेय मेनू",
  },
  "ÍNDICE": {
    en: "INDEX",
    es: "ÍNDICE",
    fr: "INDEX",
    de: "INHALT",
    it: "INDICE",
    ru: "УКАЗАТЕЛЬ",
    zh: "目录",
    ar: "الفهرس",
    hi: "अनुक्रमणिका",
  },
  "CARTA DE BEBIDAS": {
    en: "DRINKS MENU",
    es: "CARTA DE BEBIDAS",
    fr: "CARTE DES BOISSONS",
    de: "GETRÄNKEKARTE",
    it: "CARTA DELLE BEVANDE",
    ru: "КАРТА НАПИТКОВ",
    zh: "饮品菜单",
    ar: "قائمة المشروبات",
    hi: "पेय मेनू",
  },
  "Índice da carta de bebidas": {
    en: "Drinks menu index",
    es: "Índice de la carta de bebidas",
    fr: "Index de la carte des boissons",
    de: "Inhaltsverzeichnis der Getränkekarte",
    it: "Indice della carta delle bevande",
    ru: "Указатель карты напитков",
    zh: "饮品菜单目录",
    ar: "فهرس قائمة المشروبات",
    hi: "पेय मेनू अनुक्रमणिका",
  },
  "BEBIDAS": {
    en: "DRINKS",
    es: "BEBIDAS",
    fr: "BOISSONS",
    de: "GETRÄNKE",
    it: "BEVANDE",
    ru: "НАПИТКИ",
    zh: "饮品",
    ar: "المشروبات",
    hi: "पेय",
  },
  "DRINKS · BEBIDAS · BOISSONS · GETRÄNKE": {
    en: "DRINKS",
    es: "BEBIDAS",
    fr: "BOISSONS",
    de: "GETRÄNKE",
    it: "BEVANDE",
    ru: "НАПИТКИ",
    zh: "饮品",
    ar: "المشروبات",
    hi: "पेय",
  },
  "Cocktails": { en: "Cocktails", es: "Cócteles", fr: "Cocktails", de: "Cocktails", it: "Cocktail", ru: "Коктейли", zh: "鸡尾酒", ar: "كوكتيلات", hi: "कॉकटेल" },
  "Autor · Clássicos": { en: "Signature · Classics", es: "De autor · Clásicos", fr: "Signature · Classiques", de: "Signature · Klassiker", it: "D'autore · Classici", ru: "Авторские · Классические", zh: "创意 · 经典", ar: "خاصة · كلاسيكية", hi: "सिग्नेचर · क्लासिक" },
  "Mocktails": { en: "Mocktails", es: "Mocktails", fr: "Mocktails", de: "Mocktails", it: "Mocktail", ru: "Безалкогольные коктейли", zh: "无酒精鸡尾酒", ar: "موكتيلات", hi: "मॉकटेल" },
  "Sumos naturais · Sangrias": { en: "Fresh juices · Sangrias", es: "Zumos naturales · Sangrías", fr: "Jus naturels · Sangrias", de: "Frische Säfte · Sangrias", it: "Succhi naturali · Sangrie", ru: "Свежевыжатые соки · Сангрии", zh: "鲜榨果汁 · 桑格利亚", ar: "عصائر طبيعية · سانغريا", hi: "ताज़े जूस · सांग्रिया" },
  "Águas": { en: "Waters", es: "Aguas", fr: "Eaux", de: "Wasser", it: "Acque", ru: "Вода", zh: "水", ar: "مياه", hi: "पानी" },
  "Refrigerantes": { en: "Soft drinks", es: "Refrescos", fr: "Boissons fraîches", de: "Erfrischungsgetränke", it: "Bibite", ru: "Безалкогольные напитки", zh: "软饮", ar: "مشروبات غازية", hi: "शीतल पेय" },
  "Cervejas": { en: "Beers", es: "Cervezas", fr: "Bières", de: "Biere", it: "Birre", ru: "Пиво", zh: "啤酒", ar: "بيرة", hi: "बीयर" },
  "Pressão · Garrafas": { en: "Draft · Bottled", es: "Barril · Botella", fr: "Pression · Bouteille", de: "Vom Fass · Flasche", it: "Alla spina · Bottiglia", ru: "Разливное · Бутылочное", zh: "生啤 · 瓶装", ar: "من الصنبور · زجاجات", hi: "ड्राफ्ट · बोतल" },
  "Fortificados": { en: "Fortified", es: "Fortificados", fr: "Fortifiés", de: "Likörweine", it: "Fortificati", ru: "Креплёные", zh: "加强酒", ar: "نبيذ مقوى", hi: "फोर्टिफाइड" },

  "MOSCATEL · CARCAVELOS · MADEIRA": { en: "MOSCATEL · CARCAVELOS · MADEIRA", es: "MOSCATEL · CARCAVELOS · MADEIRA", fr: "MOSCATEL · CARCAVELOS · MADÈRE", de: "MOSCATEL · CARCAVELOS · MADEIRA", it: "MOSCATEL · CARCAVELOS · MADEIRA", ru: "МОСКАТЕЛЬ · КАРКАВЕЛУШ · МАДЕЙРА", zh: "麝香葡萄酒 · 卡尔卡维洛斯 · 马德拉", ar: "موسكاتيل · كاركافيلوس · ماديرا", hi: "मॉस्कटेल · कार्कावेलोस · मदीरा" },
  "MOSCATEL": { en: "MOSCATEL", es: "MOSCATEL", fr: "MOSCATEL", de: "MOSCATEL", it: "MOSCATEL", ru: "МОСКАТЕЛЬ", zh: "麝香葡萄酒", ar: "موسكاتيل", hi: "मॉस्कटेल" },
  "Moscatel · Muscat · Moscatel": { en: "Moscatel · Muscat", es: "Moscatel", fr: "Moscatel · Muscat", de: "Moscatel · Muskat", it: "Moscatel · Moscato", ru: "Москатель · Мускат", zh: "麝香葡萄酒", ar: "موسكاتيل", hi: "मॉस्कटेल · मस्कट" },
  "Moscatel · Madeira · Late Harvest": { en: "Moscatel · Madeira · Late Harvest", es: "Moscatel · Madeira · Vendimia tardía", fr: "Moscatel · Madère · Vendange tardive", de: "Moscatel · Madeira · Spätlese", it: "Moscatel · Madeira · Vendemmia tardiva", ru: "Москатель · Мадейра · Поздний сбор", zh: "麝香葡萄酒 · 马德拉 · 晚收", ar: "موسكاتيل · ماديرا · حصاد متأخر", hi: "मॉस्कटेल · मदीरा · लेट हार्वेस्ट" },
  "Porto": { en: "Port", es: "Oporto", fr: "Porto", de: "Portwein", it: "Porto", ru: "Портвейн", zh: "波特酒", ar: "بورتو", hi: "पोर्ट" },
  "Ruby · Tawny · Branco · Rosé": { en: "Ruby · Tawny · White · Rosé", es: "Ruby · Tawny · Blanco · Rosé", fr: "Ruby · Tawny · Blanc · Rosé", de: "Ruby · Tawny · Weiß · Rosé", it: "Ruby · Tawny · Bianco · Rosé", ru: "Руби · Тони · Белый · Розе", zh: "宝石红 · 茶色 · 白 · 桃红", ar: "روبي · تاوني · أبيض · روزيه", hi: "रूबी · टॉनी · व्हाइट · रोज़े" },
  "Bar": { en: "Bar", es: "Bar", fr: "Bar", de: "Bar", it: "Bar", ru: "Бар", zh: "酒吧", ar: "البار", hi: "बार" },
  "Vermutes · Licores · Pastis · Gins": { en: "Vermouths · Liqueurs · Pastis · Gins", es: "Vermuts · Licores · Pastis · Ginebras", fr: "Vermouths · Liqueurs · Pastis · Gins", de: "Wermuts · Liköre · Pastis · Gins", it: "Vermouth · Liquori · Pastis · Gin", ru: "Вермуты · Ликёры · Пастис · Джины", zh: "味美思 · 利口酒 · 茴香酒 · 金酒", ar: "فيرموث · ليكيور · باستيس · جِن", hi: "वर्माउथ · लिक्योर · पास्तिस · जिन" },
  "Whisky": { en: "Whisky", es: "Whisky", fr: "Whisky", de: "Whisky", it: "Whisky", ru: "Виски", zh: "威士忌", ar: "ويسكي", hi: "व्हिस्की" },
  "Escócia · Irlanda · EUA · Japão": { en: "Scotland · Ireland · USA · Japan", es: "Escocia · Irlanda · EE. UU. · Japón", fr: "Écosse · Irlande · États-Unis · Japon", de: "Schottland · Irland · USA · Japan", it: "Scozia · Irlanda · USA · Giappone", ru: "Шотландия · Ирландия · США · Япония", zh: "苏格兰 · 爱尔兰 · 美国 · 日本", ar: "اسكتلندا · أيرلندا · الولايات المتحدة · اليابان", hi: "स्कॉटलैंड · आयरलैंड · अमेरिका · जापान" },
  "Destilados": { en: "Spirits", es: "Destilados", fr: "Spiritueux", de: "Spirituosen", it: "Distillati", ru: "Крепкие напитки", zh: "烈酒", ar: "مشروبات مقطرة", hi: "स्पिरिट्स" },
  "Aguardentes · Medronho · Cognac · Rum · Vodka · Tequila": { en: "Brandies · Medronho · Cognac · Rum · Vodka · Tequila", es: "Aguardientes · Medronho · Cognac · Ron · Vodka · Tequila", fr: "Eaux-de-vie · Medronho · Cognac · Rhum · Vodka · Tequila", de: "Brände · Medronho · Cognac · Rum · Vodka · Tequila", it: "Acquaviti · Medronho · Cognac · Rum · Vodka · Tequila", ru: "Бренди · Медронью · Коньяк · Ром · Водка · Текила", zh: "白兰地 · Medronho · 干邑 · 朗姆 · 伏特加 · 龙舌兰", ar: "براندي · ميدرونيو · كونياك · روم · فودكا · تيكيلا", hi: "ब्रांडी · मेड्रोन्यो · कॉन्यैक · रम · वोडका · टकीला" },
  "Cafetaria": { en: "Coffee", es: "Cafetería", fr: "Caféterie", de: "Kaffee", it: "Caffetteria", ru: "Кофе", zh: "咖啡", ar: "القهوة", hi: "कैफेटेरिया" },
  "Café · Chás · Infusões": { en: "Coffee · Teas · Infusions", es: "Café · Tés · Infusiones", fr: "Café · Thés · Infusions", de: "Kaffee · Tees · Aufgüsse", it: "Caffè · Tè · Infusi", ru: "Кофе · Чаи · Настои", zh: "咖啡 · 茶 · 花草茶", ar: "قهوة · شاي · منقوعات", hi: "कॉफी · चाय · इन्फ्यूज़न" },
  "COCKTAILS": { en: "COCKTAILS", es: "CÓCTELES", fr: "COCKTAILS", de: "COCKTAILS", it: "COCKTAIL", ru: "КОКТЕЙЛИ", zh: "鸡尾酒", ar: "كوكتيلات", hi: "कॉकटेल" },
  "SIGNATURE · CLASSIC · MOCKTAILS": { en: "SIGNATURE · CLASSIC · MOCKTAILS", es: "DE AUTOR · CLÁSICOS · MOCKTAILS", fr: "SIGNATURE · CLASSIQUES · MOCKTAILS", de: "SIGNATURE · KLASSIKER · MOCKTAILS", it: "D'AUTORE · CLASSICI · MOCKTAIL", ru: "АВТОРСКИЕ · КЛАССИЧЕСКИЕ · БЕЗАЛКОГОЛЬНЫЕ", zh: "创意 · 经典 · 无酒精", ar: "خاصة · كلاسيكية · موكتيلات", hi: "सिग्नेचर · क्लासिक · मॉकटेल" },
  "COCKTAILS DE AUTOR": { en: "SIGNATURE COCKTAILS", es: "CÓCTELES DE AUTOR", fr: "COCKTAILS SIGNATURE", de: "SIGNATURE-COCKTAILS", it: "COCKTAIL D'AUTORE", ru: "АВТОРСКИЕ КОКТЕЙЛИ", zh: "创意鸡尾酒", ar: "كوكتيلات خاصة", hi: "सिग्नेचर कॉकटेल" },
  "Signature Cocktails · Cócteles de autor · Cocktails signature": { en: "Signature Cocktails", es: "Cócteles de autor", fr: "Cocktails signature", de: "Signature-Cocktails", it: "Cocktail d'autore", ru: "Авторские коктейли", zh: "创意鸡尾酒", ar: "كوكتيلات خاصة", hi: "सिग्नेचर कॉकटेल" },
  "COCKTAILS CLÁSSICOS": { en: "CLASSIC COCKTAILS", es: "CÓCTELES CLÁSICOS", fr: "COCKTAILS CLASSIQUES", de: "KLASSISCHE COCKTAILS", it: "COCKTAIL CLASSICI", ru: "КЛАССИЧЕСКИЕ КОКТЕЙЛИ", zh: "经典鸡尾酒", ar: "كوكتيلات كلاسيكية", hi: "क्लासिक कॉकटेल" },
  "Classic Cocktails · Cócteles clásicos · Cocktails classiques": { en: "Classic Cocktails", es: "Cócteles clásicos", fr: "Cocktails classiques", de: "Klassische Cocktails", it: "Cocktail classici", ru: "Классические коктейли", zh: "经典鸡尾酒", ar: "كوكتيلات كلاسيكية", hi: "क्लासिक कॉकटेल" },
  "MOCKTAILS": { en: "MOCKTAILS", es: "MOCKTAILS", fr: "MOCKTAILS", de: "MOCKTAILS", it: "MOCKTAIL", ru: "БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ", zh: "无酒精鸡尾酒", ar: "موكتيلات", hi: "मॉकटेल" },
  "Alcohol-free · Sin alcohol · Sans alcool": { en: "Alcohol-free", es: "Sin alcohol", fr: "Sans alcool", de: "Alkoholfrei", it: "Analcolico", ru: "Без алкоголя", zh: "无酒精", ar: "بدون كحول", hi: "बिना अल्कोहल" },
  "SUMOS NATURAIS": { en: "FRESH JUICES", es: "ZUMOS NATURALES", fr: "JUS NATURELS", de: "FRISCHE SÄFTE", it: "SUCCHI NATURALI", ru: "СВЕЖЕВЫЖАТЫЕ СОКИ", zh: "鲜榨果汁", ar: "عصائر طبيعية", hi: "ताज़े जूस" },
  "Fresh juices · Zumos naturales · Jus naturels": { en: "Fresh juices", es: "Zumos naturales", fr: "Jus naturels", de: "Frische Säfte", it: "Succhi naturali", ru: "Свежевыжатые соки", zh: "鲜榨果汁", ar: "عصائر طبيعية", hi: "ताज़े जूस" },
  "SANGRIAS": { en: "SANGRIAS", es: "SANGRÍAS", fr: "SANGRIAS", de: "SANGRIAS", it: "SANGRIE", ru: "САНГРИИ", zh: "桑格利亚", ar: "سانغريا", hi: "सांग्रिया" },
  "Sangrias · Sangrías · Sangrias": { en: "Sangrias", es: "Sangrías", fr: "Sangrias", de: "Sangrias", it: "Sangrie", ru: "Сангрии", zh: "桑格利亚", ar: "سانغريا", hi: "सांग्रिया" },
  "ÁGUAS": { en: "WATERS", es: "AGUAS", fr: "EAUX", de: "WASSER", it: "ACQUE", ru: "ВОДА", zh: "水", ar: "مياه", hi: "पानी" },
  "Waters · Aguas · Eaux · Wasser": { en: "Waters", es: "Aguas", fr: "Eaux", de: "Wasser", it: "Acque", ru: "Вода", zh: "水", ar: "مياه", hi: "पानी" },
  "REFRIGERANTES": { en: "SOFT DRINKS", es: "REFRESCOS", fr: "BOISSONS FRAÎCHES", de: "ERFRISCHUNGSGETRÄNKE", it: "BIBITE", ru: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ", zh: "软饮", ar: "مشروبات غازية", hi: "शीतल पेय" },
  "Soft drinks · Refrescos · Boissons fraîches": { en: "Soft drinks", es: "Refrescos", fr: "Boissons fraîches", de: "Erfrischungsgetränke", it: "Bibite", ru: "Безалкогольные напитки", zh: "软饮", ar: "مشروبات غازية", hi: "शीतल पेय" },
  "CERVEJAS": { en: "BEERS", es: "CERVEZAS", fr: "BIÈRES", de: "BIERE", it: "BIRRE", ru: "ПИВО", zh: "啤酒", ar: "بيرة", hi: "बीयर" },
  "DRAFT · BOTTLED": { en: "DRAFT · BOTTLED", es: "BARRIL · BOTELLA", fr: "PRESSION · BOUTEILLE", de: "VOM FASS · FLASCHE", it: "ALLA SPINA · BOTTIGLIA", ru: "РАЗЛИВНОЕ · БУТЫЛОЧНОЕ", zh: "生啤 · 瓶装", ar: "من الصنبور · زجاجات", hi: "ड्राफ्ट · बोतल" },
  "À PRESSÃO": { en: "DRAFT", es: "DE BARRIL", fr: "PRESSION", de: "VOM FASS", it: "ALLA SPINA", ru: "РАЗЛИВНОЕ", zh: "生啤", ar: "من الصنبور", hi: "ड्राफ्ट" },
  "Draft beer · Cerveza de barril · Bière pression": { en: "Draft beer", es: "Cerveza de barril", fr: "Bière pression", de: "Bier vom Fass", it: "Birra alla spina", ru: "Разливное пиво", zh: "生啤", ar: "بيرة من الصنبور", hi: "ड्राफ्ट बीयर" },
  "GARRAFAS": { en: "BOTTLES", es: "BOTELLAS", fr: "BOUTEILLES", de: "FLASCHEN", it: "BOTTIGLIE", ru: "БУТЫЛКИ", zh: "瓶装", ar: "زجاجات", hi: "बोतलें" },
  "Bottled beer · Cerveza botella · Bière bouteille": { en: "Bottled beer", es: "Cerveza de botella", fr: "Bière en bouteille", de: "Flaschenbier", it: "Birra in bottiglia", ru: "Бутылочное пиво", zh: "瓶装啤酒", ar: "بيرة زجاجة", hi: "बोतलबंद बीयर" },
  "FORTIFICADOS": { en: "FORTIFIED", es: "FORTIFICADOS", fr: "FORTIFIÉS", de: "LIKÖRWEINE", it: "FORTIFICATI", ru: "КРЕПЛЁНЫЕ", zh: "加强酒", ar: "نبيذ مقوى", hi: "फोर्टिफाइड" },
  "CARCAVELOS": { en: "CARCAVELOS", es: "CARCAVELOS", fr: "CARCAVELOS", de: "CARCAVELOS", it: "CARCAVELOS", ru: "КАРКАВЕЛУШ", zh: "卡尔卡维洛斯", ar: "كاركافيلوس", hi: "कार्कावेलोस" },
  "Carcavelos · Fortified wine": { en: "Carcavelos · Fortified wine", es: "Carcavelos · Vino fortificado", fr: "Carcavelos · Vin fortifié", de: "Carcavelos · Likörwein", it: "Carcavelos · Vino fortificato", ru: "Каркавелуш · Креплёное вино", zh: "卡尔卡维洛斯 · 加强酒", ar: "كاركافيلوس · نبيذ مقوى", hi: "कार्कावेलोस · फोर्टिफाइड वाइन" },
  "MADEIRA": { en: "MADEIRA", es: "MADEIRA", fr: "MADÈRE", de: "MADEIRA", it: "MADEIRA", ru: "МАДЕЙРА", zh: "马德拉", ar: "ماديرا", hi: "मदीरा" },
  "Madeira wine · Vino de Madeira · Vin de Madère": { en: "Madeira wine", es: "Vino de Madeira", fr: "Vin de Madère", de: "Madeirawein", it: "Vino Madeira", ru: "Вино Мадейра", zh: "马德拉酒", ar: "نبيذ ماديرا", hi: "मदीरा वाइन" },
  "Late harvest · Vendimia tardía · Vendange tardive": { en: "Late harvest", es: "Vendimia tardía", fr: "Vendange tardive", de: "Spätlese", it: "Vendemmia tardiva", ru: "Поздний сбор", zh: "晚收", ar: "حصاد متأخر", hi: "लेट हार्वेस्ट" },
  "RUBY · TAWNY · WHITE · ROSÉ": { en: "RUBY · TAWNY · WHITE · ROSÉ", es: "RUBY · TAWNY · BLANCO · ROSÉ", fr: "RUBY · TAWNY · BLANC · ROSÉ", de: "RUBY · TAWNY · WEISS · ROSÉ", it: "RUBY · TAWNY · BIANCO · ROSÉ", ru: "РУБИ · ТОНИ · БЕЛЫЙ · РОЗЕ", zh: "宝石红 · 茶色 · 白 · 桃红", ar: "روبي · تاوني · أبيض · روزيه", hi: "रूबी · टॉनी · व्हाइट · रोज़े" },
  "PORTO RUBY": { en: "RUBY PORT", es: "PORTO RUBY", fr: "PORTO RUBY", de: "RUBY PORTWEIN", it: "PORTO RUBY", ru: "ПОРТВЕЙН РУБИ", zh: "宝石红波特", ar: "بورتو روبي", hi: "रूबी पोर्ट" },
  "Ruby Port · Porto Ruby · Porto Ruby": { en: "Ruby Port", es: "Porto Ruby", fr: "Porto Ruby", de: "Ruby Portwein", it: "Porto Ruby", ru: "Портвейн Руби", zh: "宝石红波特", ar: "بورتو روبي", hi: "रूबी पोर्ट" },
  "PORTO TAWNY": { en: "TAWNY PORT", es: "PORTO TAWNY", fr: "PORTO TAWNY", de: "TAWNY PORTWEIN", it: "PORTO TAWNY", ru: "ПОРТВЕЙН ТОНИ", zh: "茶色波特", ar: "بورتو تاوني", hi: "टॉनी पोर्ट" },
  "Tawny Port · Porto Tawny · Porto Tawny": { en: "Tawny Port", es: "Porto Tawny", fr: "Porto Tawny", de: "Tawny Portwein", it: "Porto Tawny", ru: "Портвейн Тони", zh: "茶色波特", ar: "بورتو تاوني", hi: "टॉनी पोर्ट" },
  "PORTOS BRANCOS": { en: "WHITE PORTS", es: "PORTOS BLANCOS", fr: "PORTOS BLANCS", de: "WEISSE PORTWEINE", it: "PORTI BIANCHI", ru: "БЕЛЫЕ ПОРТВЕЙНЫ", zh: "白波特", ar: "بورتو أبيض", hi: "व्हाइट पोर्ट" },
  "White Port · Porto blanco · Porto blanc": { en: "White Port", es: "Porto blanco", fr: "Porto blanc", de: "Weißer Portwein", it: "Porto bianco", ru: "Белый портвейн", zh: "白波特", ar: "بورتو أبيض", hi: "व्हाइट पोर्ट" },
  "PORTO ROSÉ": { en: "ROSÉ PORT", es: "PORTO ROSÉ", fr: "PORTO ROSÉ", de: "ROSÉ PORTWEIN", it: "PORTO ROSÉ", ru: "ПОРТВЕЙН РОЗЕ", zh: "桃红波特", ar: "بورتو روزيه", hi: "रोज़े पोर्ट" },
  "Rosé Port · Porto rosado · Porto rosé": { en: "Rosé Port", es: "Porto rosado", fr: "Porto rosé", de: "Rosé Portwein", it: "Porto rosé", ru: "Портвейн розе", zh: "桃红波特", ar: "بورتو روزيه", hi: "रोज़े पोर्ट" },
  "VERMUTES · LICORES": { en: "VERMOUTHS · LIQUEURS", es: "VERMUTS · LICORES", fr: "VERMOUTHS · LIQUEURS", de: "WERMUTS · LIKÖRE", it: "VERMOUTH · LIQUORI", ru: "ВЕРМУТЫ · ЛИКЁРЫ", zh: "味美思 · 利口酒", ar: "فيرموث · ليكيور", hi: "वर्माउथ · लिक्योर" },
  "VERMUTES & BITTERS": { en: "VERMOUTHS & BITTERS", es: "VERMUTS & BITTERS", fr: "VERMOUTHS & BITTERS", de: "WERMUTS & BITTERS", it: "VERMOUTH & BITTER", ru: "ВЕРМУТЫ И БИТТЕРЫ", zh: "味美思与苦酒", ar: "فيرموث وبيترز", hi: "वर्माउथ और बिटर्स" },
  "Vermouths & bitters · Vermuts y bitters": { en: "Vermouths & bitters", es: "Vermuts y bitters", fr: "Vermouths et bitters", de: "Wermuts und Bitters", it: "Vermouth e bitter", ru: "Вермуты и биттеры", zh: "味美思与苦酒", ar: "فيرموث وبيترز", hi: "वर्माउथ और बिटर्स" },
  "LICORES / CREAMS & PASTIS": { en: "LIQUEURS / CREAMS & PASTIS", es: "LICORES / CREMAS & PASTIS", fr: "LIQUEURS / CRÈMES & PASTIS", de: "LIKÖRE / CREMES & PASTIS", it: "LIQUORI / CREME & PASTIS", ru: "ЛИКЁРЫ / КРЕМЫ И ПАСТИС", zh: "利口酒 / 奶油酒与茴香酒", ar: "ليكيور / كريم وباستيس", hi: "लिक्योर / क्रीम और पास्तिस" },
  "Liqueurs · Cremes · Pastis": { en: "Liqueurs · Creams · Pastis", es: "Licores · Cremas · Pastis", fr: "Liqueurs · Crèmes · Pastis", de: "Liköre · Cremes · Pastis", it: "Liquori · Creme · Pastis", ru: "Ликёры · Кремы · Пастис", zh: "利口酒 · 奶油酒 · 茴香酒", ar: "ليكيور · كريم · باستيس", hi: "लिक्योर · क्रीम · पास्तिस" },
  "Gins": { en: "Gins", es: "Ginebras", fr: "Gins", de: "Gins", it: "Gin", ru: "Джины", zh: "金酒", ar: "جِن", hi: "जिन" },
  "GINS": { en: "GINS", es: "GINEBRAS", fr: "GINS", de: "GINS", it: "GIN", ru: "ДЖИНЫ", zh: "金酒", ar: "جِن", hi: "जिन" },
  "Gins · Ginebras · Gins": { en: "Gins", es: "Ginebras", fr: "Gins", de: "Gins", it: "Gin", ru: "Джины", zh: "金酒", ar: "جِن", hi: "जिन" },
  "SCOTCH · SINGLE MALT · BLENDED": { en: "SCOTCH · SINGLE MALT · BLENDED", es: "ESCOCÉS · SINGLE MALT · BLENDED", fr: "SCOTCH · SINGLE MALT · BLENDED", de: "SCOTCH · SINGLE MALT · BLENDED", it: "SCOZZESE · SINGLE MALT · BLENDED", ru: "ШОТЛАНДСКИЙ · СИНГЛ МОЛТ · КУПАЖ", zh: "苏格兰 · 单一麦芽 · 调和", ar: "سكوتش · سنجل مالت · بليندد", hi: "स्कॉच · सिंगल माल्ट · ब्लेंडेड" },
  "ESCÓCIA": { en: "SCOTLAND", es: "ESCOCIA", fr: "ÉCOSSE", de: "SCHOTTLAND", it: "SCOZIA", ru: "ШОТЛАНДИЯ", zh: "苏格兰", ar: "اسكتلندا", hi: "स्कॉटलैंड" },
  "Scotland · Escocia · Écosse": { en: "Scotland", es: "Escocia", fr: "Écosse", de: "Schottland", it: "Scozia", ru: "Шотландия", zh: "苏格兰", ar: "اسكتلندا", hi: "स्कॉटलैंड" },
  "IRISH · USA · JAPAN": { en: "IRISH · USA · JAPAN", es: "IRLANDÉS · EE. UU. · JAPÓN", fr: "IRLANDE · ÉTATS-UNIS · JAPON", de: "IRISCH · USA · JAPAN", it: "IRLANDESE · USA · GIAPPONE", ru: "ИРЛАНДИЯ · США · ЯПОНИЯ", zh: "爱尔兰 · 美国 · 日本", ar: "أيرلندا · الولايات المتحدة · اليابان", hi: "आयरिश · अमेरिका · जापान" },
  "IRLANDA": { en: "IRELAND", es: "IRLANDA", fr: "IRLANDE", de: "IRLAND", it: "IRLANDA", ru: "ИРЛАНДИЯ", zh: "爱尔兰", ar: "أيرلندا", hi: "आयरलैंड" },
  "Ireland · Irlanda · Irlande": { en: "Ireland", es: "Irlanda", fr: "Irlande", de: "Irland", it: "Irlanda", ru: "Ирландия", zh: "爱尔兰", ar: "أيرلندا", hi: "आयरलैंड" },
  "EUA": { en: "USA", es: "EE. UU.", fr: "ÉTATS-UNIS", de: "USA", it: "USA", ru: "США", zh: "美国", ar: "الولايات المتحدة", hi: "अमेरिका" },
  "USA · Estados Unidos · États-Unis": { en: "USA", es: "Estados Unidos", fr: "États-Unis", de: "USA", it: "USA", ru: "США", zh: "美国", ar: "الولايات المتحدة", hi: "अमेरिका" },
  "JAPÃO": { en: "JAPAN", es: "JAPÓN", fr: "JAPON", de: "JAPAN", it: "GIAPPONE", ru: "ЯПОНИЯ", zh: "日本", ar: "اليابان", hi: "जापान" },
  "Japan · Japón · Japon": { en: "Japan", es: "Japón", fr: "Japon", de: "Japan", it: "Giappone", ru: "Япония", zh: "日本", ar: "اليابان", hi: "जापान" },
  "DESTILADOS": { en: "SPIRITS", es: "DESTILADOS", fr: "SPIRITUEUX", de: "SPIRITUOSEN", it: "DISTILLATI", ru: "КРЕПКИЕ НАПИТКИ", zh: "烈酒", ar: "مشروبات مقطرة", hi: "स्पिरिट्स" },
  "AGUARDENTES · BAGACEIRA · MEDRONHO": { en: "BRANDIES · BAGACEIRA · MEDRONHO", es: "AGUARDIENTES · BAGACEIRA · MEDRONHO", fr: "EAUX-DE-VIE · BAGACEIRA · MEDRONHO", de: "BRÄNDE · BAGACEIRA · MEDRONHO", it: "ACQUAVITI · BAGACEIRA · MEDRONHO", ru: "БРЕНДИ · БАГАСЕЙРА · МЕДРОНЬЮ", zh: "白兰地 · Bagaceira · Medronho", ar: "براندي · باجاسيرا · ميدرونيو", hi: "ब्रांडी · बागासेरा · मेड्रोन्यो" },
  "AGUARDENTES & BAGACEIRA": { en: "BRANDIES & BAGACEIRA", es: "AGUARDIENTES & BAGACEIRA", fr: "EAUX-DE-VIE & BAGACEIRA", de: "BRÄNDE & BAGACEIRA", it: "ACQUAVITI & BAGACEIRA", ru: "БРЕНДИ И БАГАСЕЙРА", zh: "白兰地与 Bagaceira", ar: "براندي وباجاسيرا", hi: "ब्रांडी और बागासेरा" },
  "Brandies · Aguardientes · Eaux-de-vie": { en: "Brandies · Eaux-de-vie", es: "Aguardientes", fr: "Eaux-de-vie", de: "Brände", it: "Acquaviti", ru: "Бренди", zh: "白兰地", ar: "براندي", hi: "ब्रांडी" },
  "MEDRONHO": { en: "MEDRONHO", es: "MEDRONHO", fr: "MEDRONHO", de: "MEDRONHO", it: "MEDRONHO", ru: "МЕДРОНЬЮ", zh: "Medronho", ar: "ميدرونيو", hi: "मेड्रोन्यो" },
  "Medronho · Portuguese fruit spirit": { en: "Medronho · Portuguese fruit spirit", es: "Medronho · Aguardiente de fruta portuguesa", fr: "Medronho · Eau-de-vie de fruit portugaise", de: "Medronho · Portugiesischer Obstbrand", it: "Medronho · Distillato di frutta portoghese", ru: "Медронью · Португальский фруктовый дистиллят", zh: "Medronho · 葡萄牙水果烈酒", ar: "ميدرونيو · مشروب فاكهة برتغالي مقطر", hi: "मेड्रोन्यो · पुर्तगाली फल स्पिरिट" },
  "COGNAC · ARMAGNAC · RUM · VODKA": { en: "COGNAC · ARMAGNAC · RUM · VODKA", es: "COGNAC · ARMAGNAC · RON · VODKA", fr: "COGNAC · ARMAGNAC · RHUM · VODKA", de: "COGNAC · ARMAGNAC · RUM · WODKA", it: "COGNAC · ARMAGNAC · RUM · VODKA", ru: "КОНЬЯК · АРМАНЬЯК · РОМ · ВОДКА", zh: "干邑 · 雅文邑 · 朗姆 · 伏特加", ar: "كونياك · أرمانياك · روم · فودكا", hi: "कॉन्यैक · आर्मन्याक · रम · वोडका" },
  "COGNACS & ARMAGNAC": { en: "COGNACS & ARMAGNAC", es: "COGNACS & ARMAGNAC", fr: "COGNACS & ARMAGNAC", de: "COGNACS & ARMAGNAC", it: "COGNAC & ARMAGNAC", ru: "КОНЬЯКИ И АРМАНЬЯК", zh: "干邑与雅文邑", ar: "كونياك وأرمانياك", hi: "कॉन्यैक और आर्मन्याक" },
  "Cognac · Armagnac": { en: "Cognac · Armagnac", es: "Cognac · Armagnac", fr: "Cognac · Armagnac", de: "Cognac · Armagnac", it: "Cognac · Armagnac", ru: "Коньяк · Арманьяк", zh: "干邑 · 雅文邑", ar: "كونياك · أرمانياك", hi: "कॉन्यैक · आर्मन्याक" },
  "BRANDY & RUM": { en: "BRANDY & RUM", es: "BRANDY & RON", fr: "BRANDY & RHUM", de: "BRANDY & RUM", it: "BRANDY & RUM", ru: "БРЕНДИ И РОМ", zh: "白兰地与朗姆", ar: "براندي وروم", hi: "ब्रांडी और रम" },
  "Brandy · Rum · Ron · Rhum": { en: "Brandy · Rum", es: "Brandy · Ron", fr: "Brandy · Rhum", de: "Brandy · Rum", it: "Brandy · Rum", ru: "Бренди · Ром", zh: "白兰地 · 朗姆", ar: "براندي · روم", hi: "ब्रांडी · रम" },
  "VODKA & TEQUILA": { en: "VODKA & TEQUILA", es: "VODKA & TEQUILA", fr: "VODKA & TEQUILA", de: "WODKA & TEQUILA", it: "VODKA & TEQUILA", ru: "ВОДКА И ТЕКИЛА", zh: "伏特加与龙舌兰", ar: "فودكا وتيكيلا", hi: "वोडका और टकीला" },
  "Vodka · Tequila": { en: "Vodka · Tequila", es: "Vodka · Tequila", fr: "Vodka · Tequila", de: "Wodka · Tequila", it: "Vodka · Tequila", ru: "Водка · Текила", zh: "伏特加 · 龙舌兰", ar: "فودكا · تيكيلا", hi: "वोडका · टकीला" },
  "CAFETARIA": { en: "COFFEE", es: "CAFETERÍA", fr: "CAFÉTERIE", de: "KAFFEE", it: "CAFFETTERIA", ru: "КОФЕ", zh: "咖啡", ar: "القهوة", hi: "कैफेटेरिया" },
  "COFFEE · TEA · INFUSIONS": { en: "COFFEE · TEA · INFUSIONS", es: "CAFÉ · TÉ · INFUSIONES", fr: "CAFÉ · THÉ · INFUSIONS", de: "KAFFEE · TEE · AUFGÜSSE", it: "CAFFÈ · TÈ · INFUSI", ru: "КОФЕ · ЧАЙ · НАСТОИ", zh: "咖啡 · 茶 · 花草茶", ar: "قهوة · شاي · منقوعات", hi: "कॉफी · चाय · इन्फ्यूज़न" },
  "Coffee · Café · Café · Kaffee": { en: "Coffee", es: "Café", fr: "Café", de: "Kaffee", it: "Caffè", ru: "Кофе", zh: "咖啡", ar: "قهوة", hi: "कॉफी" },
  "CHÁS & INFUSÕES": { en: "TEAS & INFUSIONS", es: "TÉS & INFUSIONES", fr: "THÉS & INFUSIONS", de: "TEES & AUFGÜSSE", it: "TÈ & INFUSI", ru: "ЧАИ И НАСТОИ", zh: "茶与花草茶", ar: "شاي ومنقوعات", hi: "चाय और इन्फ्यूज़न" },
  "Teas & infusions · Tés e infusiones · Thés et infusions": { en: "Teas & infusions", es: "Tés e infusiones", fr: "Thés et infusions", de: "Tees und Aufgüsse", it: "Tè e infusi", ru: "Чаи и настои", zh: "茶与花草茶", ar: "شاي ومنقوعات", hi: "चाय और इन्फ्यूज़न" },

  "ÁGUA LUSO": { en: "LUSO WATER", es: "AGUA LUSO", fr: "EAU LUSO", de: "LUSO WASSER", it: "ACQUA LUSO", ru: "ВОДА LUSO", zh: "LUSO 矿泉水", ar: "مياه لوسو", hi: "LUSO पानी" },
  "ÁGUA C/ GÁS": { en: "SPARKLING WATER", es: "AGUA CON GAS", fr: "EAU GAZEUSE", de: "SPRUDELWASSER", it: "ACQUA FRIZZANTE", ru: "ГАЗИРОВАННАЯ ВОДА", zh: "气泡水", ar: "مياه غازية", hi: "स्पार्कलिंग वॉटर" },
  "PEDRAS, CASTELO": { en: "Pedras, Castelo", es: "Pedras, Castelo", fr: "Pedras, Castelo", de: "Pedras, Castelo", it: "Pedras, Castelo", ru: "Pedras, Castelo", zh: "Pedras, Castelo", ar: "Pedras، Castelo", hi: "Pedras, Castelo" },
  "ÁGUA TÓNICA": { en: "TONIC WATER", es: "TÓNICA", fr: "TONIC", de: "TONIC WATER", it: "ACQUA TONICA", ru: "ТОНИК", zh: "汤力水", ar: "مياه تونيك", hi: "टॉनिक वॉटर" },
  "LARANJA": { en: "ORANGE", es: "NARANJA", fr: "ORANGE", de: "ORANGE", it: "ARANCIA", ru: "АПЕЛЬСИН", zh: "橙汁", ar: "برتقال", hi: "संतरा" },
  "LIMONADA": { en: "LEMONADE", es: "LIMONADA", fr: "LIMONADE", de: "LIMONADE", it: "LIMONATA", ru: "ЛИМОНАД", zh: "柠檬水", ar: "ليمونادة", hi: "नींबू पानी" },
  "LIMONADA HORTELÃ AZUL": { en: "BLUE MINT LEMONADE", es: "LIMONADA DE MENTA AZUL", fr: "LIMONADE MENTHE BLEUE", de: "BLAUE MINZ-LIMONADE", it: "LIMONATA MENTA BLU", ru: "ЛИМОНАД С ГОЛУБОЙ МЯТОЙ", zh: "蓝薄荷柠檬水", ar: "ليمونادة بالنعناع الأزرق", hi: "ब्लू मिंट लेमोनेड" },
  "LIMONADA MORANGO / FLOR HIBISCO": { en: "STRAWBERRY / HIBISCUS FLOWER LEMONADE", es: "LIMONADA DE FRESA / FLOR DE HIBISCO", fr: "LIMONADE FRAISE / FLEUR D'HIBISCUS", de: "ERDBEER-/HIBISKUS-LIMONADE", it: "LIMONATA FRAGOLA / FIORE DI IBISCO", ru: "ЛИМОНАД КЛУБНИКА / ГИБИСКУС", zh: "草莓 / 洛神花柠檬水", ar: "ليمونادة فراولة / زهرة الكركديه", hi: "स्ट्रॉबेरी / हिबिस्कस लेमोनेड" },
  "LIMONADA MANGA / MARACUJÁ": { en: "MANGO / PASSION FRUIT LEMONADE", es: "LIMONADA DE MANGO / MARACUYÁ", fr: "LIMONADE MANGUE / FRUIT DE LA PASSION", de: "MANGO-/PASSIONSFRUCHT-LIMONADE", it: "LIMONATA MANGO / PASSION FRUIT", ru: "ЛИМОНАД МАНГО / МАРАКУЙЯ", zh: "芒果 / 百香果柠檬水", ar: "ليمونادة مانجو / باشن فروت", hi: "आम / पैशन फ्रूट लेमोनेड" },
  "VIRGIN MOJITO": { en: "VIRGIN MOJITO", es: "MOJITO SIN ALCOHOL", fr: "MOJITO SANS ALCOOL", de: "VIRGIN MOJITO", it: "VIRGIN MOJITO", ru: "БЕЗАЛКОГОЛЬНЫЙ МОХИТО", zh: "无酒精莫吉托", ar: "موهيتو بدون كحول", hi: "वर्जिन मोजिटो" },
  "A NOSSA CARTA DE BEBIDAS": { en: "OUR DRINKS MENU", es: "NUESTRA CARTA DE BEBIDAS", fr: "NOTRE CARTE DES BOISSONS", de: "UNSERE GETRÄNKEKARTE", it: "LA NOSTRA CARTA DELLE BEVANDE", ru: "НАША КАРТА НАПИТКОВ", zh: "我们的饮品菜单", ar: "قائمة مشروباتنا", hi: "हमारा पेय मेनू" },
  "A carta de bar do Senhor Peixe reúne cocktails de autor, clássicos, mocktails, sangrias, destilados, fortificados, cafetaria e uma seleção pensada para acompanhar peixe fresco, marisco e cozinha portuguesa.": { en: "Senhor Peixe’s bar menu brings together signature cocktails, classics, mocktails, sangrias, spirits, fortified wines, coffee service and a selection designed to accompany fresh fish, seafood and Portuguese cuisine.", es: "La carta de bar de Senhor Peixe reúne cócteles de autor, clásicos, mocktails, sangrías, destilados, fortificados, cafetería y una selección pensada para acompañar pescado fresco, marisco y cocina portuguesa.", fr: "La carte du bar de Senhor Peixe réunit cocktails signature, classiques, mocktails, sangrias, spiritueux, vins fortifiés, caféterie et une sélection pensée pour accompagner poissons frais, fruits de mer et cuisine portugaise.", de: "Die Barkarte von Senhor Peixe vereint Signature-Cocktails, Klassiker, Mocktails, Sangrias, Spirituosen, Likörweine, Kaffee und eine Auswahl, die zu frischem Fisch, Meeresfrüchten und portugiesischer Küche passt.", it: "La carta bar di Senhor Peixe riunisce cocktail d'autore, classici, mocktail, sangrie, distillati, vini fortificati, caffetteria e una selezione pensata per accompagnare pesce fresco, frutti di mare e cucina portoghese.", ru: "Барная карта Senhor Peixe объединяет авторские и классические коктейли, моктейли, сангрии, крепкие и креплёные напитки, кофе и подборку, созданную для свежей рыбы, морепродуктов и португальской кухни.", zh: "Senhor Peixe 的酒吧菜单汇集了创意鸡尾酒、经典鸡尾酒、无酒精鸡尾酒、桑格利亚、烈酒、加强酒、咖啡以及适合搭配鲜鱼、海鲜和葡萄牙料理的精选饮品。", ar: "تجمع قائمة بار Senhor Peixe بين الكوكتيلات الخاصة والكلاسيكية والموكتيلات والسانغريا والمشروبات المقطرة والنبيذ المقوى والقهوة واختيارات صُممت لمرافقة السمك الطازج والمأكولات البحرية والمطبخ البرتغالي.", hi: "Senhor Peixe का बार मेनू सिग्नेचर कॉकटेल, क्लासिक, मॉकटेल, सांग्रिया, स्पिरिट्स, फोर्टिफाइड वाइन, कॉफी और ताज़ी मछली, सीफ़ूड और पुर्तगाली भोजन के साथ चुनी गई पेय सूची को एक साथ लाता है।" },
  "Para sugestões, harmonizações ou serviço especial, a nossa equipa terá todo o gosto em aconselhar.": { en: "For suggestions, pairings or special service, our team will be delighted to advise.", es: "Para sugerencias, maridajes o servicio especial, nuestro equipo estará encantado de aconsejarle.", fr: "Pour des suggestions, accords ou un service spécial, notre équipe sera ravie de vous conseiller.", de: "Für Empfehlungen, Begleitungen oder besonderen Service berät Sie unser Team sehr gern.", it: "Per suggerimenti, abbinamenti o servizio speciale, il nostro team sarà lieto di consigliare.", ru: "По вопросам рекомендаций, сочетаний или специального обслуживания наша команда будет рада помочь.", zh: "如需建议、搭配或特别服务，我们的团队将非常乐意为您提供建议。", ar: "للاقتراحات أو تنسيق المشروبات أو الخدمة الخاصة، يسعد فريقنا بتقديم النصيحة.", hi: "सुझाव, पेयरिंग या विशेष सेवा के लिए हमारी टीम खुशी से सलाह देगी।" },
  "A NOSSA CARTA DE BEBIDAS É ATUALIZADA REGULARMENTE, A NOSSA EQUIPA TERÁ TODO O GOSTO EM ACONSELHAR.": { en: "OUR DRINKS MENU IS UPDATED REGULARLY, AND OUR TEAM WILL BE DELIGHTED TO ADVISE.", es: "NUESTRA CARTA DE BEBIDAS SE ACTUALIZA REGULARMENTE Y NUESTRO EQUIPO ESTARÁ ENCANTADO DE ACONSEJARLE.", fr: "NOTRE CARTE DES BOISSONS EST RÉGULIÈREMENT MISE À JOUR ET NOTRE ÉQUIPE SERA RAVIE DE VOUS CONSEILLER.", de: "UNSERE GETRÄNKEKARTE WIRD REGELMÄSSIG AKTUALISIERT, UND UNSER TEAM BERÄT SIE SEHR GERN.", it: "LA NOSTRA CARTA DELLE BEVANDE VIENE AGGIORNATA REGOLARMENTE E IL NOSTRO TEAM SARÀ LIETO DI CONSIGLIARE.", ru: "НАША КАРТА НАПИТКОВ РЕГУЛЯРНО ОБНОВЛЯЕТСЯ, И НАША КОМАНДА БУДЕТ РАДА ПОСОВЕТОВАТЬ.", zh: "我们的饮品菜单会定期更新，我们的团队将非常乐意为您提供建议。", ar: "يتم تحديث قائمة مشروباتنا بانتظام، ويسعد فريقنا بتقديم النصيحة.", hi: "हमारा पेय मेनू नियमित रूप से अपडेट किया जाता है, और हमारी टीम खुशी से सलाह देगी।" },
  "TODOS OS PRODUTOS “NÃO SOLICITADOS” COLOCADOS NA MESA, SE FOREM CONSUMIDOS SERÃO COBRADOS PELO VALOR QUE ESTÁ NO MENU": { en: "ALL UNSOLICITED PRODUCTS PLACED ON THE TABLE, IF CONSUMED, WILL BE CHARGED ACCORDING TO THE MENU PRICE", es: "TODOS LOS PRODUCTOS NO SOLICITADOS COLOCADOS EN LA MESA, SI SE CONSUMEN, SE COBRARÁN SEGÚN EL PRECIO DEL MENÚ", fr: "TOUS LES PRODUITS NON SOLLICITÉS PLACÉS SUR LA TABLE, S'ILS SONT CONSOMMÉS, SERONT FACTURÉS AU PRIX INDIQUÉ AU MENU", de: "ALLE NICHT BESTELLTEN PRODUKTE, DIE AUF DEN TISCH GESTELLT UND VERZEHRT WERDEN, WERDEN ZUM MENÜPREIS BERECHNET", it: "TUTTI I PRODOTTI NON RICHIESTI POSTI SUL TAVOLO, SE CONSUMATI, SARANNO ADDEBITATI AL PREZZO DEL MENÙ", ru: "ВСЕ НЕЗАКАЗАННЫЕ ПРОДУКТЫ, ПОСТАВЛЕННЫЕ НА СТОЛ, ПРИ УПОТРЕБЛЕНИИ БУДУТ ОПЛАЧЕНЫ ПО ЦЕНЕ МЕНЮ", zh: "所有未点选但放置在餐桌上的产品，如被食用，将按菜单价格收费", ar: "سيتم احتساب جميع المنتجات غير المطلوبة الموضوعة على الطاولة، إذا تم استهلاكها، حسب السعر الموجود في القائمة", hi: "टेबल पर रखे गए सभी बिना मांगे उत्पाद, यदि उपभोग किए जाते हैं, तो मेनू मूल्य के अनुसार शुल्क लिए जाएंगे" },
  "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR": { en: "PRICE IN €, INCLUDES VAT AT THE CURRENT LEGAL RATE", es: "PRECIO EN €, INCLUYE IVA AL TIPO LEGAL VIGENTE", fr: "PRIX EN €, TVA INCLUSE AU TAUX LÉGAL EN VIGUEUR", de: "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ", it: "PREZZO IN €, IVA INCLUSA ALL'ALIQUOTA LEGALE IN VIGORE", ru: "ЦЕНА В €, ВКЛЮЧАЕТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ", zh: "价格以欧元计，包含现行法定税率的增值税", ar: "السعر باليورو، شامل ضريبة القيمة المضافة حسب المعدل القانوني الساري", hi: "मूल्य € में, मौजूदा कानूनी दर पर वैट शामिल" },
  "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE": { en: "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE", es: "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE", fr: "PRIX EN €, TVA INCLUSE AU TAUX LÉGAL EN VIGUEUR", de: "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ", it: "PREZZI IN €, IVA INCLUSA ALL'ALIQUOTA LEGALE IN VIGORE", ru: "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ", zh: "价格以欧元计，包含现行法定税率的增值税", ar: "الأسعار باليورو، شاملة ضريبة القيمة المضافة حسب المعدل القانوني الساري", hi: "कीमतें € में, मौजूदा कानूनी दर पर वैट शामिल" },
  "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR": { en: "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE", es: "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE", fr: "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR", de: "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ", it: "PREZZI IN €, IVA INCLUSA ALL'ALIQUOTA LEGALE IN VIGORE", ru: "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ", zh: "价格以欧元计，包含现行法定税率的增值税", ar: "الأسعار باليورو، شاملة ضريبة القيمة المضافة حسب المعدل القانوني الساري", hi: "कीमतें € में, मौजूदा कानूनी दर पर वैट शामिल" },
  "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE": { en: "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE", es: "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE", fr: "PRIX EN €, TVA INCLUSE AU TAUX LÉGAL EN VIGUEUR", de: "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ", it: "PREZZI IN €, IVA INCLUSA ALL'ALIQUOTA LEGALE IN VIGORE", ru: "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ", zh: "价格以欧元计，包含现行法定税率的增值税", ar: "الأسعار باليورو، شاملة ضريبة القيمة المضافة حسب المعدل القانوني الساري", hi: "कीमतें € में, मौजूदा कानूनी दर पर वैट शामिल" },
  "Mocktail · Grenadine, sumo de laranja, xarope de blue curaçao": { en: "Mocktail · Grenadine, orange juice, blue curaçao syrup", es: "Mocktail · Granadina, zumo de naranja, sirope de blue curaçao", fr: "Mocktail · Grenadine, jus d'orange, sirop de blue curaçao", de: "Mocktail · Grenadine, Orangensaft, Blue-Curaçao-Sirup", it: "Mocktail · Granatina, succo d'arancia, sciroppo di blue curaçao", ru: "Моктейл · Гренадин, апельсиновый сок, сироп blue curaçao", zh: "无酒精鸡尾酒 · 石榴糖浆、橙汁、蓝柑糖浆", ar: "موكتيل · غرينادين، عصير برتقال، شراب بلو كوراساو", hi: "मॉकटेल · ग्रेनाडीन, संतरे का रस, ब्लू कुरासाओ सिरप" },
  "Gin, cordial de lima e limão, vinho Madeira Sercial": { en: "Gin, lime and lemon cordial, Madeira Sercial wine", es: "Gin, cordial de lima y limón, vino Madeira Sercial", fr: "Gin, cordial de citron vert et citron, vin de Madeira Sercial", de: "Gin, Limetten- und Zitronen-Cordial, Madeira Sercial", it: "Gin, cordial di lime e limone, vino Madeira Sercial", ru: "Джин, кордиал лайма и лимона, вино Madeira Sercial", zh: "金酒、青柠与柠檬 cordial、Madeira Sercial 葡萄酒", ar: "جِن، كورديال لايم وليمون، نبيذ ماديرا سيرسيال", hi: "जिन, लाइम और लेमन कॉर्डियल, Madeira Sercial वाइन" },
  "Rum, maracujá, manga, gengibre": { en: "Rum, passion fruit, mango, ginger", es: "Ron, maracuyá, mango, jengibre", fr: "Rhum, fruit de la passion, mangue, gingembre", de: "Rum, Passionsfrucht, Mango, Ingwer", it: "Rum, frutto della passione, mango, zenzero", ru: "Ром, маракуйя, манго, имбирь", zh: "朗姆、百香果、芒果、姜", ar: "روم، باشن فروت، مانجو، زنجبيل", hi: "रम, पैशन फ्रूट, आम, अदरक" },
  "Prosecco, morango": { en: "Prosecco, strawberry", es: "Prosecco, fresa", fr: "Prosecco, fraise", de: "Prosecco, Erdbeere", it: "Prosecco, fragola", ru: "Просекко, клубника", zh: "普罗塞克、草莓", ar: "بروسيكو، فراولة", hi: "प्रोसेको, स्ट्रॉबेरी" },
  "Prosecco, laranja": { en: "Prosecco, orange", es: "Prosecco, naranja", fr: "Prosecco, orange", de: "Prosecco, Orange", it: "Prosecco, arancia", ru: "Просекко, апельсин", zh: "普罗塞克、橙子", ar: "بروسيكو، برتقال", hi: "प्रोसेको, संतरा" },
  "Gin, Campari, vermute tinto reserva especial": { en: "Gin, Campari, special reserve red vermouth", es: "Gin, Campari, vermut rojo reserva especial", fr: "Gin, Campari, vermouth rouge réserve spéciale", de: "Gin, Campari, roter Wermut Reserva Especial", it: "Gin, Campari, vermouth rosso riserva speciale", ru: "Джин, Campari, красный вермут Reserva Especial", zh: "金酒、Campari、特别珍藏红味美思", ar: "جِن، كامباري، فيرموث أحمر ريزيرفا خاص", hi: "जिन, Campari, स्पेशल रिज़र्व रेड वर्माउथ" },
  "Cachaça, citrinos frescos, açúcar amarelo": { en: "Cachaça, fresh citrus, brown sugar", es: "Cachaça, cítricos frescos, azúcar moreno", fr: "Cachaça, agrumes frais, sucre roux", de: "Cachaça, frische Zitrusfrüchte, brauner Zucker", it: "Cachaça, agrumi freschi, zucchero di canna", ru: "Кашаса, свежие цитрусовые, коричневый сахар", zh: "卡莎萨、新鲜柑橘、黄糖", ar: "كاشاسا، حمضيات طازجة، سكر بني", hi: "कशासा, ताज़े साइट्रस, ब्राउन शुगर" },
  "Tequila, triple-sec, citrinos frescos": { en: "Tequila, triple sec, fresh citrus", es: "Tequila, triple sec, cítricos frescos", fr: "Tequila, triple sec, agrumes frais", de: "Tequila, Triple Sec, frische Zitrusfrüchte", it: "Tequila, triple sec, agrumi freschi", ru: "Текила, трипл-сек, свежие цитрусовые", zh: "龙舌兰、橙味利口酒、新鲜柑橘", ar: "تيكيلا، تريبل سيك، حمضيات طازجة", hi: "टकीला, ट्रिपल सेक, ताज़े साइट्रस" },
  "Rum, infusão de hortelã, sumo lima, calda de hortelã": { en: "Rum, mint infusion, lime juice, mint syrup", es: "Ron, infusión de hierbabuena, zumo de lima, jarabe de hierbabuena", fr: "Rhum, infusion de menthe, jus de citron vert, sirop de menthe", de: "Rum, Minzinfusion, Limettensaft, Minzsirup", it: "Rum, infuso di menta, succo di lime, sciroppo di menta", ru: "Ром, настой мяты, сок лайма, мятный сироп", zh: "朗姆、薄荷浸液、青柠汁、薄荷糖浆", ar: "روم، منقوع نعناع، عصير لايم، شراب نعناع", hi: "रम, पुदीना इन्फ्यूज़न, लाइम जूस, पुदीना सिरप" },
  "Whiskey, Angostura bitter, calda de açúcar": { en: "Whiskey, Angostura bitters, sugar syrup", es: "Whiskey, bitter Angostura, jarabe de azúcar", fr: "Whiskey, bitter Angostura, sirop de sucre", de: "Whiskey, Angostura Bitter, Zuckersirup", it: "Whiskey, bitter Angostura, sciroppo di zucchero", ru: "Виски, биттер Angostura, сахарный сироп", zh: "威士忌、安哥斯图拉苦精、糖浆", ar: "ويسكي، أنغوستورا بيتر، شراب السكر", hi: "व्हिस्की, Angostura bitters, शुगर सिरप" },
  "Prosecco, Aperol, água com gás": { en: "Prosecco, Aperol, sparkling water", es: "Prosecco, Aperol, agua con gas", fr: "Prosecco, Aperol, eau gazeuse", de: "Prosecco, Aperol, Sprudelwasser", it: "Prosecco, Aperol, acqua frizzante", ru: "Просекко, Aperol, газированная вода", zh: "普罗塞克、Aperol、气泡水", ar: "بروسيكو، أبيرول، مياه غازية", hi: "प्रोसेको, Aperol, स्पार्कलिंग वॉटर" },
  "Verde, preto, camomila, cidreira, tília, frutos vermelhos, lúcia lima, menta, hortelã": { en: "Green, black, chamomile, lemon balm, linden, red fruits, lemon verbena, mint, spearmint", es: "Verde, negro, manzanilla, melisa, tila, frutos rojos, hierba luisa, menta, hierbabuena", fr: "Vert, noir, camomille, mélisse, tilleul, fruits rouges, verveine citronnée, menthe, menthe verte", de: "Grün, schwarz, Kamille, Melisse, Linde, rote Früchte, Zitronenverbene, Minze, Pfefferminze", it: "Verde, nero, camomilla, melissa, tiglio, frutti rossi, cedrina, menta, menta piperita", ru: "Зелёный, чёрный, ромашка, мелисса, липа, красные ягоды, лимонная вербена, мята", zh: "绿茶、红茶、洋甘菊、香蜂草、椴树花、红果、柠檬马鞭草、薄荷", ar: "أخضر، أسود، بابونج، مليسة، زيزفون، فواكه حمراء، لويزة ليمونية، نعناع", hi: "ग्रीन, ब्लैक, कैमोमाइल, लेमन बाम, लिंडेन, रेड फ्रूट्स, लेमन वर्बेना, मिंट, पुदीना" },
}

function t(value: string | undefined, language: SupportedLanguage): string {
  if (!value) return ""
  if (language === "pt") return value
  return phraseTranslations[value]?.[language] ?? value
}

function translateRow(row: DrinkRow, language: SupportedLanguage): DrinkRow {
  if (language === "pt") return row

  return {
    ...row,
    name: t(row.name, language),
    description: t(row.description, language),
    volume: t(row.volume, language),
    groupLabel: t(row.groupLabel, language),
  }
}

function translateSections(sections: DrinkSection[], language: SupportedLanguage): DrinkSection[] {
  if (language === "pt") return sections

  return sections.map((section) => ({
    ...section,
    title: t(section.title, language) ?? section.title,
    subtitle: t(section.subtitle, language) ?? section.subtitle,
    volume: t(section.volume, language),
    rows: section.rows.map((row) => translateRow(row, language)),
  }))
}

function translateIndexEntries(entries: IndexEntry[], language: SupportedLanguage): IndexEntry[] {
  if (language === "pt") return entries

  return entries.map((entry) => ({
    ...entry,
    label: t(entry.label, language) ?? entry.label,
    detail: t(entry.detail, language) ?? entry.detail,
  }))
}

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

function CoverPage({ language }: { language: SupportedLanguage }) {
  return (
    <Page className="cover-page image-cover-page">
      <img src={COVER_IMAGE} alt={t("Carta de Bebidas Senhor Peixe", language)} className="cover-image" />
    </Page>
  )
}

function IndexPage({ language }: { language: SupportedLanguage }) {
  const translatedIndexEntries = translateIndexEntries(indexEntries, language)

  return (
    <Page className="index-page" id="indice">
      <Header mainTitle={t("ÍNDICE", language)} mainSubtitle={t("CARTA DE BEBIDAS", language)} />

      <nav className="index-grid" aria-label={t("Índice da carta de bebidas", language)}>
        {translatedIndexEntries.map((entry, index) => (
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
  language,
}: {
  sections: DrinkSection[]
  className?: string
  mainTitle?: string
  mainSubtitle?: string
  pageId?: string
  language: SupportedLanguage
}) {
  const translatedSections = translateSections(sections, language)

  return (
    <Page id={pageId} className={`list-page ${className}`}>
      <Header mainTitle={t(mainTitle, language)} mainSubtitle={t(mainSubtitle, language)} />
      <div className="top-gold-rule" />
      <div className="sections-stack">
        {translatedSections.map((section, index) => (
          <DrinkSectionBlock key={`${section.title}-${index}`} {...section} />
        ))}
      </div>
      <FooterOrnament />
    </Page>
  )
}

function SummaryPage({ language }: { language: SupportedLanguage }) {
  return (
    <Page className="summary-page" id="resumo">
      <section className="summary-content">
        <h2 className={`summary-title ${cinzel.className}`}>{t("A NOSSA CARTA DE BEBIDAS", language)}</h2>

        <div className="summary-title-line" />

        <div className="summary-text">
          <p>
{t("A carta de bar do Senhor Peixe reúne cocktails de autor, clássicos, mocktails, sangrias, destilados, fortificados, cafetaria e uma seleção pensada para acompanhar peixe fresco, marisco e cozinha portuguesa.", language)}
          </p>

          <p>{t("Para sugestões, harmonizações ou serviço especial, a nossa equipa terá todo o gosto em aconselhar.", language)}</p>
        </div>

        <div className={`${cinzel.className} summary-notice`}>
          <p>{t("A NOSSA CARTA DE BEBIDAS É ATUALIZADA REGULARMENTE, A NOSSA EQUIPA TERÁ TODO O GOSTO EM ACONSELHAR.", language)}</p>
        </div>

        <div className={`${cinzel.className} summary-prices`}>
          <p>{t("TODOS OS PRODUTOS “NÃO SOLICITADOS” COLOCADOS NA MESA, SE FOREM CONSUMIDOS SERÃO COBRADOS PELO VALOR QUE ESTÁ NO MENU", language)}</p>
          <p>{t("PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR", language)}</p>
          <p>{t("PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE", language)}</p>
          <p>{t("PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR", language)}</p>
          <p>{t("PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE", language)}</p>
        </div>
      </section>

      <FooterOrnament />
    </Page>
  )
}

export default function CartaBebidasPage() {
  const { language: selectedLanguage } = useLanguage()
  const language = normalizeLanguage(selectedLanguage)

  return (
    <main className={`drinks-menu-shell ${cormorant.className}`}>
      <Link href="/gastronomia" className="sp-back-link">
        {t("Voltar", language)}
      </Link>

      <CoverPage language={language} />
      <IndexPage language={language} />

      <DrinkListPage
        language={language}
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
        language={language}
        pageId="mocktails-sangrias"
        sections={[
          { title: "MOCKTAILS", subtitle: "Alcohol-free · Sin alcohol · Sans alcool", volume: "20cl", rows: mocktails },
          { title: "SUMOS NATURAIS", subtitle: "Fresh juices · Zumos naturales · Jus naturels", volume: "20cl", rows: naturalJuices },
          { title: "SANGRIAS", subtitle: "Sangrias · Sangrías · Sangrias", volume: "1L", rows: sangrias },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="aguas-refrigerantes"
        sections={[
          { title: "ÁGUAS", subtitle: "Waters · Aguas · Eaux · Wasser", rows: waters, compact: true },
          { title: "REFRIGERANTES", subtitle: "Soft drinks · Refrescos · Boissons fraîches", rows: softDrinks, compact: true },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="cervejas"
        mainTitle="CERVEJAS"
        mainSubtitle="DRAFT · BOTTLED"
        sections={[
          { title: "À PRESSÃO", subtitle: "Draft beer · Cerveza de barril · Bière pression", rows: draftBeers },
          { title: "GARRAFAS", subtitle: "Bottled beer · Cerveza botella · Bière bouteille", volume: "33cl", rows: bottledBeers },
        ]}
      />

      <DrinkListPage
        language={language}
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
        language={language}
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
        language={language}
        pageId="bar-licores"
        mainTitle="BAR"
        mainSubtitle="VERMUTES · LICORES"
        sections={[
          { title: "VERMUTES & BITTERS", subtitle: "Vermouths & bitters · Vermuts y bitters", volume: "5cl", rows: vermouthRows, compact: true },
          { title: "LICORES / CREAMS & PASTIS", subtitle: "Liqueurs · Cremes · Pastis", volume: "5cl", rows: liqueurRows, compact: true },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="gins"
        mainTitle="BAR"
        mainSubtitle="Gins"
        sections={[
          { title: "GINS", subtitle: "Gins · Ginebras · Gins", volume: "5cl", rows: ginRows, compact: true },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="whisky-escocia"
        mainTitle="WHISKY"
        mainSubtitle="SCOTCH · SINGLE MALT · BLENDED"
        sections={[
          { title: "ESCÓCIA", subtitle: "Scotland · Escocia · Écosse", volume: "5cl", rows: scotchRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="whisky-internacional"
        mainTitle="WHISKY"
        mainSubtitle="IRISH · USA · JAPAN"
        sections={[
          { title: "IRLANDA", subtitle: "Ireland · Irlanda · Irlande", volume: "5cl", rows: irishWhiskeyRows, compact: true, dense: true },
          { title: "EUA", subtitle: "USA · Estados Unidos · États-Unis", volume: "5cl", rows: usaWhiskeyRows, compact: true, dense: true },
          { title: "JAPÃO", subtitle: "Japan · Japón · Japon", volume: "5cl", rows: japaneseWhiskyRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        language={language}
        pageId="aguardentes"
        mainTitle="DESTILADOS"
        mainSubtitle="AGUARDENTES · BAGACEIRA · MEDRONHO"
        sections={[
          { title: "AGUARDENTES & BAGACEIRA", subtitle: "Brandies · Aguardientes · Eaux-de-vie", volume: "5cl", rows: aguardenteRows, compact: true, dense: true },
          { title: "MEDRONHO", subtitle: "Medronho · Portuguese fruit spirit", volume: "5cl", rows: medronhoRows, compact: true, dense: true },
        ]}
      />

      <DrinkListPage
        language={language}
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
        language={language}
        pageId="cafetaria"
        mainTitle="CAFETARIA"
        mainSubtitle="COFFEE · TEA · INFUSIONS"
        sections={[
          { title: "CAFETARIA", subtitle: "Coffee · Café · Café · Kaffee", rows: coffeeRows, compact: true },
          { title: "CHÁS & INFUSÕES", subtitle: "Teas & infusions · Tés e infusiones · Thés et infusions", rows: teaRows },
        ]}
      />

      <SummaryPage language={language} />

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
          padding: 12mm 24mm 15mm;
        }

        .index-page .drink-logo {
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
          margin: 10.6mm auto 0;
        }

        .index-card {
          min-height: 17.2mm;
          border: 0;
          border-bottom: 1px solid rgba(184, 138, 69, 0.52);
          background: transparent;
          color: var(--drink-navy);
          text-decoration: none;
          display: grid;
          grid-template-columns: 17mm 1fr;
          grid-template-rows: auto auto;
          column-gap: 5mm;
          align-items: center;
          padding: 3.1mm 0 3.7mm;
          transition:
            border-color 180ms ease,
            transform 180ms ease;
        }

        .index-card:hover {
          border-color: var(--drink-gold);
          transform: translateX(1.5mm);
        }

        .index-number {
          grid-row: 1 / span 2;
          align-self: center;
          color: var(--drink-gold);
          font-size: 19px;
          line-height: 1;
          letter-spacing: 0.08em;
          font-weight: 500;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .index-label {
          color: var(--drink-navy);
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
            padding: 5.37vw 10.75vw 6.71vw;
          }

          .index-page .drink-logo {
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
            margin-top: 4.74vw;
          }

          .index-card {
            min-height: 7.7vw;
            grid-template-columns: 7.61vw 1fr;
            column-gap: 2.24vw;
            padding: 1.39vw 0 1.66vw;
          }

          .index-card:hover {
            transform: none;
          }

          .index-number {
            font-size: 2.15vw;
          }

          .index-label {
            font-size: 2.45vw;
            letter-spacing: 0.4vw;
          }

          .index-detail {
            margin-top: 0.49vw;
            font-size: 1.48vw;
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
