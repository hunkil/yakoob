'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function BookingForm() {
  const router = useRouter()
  const pathname = usePathname()

  // URL ke hisaab se brand detect karo
  let brandName = 'RO' // Default
  if (pathname?.startsWith('/kent-service')) brandName = 'Kent'
  else if (pathname?.startsWith('/havells-service')) brandName = 'Havells'
  else if (pathname?.startsWith('/pureit-service')) brandName = 'Pureit'
  else if (pathname?.startsWith('/aquaguard-service')) brandName = 'Aquaguard'
  else if (pathname?.startsWith('/livpure-service')) brandName = 'Livpure'
  else if (pathname?.startsWith('/lg-service')) brandName = 'LG'
  else if (pathname?.startsWith('/vguard-service')) brandName = 'V-Guard'

  const [formData, setFormData] = useState({
    name: '', mobile: '', pincode: '', service: 'RO Service & Repair'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const accessKey = "1d5d47df-4a9a-4f20-ba78-7aa07022894e"

    const formPayload = new FormData()
    formPayload.append("access_key", accessKey)
    formPayload.append("Name", formData.name)
    formPayload.append("Mobile", formData.mobile)
    formPayload.append("Pincode", formData.pincode)
    formPayload.append("Service", formData.service)
    formPayload.append("Brand", brandName) // Brand email mein bhi aayega
    formPayload.append("subject", `New ${brandName} RO Service Request from ${formData.name}`)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      })
      const data = await response.json()
      
      if (data.success) {
        router.push('/thank-you')
      } else {
        alert("Kuch error aaya. Dobara try karein.")
        setIsSubmitting(false)
      }
    } catch (error) {
      alert("Network error. Dobara try karein.")
      setIsSubmitting(false)
    }
  }

  return (
    <section id="book" className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-blue-50 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                Schedule Instant Doorstep Service
              </h2>
              
              {/* Yahan dynamically brand ka naam aayega */}
              <p className="text-gray-600 font-inter mb-6 text-sm">
                Direct technician dispatch for your {brandName} water purifier across Bangalore. Same-day inspection, urgent leak stoppage, and certified filter renewals.
              </p>
              
              <div className="space-y-4 text-sm font-inter">
                <p className="flex items-center gap-2 text-gray-700"><span className="text-primary text-lg">✓</span> 60-Minute Response Time</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="text-primary text-lg">✓</span> Certified Technicians</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="text-primary text-lg">✓</span> 90-Day Warranty</p>
              </div>
            </div>
            <div className="md:col-span-3 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Mobile Number</label>
                  <input type="tel" name="mobile" required pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="10-digit number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Pincode</label>
                  <input type="text" name="pincode" required pattern="[0-9]{6}" value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="6-digit pincode" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Service Type</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white">
                    <option>RO Service & Repair</option>
                    <option>Filter Replacement</option>
                    <option>AMC Maintenance Plans</option>
                    <option>Installation & Relocation</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-orange-600 disabled:bg-gray-400 text-white font-poppins font-bold py-4 rounded-lg text-lg transition duration-300 mt-4 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Booking...' : `Book ${brandName} Service Now →`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}