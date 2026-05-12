import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen sm:min-h-screen flex md:items-center items-end justify-center overflow-hidden bg-[#171614]">

      {/* ── Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/Videos/homevideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero background video"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,12,0.35) 0%, rgba(8,8,10,0.65) 60%, rgba(5,5,7,0.88) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-start text-start py-12 sm:py-16 gap-3 sm:gap-4 md:gap-6 section max-w-6xl">

        {/* H1 */}
        <h1 className="heading leading-[1.1] text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-white w-full max-w-3xl font-sans font-bold">
          Explore Leh-Ladakh on Two Wheels
        </h1>

        {/* H2 */}
        <h2 className=" font-normal leading-relaxed text-white/75 max-w-2xl text-sm sm:text-base md:text-lg">
          Discover the raw beauty of Leh with our premium bike rentals and curated riding experiences. From high mountain passes to hidden valleys — we make every ride unforgettable.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-start mt-1 sm:mt-2 md:mt-4 w-full sm:w-auto">

          {/* Primary Button */}
          <a
            className="button-white min-w-[160px] sm:min-w-[200px] text-center"
            href="https://wa.me/919541438044"
          >
            Book Your Ride 
          </a>

          {/* Secondary / Ghost Button */}
          <a
            className="button-green min-w-[160px] sm:min-w-[200px] text-center"
            href="https://wa.me/919541438044"
          >
            Learn More
          </a>

        </div>
      </div> 

    </section>
  )
}

export default Hero