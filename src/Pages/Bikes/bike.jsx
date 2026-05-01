import React from 'react'
import CuratedBikeTours from '../ui-components/CuratedBikeTours'
import UltimateAdventures from '../ui-components/UltimateAdventure'
import HolidayPackages from '../ui-components/HolidayPackages'
import CTASection from '../ui-components/CTASection'

const bike = () => {
  return (
    <div className='mt-16'>
      <CuratedBikeTours />
        <UltimateAdventures />
        <HolidayPackages />
      <CTASection />
    </div>
  )
}

export default bike
