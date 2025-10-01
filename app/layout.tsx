import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@/components/SpeedInsightsWrapper'
import { PerformanceMetrics } from '@/components/PerformanceMetrics'

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial']
})

// Inline critical CSS
const criticalCss = `
  /* Critical CSS inlined in the head */
  body { margin: 0; font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: #ffffff; color: #000000; }
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/images/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Naresh Rana',
    startupImage: [
      {
        url: '/images/splash.png',
      }
    ]
  },
}

// Preload critical resources
const preloadResources = [
  { href: 'https://fonts.googleapis.com', as: 'font', crossOrigin: 'anonymous' as const },
  { href: 'https://fonts.gstatic.com', as: 'font', crossOrigin: 'anonymous' as const },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        
        {/* Preconnect to external domains */}
        {preloadResources.map((resource, index) => (
          <link
            key={index}
            rel="preconnect"
            href={resource.href}
            crossOrigin={resource.crossOrigin}
          />
        ))}
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        
        {/* Add canonical URL for SEO */}
        <link rel="canonical" href="https://nareshrana.vercel.app/" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
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
