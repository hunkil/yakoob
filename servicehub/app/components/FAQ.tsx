'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How long does the service take?',
      a: 'Our technicians aim to resolve most issues within 60 minutes of arriving at your doorstep. For major repairs, it might take a little longer, but we will inform you beforehand.'
    },
    {
      q: 'Do you provide a warranty on repairs?',
      a: 'Yes, we provide a 90-day warranty on all repairs and replaced parts. We only use genuine Livpure spare parts.'
    },
    {
      q: 'How do I make the payment?',
      a: 'You can pay via Cash, UPI (GPay, PhonePe, Paytm), or Card after the service is completed. No advance payment required.'
    },
    {
      q: 'Which areas in Bangalore do you cover?',
      a: 'We cover all major areas in Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, Electronic City, and more.'
    },
    {
      q: 'Do you use genuine Livpure parts?',
      a: 'Absolutely. We are certified Livpure specialists and only use 100% original spare parts and filters to ensure the longevity of your RO.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 font-inter">
            Find answers to common questions about our RO services
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-poppins font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                <span className="pr-4">{faq.q}</span>
                <span className={`text-2xl text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}