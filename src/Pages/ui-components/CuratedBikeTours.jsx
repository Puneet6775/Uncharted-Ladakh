import React from 'react'

const tours = [
  {
    id: 1,
    title: 'LEH LADAKH ADVENTURE', 
    price: '₹15,800/pa',
    image: 'https://images.unsplash.com/photo-1517964603305-14f78a2e5f6f?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { icon: '/Image/World.png',value: '18380 ft' },
      { icon: '/Image/Location.png', value: '986 km' },
      { icon: '/Image/Calender.png', value: '5N/6D' },
      { icon: '/Image/Bed.png', value: 'Hotel/ Camp' },
      { icon: '/Image/Food.png', value: 'Breakfast/ Dinner' },
    ],
  },
  {
    id: 2,
    title: 'HIMALAYAN TREKKING EXPEDITION',
    price: '₹15,500/pa',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { icon: '/Image/World.png', value: '15000 ft' },
      { icon: '/Image/Location.png', value: '120 km' },
      { icon: '/Image/Calender.png', value: '7N/8D' },
      { icon: '/Image/Bed.png', value: 'Lodge/ Tents' },
      { icon: '/Image/Food.png', value: 'All Meals' },
    ],
  },
  {
    id: 3,
    title: 'RAJASTHAN DESERT SAFARI',
    price: '₹15,500/pa',
    image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { icon: '/Image/World.png', value: '2000 ft' },
      { icon: '/Image/Location.png', value: '300 km' },
      { icon: '/Image/Calender.png', value: '3N/4D' },
      { icon: '/Image/Bed.png', value: 'Desert Camp' },
      { icon: '/Image/Food.png', value: 'Breakfast/ Lunch' },
    ],
  },
  {
    id: 4,
    title: 'ANDAMAN ISLAND GETAWAY',
    price: '₹15,500/pa',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { icon: '/Image/World.png', value: '0 ft' },
      { icon: '/Image/Location.png', value: '500 km' },
      { icon: '/Image/Calender.png', value: '4N/5D' },
      { icon: '/Image/Bed.png', value: 'Beach Resort' },
      { icon: '/Image/Food.png', value: 'All Meals' },
    ],
  },
]

const CuratedBikeTours = () => {
  return (
    <section className="w-full bg-white md:px-0 px-4 py-16 sm:py-14">

      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <h1 className="heading text-5xl font-bold leading-tight text-[#1a1a1a] tracking-tight">
          Curated <span className="text-[var(--green)] heading">Bike</span> Tours
        </h1>
        <p className="mt-4 text-[#6b7280] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Not sure where to go? We’ve got you covered with guided and self-guided tours across the most iconic routes in Ladakh.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col rounded-xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white"
          >

            {/* Image + Price Badge */}
            <div className="relative w-full aspect-[4/3]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
                width={400}
                height={300}
                loading="lazy"
              />
              {/* Price badge */}
              <span className="absolute top-3 right-3 bg-white text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded shadow-sm">
                {tour.price}
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-4 gap-4">

              {/* Title */}
              <h3 className={`text-sm text-[#1a1a1a] tracking-wide uppercase ${tour.id === 1 || tour.id === 2 || tour.id === 3 || tour.id === 4 ? 'font-normal' : 'font-normal'}`}>
                {tour.title}
              </h3>

              {/* Stats Icons Row */}
              <div className="grid grid-cols-5 gap-1 text-center">
                {tour.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    {stat.icon.includes('/') ? (
                      <img src={stat.icon} alt={stat.value} className="w-6 h-6" />
                    ) : (
                      <span className="text-xl leading-none">{stat.icon}</span>
                    )}
                    <span className="text-[10px] sm:text-[11px] text-[#6b7280] leading-tight font-medium">
                      {stat.value}
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
                {/* WhatsApp SVG Icon */}
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
          href="#all-tours"
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

export default CuratedBikeTours