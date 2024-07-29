'use client'
import React from 'react'
import Feature from './Features'
import FAQ from './Faq'
import Footer from './Footer'
import HeroPage from './Hero'
import CTAFORWHATSAPP from './CTA'

const page = () => {


  return (
    <div>
      <HeroPage />
      {/* <Testimonials /> */}
      <Feature />
      <CTAFORWHATSAPP />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
