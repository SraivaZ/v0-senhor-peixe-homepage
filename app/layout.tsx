import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Senhor Peixe | Cozinha Portuguesa - Peixe e Marisco',
  description: 'Restaurante de peixe e marisco em Portugal. Cozinha portuguesa tradicional desde 1999.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
