import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const siteUrl = "https://v0-senhor-peixe-homepage.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Senhor Peixe | Cozinha Portuguesa - Peixe e Marisco",
    template: "%s | Senhor Peixe",
  },
  description:
    "Restaurante de peixe e marisco em Portugal. Cozinha portuguesa tradicional desde 1999.",
  applicationName: "Senhor Peixe",
  openGraph: {
    title: "Senhor Peixe | Cozinha Portuguesa - Peixe e Marisco",
    description:
      "Restaurante de peixe e marisco em Portugal. Cozinha portuguesa tradicional desde 1999.",
    url: "/",
    siteName: "Senhor Peixe",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Senhor Peixe - Cozinha Portuguesa, Peixe e Marisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senhor Peixe | Cozinha Portuguesa - Peixe e Marisco",
    description:
      "Restaurante de peixe e marisco em Lisboa, Portugal. Cozinha portuguesa tradicional desde 1999.",
    images: ["/opengraph-image.png"],
  },
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
    <html lang="pt" suppressHydrationWarning>
      <body className="font-serif antialiased">
        <LanguageProvider>{children}</LanguageProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}