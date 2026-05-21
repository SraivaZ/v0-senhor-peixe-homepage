"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { Cinzel, Cormorant_Garamond, Playfair_Display } from "next/font/google"
import { languages, useLanguage, type Language } from "@/components/language-provider"

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

const menuRoutes = [
  "/gastronomia/carta",
  "/gastronomia/bebidas",
  "/gastronomia/sobremesas",
  "/garrafeira/carta",
]

const languageIntro: Record<Language, { title: string; text: string; continueLabel: string }> = {
  pt: {
    title: "Escolha o idioma",
    text: "Selecione o idioma em que pretende consultar a carta.",
    continueLabel: "Continuar",
  },
  en: {
    title: "Choose your language",
    text: "Select the language in which you would like to view the menu.",
    continueLabel: "Continue",
  },
  es: {
    title: "Elija su idioma",
    text: "Seleccione el idioma en el que desea consultar la carta.",
    continueLabel: "Continuar",
  },
  fr: {
    title: "Choisissez votre langue",
    text: "Sélectionnez la langue dans laquelle vous souhaitez consulter la carte.",
    continueLabel: "Continuer",
  },
  de: {
    title: "Sprache wählen",
    text: "Wählen Sie die Sprache, in der Sie die Speisekarte ansehen möchten.",
    continueLabel: "Weiter",
  },
  it: {
    title: "Scegli la lingua",
    text: "Seleziona la lingua in cui desideri consultare il menu.",
    continueLabel: "Continua",
  },
  ru: {
    title: "Выберите язык",
    text: "Выберите язык, на котором хотите посмотреть меню.",
    continueLabel: "Продолжить",
  },
  zh: {
    title: "选择语言",
    text: "请选择您想查看菜单的语言。",
    continueLabel: "继续",
  },
  ar: {
    title: "اختر اللغة",
    text: "اختر اللغة التي ترغب في عرض القائمة بها.",
    continueLabel: "متابعة",
  },
  hi: {
    title: "भाषा चुनें",
    text: "कृपया मेनू देखने के लिए अपनी पसंदीदा भाषा चुनें।",
    continueLabel: "जारी रखें",
  },
}

function shouldShowGate(pathname: string | null) {
  if (!pathname) return false
  const normalizedPath = pathname.toLowerCase().replace(/\/$/, "")
  return menuRoutes.some((route) => normalizedPath === route)
}

export default function MenuLanguageGate() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(language)
  const [isVisible, setIsVisible] = useState(false)

  const copy = useMemo(() => languageIntro[selectedLanguage] ?? languageIntro.pt, [selectedLanguage])

  useEffect(() => {
    setSelectedLanguage(language)
  }, [language])

  useEffect(() => {
    if (!shouldShowGate(pathname)) return

    const hasSeenGate = sessionStorage.getItem("senhor-peixe-menu-language-gate-seen")

    if (!hasSeenGate) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [pathname])

  function closeGate(languageToApply: Language) {
    setLanguage(languageToApply)
    sessionStorage.setItem("senhor-peixe-menu-language-gate-seen", "true")
    setIsVisible(false)
    document.body.style.overflow = ""
  }

  if (!isVisible) return null

  return (
    <div className={`sp-language-gate ${cormorant.className}`} role="dialog" aria-modal="true" aria-labelledby="sp-language-gate-title">
      <div className="sp-language-gate-card">
        <img src="/senhor-peixe-logo%20branco.png" alt="Senhor Peixe" className="sp-language-gate-logo" />

        <p className={`sp-language-gate-eyebrow ${cinzel.className}`}>Senhor Peixe</p>
        <h2 id="sp-language-gate-title" className={playfair.className}>{copy.title}</h2>
        <p className="sp-language-gate-text">{copy.text}</p>

        <div className="sp-language-gate-grid">
          {languages.map((item) => (
            <button
              type="button"
              key={item.code}
              className={`sp-language-gate-option ${selectedLanguage === item.code ? "sp-language-gate-option-active" : ""}`}
              onClick={() => setSelectedLanguage(item.code)}
            >
              <span>{item.short}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </div>

        <button type="button" className={`sp-language-gate-confirm ${cinzel.className}`} onClick={() => closeGate(selectedLanguage)}>
          {copy.continueLabel}
        </button>
      </div>

      <style jsx global>{`
        .sp-language-gate {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(circle at 50% 16%, rgba(255, 255, 255, 0.14), transparent 28%),
            rgba(10, 35, 61, 0.88);
          backdrop-filter: blur(10px);
        }

        .sp-language-gate-card {
          width: min(92vw, 520px);
          padding: 42px 44px 38px;
          text-align: center;
          color: #12385c;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 253, 248, 0.98)),
            #fffdf8;
          border: 1px solid rgba(197, 154, 97, 0.74);
          box-shadow:
            0 28px 80px rgba(0, 0, 0, 0.28),
            inset 0 0 0 1px rgba(255, 255, 255, 0.65);
        }

        .sp-language-gate-logo {
          width: 70px;
          height: auto;
          display: block;
          margin: 0 auto 14px;
          filter: brightness(0) saturate(100%) invert(14%) sepia(50%) saturate(1200%) hue-rotate(179deg) brightness(88%) contrast(97%);
        }

        .sp-language-gate-eyebrow {
          margin: 0 0 14px;
          color: #c59a61;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .sp-language-gate h2 {
          margin: 0;
          color: #12385c;
          font-size: 42px;
          font-weight: 400;
          line-height: 1;
        }

        .sp-language-gate-text {
          max-width: 360px;
          margin: 18px auto 28px;
          color: #415b78;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 500;
        }

        .sp-language-gate-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 0 auto 24px;
        }

        .sp-language-gate-option {
          display: flex;
          align-items: center;
          gap: 11px;
          min-height: 48px;
          padding: 10px 12px;
          cursor: pointer;
          color: #12385c;
          background: rgba(18, 56, 92, 0.035);
          border: 1px solid rgba(197, 154, 97, 0.35);
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .sp-language-gate-option:hover,
        .sp-language-gate-option-active {
          background: rgba(197, 154, 97, 0.12);
          border-color: rgba(197, 154, 97, 0.9);
          transform: translateY(-1px);
        }

        .sp-language-gate-option span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          min-width: 38px;
          height: 28px;
          color: #c59a61;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          border-right: 1px solid rgba(197, 154, 97, 0.42);
        }

        .sp-language-gate-option strong {
          color: #12385c;
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          text-align: left;
        }

        .sp-language-gate-confirm {
          width: 100%;
          min-height: 48px;
          color: #fffdf8;
          background: #12385c;
          border: 1px solid #12385c;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition:
            background 180ms ease,
            border-color 180ms ease;
        }

        .sp-language-gate-confirm:hover {
          background: #0d2c4a;
          border-color: #0d2c4a;
        }

        @media (max-width: 560px) {
          .sp-language-gate {
            padding: 16px;
          }

          .sp-language-gate-card {
            padding: 34px 22px 28px;
          }

          .sp-language-gate-logo {
            width: 58px;
          }

          .sp-language-gate h2 {
            font-size: 34px;
          }

          .sp-language-gate-text {
            font-size: 15px;
            margin-bottom: 22px;
          }

          .sp-language-gate-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sp-language-gate-option {
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  )
}
