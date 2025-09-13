import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio | Professional Web & Desktop Development',
  description: 'Experienced developer specializing in modern web applications and desktop solutions. View my portfolio of projects, skills, and client testimonials.',
  keywords: 'developer, portfolio, web development, desktop applications, React, JavaScript, TypeScript',
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Developer Portfolio | Professional Web & Desktop Development',
    description: 'Experienced developer specializing in modern web applications and desktop solutions.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio | Professional Web & Desktop Development',
    description: 'Experienced developer specializing in modern web applications and desktop solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="dark">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}