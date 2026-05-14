import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Senhor Peixe | Cozinha Portuguesa - Peixe e Marisco",
  description:
    "Restaurante de peixe e marisco em Portugal. Cozinha portuguesa tradicional desde 1999.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className="font-serif antialiased">
        <LanguageProvider>{children}</LanguageProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}