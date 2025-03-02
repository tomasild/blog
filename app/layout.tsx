import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Modern Blog | Home",
    template: "%s | Modern Blog",
  },
  description: "A modern blog built with Next.js, Tailwind CSS, and shadcn/ui",
  keywords: ["blog", "next.js", "tailwind", "shadcn"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourblog.com",
    title: "Modern Blog",
    description: "A modern blog built with Next.js, Tailwind CSS, and shadcn/ui",
    siteName: "Modern Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Blog",
    description: "A modern blog built with Next.js, Tailwind CSS, and shadcn/ui",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'