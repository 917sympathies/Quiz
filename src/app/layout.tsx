import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import "./global.css"

const noto_sans = Noto_Sans({subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Quiz app to play with friends!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  )
}
