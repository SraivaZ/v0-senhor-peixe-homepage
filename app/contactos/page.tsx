"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
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

function EmailIcon({ className = "" }: { className?: string }) {
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
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  )
}

const INITIAL_FORM_DATA = {
  nome: "",
  email: "",
  mensagem: "",
}

const PHONE_NUMBERS = [
  { label: "+351 21 895 5892", href: "tel:+351218955892" },
  { label: "+351 914 671 702", href: "tel:+351914671702" },
]

const CONTACT_EMAIL = "reservas@senhorpeixe.pt"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Senhor+Peixe/@38.7711153,-9.0950749,17z/data=!4m15!1m8!3m7!1s0xd19318fae5b0243:0x774590368c5ec79b!2sR.+da+Pimenta+35,+Parque+das+Na%C3%A7%C3%B5es,+1990-254+Lisboa!3b1!8m2!3d38.7711111!4d-9.0925!16s%2Fg%2F11rg64rhkz!3m5!1s0xd19337acbb1ab1b:0xeb80fb06738c323!8m2!3d38.7710801!4d-9.0923458!16s%2Fg%2F1tjfj34m?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=Senhor%20Peixe%2C%20Rua%20da%20Pimenta%2035%2C%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Lisboa&output=embed"

const INSTAGRAM_URL = "https://www.instagram.com/restaurante.senhor.peixe/"
const FACEBOOK_URL = "https://facebook.com"
const TRIPADVISOR_URL =
  "https://www.tripadvisor.pt/Restaurant_Review-g189158-d1163802-Reviews-Sr_Peixe-Lisbon_Lisbon_District_Central_Portugal.html"

type ContactCopy = {
  pageTitle: string
  pageSubtitle: string
  information: string
  howToReachUs: string
  address: string
  locationName: string
  schedule: string
  openStatus: string
  tuesdayToSaturday: string
  sunday: string
  phone: string
  email: string
  location: string
  findUsOnMap: string
  mapTitle: string
  message: string
  sendUsMessage: string
  nameLabel: string
  namePlaceholder: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  nameErrorPrefix: string
  emailErrorPrefix: string
  messageErrorPrefix: string
  sendError: string
  sendMessage: string
  sending: string
  sentSuccess: string
  footer: string
}

