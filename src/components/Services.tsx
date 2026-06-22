"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChartLine,
  Buildings,
  CheckCircle,
  ChartBar,
  IdentificationCard,
  Users,
  FileText,
  BookOpen,
  Storefront,
  Handshake,
  Seal,
  PencilLine,
  ArrowDown,
  ArrowUp,
} from "@phosphor-icons/react";
import type { ElementType } from "react";

type ServiceItem = {
  icon: ElementType;
  title: string;
  description: string;
  featured?: boolean;
};

const services: ServiceItem[] = [
  {
    icon: ChartLine,
    title: "Planejamento Tributário",
    description: "Reduza impostos legalmente com estratégias personalizadas para o seu negócio.",
    featured: true,
  },
  {
    icon: Buildings,
    title: "Abertura e Alteração de Empresas",
    description: "Abertura, alteração e regularização de CNPJ de forma ágil e descomplicada.",
    featured: true,
  },
  {
    icon: CheckCircle,
    title: "Regularização Fiscal",
    description: "Resolva pendências fiscais e mantenha sua empresa em conformidade com o fisco.",
    featured: true,
  },
  {
    icon: ChartBar,
    title: "BPO Financeiro",
    description: "Gestão financeira terceirizada para você focar no que realmente importa.",
  },
  {
    icon: IdentificationCard,
    title: "Imposto de Renda PF",
    description: "Declaração do IR com segurança, dentro do prazo e sem dor de cabeça.",
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description: "Processamento mensal da folha com precisão e conformidade trabalhista.",
  },
  {
    icon: FileText,
    title: "Emissão de NF",
    description: "Emissão e controle de notas fiscais de forma simples e organizada.",
  },
  {
    icon: BookOpen,
    title: "Escrituração Contábil",
    description: "Registros contábeis em dia, garantindo rastreabilidade e transparência.",
  },
  {
    icon: Storefront,
    title: "Assessoria MEI",
    description: "Suporte completo ao Microempreendedor Individual: DAS, DASN e obrigações.",
  },
  {
    icon: Handshake,
    title: "Consultoria Empresarial",
    description: "Orientação estratégica para tomada de decisões financeiras e societárias.",
  },
  {
    icon: Seal,
    title: "Certidões Fiscais",
    description: "Emissão de certidões negativas e positivas junto aos órgãos competentes.",
  },
  {
    icon: PencilLine,
    title: "Alteração Contratual",
    description: "Alterações de contrato social, quadro societário e objeto social da empresa.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { y: 24 },
  show: { y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? services : services.slice(0, 6);

  return (
    <section id="servicos" className="bg-brand-bg py-12 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow + title */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3"
        >
          <span className="inline-block text-brand-accent text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] mb-3 md:mb-5 border border-brand-accent/30 rounded-full px-3.5 py-1.5">
            Serviços
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight text-brand-text">
            O que posso fazer pelo seu negócio
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-muted text-sm sm:text-base leading-relaxed text-center max-w-[60ch] mx-auto mb-8 md:mb-14"
        >
          Soluções contábeis completas para cada fase do seu negócio, com
          atendimento ágil e linguagem acessível.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {visible.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ y: 16, transition: { duration: 0.25 } }}
              >
                {service.featured ? (
                  <FeaturedCard service={service} />
                ) : (
                  <SecondaryCard service={service} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / collapse */}
        <div className="text-center mt-8 md:mt-10">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            {expanded ? (
              <>
                <ArrowUp size={16} weight="bold" aria-hidden="true" />
                Ver menos serviços
              </>
            ) : (
              <>
                <ArrowDown size={16} weight="bold" aria-hidden="true" />
                Ver todos os 12 serviços
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <div className="relative bg-brand-surface rounded-xl p-5 md:p-6 border-2 border-brand-accent/35 shadow-sm hover:border-brand-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-200 h-full flex flex-col">
      {/* Badge inside the card — top right */}
      <span className="absolute top-4 right-4 bg-brand-accent text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
        Mais procurado
      </span>

      <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4 text-brand-accent">
        <Icon size={26} weight="light" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-brand-text text-base mb-2 pr-20">
        {service.title}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

function SecondaryCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <div className="bg-brand-surface rounded-xl p-5 md:p-6 border border-brand-border border-l-2 border-l-brand-border shadow-sm hover:border-l-brand-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-200 h-full flex flex-col">
      <div className="w-11 h-11 bg-brand-accent/8 rounded-xl flex items-center justify-center mb-4 text-brand-accent">
        <Icon size={24} weight="light" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-brand-text text-base mb-1.5">
        {service.title}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}
