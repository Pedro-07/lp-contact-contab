"use client";

import { motion } from "framer-motion";
import { InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";

const IG_LINK = "https://www.instagram.com/contacttconsultoria";

export default function About() {
  return (
    <section id="sobre" className="bg-brand-bg py-12 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">

        {/* Photo with decorative offset frame */}
        <motion.div
          initial={{ x: -24 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex items-center justify-center flex-shrink-0"
        >
          <div className="relative w-full max-w-[240px] md:max-w-[360px] pb-4 pr-4 md:pb-5 md:pr-5">
            <div
              className="absolute top-3 left-3 md:top-5 md:left-5 rounded-2xl border-2 border-brand-accent/25 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
              aria-hidden="true"
            />
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-accent/20"
              style={{ aspectRatio: "3/4" }}
            >
               <Image
                 src="/foto-maria-clara-v2.jpg"
                 alt="Especialista da Contact Consultoria"
                 fill
                 sizes="(max-width: 768px) 80vw, 360px"
                 className="object-cover object-[center_10%]"
               />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 24 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-1/2"
        >
          <span className="inline-block text-brand-accent text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 border border-brand-accent/30 rounded-full px-3.5 py-1.5">
            Quem está por trás da Contact
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight text-brand-text mb-4 md:mb-6">
            Experiência prática, atendimento humano
          </h2>

          <div className="space-y-3.5 text-brand-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            <p>
              A Contact Consultoria nasceu da trajetória de uma profissional que
              iniciou na contabilidade ainda durante a faculdade, concluindo a
              graduação aos 22 anos. Desde o início, a equipe construiu
              experiência prática em BPO financeiro, setor fiscal e área contábil.
            </p>

            <blockquote className="border-l-2 border-brand-accent pl-4 md:pl-5 py-0.5 md:py-1 my-3">
              <p className="font-display text-base sm:text-lg md:text-2xl italic text-brand-text leading-snug">
                "Técnica sólida, resposta rápida e linguagem sem burocracia."
              </p>
            </blockquote>

            <p>
              Essa vivência em diferentes frentes garantiu uma visão ampla de
              como as empresas funcionam por dentro. Hoje, a Contact une
              conhecimento técnico sólido, agilidade no atendimento e linguagem
              clara — sem burocracia desnecessária.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil do Instagram da Contact Consultoria"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto text-center font-semibold text-sm rounded-xl transition-all duration-200 border-2 border-brand-accent text-brand-accent bg-brand-accent/5 active:bg-brand-accent/15 px-6 py-3.5 min-h-[46px] hover:bg-brand-accent hover:text-white"
            >
              <InstagramLogo size={20} weight="bold" aria-hidden="true" />
              Conheça nosso trabalho no Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

