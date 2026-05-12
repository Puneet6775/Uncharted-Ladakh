import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { tours } from './ToursPackages'

const HolidayPackages = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTours = showAll ? tours : tours.slice(0, 8)

  const handleShowLess = () => {
    setShowAll(false)
    const section = document.getElementById('holiday-packages')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="w-full bg-white md:px-0 px-4 py-12 sm:py-16 md:py-20">

      {/* Section Header */}
      <div
        id="holiday-packages"
        className="text-center mb-8 sm:mb-12">
        <h1 className="heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a] tracking-tight">
          Leh Ladakh <span className="text-[var(--green)] heading">Packages</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-[#6b7280] text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          From Pangong's shimmering blue waters to the world's highest motorable
          road — explore Ladakh with our handpicked holiday packages.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {visibleTours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col rounded-lg sm:rounded-xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white"
          >
            {/* Image + Price Badge */}
            <div className="relative w-full h-40 sm:h-52">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
                width={400}
                height={208}
                loading="lazy"
              />
              <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white text-[#1a1a1a] text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded shadow-sm">
                {tour.price} / {tour.priceNote}
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-3 sm:p-4 gap-3 sm:gap-4">
              <h3 className="text-xs sm:text-sm text-[#1a1a1a] tracking-wide uppercase font-normal">
                {tour.title}
              </h3>

              {/* Stats Row */}
              <div className="grid grid-cols-5 gap-1 text-center">
                {tour.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5 sm:gap-1">
                    {stat.icon.includes('/') ? (
                      <img src={stat.icon} alt={stat.label} className="w-4 sm:w-6 h-4 sm:h-6" />
                    ) : (
                      <span className="text-lg sm:text-xl leading-none">{stat.icon}</span>
                    )}
                    <span className="text-[8px] sm:text-[11px] text-[#6b7280] leading-tight font-medium">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* View Details */}
              <Link
                to={`/${tour.slug}`}
                className="mt-auto flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 sm:py-3
                           bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                           text-white text-xs sm:text-sm font-normal
                           hover:-translate-y-px active:translate-y-0
                           transition-all duration-[180ms] ease-out
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Packages / Show Less Button */}
      {tours.length > 8 && (
        <div className="flex justify-center mt-8 sm:mt-12">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-12 py-2 sm:py-2.5
                         bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                         text-white text-xs sm:text-base font-normal
                         hover:-translate-y-px active:translate-y-0
                         transition-all duration-[180ms] ease-out"
            >
              Explore Packages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-12 py-2 sm:py-2.5
                         border-2 border-[var(--green)] text-[var(--green)]
                         hover:bg-[var(--green)] hover:text-white active:bg-[#1b4332]
                         text-xs sm:text-base font-normal
                         hover:-translate-y-px active:translate-y-0
                         transition-all duration-[180ms] ease-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              Show Less
            </button>
          )}
        </div>
      )}

    </section>
  )
}

export default HolidayPackages