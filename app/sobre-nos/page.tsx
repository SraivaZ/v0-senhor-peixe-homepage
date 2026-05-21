"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { SiteMenu } from "@/components/site-menu"

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TripAdvisorIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.5l1.922-1.886a5.976 5.976 0 004.075 1.6 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.91C14.5 8.075 13.096 9.45 12 11.372c-1.096-1.922-2.5-3.297-4.504-4.207A11.577 11.577 0 0112 6.255zM6.003 9.79a4.006 4.006 0 110 8.013 4.006 4.006 0 010-8.013zm11.994 0a4.006 4.006 0 110 8.013 4.006 4.006 0 010-8.013zM6.003 11.79a2.003 2.003 0 100 4.006 2.003 2.003 0 000-4.006zm11.994 0a2.003 2.003 0 100 4.006 2.003 2.003 0 000-4.006z" />
    </svg>
  )
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Senhor+Peixe/@38.7711153,-9.0950749,17z/data=!4m15!1m8!3m7!1s0xd19318fae5b0243:0x774590368c5ec79b!2sR.+da+Pimenta+35,+Parque+das+Na%C3%A7%C3%B5es,+1990-254+Lisboa!3b1!8m2!3d38.7711111!4d-9.0925!16s%2Fg%2F11rg64rhkz!3m5!1s0xd19337acbb1ab1b:0xeb80fb06738c323!8m2!3d38.7710801!4d-9.0923458!16s%2Fg%2F1tjfj34m?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"

const INSTAGRAM_URL = "https://www.instagram.com/restaurante.senhor.peixe/"
const FACEBOOK_URL = "https://facebook.com"
const TRIPADVISOR_URL =
  "https://www.tripadvisor.pt/Restaurant_Review-g189158-d1163802-Reviews-Sr_Peixe-Lisbon_Lisbon_District_Central_Portugal.html"

