'use client'
import React from 'react'
import HeroPage from './overview/Hero'
import Feature from './overview/Features'
import FAQ from './overview/Faq'
import Footer from './overview/Footer'
import CTAFORWHATSAPP from './overview/CTA'
import Dashboard2 from './overview/Investment2'
import CTA1 from './overview/CTA1'
import CTA2 from './overview/CTA2'
import CTA3 from './overview/CTA3'

const page = () => {
  return (
    <div>
      <HeroPage />
      {/* <Testimonials /> */}
      {/* <CTAFORWHATSAPP /> */}
      {/* <Feature /> */}

      <div id="Offerings">
        <CTA1 />
        <CTA2 />
        <CTA3 />
      </div>
      <Dashboard2 />

      <FAQ />

      <Footer />
    </div>
  )
}

export default page
