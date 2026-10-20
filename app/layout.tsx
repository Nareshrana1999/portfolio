import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SpeedInsights } from '@/components/SpeedInsightsWrapper'
import { ThemeProvider } from '@/components/theme-provider'

// Inline critical CSS
const criticalCss = `
  /* Critical CSS inlined in the head */
  body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #090d12; color: #f2f6f8; }
  #__next { display: flex; flex-direction: column; min-height: 100vh; }
  #home { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
  html { scroll-behavior: smooth; }
`

export const viewport: Viewport = {
  themeColor: '#090d12',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Naresh Rana | Software Engineer · AI/ML & DevOps',
  description: 'Naresh Rana is a software engineer focused on practical software, machine learning, cloud infrastructure, and DevOps.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Naresh Rana',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />

        {/* Add canonical URL for SEO */}
        <link rel="canonical" href="https://naresh-rana-1999.vercel.app/" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} storageKey="naresh-portfolio-theme">
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' && <SpeedInsights />}
      </body>
    </html>
  )
}
