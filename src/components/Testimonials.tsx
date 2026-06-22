"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "João Mendes",
    role: "MEI",
    location: "São Luís-MA",
    initials: "JM",
    quote:
      "A Maria Clara resolveu minha regularização em menos de uma semana. Explicou tudo com clareza e sem burocracia.",
  },
  {
    name: "Dra. Ana Beatriz",
    role: "Clínica Odontológica",
    location: "São Luís-MA",
    initials: "AB",
    quote:
      "Profissional excepcional. Finalmente entendo minha contabilidade e pago menos imposto dentro da lei.",
  },
  {
    name: "Carlos Lima",
    role: "Loja Online",
    location: "Brasil",
    initials: "CL",
    quote:
      "Me ajudou a abrir a empresa e organizar o financeiro. Atendimento rápido e sempre disponível.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative bg-brand-surface border border-brand-border rounded-2xl p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 h-full shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Decorative typographic quote — large, low-opacity background element */}
      <span
        className="absolute -top-6 -left-1 font-display text-[120px] leading-none text-brand-accent/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <StarRating />

      <blockquote className="text-brand-text leading-relaxed text-sm sm:text-base flex-1 relative z-10">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 sm:pt-5 border-t border-brand-border">
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-accent/10 border-2 border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-xs sm:text-sm flex-shrink-0"
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <div className="font-semibold text-brand-text text-xs sm:text-sm">{t.name}</div>
          <div className="text-brand-muted text-[10px] sm:text-xs">
            {t.role} &middot; {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const firstChild = container.firstElementChild as HTMLElement;
    if (firstChild) {
      const childWidth = firstChild.getBoundingClientRect().width;
      const gap = 24; // gap-6 is 24px
      const index = Math.round(scrollLeft / (childWidth + gap));
      if (index >= 0 && index < testimonials.length) {
        setScrollIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    if (firstChild) {
      const childWidth = firstChild.getBoundingClientRect().width;
      const gap = 24;
      container.scrollTo({
        left: index * (childWidth + gap),
        behavior: "smooth",
      });
      setScrollIndex(index);
    }
  };

  return (
    <section
      id="depoimentos"
      className={`bg-brand-surface py-12 md:py-24 px-4 sm:px-6 ${
        testimonials.length < 3 ? "hidden md:block" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          {/* Eyebrow */}
          <span className="inline-block text-brand-accent text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mb-3 md:mb-5 border border-brand-accent/30 rounded-full px-3.5 py-1.5">
            Depoimentos
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight text-brand-text">
            O que dizem nossos clientes
          </h2>

          {/* Social proof aggregate */}
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-5">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-brand-muted text-xs sm:text-sm font-medium">
              5.0 &middot; Avaliado pelos clientes
            </span>
          </div>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 28 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Scroll-snap carousel */}
        <div className="md:hidden">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center snap-always px-0.5"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-0 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ver depoimento ${i + 1} de ${testimonials.length}`}
                className="w-11 h-11 flex items-center justify-center focus:outline-none"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    i === scrollIndex ? "bg-brand-accent" : "bg-brand-border"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
