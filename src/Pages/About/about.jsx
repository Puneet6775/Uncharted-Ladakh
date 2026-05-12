import React from 'react'
import AboutHero from '../ui-components/AboutHero'
import CTASection from '../ui-components/CTASection'
import HolidayPackages from '../ui-components/HolidayPackages'
import Testimonials from '../../Components/Testimonials'
const about = () => {
  return (
    <div className='mt-16'>
      <AboutHero />
      <HolidayPackages />
      <Testimonials />
      <CTASection />
    

    </div>
  )
}

export default about
