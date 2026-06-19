import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Daniel Michael Gabriel | State Representative District 46',
  description: 'Vote Daniel Michael Gabriel for Hawaii State Representative District 46. Common sense conservative leadership for Wahiawa and our community.',
  openGraph: {
    title: 'Daniel Michael Gabriel for District 46',
    description: 'Common sense conservative leadership for District 46.',
    images: ['/photos/hero.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-navy-950 text-white">{children}</body>
    </html>
  )
}
