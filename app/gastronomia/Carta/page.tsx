"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Cinzel, Cormorant_Garamond, Playfair_Display } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
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
  notice?: boolean
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
      { name: "CASCO DE SAPATEIRA COM PÃO TORRADO", unit: "UN", price: "28" },
      { name: "CARABINEIROS", unit: "/KG", price: "160" },
      { name: "CAMARÃO TIGRE", unit: "/KG", price: "120" },
    ],
  },
]

const especialidadesSections: Section[] = [
  {
    title: "ESPECIALIDADES",
    items: [
      { name: "AÇORDA DE CAMARÃO", note: "1 PAX", price: "24" },
      {
        name: "AÇORDA DE CAMARÃO",
        note: "2 PAX",
        price: "46",
        description:
          "AÇORDA CREMOSA DE PÃO ALENTEJANO, AZEITE, ALHO, COENTROS, OVO, CAMARÃO DE MOÇAMBIQUE E LISTADO FRITO",
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
        description: "ARROZ AGULHA COM LAGOSTA / LAVAGANTE",
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
          "REFOGADO DE TOMATE, CEBOLA E PIMENTO, COM MISTO DE PEIXES TÍPICOS DA CALDEIRADA",
      },
      {
        name: "PEIXE À PESCADOR",
        note: "1 PAX",
        price: "27",
        description:
          "CHERNE COZIDO COM BATATAS, CEBOLA E PIMENTOS. PRATO RÚSTICO DE SETÚBAL",
      },
      { name: "PEIXE À PESCADOR", note: "2 PAX", price: "52" },
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
          "TIRAS DE CHOCO FRITAS EM POLME CROCANTE DE MILHO, BATATA FRITA, SALADA",
      },
      {
        name: "MISTA DE MARISCO",
        note: "PREÇO SOB CONSULTA",
      },
    ],
  },
]

