"use client";

import Link from "next/link";
import { ContactLogoAnimated } from "@/components/ContactLogoAnimated";

const WA_LINK =
  "https://wa.me/5598984784490?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consultoria%20com%20a%20Contact%20Consultoria.";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-0 md:min-h-[calc(100dvh-6rem)] bg-brand-dark overflow-hidden">

      {/* Left — 55% dark panel */}
      <div className="w-full md:w-[55%] flex flex-col justify-center pl-6 pr-6 md:pl-16 md:pr-12 lg:pl-24 lg:pr-16 py-10 md:py-0">

        {/* Eyebrow tag */}
        <div
          className="inline-flex self-start items-center gap-2 bg-white/5 border border-white/40 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-white/90 text-xs md:text-sm font-semibold mb-4 md:mb-5 tracking-wide animate-hero-up"
          style={{ animationDelay: "0ms" }}
        >
          Contact Consultoria
        </div>

        {/* Headline */}
        <div
          className="border-l-4 border-amber-400/75 pl-4 sm:pl-5 mb-4 animate-hero-right"
          style={{ animationDelay: "150ms" }}
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] md:leading-[1.07] text-white">
            Contabilidade que gera clareza e acelera decisões.
          </h1>
        </div>

        <p
          className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[52ch] mb-5 md:mb-6 animate-hero-up"
          style={{ animationDelay: "320ms" }}
        >
          Atendimento ágil, linguagem simples e soluções sob medida para MEIs,
          microempresas e profissionais de saúde.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-hero-up"
          style={{ animationDelay: "480ms" }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com um especialista da Contact Consultoria"
            className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-colors duration-200 text-sm w-full sm:w-auto text-center"
          >
            Falar com especialista
          </a>
          <Link
            href="#planos"
            aria-label="Ver planos disponíveis"
            className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-brand-dark font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-all duration-200 text-sm w-full sm:w-auto text-center"
          >
            Ver planos
          </Link>
        </div>

        {/* Social proof */}
        <div
          className="mt-5 md:mt-6 flex flex-col justify-center border-l-2 border-amber-400 pl-4 py-0.5 md:py-1 animate-hero-up"
          style={{ animationDelay: "620ms" }}
        >
          <span className="text-white font-bold text-lg md:text-xl leading-none">100+</span>
          <span className="text-white/60 text-xs md:text-sm mt-1">clientes atendidos</span>
        </div>
      </div>

      {/* Right — 45% logo panel */}
      <div className="hidden md:flex w-full md:w-[45%] min-h-[480px] md:min-h-0 relative items-center justify-center">
        {/* Animated logo wrapper, occupies 70% to 80% width */}
        <div className="w-[105%] sm:w-[110%] md:w-[115%] max-w-[480px] aspect-square relative flex-none flex items-center justify-center">
          <ContactLogoAnimated />
        </div>
      </div>
    </section>
  );
}

