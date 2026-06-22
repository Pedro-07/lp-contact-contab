"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";

/* ─── Config ─────────────────────────────────────────────────── */
const SHIELD_MAX_TILT = 5; // degrees – parallax on whole shield
const C_MAX_ROTATE = 15; // degrees – inner "C" 3D reaction
const FLOAT_AMPLITUDE = 7; // px – vertical float range
const FLOAT_DURATION = 7000; // ms – one float cycle
const SWEEP_INTERVAL_MIN = 8000; // ms
const SWEEP_INTERVAL_MAX = 12000; // ms

/* Spring configs (premium, organic feel) */
const SPRING_SHIELD = { stiffness: 80, damping: 20, mass: 0.8 };
const SPRING_C = { stiffness: 60, damping: 18, mass: 1.0 };

export default function LogoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Mouse-driven raw values ─────────────────────────────── */
  const rawShieldX = useMotionValue(0);
  const rawShieldY = useMotionValue(0);
  const rawCX = useMotionValue(0);
  const rawCY = useMotionValue(0);

  /* ── Springs – smooth & physical ─────────────────────────── */
  const shieldRotateX = useSpring(rawShieldX, SPRING_SHIELD);
  const shieldRotateY = useSpring(rawShieldY, SPRING_SHIELD);
  const cRotateX = useSpring(rawCX, SPRING_C);
  const cRotateY = useSpring(rawCY, SPRING_C);

  /* ── Floating animation (pure motion value, no re-renders) ─ */
  const floatY = useMotionValue(0);

  useAnimationFrame((time) => {
    const y =
      Math.sin((time / FLOAT_DURATION) * Math.PI * 2) * FLOAT_AMPLITUDE;
    floatY.set(y);
  });

  /* ── Light sweep state ───────────────────────────────────── */
  const [sweepActive, setSweepActive] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const scheduleSweep = () => {
      const delay =
        SWEEP_INTERVAL_MIN +
        Math.random() * (SWEEP_INTERVAL_MAX - SWEEP_INTERVAL_MIN);
      timeout = setTimeout(() => {
        setSweepActive(true);
        // Reset after animation completes
        setTimeout(() => setSweepActive(false), 1200);
        scheduleSweep();
      }, delay);
    };

    // Initial sweep after a short delay
    timeout = setTimeout(() => {
      setSweepActive(true);
      setTimeout(() => setSweepActive(false), 1200);
      scheduleSweep();
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  /* ── Mouse handler ───────────────────────────────────────── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Normalized -1 to 1
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);

      // Clamp
      const clampedX = Math.max(-1, Math.min(1, nx));
      const clampedY = Math.max(-1, Math.min(1, ny));

      // Shield parallax (subtle)
      rawShieldX.set(-clampedY * SHIELD_MAX_TILT);
      rawShieldY.set(clampedX * SHIELD_MAX_TILT);

      // Inner C rotation (more reactive)
      rawCX.set(-clampedY * C_MAX_ROTATE);
      rawCY.set(clampedX * C_MAX_ROTATE);
    },
    [rawShieldX, rawShieldY, rawCX, rawCY]
  );

  const handleMouseLeave = useCallback(() => {
    rawShieldX.set(0);
    rawShieldY.set(0);
    rawCX.set(0);
    rawCY.set(0);
  }, [rawShieldX, rawShieldY, rawCX, rawCY]);

  /* ── Touch handler (mobile parallax) ─────────────────────── */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;

      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const nx = (touch.clientX - cx) / (rect.width / 2);
      const ny = (touch.clientY - cy) / (rect.height / 2);

      const clampedX = Math.max(-1, Math.min(1, nx));
      const clampedY = Math.max(-1, Math.min(1, ny));

      rawShieldX.set(-clampedY * SHIELD_MAX_TILT * 0.6);
      rawShieldY.set(clampedX * SHIELD_MAX_TILT * 0.6);
      rawCX.set(-clampedY * C_MAX_ROTATE * 0.6);
      rawCY.set(clampedX * C_MAX_ROTATE * 0.6);
    },
    [rawShieldX, rawShieldY, rawCX, rawCY]
  );

  const handleTouchEnd = useCallback(() => {
    rawShieldX.set(0);
    rawShieldY.set(0);
    rawCX.set(0);
    rawCY.set(0);
  }, [rawShieldX, rawShieldY, rawCX, rawCY]);

  /* ── Composite transforms ────────────────────────────────── */
  const shieldTransform = useTransform(
    [shieldRotateX, shieldRotateY, floatY],
    ([rx, ry, fy]: number[]) =>
      `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${fy}px)`
  );

  const cTransform = useTransform(
    [cRotateX, cRotateY],
    ([rx, ry]: number[]) =>
      `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="logo-animation-container"
    >
      {/* Outer wrapper — shield parallax + float */}
      <motion.div
        className="logo-animation-shield"
        style={{ transform: shieldTransform }}
      >
        {/* Logo image (full shield + C together) */}
        <Image
          src="/logo-contact.png"
          alt="Contact Consultoria Empresarial"
          width={280}
          height={340}
          className="logo-animation-image"
          priority
          draggable={false}
        />

        {/* Inner C overlay — separate 3D layer for enhanced depth */}
        <motion.div
          className="logo-animation-c-overlay"
          style={{ transform: cTransform }}
        />

        {/* Ambient glow behind shield */}
        <div className="logo-animation-ambient" aria-hidden="true" />

        {/* Light sweep overlay */}
        <div
          className={`logo-animation-sweep ${sweepActive ? "logo-animation-sweep--active" : ""}`}
          aria-hidden="true"
        />

        {/* Subtle glass edge highlight */}
        <div className="logo-animation-edge" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
