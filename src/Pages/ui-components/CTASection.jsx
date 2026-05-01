import React, { useState } from "react";

// ─────────────────────────────────────────────
// Leaf Cluster — pure CSS divs, zero SVG
// Three overlapping leaf shapes per side,
// fanned out using rotate + transformOrigin
// ─────────────────────────────────────────────
const LeafCluster = ({ side = "left" }) => {
//   const isLeft = side === "left";

//   const leafBase = {
//     position: "absolute",
//     bottom: 0,
//     borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
//     transformOrigin: "bottom center",
//   };

  return (
    <>
    <div
      className="absolute bottom-0 left-0 pointer-events-none"
      style={{  }}
    >
      {/* Leaf 1 — tallest, back */}
      <img
        src="/Image/l2.svg "className="w-54 h-auto"
      />

      
    </div>

    <div
      className="absolute bottom-0 right-0 pointer-events-none"
      style={{  }}
    >
      {/* Leaf 1 — tallest, back */}
      <img
        src="/Image/l1.svg" className="w-54 h-auto"
      />

      
    </div>
    </>
    
  );
};

// ─────────────────────────────────────────────
// Main CTA Section Component
// ─────────────────────────────────────────────
const CTASection = () => {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>


      {/* ══════════════════════════════════════════
          MAIN CONTAINER — forest green outer wrapper
      ══════════════════════════════════════════ */}
      <div
        className="w-full flex items-center justify-center py-20 sm:py-24 px-4"
        style={{ backgroundColor: "#2d4a3e", fontFamily: "'DM Sans', sans-serif" }}
      >

        {/* ══════════════════════════════════════════
            INNER CONTAINER — cream card
        ══════════════════════════════════════════ */}
        <div
          className="relative w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 sm:px-20 sm:py-20 bg-[white]"
        >

          {/* ── Decorative leaf clusters (left & right) ── */}
          <LeafCluster side="left" />
          <LeafCluster side="right" />

          {/* ── Eyebrow text ── */}
          <p
            className="relative z-10 text-base tracking-wide mb-2"
            style={{ color: "#5a5248", fontFamily: "'DM Sans', sans-serif" }}
          >
            Begin Your Journey
          </p>

          {/* ── Main heading ── */}
          <h2
            className="heading text-4xl sm:text-[56px] relative z-10 font-normal leading-none tracking-tight mb-6"
          >
            Book &amp; save
          </h2>

          {/* ── Supporting body copy ── */}
          <p
            className="relative z-10 text-base sm:text-[20px] leading-relaxed mb-10"
            style={{
              color: "#5a5248",
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: "56ch",
            }}
          >
            Take a breath. Start with a free class—no credit card, no pressure, just peace.
          </p>

          {/* ── CTA Button ── */}
          <a
              href="https://wa.me/919541438044"
    target="_blank"
            className="relative z-10 inline-block text-sm font-medium tracking-widest px-12 py-3 rounded-sm transition-all duration-200 ease-out"
            style={{
              backgroundColor: btnHover ? "#1e3329" : "#2d4a3e",
              color: "#f0ede4",
              transform: btnHover ? "translateY(-2px)" : "translateY(0)",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Explore Tours
          </a>

        </div>
        {/* ── END INNER CONTAINER ── */}

      </div>
      {/* ── END MAIN CONTAINER ── */}
    </>
  );
};

export default CTASection;