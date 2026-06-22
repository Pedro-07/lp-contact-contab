"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5598984784490?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20uma%20consultoria.";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        open
          ? "bg-brand-footer border-b border-white/10 shadow-lg shadow-black/20"
          : scrolled
          ? "bg-brand-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-brand-dark border-b-0 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo — horizontal official image */}
          <Link href="#" className="flex items-center group">
            <div className="relative h-[84px] w-[150px] transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/logo-horizontal.png"
                alt="Contact Consultoria Logo"
                fill
                className="object-contain object-left mix-blend-screen"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com especialista pelo WhatsApp"
            className="hidden md:inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
          >
            Falar com especialista
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {open ? (
              <X size={22} weight="bold" />
            ) : (
              <List size={22} weight="bold" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 top-24 bg-brand-footer z-40 md:hidden flex flex-col px-6 pt-8 gap-0 overflow-y-auto pb-16"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-white text-xl font-display font-semibold py-5 border-b border-white/5 active:bg-white/5 px-2 transition-all duration-150"
                >
                  <span>{link.label}</span>
                  <svg
                    className="w-5 h-5 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 px-2"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com especialista pelo WhatsApp"
                onClick={() => setOpen(false)}
                className="block bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-semibold px-6 py-4 rounded-xl transition-all duration-200 text-lg shadow-lg shadow-brand-accent/20"
              >
                Falar com especialista
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
