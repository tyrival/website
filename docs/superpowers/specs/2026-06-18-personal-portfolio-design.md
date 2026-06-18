# Personal Portfolio Website Design Spec

**Date:** 2026-06-18
**Status:** Final

## 1. Overview

Single-page personal portfolio website for Tyrival Chow. Showcases technical skills (Java, Frontend, Swift) and three core products (Vision, Viabar, CommuKit). Deployed as a pure static site in the current directory.

## 2. Visual Identity

- **Style:** Minimalist, Tech-First, Dark-Only
- **Theme:** Catppuccin Mocha + Nord fusion
  - Background: `#111116`
  - Card/Surface: `#1e1e2e`
  - Text Primary: `#cdd6f4`
  - Text Secondary: `#a6adc8`
  - Accent Blue: `#89b4fa`
  - Accent Green: `#94e2d5`
- **Typography:**
  - English: JetBrains Mono (monospace, for technical purity)
  - Chinese: PingFang SC / system-ui (sans-serif)
- **No emojis, no decorative elements, no progress bars**

## 3. Layout (Single Page, Bento Grid)

```
 ┌─────────────────────────────────────┐
 │  Pseudo Terminal (cat intro.md)    │  ← 100px, optional
 ├─────────────────────────────────────┤
 │  Hero: Name + Title + Bio          │
 │  Skills: Tag grid                  │
 ├─────────────────────────────────────┤
 │  Products: 3 Bento Cards           │
 │  ┌──────────┐ ┌──────────┐        │
 │  │  Vision  │ │  Viabar  │        │
 │  └──────────┘ └──────────┘        │
 │  ┌──────────────────────┐         │
 │  │      CommuKit        │         │
 │  └──────────────────────┘         │
 ├─────────────────────────────────────┤
 │  Footer: GitHub / Social links     │
 └─────────────────────────────────────┘
```

## 4. Content Spec

### 4.1 Hero
- H1: "Hi, I'm Tyrival Chow."
- H2: "Full-Stack Engineer / System Architect"
- Bio: "专注于高并发底层通信、Apple 生态跨端应用以及高效数字化平台的纯技术派开发者。"

### 4.2 Skills Grid (Tags only, no progress bars)
- Backend: Java / Spring Boot / Netty
- Frontend: Vue.js / TypeScript / Tailwind CSS
- Apple Ecosystem: macOS & iOS / SwiftUI

### 4.3 Products

**Vision**
- Positioning: 低代码公式/表达式配置与能源数据计量平台
- Tags: Vue.js, Data Flow, Enterprise
- Links: [试用网站] → https://www.tyrival.com/vision/index.html#/design, [在线文档] → https://www.tyrival.com/books/vision-guide/

**Viabar**
- Positioning: 面向轻量化敏捷开发的高效项目里程碑管理系统
- Tags: Project Management, Productivity, Milestone
- Links: [产品官网] → https://viabar.tyrival.com/

**CommuKit**
- Positioning: 面向工业与物联网协议的高效全能通信调试套件
- Tags: macOS/iOS, SwiftUI, IoT Protocol
- Links: [产品官网] → https://commukit.tyrival.com/

### 4.4 Footer
- GitHub link
- Minimal social/platform links

## 5. Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS with custom theme config
- **Content:** Astro Content Collections (.md/.json files)
- **Deployment:** Vercel / Cloudflare Pages via Git push CI/CD

## 6. UI Details

- Terminal welcome bar at top (~100px): `tyrival@macbook ~ ❯ cat intro.md` followed by fade-in of bio text
- External link arrows (↗): on hover, text turns mint green `#94e2d5`, arrow shifts 2px up-right with `transition: transform 0.2s`
- Cards have subtle border (`#1e1e2e`), no shadows, no glassmorphism
- All text, no icons except the ↗ arrow for external links

## 7. Project Structure

```
/
├── index.astro              # Entry page
├── src/
│   ├── components/
│   │   ├── Terminal.astro
│   │   ├── Hero.astro
│   │   ├── SkillsGrid.astro
│   │   ├── ProductCard.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── products.json     # Product data
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── styles/
│       └── global.css
├── public/
│   └── favicon.ico
├── tailwind.config.js
├── astro.config.mjs
└── package.json
```

## 8. Constraints

- No nested subdirectory for the website itself; all files at repo root level
- Pure static output, zero JavaScript at runtime (except optional terminal animation)
- Single page, no routing
- Dark mode only
