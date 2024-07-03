'use client'
import React from 'react'
import HeroPage from './overview/Hero'
import Feature from './overview/Features'
import FAQ from './overview/Faq'
import Footer from './overview/Footer'

const page = () => {


  return (
    <div>
      <HeroPage />
      {/* <Testimonials /> */}
      <Feature />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
