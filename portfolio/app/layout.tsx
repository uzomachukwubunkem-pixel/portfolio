import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

export const metadata: Metadata = {
  title: 'Uzoma Chukwubunkem | Software Developer',
  description:
    'Mechanical Engineer turned Full-Stack Developer. Bridging hardware and software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}