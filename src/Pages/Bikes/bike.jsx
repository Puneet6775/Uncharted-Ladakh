import React from 'react'
import HolidayPackages from '../ui-components/HolidayPackages'
import LehLadakhGuide from '../ui-components/LehLadakhGuide'
import Testimonials from '../../Components/Testimonials'


const bike = () => {
  return (
    <div className='mt-16'>
        <LehLadakhGuide />
        <HolidayPackages />
        <Testimonials />
    </div>
  )
}

export default bike
