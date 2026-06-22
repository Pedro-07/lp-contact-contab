"use client";

import { useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Reusable static SVG logo helper containing ONLY the shield symbol, centered in a 600x600 canvas
const LogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    className="w-full h-full block"
  >
    <g transform="translate(-245, -142)">
      <g
        transform="translate(0,1080) scale(0.1,-0.1)"
        fill="white"
        stroke="none"
      >
        {/* Shield Border */}
        <path d="M5381 9260 c-415 -35 -882 -153 -1291 -327 -163 -70 -466 -218 -476
-234 l-9 -14 -7 -425 c-4 -234 -10 -546 -14 -695 l-7 -270 12 -169 c6 -93 18
-221 27 -285 30 -234 93 -492 169 -691 87 -230 246 -504 411 -710 94 -116 316
-342 449 -457 265 -229 578 -440 908 -612 l132 -69 131 72 c377 208 690 428
966 682 192 176 364 377 509 597 90 137 220 392 274 542 79 215 132 483 156
790 l12 150 -7 555 c-3 305 -9 656 -13 779 l-6 224 -211 102 c-245 120 -448
203 -668 273 -271 88 -529 145 -803 177 -158 19 -502 27 -644 15z m594 -241
c152 -13 371 -50 533 -90 255 -63 590 -182 839 -299 l111 -52 7 -102 c4 -55 5
-407 2 -781 l-4 -680 -17 -143 c-32 -278 -88 -522 -163 -712 -35 -88 -121
-259 -173 -345 -188 -308 -545 -661 -935 -924 -140 -95 -385 -248 -477 -301
l-58 -32 -122 68 c-166 90 -353 207 -490 305 -341 244 -631 550 -805 849 -79
137 -114 207 -168 339 -98 238 -153 451 -192 741 l-17 125 2 555 c1 305 5 660
8 789 l7 233 96 45 c276 129 528 224 773 292 451 123 803 157 1243 120z"/>
        {/* Shield Rim */}
        <path d="M5445 8803 c-99 -7 -292 -34 -410 -58 -252 -51 -512 -139 -818 -278
l-178 -80 4 -756 4 -756 22 -115 c12 -63 34 -165 50 -226 104 -397 312 -747
622 -1050 227 -220 487 -404 840 -593 l96 -51 169 101 c330 197 552 361 752
554 165 159 364 407 348 433 -9 15 -335 262 -346 262 -5 0 -49 -35 -97 -77
-186 -162 -371 -253 -616 -304 l-102 -21 -135 0 -135 -1 -95 17 c-179 32 -369
111 -516 214 -90 64 -212 186 -276 276 -58 83 -126 214 -157 305 -12 35 -31
101 -42 145 l-20 81 -6 145 -5 145 16 91 c8 51 27 129 42 175 34 110 114 264
185 359 68 90 199 218 289 282 188 134 404 214 640 239 l110 11 110 -11 c141
-15 276 -49 392 -100 120 -53 218 -117 343 -225 55 -47 103 -85 107 -84 3 2
149 115 322 253 174 137 315 254 313 260 -9 29 -342 179 -575 259 -280 96
-553 154 -826 176 -121 9 -307 11 -421 3z"/>
        {/* Inner "C" letter */}
        <path d="M5542 7999 c-157 -18 -306 -72 -437 -157 -152 -99 -258 -220 -335
-384 -48 -102 -77 -212 -90 -341 l-10 -99 10 -91 c14 -126 43 -226 95 -332
l44 -90 68 -84 67 -84 80 -64 c93 -73 217 -140 329 -178 42 -14 123 -33 180
-41 l102 -16 115 6 115 5 96 25 c164 41 313 124 441 244 26 24 48 48 48 53 0
15 -218 229 -234 229 -9 0 -52 -27 -96 -60 -101 -74 -202 -124 -304 -150 l-79
-20 -81 0 c-104 0 -192 21 -279 67 l-70 37 -64 65 -64 64 -45 91 -44 91 -15
70 c-8 39 -15 110 -15 158 l0 88 16 72 c9 40 34 110 56 157 l41 85 77 77 77
78 85 40 85 41 84 15 84 15 65 -6 c146 -14 303 -76 395 -155 26 -23 58 -48 72
-57 l23 -15 108 112 c59 62 108 119 110 126 4 16 -95 98 -189 157 -136 85
-292 137 -464 157 -102 11 -149 11 -253 -1z"/>
      </g>
    </g>
  </svg>
);

