import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5598984784490?text=Ol%C3%A1%2C%20Maria%20Clara!%20Gostaria%20de%20uma%20consultoria.";
const EMAIL = "contactconsultoriaempresarial@gmail.com";
const IG_LINK = "https://www.instagram.com/contacttconsultoria";

const quickLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer px-4 sm:px-6">
      {/* Gradient accent line at the top */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, #3B5BDB 30%, #3B5BDB 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* Brand — two-line typographic treatment (matches Navbar) */}
          <div>
            {/* Logo — horizontal official image */}
            <div className="relative h-[84px] w-[150px] mb-4 select-none">
              <Image
                src="/logo-horizontal.png"
                alt="Contact Consultoria Logo"
                fill
                className="object-contain object-left mix-blend-screen"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-[30ch]">
              Contabilidade que gera clareza e acelera decisões. São Luís, MA.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="text-slate-300 font-semibold text-[11px] uppercase tracking-[0.15em] block mb-5">
              Links rápidos
            </span>
            <nav aria-label="Links rápidos do rodapé" className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-slate-300 font-semibold text-[11px] uppercase tracking-[0.15em] block mb-5">
              Contato
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                WhatsApp: +55 98 98478-4490
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Enviar e-mail para Maria Clara"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200 break-all"
              >
                {EMAIL}
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do Instagram da Contact Consultoria"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                @contacttconsultoria
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-slate-500 text-sm">
            {`© ${year} Contact Consultoria · Todos os direitos reservados`}
          </span>
          <span className="text-slate-600 text-xs">
            São Luís &mdash; MA &middot; Atendimento em todo o Brasil
          </span>
        </div>
      </div>
    </footer>
  );
}
