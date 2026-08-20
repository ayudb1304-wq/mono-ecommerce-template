import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { TRIP } from '@/content/trip'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const title = `${TRIP.name} | ${TRIP.groom}'s Bachelor Trip`;
const description = `${TRIP.groom} is getting married, so we are taking him to ${TRIP.destination} from ${TRIP.dateRange}. Crew, plan, itinerary and photos, all in one place.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: TRIP.name,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
