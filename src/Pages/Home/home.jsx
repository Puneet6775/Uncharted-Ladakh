import React from 'react'
import Hero from '../ui-components/hero'
import WhyChooseUs from '../ui-components/WhyChooseUs'
import CuratedBikeTours from '../ui-components/CuratedBikeTours'
import HolidayPackages from '../ui-components/HolidayPackages'
import CTASection from '../ui-components/CTASection'
import Testimonials from '../../Components/Testimonials'
import Contact from '../Contact/Contact'

const home = () => {
  return (
<>
<Hero />
<WhyChooseUs />
<CuratedBikeTours />
<HolidayPackages />
<Testimonials />
<CTASection />
<Contact />

</>    
  )
}

export default home
