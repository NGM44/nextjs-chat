import React from 'react'
import FeatureCard from './card'
import Headline from './Headline'
import Testimonials from './Testimonal'
import Feature from './Features'
import FAQ from './Faq'
import Footer from './Footer'
import HeroPage from './Hero'

const page = () => {
  return (
    <div>
      <HeroPage />
      <Testimonials />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
