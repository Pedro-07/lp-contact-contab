"use client";

import { motion } from "framer-motion";

const niches = [
  { label: "MEI e Microempresas", primary: true },
  { label: "Clínicas e Saúde", primary: true },
  { label: "E-commerce", primary: false },
  { label: "Comércio e Varejo", primary: false },
  { label: "Prestadores de Serviço", primary: false },
  { label: "Profissionais Liberais", primary: false },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const pillVariants = {
  hidden: { y: 16, scale: 0.96 },
  show: { y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Niches() {
  return (
    <section
      className="bg-brand-dark py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight text-white mb-8 md:mb-12"
        >
          Atendemos quem precisa de{" "}
          <span className="italic">clareza</span>
          {" "}para crescer
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {niches.map((niche) => (
            <motion.span
              key={niche.label}
              variants={pillVariants}
              className={
                niche.primary
                  ? "inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/45 text-white font-semibold text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-brand-accent/25 hover:border-brand-accent/65 transition-all duration-200 cursor-default min-w-[130px] md:min-w-0 justify-center text-center whitespace-normal"
                  : "inline-flex items-center bg-white/8 border border-white/15 text-white/75 text-sm md:text-base font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-white/12 hover:border-white/28 hover:text-white transition-all duration-200 cursor-default min-w-[130px] md:min-w-0 justify-center text-center whitespace-normal"
              }
              style={{ textOverflow: "unset" }}
            >
              {niche.primary && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              {niche.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