const translations = {
  pt: {
    pageTitle: "Sobre Nós",
    pageSubtitle:
      "Uma história ligada ao mar, à frescura e à tradição portuguesa.",

    introSmallTitle: "A nossa essência",
    introTitle: "Do mar, para o seu prato",
    introText:
      "O Senhor Peixe Restaurante Marisqueira abriu as portas ao público a 11 de Março de 1999 em Lisboa, com um pé no rio Tejo. Situado no Parque das Nações, o nosso restaurante tem como missão trazer-lhe o melhor que o mar nos oferece. Peixe fresco, marisco e uma seleção de vinhos que temos a confiança que o vai deixar muito satisfeito.",
    introQuote: "É Setúbal em Lisboa... e o mar no seu prato.",

    secondSmallTitle: "Tradição e frescura",
    secondTitle: "Setúbal aqui tão perto",
    secondText:
      "Setúbal em Lisboa, com tudo o que o mar dá. Peixes vivos, grelhados no carvão de azinho e mariscos. Mas não faltará a saladinha de polvo, o choco frito, o escabeche. E ainda os moscatéis, os vinhos, os queijos de Azeitão e a doçaria... ou mesmo o bife da vazia para desenjoar.",

    whereWeAre: "Onde estamos",
    addressTitle: "Morada",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisboa",
    viewLocation: "Ver localização",

    visitTitle: "Quando nos visita",
    scheduleTitle: "Horário",
    tuesdayToSaturday: "Terça a Sábado",
    sunday: "Domingo",

    footer: "Senhor Peixe — Desde 1999",

    imageAltTejo: "Vista do Rio Tejo no Parque das Nações",
    imageAltSeafood: "Marisco fresco",
    imageAltExterior: "Exterior do restaurante Senhor Peixe",
  },
  en: {
    pageTitle: "About Us",
    pageSubtitle:
      "A story connected to the sea, freshness and Portuguese tradition.",

    introSmallTitle: "Our essence",
    introTitle: "From the sea, to your plate",
    introText:
      "Senhor Peixe Restaurante Marisqueira opened its doors to the public on March 11, 1999 in Lisbon, with the Tagus River close by. Located in Parque das Nações, our restaurant’s mission is to bring you the very best the sea has to offer. Fresh fish, seafood and a wine selection that we are confident will leave you very satisfied.",
    introQuote: "Setúbal in Lisbon... and the sea on your plate.",

    secondSmallTitle: "Tradition and freshness",
    secondTitle: "Setúbal so close by",
    secondText:
      "Setúbal in Lisbon, with everything the sea provides. Live fish, grilled over holm oak charcoal, and seafood. There is also octopus salad, fried cuttlefish, escabeche, moscatel wines, wines, Azeitão cheeses and traditional sweets... or even a sirloin steak for those looking for something different.",

    whereWeAre: "Where we are",
    addressTitle: "Address",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisbon",
    viewLocation: "View location",

    visitTitle: "When to visit us",
    scheduleTitle: "Opening Hours",
    tuesdayToSaturday: "Tuesday to Saturday",
    sunday: "Sunday",

    footer: "Senhor Peixe — Since 1999",

    imageAltTejo: "View of the Tagus River in Parque das Nações",
    imageAltSeafood: "Fresh seafood",
    imageAltExterior: "Exterior of Senhor Peixe restaurant",
  },
  es: {
    pageTitle: "Sobre Nosotros",
    pageSubtitle:
      "Una historia ligada al mar, a la frescura y a la tradición portuguesa.",

    introSmallTitle: "Nuestra esencia",
    introTitle: "Del mar, a su plato",
    introText:
      "Senhor Peixe Restaurante Marisqueira abrió sus puertas al público el 11 de marzo de 1999 en Lisboa, junto al río Tajo. Situado en el Parque das Nações, nuestro restaurante tiene como misión ofrecerle lo mejor que el mar nos brinda. Pescado fresco, marisco y una selección de vinos que confiamos le dejarán muy satisfecho.",
    introQuote: "Setúbal en Lisboa... y el mar en su plato.",

    secondSmallTitle: "Tradición y frescura",
    secondTitle: "Setúbal aquí tan cerca",
    secondText:
      "Setúbal en Lisboa, con todo lo que el mar ofrece. Pescados vivos, asados a la parrilla con carbón de encina, y mariscos. Tampoco faltan la ensalada de pulpo, el choco frito, el escabeche, los moscateles, los vinos, los quesos de Azeitão y la repostería tradicional... o incluso un filete de vacuno para quien busque algo diferente.",

    whereWeAre: "Dónde estamos",
    addressTitle: "Dirección",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisboa",
    viewLocation: "Ver ubicación",

    visitTitle: "Cuándo visitarnos",
    scheduleTitle: "Horario",
    tuesdayToSaturday: "Martes a sábado",
    sunday: "Domingo",

    footer: "Senhor Peixe — Desde 1999",

    imageAltTejo: "Vista del río Tajo en el Parque das Nações",
    imageAltSeafood: "Marisco fresco",
    imageAltExterior: "Exterior del restaurante Senhor Peixe",
  },
  fr: {
    pageTitle: "À Propos",
    pageSubtitle:
      "Une histoire liée à la mer, à la fraîcheur et à la tradition portugaise.",

    introSmallTitle: "Notre essence",
    introTitle: "De la mer, à votre assiette",
    introText:
      "Senhor Peixe Restaurante Marisqueira a ouvert ses portes au public le 11 mars 1999 à Lisbonne, tout près du Tage. Situé au Parque das Nações, notre restaurant a pour mission de vous proposer le meilleur de ce que la mer nous offre. Poisson frais, fruits de mer et une sélection de vins qui, nous en sommes convaincus, vous laisseront pleinement satisfait.",
    introQuote: "Setúbal à Lisbonne... et la mer dans votre assiette.",

    secondSmallTitle: "Tradition et fraîcheur",
    secondTitle: "Setúbal si proche",
    secondText:
      "Setúbal à Lisbonne, avec tout ce que la mer offre. Poissons vivants, grillés au charbon de chêne vert, et fruits de mer. Sans oublier la salade de poulpe, la seiche frite, l’escabèche, les moscatels, les vins, les fromages d’Azeitão et les douceurs traditionnelles... ou même une pièce de bœuf pour varier les plaisirs.",

    whereWeAre: "Où nous sommes",
    addressTitle: "Adresse",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisbonne",
    viewLocation: "Voir l’emplacement",

    visitTitle: "Quand nous rendre visite",
    scheduleTitle: "Horaires",
    tuesdayToSaturday: "Mardi à samedi",
    sunday: "Dimanche",

    footer: "Senhor Peixe — Depuis 1999",

    imageAltTejo: "Vue du Tage au Parque das Nações",
    imageAltSeafood: "Fruits de mer frais",
    imageAltExterior: "Extérieur du restaurant Senhor Peixe",
  },
  de: {
    pageTitle: "Über Uns",
    pageSubtitle:
      "Eine Geschichte verbunden mit dem Meer, Frische und portugiesischer Tradition.",

    introSmallTitle: "Unsere Essenz",
    introTitle: "Aus dem Meer, auf Ihren Teller",
    introText:
      "Das Senhor Peixe Restaurante Marisqueira öffnete am 11. März 1999 in Lissabon seine Türen, ganz in der Nähe des Tejo. Im Parque das Nações gelegen, ist es unsere Mission, Ihnen das Beste zu bieten, was das Meer zu geben hat: frischen Fisch, Meeresfrüchte und eine Weinauswahl, von der wir überzeugt sind, dass sie Sie sehr zufriedenstellen wird.",
    introQuote: "Setúbal in Lissabon... und das Meer auf Ihrem Teller.",

    secondSmallTitle: "Tradition und Frische",
    secondTitle: "Setúbal ganz nah",
    secondText:
      "Setúbal in Lissabon, mit allem, was das Meer schenkt. Lebender Fisch, über Steineichenkohle gegrillt, und Meeresfrüchte. Dazu gehören auch Oktopussalat, frittierter Tintenfisch, Escabeche, Moscatel-Weine, Weine, Käse aus Azeitão und traditionelle Süßspeisen... oder auch ein Rumpsteak für alle, die etwas anderes möchten.",

    whereWeAre: "Wo wir sind",
    addressTitle: "Adresse",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lissabon",
    viewLocation: "Standort ansehen",

    visitTitle: "Wann Sie uns besuchen",
    scheduleTitle: "Öffnungszeiten",
    tuesdayToSaturday: "Dienstag bis Samstag",
    sunday: "Sonntag",

    footer: "Senhor Peixe — Seit 1999",

    imageAltTejo: "Blick auf den Tejo im Parque das Nações",
    imageAltSeafood: "Frische Meeresfrüchte",
    imageAltExterior: "Außenansicht des Restaurants Senhor Peixe",
  },
  it: {
    pageTitle: "Chi Siamo",
    pageSubtitle:
      "Una storia legata al mare, alla freschezza e alla tradizione portoghese.",

    introSmallTitle: "La nostra essenza",
    introTitle: "Dal mare, al vostro piatto",
    introText:
      "Senhor Peixe Restaurante Marisqueira ha aperto le sue porte al pubblico l’11 marzo 1999 a Lisbona, a pochi passi dal fiume Tago. Situato nel Parque das Nações, il nostro ristorante ha come missione portarvi il meglio che il mare offre: pesce fresco, frutti di mare e una selezione di vini che siamo certi vi lascerà molto soddisfatti.",
    introQuote: "Setúbal a Lisbona... e il mare nel vostro piatto.",

    secondSmallTitle: "Tradizione e freschezza",
    secondTitle: "Setúbal così vicina",
    secondText:
      "Setúbal a Lisbona, con tutto ciò che il mare offre. Pesci vivi, grigliati su carbone di leccio, e frutti di mare. Non mancano l’insalata di polpo, la seppia fritta, l’escabeche, i moscatel, i vini, i formaggi di Azeitão e i dolci tradizionali... o anche una bistecca di controfiletto per chi desidera qualcosa di diverso.",

    whereWeAre: "Dove siamo",
    addressTitle: "Indirizzo",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisbona",
    viewLocation: "Vedi posizione",

    visitTitle: "Quando visitarci",
    scheduleTitle: "Orario",
    tuesdayToSaturday: "Da martedì a sabato",
    sunday: "Domenica",

    footer: "Senhor Peixe — Dal 1999",

    imageAltTejo: "Vista del fiume Tago nel Parque das Nações",
    imageAltSeafood: "Frutti di mare freschi",
    imageAltExterior: "Esterno del ristorante Senhor Peixe",
  },
  ru: {
    pageTitle: "О Нас",
    pageSubtitle:
      "История, связанная с морем, свежестью и португальскими традициями.",

    introSmallTitle: "Наша сущность",
    introTitle: "Из моря — на вашу тарелку",
    introText:
      "Senhor Peixe Restaurante Marisqueira открыл свои двери для гостей 11 марта 1999 года в Лиссабоне, рядом с рекой Тежу. Расположенный в Parque das Nações, наш ресторан стремится предложить вам лучшее, что дарит море: свежую рыбу, морепродукты и подборку вин, которая, мы уверены, оставит у вас прекрасные впечатления.",
    introQuote: "Сетубал в Лиссабоне... и море на вашей тарелке.",

    secondSmallTitle: "Традиция и свежесть",
    secondTitle: "Сетубал совсем рядом",
    secondText:
      "Сетубал в Лиссабоне — со всем, что дарит море. Живая рыба, приготовленная на углях из каменного дуба, и морепродукты. Также вас ждут салат из осьминога, жареная каракатица, эскабече, мускатные вина, вина, сыры Azeitão и традиционные сладости... или даже стейк из вырезки для тех, кто хочет чего-то другого.",

    whereWeAre: "Где мы находимся",
    addressTitle: "Адрес",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Лиссабон",
    viewLocation: "Посмотреть местоположение",

    visitTitle: "Когда нас посетить",
    scheduleTitle: "Часы работы",
    tuesdayToSaturday: "Со вторника по субботу",
    sunday: "Воскресенье",

    footer: "Senhor Peixe — C 1999 года",

    imageAltTejo: "Вид на реку Тежу в Parque das Nações",
    imageAltSeafood: "Свежие морепродукты",
    imageAltExterior: "Фасад ресторана Senhor Peixe",
  },
  zh: {
    pageTitle: "关于我们",
    pageSubtitle:
      "一段与大海、鲜味和葡萄牙传统相连的故事。",

    introSmallTitle: "我们的本质",
    introTitle: "从大海，到您的餐桌",
    introText:
      "Senhor Peixe Restaurante Marisqueira 于 1999 年 3 月 11 日在里斯本开业，毗邻特茹河。餐厅位于 Parque das Nações，我们的使命是为您呈现大海所馈赠的精华：新鲜鱼类、海鲜，以及我们深信会令您满意的精选葡萄酒。",
    introQuote: "里斯本的塞图巴尔风味……让大海来到您的餐盘。",

    secondSmallTitle: "传统与鲜味",
    secondTitle: "近在咫尺的塞图巴尔",
    secondText:
      "在里斯本感受塞图巴尔，享受大海带来的一切。活鱼以栎木炭火烧烤，搭配丰富海鲜。同时还有章鱼沙拉、炸墨鱼、醋渍菜式、Moscatel 酒、葡萄酒、Azeitão 奶酪和传统甜点……也有牛排可供想尝试不同风味的客人选择。",

    whereWeAre: "我们的位置",
    addressTitle: "地址",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 里斯本",
    viewLocation: "查看位置",

    visitTitle: "欢迎光临",
    scheduleTitle: "营业时间",
    tuesdayToSaturday: "星期二至星期六",
    sunday: "星期日",

    footer: "Senhor Peixe — 始于 1999 年",

    imageAltTejo: "Parque das Nações 的特茹河景色",
    imageAltSeafood: "新鲜海鲜",
    imageAltExterior: "Senhor Peixe 餐厅外观",
  },
  ar: {
    pageTitle: "من نحن",
    pageSubtitle:
      "قصة مرتبطة بالبحر والنضارة والتقاليد البرتغالية.",

    introSmallTitle: "جوهرنا",
    introTitle: "من البحر إلى طبقكم",
    introText:
      "فتح مطعم Senhor Peixe Restaurante Marisqueira أبوابه للجمهور في 11 مارس 1999 في لشبونة، بالقرب من نهر تيجو. يقع مطعمنا في Parque das Nações، ومهمتنا هي أن نقدم لكم أفضل ما يجود به البحر: سمكًا طازجًا، مأكولات بحرية، وتشكيلة من النبيذ نثق بأنها ستمنحكم تجربة مرضية للغاية.",
    introQuote: "سيتوبال في لشبونة... والبحر في طبقكم.",

    secondSmallTitle: "التقاليد والنضارة",
    secondTitle: "سيتوبال قريبة جدًا",
    secondText:
      "سيتوبال في لشبونة، بكل ما يقدمه البحر. أسماك حية تُشوى على فحم البلوط الأخضر، ومأكولات بحرية. ولا تغيب سلطة الأخطبوط، والحبار المقلي، والإسكابيش، ونبيذ Moscatel، والنبيذ، وأجبان Azeitão والحلويات التقليدية... أو حتى شريحة لحم لمن يرغب في خيار مختلف.",

    whereWeAre: "أين نحن",
    addressTitle: "العنوان",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 لشبونة",
    viewLocation: "عرض الموقع",

    visitTitle: "متى تزوروننا",
    scheduleTitle: "ساعات العمل",
    tuesdayToSaturday: "من الثلاثاء إلى السبت",
    sunday: "الأحد",

    footer: "Senhor Peixe — منذ 1999",

    imageAltTejo: "إطلالة على نهر تيجو في Parque das Nações",
    imageAltSeafood: "مأكولات بحرية طازجة",
    imageAltExterior: "الواجهة الخارجية لمطعم Senhor Peixe",
  },
  hi: {
    pageTitle: "हमारे बारे में",
    pageSubtitle:
      "समुद्र, ताज़गी और पुर्तगाली परंपरा से जुड़ी एक कहानी।",

    introSmallTitle: "हमारी पहचान",
    introTitle: "समुद्र से, आपकी थाली तक",
    introText:
      "Senhor Peixe Restaurante Marisqueira ने 11 मार्च 1999 को लिस्बन में, टैगस नदी के पास, अपने दरवाज़े खोले। Parque das Nações में स्थित हमारा रेस्टोरेंट आपको समुद्र की सबसे अच्छी पेशकश देने के लिए समर्पित है: ताज़ी मछली, समुद्री भोजन और वाइन का ऐसा चयन जिसके बारे में हमें विश्वास है कि वह आपको बहुत संतुष्ट करेगा।",
    introQuote: "लिस्बन में सेतुबल... और आपकी थाली में समुद्र।",

    secondSmallTitle: "परंपरा और ताज़गी",
    secondTitle: "सेतुबल इतना पास",
    secondText:
      "लिस्बन में सेतुबल का स्वाद, समुद्र की हर देन के साथ। ज़िंदा मछलियाँ, होल्म ओक चारकोल पर ग्रिल की हुई, और समुद्री भोजन। इसके साथ ऑक्टोपस सलाद, फ्राइड कटलफिश, एस्काबेचे, Moscatel वाइन, वाइन, Azeitão चीज़ और पारंपरिक मिठाइयाँ भी उपलब्ध हैं... या कुछ अलग चाहने वालों के लिए सिरलॉइन स्टेक भी।",

    whereWeAre: "हम कहाँ हैं",
    addressTitle: "पता",
    address:
      "Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte, 1990-254 Lisbon",
    viewLocation: "स्थान देखें",

    visitTitle: "कब आएँ",
    scheduleTitle: "खुलने का समय",
    tuesdayToSaturday: "मंगलवार से शनिवार",
    sunday: "रविवार",

    footer: "Senhor Peixe — 1999 से",

    imageAltTejo: "Parque das Nações में टैगस नदी का दृश्य",
    imageAltSeafood: "ताज़ा समुद्री भोजन",
    imageAltExterior: "Senhor Peixe रेस्टोरेंट का बाहरी भाग",
  },
} as const

