import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vodoinstalater Cile | Vodoinstalaterske usluge',
  description: 'Vodoinstalater Cile – popravke kvarova, vodovodne instalacije, montaža bojlera i sanitarija. Kontaktirajte nas za dogovor.',
  generator: 'v0.app',
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vodoinstalater Cile | Pouzdane vodoinstalaterske usluge',
    description: 'Pouzdana rešenja za popravke, montaže i vodovodne instalacije.',
    type: 'website',
    locale: 'sr_RS',
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#0878D1' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sr-Latn"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

export const dynamic = 'force-static'
