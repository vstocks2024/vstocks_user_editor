import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TemplateProvider from "@/context/template"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Editor--VSTOCKS',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TemplateProvider>
      <body className={inter.className}>{children}</body>
      </TemplateProvider>
    </html>
  )
}