const translations: Record<string, ContactCopy> = {
  pt: {
    pageTitle: "Contactos",
    pageSubtitle: "Fale connosco, encontre-nos ou envie-nos a sua mensagem.",
    information: "Informação",
    howToReachUs: "Como chegar até nós",
    address: "Morada",
    locationName: "Parque das Nações",
    schedule: "Horário",
    openStatus: "Estamos abertos",
    tuesdayToSaturday: "Terça a Sábado",
    sunday: "Domingo",
    phone: "Telefone",
    email: "Email",
    location: "Localização",
    findUsOnMap: "Encontre-nos no mapa",
    mapTitle: "Localização do Senhor Peixe",
    message: "Mensagem",
    sendUsMessage: "Envie-nos uma mensagem",

    nameLabel: "Nome",
    namePlaceholder: "O seu nome",
    emailPlaceholder: "o.seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "A sua mensagem...",
    nameErrorPrefix: "Nome",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Mensagem",
    sendError: "O envio falhou. Verifique os dados e tente novamente.",
    sendMessage: "Enviar Mensagem",
    sending: "A enviar...",
    sentSuccess: "Mensagem enviada com sucesso. Entraremos em contacto brevemente.",

    footer: "Senhor Peixe — Desde 1999",
  },
  en: {
    pageTitle: "Contacts",
    pageSubtitle: "Contact us, find us or send us your message.",
    information: "Information",
    howToReachUs: "How to reach us",
    address: "Address",
    locationName: "Parque das Nações",
    schedule: "Opening Hours",
    openStatus: "We are open",
    tuesdayToSaturday: "Tuesday to Saturday",
    sunday: "Sunday",
    phone: "Phone",
    email: "Email",
    location: "Location",
    findUsOnMap: "Find us on the map",
    mapTitle: "Senhor Peixe location",
    message: "Message",
    sendUsMessage: "Send us a message",

    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    nameErrorPrefix: "Name",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Message",
    sendError: "The message could not be sent. Please check your details and try again.",
    sendMessage: "Send Message",
    sending: "Sending...",
    sentSuccess: "Message sent successfully. We will contact you shortly.",

    footer: "Senhor Peixe — Since 1999",
  },
  es: {
    pageTitle: "Contactos",
    pageSubtitle: "Contáctenos, encuéntrenos o envíenos su mensaje.",
    information: "Información",
    howToReachUs: "Cómo llegar hasta nosotros",
    address: "Dirección",
    locationName: "Parque das Nações",
    schedule: "Horario",
    openStatus: "Estamos abiertos",
    tuesdayToSaturday: "Martes a sábado",
    sunday: "Domingo",
    phone: "Teléfono",
    email: "Email",
    location: "Ubicación",
    findUsOnMap: "Encuéntrenos en el mapa",
    mapTitle: "Ubicación de Senhor Peixe",
    message: "Mensaje",
    sendUsMessage: "Envíenos un mensaje",

    nameLabel: "Nombre",
    namePlaceholder: "Su nombre",
    emailPlaceholder: "su.email@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Su mensaje...",
    nameErrorPrefix: "Nombre",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Mensaje",
    sendError: "No se pudo enviar el mensaje. Revise los datos e inténtelo de nuevo.",
    sendMessage: "Enviar mensaje",
    sending: "Enviando...",
    sentSuccess: "Mensaje enviado correctamente. Nos pondremos en contacto con usted en breve.",

    footer: "Senhor Peixe — Desde 1999",
  },
  fr: {
    pageTitle: "Contacts",
    pageSubtitle: "Contactez-nous, trouvez-nous ou envoyez-nous votre message.",
    information: "Information",
    howToReachUs: "Comment nous rejoindre",
    address: "Adresse",
    locationName: "Parque das Nações",
    schedule: "Horaires",
    openStatus: "Nous sommes ouverts",
    tuesdayToSaturday: "Du mardi au samedi",
    sunday: "Dimanche",
    phone: "Téléphone",
    email: "Email",
    location: "Localisation",
    findUsOnMap: "Nous trouver sur la carte",
    mapTitle: "Localisation du Senhor Peixe",
    message: "Message",
    sendUsMessage: "Envoyez-nous un message",

    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre.email@exemple.com",
    messageLabel: "Message",
    messagePlaceholder: "Votre message...",
    nameErrorPrefix: "Nom",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Message",
    sendError: "L’envoi a échoué. Veuillez vérifier vos informations et réessayer.",
    sendMessage: "Envoyer le message",
    sending: "Envoi...",
    sentSuccess: "Message envoyé avec succès. Nous vous contacterons prochainement.",

    footer: "Senhor Peixe — Depuis 1999",
  },
  de: {
    pageTitle: "Kontakt",
    pageSubtitle: "Kontaktieren Sie uns, finden Sie uns oder senden Sie uns Ihre Nachricht.",
    information: "Information",
    howToReachUs: "So erreichen Sie uns",
    address: "Adresse",
    locationName: "Parque das Nações",
    schedule: "Öffnungszeiten",
    openStatus: "Wir haben geöffnet",
    tuesdayToSaturday: "Dienstag bis Samstag",
    sunday: "Sonntag",
    phone: "Telefon",
    email: "E-Mail",
    location: "Standort",
    findUsOnMap: "Finden Sie uns auf der Karte",
    mapTitle: "Standort von Senhor Peixe",
    message: "Nachricht",
    sendUsMessage: "Senden Sie uns eine Nachricht",

    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    emailPlaceholder: "ihre.email@beispiel.com",
    messageLabel: "Nachricht",
    messagePlaceholder: "Ihre Nachricht...",
    nameErrorPrefix: "Name",
    emailErrorPrefix: "E-Mail",
    messageErrorPrefix: "Nachricht",
    sendError: "Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
    sendMessage: "Nachricht senden",
    sending: "Wird gesendet...",
    sentSuccess: "Nachricht erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.",

    footer: "Senhor Peixe — Seit 1999",
  },
  it: {
    pageTitle: "Contatti",
    pageSubtitle: "Contattateci, trovateci o inviateci il vostro messaggio.",
    information: "Informazioni",
    howToReachUs: "Come raggiungerci",
    address: "Indirizzo",
    locationName: "Parque das Nações",
    schedule: "Orario",
    openStatus: "Siamo aperti",
    tuesdayToSaturday: "Da martedì a sabato",
    sunday: "Domenica",
    phone: "Telefono",
    email: "Email",
    location: "Posizione",
    findUsOnMap: "Trovateci sulla mappa",
    mapTitle: "Posizione di Senhor Peixe",
    message: "Messaggio",
    sendUsMessage: "Inviateci un messaggio",

    nameLabel: "Nome",
    namePlaceholder: "Il vostro nome",
    emailPlaceholder: "la.vostra.email@esempio.com",
    messageLabel: "Messaggio",
    messagePlaceholder: "Il vostro messaggio...",
    nameErrorPrefix: "Nome",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Messaggio",
    sendError: "Invio non riuscito. Verificate i dati e riprovate.",
    sendMessage: "Invia messaggio",
    sending: "Invio...",
    sentSuccess: "Messaggio inviato con successo. Vi contatteremo a breve.",

    footer: "Senhor Peixe — Dal 1999",
  },
  ru: {
    pageTitle: "Контакты",
    pageSubtitle: "Свяжитесь с нами, найдите нас или отправьте нам сообщение.",
    information: "Информация",
    howToReachUs: "Как нас найти",
    address: "Адрес",
    locationName: "Parque das Nações",
    schedule: "Часы работы",
    openStatus: "Мы открыты",
    tuesdayToSaturday: "Со вторника по субботу",
    sunday: "Воскресенье",
    phone: "Телефон",
    email: "Email",
    location: "Местоположение",
    findUsOnMap: "Найдите нас на карте",
    mapTitle: "Местоположение Senhor Peixe",
    message: "Сообщение",
    sendUsMessage: "Отправьте нам сообщение",

    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "Сообщение",
    messagePlaceholder: "Ваше сообщение...",
    nameErrorPrefix: "Имя",
    emailErrorPrefix: "Email",
    messageErrorPrefix: "Сообщение",
    sendError: "Не удалось отправить сообщение. Проверьте данные и попробуйте снова.",
    sendMessage: "Отправить сообщение",
    sending: "Отправка...",
    sentSuccess: "Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",

    footer: "Senhor Peixe — С 1999 года",
  },
  zh: {
    pageTitle: "联系方式",
    pageSubtitle: "欢迎联系我们、查找我们的位置或发送您的留言。",
    information: "信息",
    howToReachUs: "如何找到我们",
    address: "地址",
    locationName: "Parque das Nações",
    schedule: "营业时间",
    openStatus: "我们正在营业",
    tuesdayToSaturday: "星期二至星期六",
    sunday: "星期日",
    phone: "电话",
    email: "电子邮件",
    location: "位置",
    findUsOnMap: "在地图上找到我们",
    mapTitle: "Senhor Peixe 位置",
    message: "留言",
    sendUsMessage: "给我们留言",

    nameLabel: "姓名",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "留言",
    messagePlaceholder: "您的留言...",
    nameErrorPrefix: "姓名",
    emailErrorPrefix: "电子邮件",
    messageErrorPrefix: "留言",
    sendError: "留言发送失败。请检查资料后重试。",
    sendMessage: "发送留言",
    sending: "正在发送...",
    sentSuccess: "留言已成功发送。我们会尽快与您联系。",

    footer: "Senhor Peixe — 始于 1999 年",
  },
  ar: {
    pageTitle: "اتصل بنا",
    pageSubtitle: "تواصل معنا، اعثر علينا أو أرسل لنا رسالتك.",
    information: "معلومات",
    howToReachUs: "كيف تصل إلينا",
    address: "العنوان",
    locationName: "Parque das Nações",
    schedule: "ساعات العمل",
    openStatus: "نحن مفتوحون",
    tuesdayToSaturday: "من الثلاثاء إلى السبت",
    sunday: "الأحد",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    findUsOnMap: "اعثر علينا على الخريطة",
    mapTitle: "موقع Senhor Peixe",
    message: "رسالة",
    sendUsMessage: "أرسل لنا رسالة",

    nameLabel: "الاسم",
    namePlaceholder: "اسمك",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "الرسالة",
    messagePlaceholder: "رسالتك...",
    nameErrorPrefix: "الاسم",
    emailErrorPrefix: "البريد الإلكتروني",
    messageErrorPrefix: "الرسالة",
    sendError: "تعذر إرسال الرسالة. يرجى التحقق من البيانات والمحاولة مرة أخرى.",
    sendMessage: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    sentSuccess: "تم إرسال الرسالة بنجاح. سنتواصل معك قريباً.",

    footer: "Senhor Peixe — منذ 1999",
  },
  hi: {
    pageTitle: "संपर्क",
    pageSubtitle: "हमसे संपर्क करें, हमें खोजें या अपना संदेश भेजें।",
    information: "जानकारी",
    howToReachUs: "हम तक कैसे पहुँचें",
    address: "पता",
    locationName: "Parque das Nações",
    schedule: "समय",
    openStatus: "हम खुले हैं",
    tuesdayToSaturday: "मंगलवार से शनिवार",
    sunday: "रविवार",
    phone: "फ़ोन",
    email: "ईमेल",
    location: "स्थान",
    findUsOnMap: "मानचित्र पर हमें खोजें",
    mapTitle: "Senhor Peixe का स्थान",
    message: "संदेश",
    sendUsMessage: "हमें संदेश भेजें",

    nameLabel: "नाम",
    namePlaceholder: "आपका नाम",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "संदेश",
    messagePlaceholder: "आपका संदेश...",
    nameErrorPrefix: "नाम",
    emailErrorPrefix: "ईमेल",
    messageErrorPrefix: "संदेश",
    sendError: "संदेश भेजा नहीं जा सका। कृपया विवरण जाँचें और फिर से प्रयास करें।",
    sendMessage: "संदेश भेजें",
    sending: "भेजा जा रहा है...",
    sentSuccess: "संदेश सफलतापूर्वक भेजा गया। हम शीघ्र ही आपसे संपर्क करेंगे।",

    footer: "Senhor Peixe — 1999 से",
  },
}

