"use client";

import { motion } from "framer-motion";

/*
  DEMO: ícones via Simple Icons CDN (cdn.simpleicons.org) — open source, sem chave.
  Para substituir por logos locais: coloque os arquivos em /public/logos/
  nomeados como logo-nome.png e troque o campo `src` pelo caminho local.
  Use o script em /scripts/normalize-logos.js para padronizar tamanhos.
*/
// Cor hex após a / força o ícone para um tom escuro visível em fundo branco.
// Simple Icons CDN: cdn.simpleicons.org/{slug}/{hex-sem-hash}
const logos = [
  { name: "iFood",         src: "https://cdn.simpleicons.org/ifood/EA1D2C" },
  { name: "Nubank",        src: "https://cdn.simpleicons.org/nubank/820AD1" },
  { name: "Shopify",       src: "https://cdn.simpleicons.org/shopify/96BF48" },
  { name: "Uber",          src: "https://cdn.simpleicons.org/uber/000000" },
  { name: "Instagram",     src: "https://cdn.simpleicons.org/instagram/E4405F" },
  { name: "YouTube",       src: "https://cdn.simpleicons.org/youtube/FF0000" },
  { name: "Google",        src: "https://cdn.simpleicons.org/google/4285F4" },
];

export default function ClientLogos() {
  return (
    <div className="bg-brand-surface border-b border-brand-border py-8 overflow-hidden">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted/50 mb-7 select-none">
        Alguns dos nossos clientes
      </p>

      {/* Ticker */}
      <div
        className="relative overflow-hidden max-w-4xl mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex items-center w-max gap-4 px-4"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              aria-hidden={i >= logos.length}
              className="flex items-center justify-center bg-white border border-brand-border rounded-xl px-6 py-4 shadow-sm flex-shrink-0 w-[120px] h-[72px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={40}
                height={40}
                className="object-contain select-none"
                draggable={false}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const fallback = img.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-[11px] font-semibold text-brand-muted text-center leading-tight"
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
