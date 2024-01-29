import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard with Next.js 14',
  description: 'A toy project for learning Next.js 14 and Mongo DB',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={[inter.className, 'bg-bg', 'text-text'].join(' ')}>{children}</body>
    </html>
  )
}
