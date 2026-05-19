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
      {
        name: "AÇORDA DE CAMARÃO",
        note: "1 PAX",
        price: "24",
        description:
          "AÇORDA CREMOSA DE PÃO ALENTEJANO, AZEITE, ALHO, COENTROS, OVO, CAMARÃO DE MOÇAMBIQUE E LISTADO FRITO",
      },
      { name: "AÇORDA DE CAMARÃO", note: "2 PAX", price: "46" },
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

function translateText(value: string | undefined, dictionary: Record<string, string>, shouldTranslate: boolean) {
  if (!value || !shouldTranslate) return value
  return dictionary[value] ?? value
}

function translateSections(sections: Section[], shouldTranslate: boolean): Section[] {
  if (!shouldTranslate) return sections

  return sections.map((section) => ({
    ...section,
    title: translateText(section.title, sectionTitleTranslations, true) ?? section.title,
    subtitle: translateText(section.subtitle, sectionTitleTranslations, true),
    unitLabel: translateText(section.unitLabel, itemUnitTranslations, true),
    items: section.items.map((item) => ({
      ...item,
      name: translateText(item.name, itemNameTranslations, true) ?? item.name,
      note: translateText(item.note, itemNoteTranslations, true),
      unit: translateText(item.unit, itemUnitTranslations, true),
      description: translateText(item.description, itemDescriptionTranslations, true),
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
}: {
  sections: Section[]
  copy: (typeof pageCopy)["pt"] | (typeof pageCopy)["en"]
  dense?: boolean
  fish?: boolean
  shellfish?: boolean
  sides?: boolean
  finalNotes?: boolean
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
        ) : (
          <footer className="sp-legal">
            <EuroText text={copy.legalNote} />
          </footer>
        )}
      </div>
    </section>
  )
}


function FishSummaryPage() {
  return (
    <section className="sp-page sp-menu-page sp-fish-summary-page">
      <PremiumFrame />

      <div className="sp-summary-content">
        <h2 className={`sp-summary-title ${cinzel.className}`}>O NOSSO PEIXE</h2>

        <div className="sp-summary-title-line" />

        <div className="sp-summary-text">
          <p>
            No Senhor Peixe, cada peixe é escolhido diariamente com rigor, de acordo com a sazonalidade e a melhor
            qualidade disponível na lota.
          </p>

          <p>
            Trabalhamos com peixe inteiro, preparado no momento e confecionado de forma simples e cuidada, seja
            grelhado no carvão ou em receitas tradicionais, para valorizar o sabor natural do mar.
          </p>

          <p>
            Para sugestões, pesos disponíveis ou recomendações de confeção, a nossa equipa terá todo o gosto em
            aconselhar.
          </p>
        </div>

        <div className={`sp-summary-notice ${cinzel.className}`}>
          <p>
            A NOSSA OFERTA DE PEIXE FRESCO DEPENDE DA DISPONIBILIDADE DO DIA. A CARTA ONLINE PODERÁ NÃO SER A VERSÃO
            EM VIGOR.
          </p>
          <p>
            OUR FRESH FISH SELECTION DEPENDS ON THE DAY’S AVAILABILITY. THIS ONLINE MENU MIGHT NOT BE THE CURRENT
            VERSION.
          </p>
        </div>

        <div className={`sp-summary-prices ${cinzel.className}`}>
          <p>PREÇO EM €, INCLUI IVA À TAXA LEGAL EM VIGOR</p>
          <p>
            PRICES IN €, INCLUDE VAT AT THE CURRENT LEGAL RATE | PRECIOS EN €, INCLUYEN IVA AL TIPO LEGAL VIGENTE |
            PRIX EN €, AVEC LA TVA AU TAUX EN VIGUEUR | PREISE IN € INKLUSIVE MWST. ZUM GELTENDEN SATZ
          </p>
        </div>
      </div>
    </section>
  )
}

export default function CartaGastronomiaPage() {
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const copy = isEnglish ? pageCopy.en : pageCopy.pt

  return (
    <main className={`sp-shell ${cormorant.className}`}>
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

      <MenuPage sections={translateSections(couvertSections, isEnglish)} copy={copy} />
      <MenuPage sections={translateSections(especialidadesSections, isEnglish)} copy={copy} dense />
      <MenuPage sections={translateSections(peixesSections, isEnglish)} copy={copy} fish />
      <FishSummaryPage />
      <MenuPage sections={translateSections(mariscoSections, isEnglish)} copy={copy} shellfish />
      <MenuPage sections={translateSections(sopasSections, isEnglish)} copy={copy} sides finalNotes />

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
          height: 100%;
          padding: 76px 98px 54px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sp-summary-title {
          margin: 54px 0 0;
          color: var(--sp-site-blue);
          font-size: 28px;
          line-height: 1;
          letter-spacing: 0.22em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .sp-summary-title-line {
          width: 100%;
          max-width: 640px;
          height: 1px;
          background: rgba(197, 154, 97, 0.9);
          margin: 44px auto 0;
        }

        .sp-summary-text {
          max-width: 520px;
          margin: 56px auto 0;
          color: var(--sp-ink);
          font-size: 17px;
          line-height: 1.58;
          font-weight: 500;
        }

        .sp-summary-text p {
          margin: 0 0 34px;
        }

        .sp-summary-text p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-notice {
          width: 100%;
          max-width: 600px;
          margin: 46px auto 0;
          padding: 24px 18px;
          border-top: 1px solid rgba(197, 154, 97, 0.9);
          border-bottom: 1px solid rgba(197, 154, 97, 0.9);
        }

        .sp-summary-notice p {
          margin: 0 0 20px;
          color: var(--sp-site-blue);
          font-size: 13px;
          line-height: 1.35;
          letter-spacing: 0.11em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .sp-summary-notice p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-prices {
          width: 100%;
          max-width: 620px;
          margin: 34px auto 0;
          text-align: center;
        }

        .sp-summary-prices p {
          margin: 0 0 10px;
          color: var(--sp-site-blue);
          font-size: 11.5px;
          line-height: 1.35;
          letter-spacing: 0.035em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .sp-summary-prices p:last-child {
          margin-bottom: 0;
          color: #617287;
          font-size: 10.2px;
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
          position: relative;
          z-index: 1;
          height: 100%;
          padding: 76px 98px 54px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sp-summary-title {
          margin: 54px 0 0;
          color: var(--sp-site-blue);
          font-size: 28px;
          line-height: 1;
          letter-spacing: 0.22em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .sp-summary-title-line {
          width: 100%;
          max-width: 640px;
          height: 1px;
          background: rgba(197, 154, 97, 0.9);
          margin: 44px auto 0;
        }

        .sp-summary-text {
          max-width: 520px;
          margin: 56px auto 0;
          color: var(--sp-ink);
          font-size: 17px;
          line-height: 1.58;
          font-weight: 500;
        }

        .sp-summary-text p {
          margin: 0 0 34px;
        }

        .sp-summary-text p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-notice {
          width: 100%;
          max-width: 600px;
          margin: 46px auto 0;
          padding: 24px 18px;
          border-top: 1px solid rgba(197, 154, 97, 0.9);
          border-bottom: 1px solid rgba(197, 154, 97, 0.9);
        }

        .sp-summary-notice p {
          margin: 0 0 20px;
          color: var(--sp-site-blue);
          font-size: 13px;
          line-height: 1.35;
          letter-spacing: 0.11em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .sp-summary-notice p:last-child {
          margin-bottom: 0;
        }

        .sp-summary-prices {
          width: 100%;
          max-width: 620px;
          margin: 34px auto 0;
          text-align: center;
        }

        .sp-summary-prices p {
          margin: 0 0 10px;
          color: var(--sp-site-blue);
          font-size: 11.5px;
          line-height: 1.35;
          letter-spacing: 0.035em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .sp-summary-prices p:last-child {
          margin-bottom: 0;
          color: #617287;
          font-size: 10.2px;
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