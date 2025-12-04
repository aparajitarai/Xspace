import React from 'react'
import GlobalStyles from './components/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import EverythingYouNeed from './components/EverythingYouNeed'
import ProcessSection from './components/ProcessSection'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <WhyChoose />
      <EverythingYouNeed />
      <ProcessSection />
      <ContactFooter />
    </div>
  )
}
