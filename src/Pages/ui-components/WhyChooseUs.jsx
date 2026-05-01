import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-14">

      <div className="section flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col items-start gap-5">

          {/* Heading */}
          <h1 className="heading font-normal text-4xl sm:text-5xl lg:text-5xl leading-[1.15] tracking-tight text-[#28251d]">
            Why Choose <br /> <span className='heading text-[var(--green)]'>Uncharted Ladakh?</span>
          </h1>

          {/* Subheading */}
          <h2 className="font-sans text-lg font-medium leading-snug text-[black]">
            Because your Ladakh journey deserves more than just a rental — it deserves an experience.
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-base leading-relaxed text-[#4b5563]">
            At Uncharted Ladakh, we offer more than just bikes — we deliver a complete riding experience across the stunning landscapes of Ladakh. With well-maintained motorcycles, local expertise, 24/7 support, and thoughtfully curated routes to places like Pangong Lake, we ensure your journey is safe, seamless, and truly unforgettable.
          </p>

          {/* Button */}
          <a
            href="https://wa.me/919541438044"
            className="button-white border border-black"
          >
            Know More
          </a>

        </div>

        {/* ── Right: Image Content ── */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-[0_12px_32px_rgba(40,37,29,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&w=1200&q=80"
              alt="Riders exploring scenic mountains"
              className="w-full h-full object-cover"
              width={720}
              height={540}
              loading="lazy"
            />
            {/* Subtle tint overlay */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'rgba(1, 105, 111, 0.06)' }}
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs