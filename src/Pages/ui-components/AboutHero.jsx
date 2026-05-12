import React from 'react'

const AboutHero = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">

      <div className="section flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">

        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col items-start gap-3 sm:gap-4 md:gap-5">

          {/* Heading */}
          <h1 className="heading font-normal text-2xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight text-[#28251d]">
            Uncharted  <br /> <span className='heading text-[var(--green)]'> Ladakh</span>
          </h1>

          {/* Subheading */}
          <h2 className="font-sans text-base sm:text-lg font-medium leading-snug text-[black]">
            Because your Ladakh journey deserves more than just a rental — it deserves an experience.
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-xs sm:text-base leading-relaxed text-[#4b5563]">
Uncharted Ladakh offers bike rentals and curated trips for tourists who want to explore Ladakh on two wheels. From well-maintained motorcycles to guided tours across hidden routes, they help you experience places like Zanskar Valley and Hanle with ease and adventure.<br />  <br />  
Ride through breathtaking landscapes, discover offbeat destinations, and enjoy a hassle-free journey with local support and expert planning.
          </p>

          {/* Button */}
          <a
            href="https://wa.me/919541438044"
            className="button-white border border-black"
          >
            Book Now
          </a>

        </div>

        {/* ── Right: Image Content ── */}
        <div className="flex-1 w-full order-first lg:order-last">
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-[0_12px_32px_rgba(40,37,29,0.12)] rounded-lg sm:rounded-2xl">
            <img
              src="/Image/Whyus.png"
              alt="Our team working on a creative project"
              className="w-full h-full object-cover"
              width={720}
              height={540}
              loading="lazy"
            />
            {/* Subtle tint overlay */}
            <div
              className="absolute inset-0 rounded-lg sm:rounded-2xl"
              style={{ background: 'rgba(1, 105, 111, 0.06)' }}
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHero