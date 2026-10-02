export default function HowItWorks() {
  const steps = [
    { 
      icon: '📱', 
      title: 'Book Online / Call', 
      desc: 'Fill out the form or call us directly. Takes just 1 minute.' 
    },
    { 
      icon: '👨‍🔧', 
      title: 'Technician Assigned', 
      desc: 'A certified technician from your area will be assigned instantly.' 
    },
    { 
      icon: '✅', 
      title: 'RO Fixed at Doorstep', 
      desc: 'Your RO will be repaired within 60 minutes at your doorstep.' 
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Book in 3 Simple Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            A quick and easy process to get your RO serviced
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-blue-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center text-3xl shadow-sm mb-6">
                {step.icon}
              </div>
              
              {/* Step Number */}
              <span className="font-poppins font-bold text-primary text-sm mb-2">
                STEP {index + 1}
              </span>
              
              {/* Title & Desc */}
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 font-inter text-sm max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}