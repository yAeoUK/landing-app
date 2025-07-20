import type { Metadata } from 'next'
import './globals.css'
import { landingConfig } from '@/config/landing-config'

export const metadata: Metadata = {
  title: landingConfig.appName,
  description: landingConfig.tagline.en,
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
