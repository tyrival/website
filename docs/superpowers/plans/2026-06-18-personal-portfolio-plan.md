# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark-only, minimalist single-page portfolio site showcasing Tyrival Chow's skills and 3 products.

**Architecture:** Astro SSG with Tailwind CSS. Content lives in JSON, components are `.astro` files. Pure static output — a single `index.html` with zero runtime JS except a tiny terminal animation script.

**Tech Stack:** Astro 5, Tailwind CSS 4, @astrojs/tailwind

---

### Task 1: Initialize Astro Project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`
- Modify: `README.md`

- [ ] **Step 1: Initialize Astro with npm**

```bash
cd /Users/tyrival/workspace/tyrival-website
npm create astro@latest -- --template minimal --skip-houston --install .
```

Expected: Creates `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/` directory.

- [ ] **Step 2: Install Tailwind + Astro Tailwind integration**

```bash
cd /Users/tyrival/workspace/tyrival-website
npx astro add tailwind --yes
```

Expected: Installs `@astrojs/tailwind` and `tailwindcss`, creates `tailwind.config.mjs`.

- [ ] **Step 3: Verify project structure**

```bash
ls /Users/tyrival/workspace/tyrival-website/
```

Expected: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `src/`, `public/`

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tailwind.config.mjs tsconfig.json src/ public/
git commit -m "chore: init Astro + Tailwind project"
```

---

### Task 2: Configure Tailwind Custom Theme

**Files:**
- Modify: `tailwind.config.mjs`
- Create: `src/styles/global.css`

- [ ] **Step 1: Write Tailwind config with custom colors**

```js
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#111116',
        surface: '#1e1e2e',
        primary: '#cdd6f4',
        secondary: '#a6adc8',
        accent: '#89b4fa',
        mint: '#94e2d5',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
        sans: ['PingFang SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Write global CSS**

```css
/* src/styles/global.css */
@import "tailwindcss";

@layer base {
  body {
    @apply bg-bg text-primary font-sans antialiased;
  }
}
```

- [ ] **Step 3: Verify CSS compiles**

```bash
cd /Users/tyrival/workspace/tyrival-website
npx astro build
```

Expected: Build succeeds, `dist/` contains `index.html` with Tailwind classes compiled.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.mjs src/styles/global.css
git commit -m "style: configure Tailwind custom dark theme"
```

---

### Task 3: Create Product Content Data

**Files:**
- Create: `src/content/products.json`

- [ ] **Step 1: Write products.json**

```json
[
  {
    "name": "Vision",
    "description": "低代码公式/表达式配置与能源数据计量平台",
    "tags": ["Vue.js", "Data Flow", "Enterprise"],
    "links": [
      { "label": "试用网站", "url": "https://www.tyrival.com/vision/index.html#/design" },
      { "label": "在线文档", "url": "https://www.tyrival.com/books/vision-guide/" }
    ]
  },
  {
    "name": "Viabar",
    "description": "面向轻量化敏捷开发的高效项目里程碑管理系统",
    "tags": ["Project Management", "Productivity", "Milestone"],
    "links": [
      { "label": "产品官网", "url": "https://viabar.tyrival.com/" }
    ]
  },
  {
    "name": "CommuKit",
    "description": "面向工业与物联网协议（Modbus, DL/T 645, 698.45）的高效全能通信调试套件",
    "tags": ["macOS/iOS", "SwiftUI", "IoT Protocol"],
    "links": [
      { "label": "产品官网", "url": "https://commukit.tyrival.com/" }
    ]
  }
]
```

- [ ] **Step 2: Commit**

```bash
git add src/content/products.json
git commit -m "feat: add product content data"
```

---

### Task 4: Create BaseLayout Component

**Files:**
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Write BaseLayout.astro**

```astro
---
// src/layouts/BaseLayout.astro
import '../styles/global.css';
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Tyrival Chow - Full-Stack Engineer / System Architect. Java, Frontend, Swift." />
    <title>Tyrival Chow</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body class="min-h-screen">
    <main class="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <slot />
    </main>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout with JetBrains Mono font"
```

---

### Task 5: Create Terminal Component

**Files:**
- Create: `src/components/Terminal.astro`

- [ ] **Step 1: Write Terminal.astro**

```astro
---
// src/components/Terminal.astro
---

<div class="mb-16 font-mono text-sm text-secondary">
  <p class="mb-2">
    <span class="text-mint">tyrival@macbook</span>
    <span class="text-primary"> ~ </span>
    <span class="text-accent">❯</span>
    <span class="text-primary"> cat intro.md</span>
  </p>
  <div
    id="terminal-intro"
    class="opacity-0 transition-opacity duration-1000"
    data-intro="专注于高并发底层通信、Apple 生态跨端应用以及高效数字化平台的纯技术派开发者。"
  ></div>
</div>

<script>
  setTimeout(() => {
    const el = document.getElementById('terminal-intro');
    if (el) {
      el.textContent = el.dataset.intro || '';
      el.classList.remove('opacity-0');
    }
  }, 400);
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Terminal.astro
git commit -m "feat: add Terminal intro component"
```

---

### Task 6: Create Hero Component

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1: Write Hero.astro**

```astro
---
// src/components/Hero.astro
---

<section class="mb-20">
  <h1 class="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
    Hi, I'm <span class="text-accent">Tyrival Chow</span>.
  </h1>
  <h2 class="font-mono text-xl md:text-2xl text-secondary mb-6">
    Full-Stack Engineer / System Architect
  </h2>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero component"
```

---

### Task 7: Create SkillsGrid Component

**Files:**
- Create: `src/components/SkillsGrid.astro`

- [ ] **Step 1: Write SkillsGrid.astro**

```astro
---
// src/components/SkillsGrid.astro

const skills = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Netty'],
  },
  {
    category: 'Frontend',
    items: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Apple Ecosystem',
    items: ['macOS & iOS', 'SwiftUI'],
  },
];
---

