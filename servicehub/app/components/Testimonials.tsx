export default function Testimonials() {
  const reviews = [
    {
      name: 'Rahul Sharma',
      location: 'Whitefield, Bangalore',
      text: 'Water was leaking from my RO. I called them and the technician arrived within 45 minutes. Very fast service. Highly recommended!',
      initials: 'RS'
    },
    {
      name: 'Priya Nair',
      location: 'Koramangala, Bangalore',
      text: 'Got my Livpure filter changed. They used genuine parts and provided a warranty. The pricing was completely transparent.',
      initials: 'PN'
    },
    {
      name: 'Amit Verma',
      location: 'HSR Layout, Bangalore',
      text: 'Called them for a new RO installation. The work was done very professionally. Thanks for the quick service!',
      initials: 'AV'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Trusted by over 10,000+ customers in Bangalore
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
              {/* Google Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded-full shadow-sm">
                <span className="text-blue-500 font-bold">G</span> Verified
              </div>

              {/* Stars */}
              <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
              
              {/* Review Text */}
              <p className="text-gray-700 font-inter text-sm mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}