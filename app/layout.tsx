import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsappFloat from "@/components/WhatsappFloat"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mithunkumar.C - Web Developer | React, Next.js, TypeScript | Full-Stack Developer Portfolio",
  description:
    "Mithunkumar.C - Professional web developer with 2 years of experience specializing in React, Next.js, TypeScript, Tailwind CSS, and full-stack development. Expert in creating responsive, SEO-optimized websites and applications.",
  keywords: [
    "web developer",
    "next.js developer",
    "react developer",
    "typescript developer",
    "full-stack developer",
    "portfolio",
    "mithunkumar",
    "web development",
    "frontend development",
    "backend development",
    "tailwind css",
    "postgresql",
    "prisma orm",
  ],
  authors: [{ name: "Mithunkumar.C", url: "https://mithunkumar-portfolio.com" }],
  creator: "Mithunkumar.C",
  publisher: "Mithunkumar.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mithunkumar-portfolio.com",
    title: "Mithunkumar.C - Full-Stack Web Developer",
    description: "Professional web developer specializing in React, Next.js, TypeScript and full-stack solutions",
    siteName: "Mithunkumar.C Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mithunkumar",
    title: "Mithunkumar.C - Web Developer",
    description: "Full-stack developer with expertise in React, Next.js, and modern web technologies",
  },
  alternates: {
    canonical: "https://mithunkumar-portfolio.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta name="theme-color" content="#1a0a2e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="author" content="Mithunkumar.C" />
        <meta
          name="description"
          content="Full-stack web developer portfolio showcasing React, Next.js, and TypeScript projects"
        />
        <link rel="canonical" href="https://mithunkumar-portfolio.com" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <WhatsappFloat />
        <Analytics />
      </body>
    </html>
  )
}
