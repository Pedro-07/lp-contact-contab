# Histórico de Alterações (Memory Log) — LP Contact Consultoria

Este arquivo registra todas as modificações, decisões de design, correções responsivas e atualizações de dados realizadas no projeto para futura referência de desenvolvimento.

---

## 1. Identidade Visual e Tipografia
- **Substituição de Fonte**: Trocamos a fonte editorial serifada `Playfair Display` pela moderna sans-serif geométrica **Plus Jakarta Sans** (`Plus_Jakarta_Sans` do Google Fonts) no cabeçalho e nos títulos (`--font-display`).
- **Motivação**: Eliminar a dissonância visual entre a logo (sans-serif geométrica bold) e os títulos do site, integrando a marca sob uma estética de consultoria corporativa de ponta.

## 2. Ecossistema Visual do Escudo (`ContactLogoAnimated.tsx`)
- **Filtro de Símbolo**: Editamos os caminhos SVG do logo para manter exclusivamente o escudo da marca na Hero, removendo o texto redundante "CONTACT / Consultoria Empresarial".
- **Profundidade (Multi-Layer)**: Construímos um ecossistema com 6 camadas para a logo em telas grandes:
  1. *Glow Radial (z-0)*: Brilho dourado pulsante e sutil.
  2. *Radial Grid (z-5)*: Malha circular discreta de radar/órbita (4% de opacidade).
  3. *Light Rays (z-5)*: Feixes de luz com rotações lentas em sentidos opostos (40s e 50s).
  4. *Network Particles (z-10)*: Arranjo de 12 nós flutuando organicamente com conexões metálicas ultra-finas.
  5. *Orbital System (z-20)*: Duas órbitas elípticas cruzadas e inclinadas rodando em sentidos inversos.
  6. *Logo Forefront (z-30)*: O escudo flutuando no eixo Y e rotacionando levemente no eixo Y no scroll.
- **Responsividade e Performance**:
  - Desativados parallax vertical e rotação 3D abaixo de `768px` (mobile).
  - Integrado suporte ao `prefers-reduced-motion` para desativar todas as animações caso configurado no SO do usuário.
  - Implementada proteção de hidratação React 19 (`mounted` state) para prevenir quebras e incompatibilidades de SSR com Framer Motion.

## 3. Seção Hero (`Hero.tsx`)
- **Ajustes de Layout**: Aumentamos o recuo da coluna esquerda para `pl-6 md:pl-16 lg:pl-24` para melhor respiro visual.
- **Destaque do Badge**: Aumentamos o contraste do badge CRC (`bg-white/5 border border-white/40 text-white/90`).
- **Ocultação em Mobile**: Removemos a coluna da direita (escudo animado) do fluxo em telas menores (`hidden md:flex`).
- **Eliminação de Vazio**: Alteramos a altura mínima de `min-h-[100dvh]` para `min-h-0` no mobile, reduzindo a sobra vertical abaixo da dobra.

## 4. Estrutura e Preços dos Planos (`Plans.tsx`)
- **Plano Start**: Atualizado para exibir os dois valores de início:
  - **MEI**: a partir de R$ 199,99/mês
  - **Microempresa**: a partir de R$ 319,99/mês
  - Exibidos em formato de tabela tracejada elegante e limpa com o rótulo "a partir de" explícito.
- **Plano Plus**: Preço fixado em "A partir de R$ 499,99/mês" (featured/destacado).
- **Plano Prime**: Preço fixado em "A partir de R$ 799,99/mês".
- **Respiro Mobile**: Aumentamos o padding inferior no mobile para `pb-32` para evitar conflito com o botão flutuante.

## 5. Atualização dos Canais de Contato
- **Novo WhatsApp**: Substituímos o antigo número de WhatsApp por: **+55 98 98478-4490** (formatado nos links como `5598984784490`).
- **Arquivos Modificados**:
  - `src/components/Navbar.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Plans.tsx`
  - `src/components/CtaFinal.tsx`
  - `src/components/Footer.tsx`
  - `src/components/WhatsAppFab.tsx`
  - `notas.md`

## 6. Otimizações de Acessibilidade e Toque (Mobile/UX)
- **Menu Mobile (`Navbar.tsx`)**:
  - Trocamos o fundo transparente/misto por um fundo sólido escuro `bg-brand-footer` (`#1C1F26`) cobrindo o cabeçalho.
  - Adicionado suporte a `overflow-y-auto` (para telas curtas) e bloqueio de rolagem da página no body (`document.body.style.overflow = "hidden"`).
  - Trocados links de texto simples por botões com chevrons interativos de alta legibilidade.
  - Expandido o botão toggle hambúrguer para `w-11 h-11` (44x44px de área de toque).
- **Contadores de Números (`Numbers.tsx`)**:
  - Configurado para inicializar a animação a partir de 0 apenas ao atingir `amount: 0.3` (30% visível na tela) com Intersection Observer.
- **Grid de Segmentos (`Niches.tsx`)**:
  - Configurado com `min-w-[140px] md:min-w-0`, `whitespace-normal` e `style={{ textOverflow: 'unset' }}` eliminando o truncamento de texto de especialidades no mobile.
- **WhatsApp FAB e Spacing**:
  - Movido o FAB do WhatsApp para `bottom-4 right-4 z-[999]`.
  - Aumentado o padding inferior de `CtaFinal.tsx` para `pb-36` para criar uma zona de respiro e evitar sobreposição com botões.
- **Instagram Link (`About.tsx`)**:
  - Link simples reestilizado para botão outlined completo (`min-h-[46px]` e largura cheia no mobile).
- **Depoimentos (`Testimonials.tsx`)**:
  - Oculta a seção inteira no mobile caso a quantidade de itens seja menor que 3.
  - Adicionado carrossel móvel com scroll-snap horizontal nativo (`flex overflow-x-auto snap-x snap-mandatory gap-6`).
  - Desenvolvido ouvinte de rolagem para atualizar a paginação de dots reativamente e ampliada a área de clique invisível dos dots para `44x44px`.
- **Ticker de Logos Removido**:
  - Excluído o componente `<ClientLogos />` da página principal (`src/app/page.tsx`) para eliminar marcas genéricas incompatíveis com a credibilidade do negócio.
- **Substituição de Favicon**:
  - Excluído `src/app/favicon.ico` (Next.js/Vercel) e copiado o logotipo da cliente como `src/app/icon.png` para autodetecção do navegador.

---

*Log gerado e verificado através do build de produção bem-sucedido.*
