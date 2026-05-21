"use client"

import { useEffect, useState } from "react"
import { languages, type Language, useLanguage } from "@/components/language-provider"

const STORAGE_KEY = "senhor-peixe-menu-language-selected"

const introCopy: Record<Language, { title: string; text: string; confirm: string }> = {
  pt: {
    title: "Escolha o idioma",
    text: "Selecione o idioma em que pretende consultar a carta.",
    confirm: "Confirmar idioma",
  },
  en: {
    title: "Choose your language",
    text: "Select the language in which you would like to view the menu.",
    confirm: "Confirm language",
  },
  es: {
    title: "Elija el idioma",
    text: "Seleccione el idioma en el que desea consultar la carta.",
    confirm: "Confirmar idioma",
  },
  fr: {
    title: "Choisissez la langue",
    text: "Sélectionnez la langue dans laquelle vous souhaitez consulter la carte.",
    confirm: "Confirmer la langue",
  },
  de: {
    title: "Sprache auswählen",
    text: "Wählen Sie die Sprache, in der Sie die Speisekarte ansehen möchten.",
    confirm: "Sprache bestätigen",
  },
  it: {
    title: "Scegli la lingua",
    text: "Selezioni la lingua in cui desidera consultare il menu.",
    confirm: "Conferma lingua",
  },
  ru: {
    title: "Выберите язык",
    text: "Выберите язык, на котором вы хотите просмотреть меню.",
    confirm: "Подтвердить язык",
  },
  zh: {
    title: "选择语言",
    text: "请选择您想查看菜单的语言。",
    confirm: "确认语言",
  },
  ar: {
    title: "اختر اللغة",
    text: "اختر اللغة التي ترغب في تصفح القائمة بها.",
    confirm: "تأكيد اللغة",
  },
  hi: {
    title: "भाषा चुनें",
    text: "कृपया वह भाषा चुनें जिसमें आप मेनू देखना चाहते हैं।",
    confirm: "भाषा की पुष्टि करें",
  },
}

