"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Cinzel, Cormorant_Garamond, Playfair_Display } from "next/font/google"

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

type Item = {
  name: string
  note?: string
  unit?: string
  price?: string
  description?: string
  compact?: boolean
  notice?: boolean
}

type Section = {
  title: string
  unitLabel?: string
  subtitle?: string
  items: Item[]
}

const sobremesasSections: Section[] = [
  {
    title: "SOBREMESAS",
    items: [
      { name: "BABA DE CAMELO", price: "5" },
      { name: "BOLO À FATIA", price: "5" },
      { name: "CHEESECAKE", price: "5,50" },
      { name: "DOCE DA CASA", price: "5,50" },
      { name: "MOUSSE DE CAFÉ", price: "5" },
      { name: "MOUSSE DE CHOCOLATE", price: "5" },
      { name: "MOUSSE DE MANGA", price: "5" },
      { name: "PUDIM DE OVOS", price: "5,50" },
    ],
  },
  {
    title: "FRUTAS",
    items: [
      { name: "PRATO DE FRUTA TROPICAL", price: "19" },
      { name: "ABACAXI", price: "5" },
      { name: "MANGA", price: "5" },
      { name: "PAPAIA", price: "5" },
      { name: "SALADA DE FRUTAS", price: "5" },
      { name: "LARANJA", price: "3,50" },
      { name: "KIWI", price: "3,50" },
    ],
  },
  {
    title: "NA ÉPOCA",
    items: [
      { name: "MAÇÃ ASSADA", price: "6" },
      { name: "PÊRA BÊBADA", price: "5" },
      { name: "MORANGOS", price: "6" },
      { name: "MORANGOS COM CHANTILLY", price: "7" },
      { name: "CEREJAS", price: "6" },
      { name: "MELÃO", price: "5" },
      { name: "MELOA", price: "5" },
    ],
  },
]

type LanguageCode = "pt" | "en" | "es" | "fr" | "de" | "it" | "ru" | "zh" | "ar" | "hi"

type PageCopy = {
  backLabel: string
  coverAlt: string
  legalNote: string
  finalConsumptionLine1: string
  finalConsumptionLine2: string
  finalTaxNotes: string[]
}

