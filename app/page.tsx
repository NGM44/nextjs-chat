'use client'
import React from 'react'
import HeroPage from './overview/Hero'
import Feature from './overview/Features'
import FAQ from './overview/Faq'
import Footer from './overview/Footer'
import CTAFORWHATSAPP from './overview/CTA'
import Dashboard2 from './overview/Investment2'

const page = () => {
  return (
    <div>
      <HeroPage />
      {/* <Testimonials /> */}
      <CTAFORWHATSAPP />
      <Feature />
      <Dashboard2 />
      <FAQ />

      <Footer />
    </div>
  )
}

export default page