export default function SobreNosPage() {
  const { language } = useLanguage()
  const t = translations[language] ?? translations.pt

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="sobre" />

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

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Intro Title */}
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.introSmallTitle}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.introTitle}
              </h2>

              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>
            </div>

            <div
              className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
              aria-hidden="true"
            >
              <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
              <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-base leading-relaxed text-[#5f7285] sm:text-lg">
                {t.introText}
              </p>

              <p className="mt-8 font-serif text-lg italic leading-relaxed text-[#10243d] sm:text-xl">
                {t.introQuote}
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-72 w-full sm:h-96">
                <Image
                  src="/images/about/tejo-river.jpg"
                  alt={t.imageAltTejo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-auto mb-16 max-w-5xl">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
          </div>

          {/* Section 2 Title */}
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.secondSmallTitle}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.secondTitle}
              </h2>

              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>
            </div>

            <div
              className="mx-auto mt-4 flex w-20 flex-col items-center gap-1 sm:w-24"
              aria-hidden="true"
            >
              <span className="h-px w-20 bg-[#e2bd93]/80 sm:w-24" />
              <span className="h-px w-16 bg-[#e2bd93]/55 sm:w-20" />
            </div>
          </div>

          {/* Section 2 */}
          <section className="mb-20">
            <p className="mx-auto mb-12 max-w-3xl text-center font-serif text-base leading-relaxed text-[#5f7285] sm:text-lg">
              {t.secondText}
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-80">
                <Image
                  src="/images/about/fresh-seafood.jpg"
                  alt={t.imageAltSeafood}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-80">
                <Image
                  src="/images/about/restaurant-exterior.jpg"
                  alt={t.imageAltExterior}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </div>
          </section>

          {/* Decorative Divider - only lines */}
          <div className="mb-16 flex items-center justify-center">
            <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#c8a96a]/60 to-transparent" />
          </div>

          {/* Info Cards */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.whereWeAre}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.addressTitle}
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <p className="mx-auto mt-6 max-w-sm font-serif text-base leading-relaxed text-[#5f7285]">
                {t.address}
              </p>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-6 py-3 font-serif text-xs uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(16,36,61,0.18)] transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d] hover:text-[#f8ead8] hover:shadow-[0_0_0_1px_rgba(200,169,106,0.45),0_18px_42px_rgba(16,36,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2"
              >
                {t.viewLocation}
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white/70 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.visitTitle}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.scheduleTitle}
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <div className="mt-6 space-y-3 font-serif text-base leading-relaxed text-[#5f7285]">
                <p>{t.tuesdayToSaturday}</p>
                <p className="text-[#10243d]">12:00-15:30 / 19:00-22:30</p>

                <p className="pt-3">{t.sunday}</p>
                <p className="text-[#10243d]">12:00-15:30</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Social Icons */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6 md:gap-4">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>

        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10243d] transition-colors hover:text-[#c8a96a]"
          aria-label="TripAdvisor"
        >
          <TripAdvisorIcon className="h-6 w-6 md:h-7 md:w-7" />
        </a>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#10243d] py-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243d] via-[#132b49] to-[#10243d]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e2bd93]/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="inline-block group">
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