const pageCopy: Record<LanguageCode, PageCopy> = {
  pt: {
    backLabel: "Voltar",
    coverAlt: "Capa Carta de Sobremesas Senhor Peixe",
    legalNote: "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
    finalConsumptionLine1: "TODOS OS PRODUTOS “NÃO SOLICITADOS” COLOCADOS NA MESA, SE FOREM CONSUMIDOS SERÃO",
    finalConsumptionLine2: "COBRADOS PELO VALOR QUE ESTÁ NO MENU",
    finalTaxNotes: [
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  en: {
    backLabel: "Back",
    coverAlt: "Senhor Peixe dessert menu cover",
    legalNote: "PRICE IN €, INCLUDES VAT AT THE CURRENT LEGAL RATE",
    finalConsumptionLine1: "ALL UNSOLICITED PRODUCTS PLACED ON THE TABLE, IF CONSUMED, WILL BE",
    finalConsumptionLine2: "CHARGED ACCORDING TO THE MENU PRICE",
    finalTaxNotes: [
      "PRICE IN €, INCLUDES VAT AT THE CURRENT LEGAL RATE",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  es: {
    backLabel: "Volver",
    coverAlt: "Portada de la carta de postres de Senhor Peixe",
    legalNote: "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    finalConsumptionLine1: "TODOS LOS PRODUCTOS “NO SOLICITADOS” COLOCADOS EN LA MESA, SI SON CONSUMIDOS, SERÁN",
    finalConsumptionLine2: "COBRADOS SEGÚN EL PRECIO DEL MENÚ",
    finalTaxNotes: [
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  fr: {
    backLabel: "Retour",
    coverAlt: "Couverture de la carte des desserts Senhor Peixe",
    legalNote: "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    finalConsumptionLine1: "TOUS LES PRODUITS “NON COMMANDÉS” PLACÉS SUR LA TABLE, S’ILS SONT CONSOMMÉS, SERONT",
    finalConsumptionLine2: "FACTURÉS AU PRIX INDIQUÉ SUR LE MENU",
    finalTaxNotes: [
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  de: {
    backLabel: "Zurück",
    coverAlt: "Titelseite der Dessertkarte Senhor Peixe",
    legalNote: "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    finalConsumptionLine1: "ALLE NICHT BESTELLTEN PRODUKTE, DIE AUF DEN TISCH GESTELLT WERDEN, WERDEN BEI VERZEHR",
    finalConsumptionLine2: "ZUM IM MENÜ ANGEGEBENEN PREIS BERECHNET",
    finalTaxNotes: [
      "PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  it: {
    backLabel: "Indietro",
    coverAlt: "Copertina della carta dei dessert Senhor Peixe",
    legalNote: "PREZZI IN €, IVA INCLUSA AL TASSO LEGALE IN VIGORE",
    finalConsumptionLine1: "TUTTI I PRODOTTI “NON RICHIESTI” SERVITI AL TAVOLO, SE CONSUMATI, SARANNO",
    finalConsumptionLine2: "ADDEBITATI AL PREZZO INDICATO NEL MENÙ",
    finalTaxNotes: [
      "PREZZI IN €, IVA INCLUSA AL TASSO LEGALE IN VIGORE",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  ru: {
    backLabel: "Назад",
    coverAlt: "Обложка меню десертов Senhor Peixe",
    legalNote: "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ",
    finalConsumptionLine1: "ВСЕ НЕЗАКАЗАННЫЕ ПРОДУКТЫ, ПОСТАВЛЕННЫЕ НА СТОЛ, ПРИ УПОТРЕБЛЕНИИ БУДУТ",
    finalConsumptionLine2: "ОПЛАЧЕНЫ ПО ЦЕНЕ, УКАЗАННОЙ В МЕНЮ",
    finalTaxNotes: [
      "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  zh: {
    backLabel: "返回",
    coverAlt: "Senhor Peixe 甜品菜单封面",
    legalNote: "价格以欧元计，已包含现行法定税率的增值税",
    finalConsumptionLine1: "所有未点选而放置在餐桌上的产品，如被食用，均将",
    finalConsumptionLine2: "按菜单所列价格收费",
    finalTaxNotes: [
      "价格以欧元计，已包含现行法定税率的增值税",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  ar: {
    backLabel: "رجوع",
    coverAlt: "غلاف قائمة الحلويات Senhor Peixe",
    legalNote: "الأسعار باليورو وتشمل ضريبة القيمة المضافة حسب النسبة القانونية المعمول بها",
    finalConsumptionLine1: "جميع المنتجات غير المطلوبة التي توضع على الطاولة، إذا تم استهلاكها، سيتم",
    finalConsumptionLine2: "احتسابها حسب السعر المذكور في القائمة",
    finalTaxNotes: [
      "الأسعار باليورو وتشمل ضريبة القيمة المضافة حسب النسبة القانونية المعمول بها",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
  hi: {
    backLabel: "वापस",
    coverAlt: "Senhor Peixe मिठाई मेनू कवर",
    legalNote: "कीमतें € में हैं और लागू कानूनी दर पर वैट शामिल है",
    finalConsumptionLine1: "मेज़ पर रखे गए सभी “बिना अनुरोध” उत्पाद, यदि उपभोग किए जाते हैं, तो",
    finalConsumptionLine2: "मेनू में दिए गए मूल्य के अनुसार शुल्क लिया जाएगा",
    finalTaxNotes: [
      "कीमतें € में हैं और लागू कानूनी दर पर वैट शामिल है",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
    ],
  },
}

const sectionTitleTranslations: Record<Exclude<LanguageCode, "pt">, Record<string, string>> = {
  en: {
    "SOBREMESAS": "DESSERTS",
    "FRUTAS": "FRUIT",
    "NA ÉPOCA": "SEASONAL",
  },
  es: {
    "SOBREMESAS": "POSTRES",
    "FRUTAS": "FRUTAS",
    "NA ÉPOCA": "DE TEMPORADA",
  },
  fr: {
    "SOBREMESAS": "DESSERTS",
    "FRUTAS": "FRUITS",
    "NA ÉPOCA": "DE SAISON",
  },
  de: {
    "SOBREMESAS": "DESSERTS",
    "FRUTAS": "FRÜCHTE",
    "NA ÉPOCA": "SAISONAL",
  },
  it: {
    "SOBREMESAS": "DESSERT",
    "FRUTAS": "FRUTTA",
    "NA ÉPOCA": "DI STAGIONE",
  },
  ru: {
    "SOBREMESAS": "ДЕСЕРТЫ",
    "FRUTAS": "ФРУКТЫ",
    "NA ÉPOCA": "СЕЗОННОЕ",
  },
  zh: {
    "SOBREMESAS": "甜品",
    "FRUTAS": "水果",
    "NA ÉPOCA": "时令",
  },
  ar: {
    "SOBREMESAS": "حلويات",
    "FRUTAS": "فواكه",
    "NA ÉPOCA": "موسمي",
  },
  hi: {
    "SOBREMESAS": "मिठाइयाँ",
    "FRUTAS": "फल",
    "NA ÉPOCA": "मौसमी",
  },
}

const itemNameTranslations: Record<Exclude<LanguageCode, "pt">, Record<string, string>> = {
  en: {
    "BABA DE CAMELO": "CARAMEL MOUSSE",
    "BOLO À FATIA": "CAKE SLICE",
    "CHEESECAKE": "CHEESECAKE",
    "DOCE DA CASA": "HOUSE DESSERT",
    "MOUSSE DE CAFÉ": "COFFEE MOUSSE",
    "MOUSSE DE CHOCOLATE": "CHOCOLATE MOUSSE",
    "MOUSSE DE MANGA": "MANGO MOUSSE",
    "PUDIM DE OVOS": "EGG PUDDING",
    "PRATO DE FRUTA TROPICAL": "TROPICAL FRUIT PLATTER",
    "ABACAXI": "PINEAPPLE",
    "MANGA": "MANGO",
    "PAPAIA": "PAPAYA",
    "SALADA DE FRUTAS": "FRUIT SALAD",
    "LARANJA": "ORANGE",
    "KIWI": "KIWI",
    "MAÇÃ ASSADA": "BAKED APPLE",
    "PÊRA BÊBADA": "POACHED PEAR",
    "MORANGOS": "STRAWBERRIES",
    "MORANGOS COM CHANTILLY": "STRAWBERRIES WITH CHANTILLY",
    "CEREJAS": "CHERRIES",
    "MELÃO": "MELON",
    "MELOA": "CANTALOUPE",
  },
  es: {
    "BABA DE CAMELO": "MOUSSE DE CARAMELO",
    "BOLO À FATIA": "PORCIÓN DE TARTA",
    "CHEESECAKE": "CHEESECAKE",
    "DOCE DA CASA": "POSTRE DE LA CASA",
    "MOUSSE DE CAFÉ": "MOUSSE DE CAFÉ",
    "MOUSSE DE CHOCOLATE": "MOUSSE DE CHOCOLATE",
    "MOUSSE DE MANGA": "MOUSSE DE MANGO",
    "PUDIM DE OVOS": "FLAN DE HUEVO",
    "PRATO DE FRUTA TROPICAL": "PLATO DE FRUTA TROPICAL",
    "ABACAXI": "PIÑA",
    "MANGA": "MANGO",
    "PAPAIA": "PAPAYA",
    "SALADA DE FRUTAS": "ENSALADA DE FRUTAS",
    "LARANJA": "NARANJA",
    "KIWI": "KIWI",
    "MAÇÃ ASSADA": "MANZANA ASADA",
    "PÊRA BÊBADA": "PERA AL VINO",
    "MORANGOS": "FRESAS",
    "MORANGOS COM CHANTILLY": "FRESAS CON CHANTILLY",
    "CEREJAS": "CEREZAS",
    "MELÃO": "MELÓN",
    "MELOA": "MELOA",
  },
  fr: {
    "BABA DE CAMELO": "MOUSSE AU CARAMEL",
    "BOLO À FATIA": "PART DE GÂTEAU",
    "CHEESECAKE": "CHEESECAKE",
    "DOCE DA CASA": "DESSERT MAISON",
    "MOUSSE DE CAFÉ": "MOUSSE AU CAFÉ",
    "MOUSSE DE CHOCOLATE": "MOUSSE AU CHOCOLAT",
    "MOUSSE DE MANGA": "MOUSSE À LA MANGUE",
    "PUDIM DE OVOS": "FLAN AUX ŒUFS",
    "PRATO DE FRUTA TROPICAL": "ASSIETTE DE FRUITS TROPICAUX",
    "ABACAXI": "ANANAS",
    "MANGA": "MANGUE",
    "PAPAIA": "PAPAYE",
    "SALADA DE FRUTAS": "SALADE DE FRUITS",
    "LARANJA": "ORANGE",
    "KIWI": "KIWI",
    "MAÇÃ ASSADA": "POMME AU FOUR",
    "PÊRA BÊBADA": "POIRE AU VIN",
    "MORANGOS": "FRAISES",
    "MORANGOS COM CHANTILLY": "FRAISES À LA CHANTILLY",
    "CEREJAS": "CERISES",
    "MELÃO": "MELON",
    "MELOA": "MELON",
  },
  de: {
    "BABA DE CAMELO": "KARAMELLMOUSSE",
    "BOLO À FATIA": "KUCHENSTÜCK",
    "CHEESECAKE": "CHEESECAKE",
    "DOCE DA CASA": "DESSERT DES HAUSES",
    "MOUSSE DE CAFÉ": "KAFFEEMOUSSE",
    "MOUSSE DE CHOCOLATE": "SCHOKOLADENMOUSSE",
    "MOUSSE DE MANGA": "MANGOMOUSSE",
    "PUDIM DE OVOS": "EIERPUDDING",
    "PRATO DE FRUTA TROPICAL": "TROPISCHER FRUCHTTELLER",
    "ABACAXI": "ANANAS",
    "MANGA": "MANGO",
    "PAPAIA": "PAPAYA",
    "SALADA DE FRUTAS": "OBSTSALAT",
    "LARANJA": "ORANGE",
    "KIWI": "KIWI",
    "MAÇÃ ASSADA": "BRATAPFEL",
    "PÊRA BÊBADA": "BIRNE IN WEIN",
    "MORANGOS": "ERDBEEREN",
    "MORANGOS COM CHANTILLY": "ERDBEEREN MIT CHANTILLY-SAHNE",
    "CEREJAS": "KIRSCHEN",
    "MELÃO": "MELONE",
    "MELOA": "MELONE",
  },
  it: {
    "BABA DE CAMELO": "MOUSSE AL CARAMELLO",
    "BOLO À FATIA": "FETTA DI TORTA",
    "CHEESECAKE": "CHEESECAKE",
    "DOCE DA CASA": "DESSERT DELLA CASA",
    "MOUSSE DE CAFÉ": "MOUSSE AL CAFFÈ",
    "MOUSSE DE CHOCOLATE": "MOUSSE AL CIOCCOLATO",
    "MOUSSE DE MANGA": "MOUSSE AL MANGO",
    "PUDIM DE OVOS": "BUDINO ALL'UOVO",
    "PRATO DE FRUTA TROPICAL": "PIATTO DI FRUTTA TROPICALE",
    "ABACAXI": "ANANAS",
    "MANGA": "MANGO",
    "PAPAIA": "PAPAYA",
    "SALADA DE FRUTAS": "MACEDONIA",
    "LARANJA": "ARANCIA",
    "KIWI": "KIWI",
    "MAÇÃ ASSADA": "MELA AL FORNO",
    "PÊRA BÊBADA": "PERA AL VINO",
    "MORANGOS": "FRAGOLE",
    "MORANGOS COM CHANTILLY": "FRAGOLE CON CHANTILLY",
    "CEREJAS": "CILIEGIE",
    "MELÃO": "MELONE",
    "MELOA": "MELONE",
  },
  ru: {
    "BABA DE CAMELO": "КАРАМЕЛЬНЫЙ МУСС",
    "BOLO À FATIA": "КУСОК ТОРТА",
    "CHEESECAKE": "ЧИЗКЕЙК",
    "DOCE DA CASA": "ФИРМЕННЫЙ ДЕСЕРТ",
    "MOUSSE DE CAFÉ": "КОФЕЙНЫЙ МУСС",
    "MOUSSE DE CHOCOLATE": "ШОКОЛАДНЫЙ МУСС",
    "MOUSSE DE MANGA": "МАНГОВЫЙ МУСС",
    "PUDIM DE OVOS": "ЯИЧНЫЙ ПУДИНГ",
    "PRATO DE FRUTA TROPICAL": "ТАРЕЛКА ТРОПИЧЕСКИХ ФРУКТОВ",
    "ABACAXI": "АНАНАС",
    "MANGA": "МАНГО",
    "PAPAIA": "ПАПАЙЯ",
    "SALADA DE FRUTAS": "ФРУКТОВЫЙ САЛАТ",
    "LARANJA": "АПЕЛЬСИН",
    "KIWI": "КИВИ",
    "MAÇÃ ASSADA": "ПЕЧЁНОЕ ЯБЛОКО",
    "PÊRA BÊBADA": "ГРУША В ВИНЕ",
    "MORANGOS": "КЛУБНИКА",
    "MORANGOS COM CHANTILLY": "КЛУБНИКА СО ВЗБИТЫМИ СЛИВКАМИ",
    "CEREJAS": "ВИШНЯ",
    "MELÃO": "ДЫНЯ",
    "MELOA": "ДЫНЯ",
  },
  zh: {
    "BABA DE CAMELO": "焦糖慕斯",
    "BOLO À FATIA": "蛋糕切片",
    "CHEESECAKE": "芝士蛋糕",
    "DOCE DA CASA": "本店甜品",
    "MOUSSE DE CAFÉ": "咖啡慕斯",
    "MOUSSE DE CHOCOLATE": "巧克力慕斯",
    "MOUSSE DE MANGA": "芒果慕斯",
    "PUDIM DE OVOS": "鸡蛋布丁",
    "PRATO DE FRUTA TROPICAL": "热带水果拼盘",
    "ABACAXI": "菠萝",
    "MANGA": "芒果",
    "PAPAIA": "木瓜",
    "SALADA DE FRUTAS": "水果沙拉",
    "LARANJA": "橙子",
    "KIWI": "猕猴桃",
    "MAÇÃ ASSADA": "烤苹果",
    "PÊRA BÊBADA": "酒煮梨",
    "MORANGOS": "草莓",
    "MORANGOS COM CHANTILLY": "草莓配尚蒂伊奶油",
    "CEREJAS": "樱桃",
    "MELÃO": "甜瓜",
    "MELOA": "蜜瓜",
  },
  ar: {
    "BABA DE CAMELO": "موس الكراميل",
    "BOLO À FATIA": "شريحة كعك",
    "CHEESECAKE": "تشيز كيك",
    "DOCE DA CASA": "حلوى البيت",
    "MOUSSE DE CAFÉ": "موس القهوة",
    "MOUSSE DE CHOCOLATE": "موس الشوكولاتة",
    "MOUSSE DE MANGA": "موس المانجو",
    "PUDIM DE OVOS": "بودينغ البيض",
    "PRATO DE FRUTA TROPICAL": "طبق فواكه استوائية",
    "ABACAXI": "أناناس",
    "MANGA": "مانجو",
    "PAPAIA": "بابايا",
    "SALADA DE FRUTAS": "سلطة فواكه",
    "LARANJA": "برتقال",
    "KIWI": "كيوي",
    "MAÇÃ ASSADA": "تفاح مخبوز",
    "PÊRA BÊBADA": "كمثرى مطهوة بالنبيذ",
    "MORANGOS": "فراولة",
    "MORANGOS COM CHANTILLY": "فراولة مع كريمة شانتيلي",
    "CEREJAS": "كرز",
    "MELÃO": "شمام",
    "MELOA": "شمام",
  },
  hi: {
    "BABA DE CAMELO": "कैरेमल मूस",
    "BOLO À FATIA": "केक स्लाइस",
    "CHEESECAKE": "चीज़केक",
    "DOCE DA CASA": "हाउस डेज़र्ट",
    "MOUSSE DE CAFÉ": "कॉफी मूस",
    "MOUSSE DE CHOCOLATE": "चॉकलेट मूस",
    "MOUSSE DE MANGA": "मैंगो मूस",
    "PUDIM DE OVOS": "अंडा पुडिंग",
    "PRATO DE FRUTA TROPICAL": "ट्रॉपिकल फ्रूट प्लेटर",
    "ABACAXI": "अनानास",
    "MANGA": "आम",
    "PAPAIA": "पपीता",
    "SALADA DE FRUTAS": "फ्रूट सलाद",
    "LARANJA": "संतरा",
    "KIWI": "कीवी",
    "MAÇÃ ASSADA": "बेक्ड एप्पल",
    "PÊRA BÊBADA": "वाइन में पकी नाशपाती",
    "MORANGOS": "स्ट्रॉबेरी",
    "MORANGOS COM CHANTILLY": "स्ट्रॉबेरी विद चैंटिली",
    "CEREJAS": "चेरी",
    "MELÃO": "खरबूजा",
    "MELOA": "खरबूजा",
  },
}

function isSupportedLanguage(language: string): language is LanguageCode {
  return language in pageCopy
}

function translateText(
  value: string | undefined,
  dictionary: Record<Exclude<LanguageCode, "pt">, Record<string, string>>,
  language: LanguageCode,
) {
  if (!value || language === "pt") return value
  return dictionary[language]?.[value] ?? value
}

function translateSections(sections: Section[], language: LanguageCode): Section[] {
  if (language === "pt") return sections

  return sections.map((section) => ({
    ...section,
    title: translateText(section.title, sectionTitleTranslations, language) ?? section.title,
    items: section.items.map((item) => ({
      ...item,
      name: translateText(item.name, itemNameTranslations, language) ?? item.name,
    })),
  }))
}

function EuroText({ text }: { text: string }) {
  const parts = text.split("€")

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? <span className="sp-euro">€</span> : null}
        </span>
      ))}
    </>
  )
}

function PremiumFrame() {
  return (
    <img
      src="/senhor-peixe-menu-frame.png"
      alt=""
      className="sp-frame-image sp-menu-frame-image"
      aria-hidden="true"
      draggable={false}
      decoding="sync"
      loading="eager"
    />
  )
}

function Ornament({ small = false }: { small?: boolean }) {
  return (
    <div className={`sp-ornament ${small ? "sp-ornament-small" : ""}`} aria-hidden="true">
      <span />
      <strong>◇</strong>
      <span />
    </div>
  )
}

function SectionTitle({ title, unitLabel, subtitle }: { title: string; unitLabel?: string; subtitle?: string }) {
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
      <img src="/senhor-peixe-logo%20branco.png" alt="Senhor Peixe" className="sp-menu-logo" />
      <h1 className={playfair.className}>Senhor Peixe</h1>
      <Ornament small />
    </header>
  )
}

function ItemRow({ name, note, unit, price, description, compact, notice }: Item) {
  const hasPrice = Boolean(price)

  if (notice) {
    return (
      <li className="sp-item-wrap sp-section-note-wrap">
        <p className="sp-section-note">({name})</p>
      </li>
    )
  }

  return (
    <li className={`sp-item-wrap ${description ? "sp-has-description" : ""} ${!hasPrice ? "sp-item-wrap-no-price" : ""}`}>
      <div className={`sp-item ${compact ? "sp-item-compact" : ""} ${!hasPrice ? "sp-item-no-price" : ""}`}>
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

function MenuPage({ sections, copy, finalNotes = true }: { sections: Section[]; copy: PageCopy; finalNotes?: boolean }) {
  return (
    <section className="sp-page sp-menu-page sp-desserts-page">
      <PremiumFrame />

      <div className="sp-menu-content">
        <MenuHeader />

        <div className="sp-sections">
          {sections.map((section) => (
            <section className="sp-menu-section" key={section.title}>
              <SectionTitle title={section.title} unitLabel={section.unitLabel} subtitle={section.subtitle} />

              <ul>
                {section.items.map((item, index) => (
                  <ItemRow key={`${section.title}-${item.name}-${index}`} {...item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        {finalNotes ? (
          <footer className="sp-legal sp-final-legal">
            <p className="sp-final-consumption-note">
              {copy.finalConsumptionLine1}
              <br />
              {copy.finalConsumptionLine2}
            </p>

            <div className="sp-final-tax-note">
              {copy.finalTaxNotes.map((note) => (
                <p key={note}>
                  <EuroText text={note} />
                </p>
              ))}
            </div>
          </footer>
        ) : (
          <footer className="sp-legal">
            <EuroText text={copy.legalNote} />
          </footer>
        )}
      </div>
    </section>
  )
}

export default function CartaSobremesasPage() {
  const { language } = useLanguage()
  const activeLanguage: LanguageCode = isSupportedLanguage(language) ? language : "pt"
  const copy = pageCopy[activeLanguage]

  return (
    <main className={`sp-shell ${cormorant.className}`} dir={activeLanguage === "ar" ? "rtl" : "ltr"}>
      <Link href="/gastronomia" className="sp-back-link">
        {copy.backLabel}
      </Link>

      <section className="sp-page sp-cover-image-only">
        <img src="/CAPA SOBREMESAS.png" alt={copy.coverAlt} className="sp-cover-full-image" />
      </section>

      <MenuPage sections={translateSections(sobremesasSections, activeLanguage)} copy={copy} />

      <style jsx global>{`
        :root {
          --sp-site-blue: #12385c;
          --sp-ink: #12385c;
          --sp-ink-soft: #12385c;
          --sp-gold: #c59a61;
          --sp-gold-bright: #d9a85d;
          --sp-paper: #fffdf8;
          --sp-page-width: 794px;
          --sp-page-ratio: 210 / 297;
        }

        * {
          box-sizing: border-box;
        }

        .sp-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.85), transparent 34%),
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

        .sp-cover-image-only {
          background: var(--sp-paper);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .sp-cover-full-image {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain !important;
          object-position: center center;
        }

        .sp-menu-frame-image {
          transform: translate3d(0, -2px, 0);
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
          filter: brightness(0) saturate(100%) invert(14%) sepia(50%) saturate(1200%) hue-rotate(179deg) brightness(88%) contrast(97%);
        }

        .sp-menu-header h1 {
          margin: 0;
          color: var(--sp-site-blue);
          font-size: 34px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: none;
          font-variant-caps: small-caps;
          white-space: nowrap;
        }

        .sp-ornament {
          width: 154px;
          margin: 11px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--sp-gold);
        }

        .sp-ornament span {
          display: block;
          flex: 1 1 auto;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(197, 154, 97, 0.78), transparent);
        }

        .sp-ornament strong {
          display: block;
          color: var(--sp-gold);
          font-size: 10px;
          font-weight: 400;
          line-height: 1;
          transform: translateY(-0.5px);
        }

        .sp-ornament-small {
          width: 140px;
          margin-top: 10px;
        }

        .sp-sections {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 68px;
          padding-bottom: 14px;
        }

        .sp-menu-section {
          width: 100%;
        }

        .sp-menu-section + .sp-menu-section {
          margin-top: 34px;
        }

        .sp-section-title {
          margin-bottom: 14px;
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
          background: linear-gradient(to right, transparent, rgba(197, 154, 97, 0.56), transparent);
        }

        .sp-section-title h2 {
          margin: 0;
          color: var(--sp-site-blue);
          font-size: 28px;
          font-weight: 400;
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
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--sp-site-blue);
          vertical-align: middle;
        }

        .sp-section-title p {
          margin: 8px 0 0;
          color: var(--sp-ink-soft);
          font-size: 7.1px;
          font-weight: 500;
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
          background: linear-gradient(to right, transparent, rgba(197, 154, 97, 0.72), transparent);
        }

        .sp-menu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sp-item-wrap + .sp-item-wrap {
          margin-top: 6px;
        }

        .sp-item {
          display: flex;
          align-items: baseline;
          width: 100%;
          min-width: 0;
          color: var(--sp-ink);
          font-size: 13px;
          font-weight: 500;
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
          font-weight: 500;
          white-space: nowrap;
        }

        .sp-item-note,
        .sp-item-unit {
          margin-left: 5px;
          font-size: 7.1px;
          font-weight: 500;
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
          background-image: linear-gradient(to right, rgba(18, 56, 92, 0.48) 35%, transparent 0%);
          background-size: 6px 1px;
          background-repeat: repeat-x;
          background-position: left center;
        }

        .sp-price {
          flex: 0 0 34px;
          min-width: 34px;
          font-weight: 500;
          text-align: right;
          letter-spacing: 0.01em;
          white-space: nowrap;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-description,
        .sp-section-note {
          margin: 4px 0 0;
          max-width: 91%;
          color: var(--sp-ink-soft);
          font-size: 7.1px;
          font-weight: 500;
          line-height: 1.26;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sp-section-note {
          margin: 8px auto 0;
          max-width: 100%;
          text-align: center;
        }

        .sp-has-description {
          margin-bottom: 8px;
        }

        .sp-legal {
          flex: 0 0 auto;
          text-align: center;
          color: var(--sp-ink);
          font-size: 7px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          opacity: 0.88;
          font-variant-numeric: lining-nums proportional-nums;
          font-feature-settings: "lnum" 1, "pnum" 1;
        }

        .sp-final-legal {
          max-width: 500px;
          margin: 0 auto;
          font-size: 7.1px;
          line-height: 1.32;
          letter-spacing: 0.055em;
        }

        .sp-final-legal p {
          margin: 0;
        }

        .sp-final-consumption-note {
          max-width: 470px;
          margin: 0 auto 18px;
          transform: translateY(-6px);
        }

        .sp-final-tax-note {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
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

          .sp-menu-content {
            padding: 6.4vw 13.3vw 4.3vw;
          }

          .sp-menu-logo {
            width: 8.5vw;
            margin-bottom: 0.85vw;
          }

          .sp-menu-header h1 {
            font-size: 4.05vw;
            letter-spacing: 0.08em;
          }

          .sp-ornament-small {
            width: 16.1vw;
            gap: 1.1vw;
            margin-top: 1.2vw;
          }

          .sp-ornament-small strong {
            font-size: 1.05vw;
          }

          .sp-sections {
            padding-top: 8.05vw;
            padding-bottom: 1.6vw;
          }

          .sp-menu-section + .sp-menu-section {
            margin-top: 4.03vw;
          }

          .sp-section-title {
            margin-bottom: 1.66vw;
          }

          .sp-section-title h2 {
            font-size: 3.32vw;
            letter-spacing: 0.14em;
          }

          .sp-title-row {
            column-gap: 2.15vw;
          }

          .sp-section-title h2 em,
          .sp-section-title p,
          .sp-item-note,
          .sp-item-unit {
            font-size: 0.84vw;
            letter-spacing: 0.055em;
          }

          .sp-title-double-line {
            width: 12.35vw;
            margin-top: 1.1vw;
            gap: 0.48vw;
          }

          .sp-item {
            font-size: 1.54vw;
            line-height: 1.2;
            letter-spacing: 0.105em;
          }

          .sp-item-wrap + .sp-item-wrap {
            margin-top: 0.71vw;
          }

          .sp-item-note,
          .sp-item-unit {
            margin-left: 0.6vw;
          }

          .sp-leader {
            min-width: 2.6vw;
            margin: 0 0.95vw;
            transform: translateY(-0.48vw);
            background-size: 0.71vw 1px;
          }

          .sp-price {
            flex-basis: 4.05vw;
            min-width: 4.05vw;
          }

          .sp-description,
          .sp-section-note {
            font-size: 0.84vw;
            line-height: 1.26;
            letter-spacing: 0.08em;
          }

          .sp-legal {
            font-size: 0.83vw;
          }

          .sp-final-legal {
            max-width: 59vw;
            font-size: 0.84vw;
            line-height: 1.32;
            letter-spacing: 0.055em;
          }

          .sp-final-consumption-note {
            max-width: 56vw;
            margin-bottom: 2vw;
            transform: translateY(-0.72vw);
          }

          .sp-final-tax-note {
            gap: 0.24vw;
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

          .sp-cover-image-only {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sp-cover-full-image {
            width: auto;
            height: auto;
            max-width: 210mm;
            max-height: 297mm;
            object-fit: contain !important;
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
