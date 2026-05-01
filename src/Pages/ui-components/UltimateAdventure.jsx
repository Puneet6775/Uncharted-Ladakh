import React from 'react'

// SVG Icons — matching your design's line-icon style
const AltitudeIcon = () => (
  <img src="/Image/World.png" alt="Altitude" className="w-7 h-7" />
)

const LocationIcon = () => (
  <img src="/Image/Location.png" alt="Location" className="w-7 h-7" />
)

const DurationIcon = () => (
  <img src="/Image/Calender.png" alt="Duration" className="w-7 h-7" />
)

const StayIcon = () => (
  <img src="/Image/Bed.png" alt="Stay" className="w-7 h-7" />
)

const MealIcon = () => (
  <img src="/Image/Food.png" alt="Meal" className="w-7 h-7" />
)

const tours = [
  {
    id: 1,
    title: 'LEH LADAKH ADVENTURE',
    price: '₹15,500/pa',
    // Motorcyclists celebrating at Pangong Lake, Ladakh — iconic bike adventure shot
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ca15f85532b0be097a08adcbbe7d6e7132baf4f6.jpg',
    stats: [
      { Icon: AltitudeIcon, value: '18380 ft' },
      { Icon: LocationIcon, value: '986 km' },
      { Icon: DurationIcon, value: '5N/6D' },
      { Icon: StayIcon,     value: 'Hotel/ Camp' },
      { Icon: MealIcon,     value: 'Breakfast/ Dinner' },
    ],
  },
  {
    id: 2,
    title: 'HIMACHAL TREKKING EXPEDITION',
    price: '₹15,500/pa',
    // Group of trekkers in colorful gear ascending a snowy Himalayan slope in Ladakh
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/ee207b58fe212dcc1bb3099773cad0957839d417.jpg',
    stats: [
      { Icon: AltitudeIcon, value: '15000 ft' },
      { Icon: LocationIcon, value: '550 km' },
      { Icon: DurationIcon, value: '7N/8D' },
      { Icon: StayIcon,     value: 'Guest House' },
      { Icon: MealIcon,     value: 'All Meals' },
    ],
  },
]

const UltimateAdventures = () => {
  return (
    <section
      className="relative w-full bg-[#e8e8e4] md:px-0 px-4 py-16 sm:py-4"
    >

      {/* ── Tyre track watermarks (top-left & bottom-right) ── */}
      <div className="pointer-events-none select-none absolute top-0 left-0 opacity-[1] hidden md:block">
        <img src="/Image/tyre.png" alt="" className="w-36 md:w-[150px] h-auto" />
      </div>
      <div className="pointer-events-none select-none absolute bottom-0 right-0 opacity-[1] hidden md:block">
        <img src="/Image/tyre.png" alt="" className="w-36 md:w-[150px] h-auto" />
      </div>

      {/* ── Section Header ── */}
      <div className="relative text-center mb-12">
        <h1 className="heading text-4xl sm:text-5xl leading-tight text-[var(--green)] font-normal">
          Ultimate Adventures
        </h1>
        <h2 className="heading text-3xl sm:text-[clamp(1.8rem,1rem+2.5vw,3rem)] font-black text-[#1a1a1a] leading-tight tracking-tight mt-1">
          2026
        </h2>
        <p className="mt-4 text-[var(--grey)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Experience the most challenging and scenic routes of the Himalayas with our handpicked ultimate tours.
        </p>
      </div>

      {/* ── Cards Grid — 2 columns ── */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col rounded-xl overflow-hidden border border-[#d1d5db] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          >

            {/* Image + Price Badge */}
            <div className="relative w-full aspect-[16/9] h-52 sm:h-72">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 sm:h-56 object-cover"
                width={700}
                height={394}
                loading="lazy"
              />
              <span className="absolute top-3 right-3 bg-white text-[#1a1a1a] text-xs font-semibold px-3 py-1">
                {tour.price}
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 px-5 pt-1 pb-5 gap-4">

              {/* Title */}
              <h3 className="font-sans text-base sm:text-lg font-normal text-[#1a1a1a] uppercase tracking-wide">
                {tour.title}
              </h3>

              {/* Stats Row */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
                {tour.stats.map(({ Icon, value }, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <Icon />
                    <span className="text-[10px] sm:text-xs text-[#6b7280] leading-tight font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919541438044"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 min-h-[44px] px-4 py-3
                           bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                           text-white text-sm font-normal 
                           hover:-translate-y-px active:translate-y-0
                           transition-all duration-[180ms] ease-out
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
              >
                <img src="/Image/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                Book Via Whatsapp
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* ── Explore Tours Button ── */}
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/919541438044"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-12.5 py-2.5
                     bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                     text-white text-sm sm:text-base font-normal
                     hover:-translate-y-px active:translate-y-0
                     transition-all duration-[180ms] ease-out
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]"
        >
          Explore Tours
        </a>
      </div>

    </section>
  )
}

// ── Tyre track SVG watermark ──
const TyreTrack = () => (
  <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0,1,2,3,4,5,6,7].map((i) => (
      <g key={i} transform={`translate(${i * 40}, 0)`}>
        <rect x="0"  y="20" width="12" height="30" rx="3" fill="#2d6a4f" />
        <rect x="16" y="10" width="12" height="40" rx="3" fill="#2d6a4f" />
        <rect x="0"  y="80" width="12" height="30" rx="3" fill="#2d6a4f" />
        <rect x="16" y="70" width="12" height="40" rx="3" fill="#2d6a4f" />
        <rect x="0"  y="130" width="12" height="25" rx="3" fill="#2d6a4f" />
        <rect x="16" y="120" width="12" height="40" rx="3" fill="#2d6a4f" />
      </g>
    ))}
  </svg>
)

export default UltimateAdventures