const peixesSections: Section[] = [
  {
    title: "PEIXE",
    unitLabel: "KG",
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
      { name: "TODOS OS PEIXES SÃO ACOMPANHADOS DE BATATA COZIDA", notice: true },
    ],
  },
  {
    title: "À LAGAREIRO",
    items: [
      {
        name: "BACALHAU",
        price: "26",
        description: "POSTA GRELHADA NO CARVÃO COM BATATA A MURRO",
      },
      {
        name: "POLVO",
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
      { name: "BÚZIOS", price: "50" },
      { name: "CAMARÃO ESPINHO", price: "108" },
      { name: "CAMARÃO DE MOÇAMBIQUE", price: "64" },
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
      { name: "BIFE DO LOMBO", note: "HALAL", price: "32" },
      { name: "BIFE DA VAZIA", price: "24" },
      {
        name: "ENTRECÔTE",
        note: "MATURADO 60 DIAS",
        price: "27",
      },
      { name: "TODOS OS BIFES SÃO ACOMPANHADOS DE BATATA FRITA E SALADA", notice: true },
      {
        name: "CARNE DE PORCO IBÉRICO",
        price: "23",
        description:
          "CARNE DE PORCO FRITA EM MASSA DE PIMENTÃO COM AMÊIJOAS E BATATA FRITA",
      },
    ],
  },
  {
    title: "VEGAN",
    items: [
      {
        name: "HAMBÚRGUER DE SOJA",
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
      { name: "ARROZ DE ALHO", price: "7" },
      { name: "ARROZ BRANCO", price: "4" },
      { name: "ARROZ DE FEIJÃO", price: "7" },
      { name: "ARROZ DE GRELOS", price: "7" },
      { name: "ARROZ DE TOMATE", price: "7" },
      { name: "AÇORDA DE OVAS", price: "10" },
      { name: "BATATA-DOCE", price: "4" },
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
      { name: "FÍGADOS", price: "2" },
      { name: "MANTEIGA", price: "2" },
      { name: "VERDE", price: "3" },
    ],
  },
]

const pageCopy = {
  pt: {
    backLabel: "Voltar",
    coverAlt: "Capa Senhor Peixe",
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
    coverAlt: "Senhor Peixe cover",
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
  zh: {
    backLabel: "返回",
    coverAlt: "Senhor Peixe 封面",
    legalNote: "价格以 € 标示，已含现行法定增值税",
    finalConsumptionLine1: "所有未点选而放置在餐桌上的产品，如被食用，将会",
    finalConsumptionLine2: "按菜单价格收费",
    finalTaxNotes: [
      "价格以 € 标示，已含现行法定增值税",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  ru: {
    backLabel: "Назад",
    coverAlt: "Обложка Senhor Peixe",
    legalNote: "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ",
    finalConsumptionLine1: "ВСЕ ПРОДУКТЫ, ПОСТАВЛЕННЫЕ НА СТОЛ БЕЗ ЗАКАЗА, ЕСЛИ ОНИ БУДУТ УПОТРЕБЛЕНЫ,",
    finalConsumptionLine2: "БУДУТ ОПЛАЧЕНЫ ПО ЦЕНЕ, УКАЗАННОЙ В МЕНЮ",
    finalTaxNotes: [
      "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  fr: {
    backLabel: "Retour",
    coverAlt: "Couverture Senhor Peixe",
    legalNote: "PRIX EN €, AVEC LA TVA AU TAUX LÉGAL EN VIGUEUR",
    finalConsumptionLine1: "TOUS LES PRODUITS NON DEMANDÉS PLACÉS SUR LA TABLE, S’ILS SONT CONSOMMÉS, SERONT",
    finalConsumptionLine2: "FACTURÉS AU PRIX INDIQUÉ SUR LE MENU",
    finalTaxNotes: [
      "PRIX EN €, AVEC LA TVA AU TAUX LÉGAL EN VIGUEUR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  es: {
    backLabel: "Volver",
    coverAlt: "Portada Senhor Peixe",
    legalNote: "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    finalConsumptionLine1: "TODOS LOS PRODUCTOS NO SOLICITADOS COLOCADOS EN LA MESA, SI SON CONSUMIDOS, SERÁN",
    finalConsumptionLine2: "COBRADOS SEGÚN EL PRECIO DEL MENÚ",
    finalTaxNotes: [
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
    ],
  },
  it: {
    backLabel: "Indietro",
    coverAlt: "Copertina Senhor Peixe",
    legalNote: "PREZZI IN €, IVA INCLUSA ALL’ALIQUOTA LEGALE VIGENTE",
    finalConsumptionLine1: "TUTTI I PRODOTTI NON RICHIESTI PORTATI AL TAVOLO, SE CONSUMATI, SARANNO",
    finalConsumptionLine2: "ADDEBITATI AL PREZZO INDICATO NEL MENÙ",
    finalTaxNotes: [
      "PREZZI IN €, IVA INCLUSA ALL’ALIQUOTA LEGALE VIGENTE",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  ar: {
    backLabel: "رجوع",
    coverAlt: "غلاف Senhor Peixe",
    legalNote: "الأسعار باليورو € وتشمل ضريبة القيمة المضافة حسب السعر القانوني الحالي",
    finalConsumptionLine1: "جميع المنتجات غير المطلوبة التي توضع على الطاولة، إذا تم استهلاكها،",
    finalConsumptionLine2: "سيتم احتسابها حسب السعر الموجود في القائمة",
    finalTaxNotes: [
      "الأسعار باليورو € وتشمل ضريبة القيمة المضافة حسب السعر القانوني الحالي",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  de: {
    backLabel: "Zurück",
    coverAlt: "Senhor Peixe Titelbild",
    legalNote: "PREISE IN €, INKLUSIVE MWST. ZUM GELTENDEN GESETZLICHEN SATZ",
    finalConsumptionLine1: "ALLE NICHT BESTELLTEN PRODUKTE, DIE AUF DEN TISCH GESTELLT UND KONSUMIERT WERDEN,",
    finalConsumptionLine2: "WERDEN ZUM IM MENÜ ANGEGEBENEN PREIS BERECHNET",
    finalTaxNotes: [
      "PREISE IN €, INKLUSIVE MWST. ZUM GELTENDEN GESETZLICHEN SATZ",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
  hi: {
    backLabel: "वापस",
    coverAlt: "Senhor Peixe कवर",
    legalNote: "कीमतें € में हैं, वर्तमान कानूनी दर पर वैट शामिल है",
    finalConsumptionLine1: "मेज पर रखे गए सभी बिना ऑर्डर किए उत्पाद, यदि उपभोग किए जाते हैं,",
    finalConsumptionLine2: "मेनू में दिए गए मूल्य के अनुसार शुल्क लिए जाएंगे",
    finalTaxNotes: [
      "कीमतें € में हैं, वर्तमान कानूनी दर पर वैट शामिल है",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE",
      "PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR",
      "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE",
    ],
  },
} as const

const sectionTitleTranslations: Record<string, string> = {
  "COUVERT": "COUVERT",
  "ENTRADAS": "STARTERS",
  "ENTRADAS QUENTES": "HOT STARTERS",
  "ESPECIALIDADES": "SPECIALITIES",
  "PEIXE": "FISH",
  "À LAGAREIRO": "LAGAREIRO STYLE",
  "MARISCO": "SEAFOOD",
  "CARNE": "MEAT",
  "VEGAN": "VEGAN",
  "SOPAS": "SOUPS",
  "ACOMPANHAMENTOS": "SIDE DISHES",
  "MOLHOS": "SAUCES",
}

const itemNameTranslations: Record<string, string> = {
  "AZEITONAS": "OLIVES",
  "MANTEIGA": "BUTTER",
  "PÃO": "BREAD",
  "PÃO TORRADO COM MANTEIGA": "TOASTED BREAD WITH BUTTER",
  "PATÉ": "PÂTÉ",
  "QUEIJO AZEITÃO / ALENTEJANO": "AZEITÃO / ALENTEJO CHEESE",
  "TÁBUA DE QUEIJOS": "CHEESE BOARD",
  "BIQUEIRÃO": "WHITE ANCHOVY",
  "PEIXINHOS FRITOS": "FRIED SMALL FISH",
  "PRATO DE PRESUNTO": "CURED HAM PLATE",
  "SALADA DE CENOURA": "CARROT SALAD",
  "SALADA DE POLVO": "OCTOPUS SALAD",
  "COCKTAIL DE CAMARÃO": "PRAWN COCKTAIL",
  "AMÊIJOAS": "CLAMS",
  "AMÊIJOLA": "LARGE CLAM",
  "BERBIGÃO": "COCKLES",
  "LONGUEIRÃO": "RAZOR CLAMS",
  "LAPAS": "LIMPETS",
  "CAMARÃO AO ALHO": "GARLIC PRAWNS",
  "TIRAS DE CHOCO": "CUTTLEFISH STRIPS",
  "GAMBA DO ALGARVE": "ALGARVE PRAWN",
  "MEXILHÃO": "MUSSELS",
  "VIEIRA": "SCALLOP",
  "ZAMBURINAS": "QUEEN SCALLOPS",
  "CASCO DE SAPATEIRA COM PÃO TORRADO": "BROWN CRAB SHELL WITH TOASTED BREAD",
  "CARABINEIROS": "SCARLET PRAWNS",
  "CAMARÃO TIGRE": "TIGER PRAWN",
  "AÇORDA DE CAMARÃO": "PRAWN AÇORDA",
  "ARROZ DE CHERNE E AMÊIJOAS": "WRECKFISH AND CLAM RICE",
  "ARROZ DO MAR": "SEAFOOD RICE",
  "ARROZ DE LAGOSTA": "SPINY LOBSTER RICE",
  "ARROZ DE LAVAGANTE": "LOBSTER RICE",
  "MASSA DE CHERNE": "WRECKFISH PASTA",
  "CALDEIRADA": "FISH STEW",
  "PEIXE À PESCADOR": "FISHERMAN-STYLE FISH",
  "BITOQUE DE CAMARÃO": "PRAWN BITOQUE",
  "CHOCO FRITO": "FRIED CUTTLEFISH",
  "MISTA DE MARISCO": "SEAFOOD SELECTION",
  "BESUGO": "BLACKSPOT SEABREAM",
  "CABEÇA DE CHERNE / GAROUPA": "WRECKFISH / GROUPER HEAD",
  "CANTARIL": "SCORPIONFISH",
  "CHERNE": "WRECKFISH",
  "CHOCOS": "CUTTLEFISH",
  "DOURADA": "GILTHEAD SEA BREAM",
  "GAROUPA": "GROUPER",
  "GORAZ": "BLACKSPOT SEA BREAM",
  "IMPERADOR": "IMPERADOR FISH",
  "LINGUADO": "SOLE",
  "LULAS": "SQUID",
  "OVAS": "ROE",
  "PARGO": "RED PORGY",
  "PEIXE GALO": "JOHN DORY",
  "PREGADO": "TURBOT",
  "ROBALO": "SEA BASS",
  "RASCASSO": "SCORPIONFISH",
  "RODOVALHO": "BRILL",
  "SALMONETES": "RED MULLET",
  "SALONGO": "SALONGO FISH",
  "SARGO": "WHITE SEABREAM",
  "SARDINHA": "SARDINES",
  "TODOS OS PEIXES SÃO ACOMPANHADOS DE BATATA COZIDA": "ALL FISH ARE SERVED WITH BOILED POTATOES",
  "BACALHAU": "CODFISH",
  "POLVO": "OCTOPUS",
  "BURRIÉ": "SEA SNAILS",
  "CANILHA": "SEA SNAILS",
  "BÚZIOS": "WHELKS",
  "CAMARÃO ESPINHO": "SPINY PRAWN",
  "CAMARÃO DE MOÇAMBIQUE": "MOZAMBIQUE PRAWN",
  "CAMARÃO RABO AZUL": "BLUE-TAIL PRAWN",
  "CAMARÃO LISTADO": "STRIPED PRAWN",
  "GAMBA BRANCA DO ALGARVE": "WHITE ALGARVE PRAWN",
  "BRUXAS": "SLIPPER LOBSTERS",
  "LAGOSTA": "SPINY LOBSTER",
  "LAVAGANTE": "LOBSTER",
  "LAGOSTIM": "NORWAY LOBSTER",
  "OSTRAS": "OYSTERS",
  "PERCEBES": "GOOSE BARNACLES",
  "SAPATEIRA": "BROWN CRAB",
  "SANTOLA": "SPIDER CRAB",
  "PATAS DE CARANGUEJO DO ALASCA": "ALASKAN KING CRAB LEGS",
  "BIFE DO LOMBO": "TENDERLOIN STEAK",
  "BIFE DA VAZIA": "SIRLOIN STEAK",
  "ENTRECÔTE": "ENTRECÔTE",
  "TODOS OS BIFES SÃO ACOMPANHADOS DE BATATA FRITA E SALADA": "ALL STEAKS ARE SERVED WITH FRENCH FRIES AND SALAD",
  "CARNE DE PORCO IBÉRICO": "IBERIAN PORK",
  "HAMBÚRGUER DE SOJA": "SOY BURGER",
  "CREME DE MARISCO": "SEAFOOD CREAM SOUP",
  "SOPA DE PEIXE": "FISH SOUP",
  "SOPA DE LEGUMES": "VEGETABLE SOUP",
  "ARROZ DE ALHO": "GARLIC RICE",
  "ARROZ BRANCO": "WHITE RICE",
  "ARROZ DE FEIJÃO": "RED BEAN RICE",
  "ARROZ DE GRELOS": "TURNIP GREENS RICE",
  "ARROZ DE TOMATE": "TOMATO RICE",
  "AÇORDA DE OVAS": "FISH ROE AÇORDA",
  "BATATA-DOCE": "SWEET POTATO",
  "BATATA FRITA": "FRENCH FRIES",
  "OVO": "EGG",
  "LEGUMES": "VEGETABLES",
  "LEGUMES SALTEADOS": "SAUTÉED VEGETABLES",
  "SALADA": "SALAD",
  "SALADA DE PIMENTOS": "PEPPER SALAD",
  "AZEITE E ALHO": "OLIVE OIL AND GARLIC",
  "ESCABECHE": "ESCABECHE",
  "FÍGADOS": "LIVERS",
  "VERDE": "GREEN SAUCE",
}

const itemNoteTranslations: Record<string, string> = {
  "SARDINHA / ATUM": "SARDINE / TUNA",
  "3 QUEIJOS, DOCE, MARMELADA, NOZES, UVAS, TOSTAS": "3 CHEESES, JAM, MARMALADE, WALNUTS, GRAPES, TOASTS",
  "2 PAX": "2 PAX",
  "1 PAX": "1 PAX",
  "3 PAX": "3 PAX",
  "PREÇO SOB CONSULTA": "PRICE ON REQUEST",
  "+0,6KG": "+0.6KG",
  "6 UN": "6 UNITS",
  "HALAL": "HALAL",
  "MATURADO 60 DIAS": "60-DAY AGED",
  "FRITO, COZIDO": "FRIED, BOILED",
}

const itemUnitTranslations: Record<string, string> = {
  "UN": "UNIT",
  "/KG": "/KG",
  "KG": "KG",
}

const itemDescriptionTranslations: Record<string, string> = {
  "AÇORDA CREMOSA DE PÃO ALENTEJANO, AZEITE, ALHO, COENTROS, OVO, CAMARÃO DE MOÇAMBIQUE E LISTADO FRITO": "CREAMY ALENTEJO BREAD STEW WITH OLIVE OIL, GARLIC, CORIANDER, EGG, MOZAMBIQUE PRAWNS AND FRIED STRIPED PRAWNS",
  "ARROZ AGULHA COM CHERNE AOS CUBOS E AMÊIJOAS": "LONG-GRAIN RICE WITH DICED WRECKFISH AND CLAMS",
  "MISTO DE MARISCOS: BOCAS DE SAPATEIRA / CARANGUEJO, CAMARÃO, MEXILHÃO, AMÊIJOA, BERBIGÃO": "MIXED SEAFOOD: BROWN CRAB / CRAB CLAWS, PRAWN, MUSSELS, CLAMS AND COCKLES",
  "ARROZ AGULHA COM LAGOSTA / LAVAGANTE": "LONG-GRAIN RICE WITH SPINY LOBSTER / LOBSTER",
  "CHERNE AOS CUBOS COM MASSA DE COTOVELINHOS": "DICED WRECKFISH WITH ELBOW PASTA",
  "REFOGADO DE TOMATE, CEBOLA E PIMENTO, COM MISTO DE PEIXES TÍPICOS DA CALDEIRADA": "TOMATO, ONION AND PEPPER BASE WITH A MIX OF TRADITIONAL FISH FOR CALDEIRADA",
  "CHERNE COZIDO COM BATATAS, CEBOLA E PIMENTOS. PRATO RÚSTICO DE SETÚBAL": "BOILED WRECKFISH WITH POTATOES, ONION AND PEPPERS. A RUSTIC DISH FROM SETÚBAL",
  "CAMARÃO FRITO, BATATA FRITA ÀS RODELAS, ARROZ BRANCO, OVO ESTRELADO": "FRIED PRAWNS, SLICED FRIED POTATOES, WHITE RICE AND FRIED EGG",
  "TIRAS DE CHOCO FRITAS EM POLME CROCANTE DE MILHO, BATATA FRITA, SALADA": "CUTTLEFISH STRIPS FRIED IN CRISPY CORN BATTER, FRENCH FRIES AND SALAD",
  "POSTA GRELHADA NO CARVÃO COM BATATA A MURRO": "CHARCOAL-GRILLED COD LOIN WITH PUNCHED POTATOES",
  "TENTÁCULOS DE POLVO GRELHADOS NO CARVÃO, BATATA A MURRO E GRELOS": "CHARCOAL-GRILLED OCTOPUS TENTACLES WITH PUNCHED POTATOES AND TURNIP GREENS",
  "CARNE DE PORCO FRITA EM MASSA DE PIMENTÃO COM AMÊIJOAS E BATATA FRITA": "FRIED PORK IN RED PEPPER PASTE WITH CLAMS AND FRENCH FRIES",
  "COM BATATA COZIDA E SALADA": "WITH BOILED POTATOES AND SALAD",
}

type LanguageKey = keyof typeof pageCopy

type TranslationDictionaries = {
  sectionTitles: Record<string, string>
  itemNames: Record<string, string>
  itemNotes: Record<string, string>
  itemUnits: Record<string, string>
  itemDescriptions: Record<string, string>
}

const translationDictionaries: Record<Exclude<LanguageKey, "pt">, TranslationDictionaries> = {
  en: {
    sectionTitles: sectionTitleTranslations,
    itemNames: itemNameTranslations,
    itemNotes: itemNoteTranslations,
    itemUnits: itemUnitTranslations,
    itemDescriptions: itemDescriptionTranslations,
  },
  zh: {
    sectionTitles: {
      "COUVERT": "餐前小食",
      "ENTRADAS": "前菜",
      "ENTRADAS QUENTES": "热前菜",
      "ESPECIALIDADES": "特色菜",
      "PEIXE": "鱼类",
      "À LAGAREIRO": "橄榄油烤制",
      "MARISCO": "海鲜",
      "CARNE": "肉类",
      "VEGAN": "素食",
      "SOPAS": "汤品",
      "ACOMPANHAMENTOS": "配菜",
      "MOLHOS": "酱汁",
    },
    itemNames: {
      "AZEITONAS": "橄榄",
      "MANTEIGA": "黄油",
      "PÃO": "面包",
      "PÃO TORRADO COM MANTEIGA": "黄油烤面包",
      "PATÉ": "肉酱",
      "QUEIJO AZEITÃO / ALENTEJANO": "阿泽唐 / 阿连特茹奶酪",
      "TÁBUA DE QUEIJOS": "奶酪拼盘",
      "BIQUEIRÃO": "白鳀鱼",
      "PEIXINHOS FRITOS": "炸小鱼",
      "PRATO DE PRESUNTO": "火腿盘",
      "SALADA DE CENOURA": "胡萝卜沙拉",
      "SALADA DE POLVO": "章鱼沙拉",
      "COCKTAIL DE CAMARÃO": "虾鸡尾酒",
      "AMÊIJOAS": "蛤蜊",
      "AMÊIJOLA": "大蛤蜊",
      "BERBIGÃO": "鸟蛤",
      "LONGUEIRÃO": "蛏子",
      "LAPAS": "帽贝",
      "CAMARÃO AO ALHO": "蒜香虾",
      "TIRAS DE CHOCO": "墨鱼条",
      "GAMBA DO ALGARVE": "阿尔加维虾",
      "MEXILHÃO": "贻贝",
      "VIEIRA": "扇贝",
      "ZAMBURINAS": "小扇贝",
      "CASCO DE SAPATEIRA COM PÃO TORRADO": "蟹壳配烤面包",
      "CARABINEIROS": "红虾",
      "CAMARÃO TIGRE": "虎虾",
      "AÇORDA DE CAMARÃO": "葡式面包虾羹",
      "ARROZ DE CHERNE E AMÊIJOAS": "石斑鱼蛤蜊饭",
      "ARROZ DO MAR": "海鲜饭",
      "ARROZ DE LAGOSTA": "龙虾饭",
      "ARROZ DE LAVAGANTE": "龙虾饭",
      "MASSA DE CHERNE": "石斑鱼意面",
      "CALDEIRADA": "葡式鱼锅",
      "PEIXE À PESCADOR": "渔夫风味鱼",
      "BITOQUE DE CAMARÃO": "虾配饭薯条和煎蛋",
      "CHOCO FRITO": "炸墨鱼",
      "MISTA DE MARISCO": "海鲜拼盘",
      "BESUGO": "海鲷",
      "CABEÇA DE CHERNE / GAROUPA": "石斑鱼 / 龙趸鱼头",
      "CANTARIL": "鲉鱼",
      "CHERNE": "石斑鱼",
      "CHOCOS": "墨鱼",
      "DOURADA": "金头鲷",
      "GAROUPA": "龙趸",
      "GORAZ": "红鲷",
      "IMPERADOR": "帝王鱼",
      "LINGUADO": "鳎鱼",
      "LULAS": "鱿鱼",
      "OVAS": "鱼籽",
      "PARGO": "红鲷",
      "PEIXE GALO": "圣彼得鱼",
      "PREGADO": "多宝鱼",
      "ROBALO": "海鲈鱼",
      "RASCASSO": "鲉鱼",
      "RODOVALHO": "比目鱼",
      "SALMONETES": "红鲻鱼",
      "SALONGO": "萨隆戈鱼",
      "SARGO": "白鲷",
      "SARDINHA": "沙丁鱼",
      "TODOS OS PEIXES SÃO ACOMPANHADOS DE BATATA COZIDA": "所有鱼类均配煮土豆",
      "BACALHAU": "鳕鱼",
      "POLVO": "章鱼",
      "BURRIÉ": "海螺",
      "CANILHA": "海螺",
      "BÚZIOS": "海螺",
      "CAMARÃO ESPINHO": "刺虾",
      "CAMARÃO DE MOÇAMBIQUE": "莫桑比克虾",
      "CAMARÃO RABO AZUL": "蓝尾虾",
      "CAMARÃO LISTADO": "条纹虾",
      "GAMBA BRANCA DO ALGARVE": "阿尔加维白虾",
      "BRUXAS": "琵琶虾",
      "LAGOSTA": "龙虾",
      "LAVAGANTE": "龙虾",
      "LAGOSTIM": "小龙虾",
      "OSTRAS": "牡蛎",
      "PERCEBES": "鹅颈藤壶",
      "SAPATEIRA": "面包蟹",
      "SANTOLA": "蜘蛛蟹",
      "PATAS DE CARANGUEJO DO ALASCA": "阿拉斯加帝王蟹脚",
      "BIFE DO LOMBO": "牛柳",
      "BIFE DA VAZIA": "西冷牛排",
      "ENTRECÔTE": "肋眼牛排",
      "TODOS OS BIFES SÃO ACOMPANHADOS DE BATATA FRITA E SALADA": "所有牛排均配薯条和沙拉",
      "CARNE DE PORCO IBÉRICO": "伊比利亚猪肉",
      "HAMBÚRGUER DE SOJA": "大豆汉堡",
      "CREME DE MARISCO": "海鲜奶油汤",
      "SOPA DE PEIXE": "鱼汤",
      "SOPA DE LEGUMES": "蔬菜汤",
      "ARROZ DE ALHO": "蒜香饭",
      "ARROZ BRANCO": "白米饭",
      "ARROZ DE FEIJÃO": "豆饭",
      "ARROZ DE GRELOS": "芜菁叶饭",
      "ARROZ DE TOMATE": "番茄饭",
      "AÇORDA DE OVAS": "鱼籽面包羹",
      "BATATA-DOCE": "红薯",
      "BATATA FRITA": "薯条",
      "OVO": "鸡蛋",
      "LEGUMES": "蔬菜",
      "LEGUMES SALTEADOS": "炒蔬菜",
      "SALADA": "沙拉",
      "SALADA DE PIMENTOS": "甜椒沙拉",
      "AZEITE E ALHO": "橄榄油和蒜",
      "ESCABECHE": "腌汁",
      "FÍGADOS": "鱼肝",
      "VERDE": "绿色酱汁",
    },
    itemNotes: {
      "SARDINHA / ATUM": "沙丁鱼 / 金枪鱼",
      "3 QUEIJOS, DOCE, MARMELADA, NOZES, UVAS, TOSTAS": "3 种奶酪、果酱、榅桲酱、核桃、葡萄、吐司",
      "2 PAX": "2 位",
      "1 PAX": "1 位",
      "3 PAX": "3 位",
      "PREÇO SOB CONSULTA": "价格请咨询",
      "+0,6KG": "+0.6KG",
      "6 UN": "6 件",
      "HALAL": "清真",
      "MATURADO 60 DIAS": "熟成 60 天",
      "FRITO, COZIDO": "煎、煮",
    },
    itemUnits: { "UN": "件", "/KG": "/KG", "KG": "KG" },
    itemDescriptions: {},
  },
  ru: {
    sectionTitles: {
      "COUVERT": "КУВЕРТ",
      "ENTRADAS": "ЗАКУСКИ",
      "ENTRADAS QUENTES": "ГОРЯЧИЕ ЗАКУСКИ",
      "ESPECIALIDADES": "ФИРМЕННЫЕ БЛЮДА",
      "PEIXE": "РЫБА",
      "À LAGAREIRO": "В СТИЛЕ ЛАГАРЕЙРУ",
      "MARISCO": "МОРЕПРОДУКТЫ",
      "CARNE": "МЯСО",
      "VEGAN": "ВЕГАНСКОЕ",
      "SOPAS": "СУПЫ",
      "ACOMPANHAMENTOS": "ГАРНИРЫ",
      "MOLHOS": "СОУСЫ",
    },
    itemNames: {},
    itemNotes: {},
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
  fr: {
    sectionTitles: {
      "COUVERT": "COUVERT",
      "ENTRADAS": "ENTRÉES",
      "ENTRADAS QUENTES": "ENTRÉES CHAUDES",
      "ESPECIALIDADES": "SPÉCIALITÉS",
      "PEIXE": "POISSON",
      "À LAGAREIRO": "FAÇON LAGAREIRO",
      "MARISCO": "FRUITS DE MER",
      "CARNE": "VIANDES",
      "VEGAN": "VÉGAN",
      "SOPAS": "SOUPES",
      "ACOMPANHAMENTOS": "ACCOMPAGNEMENTS",
      "MOLHOS": "SAUCES",
    },
    itemNames: {
      "AZEITONAS": "OLIVES",
      "MANTEIGA": "BEURRE",
      "PÃO": "PAIN",
      "PÃO TORRADO COM MANTEIGA": "PAIN GRILLÉ AU BEURRE",
      "PATÉ": "PÂTÉ",
      "QUEIJO AZEITÃO / ALENTEJANO": "FROMAGE D’AZEITÃO / ALENTEJANO",
      "TÁBUA DE QUEIJOS": "PLATEAU DE FROMAGES",
      "BIQUEIRÃO": "ANCHOIS BLANC",
      "PEIXINHOS FRITOS": "PETITS POISSONS FRITS",
      "PRATO DE PRESUNTO": "ASSIETTE DE JAMBON CRU",
      "SALADA DE CENOURA": "SALADE DE CAROTTES",
      "SALADA DE POLVO": "SALADE DE POULPE",
      "COCKTAIL DE CAMARÃO": "COCKTAIL DE CREVETTES",
      "AMÊIJOAS": "PALOURDES",
      "AMÊIJOLA": "GRANDE PALOURDE",
      "BERBIGÃO": "COQUES",
      "LONGUEIRÃO": "COUTEAUX",
      "LAPAS": "PATELLES",
      "CAMARÃO AO ALHO": "CREVETTES À L’AIL",
      "TIRAS DE CHOCO": "LAMELLES DE SEICHE",
      "GAMBA DO ALGARVE": "GAMBA DE L’ALGARVE",
      "MEXILHÃO": "MOULES",
      "VIEIRA": "SAINT-JACQUES",
      "ZAMBURINAS": "PETITES SAINT-JACQUES",
      "CASCO DE SAPATEIRA COM PÃO TORRADO": "CARAPACE DE TOURTEAU AVEC PAIN GRILLÉ",
      "CARABINEIROS": "GAMBAS ROUGES",
      "CAMARÃO TIGRE": "CREVETTE TIGRÉE",
      "AÇORDA DE CAMARÃO": "AÇORDA DE CREVETTES",
      "ARROZ DE CHERNE E AMÊIJOAS": "RIZ DE MÉROU ET PALOURDES",
      "ARROZ DO MAR": "RIZ AUX FRUITS DE MER",
      "ARROZ DE LAGOSTA": "RIZ À LA LANGOUSTE",
      "ARROZ DE LAVAGANTE": "RIZ AU HOMARD",
      "MASSA DE CHERNE": "PÂTES AU MÉROU",
      "CALDEIRADA": "RAGOÛT DE POISSON",
      "PEIXE À PESCADOR": "POISSON FAÇON PÊCHEUR",
      "BITOQUE DE CAMARÃO": "BITOQUE DE CREVETTES",
      "CHOCO FRITO": "SEICHE FRITE",
      "MISTA DE MARISCO": "ASSORTIMENT DE FRUITS DE MER",
      "BESUGO": "PAGEOT",
      "CABEÇA DE CHERNE / GAROUPA": "TÊTE DE MÉROU / GROUPER",
      "CANTARIL": "RASCASSE",
      "CHERNE": "MÉROU",
      "CHOCOS": "SEICHES",
      "DOURADA": "DORADE ROYALE",
      "GAROUPA": "GROUPER",
      "GORAZ": "DORADE ROSE",
      "IMPERADOR": "POISSON EMPEREUR",
      "LINGUADO": "SOLE",
      "LULAS": "CALAMARS",
      "OVAS": "ŒUFS DE POISSON",
      "PARGO": "PAGRE",
      "PEIXE GALO": "SAINT-PIERRE",
      "PREGADO": "TURBOT",
      "ROBALO": "BAR",
      "RASCASSO": "RASCASSE",
      "RODOVALHO": "BARBUE",
      "SALMONETES": "ROUGETS",
      "SALONGO": "POISSON SALONGO",
      "SARGO": "SAR",
      "SARDINHA": "SARDINES",
      "TODOS OS PEIXES SÃO ACOMPANHADOS DE BATATA COZIDA": "TOUS LES POISSONS SONT SERVIS AVEC DES POMMES DE TERRE CUITES",
      "BACALHAU": "MORUE",
      "POLVO": "POULPE",
      "BURRIÉ": "BIGORNEAUX",
      "CANILHA": "BULOTS",
      "BÚZIOS": "BULOTS",
      "CAMARÃO ESPINHO": "CREVETTE ÉPINEUSE",
      "CAMARÃO DE MOÇAMBIQUE": "CREVETTE DU MOZAMBIQUE",
      "CAMARÃO RABO AZUL": "CREVETTE À QUEUE BLEUE",
      "CAMARÃO LISTADO": "CREVETTE RAYÉE",
      "GAMBA BRANCA DO ALGARVE": "GAMBA BLANCHE DE L’ALGARVE",
      "BRUXAS": "CIGALES DE MER",
      "LAGOSTA": "LANGOUSTE",
      "LAVAGANTE": "HOMARD",
      "LAGOSTIM": "LANGOUSTINE",
      "OSTRAS": "HUÎTRES",
      "PERCEBES": "POUCES-PIEDS",
      "SAPATEIRA": "TOURTEAU",
      "SANTOLA": "ARAIGNÉE DE MER",
      "PATAS DE CARANGUEJO DO ALASCA": "PATTES DE CRABE ROYAL D’ALASKA",
      "BIFE DO LOMBO": "FILET DE BŒUF",
      "BIFE DA VAZIA": "FAUX-FILET",
      "ENTRECÔTE": "ENTRECÔTE",
      "TODOS OS BIFES SÃO ACOMPANHADOS DE BATATA FRITA E SALADA": "TOUS LES STEAKS SONT SERVIS AVEC FRITES ET SALADE",
      "CARNE DE PORCO IBÉRICO": "PORC IBÉRIQUE",
      "HAMBÚRGUER DE SOJA": "BURGER DE SOJA",
      "CREME DE MARISCO": "CRÈME DE FRUITS DE MER",
      "SOPA DE PEIXE": "SOUPE DE POISSON",
      "SOPA DE LEGUMES": "SOUPE DE LÉGUMES",
      "ARROZ DE ALHO": "RIZ À L’AIL",
      "ARROZ BRANCO": "RIZ BLANC",
      "ARROZ DE FEIJÃO": "RIZ AUX HARICOTS",
      "ARROZ DE GRELOS": "RIZ AUX POUSSES DE NAVET",
      "ARROZ DE TOMATE": "RIZ À LA TOMATE",
      "AÇORDA DE OVAS": "AÇORDA AUX ŒUFS DE POISSON",
      "BATATA-DOCE": "PATATE DOUCE",
      "BATATA FRITA": "FRITES",
      "OVO": "ŒUF",
      "LEGUMES": "LÉGUMES",
      "LEGUMES SALTEADOS": "LÉGUMES SAUTÉS",
      "SALADA": "SALADE",
      "SALADA DE PIMENTOS": "SALADE DE POIVRONS",
      "AZEITE E ALHO": "HUILE D’OLIVE ET AIL",
      "ESCABECHE": "ESCABÈCHE",
      "FÍGADOS": "FOIES",
      "VERDE": "SAUCE VERTE",
    },
    itemNotes: {
      "SARDINHA / ATUM": "SARDINE / THON",
      "3 QUEIJOS, DOCE, MARMELADA, NOZES, UVAS, TOSTAS": "3 FROMAGES, CONFITURE, PÂTE DE COING, NOIX, RAISINS, TOASTS",
      "2 PAX": "2 PERS.",
      "1 PAX": "1 PERS.",
      "3 PAX": "3 PERS.",
      "PREÇO SOB CONSULTA": "PRIX SUR DEMANDE",
      "+0,6KG": "+0,6 KG",
      "6 UN": "6 UNITÉS",
      "HALAL": "HALAL",
      "MATURADO 60 DIAS": "AFFINÉ 60 JOURS",
      "FRITO, COZIDO": "FRIT, CUIT",
    },
    itemUnits: { "UN": "UNITÉ", "/KG": "/KG", "KG": "KG" },
    itemDescriptions: {
      "AÇORDA CREMOSA DE PÃO ALENTEJANO, AZEITE, ALHO, COENTROS, OVO, CAMARÃO DE MOÇAMBIQUE E LISTADO FRITO": "AÇORDA CRÉMEUSE DE PAIN ALENTEJANO, HUILE D’OLIVE, AIL, CORIANDRE, ŒUF, CREVETTES DU MOZAMBIQUE ET CREVETTES RAYÉES FRITES",
      "ARROZ AGULHA COM CHERNE AOS CUBOS E AMÊIJOAS": "RIZ LONG AVEC MÉROU EN DÉS ET PALOURDES",
      "MISTO DE MARISCOS: BOCAS DE SAPATEIRA / CARANGUEJO, CAMARÃO, MEXILHÃO, AMÊIJOA, BERBIGÃO": "MÉLANGE DE FRUITS DE MER : PINCES DE TOURTEAU / CRABE, CREVETTES, MOULES, PALOURDES ET COQUES",
      "ARROZ AGULHA COM LAGOSTA / LAVAGANTE": "RIZ LONG AVEC LANGOUSTE / HOMARD",
      "CHERNE AOS CUBOS COM MASSA DE COTOVELINHOS": "MÉROU EN DÉS AVEC PÂTES COURTES",
      "REFOGADO DE TOMATE, CEBOLA E PIMENTO, COM MISTO DE PEIXES TÍPICOS DA CALDEIRADA": "BASE DE TOMATE, OIGNON ET POIVRON, AVEC UN MÉLANGE DE POISSONS TRADITIONNELS DE CALDEIRADA",
      "CHERNE COZIDO COM BATATAS, CEBOLA E PIMENTOS. PRATO RÚSTICO DE SETÚBAL": "MÉROU CUIT AVEC POMMES DE TERRE, OIGNON ET POIVRONS. PLAT RUSTIQUE DE SETÚBAL",
      "CAMARÃO FRITO, BATATA FRITA ÀS RODELAS, ARROZ BRANCO, OVO ESTRELADO": "CREVETTES FRITES, POMMES DE TERRE FRITES EN RONDELLES, RIZ BLANC ET ŒUF AU PLAT",
      "TIRAS DE CHOCO FRITAS EM POLME CROCANTE DE MILHO, BATATA FRITA, SALADA": "LAMELLES DE SEICHE FRITES DANS UNE PÂTE CROUSTILLANTE AU MAÏS, FRITES ET SALADE",
      "POSTA GRELHADA NO CARVÃO COM BATATA A MURRO": "TRANCHE GRILLÉE AU CHARBON AVEC POMMES DE TERRE ÉCRASÉES",
      "TENTÁCULOS DE POLVO GRELHADOS NO CARVÃO, BATATA A MURRO E GRELOS": "TENTACULES DE POULPE GRILLÉS AU CHARBON, POMMES DE TERRE ÉCRASÉES ET POUSSES DE NAVET",
      "CARNE DE PORCO FRITA EM MASSA DE PIMENTÃO COM AMÊIJOAS E BATATA FRITA": "PORC FRIT À LA PÂTE DE POIVRON AVEC PALOURDES ET FRITES",
      "COM BATATA COZIDA E SALADA": "AVEC POMMES DE TERRE CUITES ET SALADE",
    },
  },
  es: {
    sectionTitles: {
      "COUVERT": "COUVERT",
      "ENTRADAS": "ENTRANTES",
      "ENTRADAS QUENTES": "ENTRANTES CALIENTES",
      "ESPECIALIDADES": "ESPECIALIDADES",
      "PEIXE": "PESCADO",
      "À LAGAREIRO": "AL ESTILO LAGAREIRO",
      "MARISCO": "MARISCO",
      "CARNE": "CARNE",
      "VEGAN": "VEGANO",
      "SOPAS": "SOPAS",
      "ACOMPANHAMENTOS": "GUARNICIONES",
      "MOLHOS": "SALSAS",
    },
    itemNames: {
      "AZEITONAS": "ACEITUNAS",
      "MANTEIGA": "MANTEQUILLA",
      "PÃO": "PAN",
      "PÃO TORRADO COM MANTEIGA": "PAN TOSTADO CON MANTEQUILLA",
      "PATÉ": "PATÉ",
      "TÁBUA DE QUEIJOS": "TABLA DE QUESOS",
      "SALADA": "ENSALADA",
      "BATATA FRITA": "PATATAS FRITAS",
      "LEGUMES": "VERDURAS",
    },
    itemNotes: {
      "PREÇO SOB CONSULTA": "PRECIO BAJO CONSULTA",
      "FRITO, COZIDO": "FRITO, COCIDO",
    },
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
  it: {
    sectionTitles: {
      "COUVERT": "COPERTO",
      "ENTRADAS": "ANTIPASTI",
      "ENTRADAS QUENTES": "ANTIPASTI CALDI",
      "ESPECIALIDADES": "SPECIALITÀ",
      "PEIXE": "PESCE",
      "À LAGAREIRO": "ALLA LAGAREIRO",
      "MARISCO": "FRUTTI DI MARE",
      "CARNE": "CARNE",
      "VEGAN": "VEGANO",
      "SOPAS": "ZUPPE",
      "ACOMPANHAMENTOS": "CONTORNI",
      "MOLHOS": "SALSE",
    },
    itemNames: {},
    itemNotes: {
      "PREÇO SOB CONSULTA": "PREZZO SU RICHIESTA",
    },
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
  ar: {
    sectionTitles: {
      "COUVERT": "مقبلات المائدة",
      "ENTRADAS": "المقبلات",
      "ENTRADAS QUENTES": "المقبلات الساخنة",
      "ESPECIALIDADES": "الأطباق الخاصة",
      "PEIXE": "الأسماك",
      "À LAGAREIRO": "على طريقة لاغاريرو",
      "MARISCO": "المأكولات البحرية",
      "CARNE": "اللحوم",
      "VEGAN": "نباتي",
      "SOPAS": "الشوربات",
      "ACOMPANHAMENTOS": "الأطباق الجانبية",
      "MOLHOS": "الصلصات",
    },
    itemNames: {},
    itemNotes: {},
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
  de: {
    sectionTitles: {
      "COUVERT": "COUVERT",
      "ENTRADAS": "VORSPEISEN",
      "ENTRADAS QUENTES": "WARME VORSPEISEN",
      "ESPECIALIDADES": "SPEZIALITÄTEN",
      "PEIXE": "FISCH",
      "À LAGAREIRO": "NACH LAGAREIRO-ART",
      "MARISCO": "MEERESFRÜCHTE",
      "CARNE": "FLEISCH",
      "VEGAN": "VEGAN",
      "SOPAS": "SUPPEN",
      "ACOMPANHAMENTOS": "BEILAGEN",
      "MOLHOS": "SAUCEN",
    },
    itemNames: {},
    itemNotes: {
      "PREÇO SOB CONSULTA": "PREIS AUF ANFRAGE",
    },
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
  hi: {
    sectionTitles: {
      "COUVERT": "कूवर्ट",
      "ENTRADAS": "स्टार्टर",
      "ENTRADAS QUENTES": "गरम स्टार्टर",
      "ESPECIALIDADES": "विशेष व्यंजन",
      "PEIXE": "मछली",
      "À LAGAREIRO": "लागारेइरो शैली",
      "MARISCO": "समुद्री भोजन",
      "CARNE": "मांस",
      "VEGAN": "वीगन",
      "SOPAS": "सूप",
      "ACOMPANHAMENTOS": "साइड डिश",
      "MOLHOS": "सॉस",
    },
    itemNames: {},
    itemNotes: {},
    itemUnits: itemUnitTranslations,
    itemDescriptions: {},
  },
}


const fishSummaryCopy: Record<LanguageKey, {
  title: string
  paragraphs: string[]
  notice: string[]
  priceNotes: string[]
}> = {
  pt: {
    title: "O NOSSO PEIXE",
    paragraphs: [
      "No Senhor Peixe, cada peixe é escolhido diariamente com rigor, de acordo com a sazonalidade e a melhor qualidade disponível na lota.",
      "Trabalhamos com peixe inteiro, preparado no momento e confecionado de forma simples e cuidada, seja grelhado no carvão ou em receitas tradicionais, para valorizar o sabor natural do mar.",
      "Para sugestões, pesos disponíveis ou recomendações de confeção, a nossa equipa terá todo o gosto em aconselhar.",
    ],
    notice: [
      "A NOSSA OFERTA DE PEIXE FRESCO DEPENDE DA DISPONIBILIDADE DO DIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.",
      "OUR FRESH FISH SELECTION DEPENDS ON THE DAY’S AVAILABILITY. THIS ONLINE MENU MIGHT NOT BE THE CURRENT VERSION.",
    ],
    priceNotes: [
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR",
      "PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    ],
  },
  en: {
    title: "OUR FISH",
    paragraphs: [
      "At Senhor Peixe, each fish is carefully selected every day, according to seasonality and the best quality available at the fish market.",
      "We work with whole fish, prepared to order and cooked simply and carefully, whether charcoal-grilled or in traditional recipes, to highlight the natural flavour of the sea.",
      "For suggestions, available weights or preparation recommendations, our team will be delighted to advise you.",
    ],
    notice: [
      "OUR FRESH FISH SELECTION DEPENDS ON THE DAY’S AVAILABILITY. THIS ONLINE MENU MIGHT NOT BE THE CURRENT VERSION.",
      "A NOSSA OFERTA DE PEIXE FRESCO DEPENDE DA DISPONIBILIDADE DO DIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO EM VIGOR.",
    ],
    priceNotes: [
      "PRICE IN €, INCLUDES VAT AT THE CURRENT LEGAL RATE",
      "PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE | PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ",
    ],
  },
  zh: {
    title: "我们的鲜鱼",
    paragraphs: [
      "在 Senhor Peixe，每一条鱼都根据季节和当天鱼市供应的最佳品质严格挑选。",
      "我们使用整鱼，现点现制，以炭火烧烤或传统做法简单细致地烹调，突出海洋本味。",
      "如需建议、了解当日重量或烹调方式，我们的团队很乐意为您提供帮助。",
    ],
    notice: [
      "我们的鲜鱼供应取决于当天可获得的食材。线上菜单可能不是当前使用版本。",
      "我们的鲜鱼供应取决于当天可获得的食材。线上菜单可能不是当前使用版本。",
    ],
    priceNotes: ["价格以 € 标示，已含现行法定增值税", "价格以 € 标示，已含现行法定增值税"],
  },
  ru: {
    title: "НАША РЫБА",
    paragraphs: [
      "В Senhor Peixe каждая рыба ежедневно тщательно отбирается с учетом сезонности и лучшего качества, доступного на рыбном рынке.",
      "Мы работаем с целой рыбой, готовим ее на заказ просто и аккуратно — на углях или по традиционным рецептам, чтобы подчеркнуть натуральный вкус моря.",
      "Наша команда с удовольствием поможет с рекомендациями, доступным весом и способом приготовления.",
    ],
    notice: [
      "НАШ ВЫБОР СВЕЖЕЙ РЫБЫ ЗАВИСИТ ОТ НАЛИЧИЯ В КОНКРЕТНЫЙ ДЕНЬ. ОНЛАЙН-МЕНЮ МОЖЕТ НЕ БЫТЬ АКТУАЛЬНОЙ ВЕРСИЕЙ.",
      "НАШ ВЫБОР СВЕЖЕЙ РЫБЫ ЗАВИСИТ ОТ НАЛИЧИЯ В ДАННЫЙ ДЕНЬ. ОНЛАЙН-МЕНЮ МОЖЕТ НЕ ЯВЛЯТЬСЯ АКТУАЛЬНОЙ ВЕРСИЕЙ.",
    ],
    priceNotes: ["ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ", "ЦЕНЫ В €, ВКЛЮЧАЮТ НДС ПО ДЕЙСТВУЮЩЕЙ СТАВКЕ"],
  },
  fr: {
    title: "NOTRE POISSON",
    paragraphs: [
      "Au Senhor Peixe, chaque poisson est sélectionné chaque jour avec rigueur, selon la saisonnalité et la meilleure qualité disponible à la criée.",
      "Nous travaillons le poisson entier, préparé au moment et cuisiné avec simplicité et soin, au charbon ou selon des recettes traditionnelles, afin de valoriser le goût naturel de la mer.",
      "Pour les suggestions, les poids disponibles ou les conseils de cuisson, notre équipe se fera un plaisir de vous conseiller.",
    ],
    notice: [
      "NOTRE SÉLECTION DE POISSON FRAIS DÉPEND DE LA DISPONIBILITÉ DU JOUR. LA CARTE EN LIGNE PEUT NE PAS ÊTRE LA VERSION EN VIGUEUR.",
      "NOTRE SÉLECTION DE POISSON FRAIS DÉPEND DE LA DISPONIBILITÉ DU JOUR. CETTE CARTE EN LIGNE PEUT NE PAS ÊTRE LA VERSION EN VIGUEUR.",
    ],
    priceNotes: ["PRIX EN €, AVEC LA TVA AU TAUX LÉGAL EN VIGUEUR", "PRIX EN €, AVEC LA TVA AU TAUX LÉGAL EN VIGUEUR"],
  },
  es: {
    title: "NUESTRO PESCADO",
    paragraphs: [
      "En Senhor Peixe, cada pescado se selecciona diariamente con rigor, según la temporada y la mejor calidad disponible en la lonja.",
      "Trabajamos con pescado entero, preparado al momento y cocinado de forma sencilla y cuidada, a la brasa o en recetas tradicionales, para realzar el sabor natural del mar.",
      "Para sugerencias, pesos disponibles o recomendaciones de preparación, nuestro equipo estará encantado de aconsejarle.",
    ],
    notice: [
      "NUESTRA OFERTA DE PESCADO FRESCO DEPENDE DE LA DISPONIBILIDAD DEL DÍA. LA CARTA ONLINE PUEDE NO SER LA VERSIÓN VIGENTE.",
      "NUESTRA SELECCIÓN DE PESCADO FRESCO DEPENDE DE LA DISPONIBILIDAD DEL DÍA. ESTA CARTA ONLINE PUEDE NO SER LA VERSIÓN VIGENTE.",
    ],
    priceNotes: ["PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE", "PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE"],
  },
  it: {
    title: "IL NOSTRO PESCE",
    paragraphs: [
      "Da Senhor Peixe, ogni pesce viene scelto quotidianamente con rigore, secondo la stagionalità e la migliore qualità disponibile al mercato del pesce.",
      "Lavoriamo con pesce intero, preparato al momento e cucinato in modo semplice e curato, alla brace o con ricette tradizionali, per valorizzare il sapore naturale del mare.",
      "Per suggerimenti, pesi disponibili o consigli di preparazione, il nostro team sarà lieto di assistervi.",
    ],
    notice: [
      "LA NOSTRA OFFERTA DI PESCE FRESCO DIPENDE DALLA DISPONIBILITÀ DEL GIORNO. IL MENÙ ONLINE POTREBBE NON ESSERE LA VERSIONE IN VIGORE.",
      "LA NOSTRA SELEZIONE DI PESCE FRESCO DIPENDE DALLA DISPONIBILITÀ DEL GIORNO. QUESTO MENÙ ONLINE POTREBBE NON ESSERE LA VERSIONE IN VIGORE.",
    ],
    priceNotes: ["PREZZI IN €, IVA INCLUSA ALL’ALIQUOTA LEGALE VIGENTE", "PREZZI IN €, IVA INCLUSA ALL’ALIQUOTA LEGALE VIGENTE"],
  },
  ar: {
    title: "أسماكنا",
    paragraphs: [
      "في Senhor Peixe، يتم اختيار كل سمكة يوميًا بعناية، وفقًا للموسمية وأفضل جودة متوفرة في سوق السمك.",
      "نعمل بالسمك الكامل، يُحضّر عند الطلب ويُطهى ببساطة وعناية، سواء على الفحم أو بوصفات تقليدية، لإبراز النكهة الطبيعية للبحر.",
      "للاقتراحات أو الأوزان المتوفرة أو توصيات الطهي، سيكون فريقنا سعيدًا بتقديم المشورة.",
    ],
    notice: [
      "يعتمد توفر الأسماك الطازجة لدينا على المتاح في اليوم. قد لا تكون القائمة عبر الإنترنت هي النسخة المعمول بها.",
      "يعتمد اختيارنا من الأسماك الطازجة على توفر اليوم. قد لا تكون هذه القائمة الإلكترونية هي النسخة المعمول بها حالياً.",
    ],
    priceNotes: ["الأسعار باليورو € وتشمل ضريبة القيمة المضافة حسب السعر القانوني الحالي", "الأسعار باليورو € وتشمل ضريبة القيمة المضافة حسب السعر القانوني الحالي"],
  },
  de: {
    title: "UNSER FISCH",
    paragraphs: [
      "Im Senhor Peixe wird jeder Fisch täglich sorgfältig ausgewählt, je nach Saison und der besten auf dem Fischmarkt verfügbaren Qualität.",
      "Wir arbeiten mit ganzem Fisch, der im Moment vorbereitet und schlicht sowie sorgfältig zubereitet wird — auf Holzkohle gegrillt oder nach traditionellen Rezepten, um den natürlichen Geschmack des Meeres hervorzuheben.",
      "Für Empfehlungen, verfügbare Gewichte oder Hinweise zur Zubereitung berät Sie unser Team sehr gerne.",
    ],
    notice: [
      "UNSER ANGEBOT AN FRISCHEM FISCH HÄNGT VON DER TAGESVERFÜGBARKEIT AB. DIE ONLINE-KARTE IST MÖGLICHERWEISE NICHT DIE AKTUELLE VERSION.",
      "UNSERE AUSWAHL AN FRISCHEM FISCH HÄNGT VON DER TAGESVERFÜGBARKEIT AB. DIESE ONLINE-KARTE IST MÖGLICHERWEISE NICHT DIE AKTUELLE VERSION.",
    ],
    priceNotes: ["PREISE IN €, INKLUSIVE MWST. ZUM GELTENDEN GESETZLICHEN SATZ", "PREISE IN €, INKLUSIVE MWST. ZUM GELTENDEN GESETZLICHEN SATZ"],
  },
  hi: {
    title: "हमारी मछली",
    paragraphs: [
      "Senhor Peixe में हर मछली रोज़ सावधानी से चुनी जाती है, मौसम और मछली बाज़ार में उपलब्ध सर्वोत्तम गुणवत्ता के अनुसार।",
      "हम पूरी मछली के साथ काम करते हैं, जिसे ऑर्डर के समय तैयार किया जाता है और सरल, सावधानीपूर्ण तरीके से पकाया जाता है — चाहे कोयले पर ग्रिल हो या पारंपरिक व्यंजन, ताकि समुद्र का प्राकृतिक स्वाद निखरे।",
      "सुझाव, उपलब्ध वजन या पकाने की सलाह के लिए हमारी टीम खुशी से मार्गदर्शन करेगी।",
    ],
    notice: [
      "हमारी ताज़ी मछली की उपलब्धता दिन की आपूर्ति पर निर्भर करती है। ऑनलाइन मेनू वर्तमान संस्करण नहीं भी हो सकता है।",
      "हमारी ताज़ी मछली की उपलब्धता दिन के अनुसार बदलती है। यह ऑनलाइन मेनू वर्तमान संस्करण न भी हो सकता है।",
    ],
    priceNotes: ["कीमतें € में हैं, वर्तमान कानूनी दर पर वैट शामिल है", "कीमतें € में हैं, वर्तमान कानूनी दर पर वैट शामिल है"],
  },
}

function normalizeLanguage(language: string): LanguageKey {
  if (language === "zh-CN" || language === "zh_TW" || language === "zh-TW" || language === "mandarin") return "zh"
  if (language === "es-ES" || language === "es") return "es"
  if (language === "fr-FR" || language === "fr") return "fr"
  if (language === "de-DE" || language === "de") return "de"
  if (language === "it-IT" || language === "it") return "it"
  if (language === "ru-RU" || language === "ru") return "ru"
  if (language === "ar-SA" || language === "ar") return "ar"
  if (language === "hi-IN" || language === "hi") return "hi"
  if (language === "en-US" || language === "en-GB" || language === "en") return "en"
  return "pt"
}


function translateText(value: string | undefined, dictionary?: Record<string, string>) {
  if (!value || !dictionary) return value
  return dictionary[value] ?? value
}

function translateSections(sections: Section[], languageKey: LanguageKey): Section[] {
  if (languageKey === "pt") return sections

  const dictionaries = translationDictionaries[languageKey] ?? translationDictionaries.en

  return sections.map((section) => ({
    ...section,
    title: translateText(section.title, dictionaries.sectionTitles) ?? section.title,
    subtitle: translateText(section.subtitle, dictionaries.sectionTitles),
    unitLabel: translateText(section.unitLabel, dictionaries.itemUnits),
    items: section.items.map((item) => ({
      ...item,
      name: translateText(item.name, dictionaries.itemNames) ?? item.name,
      note: translateText(item.note, dictionaries.itemNotes),
      unit: translateText(item.unit, dictionaries.itemUnits),
      description: translateText(item.description, dictionaries.itemDescriptions),
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
  copy,
  dense = false,
  fish = false,
  shellfish = false,
  sides = false,
  finalNotes = false,
  showLegal = true,
}: {
  sections: Section[]
  copy: (typeof pageCopy)[LanguageKey]
  dense?: boolean
  fish?: boolean
  shellfish?: boolean
  sides?: boolean
  finalNotes?: boolean
  showLegal?: boolean
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
        ) : showLegal ? (
          <footer className="sp-legal">
            <EuroText text={copy.legalNote} />
          </footer>
        ) : (
          <footer className="sp-legal sp-legal-placeholder" aria-hidden="true">
            &nbsp;
          </footer>
        )}
      </div>
    </section>
  )
}


const indexEntries = [
  { label: "Couvert", detail: "Entradas · Entradas quentes" },
  { label: "Especialidades", detail: "Mar · Terra" },
  { label: "Peixe", detail: "Kg · À Lagareiro" },
  { label: "Marisco", detail: "Carne · Vegan" },
  { label: "Sopas", detail: "Acompanhamentos · Molhos" },
]

function MenuIndexPage() {
  return (
    <section className="sp-page sp-menu-page sp-index-page">
      <PremiumFrame />

      <div className="sp-index-content">
        <MenuHeader />

        <div className="sp-index-title-block">
          <div className="sp-index-title-line" />
          <h2 className={playfair.className}>Índice</h2>
          <p className={cinzel.className}>Carta de Gastronomia</p>
        </div>

        <div className="sp-index-list">
          {indexEntries.map((entry, index) => (
            <div className="sp-index-entry" key={entry.label}>
              <span className={`sp-index-number ${playfair.className}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="sp-index-entry-copy">
                <h3 className={cinzel.className}>{entry.label}</h3>
                <p>{entry.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <Ornament />
      </div>
    </section>
  )
}


function FishSummaryPage({ languageKey }: { languageKey: LanguageKey }) {
  const summary = fishSummaryCopy[languageKey] ?? fishSummaryCopy.pt

  return (
    <section className="sp-page sp-menu-page sp-fish-summary-page">
      <PremiumFrame />

      <div className="sp-summary-content">
        <h2 className={`sp-summary-title ${cinzel.className}`}>{summary.title}</h2>

        <div className="sp-summary-title-line" />

        <div className="sp-summary-text">
          {summary.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={`sp-summary-notice ${cinzel.className}`}>
          {summary.notice.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>

        <div className={`sp-summary-prices ${cinzel.className}`}>
          {summary.priceNotes.map((note) => (
            <p key={note}>
              <EuroText text={note} />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CartaGastronomiaPage() {
  const { language } = useLanguage()
  const languageKey = normalizeLanguage(language)
  const copy = pageCopy[languageKey]

  return (
    <main className={`sp-shell ${cormorant.className}`} dir={languageKey === "ar" ? "rtl" : "ltr"}>
      <Link href="/gastronomia" className="sp-back-link">
        {copy.backLabel}
      </Link>

      <section className="sp-page sp-cover-image-only">
        <img
          src="/senhor-peixe-capa.png"
          alt={copy.coverAlt}
          className="sp-cover-full-image"
        />
      </section>


      <MenuPage sections={translateSections(couvertSections, languageKey)} copy={copy} showLegal={false} />
      <MenuPage sections={translateSections(especialidadesSections, languageKey)} copy={copy} dense showLegal={false} />
      <MenuPage sections={translateSections(peixesSections, languageKey)} copy={copy} fish showLegal={false} />
      <MenuPage sections={translateSections(mariscoSections, languageKey)} copy={copy} shellfish showLegal={false} />
      <MenuPage sections={translateSections(sopasSections, languageKey)} copy={copy} sides finalNotes />
      <FishSummaryPage languageKey={languageKey} />

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
          background: transparent;
          overflow: hidden;
        }

        .sp-cover-full-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sp-menu-frame-image {
          transform: translate3d(0, -2px, 0);
        }

        .sp-menu-page {
          background: var(--sp-paper);
          color: var(--sp-ink);
        }

        .sp-index-page {
          background:
            radial-gradient(circle at 50% 10%, rgba(197, 154, 97, 0.08), transparent 34%),
            var(--sp-paper);
          color: var(--sp-ink);
        }

        .sp-index-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 54px 112px 36px;
        }

        .sp-index-title-block {
          margin-top: 20px;
          text-align: center;
        }

        .sp-index-title-line {
          width: 58px;
          height: 1px;
          margin: 0 auto 22px;
          background: linear-gradient(to right, transparent, var(--sp-gold-bright), transparent);
        }

        .sp-index-title-block h2 {
          margin: 0;
          color: var(--sp-gold);
          font-size: 56px;
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .sp-index-title-block p {
          margin: 20px 0 0;
          color: var(--sp-ink);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sp-index-list {
          width: 100%;
          margin: 82px auto 0;
          padding: 0 30px;
        }

        .sp-index-entry {
          display: grid;
          grid-template-columns: 82px 1fr;
          gap: 18px;
          align-items: center;
          min-height: 86px;
          border-bottom: 1px solid rgba(197, 154, 97, 0.58);
        }

        .sp-index-entry:first-child {
          border-top: 1px solid rgba(197, 154, 97, 0.58);
        }

        .sp-index-number {
          color: var(--sp-gold);
          font-size: 27px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.05em;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-index-entry-copy h3 {
          margin: 0;
          color: var(--sp-ink);
          font-size: 25px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .sp-index-entry-copy p {
          margin: 9px 0 0;
          color: #415b78;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }

        .sp-index-page .sp-ornament {
          margin-top: auto;
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
          filter: brightness(0) saturate(100%) invert(14%) sepia(50%)
            saturate(1200%) hue-rotate(179deg) brightness(88%) contrast(97%);
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
          background: linear-gradient(
            to right,
            transparent,
            rgba(197, 154, 97, 0.78),
            transparent
          );
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
          background-image: linear-gradient(
            to right,
            rgba(18, 56, 92, 0.48) 35%,
            transparent 0%
          );
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
        .sp-dense-page .sp-description,
        .sp-fish-page .sp-description,
        .sp-shellfish-page .sp-description,
        .sp-sides-page .sp-description {
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
          color: var(--sp-ink-soft);
          font-size: 7.1px;
          font-weight: 500;
          line-height: 1.26;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
        }

        .sp-item-wrap.sp-section-note-wrap {
          margin-top: 8px;
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


        .sp-fish-summary-page {
          background: var(--sp-paper);
          color: var(--sp-ink);
        }

        .sp-summary-content {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 100%;
          padding: 112px 98px 54px;
          text-align: center;
        }

        .sp-summary-title {
          margin: 72px 0 0;
          color: #0e3157;
          font-size: 28px;
          line-height: 1;
          letter-spacing: 0.22em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .sp-summary-title-line {
          width: 100%;
          max-width: none;
          height: 1px;
          background: #b68b4c;
          margin: 48px auto 0;
        }

        .sp-summary-text {
          max-width: 660px;
          margin: 70px auto 0;
          color: #0e3157;
          font-size: 17px;
          line-height: 1.58;
          font-weight: 500;
        }

        .sp-summary-text p {
          margin: 0 0 42px;
        }

        .sp-summary-text p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-notice {
          margin: 64px auto 0;
          padding: 22px 18px;
          border-top: 1px solid #b68b4c;
          border-bottom: 1px solid #b68b4c;
          max-width: 760px;
        }

        .sp-summary-notice p {
          margin: 0 0 18px;
          color: #0e3157;
          font-size: 13px;
          line-height: 1.35;
          letter-spacing: 1.4px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .sp-summary-notice p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-prices {
          width: 100%;
          max-width: 780px;
          margin: 48px auto 0;
          text-align: center;
        }

        .sp-summary-prices p {
          margin: 0 0 10px;
          color: #0e3157;
          font-size: 11.5px;
          line-height: 1.35;
          letter-spacing: 0.35px;
          font-weight: 700;
          text-transform: uppercase;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: "lnum" 1, "tnum" 1;
        }

        .sp-summary-prices p:last-child {
          margin-bottom: 0;
          color: #5f7188;
          font-size: 10.4px;
          line-height: 1.35;
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

        .sp-legal-placeholder {
          opacity: 0;
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
          transform: translateY(-16px);
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

          .sp-menu-content,
          .sp-fish-page .sp-menu-content,
          .sp-shellfish-page .sp-menu-content,
          .sp-sides-page .sp-menu-content {
            padding: 6.4vw 13.3vw 4.3vw;
          }

          .sp-index-content {
            padding: 6.4vw 13.3vw 4.3vw;
          }

          .sp-index-title-block {
            margin-top: 2.4vw;
          }

          .sp-index-title-line {
            width: 7vw;
            margin-bottom: 2.7vw;
          }

          .sp-index-title-block h2 {
            font-size: 6.65vw;
          }

          .sp-index-title-block p {
            margin-top: 2.4vw;
            font-size: 1.54vw;
            letter-spacing: 0.14em;
          }

          .sp-index-list {
            margin-top: 9.75vw;
            padding: 0 3.55vw;
          }

          .sp-index-entry {
            grid-template-columns: 9.72vw 1fr;
            gap: 2.14vw;
            min-height: 10.2vw;
          }

          .sp-index-number {
            font-size: 3.2vw;
          }

          .sp-index-entry-copy h3 {
            font-size: 2.96vw;
          }

          .sp-index-entry-copy p {
            margin-top: 1.07vw;
            font-size: 1.78vw;
          }


          .sp-menu-logo,
          .sp-fish-page .sp-menu-logo,
          .sp-shellfish-page .sp-menu-logo,
          .sp-sides-page .sp-menu-logo {
            width: 8.5vw;
            margin-bottom: 0.85vw;
          }

          .sp-menu-header h1,
          .sp-fish-page .sp-menu-header h1,
          .sp-shellfish-page .sp-menu-header h1,
          .sp-sides-page .sp-menu-header h1 {
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

          .sp-sections,
          .sp-dense-page .sp-sections,
          .sp-fish-page .sp-sections,
          .sp-shellfish-page .sp-sections,
          .sp-sides-page .sp-sections {
            padding-top: 5.7vw;
            padding-bottom: 1.6vw;
          }

          .sp-menu-section + .sp-menu-section,
          .sp-fish-page .sp-menu-section + .sp-menu-section,
          .sp-shellfish-page .sp-menu-section + .sp-menu-section,
          .sp-sides-page .sp-menu-section + .sp-menu-section {
            margin-top: 2.85vw;
          }

          .sp-section-title,
          .sp-fish-page .sp-section-title,
          .sp-shellfish-page .sp-section-title,
          .sp-sides-page .sp-section-title {
            margin-bottom: 1.3vw;
          }

          .sp-section-title h2,
          .sp-fish-page .sp-section-title h2,
          .sp-shellfish-page .sp-section-title h2,
          .sp-sides-page .sp-section-title h2 {
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

          .sp-item,
          .sp-item-compact,
          .sp-dense-page .sp-item,
          .sp-fish-page .sp-item,
          .sp-shellfish-page .sp-item,
          .sp-sides-page .sp-item,
          .sp-shellfish-page .sp-menu-section:first-child .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(2) .sp-item,
          .sp-shellfish-page .sp-menu-section:nth-child(3) .sp-item {
            font-size: 1.5vw;
            line-height: 1.2;
            letter-spacing: 0.105em;
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
            margin-top: 0.48vw;
          }

          .sp-item-wrap-no-price {
            margin-top: 1.2vw;
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

          .sp-price,
          .sp-fish-page .sp-price,
          .sp-shellfish-page .sp-price,
          .sp-sides-page .sp-price {
            flex-basis: 4.05vw;
            min-width: 4.05vw;
          }

          .sp-description,
          .sp-dense-page .sp-description,
          .sp-fish-page .sp-description,
          .sp-shellfish-page .sp-description,
          .sp-sides-page .sp-description,
          .sp-section-note {
            font-size: 0.84vw;
            line-height: 1.26;
            letter-spacing: 0.08em;
          }

          .sp-has-description {
            margin-bottom: 0.95vw;
          }

          .sp-item-wrap.sp-section-note-wrap {
            margin-top: 0.95vw;
          }

  
          .sp-fish-summary-page {
            background: var(--sp-paper);
            color: var(--sp-ink);
          }

          .sp-summary-content {
            padding: 13.25vw 10.98vw 6.04vw;
          }

          .sp-summary-title {
            margin-top: 8.06vw;
            font-size: 3.13vw;
            letter-spacing: 0.69vw;
          }

          .sp-summary-title-line {
            margin-top: 5.37vw;
          }

          .sp-summary-text {
            max-width: 61.63vw;
            margin-top: 7.83vw;
            font-size: 1.9vw;
            line-height: 1.58;
          }

          .sp-summary-text p {
            margin-bottom: 4.7vw;
          }

          .sp-summary-notice {
            margin-top: 7.16vw;
            padding: 2.69vw 2.01vw;
            max-width: 71.1vw;
          }

          .sp-summary-notice p {
            margin-bottom: 2.24vw;
            font-size: 1.45vw;
            letter-spacing: 0.16vw;
          }

          .sp-summary-prices {
            max-width: 73.5vw;
            margin-top: 5.37vw;
          }

          .sp-summary-prices p {
            margin-bottom: 1.12vw;
            font-size: 1.29vw;
          }

          .sp-summary-prices p:last-child {
            font-size: 1.14vw;
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
            transform: translateY(-1.9vw);
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