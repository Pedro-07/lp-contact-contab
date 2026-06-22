"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5598984784490?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20uma%20consultoria.";
const EMAIL = "contactconsultoriaempresarial@gmail.com";

export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative py-14 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3B5BDB 0%, #2d4bbf 55%, #1e35a0 100%)",
      }}
    >
      {/* Decorative geometry */}
      <div
        className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl md:text-6xl tracking-tight text-white mb-4 md:mb-5"
        >
          Pronto para organizar sua contabilidade?
        </motion.h2>

        <motion.p
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10"
        >
          Atendimento online para todo o Brasil. Resposta rápida, linguagem clara.
        </motion.p>

        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* WhatsApp CTA — primary */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Maria Clara pelo WhatsApp agora"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-white/92 text-brand-accent font-bold px-6 py-4 md:px-9 md:py-5 rounded-xl text-sm sm:text-base transition-colors duration-200 shadow-xl w-full sm:w-auto text-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com especialista
          </a>

          {/* Email — secondary pill */}
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Enviar e-mail para Maria Clara"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-4 md:py-[18px] rounded-xl transition-all duration-200 text-sm w-full sm:w-auto text-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            ou envie um e-mail
          </a>
        </motion.div>
      </div>
    </section>
  );
}
