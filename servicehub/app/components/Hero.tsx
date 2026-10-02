export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">✓ Certified RO Specialists</span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              RO Service & Repair <span className="text-primary block">in 60 Minutes</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-inter">Bangalore's most trusted RO service. Same-day doorstep repair, filter change, and installation by certified technicians.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#book" className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition shadow-lg shadow-orange-500/20">Book Now →</a>
              <a href="tel:08050291180" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition">📞 08050291180</a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-gray-700 font-semibold">4.9</span>
              </div>
              <div className="h-5 w-px bg-gray-300"></div>
              <p className="text-gray-600 font-medium">10,000+ happy customers</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80" alt="RO Water Purifier" className="w-full h-80 object-cover rounded-xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">✓</div>
              <div>
                <p className="font-poppins font-bold text-gray-900 text-sm">60 Min Response</p>
                <p className="text-xs text-gray-500">Doorstep service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}