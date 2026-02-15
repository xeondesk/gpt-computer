import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GPT Computer - Build Apps Faster',
  description: 'No-code and AI-powered platform to build apps, websites, and digital products faster without deep coding skills required.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
