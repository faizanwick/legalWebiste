import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LACS - Legal Attestation & Consultant Services',
  description: 'Professional legal attestation and consulting services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Loader />
        {children}
      </body>
    </html>
  )
}