export const ContactLogoAnimated = memo(function ContactLogoAnimated({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const isReduced = false; // Forçado para false para testes, ignorando a diretiva do sistema operacional

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track page scroll
  const { scrollY, scrollYProgress } = useScroll();

  // Scroll animations values for independent layers (depth parallax)
  const yBg = useTransform(scrollY, [0, 300], [0, 50]);
  const yMid = useTransform(scrollY, [0, 300], [0, 85]);
  const yLogo = useTransform(scrollY, [0, 300], [0, 120]);
  const rotateY = useTransform(scrollYProgress, [0, 0.4], [0, 15]);

  // Glow scales on viewport entrance scroll
  const scaleGlowScroll = useTransform(scrollY, [0, 300], [1, 1.2]);

  // Entrance mount variants
  const logoVariants = {
    hidden: isReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 },
    visible: isReduced ? { opacity: 1, scale: 1 } : {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 }
    }
  };

  const ringVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.6 }
    }
  };

  // SSR / Hydration Fallback: render static, non-animated logo immediately
  if (!mounted) {
    return (
      <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${className}`}>
        <div className="w-full h-full relative" style={{ zIndex: 30 }}>
          <LogoSvg />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full flex items-center justify-center ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      {/* 1. Glow Radial (z-0) - Gold, low opacity, pulses & scales on scroll */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          y: (isMobile || isReduced) ? 0 : yBg,
          scale: (isMobile || isReduced) ? 1 : scaleGlowScroll,
          zIndex: 0,
        }}
      >
        <motion.div
          className="rounded-full pointer-events-none"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(255, 191, 71, 0.22) 0%, transparent 70%)",
            filter: "blur(150px)",
            WebkitFilter: "blur(150px)",
          }}
          animate={isReduced ? { scale: 1, opacity: 0.4 } : { scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={isReduced ? { duration: 0 } : { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const }}
        />
      </motion.div>

      {/* 2. Radial Grid (z-5) - Astronomy/dashboard concentric radar lines */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          y: (isMobile || isReduced) ? 0 : yBg,
          zIndex: 5,
        }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-[130%] h-[130%] opacity-[0.04]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Concentric Circles */}
          <circle cx="300" cy="300" r="75" stroke="#ffbf47" strokeWidth="0.8" fill="none" />
          <circle cx="300" cy="300" r="150" stroke="#ffbf47" strokeWidth="0.8" fill="none" />
          <circle cx="300" cy="300" r="225" stroke="#ffbf47" strokeWidth="0.8" fill="none" />
          <circle cx="300" cy="300" r="280" stroke="#ffbf47" strokeWidth="0.8" fill="none" />
          
          {/* Radial Crosshair Lines */}
          <line x1="300" y1="20" x2="300" y2="580" stroke="#ffbf47" strokeWidth="0.8" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="#ffbf47" strokeWidth="0.8" />
          
          {/* Diagonal Guides */}
          <line x1="102" y1="102" x2="498" y2="498" stroke="#ffbf47" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="102" y1="498" x2="498" y2="102" stroke="#ffbf47" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* 3. Light Rays (z-5) - Subtly moving light beams */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          y: (isMobile || isReduced) ? 0 : yBg,
          zIndex: 5,
        }}
      >
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "500px",
            height: "6px",
            background: "linear-gradient(90deg, transparent, rgba(255, 191, 71, 0.12) 50%, transparent)",
            filter: "blur(14px)",
            WebkitFilter: "blur(14px)",
          }}
          animate={isReduced ? { rotate: 15 } : { rotate: 360 }}
          transition={isReduced ? { duration: 0 } : { duration: 40, repeat: Infinity, ease: "linear" as const }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "500px",
            height: "6px",
            background: "linear-gradient(90deg, transparent, rgba(255, 191, 71, 0.08) 50%, transparent)",
            filter: "blur(14px)",
            WebkitFilter: "blur(14px)",
          }}
          animate={isReduced ? { rotate: 105 } : { rotate: -360 }}
          transition={isReduced ? { duration: 0 } : { duration: 50, repeat: Infinity, ease: "linear" as const }}
        />
      </motion.div>

      {/* 4. Network Particles (z-10) - Slow organic node clusters */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          y: (isMobile || isReduced) ? 0 : yMid,
          zIndex: 10,
        }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
        >
          {/* Static thin connections to represent network architecture */}
          {/* Cluster A */}
          <line x1="160" y1="220" x2="220" y2="160" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          <line x1="220" y1="160" x2="240" y2="240" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          <line x1="160" y1="220" x2="240" y2="240" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />

          {/* Cluster B */}
          <line x1="440" y1="180" x2="480" y2="230" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          <line x1="480" y1="230" x2="410" y2="260" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          
          {/* Cluster C */}
          <line x1="140" y1="410" x2="200" y2="450" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          <line x1="200" y1="450" x2="240" y2="390" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />

          {/* Cluster D */}
          <line x1="450" y1="420" x2="410" y2="480" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />
          <line x1="410" y1="480" x2="490" y2="470" stroke="rgba(255, 191, 71, 0.08)" strokeWidth="0.8" />

          {/* Network Node Particles with slow floating motion */}
          {/* Node 1 */}
          <motion.circle
            cx="160" cy="220" r="2.5" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, 6, -4, 0], y: [0, -8, 4, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 2 */}
          <motion.circle
            cx="220" cy="160" r="3" fill="#ffbf47" opacity="0.3"
            animate={isReduced ? {} : { x: [0, -5, 8, 0], y: [0, 6, -6, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 3 */}
          <motion.circle
            cx="240" cy="240" r="2.5" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, 8, -5, 0], y: [0, -4, 8, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node 4 */}
          <motion.circle
            cx="440" cy="180" r="3" fill="#ffbf47" opacity="0.3"
            animate={isReduced ? {} : { x: [0, -6, 6, 0], y: [0, 8, -8, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 5 */}
          <motion.circle
            cx="480" cy="230" r="2.5" fill="#ffbf47" opacity="0.2"
            animate={isReduced ? {} : { x: [0, 5, -8, 0], y: [0, -6, 6, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 6 */}
          <motion.circle
            cx="410" cy="260" r="2.5" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, -7, 5, 0], y: [0, 5, -7, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node 7 */}
          <motion.circle
            cx="140" cy="410" r="2.5" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, 8, -6, 0], y: [0, -8, 5, 0] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 8 */}
          <motion.circle
            cx="200" cy="450" r="3" fill="#ffbf47" opacity="0.3"
            animate={isReduced ? {} : { x: [0, -5, 7, 0], y: [0, 7, -5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 9 */}
          <motion.circle
            cx="240" cy="390" r="2.5" fill="#ffbf47" opacity="0.2"
            animate={isReduced ? {} : { x: [0, 6, -8, 0], y: [0, -5, 8, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node 10 */}
          <motion.circle
            cx="450" cy="420" r="3" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, -7, 6, 0], y: [0, 8, -6, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 11 */}
          <motion.circle
            cx="410" cy="480" r="2.5" fill="#ffbf47" opacity="0.2"
            animate={isReduced ? {} : { x: [0, 8, -4, 0], y: [0, -6, 8, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Node 12 */}
          <motion.circle
            cx="490" cy="470" r="2.5" fill="#ffbf47" opacity="0.25"
            animate={isReduced ? {} : { x: [0, -5, 8, 0], y: [0, 5, -8, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* 5. Orbital System (z-20) - Crossing double ellipses */}
      {!isReduced && (
        <motion.div
          variants={ringVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            y: (isMobile || isReduced) ? 0 : yMid,
            zIndex: 20
          }}
        >
          {/* Orbit 1: Inclined at 15deg, Spin Ring (8s, forward) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "rotate(15deg)", transformStyle: "preserve-3d" }}
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full animate-spin-ring"
              style={{ transformStyle: "preserve-3d" }}
            >
              <ellipse
                cx="300"
                cy="300"
                rx="234"
                ry="172.8"
                stroke="rgba(255, 191, 71, 0.45)"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="534" cy="300" r="7" fill="#ffbf47" />
            </svg>
          </div>

          {/* Orbit 2: Inclined at -35deg, Spin Ring Reverse (12s, backward) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "rotate(-35deg)", transformStyle: "preserve-3d" }}
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full animate-spin-ring-reverse"
              style={{ transformStyle: "preserve-3d" }}
            >
              <ellipse
                cx="300"
                cy="300"
                rx="190"
                ry="110"
                stroke="rgba(255, 191, 71, 0.30)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="490" cy="300" r="6" fill="#ffbf47" />
            </svg>
          </div>
        </motion.div>
      )}

      {/* 6. Logo (z-30) - Foremost layer with float, rotateY sutil, and fast parallax */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full relative"
        style={{
          zIndex: 30,
          rotateY: (isMobile || isReduced) ? 0 : rotateY,
          y: (isMobile || isReduced) ? 0 : yLogo,
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          animate={isReduced ? { y: 0 } : { y: [0, -12, 0] }}
          transition={isReduced ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-full h-full"
        >
          <LogoSvg />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
