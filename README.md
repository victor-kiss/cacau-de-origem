#🍫 Cacau de Origem

<div align="center">
  


<img src="./public/project_thumb1.PNG" alt="Banner do Projeto Cacau de Origem" width="100%" max-width="800px">

**Uma jornada digital interativa e elegante explorando a essência do cacau, do plantio ao paladar.**

[![Acessar Aplicação](https://img.shields.io/badge/Acessar_Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://cacau-de-origem.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-UI-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 📖 Visão Arquitetural e Conceito

O **Cacau de Origem** é uma aplicação web de alto desempenho focada em UI/UX e storytelling visual. O objetivo arquitetural do projeto é fornecer uma interface fluida, escalável e de fácil manutenção, utilizando os padrões mais recentes do ecossistema React. A aplicação educa e encanta o usuário através de micro-interações imersivas, como ondas de chocolate animadas e sliders de produtos, aliados a uma tipografia refinada e design minimalista.

Foi desenhado não apenas como uma landing page de produto, mas como uma prova de conceito de estruturação front-end limpa, separando estritamente a camada de dados da camada de apresentação (View).

## 🚀 Tecnologias e Paradigmas

A stack foi escolhida visando máxima performance na entrega de assets, tipagem estática rigorosa e desenvolvimento ágil de interfaces estilizadas:

- **[Next.js (App Router)](https://nextjs.org/):** Framework principal operando com Server Components nativos para SEO e renderização otimizada.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática rigorosa para mitigação de erros em tempo de desenvolvimento e criação de interfaces robustas de dados.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS para padronização de design tokens e criação de interfaces responsivas complexas com baixo overhead no bundle final.
- **[Framer Motion / Animações](https://www.framer.com/motion/):** Motor declarativo responsável pelas transições suaves, sliders interativos e efeitos visuais orgânicos na interface.

## ⚡ Engenharia de Performance e UX

Construir uma experiência rica em imagens e animações orgânicas exige cuidado extra com a performance e o Core Web Vitals (LCP, CLS, FID). 

1. **Separação de Preocupações (SoC):** Componentização altamente granular. Efeitos complexos como o `ChocolateWave` e o `ProductSlide` são isolados em seus próprios escopos para não comprometerem a renderização do restante da página.
2. **Padrão "White-Label" Dinâmico (CMS Headless):** O projeto injeta todos os dados e copies a partir de arquivos TS centralizados (`data/products.ts` e `data/texts.ts`). Isso permite que toda a plataforma seja facilmente re-contextualizada e atualizada sem a necessidade de alterar a lógica dos componentes React.
3. **Estilização Global Otimizada:** O uso estratégico do `globals.css` integrado ao Tailwind garante que apenas as classes efetivamente utilizadas sejam injetadas na build de produção.

## 🧩 Estrutura do Projeto

A base de código segue uma arquitetura modular orientada a componentes visuais e separação de dados:

```text
📦 cacau-de-origem
├── 📂 app/
│   ├── 📂 components/            # Componentes isolados e reutilizáveis
│   │   ├── 📂 cacau-section/     # Renderização das informações sobre o cacau
│   │   │   └── 📜 CacauSection.tsx
│   │   ├── 📂 chocolate_wave/    # Componente visual interativo (Onda de Chocolate)
│   │   │   └── 📜 ChocolateWave.tsx
│   │   ├── 📂 footer/            # Rodapé global
│   │   │   └── 📜 Footer.tsx
│   │   ├── 📂 navbar/            # Navegação principal do site
│   │   │   └── 📜 Navbar.tsx
│   │   └── 📂 product_slide/     # Carrossel interativo de produtos
│   │   │   └── 📜 ProductSlide.tsx
│   ├── 📂 data/                  # Camada de abstração de dados estáticos
│   │   ├── 📜 products.ts        # Tipagem e mock de dados do catálogo
│   │   └── 📜 texts.ts           # Centralização de copies e textos do site
│   ├── 📜 globals.css            # Estilos globais e diretivas do Tailwind
│   ├── 📜 layout.tsx             # Root layout, metadados (SEO) e fontes
│   └── 📜 page.tsx               # Entry point principal da Landing Page
````

## ⚙️ Instalação e Execução Local

### Pré-requisitos

  - [Node.js](https://nodejs.org/) (v18.17.0 ou superior)
  - Gerenciador de pacotes (`npm`, `yarn`, `pnpm` ou `bun`)

### Setup Local

1.  Clone o repositório:

<!-- end list -->

```bash
git clone [https://github.com/victor-kiss/cacau-de-origem.git](https://github.com/victor-kiss/cacau-de-origem.git)
cd cacau-de-origem
```

2.  Instale as dependências:

<!-- end list -->

```bash
npm install
```

3.  Inicie o servidor em modo de desenvolvimento:

<!-- end list -->

```bash
npm run dev
```

O projeto estará escutando em: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

## 🌐 Deploy

O projeto é otimizado de ponta a ponta para deploy em ambientes Serverless / Edge Computing. A infraestrutura recomendada é a Vercel:

```bash
npm run build
vercel --prod
```

## 👨‍💻 Autor e Créditos

Arquitetado e desenvolvido por **Victor Kiss**.

[](https://www.google.com/search?q=https://www.linkedin.com/in/victor-kiss/)
[](https://www.google.com/search?q=https://github.com/victor-kiss)

 *"Cada fruto conta uma história, e cada história merece ser compartilhada na sua melhor performance."*

 **💖 Feito com muita criatividade e código limpo.**
