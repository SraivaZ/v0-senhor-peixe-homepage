"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

const translations = {
  pt: {
    pageTitle: "Garrafeira",
    pageSubtitle: "Uma seleção criteriosa pensada para acompanhar cada momento à mesa.",
    wineSelection: "Seleção de vinhos",
    wineListTitle: "Carta de Vinhos",
    wineListDescription:
      "Uma carta pensada para acompanhar a nossa cozinha, com referências nacionais cuidadosamente selecionadas.",
    wineTextOne:
      "Da frescura dos brancos às notas mais profundas dos tintos, a nossa garrafeira foi criada para valorizar o peixe, o marisco e os sabores tradicionais da cozinha portuguesa.",
    wineTextTwo:
      "Aqui pode consultar a nossa carta de vinhos completa, com todas as referências disponíveis.",
    openCarta: "Abrir carta",
    footer: "Senhor Peixe — Desde 1999",
  },
  en: {
    pageTitle: "Wine Cellar",
    pageSubtitle: "A carefully curated selection designed to accompany every moment at the table.",
    wineSelection: "Wine selection",
    wineListTitle: "Wine List",
    wineListDescription:
      "A wine list designed to complement our cuisine, with carefully selected Portuguese references.",
    wineTextOne:
      "From the freshness of whites to the deeper notes of reds, our wine cellar was created to enhance fish, seafood and the traditional flavours of Portuguese cuisine.",
    wineTextTwo:
      "Here you can view our complete wine list, with all available references.",
    openCarta: "Open list",
    footer: "Senhor Peixe — Since 1999",
  },
  es: {
    pageTitle: "Bodega",
    pageSubtitle: "Una selección cuidada pensada para acompañar cada momento en la mesa.",
    wineSelection: "Selección de vinos",
    wineListTitle: "Carta de Vinos",
    wineListDescription:
      "Una carta pensada para acompañar nuestra cocina, con referencias portuguesas cuidadosamente seleccionadas.",
    wineTextOne:
      "Desde la frescura de los blancos hasta las notas más profundas de los tintos, nuestra bodega fue creada para realzar el pescado, el marisco y los sabores tradicionales de la cocina portuguesa.",
    wineTextTwo:
      "Aquí puede consultar nuestra carta de vinos completa, con todas las referencias disponibles.",
    openCarta: "Abrir carta",
    footer: "Senhor Peixe — Desde 1999",
  },
  fr: {
    pageTitle: "Cave à Vins",
    pageSubtitle: "Une sélection rigoureuse pensée pour accompagner chaque moment à table.",
    wineSelection: "Sélection de vins",
    wineListTitle: "Carte des Vins",
    wineListDescription:
      "Une carte pensée pour accompagner notre cuisine, avec des références portugaises soigneusement sélectionnées.",
    wineTextOne:
      "De la fraîcheur des blancs aux notes plus profondes des rouges, notre cave a été créée pour mettre en valeur le poisson, les fruits de mer et les saveurs traditionnelles de la cuisine portugaise.",
    wineTextTwo:
      "Vous pouvez consulter ici notre carte des vins complète, avec toutes les références disponibles.",
    openCarta: "Ouvrir la carte",
    footer: "Senhor Peixe — Depuis 1999",
  },
  de: {
    pageTitle: "Weinkeller",
    pageSubtitle: "Eine sorgfältig ausgewählte Auswahl, die jeden Moment am Tisch begleitet.",
    wineSelection: "Weinauswahl",
    wineListTitle: "Weinkarte",
    wineListDescription:
      "Eine Weinkarte, die unsere Küche begleitet, mit sorgfältig ausgewählten portugiesischen Referenzen.",
    wineTextOne:
      "Von der Frische der Weißweine bis zu den tieferen Noten der Rotweine wurde unser Weinkeller geschaffen, um Fisch, Meeresfrüchte und die traditionellen Aromen der portugiesischen Küche zu unterstreichen.",
    wineTextTwo:
      "Hier können Sie unsere vollständige Weinkarte mit allen verfügbaren Referenzen einsehen.",
    openCarta: "Karte öffnen",
    footer: "Senhor Peixe — Seit 1999",
  },
  it: {
    pageTitle: "Cantina",
    pageSubtitle: "Una selezione accurata pensata per accompagnare ogni momento a tavola.",
    wineSelection: "Selezione di vini",
    wineListTitle: "Carta dei Vini",
    wineListDescription:
      "Una carta pensata per accompagnare la nostra cucina, con etichette portoghesi accuratamente selezionate.",
    wineTextOne:
      "Dalla freschezza dei bianchi alle note più profonde dei rossi, la nostra cantina è stata creata per valorizzare il pesce, i frutti di mare e i sapori tradizionali della cucina portoghese.",
    wineTextTwo:
      "Qui può consultare la nostra carta dei vini completa, con tutte le referenze disponibili.",
    openCarta: "Apri carta",
    footer: "Senhor Peixe — Dal 1999",
  },
  ru: {
    pageTitle: "Винный Погреб",
    pageSubtitle: "Тщательно подобранная коллекция, созданная для каждого момента за столом.",
    wineSelection: "Выбор вин",
    wineListTitle: "Винная Карта",
    wineListDescription:
      "Винная карта, созданная для нашей кухни, с тщательно отобранными португальскими позициями.",
    wineTextOne:
      "От свежести белых вин до более глубоких нот красных — наша винная коллекция создана, чтобы подчеркнуть вкус рыбы, морепродуктов и традиционных блюд португальской кухни.",
    wineTextTwo:
      "Здесь вы можете ознакомиться с полной винной картой и всеми доступными позициями.",
    openCarta: "Открыть карту",
    footer: "Senhor Peixe — С 1999 года",
  },
  zh: {
    pageTitle: "酒窖",
    pageSubtitle: "精心甄选的酒品，为餐桌上的每一刻而设。",
    wineSelection: "葡萄酒精选",
    wineListTitle: "酒单",
    wineListDescription:
      "这份酒单旨在搭配我们的菜肴，精选多款葡萄牙佳酿。",
    wineTextOne:
      "从清新的白葡萄酒到层次更深的红葡萄酒，我们的酒窖旨在提升鱼类、海鲜以及葡萄牙传统风味的用餐体验。",
    wineTextTwo:
      "您可以在此查看完整酒单以及所有可供应的酒品。",
    openCarta: "打开酒单",
    footer: "Senhor Peixe — 始于 1999",
  },
  ar: {
    pageTitle: "قبو النبيذ",
    pageSubtitle: "تشكيلة مختارة بعناية لمرافقة كل لحظة على المائدة.",
    wineSelection: "مختارات النبيذ",
    wineListTitle: "قائمة النبيذ",
    wineListDescription:
      "قائمة نبيذ صُممت لترافق مطبخنا، مع اختيارات برتغالية منتقاة بعناية.",
    wineTextOne:
      "من انتعاش النبيذ الأبيض إلى النكهات الأعمق للنبيذ الأحمر، تم إعداد قبو النبيذ لدينا لإبراز الأسماك والمأكولات البحرية والنكهات التقليدية للمطبخ البرتغالي.",
    wineTextTwo:
      "يمكنكم هنا الاطلاع على قائمة النبيذ الكاملة، مع جميع الاختيارات المتوفرة.",
    openCarta: "فتح القائمة",
    footer: "Senhor Peixe — منذ 1999",
  },
  hi: {
    pageTitle: "वाइन सेलर",
    pageSubtitle: "मेज़ पर हर पल के साथ जाने के लिए सावधानी से चुना गया संग्रह।",
    wineSelection: "वाइन चयन",
    wineListTitle: "वाइन सूची",
    wineListDescription:
      "हमारे भोजन के साथ मेल खाने के लिए बनाई गई वाइन सूची, जिसमें सावधानी से चुने गए पुर्तगाली विकल्प शामिल हैं।",
    wineTextOne:
      "सफेद वाइन की ताज़गी से लेकर लाल वाइन के गहरे सुरों तक, हमारा वाइन सेलर मछली, समुद्री भोजन और पुर्तगाली पारंपरिक स्वादों को उभारने के लिए बनाया गया है।",
    wineTextTwo:
      "यहाँ आप सभी उपलब्ध विकल्पों के साथ हमारी पूरी वाइन सूची देख सकते हैं।",
    openCarta: "सूची खोलें",
    footer: "Senhor Peixe — 1999 से",
  },
} as const

