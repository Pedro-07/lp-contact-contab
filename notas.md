# Notas do Projeto — LP Maria Clara Henrique

## Identidade da cliente
- **Nome:** Maria Clara da Silva Henrique
- **Empresa:** Contact Consultoria
- **CRC:** CRC-MA 016792/O-2
- **WhatsApp:** +55 98 98478-4490
- **E-mail:** contactconsultoriaempresarial@gmail.com
- **Instagram:** @contacttconsultoria ← (dois "t" é o handle real, não é typo)
- **Foto:** `/public/foto-maria-clara-v2.jpg` — fundo bege-claro, portrait

---

## Stack

| Pacote | Versão |
|---|---|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| Tailwind CSS | v4 (CSS-first, sem tailwind.config.js) |
| Framer Motion | 12.38.0 |
| @phosphor-icons/react | 2.x |

---

## Estrutura de arquivos

```
src/
  app/
    globals.css       ← tokens de cor, keyframes CSS do Hero, fontes
    layout.tsx        ← Playfair Display + DM Sans via next/font/google
    page.tsx          ← ordem das seções
  components/
    Navbar.tsx
    Hero.tsx          ← Server Component (sem 'use client')
    Numbers.tsx
    ClientLogos.tsx   ← ticker de logos demo
    Services.tsx
    Niches.tsx
    About.tsx
    Testimonials.tsx
    CtaFinal.tsx
    Footer.tsx
    WhatsAppFab.tsx
scripts/
  normalize-logos.js  ← normaliza logos locais para h=56px com sharp
public/
  foto-maria-clara.jpg
  logos/              ← (a criar) logos locais dos clientes
    originais/        ← colocar aqui antes de rodar o script
```

---

## Cores (definidas em globals.css via `@theme {}`)

| Token | Hex |
|---|---|
| `brand-bg` | `#F4F5F7` |
| `brand-surface` | `#ffffff` |
| `brand-text` | `#1C1F26` |
| `brand-muted` | `#6B7280` |
| `brand-dark` | `#2C3140` |
| `brand-accent` | `#3B5BDB` |
| `brand-accent-hover` | `#2F4AC0` |
| `brand-border` | `#E2E6ED` |
| `brand-footer` | `#1C1F26` |

Cor âmbar usada nos badges de credencial (CRC): `amber-400 / amber-500` do Tailwind.

---

## Decisões técnicas importantes

### Framer Motion + SSR
`initial={{ opacity: 0 }}` com `whileInView` causa página em branco: o estado
`opacity:0` é renderizado no servidor e o conteúdo some até o JS hidratar.

**Regra:** nunca usar `opacity` no `initial` de `whileInView`. Usar apenas transforms:
```tsx
// ✓ correto
initial={{ y: 20 }} whileInView={{ y: 0 }}

// ✗ nunca fazer
initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
```

Hero é Server Component e usa `@keyframes` CSS puro (`animate-hero-up`, `animate-hero-right`, `animate-hero-scale`) definidos em `globals.css` — sem dependência de JS.

### Tailwind v4
- Sem `tailwind.config.js` — configuração via `@theme {}` em `globals.css`
- Fontes via `@theme inline { --font-display: var(--font-playfair); }`
- Opacity modifier `/8`, `/10` etc. funciona normalmente

### Next.js Image
- Hero foto: `priority` + `loading="eager"` (LCP)
- `sizes` correto em cada uso para evitar warning de performance
- Imagens externas (logos demo) usam `<img>` normal — evita configurar `remotePatterns`

---

## Seções e ordem

1. **Navbar** — sticky, glassmorphism ao rolar (`bg-brand-dark/80 backdrop-blur-xl`), transparente no topo mas com `bg-brand-dark` para não vazar o body claro
2. **Hero** — split 55/45, foto full-bleed coluna direita, barra âmbar 4px no H1, badge CRC amber, "100+" abaixo dos botões
3. **Numbers** — 3 stats: `100+`, `12`, `Online`; dividers com gradiente
4. **ClientLogos** — ticker infinito Framer Motion, logos via Simple Icons CDN
5. **Services** — 6 visíveis por padrão, expansível para 12; badge "Mais procurado" dentro do card
6. **Niches** — 6 pills, 2 primários (accent), fundo com dot pattern CSS
7. **About** — foto com moldura decorativa offset, blockquote editorial, badge CRC com escudo
8. **Testimonials** — aspas decorativas 120px, avatar com borda, prova social agregada
9. **CtaFinal** — gradiente diagonal azul, botão WA grande, link e-mail em pill outline
10. **Footer** — logo dois andares (igual Navbar), linha gradiente no topo
11. **WhatsAppFab** — aparece após 300px de scroll

---

## Logos demo (ClientLogos)

Usando Simple Icons CDN: `https://cdn.simpleicons.org/{slug}/{hex}`

| Logo | Slug | Cor |
|---|---|---|
| iFood | `ifood` | `EA1D2C` |
| Nubank | `nubank` | `820AD1` |
| Shopify | `shopify` | `96BF48` |
| Uber | `uber` | `000000` |
| Instagram | `instagram` | `E4405F` |
| YouTube | `youtube` | `FF0000` |
| Google | `google` | `4285F4` |

**Para substituir por logos reais:**
1. Colocar arquivos em `public/logos/originais/`
2. Rodar `npm install sharp && node scripts/normalize-logos.js`
3. Trocar `src` no array `logos` de `ClientLogos.tsx` para `/logos/nome.png`

---

## Foto da Maria Clara

- Formato ideal: **720 × 960px**, proporção 3:4, portrait
- Face e ombros nos top 55–60% da imagem (ambos os frames usam `object-top`)
- Fundo branco de estúdio → overlay gradiente no topo da coluna Hero (`rgba(30,35,48,0.55)`) para fundir com o painel escuro

---

## Pendências / ideias futuras

- [ ] Favicon personalizado
- [ ] Open Graph / meta tags para preview no WhatsApp
- [ ] Substituir logos demo por logos reais dos clientes
- [ ] Trocar e-mail Gmail por domínio próprio (decisão da cliente)
- [ ] Scrollbar oculta via CSS global
- [ ] WhatsApp FAB — revisar z-index em mobile
