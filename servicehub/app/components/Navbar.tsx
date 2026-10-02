'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Saare brands ka mapping - ek jagah
  const brandLogos: { [key: string]: { path: string; logo: string; alt: string } } = {
    kent: { path: '/kent-service', logo: '/kent-navbar-logo.svg', alt: 'Kent Logo' },
    havells: { path: '/havells-service', logo: '/havells-logo.png', alt: 'Havells Logo' },
    pureit: { path: '/pureit-service', logo: '/pureit-logo.png', alt: 'Pureit Logo' },
    aquaguard: { path: '/aquaguard-service', logo: '/aquaguard-logo.png', alt: 'Aquaguard Logo' },
    livpure: { path: '/livpure-service', logo: '/livpure-logo.png', alt: 'Livpure Logo' },
    lg: { path: '/lg-service', logo: '/lg-logo.png', alt: 'LG Logo' },
    vguard: { path: '/vguard-service', logo: '/vguard-logo.png', alt: 'V-Guard Logo' },
  }

  // Current page ka brand detect karo
  const currentBrand = Object.values(brandLogos).find((brand) =>
    pathname?.startsWith(brand.path)
  )

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            {currentBrand ? (
              <img 
                src={currentBrand.logo} 
                alt={currentBrand.alt} 
                className="h-10 md:h-12 object-contain"
              />
            ) : (
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
            )}
            
            <div>
              <h1 className="font-poppins font-bold text-lg text-gray-900 leading-tight">
                RO Service Center
              </h1>
              <p className="text-xs text-green-600 font-medium">● ONLINE 24x7</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-primary font-medium transition">Home</a>
            <a href="/#services" className="text-gray-700 hover:text-primary font-medium transition">Services</a>
            <a href="/about" className="text-gray-700 hover:text-primary font-medium transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-primary font-medium transition">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:08050291180" className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition">
              📞 08050291180
            </a>
            <a href="/#book" className="bg-accent hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 font-medium">Home</a>
              <a href="/#services" className="text-gray-700 font-medium">Services</a>
              <a href="/about" className="text-gray-700 font-medium">About</a>
              <a href="/contact" className="text-gray-700 font-medium">Contact</a>
              <a href="tel:08050291180" className="text-primary font-semibold">📞 08050291180</a>
              <a href="/#book" className="bg-accent text-white font-semibold px-5 py-3 rounded-lg text-center">
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}