export default function GarrafeiraPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] ?? translations.pt

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="garrafeira" />

      {/* Header Elegant */}
      <header className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#10243d] sm:h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <img
            src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
            alt="Senhor Peixe Logo"
            className="mb-4 h-16 w-16 object-contain drop-shadow-lg sm:h-20 sm:w-20"
          />

          <span className="font-serif text-xs uppercase tracking-[0.35em] text-white/70">
            Senhor Peixe
          </span>

          <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-white sm:text-5xl">
            {t.pageTitle}
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-serif text-sm italic leading-relaxed tracking-[0.08em] text-white/75 sm:text-base">
            {t.pageSubtitle}
          </p>

          <div
            className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* Wine Content */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
            {t.wineSelection}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="font-serif text-lg text-[#10243d]">-</span>

            <h2 className="font-serif text-2xl uppercase tracking-[0.22em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
              {t.wineListTitle}
            </h2>

            <span className="font-serif text-lg text-[#10243d]">-</span>
          </div>

          <div
            className="mx-auto mt-4 flex w-24 flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="h-px w-24 bg-[#e2bd93]/80" />
            <span className="h-px w-20 bg-[#e2bd93]/55" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-serif text-sm leading-relaxed text-[#5f7285] sm:text-base">
            {t.wineListDescription}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#e2bd93]/35 bg-white/75 px-6 py-10 text-center shadow-sm sm:px-12 sm:py-12">
          <div
            className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-[#c8a96a]/70 to-transparent"
            aria-hidden="true"
          />

          <p className="mx-auto max-w-2xl font-serif text-base leading-relaxed text-[#5f7285] sm:text-lg">
            {t.wineTextOne}
          </p>

          <p className="mx-auto mt-6 max-w-xl font-serif text-sm leading-relaxed text-[#5f7285] sm:text-base">
            {t.wineTextTwo}
          </p>

          <div
            className="mx-auto mt-8 flex w-24 flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="h-px w-24 bg-[#e2bd93]/70" />
            <span className="h-px w-16 bg-[#e2bd93]/45" />
          </div>

          <div className="mt-9 flex justify-center">
            <Link
              href="/garrafeira/carta"
              className="inline-flex min-w-56 items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-7 py-3 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:border-[#e2bd93] hover:bg-[#10243d] hover:shadow-[0_0_22px_rgba(226,189,147,0.24)] focus:outline-none focus:ring-2 focus:ring-[#e2bd93]/50 focus:ring-offset-2 focus:ring-offset-stone-50"
            >
              {t.openCarta}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#10243d] py-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="group inline-block">
            <img
              src="https://i.ibb.co/VcPnskTq/So-peixe-branco-sem-olho.png"
              alt="Senhor Peixe Logo"
              className="mx-auto h-16 w-16 object-contain"
            />
          </Link>

          <p className="mt-3 font-serif text-xs uppercase tracking-[0.2em] text-white/60">
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  )
}
