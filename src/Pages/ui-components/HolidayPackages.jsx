import React from 'react'

const tours = [
  {
    id: 1,
    title: 'PANGONG LAKE BIKE ESCAPE',
    price: '₹15,800/pa',
    // ✅ VERIFIED — Motorcyclist riding along Pangong Lake, Ladakh blue water + mountains
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f5ae00c393aaba142b5a75239f16207defc03cbd.jpg',
    stats: [
      { icon: '/Image/World.png',    value: '14270 ft' },
      { icon: '/Image/Location.png', value: '473 km' },
      { icon: '/Image/Calender.png', value: '5N/6D' },
      { icon: '/Image/Bed.png',      value: 'Hotel/ Camp' },
      { icon: '/Image/Food.png',     value: 'Breakfast/ Dinner' },
    ],
  },
  {
    id: 2,
    title: 'NUBRA VALLEY RIDE',
    price: '₹12,500/pa',
    // ✅ VERIFIED — Bactrian camels on Nubra Valley sand dunes, snow mountains at sunset
    image: 'https://images.unsplash.com/photo-1624890240392-da0b1aa01c90?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stats: [
      { icon: '/Image/World.png',    value: '10000 ft' },
      { icon: '/Image/Location.png', value: '150 km' },
      { icon: '/Image/Calender.png', value: '3N/4D' },
      { icon: '/Image/Bed.png',      value: 'Desert Camp' },
      { icon: '/Image/Food.png',     value: 'Breakfast/ Lunch' },
    ],
  },
  {
    id: 3,
    title: 'ZANSKAR VALLEY TREK',
    price: '₹18,000/pa',
    // ✅ VERIFIED — Aerial view of Zanskar River winding through brown Ladakh mountains
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8e4c03533f66c1da5fd1353474a7cd526455c0ee.jpg',
    stats: [
      { icon: '/Image/World.png',    value: '13154 ft' },
      { icon: '/Image/Location.png', value: '200 km' },
      { icon: '/Image/Calender.png', value: '7N/8D' },
      { icon: '/Image/Bed.png',      value: 'Lodge/ Tents' },
      { icon: '/Image/Food.png',     value: 'All Meals' },
    ],
  },
  {
    id: 4,
    title: 'KHARDUNG LA SUMMIT RIDE',
    price: '₹15,500/pa',
    // ✅ VERIFIED — Bikers group posing at Khardung La with snow-covered Ladakh peaks
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/212807e7b7035c7cf43ed56e64d9a464888df836.jpg',
    stats: [
      { icon: '/Image/World.png',    value: '18380 ft' },
      { icon: '/Image/Location.png', value: '39 km' },
      { icon: '/Image/Calender.png', value: '2N/3D' },
      { icon: '/Image/Bed.png',      value: 'Hotel/ Camp' },
      { icon: '/Image/Food.png',     value: 'Breakfast/ Dinner' },
    ],
  },
]

const HolidayPackages = () => {
  return (
    <section className="w-full bg-white md:px-0 px-4 py-16 sm:py-14">

      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <h1 className="heading text-5xl font-bold leading-tight text-[#1a1a1a] tracking-tight">
          Leh Ladakh <span className="text-[var(--green)] heading">Packages</span>
        </h1>
        <p className="mt-4 text-[#6b7280] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          From Pangong's shimmering blue waters to the world's highest motorable
          road — explore Ladakh with our handpicked holiday packages.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col rounded-xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white"
          >

            {/* Image + Price Badge — fixed consistent height */}
            <div className="relative w-full h-52">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
                width={400}
                height={208}
                loading="lazy"
              />
              <span className="absolute top-3 right-3 bg-white text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded shadow-sm">
                {tour.price}
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-4 gap-4">

              {/* Title */}
              <h3 className="text-sm text-[#1a1a1a] tracking-wide uppercase font-normal">
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
                <img src="/Image/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                Book Via Whatsapp
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* ── Explore Packages Button ── */}
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
          Explore Packages
        </a>
      </div>

    </section>
  )
}

export default HolidayPackages