import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Clara Henrique | Contadora em São Luís-MA",
  description:
    "Contabilidade especializada para MEIs, empresas e profissionais de saúde. Atendimento ágil e online para todo o Brasil. CRC-MA 016792/O-2.",
  metadataBase: new URL("https://contactconsultoria.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maria Clara Henrique | Contadora em São Luís-MA",
    description:
      "Contabilidade especializada para MEIs, empresas e profissionais de saúde. Atendimento ágil e online para todo o Brasil. CRC-MA 016792/O-2.",
    url: "https://contactconsultoria.com.br",
    siteName: "Contact Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/foto-maria-clara-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Maria Clara Henrique - Contact Consultoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Clara Henrique | Contadora em São Luís-MA",
    description:
      "Contabilidade especializada para MEIs, empresas e profissionais de saúde. Atendimento ágil e online para todo o Brasil. CRC-MA 016792/O-2.",
    images: ["/foto-maria-clara-v2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Contact Consultoria - Maria Clara Henrique",
    "image": "https://contactconsultoria.com.br/foto-maria-clara-v2.jpg",
    "@id": "https://contactconsultoria.com.br",
    "url": "https://contactconsultoria.com.br",
    "telephone": "+5598984784490",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "São Luís",
      "addressLocality": "São Luís",
      "addressRegion": "MA",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -2.53073,
      "longitude": -44.3068
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/contacttconsultoria"
    ]
  };

  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
