// LehLadakhGuide.jsx

import React, { useState } from 'react'

const stats = [
  { label: 'Elevation', value: '3,500m', icon: '🏔️' },
  { label: 'Population', value: '30,870', icon: '👥' },
  { label: 'Language', value: 'Ladakhi & Tibetan', icon: '🗣️' },
  { label: 'Best Time', value: 'Apr – Jun', icon: '📅' },
]

const destinations = [
  {
    name: 'LEH',
    tagline: 'The Crown of Ladakh',
    elevation: '3,500m',
    color: 'from-gray-900/80',
    image: '/Image/lehcover.png',
    places: [
      { name: 'Magnetic Hill', desc: 'Vehicles appear to defy gravity at this geological wonder that has baffled travellers for decades.' },
      { name: 'Khardung La Pass', desc: 'One of the world\'s highest motorable roads at 18,380 ft — a rite of passage for every Ladakh biker.' },
      { name: 'Shanti Stupa', desc: 'A serene Buddhist stupa with relics of Buddha at its base and panoramic views of the city at sunrise and sunset.' },
      { name: 'Leh Palace', desc: 'A 17th-century palace built by King Sengge Namgyal — a monument of Ladakh\'s royal past.' },
      { name: 'Hall of Fame', desc: 'A museum honouring Indian army soldiers who sacrificed their lives in the Indo-Pakistan war.' },
      { name: 'Gurdwara Pathar Sahib', desc: 'A Sikh shrine of extraordinary history managed by the Indian army, drawing visitors from across the country.' },
    ],
    food: ['Thukpa', 'Skyu', 'Ngamphe', 'Momos', 'Chang (local brew)'],
    reach: 'Leh has its own airport. Road access via bus or private vehicle along scenic mountain highways.',
    bestTime: 'April to June',
  },
  {
    name: 'NUBRA VALLEY',
    tagline: 'The Orchard of Ladakh',
    elevation: '3,084m',
    color: 'from-gray-900/80',
    image: '/Image/nubracover.png',
    places: [
      { name: 'Diskit Monastery', desc: 'The largest and oldest Buddhist monastery of Nubra Valley, founded in the 14th century.' },
      { name: 'Panamik Village', desc: 'A remote high-altitude village with hot springs, pashmina goats, and Bactrian camels near Siachen base camp.' },
      { name: 'Yarab Tso', desc: 'A hidden sacred lake near Sumur village — accessible via a 20-minute trek through rough terrain.' },
      { name: 'Samstanling Monastery', desc: 'A 140-year-old monastery draped in prayer flags, offering perfect serenity and mountain views.' },
      { name: 'Maitreya Buddha', desc: 'A 32-metre statue sanctified by the Dalai Lama, crafted with 8 kg of gold and believed to protect the valley.' },
    ],
    food: ['Thukpa', 'Momos', 'Local Ladakhi cuisine'],
    reach: 'Leh Airport (168 km) is the nearest. Take a taxi or bus from Leh via Khardung La.',
    bestTime: 'May to September',
  },
  {
    name: 'PANGONG LAKE',
    tagline: 'The Jewel of the Himalayas',
    elevation: '4,350m',
    color: 'from-gray-900/80',
    image: '/Image/pangongcover.png',
    places: [
      { name: 'The Lake Itself', desc: 'Stretching 134 km across India and China, the lake changes color from azure to turquoise to sapphire throughout the day.' },
      { name: 'Sunrise at Pangong', desc: 'The most photographed moment in all of Ladakh — the lake lit gold at dawn with mountains reflected in still water.' },
      { name: 'Spangmik Village', desc: 'A tiny lakeside settlement offering homestays and an authentic taste of Ladakhi life by the lake.' },
    ],
    food: ['Camp cuisine', 'Maggi', 'Thukpa', 'Basic Indian meals at lakeside camps'],
    reach: 'Accessible from Leh via Chang La (17,586 ft) — approx 5 hours by road.',
    bestTime: 'June to September',
  },
  {
    name: 'KARGIL',
    tagline: 'Gateway Between Kashmir & Ladakh',
    elevation: '2,676m (8,780 ft)',
    color: 'from-gray-900/80',
    image: '/Image/kargilcover.png',
    places: [
      { name: 'Mulbekh Monastery', desc: 'A 9-metre Buddha idol overlooking a valley — a striking mix of history and mountain scenery 36 km from Kargil.' },
      { name: 'Drass War Memorial', desc: 'A tribute to the heroes of the 1999 Kargil War, built in pink sandstone with a gallery of war relics.' },
      { name: 'Lamayuru Monastery', desc: 'Perched above a moonlike landscape, Lamayuru is one of Ladakh\'s oldest and most atmospheric monasteries.' },
      { name: 'Suru Basin', desc: 'An underrated gem where the Suru River carves through a valley flanked by towering Himalayan peaks.' },
      { name: 'Main Street Market', desc: 'Buy dry fruits, local folk music, and soak in the everyday life of Kargil\'s bazaar.' },
    ],
    food: ['Thukpa', 'Sugu', 'Meat Chawal', 'Kashmiri cuisine', 'Continental at hotels'],
    reach: 'Srinagar Airport (70 km from Sonamarg) is the nearest. Buses run from both Srinagar and Leh.',
    bestTime: 'April to June',
  },
  {
    name: 'SONMARG',
    tagline: 'Meadow of Gold',
    elevation: '2,800m (9,200 ft)',
    color: 'from-gray-900/80',
    image: '/Image/sonmargcover.png',
    places: [
      { name: 'Thajiwas Glacier', desc: 'A snow-covered glacier near alpine forests, just 3 km from Sonmarg — trek it or hire a pony.' },
      { name: 'Zoji-La Pass', desc: 'At 3,528m, this dramatic pass connects the Kashmir Valley to Ladakh — stunning but not for the faint-hearted.' },
      { name: 'Vishansar Lake', desc: 'A pristine alpine lake surrounded by lush forests and mountain peaks, teeming with trout.' },
      { name: 'Baltal Valley', desc: 'The entry point for the Amarnath trek — 14 km from the sacred cave with endless green meadows.' },
      { name: 'Nilagrad River', desc: 'A sacred river believed to have healing powers, supporting rich flora and fauna on its banks.' },
    ],
    food: ['Kahwa tea', 'Yakhni (lamb in curd gravy)', 'Rogan Josh with saffron rice', 'Dum Aloo (vegetarian)'],
    reach: 'Srinagar Airport (70 km). Buses available from Jammu and Kashmir. 400 km by road from Jammu.',
    bestTime: 'April to June',
  },
  {
    name: 'SARCHU & JISPA',
    tagline: 'The Manali–Leh Highway Stopovers',
    elevation: 'Sarchu: 4,290m | Jispa: 3,200m',
    color: 'from-gray-900/80',
    image: '/Image/sarchucover.png',
    places: [
      { name: 'Sarchu Plains', desc: 'Barren land, crystal-clear skies, and towering mountains — one of the best stargazing spots on the highway.' },
      { name: 'Zanskar Trekking Base', desc: 'Sarchu is a popular base for treks deep into the remote Zanskar region.' },
      { name: 'Jispa Rural Housing Museum', desc: 'A glimpse into the daily life of the Lahaul district\'s residents — hidden gem on the highway.' },
    ],
    food: ['Camp cuisines — Indian, Chinese & Continental at Sarchu', 'Local food at Jispa village eateries'],
    reach: 'Sarchu: 252 km from Leh, 222 km from Manali on Manali–Leh Highway. Road only — closed in winter.',
    bestTime: 'May to September',
  },
]

