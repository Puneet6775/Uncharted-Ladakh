import React from 'react'
import { Link } from 'react-router-dom';


const tours = [
  {
    id: 1,
    title: 'LEH LADAKH ADVENTURE',
    price: '₹15,800/pa',
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b784add35052af97695163ba1fc4578b881deb91.jpg',
    bike: 'Royal Enfield Himalayan',
    stats: [
      { icon: '/Image/World.png', value: '18380 ft' },
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
    image: '/Image/bike11.png',
    bike: 'Royal Enfield Classic 350',
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
    image: '/Image/bike12.png',
    bike: 'Royal Enfield Himalayan',
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
    image: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/83f31fe3b6e6cfcc8027a5dc23459d956e1394c6.jpg',
    bike: 'Royal Enfield Classic 350',
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
    <section className="w-full bg-white md:px-0 px-4 py-12 sm:py-16 md:py-20">

      {/* ── Section Header ── */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a] tracking-tight">
          Curated <span className="text-[var(--green)] heading">Bike</span> Tours
        </h1>
        <p className="mt-2 sm:mt-4 text-[#6b7280] text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Not sure where to go? We've got you covered with guided and self-guided tours across the most iconic routes in Ladakh.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col rounded-lg sm:rounded-xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.08)] bg-white"
          >

            {/* Image + Price Badge */}
            <div className="relative w-full aspect-[4/3]">
              <img
                src={tour.image}
                alt={`${tour.bike} - ${tour.title}`}
                className="w-full h-full object-cover"
                width={400}
                height={300}
                loading="lazy"
              />
              {/* Price badge */}
              <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white text-[#1a1a1a] text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded shadow-sm">
                {tour.price}
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-3 sm:p-4 gap-3 sm:gap-4">

              {/* Title */}
              {/* <h3 className="text-sm text-[#1a1a1a] tracking-wide uppercase font-normal">
                {tour.title}
              </h3> */}

              {/* Bike Model Tag */}
              <span className="inline-flex items-center self-start text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[var(--green)] bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                {tour.bike}
              </span>

              {/* Stats Icons Row */}
              <div className="grid grid-cols-5 gap-1 text-center">
                {tour.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5 sm:gap-1">
                    {stat.icon.includes('/') ? (
                      <img src={stat.icon} alt={stat.value} className="w-4 sm:w-6 h-4 sm:h-6" />
                    ) : (
                      <span className="text-lg sm:text-xl leading-none">{stat.icon}</span>
                    )}
                    <span className="text-[8px] sm:text-[11px] text-[#6b7280] leading-tight font-medium">
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
                className="mt-auto flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 sm:py-3
                           bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                           text-white text-xs sm:text-sm font-normal 
                           hover:-translate-y-px active:translate-y-0
                           transition-all duration-[180ms] ease-out
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
              >
                <img src="/Image/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />
                Book Via Whatsapp
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* ── Explore Tours Button ── */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <Link
          to="/bikes"
          className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-12 py-2 sm:py-2.5
                     bg-[var(--green)] hover:bg-[#1b4332] active:bg-[#152f24]
                     text-white text-xs sm:text-base font-normal
                     hover:-translate-y-px active:translate-y-0
                     transition-all duration-[180ms] ease-out
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]"
        >
          Explore Tours
        </Link>
      </div>

    </section>
  )
}

export default CuratedBikeTours