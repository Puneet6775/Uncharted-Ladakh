// Testimonials.jsx

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    name: 'Arjun Mehta',
    tag: 'Leh–Ladakh Circuit Rider',
    stars: 5,
    review:
      'Uncharted Ladakh turned a dream into reality. From the moment we crossed Khardung La to the stillness of Pangong at sunrise — every second was curated perfectly. Our ride captain Vikram was exceptional; calm under pressure and genuinely passionate about Ladakh.',
  },
  {
    name: 'Sneha Kulkarni',
    tag: 'First-Time Ladakh Biker',
    stars: 5,
    review:
      'I was nervous about my first high-altitude bike trip, but the team at Uncharted Ladakh made me feel safe from day one. The backup vehicle, oxygen support, and constant motivation from our captain made Khardung La feel achievable. I cried at the summit — in the best way possible.',
  },
  {
    name: 'Rahul Srivastava',
    tag: 'Manali–Leh–Srinagar Rider',
    stars: 5,
    review:
      'Eleven days, over 1,200 km, and zero regrets. The itinerary was perfectly paced, hotels were clean and comfortable, and the ride leader knew every twist and turn of the highway. Umling La at 19,024 ft was the single greatest moment of my life.',
  },
  {
    name: 'Priya Nair',
    tag: 'Pangong Lake Bike Escape',
    stars: 4,
    review:
      "The lakeside camp at Pangong was straight out of a dream — woke up to the water turning gold at sunrise. The team handled all permits, logistics and safety beautifully. Would've loved one extra day at the lake, but that just means I'm coming back!",
  },
  {
    name: 'Karan Bhatia',
    tag: 'Srinagar–Manali Group Rider',
    stars: 5,
    review:
      'Rode with a group of 9 strangers, returned with 9 best friends. Uncharted Ladakh builds that kind of atmosphere. Our captain Deepak led every pass with confidence and kept the energy high even on the toughest days. The Zoji La crossing in light rain was cinematic.',
  },
  {
    name: 'Divya Sharma',
    tag: 'Zanskar Adventure Trekker',
    stars: 5,
    review:
      'Phugtal Monastery visible only after two hours of trekking — nothing prepares you for that view. The Uncharted team handled permits, gear, and guides for the Zanskar circuit seamlessly. Every meal was warm, every camp was safe. Absolute 10/10.',
  },
  {
    name: 'Rohan Deshmukh',
    tag: 'Nubra Valley Rider',
    stars: 4,
    review:
      'Riding through Khardung La and descending into the golden Nubra Valley felt surreal. The Bactrian camel safari at sunset was a bonus I did not expect to love so much. Small group size made it feel personal. Uncharted Ladakh clearly knows what they are doing.',
  },
  {
    name: 'Ananya Iyer',
    tag: 'Leh–Ladakh Pocket Friendly Trip',
    stars: 5,
    review:
      'Honestly did not expect this level of quality at this price point. Bikes were well-maintained, accommodation was comfortable, and the ride captain was always 10 steps ahead of every situation. Ladakh on a budget — but nothing felt compromised.',
  },
  {
    name: 'Vikrant Joshi',
    tag: 'Manali–Leh–Manali Group Tour',
    stars: 5,
    review:
      'From Rohtang to Tanglang La — every pass on this circuit was a milestone. The team\'s energy was infectious and the support vehicle gave us real confidence on technical roads. I have done five Himalayan trips; this was the most professionally organised one by far.',
  },
]

const StarRating = ({ stars }) => (
  <div className="flex gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        className={`w-4 h-4 ${s <= stars ? 'text-amber-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[var(--green)] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3">
            Real Riders. Real Stories.
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
            What Our Riders Say About<br />
            <span className="text-[var(--green)]">Uncharted Ladakh</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-[#6b7280] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From first-timers to seasoned riders — here's what the Uncharted Ladakh family has to say about their journey.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-12 sm:!pb-16"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full flex flex-col">

                {/* Quote icon */}
                <div className="mb-3 sm:mb-4">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[var(--green)] opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <StarRating stars={r.stars} />

                {/* Review text */}
                <p className="text-[#374151] text-xs sm:text-sm leading-relaxed flex-1 mb-4 sm:mb-6">
                  "{r.review}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[#f3f4f6]">
                  <div
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: 'var(--green)' }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#1a1a1a] font-semibold text-xs sm:text-sm truncate">{r.name}</p>
                    <p className="text-[#9ca3af] text-[10px] sm:text-[11px] line-clamp-1">{r.tag}</p>
                  </div>
                  <div>
                    <span className="bg-[#f0fdf4] text-[var(--green)] text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-[#bbf7d0] whitespace-nowrap">
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials