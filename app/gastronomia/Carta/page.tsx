"use client"

const navy = "#10243d"
const gold = "#c79a4b"

export default function CapaMenuComida() {
  return (
    <main className="menu-cover-shell">
      <section className="menu-cover">
        <div className="corner corner-top-left" />
        <div className="corner corner-top-right" />
        <div className="corner corner-bottom-left" />
        <div className="corner corner-bottom-right" />

        <div className="cover-content">
          <img
            src="/senhor-peixe-logo%20branco.png"
            alt="Senhor Peixe"
            className="cover-logo"
          />

          <h1>Senhor Peixe</h1>

          <div className="ornament">
            <span />
            <strong>◇</strong>
            <span />
          </div>

          <p>
            Cozinha Portuguesa
            <br />
            Peixe e Marisco
          </p>

          <small>Desde 1999</small>

          <div className="small-line" />
        </div>
      </section>

      <style jsx>{`
        .menu-cover-shell {
          min-height: 100vh;
          background: #e9e3d8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .menu-cover {
          width: min(520px, 100%);
          aspect-ratio: 0.707 / 1;
          background:
            radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 48%),
            ${navy};
          position: relative;
          color: white;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.22);
          overflow: hidden;
        }

        .menu-cover::before {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1.5px solid ${gold};
          pointer-events: none;
        }

        .menu-cover::after {
          content: "";
          position: absolute;
          inset: 28px;
          border: 1px solid ${gold};
          opacity: 0.85;
          pointer-events: none;
        }

        .cover-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 56px;
          transform: translateY(-8px);
        }

        .cover-logo {
          width: 150px;
          height: 150px;
          object-fit: contain;
          margin-bottom: 34px;
        }

        h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 8vw, 70px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f7f3ec;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 42px 0 36px;
          color: ${gold};
        }

        .ornament span {
          width: 120px;
          height: 1px;
          background: ${gold};
        }

        .ornament strong {
          font-size: 18px;
          font-weight: 400;
          line-height: 1;
        }

        p {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          line-height: 1.9;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: ${gold};
        }

        small {
          margin-top: 30px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: ${gold};
        }

        .small-line {
          width: 44px;
          height: 1px;
          background: ${gold};
          margin-top: 22px;
        }

        .corner {
          position: absolute;
          width: 42px;
          height: 42px;
          border-color: ${gold};
          z-index: 2;
          opacity: 0.95;
        }

        .corner-top-left {
          top: 20px;
          left: 20px;
          border-top: 1.5px solid;
          border-left: 1.5px solid;
        }

        .corner-top-right {
          top: 20px;
          right: 20px;
          border-top: 1.5px solid;
          border-right: 1.5px solid;
        }

        .corner-bottom-left {
          bottom: 20px;
          left: 20px;
          border-bottom: 1.5px solid;
          border-left: 1.5px solid;
        }

        .corner-bottom-right {
          bottom: 20px;
          right: 20px;
          border-bottom: 1.5px solid;
          border-right: 1.5px solid;
        }

        @media (max-width: 640px) {
          .menu-cover-shell {
            padding: 24px 12px;
          }

          .cover-content {
            padding: 38px;
          }

          .cover-logo {
            width: 118px;
            height: 118px;
            margin-bottom: 30px;
          }

          h1 {
            font-size: 38px;
            letter-spacing: 0.07em;
          }

          .ornament span {
            width: 74px;
          }

          p,
          small {
            font-size: 11px;
            letter-spacing: 0.28em;
          }
        }
      `}</style>
    </main>
  )
}