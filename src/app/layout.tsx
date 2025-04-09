import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/app/Components/nav-bar/index'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Thiago Lourenço',
  description: 'Portifolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen `}
      >
        <div className="min-h-screen lg:grid lg:grid-cols-app ">
          <NavBar />
          <main className="max-w-[100vw] pt-24 lg:pt-24 px-4 lg:col-start-2 text-white bg-slate-950">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
