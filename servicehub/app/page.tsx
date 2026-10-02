import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <BookingForm />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}