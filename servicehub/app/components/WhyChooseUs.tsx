export default function WhyChooseUs() {
  const features = [
    { icon: '🏆', value: '10+', label: 'Years Experience' },
    { icon: '👥', value: '10,000+', label: 'Happy Customers' },
    { icon: '✅', value: '98%', label: 'Success Rate' },
    { icon: '📞', value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">Our RO Service?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter text-lg">
            We're not just another service provider. We're your trusted partners in ensuring pure, safe water for your family.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-6 text-center hover:bg-blue-100 transition duration-300">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600 font-inter text-sm md:text-base">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}