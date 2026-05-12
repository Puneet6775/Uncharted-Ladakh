import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { tours } from './ToursPackages'

const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-0.5 sm:gap-1.5 text-center">
    {icon.includes('/') ? (
      <img src={icon} alt={label} className="w-5 sm:w-7 h-5 sm:h-7" />
    ) : (
      <span className="text-xl sm:text-2xl leading-none">{icon}</span>
    )}
    <span className="text-[9px] sm:text-[11px] text-[#6b7280] uppercase tracking-wider font-medium">{label}</span>
    <span className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">{value}</span>
  </div>
)

const SectionTitle = ({ children }) => (
  <h2 className="text-base sm:text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-3 sm:mb-4 pb-2 border-b border-[#e5e7eb]">
    {children}
  </h2>
)

const TourDetail = () => {
  const { slug } = useParams()
  const tour = tours.find((t) => t.slug === slug)

  // Redirect to home if slug doesn't match any tour
  if (!tour) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Image */}
      <div className="relative w-full h-48 sm:h-[75vh] min-h-[320px] max-h-[520px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
          width={1200}
          height={520}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        

        {/* Title */}
        <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 px-4 sm:px-6 md:px-10">
          <h1 className="heading text-lg sm:text-2xl md:text-4xl font-bold text-white leading-tight tracking-wide max-w-3xl">
            {tour.title}
          </h1>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#f9fafb] border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-5">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
            {tour.stats.map((stat, i) => (
              <StatItem key={i} icon={stat.icon} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

        {/* Left: Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-10">

          <section>
            <SectionTitle>Overview</SectionTitle>
            <p className="text-[#374151] text-xs sm:text-base leading-relaxed">{tour.overview}</p>
          </section>

          <section>
            <SectionTitle>Tour Highlights</SectionTitle>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {tour.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-[#374151] text-xs sm:text-sm leading-relaxed">
                  <span className="mt-0.5 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 rounded-full bg-[var(--green)] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>Day-by-Day Itinerary</SectionTitle>
            <div className="flex flex-col gap-0">
              {tour.itinerary.map((item, i) => (
                <div key={i} className="flex gap-2 sm:gap-4 relative">
                  {i < tour.itinerary.length - 1 && (
                    <div className="absolute left-[17px] sm:left-[19px] top-8 bottom-0 w-px bg-[#e5e7eb]" />
                  )}
                  <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[var(--green)] text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center mt-0.5 sm:mt-1 z-10">
                    {item.day.replace('Day ', 'D')}
                  </div>
                  <div className="pb-4 sm:pb-6 flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6b7280] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right: Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 flex flex-col gap-4 sm:gap-5">

            {/* Book CTA */}
            <div className="rounded-lg sm:rounded-xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
              <div className="bg-[var(--green)] p-4 sm:p-5 text-white">
                <p className="text-[9px] sm:text-xs uppercase tracking-widest opacity-80 mb-1">Starting From</p>
                <p className="text-2xl sm:text-3xl font-bold">{tour.price}</p>
                <p className="text-[9px] sm:text-xs opacity-70 mt-0.5">{tour.priceNote}</p>
              </div>
              <div className="p-3 sm:p-5 flex flex-col gap-2 sm:gap-3">
                <a
                  href={`https://wa.me/${tour.whatsapp}?text=Hi! I'm interested in the ${tour.title} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 sm:py-3
                             bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a852]
                             text-white text-xs sm:text-sm font-semibold rounded-lg
                             transition-all duration-[180ms] ease-out"
                >
                  <img src="/Image/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />
                  Book via WhatsApp
                </a>
                <p className="text-[9px] sm:text-[11px] text-center text-[#9ca3af]">Instant response • No booking fee</p>
              </div>
            </div>

            {/* Inclusions */}
            <div className="rounded-lg sm:rounded-xl border border-[#e5e7eb] p-3 sm:p-5">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2 sm:mb-3">✅ Inclusions</h3>
              <ul className="flex flex-col gap-1 sm:gap-2">
                {tour.inclusions.map((item, i) => (
                  <li key={i} className="text-[10px] sm:text-xs text-[#374151] flex items-start gap-1.5 sm:gap-2">
                    <span className="text-[var(--green)] mt-0.5 flex-shrink-0">•</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="rounded-lg sm:rounded-xl border border-[#e5e7eb] p-3 sm:p-5">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2 sm:mb-3">❌ Exclusions</h3>
              <ul className="flex flex-col gap-1 sm:gap-2">
                {tour.exclusions.map((item, i) => (
                  <li key={i} className="text-[10px] sm:text-xs text-[#6b7280] flex items-start gap-1.5 sm:gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">•</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail