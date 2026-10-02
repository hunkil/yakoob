import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'

const poppins = Poppins({ 
  weight: ['500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  weight: ['400', '500', '600'], 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RO Service Bangalore | 60 Min Doorstep Repair',
  description: 'Certified RO service in Bangalore. Same-day water purifier repair, filter change, installation. 60-min response. Call 08050291180.',
  keywords: ['RO service Bangalore', 'RO repair near me', 'Water purifier service Bangalore'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-900">
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}