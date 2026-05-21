"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
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

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

const INITIAL_FORM_DATA = {
  nome: "",
  data: "",
  hora: "",
  contacto: "",
  pessoas: "",
  notas: "",
}

const PHONE_NUMBERS = [
  { label: "+351 21 895 5892", href: "tel:+351218955892" },
  { label: "+351 914 671 702", href: "tel:+351914671702" },
]

const DINNER_TIMES = [
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
] as const

const INSTAGRAM_URL = "https://www.instagram.com/restaurante.senhor.peixe/"
const TRIPADVISOR_URL =
  "https://www.tripadvisor.pt/Restaurant_Review-g189158-d1163802-Reviews-Sr_Peixe-Lisbon_Lisbon_District_Central_Portugal.html"

const translations = {
  pt: {
    close: "Fechar",
    pageTitle: "Reservas",
    pageSubtitle:
      "Reserve a sua mesa e deixe-nos preparar uma experiência à sua medida.",
    requestLabel: "Pedido de reserva",
    yourTable: "A sua mesa",

    name: "Nome",
    namePlaceholder: "O seu nome completo",
    date: "Data",
    time: "Hora",
    select: "Selecione",
    lunch: "Almoço",
    dinner: "Jantar",
    contact: "Contacto",
    phonePlaceholder: "O seu número de telefone",
    peopleNumber: "Número de Pessoas",
    onePerson: "1 Pessoa",
    people: "Pessoas",
    moreThanTen: "10+ Pessoas",
    notes: "Notas Adicionais",
    notesPlaceholder:
      "Indique-nos, por favor, eventuais alergias, ocasiões especiais, preferências de mesa ou necessidades específicas de acessibilidade.",
    requestReservation: "Solicitar Reserva",
    sending: "A enviar...",

    mondayClosed: "Estamos encerrados à segunda-feira.",
    sundayLunchOnly: "Ao domingo só aceitamos reservas ao almoço.",
    sundayLunchPrompt: "Por favor, escolha um horário de almoço.",
    submitError:
      "Não foi possível enviar o pedido. Por favor, tente novamente ou contacte-nos por telefone.",
    subject: "Novo pedido de reserva - Senhor Peixe",

    successTitle: "Pedido de Reserva Enviado",
    successLine1: "Obrigado pelo seu pedido de reserva.",
    successLine2:
      "A nossa equipa entrará em contacto consigo brevemente para confirmar a disponibilidade.",

    largeGroupsLine1:
      "Para reservas superiores a 10 pessoas ou pedidos de eventos privados,",
    largeGroupsLine2:
      "recomendamos o contacto direto através do telefone,",
    largeGroupsLine3: "para melhor acompanhamento do pedido.",
    choosePhone: "Escolha o número para ligar",
    call: "Ligar",

    footer: "Senhor Peixe — Desde 1999",
  },
  en: {
    close: "Close",
    pageTitle: "Reservations",
    pageSubtitle:
      "Reserve your table and let us prepare an experience tailored to you.",
    requestLabel: "Reservation request",
    yourTable: "Your table",

    name: "Name",
    namePlaceholder: "Your full name",
    date: "Date",
    time: "Time",
    select: "Select",
    lunch: "Lunch",
    dinner: "Dinner",
    contact: "Contact",
    phonePlaceholder: "Your phone number",
    peopleNumber: "Number of Guests",
    onePerson: "1 Guest",
    people: "Guests",
    moreThanTen: "10+ Guests",
    notes: "Additional Notes",
    notesPlaceholder:
      "Please let us know about any allergies, special occasions, table preferences or specific accessibility needs.",
    requestReservation: "Request Reservation",
    sending: "Sending...",

    mondayClosed: "We are closed on Mondays.",
    sundayLunchOnly: "On Sundays, we only accept reservations for lunch.",
    sundayLunchPrompt: "Please choose a lunch time.",
    submitError:
      "It was not possible to send your request. Please try again or contact us by phone.",
    subject: "New reservation request - Senhor Peixe",

    successTitle: "Reservation Request Sent",
    successLine1: "Thank you for your reservation request.",
    successLine2:
      "Our team will contact you shortly to confirm availability.",

    largeGroupsLine1:
      "For reservations for more than 10 guests or private event requests,",
    largeGroupsLine2: "we recommend contacting us directly by phone,",
    largeGroupsLine3: "so we can assist you properly.",
    choosePhone: "Choose a number to call",
    call: "Call",

    footer: "Senhor Peixe — Since 1999",
  },
  es: {
    close: "Cerrar",
    pageTitle: "Reservas",
    pageSubtitle:
      "Reserve su mesa y permítanos preparar una experiencia a su medida.",
    requestLabel: "Solicitud de reserva",
    yourTable: "Su mesa",

    name: "Nombre",
    namePlaceholder: "Su nombre completo",
    date: "Fecha",
    time: "Hora",
    select: "Seleccione",
    lunch: "Almuerzo",
    dinner: "Cena",
    contact: "Contacto",
    phonePlaceholder: "Su número de teléfono",
    peopleNumber: "Número de personas",
    onePerson: "1 persona",
    people: "Personas",
    moreThanTen: "10+ personas",
    notes: "Notas adicionales",
    notesPlaceholder:
      "Indíquenos, por favor, posibles alergias, ocasiones especiales, preferencias de mesa o necesidades específicas de accesibilidad.",
    requestReservation: "Solicitar reserva",
    sending: "Enviando...",

    mondayClosed: "Estamos cerrados los lunes.",
    sundayLunchOnly: "Los domingos solo aceptamos reservas para el almuerzo.",
    sundayLunchPrompt: "Por favor, elija un horario de almuerzo.",
    submitError:
      "No ha sido posible enviar la solicitud. Inténtelo de nuevo o contáctenos por teléfono.",
    subject: "Nueva solicitud de reserva - Senhor Peixe",

    successTitle: "Solicitud de reserva enviada",
    successLine1: "Gracias por su solicitud de reserva.",
    successLine2:
      "Nuestro equipo se pondrá en contacto con usted en breve para confirmar la disponibilidad.",

    largeGroupsLine1:
      "Para reservas de más de 10 personas o solicitudes de eventos privados,",
    largeGroupsLine2: "recomendamos contactar directamente por teléfono,",
    largeGroupsLine3: "para poder atenderle mejor.",
    choosePhone: "Elija el número para llamar",
    call: "Llamar",

    footer: "Senhor Peixe — Desde 1999",
  },
  fr: {
    close: "Fermer",
    pageTitle: "Réservations",
    pageSubtitle:
      "Réservez votre table et laissez-nous préparer une expérience sur mesure.",
    requestLabel: "Demande de réservation",
    yourTable: "Votre table",

    name: "Nom",
    namePlaceholder: "Votre nom complet",
    date: "Date",
    time: "Heure",
    select: "Sélectionner",
    lunch: "Déjeuner",
    dinner: "Dîner",
    contact: "Contact",
    phonePlaceholder: "Votre numéro de téléphone",
    peopleNumber: "Nombre de personnes",
    onePerson: "1 personne",
    people: "Personnes",
    moreThanTen: "10+ personnes",
    notes: "Notes supplémentaires",
    notesPlaceholder:
      "Veuillez nous indiquer d'éventuelles allergies, occasions spéciales, préférences de table ou besoins spécifiques d'accessibilité.",
    requestReservation: "Demander une réservation",
    sending: "Envoi...",

    mondayClosed: "Nous sommes fermés le lundi.",
    sundayLunchOnly: "Le dimanche, nous acceptons uniquement les réservations pour le déjeuner.",
    sundayLunchPrompt: "Veuillez choisir un horaire de déjeuner.",
    submitError:
      "Il n'a pas été possible d'envoyer votre demande. Veuillez réessayer ou nous contacter par téléphone.",
    subject: "Nouvelle demande de réservation - Senhor Peixe",

    successTitle: "Demande de réservation envoyée",
    successLine1: "Merci pour votre demande de réservation.",
    successLine2:
      "Notre équipe vous contactera prochainement pour confirmer la disponibilité.",

    largeGroupsLine1:
      "Pour les réservations de plus de 10 personnes ou les demandes d'événements privés,",
    largeGroupsLine2: "nous recommandons de nous contacter directement par téléphone,",
    largeGroupsLine3: "afin de mieux vous accompagner.",
    choosePhone: "Choisissez le numéro à appeler",
    call: "Appeler",

    footer: "Senhor Peixe — Depuis 1999",
  },
  de: {
    close: "Schließen",
    pageTitle: "Reservierungen",
    pageSubtitle:
      "Reservieren Sie Ihren Tisch und lassen Sie uns ein Erlebnis nach Ihren Wünschen vorbereiten.",
    requestLabel: "Reservierungsanfrage",
    yourTable: "Ihr Tisch",

    name: "Name",
    namePlaceholder: "Ihr vollständiger Name",
    date: "Datum",
    time: "Uhrzeit",
    select: "Auswählen",
    lunch: "Mittagessen",
    dinner: "Abendessen",
    contact: "Kontakt",
    phonePlaceholder: "Ihre Telefonnummer",
    peopleNumber: "Anzahl der Personen",
    onePerson: "1 Person",
    people: "Personen",
    moreThanTen: "10+ Personen",
    notes: "Zusätzliche Hinweise",
    notesPlaceholder:
      "Bitte informieren Sie uns über Allergien, besondere Anlässe, Tischwünsche oder besondere Anforderungen an die Barrierefreiheit.",
    requestReservation: "Reservierung anfragen",
    sending: "Wird gesendet...",

    mondayClosed: "Montags haben wir geschlossen.",
    sundayLunchOnly: "Sonntags nehmen wir nur Reservierungen zum Mittagessen an.",
    sundayLunchPrompt: "Bitte wählen Sie eine Uhrzeit für das Mittagessen.",
    submitError:
      "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
    subject: "Neue Reservierungsanfrage - Senhor Peixe",

    successTitle: "Reservierungsanfrage gesendet",
    successLine1: "Vielen Dank für Ihre Reservierungsanfrage.",
    successLine2:
      "Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um die Verfügbarkeit zu bestätigen.",

    largeGroupsLine1:
      "Für Reservierungen mit mehr als 10 Personen oder private Veranstaltungen,",
    largeGroupsLine2: "empfehlen wir Ihnen, uns direkt telefonisch zu kontaktieren,",
    largeGroupsLine3: "damit wir Sie bestmöglich betreuen können.",
    choosePhone: "Wählen Sie die Telefonnummer",
    call: "Anrufen",

    footer: "Senhor Peixe — Seit 1999",
  },
  it: {
    close: "Chiudi",
    pageTitle: "Prenotazioni",
    pageSubtitle:
      "Prenoti il suo tavolo e ci lasci preparare un'esperienza su misura.",
    requestLabel: "Richiesta di prenotazione",
    yourTable: "Il suo tavolo",

    name: "Nome",
    namePlaceholder: "Il suo nome completo",
    date: "Data",
    time: "Ora",
    select: "Seleziona",
    lunch: "Pranzo",
    dinner: "Cena",
    contact: "Contatto",
    phonePlaceholder: "Il suo numero di telefono",
    peopleNumber: "Numero di persone",
    onePerson: "1 persona",
    people: "Persone",
    moreThanTen: "10+ persone",
    notes: "Note aggiuntive",
    notesPlaceholder:
      "La preghiamo di indicarci eventuali allergie, occasioni speciali, preferenze per il tavolo o esigenze specifiche di accessibilità.",
    requestReservation: "Richiedi prenotazione",
    sending: "Invio...",

    mondayClosed: "Siamo chiusi il lunedì.",
    sundayLunchOnly: "La domenica accettiamo prenotazioni solo a pranzo.",
    sundayLunchPrompt: "La preghiamo di scegliere un orario per il pranzo.",
    submitError:
      "Non è stato possibile inviare la richiesta. La preghiamo di riprovare o di contattarci telefonicamente.",
    subject: "Nuova richiesta di prenotazione - Senhor Peixe",

    successTitle: "Richiesta di prenotazione inviata",
    successLine1: "Grazie per la sua richiesta di prenotazione.",
    successLine2:
      "Il nostro team la contatterà a breve per confermare la disponibilità.",

    largeGroupsLine1:
      "Per prenotazioni superiori a 10 persone o richieste di eventi privati,",
    largeGroupsLine2: "consigliamo il contatto diretto telefonico,",
    largeGroupsLine3: "per poter seguire al meglio la richiesta.",
    choosePhone: "Scelga il numero da chiamare",
    call: "Chiama",

    footer: "Senhor Peixe — Dal 1999",
  },
  ru: {
    close: "Закрыть",
    pageTitle: "Бронирование",
    pageSubtitle:
      "Забронируйте столик, и мы подготовим для вас индивидуальный опыт.",
    requestLabel: "Запрос на бронирование",
    yourTable: "Ваш стол",

    name: "Имя",
    namePlaceholder: "Ваше полное имя",
    date: "Дата",
    time: "Время",
    select: "Выберите",
    lunch: "Обед",
    dinner: "Ужин",
    contact: "Контакт",
    phonePlaceholder: "Ваш номер телефона",
    peopleNumber: "Количество гостей",
    onePerson: "1 гость",
    people: "Гости",
    moreThanTen: "10+ гостей",
    notes: "Дополнительные примечания",
    notesPlaceholder:
      "Пожалуйста, сообщите нам о возможных аллергиях, особых случаях, предпочтениях по столу или специальных требованиях доступности.",
    requestReservation: "Запросить бронирование",
    sending: "Отправка...",

    mondayClosed: "По понедельникам мы закрыты.",
    sundayLunchOnly: "По воскресеньям мы принимаем бронирования только на обед.",
    sundayLunchPrompt: "Пожалуйста, выберите время обеда.",
    submitError:
      "Не удалось отправить запрос. Пожалуйста, попробуйте снова или свяжитесь с нами по телефону.",
    subject: "Новый запрос на бронирование - Senhor Peixe",

    successTitle: "Запрос на бронирование отправлен",
    successLine1: "Спасибо за ваш запрос на бронирование.",
    successLine2:
      "Наша команда свяжется с вами в ближайшее время, чтобы подтвердить наличие мест.",

    largeGroupsLine1:
      "Для бронирований более чем на 10 человек или частных мероприятий,",
    largeGroupsLine2: "рекомендуем связаться с нами напрямую по телефону,",
    largeGroupsLine3: "чтобы мы могли лучше обработать ваш запрос.",
    choosePhone: "Выберите номер для звонка",
    call: "Позвонить",

    footer: "Senhor Peixe — С 1999 года",
  },
  zh: {
    close: "关闭",
    pageTitle: "预订",
    pageSubtitle:
      "预订您的餐桌，让我们为您准备专属体验。",
    requestLabel: "预订申请",
    yourTable: "您的餐桌",

    name: "姓名",
    namePlaceholder: "您的全名",
    date: "日期",
    time: "时间",
    select: "请选择",
    lunch: "午餐",
    dinner: "晚餐",
    contact: "联系方式",
    phonePlaceholder: "您的电话号码",
    peopleNumber: "用餐人数",
    onePerson: "1 位",
    people: "位",
    moreThanTen: "10+ 位",
    notes: "附加说明",
    notesPlaceholder:
      "请告知我们是否有过敏情况、特殊场合、座位偏好或无障碍需求。",
    requestReservation: "提交预订申请",
    sending: "正在发送...",

    mondayClosed: "我们每周一休息。",
    sundayLunchOnly: "周日仅接受午餐预订。",
    sundayLunchPrompt: "请选择午餐时间。",
    submitError:
      "无法发送您的申请。请重试或通过电话联系我们。",
    subject: "新的预订申请 - Senhor Peixe",

    successTitle: "预订申请已发送",
    successLine1: "感谢您的预订申请。",
    successLine2:
      "我们的团队将很快与您联系，以确认是否有空位。",

    largeGroupsLine1:
      "如需预订超过 10 位或私人活动，",
    largeGroupsLine2: "我们建议您直接通过电话联系我们，",
    largeGroupsLine3: "以便我们更好地协助您。",
    choosePhone: "选择要拨打的号码",
    call: "拨打",

    footer: "Senhor Peixe — 始于 1999",
  },
  ar: {
    close: "إغلاق",
    pageTitle: "الحجوزات",
    pageSubtitle:
      "احجز طاولتك ودعنا نُحضّر لك تجربة تناسبك.",
    requestLabel: "طلب حجز",
    yourTable: "طاولتك",

    name: "الاسم",
    namePlaceholder: "اسمك الكامل",
    date: "التاريخ",
    time: "الوقت",
    select: "اختر",
    lunch: "الغداء",
    dinner: "العشاء",
    contact: "رقم التواصل",
    phonePlaceholder: "رقم هاتفك",
    peopleNumber: "عدد الأشخاص",
    onePerson: "شخص واحد",
    people: "أشخاص",
    moreThanTen: "أكثر من 10 أشخاص",
    notes: "ملاحظات إضافية",
    notesPlaceholder:
      "يرجى إبلاغنا بأي حساسية، مناسبة خاصة، تفضيلات للطاولة أو احتياجات خاصة للوصول.",
    requestReservation: "طلب الحجز",
    sending: "جارٍ الإرسال...",

    mondayClosed: "نحن مغلقون يوم الاثنين.",
    sundayLunchOnly: "في يوم الأحد نقبل الحجوزات للغداء فقط.",
    sundayLunchPrompt: "يرجى اختيار وقت الغداء.",
    submitError:
      "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا عبر الهاتف.",
    subject: "طلب حجز جديد - Senhor Peixe",

    successTitle: "تم إرسال طلب الحجز",
    successLine1: "شكرًا لطلب الحجز.",
    successLine2:
      "سيتواصل معك فريقنا قريبًا لتأكيد التوفر.",

    largeGroupsLine1:
      "للحجوزات التي تزيد عن 10 أشخاص أو طلبات المناسبات الخاصة،",
    largeGroupsLine2: "نوصي بالتواصل معنا مباشرة عبر الهاتف،",
    largeGroupsLine3: "حتى نتمكن من مساعدتك بشكل أفضل.",
    choosePhone: "اختر الرقم للاتصال",
    call: "اتصال",

    footer: "Senhor Peixe — منذ 1999",
  },
  hi: {
    close: "बंद करें",
    pageTitle: "आरक्षण",
    pageSubtitle:
      "अपनी टेबल आरक्षित करें और हमें आपके लिए विशेष अनुभव तैयार करने दें।",
    requestLabel: "आरक्षण अनुरोध",
    yourTable: "आपकी टेबल",

    name: "नाम",
    namePlaceholder: "आपका पूरा नाम",
    date: "तारीख",
    time: "समय",
    select: "चुनें",
    lunch: "दोपहर का भोजन",
    dinner: "रात्रि भोजन",
    contact: "संपर्क",
    phonePlaceholder: "आपका फोन नंबर",
    peopleNumber: "लोगों की संख्या",
    onePerson: "1 व्यक्ति",
    people: "व्यक्ति",
    moreThanTen: "10+ व्यक्ति",
    notes: "अतिरिक्त नोट्स",
    notesPlaceholder:
      "कृपया हमें किसी एलर्जी, विशेष अवसर, टेबल पसंद या पहुँच संबंधी विशेष आवश्यकता के बारे में बताएं।",
    requestReservation: "आरक्षण अनुरोध भेजें",
    sending: "भेजा जा रहा है...",

    mondayClosed: "हम सोमवार को बंद रहते हैं।",
    sundayLunchOnly: "रविवार को हम केवल दोपहर के भोजन के लिए आरक्षण स्वीकार करते हैं।",
    sundayLunchPrompt: "कृपया दोपहर के भोजन का समय चुनें।",
    submitError:
      "आपका अनुरोध भेजा नहीं जा सका। कृपया फिर से प्रयास करें या फोन द्वारा संपर्क करें।",
    subject: "नया आरक्षण अनुरोध - Senhor Peixe",

    successTitle: "आरक्षण अनुरोध भेज दिया गया",
    successLine1: "आपके आरक्षण अनुरोध के लिए धन्यवाद।",
    successLine2:
      "उपलब्धता की पुष्टि करने के लिए हमारी टीम शीघ्र ही आपसे संपर्क करेगी।",

    largeGroupsLine1:
      "10 से अधिक लोगों के आरक्षण या निजी कार्यक्रमों के लिए,",
    largeGroupsLine2: "हम सीधे फोन द्वारा संपर्क करने की सलाह देते हैं,",
    largeGroupsLine3: "ताकि हम आपके अनुरोध में बेहतर सहायता कर सकें।",
    choosePhone: "कॉल करने के लिए नंबर चुनें",
    call: "कॉल करें",

    footer: "Senhor Peixe — 1999 से",
  },
} as const

