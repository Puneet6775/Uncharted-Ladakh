import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────
// Nav links data
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",    link: "/" },
  { label: "About",   link: "/about" },
  { label: "Bikes",   link: "/bikes" },
  { label: "Contact", link: "/contact" },
];

// ─────────────────────────────────────────────
// Logo config
// ─────────────────────────────────────────────
const LOGO_CONFIG = {
  light: "/Image/Logohead.svg",
  dark:  "/Image/Logo.svg",
};

// Overlay exit duration in ms — keep in sync with overlayVariants exit duration
const OVERLAY_EXIT_DURATION_MS = 700;

// ─────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────
const overlayVariants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren",
    },
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const linkVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaVariants = {
  hidden:  { y: 20, opacity: 0, transition: { duration: 0.25 } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
  },
};

const dotVariants = {
  hidden:  { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
};

// ─────────────────────────────────────────────
// Header Component
// ─────────────────────────────────────────────
const Header = () => {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  // ── Delayed visual state — only flips AFTER overlay fully exits ──
  // This controls the logo and hamburger color on close.
  const [visualOpen, setVisualOpen] = useState(false);

  const closeTimerRef = useRef(null);

  const location = useLocation();
  const isHome   = location.pathname === "/";

  // ── Hamburger color ──
  // visualOpen stays true until the overlay has fully collapsed,
  // so the bars remain white during the closing animation.
  const hamburgerColor = visualOpen ? "#ffffff" : isHome ? "#ffffff" : "#000000";

  // ── Logo ──
  // Same rule — stays white logo until overlay is fully gone.
  const activeLogo = (!isHome && !visualOpen) ? LOGO_CONFIG.dark : LOGO_CONFIG.light;

  const openMenu = () => {
    // Clear any pending close timer so fast re-open works cleanly
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMenuOpen(true);
    setVisualOpen(true);  // switch to white immediately on open
  };

  const closeMenu = () => {
    setMenuOpen(false);   // starts the exit animation immediately
    // Delay the visual flip until the overlay animation finishes
    closeTimerRef.current = setTimeout(() => {
      setVisualOpen(false);
    }, OVERLAY_EXIT_DURATION_MS);
  };

  const toggleMenu = () => (menuOpen ? closeMenu() : openMenu());

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // ── Detect scroll ──
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close on route change ──
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // ── Lock body scroll when menu is open ──
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ════════════════════════════════════════
          HEADER BAR
      ════════════════════════════════════════ */}
      <div
        className="flex justify-center w-full fixed top-0 left-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(45, 74, 62, 0.55)" : "transparent",
          backdropFilter:       scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(240, 237, 228, 0.08)"
            : "1px solid transparent",
          transition: "background-color 0.5s, border-color 0.5s",
        }}
      >
        <header className="container mx-auto w-full flex items-center justify-between md:px-0 px-4 py-5">

          {/* ── Logo — crossfades on swap ── */}
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={closeMenu}>
            <motion.img
              key={activeLogo}
              src={activeLogo}
              alt="Uncharted Ladakh Logo"
              className="w-40 h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* ── Hamburger / Close button ── */}
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md focus:outline-none focus-visible:ring-2 z-50"
          >
            <span
              className="block h-[2px] w-6 transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-6 transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: hamburgerColor,
                opacity:   menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block h-[2px] w-6 transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: hamburgerColor,
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>

        </header>
      </div>

      {/* ════════════════════════════════════════
          FULLSCREEN OVERLAY (Framer Motion)
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "#2d4a3e" }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* ── Nav Links ── */}
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.link === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.link);

                return (
                  <motion.div
                    key={item.label}
                    variants={linkVariants}
                    className="relative"
                  >
                    <Link
                      to={item.link}
                      onClick={closeMenu}
                      className="group relative text-center no-underline heading block"
                      style={{
                        fontSize:            "clamp(2rem, 1rem + 3vw, 3.5rem)",
                        fontWeight:          700,
                        lineHeight:          1.1,
                        color:               isActive ? "#b3ccbb" : "#f0ede4",
                        textDecoration:      isActive ? "underline" : "none",
                        textDecorationColor: isActive ? "#b3ccbb" : "transparent",
                        textUnderlineOffset: "6px",
                        transition:          "color 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = "#b3ccbb";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive ? "#b3ccbb" : "#f0ede4";
                      }}
                    >
                      {item.label}

                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            key="dot"
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#b3ccbb" }}
                            variants={dotVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── Bottom CTA ── */}
            <motion.div
              className="absolute bottom-12 flex flex-col items-center gap-4"
              variants={ctaVariants}
            >
              <a
                href="#"
                onClick={closeMenu}
                className="inline-block text-sm font-medium tracking-widest px-10 py-3 rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: "#f0ede4",
                  color:           "#2d4a3e",
                  fontFamily:      "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ddeee0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f0ede4")}
              >
                Book Now
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;