const whyUs = [
  { icon: '🏍️', title: 'Expert Guides', desc: 'Years of Ladakh experience — our guides know every pass, shortcut, and hidden gem.' },
  { icon: '🛡️', title: 'Safety First', desc: 'Helmets, gloves, oxygen cylinders, backup vehicles, and 24/7 mechanic support.' },
  { icon: '🗺️', title: 'Custom Itineraries', desc: 'Tailor your journey to your pace, preferences, and budget.' },
  { icon: '🏨', title: 'Comfortable Stays', desc: 'Carefully selected hotels and camps at every stop along the route.' },
]

const tips = [
  { icon: '💧', tip: 'Stay Hydrated', desc: 'High altitude dehydration is real — drink 3–4 litres of water daily.' },
  { icon: '🧥', tip: 'Layer Up', desc: 'Ladakh weather shifts fast. Always carry thermal layers, windproof jackets, and gloves.' },
  { icon: '🐌', tip: 'Take It Slow', desc: 'Acclimatize for at least 1–2 days in Leh before attempting high passes.' },
  { icon: '🙏', tip: 'Respect the Culture', desc: 'Dress modestly, ask before photographing locals, and honour local customs.' },
]

const DestinationCard = ({ dest }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg sm:rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_4px_20px_rgba(0,0,0,0.1)] bg-white">
      {/* Hero Image */}
      <div className="relative h-40 sm:h-56 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${dest.color}`} />
        <div className="absolute bottom-0 left-0 p-3 sm:p-5">
          <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mb-1">{dest.tagline}</p>
          <h3 className="text-white text-lg sm:text-2xl font-bold tracking-wide">{dest.name}</h3>
          <span className="inline-block mt-1 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            ⛰️ {dest.elevation}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm">
          <div className="bg-[#f9fafb] rounded-lg p-2 sm:p-3">
            <p className="text-[#9ca3af] text-[9px] sm:text-[10px] uppercase tracking-widest mb-1">Best Time</p>
            <p className="text-[#1a1a1a] font-medium text-[11px] sm:text-xs line-clamp-1">{dest.bestTime}</p>
          </div>
          <div className="bg-[#f9fafb] rounded-lg p-2 sm:p-3">
            <p className="text-[#9ca3af] text-[9px] sm:text-[10px] uppercase tracking-widest mb-1">How to Reach</p>
            <p className="text-[#1a1a1a] font-medium text-[11px] sm:text-xs line-clamp-2">{dest.reach}</p>
          </div>
        </div>

        {/* Food */}
        <div>
          <p className="text-[#9ca3af] text-[9px] sm:text-[10px] uppercase tracking-widest mb-1 sm:mb-2">Local Food</p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {dest.food.map((f, i) => (
              <span key={i} className="bg-[#f0fdf4] text-[var(--green)] text-[9px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#bbf7d0]">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Places Toggle */}
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1a1a1a] py-2 border-t border-[#f3f4f6]"
          >
            <span>Places to Visit ({dest.places.length})</span>
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="mt-2 space-y-2 sm:space-y-3">
              {dest.places.map((place, i) => (
                <div key={i} className="flex gap-2 sm:gap-3">
                  <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--green)] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[#1a1a1a] text-xs sm:text-sm font-semibold">{place.name}</p>
                    <p className="text-[#6b7280] text-[11px] sm:text-xs leading-relaxed">{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const LehLadakhGuide = () => {
  return (
    <div className="bg-white font-sans">

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-12 sm:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-8 sm:py-0">
          <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4">The Ultimate Guide</p>
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            <span className='heading'>Leh–Ladakh Bike Trip</span>

          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            High passes. Ancient monasteries. Turquoise lakes. The cold desert of Ladakh 
            is not just a destination — it's a transformation.
          </p>
          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center border border-white/20">
                <div className="text-xl sm:text-2xl mb-1">{s.icon}</div>
                <p className="text-white font-bold text-xs sm:text-sm">{s.value}</p>
                <p className="text-white/60 text-[8px] sm:text-[10px] uppercase tracking-widest leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ── */}
      <section className="py-12 sm:py-20 px-4 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[var(--green)] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3">Explore the Region</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl heading font-bold text-[#1a1a1a] leading-tight">
              Destinations Along the Route
            </h2>
            <p className="mt-2 sm:mt-4 text-[#6b7280] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Every stop on a Ladakh bike trip has its own soul. Here's your complete guide to each one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {destinations.map((dest, i) => (
              <DestinationCard key={i} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TSO MORIRI HIGHLIGHT ── */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <p className="text-[var(--green)] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3">Hidden Gem</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1a1a1a] heading leading-tight mb-4 sm:mb-6">
                Tso Moriri —<br />The Lake Less Travelled
              </h2>
              <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                One of the lesser known places of the region and a twin to the famous Pangong Lake, Tso Moriri houses a variety of flora and fauna around it. Surrounded by snow-capped mountains and barren hills, it is the place less travelled.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  'Declared a Wetland Reserve — protected and pristine',
                  'Perfect for stargazing — zero light pollution',
                  'Rich biodiversity — rare birds, plants, and wildlife',
                  'Far fewer tourists than Pangong — raw and unspoilt',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--green)' }}>
                      <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#374151] text-xs sm:text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="/Image/tsorilakecover.png"
                alt="Tso Moriri Lake"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-[#e5e7eb]">
                <p className="text-[#9ca3af] text-[8px] sm:text-[10px] uppercase tracking-widest">Altitude</p>
                <p className="text-[#1a1a1a] font-bold text-lg sm:text-xl">4,522m</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-12 sm:py-20 px-4" style={{ backgroundColor: 'var(--green)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3">Why Uncharted Ladakh</p>
            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl heading font-bold leading-tight">
              India's Leading<br />Ladakh Bike Tour Company
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVELLER TIPS ── */}
      <section className="py-12 sm:py-20 px-4 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[var(--green)] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3">Before You Ride</p>
            <h2 className="text-2xl sm:text-4xl font-bold heading text-[#1a1a1a]">Tips for a Successful Trip</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {tips.map((t, i) => (
              <div key={i} className="flex gap-3 sm:gap-5 bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-[#e5e7eb] shadow-sm">
                <div className="text-3xl sm:text-4xl flex-shrink-0">{t.icon}</div>
                <div className="min-w-0">
                  <h3 className="text-[#1a1a1a] font-bold text-sm sm:text-lg mb-1">{t.tip}</h3>
                  <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 sm:py-24 px-4 bg-[#1a1a1a] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601718799556-6b5fb94b490d?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 sm:mb-4">Your Adventure Awaits</p>
          <h2 className="text-white text-2xl sm:text-4xl md:text-6xl heading font-bold leading-tight mb-4 sm:mb-6">
            Ready to Ride ?<br />
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
            Book your Ladakh bike trip today with Uncharted Ladakh — India's most trusted bike tour company. 
            Expert guides, quality bikes, and memories for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#holiday-packages"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px] px-6 sm:px-10 py-2 sm:py-3 font-semibold text-white text-sm sm:text-base transition-all duration-[180ms] hover:-translate-y-px active:translate-y-0"
              style={{ backgroundColor: 'var(--green)' }}
            >
              View All Packages
            </a>
            <a
              href="https://wa.me/919541438044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[52px] px-6 sm:px-10 py-2 sm:py-3 font-semibold text-white text-sm sm:text-base border-2 border-white/30 hover:border-white transition-all duration-[180ms] hover:-translate-y-px active:translate-y-0"
            >
                                <img src="/Image/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />

               WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LehLadakhGuide