function getDayFromDateString(dateString: string): number | null {
  if (!dateString) return null
  return new Date(`${dateString}T00:00:00`).getDay()
}

function isDinnerTime(hora: string): boolean {
  return DINNER_TIMES.some((t) => t === hora)
}

export default function ReservasPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sundayLunchPrompt, setSundayLunchPrompt] = useState(false)
  const [state] = useForm("meenpror")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [phoneOpen, setPhoneOpen] = useState(false)

  const selectedDay = getDayFromDateString(formData.data)
  const isMondayClosed = selectedDay === 1
  const isSundayLunchOnly = selectedDay === 0
  const isSundayDinnerSelection = isSundayLunchOnly && isDinnerTime(formData.hora)

  const availabilityAllowsSubmit = !isMondayClosed && !isSundayDinnerSelection

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === "data") {
      const day = getDayFromDateString(value)

      setFormData((prev) => {
        const next = { ...prev, data: value }

        if (day === 0 && isDinnerTime(prev.hora)) {
          next.hora = ""
          setSundayLunchPrompt(true)
        } else {
          setSundayLunchPrompt(false)
        }

        return next
      })

      return
    }

    if (name === "hora") {
      setFormData({ ...formData, hora: value })
      if (value) setSundayLunchPrompt(false)
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitted(false)
    setSubmitError("")

    const day = getDayFromDateString(formData.data)

    if (day === 1) {
      setSubmitError(t.mondayClosed)
      return
    }

    if (day === 0 && isDinnerTime(formData.hora)) {
      setSubmitError(t.sundayLunchOnly)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meenpror", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: t.subject,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar reserva")
      }

      setIsSubmitted(true)
      setFormData({ ...INITIAL_FORM_DATA })
      setSundayLunchPrompt(false)
    } catch (error) {
      setSubmitError(t.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true)
      setFormData({ ...INITIAL_FORM_DATA })
      setSundayLunchPrompt(false)
    }
  }, [state.succeeded])

  useEffect(() => {
    document.body.style.overflow = phoneOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [phoneOpen])

  useEffect(() => {
    if (!phoneOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPhoneOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [phoneOpen])

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="reservas" />

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
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-16 text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
            {t.requestLabel}
          </p>

          <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
            <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
              -
            </span>

            <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
              {t.yourTable}
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

        {isSubmitted ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#10243d]/10">
              <svg
                className="h-10 w-10 text-[#10243d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="mb-5 font-serif text-2xl text-[#10243d]">
              {t.successTitle}
            </h2>

            <div className="space-y-2 text-center font-serif leading-relaxed text-[#5f7285]">
              <p>{t.successLine1}</p>
              <p>{t.successLine2}</p>
            </div>

            <div
              className="mx-auto mt-12 h-px w-28 bg-gradient-to-r from-transparent via-[#c8a96a]/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-12">
            <div className="group">
              <label
                htmlFor="nome"
                className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
              >
                {t.name}
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                autoComplete="name"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                placeholder={t.namePlaceholder}
              />

              <ValidationError
                prefix={t.name}
                field="nome"
                errors={state.errors}
                className="mt-2 font-serif text-sm text-[#b65a5a]"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="group">
                <label
                  htmlFor="data"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.date}
                </label>

                <input
                  type="date"
                  id="data"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                />

                {isMondayClosed && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 font-serif text-sm leading-relaxed text-[#b65a5a]"
                  >
                    {t.mondayClosed}
                  </p>
                )}

                <ValidationError
                  prefix={t.date}
                  field="data"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="hora"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.time}
                </label>

                <select
                  id="hora"
                  name="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full cursor-pointer border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                >
                  <option value="">{t.select}</option>

                  <optgroup label={t.lunch}>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                  </optgroup>

                  <optgroup label={t.dinner}>
                    <option value="19:00" disabled={isSundayLunchOnly}>
                      19:00
                    </option>
                    <option value="19:30" disabled={isSundayLunchOnly}>
                      19:30
                    </option>
                    <option value="20:00" disabled={isSundayLunchOnly}>
                      20:00
                    </option>
                    <option value="20:30" disabled={isSundayLunchOnly}>
                      20:30
                    </option>
                    <option value="21:00" disabled={isSundayLunchOnly}>
                      21:00
                    </option>
                    <option value="21:30" disabled={isSundayLunchOnly}>
                      21:30
                    </option>
                    <option value="22:00" disabled={isSundayLunchOnly}>
                      22:00
                    </option>
                  </optgroup>
                </select>

                {sundayLunchPrompt && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-2 font-serif text-sm leading-relaxed text-[#5a6c7d]"
                  >
                    {t.sundayLunchPrompt}
                  </p>
                )}

                <ValidationError
                  prefix={t.time}
                  field="hora"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="group">
                <label
                  htmlFor="contacto"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.contact}
                </label>

                <PhoneInput
                  id="contacto"
                  name="contacto"
                  international
                  defaultCountry="PT"
                  value={formData.contacto}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      contacto: value || "",
                    }))
                  }
                  className="phone-input-senhor-peixe"
                  placeholder={t.phonePlaceholder}
                  required
                />

                <ValidationError
                  prefix={t.contact}
                  field="contacto"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="pessoas"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.peopleNumber}
                </label>

                <select
                  id="pessoas"
                  name="pessoas"
                  required
                  value={formData.pessoas}
                  onChange={handleChange}
                  className="w-full cursor-pointer border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors focus:border-[#10243d]"
                >
                  <option value="">{t.select}</option>
                  <option value="1">{t.onePerson}</option>
                  <option value="2">2 {t.people}</option>
                  <option value="3">3 {t.people}</option>
                  <option value="4">4 {t.people}</option>
                  <option value="5">5 {t.people}</option>
                  <option value="6">6 {t.people}</option>
                  <option value="7">7 {t.people}</option>
                  <option value="8">8 {t.people}</option>
                  <option value="9">9 {t.people}</option>
                  <option value="10">{t.moreThanTen}</option>
                </select>

                <ValidationError
                  prefix={t.peopleNumber}
                  field="pessoas"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="notas"
                className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
              >
                {t.notes}
              </label>

              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={formData.notas}
                onChange={handleChange}
                className="w-full resize-none border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                placeholder={t.notesPlaceholder}
              />

              <ValidationError
                prefix={t.notes}
                field="notas"
                errors={state.errors}
                className="mt-2 font-serif text-sm text-[#b65a5a]"
              />
            </div>

            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                className="text-center font-serif text-sm leading-relaxed text-[#b65a5a]"
              >
                {submitError}
              </div>
            )}

            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting || !availabilityAllowsSubmit}
                aria-busy={isSubmitting}
                className="relative inline-flex min-w-64 items-center justify-center overflow-hidden rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-9 py-4 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(16,36,61,0.18)] transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d] hover:text-[#f8ead8] hover:shadow-[0_0_0_1px_rgba(200,169,106,0.45),0_18px_42px_rgba(16,36,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:border-[#1e3a5f] disabled:hover:bg-[#1e3a5f] disabled:hover:text-white disabled:hover:shadow-[0_14px_35px_rgba(16,36,61,0.18)]"
              >
                <span
                  className={`transition-opacity duration-300 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {t.requestReservation}
                </span>

                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    <span className="tracking-[0.18em]">{t.sending}</span>
                  </span>
                )}
              </button>
            </div>

            <p className="text-center font-serif text-sm leading-relaxed text-[#8a9ba8]">
              {t.largeGroupsLine1}
              <br />
              {t.largeGroupsLine2}
              <br />
              {t.largeGroupsLine3}
              <br />

              <button
                type="button"
                onClick={() => setPhoneOpen(true)}
                aria-label={t.call}
                className="mt-4 inline-flex items-center justify-center text-[#10243d] transition-colors hover:text-[#c8a96a]"
              >
                <PhoneIcon className="h-6 w-6" />
              </button>
            </p>
          </form>
        )}
      </div>

      {/* Phone chooser */}
      {phoneOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b12]/80 px-6 backdrop-blur-md">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label={t.close}
            onClick={() => setPhoneOpen(false)}
          />

          <div className="relative w-full max-w-sm border border-[#c9a46a]/35 bg-[#03111f]/95 p-8 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setPhoneOpen(false)}
              className="absolute right-5 top-5 text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
            >
              {t.close}
            </button>

            <p className="mt-8 font-serif text-xl text-white">
              {t.choosePhone}
            </p>

            <div className="mt-8 space-y-4">
              {PHONE_NUMBERS.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="block border border-[#c9a46a]/45 px-6 py-4 font-serif text-lg tracking-[0.12em] text-[#d8b77b] transition hover:bg-[#c9a46a]/10 hover:text-[#f1d7a0]"
                >
                  {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

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
          href="https://facebook.com"
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