import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from '@/components/SpeedInsightsWrapper'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Professional Portfolio Website',
  generator: 'Next.js',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
    other: {
      rel: 'icon',
      url: '/favicon.svg',
    }
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Portfolio'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
