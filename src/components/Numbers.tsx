"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
  delay?: number;
}

function StatCounter({
  end,
  suffix = "",
  duration = 1600,
  trigger,
  delay = 0,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;

    const timeout = setTimeout(() => {
      setCount(0);
      const steps = 50;
      const stepValue = end / steps;
      const interval = duration / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [trigger, end, duration, delay]);

  return (
    <div className="tabular-nums">
      <span
        style={{ fontSize: "clamp(2.75rem, 5vw, 3.75rem)" }}
        className="font-bold text-brand-accent tracking-tight"
      >
        {count}
        {suffix}
      </span>
    </div>
  );
}

const stats = [
  { type: "counter" as const, value: 100, suffix: "+", label: "Clientes Atendidos", delay: 100 },
  { type: "counter" as const, value: 12, suffix: "", label: "Serviços Disponíveis", delay: 250 },
  { type: "text" as const, text: "Online", label: "Atendimento para todo o Brasil", delay: 400 },
];

export default function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger when 10% of the component enters the viewport. Highly reliable on mobile.
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="bg-brand-surface py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
          {stats.map((stat, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <div className="hidden sm:block w-px my-6 flex-shrink-0 bg-gradient-to-b from-transparent via-brand-border to-transparent" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`flex-1 flex flex-col items-center gap-2.5 py-6 sm:py-4 px-8 text-center${
                  i > 0 ? " border-t sm:border-t-0 border-brand-border/60" : ""
                }`}
              >
                {stat.type === "counter" ? (
                  <StatCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    trigger={isInView}
                    delay={stat.delay}
                  />
                ) : (
                  <span
                    style={{ fontSize: "clamp(2.75rem, 5vw, 3.75rem)" }}
                    className="font-bold text-brand-accent tracking-tight"
                  >
                    {stat.text}
                  </span>
                )}
                <span className="text-brand-muted text-xs font-semibold uppercase tracking-[0.15em] max-w-[18ch] leading-relaxed">
                  {stat.label}
                </span>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