<section class="mb-24">
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {skills.map((group) => (
      <div class="rounded-lg border border-surface bg-surface/50 p-5">
        <h3 class="font-mono text-sm font-bold text-accent mb-3">
          {group.category}
        </h3>
        <div class="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span class="inline-block rounded border border-secondary/20 px-2.5 py-1 font-mono text-xs text-secondary">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SkillsGrid.astro
git commit -m "feat: add SkillsGrid component"
```

---

### Task 8: Create ProductCard Component

**Files:**
- Create: `src/components/ProductCard.astro`

- [ ] **Step 1: Write ProductCard.astro**

```astro
---
// src/components/ProductCard.astro

interface Link {
  label: string;
  url: string;
}

interface Props {
  name: string;
  description: string;
  tags: string[];
  links: Link[];
}

const { name, description, tags, links } = Astro.props;
---

<div class="rounded-lg border border-surface bg-surface/50 p-6 transition-colors hover:border-secondary/30">
  <h3 class="font-mono text-xl font-bold text-primary mb-3">{name}</h3>
  <p class="text-secondary text-sm leading-relaxed mb-4">{description}</p>

  <div class="flex flex-wrap gap-2 mb-4">
    {tags.map((tag) => (
      <span class="inline-block rounded border border-secondary/20 px-2.5 py-1 font-mono text-xs text-secondary">
        {tag}
      </span>
    ))}
  </div>

  <div class="flex flex-wrap gap-4">
    {links.map((link) => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1 font-mono text-sm text-accent transition-colors hover:text-mint"
      >
        {link.label}
        <span class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
    ))}
  </div>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProductCard.astro
git commit -m "feat: add ProductCard component"
```

---

### Task 9: Create Footer Component

**Files:**
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Write Footer.astro**

```astro
---
// src/components/Footer.astro
---

<footer class="mt-24 border-t border-surface pt-8">
  <div class="flex flex-wrap items-center justify-between gap-4">
    <p class="font-mono text-xs text-secondary">
      &copy; {new Date().getFullYear()} Tyrival Chow
    </p>
    <div class="flex gap-6">
      <a
        href="https://github.com/tyrival"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1 font-mono text-xs text-secondary transition-colors hover:text-mint"
      >
        GitHub
        <span class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Footer component"
```

---

### Task 10: Assemble Main Page

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Write the main page**

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Terminal from '../components/Terminal.astro';
import Hero from '../components/Hero.astro';
import SkillsGrid from '../components/SkillsGrid.astro';
import ProductCard from '../components/ProductCard.astro';
import Footer from '../components/Footer.astro';
import products from '../content/products.json';
---

<BaseLayout>
  <Terminal />
  <Hero />
  <SkillsGrid />

  <section class="mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          description={product.description}
          tags={product.tags}
          links={product.links}
        />
      ))}
    </div>
  </section>

  <Footer />
</BaseLayout>
```

- [ ] **Step 2: Build and verify**

```bash
cd /Users/tyrival/workspace/tyrival-website
npx astro build
```

Expected: Build succeeds, `dist/index.html` exists and contains all content.

- [ ] **Step 3: Preview and check**

```bash
npx astro preview --port 4321 &
sleep 2
curl -s http://localhost:4321 | head -50
kill %1
```

Expected: HTML output contains "Tyrival Chow", product names, proper structure.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: assemble main page with all components"
```

---

### Task 11: Final Verification and Cleanup

**Files:**
- Modify: `astro.config.mjs`
- Create: `public/favicon.ico` (optional)

- [ ] **Step 1: Verify astro.config.mjs is correct**

```js
// astro.config.mjs (should already be set by astro add tailwind)
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});
```

- [ ] **Step 2: Run production build**

```bash
cd /Users/tyrival/workspace/tyrival-website
npx astro build
```

Expected: Clean build, zero errors.

- [ ] **Step 3: Verify no JS in output (except terminal script)**

```bash
grep -c '<script' /Users/tyrival/workspace/tyrival-website/dist/index.html
```

Expected: 1 (only the terminal intro script).

- [ ] **Step 4: Verify all content present in output**

```bash
grep -o 'Tyrival Chow\|Vision\|Viabar\|CommuKit\|Java\|Spring Boot\|Netty\|Vue.js\|SwiftUI\|GitHub' /Users/tyrival/workspace/tyrival-website/dist/index.html | sort | uniq -c
```

Expected: Each term appears at least once.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: personal portfolio website complete"
```
<｜end▁of▁thinking｜>Now let me do the self-review of the plan.

<｜｜DSML｜｜tool_calls>
<｜｜DSML｜｜invoke name="Read">
<｜｜DSML｜｜parameter name="file_path" string="true">/Users/tyrival/workspace/tyrival-website/docs/superpowers/plans/2026-06-18-personal-portfolio-plan.md