import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

export const metadata = {
  title: 'LG RO Service Bangalore | LG Water Purifier Repair',
  description: 'Expert LG RO service in Bangalore. Repair LG PuriCare series water purifiers. Same-day doorstep service. Call 08050291180.',
}

export default function LGService() {
  return (
    <div>
      <div className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section with Centered Logo */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <img 
                src="/lg-logo.png" 
                alt="LG Logo" 
                className="h-16 md:h-20 object-contain"
              />
            </div>

            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              LG RO Service in Bangalore
            </h1>
            <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto mb-8">
              Expert repair and maintenance for all LG PuriCare water purifiers — all models. Fast doorstep service with 60-minute response across Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#book" className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition">Book Now →</a>
              <a href="tel:08050291180" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition">📞 08050291180</a>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <p className="font-poppins text-3xl font-bold text-primary mb-1">4.9★</p>
              <p className="text-gray-600 text-xs font-inter uppercase tracking-wide">Average Rating</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <p className="font-poppins text-3xl font-bold text-primary mb-1">10,000+</p>
              <p className="text-gray-600 text-xs font-inter uppercase tracking-wide">Happy Customers</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <p className="font-poppins text-3xl font-bold text-primary mb-1">98%</p>
              <p className="text-gray-600 text-xs font-inter uppercase tracking-wide">Success Rate</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <p className="font-poppins text-3xl font-bold text-primary mb-1">24/7</p>
              <p className="text-gray-600 text-xs font-inter uppercase tracking-wide">Support Available</p>
            </div>
          </div>

          {/* LG Models */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 text-center">LG PuriCare Models We Service</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['LG PuriCare', 'LG WW140NP', 'LG WW150NP', 'LG WW170EP', 'LG PuriCare 8L', 'LG PuriCare 5L', 'LG Slim', 'LG Wall Mount'].map((m, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-inter text-gray-700 border border-gray-200">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <BookingForm />

      <div className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our LG RO Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">90-Day Warranty</h3>
                <p className="text-gray-600 text-sm font-inter">All repairs covered with 90-day service warranty.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">👨‍🔧</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">Certified Technicians</h3>
                <p className="text-gray-600 text-sm font-inter">Trained experts for all LG PuriCare models.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">60-Min Response</h3>
                <p className="text-gray-600 text-sm font-inter">Fast doorstep service across Bangalore.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm font-inter">No hidden charges. Pay after service.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">Quality Parts</h3>
                <p className="text-gray-600 text-sm font-inter">High-quality compatible filters and spares.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">AMC Plans</h3>
                <p className="text-gray-600 text-sm font-inter">Yearly maintenance with priority support.</p>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-12">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6 text-center">Common LG RO Issues We Fix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'LG RO not dispensing water',
                'Slow water flow',
                'Motor / pump issue',
                'Water leakage from LG unit',
                'LCD display not working',
                'Filter replacement alarm',
                'Bad taste or smell',
                'UV sterilisation failure',
              ].map((issue, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-primary text-lg">✓</span>
                  <span className="font-inter text-gray-700 text-sm">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🔧', title: 'LG RO Repair', desc: 'Motor, pump, and PCB fixes.' },
              { icon: '💧', title: 'LG Filter Change', desc: 'Compatible RO, UV, and carbon filters.' },
              { icon: '📦', title: 'LG Installation', desc: 'New LG PuriCare installation same day.' },
              { icon: '📅', title: 'LG AMC Plans', desc: 'Yearly maintenance packages.' },
              { icon: '🚰', title: 'Leak Fix', desc: 'Urgent leak repair within 60 minutes.' },
              { icon: '✨', title: 'Deep Cleaning', desc: 'Full servicing and sanitization.' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm font-inter">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6 text-center">LG RO Service FAQs</h2>
            <div className="space-y-3">
              {[
                { q: 'How much does LG RO service cost?', a: 'Basic inspection starts at ₹299. Filter replacement and repairs are quoted based on the issue. Call 08050291180 for exact pricing.' },
                { q: 'Do you use original LG filters?', a: 'We use high-quality compatible filters that meet LG specifications. For brand-warranty service, please contact LG authorized center.' },
                { q: 'How fast can your technician come?', a: 'Our average response time is 60 minutes across Bangalore. Same-day service guaranteed.' },
                { q: 'Do you service old LG models?', a: 'Yes, we service all LG PuriCare models — old and new, including discontinued ones.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                  <p className="text-gray-600 text-sm font-inter">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords Section */}
          <div className="mb-12">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6 text-center">
              Popular LG RO Service Searches
            </h2>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {[
                'LG RO Service Bangalore',
                'LG Water Purifier Repair',
                'LG RO Service Center Near Me',
                'LG PuriCare Repair',
                'LG PuriCare Service',
                'LG WW140NP Repair',
                'LG RO Filter Change',
                'LG Water Purifier Service',
                'LG RO Installation Bangalore',
                'LG RO AMC Plans',
                'LG RO Motor Repair',
                'LG RO Leakage Fix',
                'LG Water Purifier Service Center',
                'LG RO Service Cost',
                'LG RO Repair Near Me',
                'LG RO Technician Bangalore',
                'LG RO Service Whitefield',
                'LG RO Service Koramangala',
                'LG RO Service HSR Layout',
                'LG RO Service Indiranagar',
                'LG RO Service Jayanagar',
                'LG RO Service Electronic City',
                'LG PuriCare Water Purifier Service',
                'LG RO Service Same Day',
                'LG RO Service 24x7',
                'LG RO Deep Cleaning',
                'LG RO UV Lamp Replacement',
                'LG RO Membrane Change',
                'LG RO Service Doorstep',
                'LG RO Filter Price Bangalore',
              ].map((keyword, i) => (
                <span key={i} className="bg-blue-50 text-primary px-4 py-2 rounded-full text-xs font-inter border border-blue-100 hover:bg-primary hover:text-white transition cursor-default">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 font-inter text-center max-w-2xl mx-auto">
            Disclaimer: We are an independent service provider and not affiliated with LG. All brand names are property of their respective owners.
          </p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}