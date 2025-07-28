import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'React Native UI Components',
  description: 'A beautiful React Native UI component library with TypeScript support',
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