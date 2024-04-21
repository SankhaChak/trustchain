import clsx from 'clsx'
import { Inter, Lexend } from 'next/font/google'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - TrustChain',
    default:
      'TrustChain - The Future of Decentralized Reviews on the Blockchain',
  },
  description:
    'Enhancing trust worldwide in the Web3 ecosystem. TrustChain leverages blockchain to ensure transparent, immutable, and honest reviews.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
