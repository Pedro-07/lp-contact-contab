"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const WA_BASE = "https://wa.me/5598984784490?text=";

interface PricingItem {
  label: string;
  price: string;
}

interface Plan {
  name: string;
  description: string;
  price?: string;
  customPricing?: PricingItem[];
  period?: string;
  features: string[];
  cta: string;
  waMsg: string;
  featured: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Start",
    description: "O essencial para manter sua empresa regularizada com segurança e praticidade.",
    customPricing: [
      { label: "MEI", price: "R$ 199,99" },
      { label: "Microempresa", price: "R$ 319,99" }
    ],
    features: [
      "MEI e Micro Empresas do Simples Nacional",
      "Envio das obrigações mensais do Simples Nacional",
      "Acompanhamento de parcelamentos",
      "Emissão e envio do DAS",
      "Suporte via WhatsApp",
      "Orientações básicas fiscais e tributárias",
      "Apoio na regularização simples da empresa",
      "Monitoramento básico da situação fiscal do CNPJ"
    ],
    cta: "Falar com especialista",
    waMsg: "Olá! Gostaria de saber mais sobre o Plano Start da Contact Consultoria.",
    featured: false,
  },
  {
    name: "Plus",
    description: "Mais controle, mais suporte e mais organização para empresas em crescimento.",
    price: "R$ 499,99",
    period: "/mês",
    features: [
      "Tudo do Plano Start +",
      "Planejamento tributário básico",
      "Controle fiscal",
      "Suporte prioritário via WhatsApp",
      "Folha de pagamento e Pró Labore",
      "Suporte para emissão de notas"
    ],
    cta: "Falar com especialista",
    waMsg: "Olá! Gostaria de saber mais sobre o Plano Plus da Contact Consultoria.",
    featured: true,
    badge: "Mais popular",
  },
  {
    name: "Prime",
    description: "Uma gestão contábil estratégica para empresas que querem crescer com segurança.",
    price: "R$ 799,99",
    period: "/mês",
    features: [
      "Tudo do Plano Plus +",
      "Gestão completa de empresas do Lucro Presumido e Lucro Real",
      "Apuração de impostos federais, estaduais e municipais",
      "Entrega de obrigações acessórias",
      "Análise fiscal e contábil estratégica",
      "Relatórios gerenciais",
      "Suporte consultivo especializado",
      "Balanço e demais declarações contábeis"
    ],
    cta: "Falar com especialista",
    waMsg: "Olá! Gostaria de saber mais sobre o Plano Prime da Contact Consultoria.",
    featured: false,
  },
];

export default function Plans() {
  return (
    <section id="planos" className="bg-brand-bg py-12 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3"
        >
          <span className="inline-block text-brand-accent text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mb-3 md:mb-5 border border-brand-accent/30 rounded-full px-3.5 py-1.5">
            Planos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight text-brand-text">
            Transparência em cada etapa
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-muted text-sm sm:text-base leading-relaxed text-center max-w-[58ch] mx-auto mb-8 md:mb-14"
        >
          Escolha o plano que melhor se encaixa no seu momento. Sem letras miúdas,
          sem surpresas na fatura.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-2 md:pt-4 overflow-visible">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
                plan.featured
                  ? "bg-brand-dark border-2 border-brand-accent shadow-2xl shadow-brand-accent/15 md:-translate-y-3"
                  : "bg-brand-surface border border-brand-border shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              {/* Plan name + description */}
              <div className="mb-5 md:mb-6">
                <h3
                  className={`font-display text-xl sm:text-2xl font-semibold mb-2 ${
                    plan.featured ? "text-white" : "text-brand-text"
                  }`}
                >
                  Plano {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.featured ? "text-white/60" : "text-brand-muted"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8 min-h-[90px] md:min-h-[105px] flex flex-col justify-end">
                {plan.customPricing ? (
                  <div className="flex flex-col gap-2">
                    {plan.customPricing.map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-baseline border-b border-dashed border-brand-border/40 pb-1.5 last:border-0 last:pb-0"
                      >
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.05em] text-brand-muted">
                          {item.label}
                        </span>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] sm:text-[10px] text-brand-muted/70 lowercase font-medium -mb-0.5">
                            a partir de
                          </span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-text">
                              {item.price}
                            </span>
                            <span className="text-[10px] sm:text-xs text-brand-muted">
                              /mês
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] block mb-1 ${
                        plan.featured ? "text-white/45" : "text-brand-muted/70"
                      }`}
                    >
                      A partir de
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span
                        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
                          plan.featured ? "text-white" : "text-brand-text"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs sm:text-sm ${
                          plan.featured ? "text-white/50" : "text-brand-muted"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-6 md:mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      weight="bold"
                      className="mt-0.5 flex-shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm leading-snug ${
                        plan.featured ? "text-white/80" : "text-brand-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WA_BASE}${encodeURIComponent(plan.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${plan.cta} — Plano ${plan.name}`}
                className={`w-full text-center font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm ${
                  plan.featured
                    ? "bg-brand-accent hover:bg-brand-accent-hover text-white"
                    : "border border-brand-border hover:border-brand-accent text-brand-text hover:text-brand-accent"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-brand-muted/60 text-[11px] sm:text-xs mt-8 md:mt-10">
          Valores sujeitos a alteração conforme complexidade e regime tributário.
          Entre em contato para uma avaliação gratuita.
        </p>
      </div>
    </section>
  );
}
