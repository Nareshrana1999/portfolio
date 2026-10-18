import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SpeedInsights } from '@/components/SpeedInsightsWrapper'
import { PerformanceMetrics } from '@/components/PerformanceMetrics'

// Inline critical CSS
const criticalCss = `
  /* Critical CSS inlined in the head */
  body { margin: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #ffffff; color: #000000; }
  #__next { display: flex; flex-direction: column; min-height: 100vh; }
  #home { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
  html { scroll-behavior: smooth; }
`

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Naresh Rana - Full Stack Developer & DevOps Engineer',
  description: 'Professional portfolio showcasing my work in Full-Stack Development, DevOps, and AI/ML',
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
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />

        {/* Add canonical URL for SEO */}
        <link rel="canonical" href="https://naresh-rana-1999.vercel.app/" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'development' && (
          <>
            <PerformanceMetrics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