export default function ContactosPage() {
  const { language } = useLanguage()
  const t = translations[language] ?? translations.pt

  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [state, handleSubmit] = useForm("xykolbyw")

  useEffect(() => {
    if (state.submitting) {
      setIsSubmitted(false)
    }
  }, [state.submitting])

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ ...INITIAL_FORM_DATA })
      setIsSubmitted(true)

      const timeout = setTimeout(() => setIsSubmitted(false), 5000)

      return () => clearTimeout(timeout)
    }
  }, [state.succeeded])

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteMenu activePage="contactos" />

      {/* Header */}
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

      {/* Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
              {t.information}
            </p>

            <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
              <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                -
              </span>

              <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                {t.howToReachUs}
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white/75 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.address}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.locationName}
              </h3>

              <div
                className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e2bd93]/80 to-transparent"
                aria-hidden="true"
              />

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 font-serif text-base leading-relaxed text-[#5f7285] transition-colors hover:text-[#10243d]"
              >
                <span>
                  Rua da Pimenta 35, Parque das Nações, Zona Ribeirinha Norte,
                  1990-254 Lisboa
                </span>

                <MapPinIcon className="h-5 w-5 shrink-0 text-[#c8a96a]" />
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white/75 p-8 text-center shadow-sm">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.schedule}
              </p>

              <h3 className="mt-3 font-serif text-2xl uppercase tracking-[0.16em] text-[#10243d]">
                {t.openStatus}
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
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group flex items-center justify-center gap-5 rounded-2xl border border-stone-200/80 bg-white/75 p-7 shadow-sm transition-all duration-300 hover:border-[#c8a96a]/60 hover:shadow-md">
              <PhoneIcon className="h-7 w-7 shrink-0 text-[#10243d] transition-colors group-hover:text-[#c8a96a]" />

              <div>
                <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">
                  {t.phone}
                </p>

                <div className="mt-2 space-y-1">
                  {PHONE_NUMBERS.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block font-serif text-lg tracking-wide text-[#10243d] transition-colors hover:text-[#c8a96a] sm:text-xl"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center justify-center gap-5 rounded-2xl border border-stone-200/80 bg-white/75 p-7 shadow-sm transition-all duration-300 hover:border-[#c8a96a]/60 hover:shadow-md"
            >
              <EmailIcon className="h-7 w-7 shrink-0 text-[#10243d] transition-colors group-hover:text-[#c8a96a]" />

              <div>
                <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">
                  {t.email}
                </p>

                <p className="mt-2 break-all font-serif text-base tracking-wide text-[#10243d] sm:text-lg">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </a>
          </div>

          {/* Map */}
          <section className="mt-20">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
            </div>

            <div className="mb-10 text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.location}
              </p>

              <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  {t.findUsOnMap}
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

            <div className="overflow-hidden rounded-2xl border border-stone-200/80 shadow-xl">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
                className="w-full"
              />
            </div>
          </section>

          {/* Contact Form */}
          <section className="mt-20">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
            </div>

            <div className="mb-12 text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#c8a96a]">
                {t.message}
              </p>

              <div className="mt-3 flex items-center justify-center gap-x-3 sm:gap-x-4">
                <span className="hidden font-serif text-lg text-[#10243d] sm:inline">
                  -
                </span>

                <h2 className="max-w-[92vw] font-serif text-xl uppercase leading-relaxed tracking-[0.12em] text-[#10243d] sm:text-3xl sm:tracking-[0.32em]">
                  {t.sendUsMessage}
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

            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl space-y-10 rounded-2xl border border-stone-200/80 bg-white/75 p-6 shadow-sm sm:p-10"
            >
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.nameLabel}
                </label>

                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  required
                  autoComplete="name"
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder={t.namePlaceholder}
                />

                <ValidationError
                  prefix={t.nameErrorPrefix}
                  field="nome"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.email}
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  autoComplete="email"
                  className="w-full border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder={t.emailPlaceholder}
                />

                <ValidationError
                  prefix={t.emailErrorPrefix}
                  field="email"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block font-serif text-sm uppercase tracking-widest text-[#5a6c7d]"
                >
                  {t.messageLabel}
                </label>

                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full resize-none border-0 border-b border-[#d4d0c8] bg-transparent py-3 font-serif text-lg text-[#2c3e50] outline-none transition-colors placeholder:text-[#a0a0a0] focus:border-[#10243d]"
                  placeholder={t.messagePlaceholder}
                />

                <ValidationError
                  prefix={t.messageErrorPrefix}
                  field="mensagem"
                  errors={state.errors}
                  className="mt-2 font-serif text-sm text-[#b65a5a]"
                />
              </div>

              {state.errors && state.errors.length > 0 && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="text-center font-serif text-sm leading-relaxed text-[#b65a5a]"
                >
                  {t.sendError}
                </div>
              )}

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  aria-busy={state.submitting}
                  className="relative inline-flex min-w-64 items-center justify-center overflow-hidden rounded-full border border-[#1e3a5f] bg-[#1e3a5f] px-9 py-4 font-serif text-sm uppercase tracking-[0.18em] text-white shadow-[0_14px_35px_rgba(16,36,61,0.18)] transition-all duration-300 hover:border-[#c8a96a] hover:bg-[#10243d] hover:text-[#f8ead8] hover:shadow-[0_0_0_1px_rgba(200,169,106,0.45),0_18px_42px_rgba(16,36,61,0.25)] focus:outline-none focus:ring-2 focus:ring-[#c8a96a] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      state.submitting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {t.sendMessage}
                  </span>

                  {state.submitting && (
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
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>

                      <span className="tracking-[0.2em]">{t.sending}</span>
                    </span>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="text-center">
                  <p className="font-serif text-base leading-relaxed text-[#10243d]">
                    {t.sentSuccess}
                  </p>
                </div>
              )}
            </form>
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