export default function MenuLanguageGate() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(language)
  const copy = introCopy[selectedLanguage] ?? introCopy.pt

  useEffect(() => {
    const alreadySelected = localStorage.getItem(STORAGE_KEY)

    if (!alreadySelected) {
      setSelectedLanguage(language)
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [language])

  function confirmLanguage() {
    setLanguage(selectedLanguage)
    localStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  if (!isOpen) return null

  return (
    <div className="sp-language-gate" role="dialog" aria-modal="true" aria-labelledby="sp-language-gate-title">
      <div className="sp-language-gate-panel">
        <div className="sp-language-gate-inner">
          <p className="sp-language-gate-brand">Senhor Peixe</p>

          <h2 id="sp-language-gate-title">{copy.title}</h2>
          <p className="sp-language-gate-text">{copy.text}</p>

          <div className="sp-language-gate-list">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`sp-language-gate-option ${selectedLanguage === item.code ? "is-active" : ""}`}
                onClick={() => setSelectedLanguage(item.code)}
              >
                <span className="sp-language-gate-short">{item.short}</span>
                <span className="sp-language-gate-separator" aria-hidden="true" />
                <span className="sp-language-gate-label">{item.label}</span>
              </button>
            ))}
          </div>

          <button type="button" className="sp-language-gate-confirm" onClick={confirmLanguage}>
            {copy.confirm}
          </button>
        </div>
      </div>

      <style jsx>{`
        .sp-language-gate {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          overflow-y: auto;
          overscroll-behavior: contain;
          background: rgba(5, 20, 35, 0.74);
          padding: max(18px, env(safe-area-inset-top)) 18px max(18px, env(safe-area-inset-bottom));
          -webkit-overflow-scrolling: touch;
        }

        .sp-language-gate-panel {
          width: min(760px, 100%);
          margin: auto 0;
          border-left: 24px solid #10243d;
          border-right: 24px solid #10243d;
          background: #fffdf8;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.34);
        }

        .sp-language-gate-inner {
          padding: 52px 58px 48px;
          text-align: center;
        }

        .sp-language-gate-brand {
          margin: 0 0 28px;
          color: #c59a61;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .sp-language-gate h2 {
          margin: 0;
          color: #10243d;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 7vw, 72px);
          font-weight: 400;
          line-height: 0.98;
        }

        .sp-language-gate-text {
          max-width: 560px;
          margin: 28px auto 34px;
          color: #506785;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.28;
        }

        .sp-language-gate-list {
          display: grid;
          gap: 14px;
        }

        .sp-language-gate-option {
          display: grid;
          grid-template-columns: 86px 1px 1fr;
          align-items: center;
          width: 100%;
          min-height: 84px;
          border: 1px solid rgba(197, 154, 97, 0.38);
          background: rgba(255, 253, 248, 0.96);
          color: #10243d;
          cursor: pointer;
          font-family: Georgia, "Times New Roman", serif;
          text-align: left;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .sp-language-gate-option:hover,
        .sp-language-gate-option.is-active {
          border-color: rgba(197, 154, 97, 0.9);
          background: rgba(197, 154, 97, 0.08);
        }

        .sp-language-gate-option:active {
          transform: scale(0.99);
        }

        .sp-language-gate-short {
          color: #c59a61;
          font-size: 19px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-align: center;
          text-transform: uppercase;
        }

        .sp-language-gate-separator {
          width: 1px;
          height: 46px;
          background: rgba(197, 154, 97, 0.42);
        }

        .sp-language-gate-label {
          padding: 0 28px;
          font-size: 27px;
          font-weight: 500;
          line-height: 1.1;
        }

        .sp-language-gate-confirm {
          width: 100%;
          min-height: 58px;
          margin-top: 18px;
          border: 1px solid #10243d;
          background: #10243d;
          color: #fffdf8;
          cursor: pointer;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .sp-language-gate-confirm:hover {
          background: #0d2c4a;
          border-color: #0d2c4a;
        }

        .sp-language-gate-confirm:active {
          transform: scale(0.99);
        }

        @media (max-width: 640px) {
          .sp-language-gate {
            align-items: flex-start;
            padding: 0;
            background: #10243d;
          }

          .sp-language-gate-panel {
            width: min(92vw, 410px);
            min-height: auto;
            max-height: none;
            margin: 0 auto;
            overflow: visible;
            border-left-width: 12px;
            border-right-width: 12px;
            box-shadow: none;
          }

          .sp-language-gate-inner {
            padding: max(18px, env(safe-area-inset-top)) 23px max(92px, env(safe-area-inset-bottom));
          }

          .sp-language-gate-brand {
            margin-bottom: 13px;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.29em;
          }

          .sp-language-gate h2 {
            font-size: 36px;
            font-weight: 400;
            line-height: 0.98;
            white-space: nowrap;
          }

          .sp-language-gate-text {
            max-width: 310px;
            margin: 17px auto 24px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.32;
          }

          .sp-language-gate-list {
            gap: 8px;
          }

          .sp-language-gate-option {
            grid-template-columns: 57px 1px 1fr;
            min-height: 50px;
          }

          .sp-language-gate-short {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
          }

          .sp-language-gate-separator {
            height: 30px;
          }

          .sp-language-gate-label {
            padding: 0 16px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.08;
          }

          .sp-language-gate-confirm {
            position: relative;
            bottom: auto;
            min-height: 46px;
            margin-top: 12px;
            box-shadow: 0 12px 26px rgba(16, 36, 61, 0.18);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.17em;
          }
        }

        @media (max-width: 380px) {
          .sp-language-gate-panel {
            width: min(94vw, 390px);
            border-left-width: 10px;
            border-right-width: 10px;
          }

          .sp-language-gate-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .sp-language-gate h2 {
            font-size: 33px;
          }

          .sp-language-gate-text {
            font-size: 15px;
          }

          .sp-language-gate-option {
            min-height: 48px;
            grid-template-columns: 52px 1px 1fr;
          }

          .sp-language-gate-label {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  )
}
