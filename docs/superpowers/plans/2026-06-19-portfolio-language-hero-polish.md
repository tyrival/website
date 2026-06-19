# Portfolio Language And Hero Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve hero readability and spacing, replace the theme symbol with explicit sun/moon glyphs, and expand the portfolio from two to seven persisted languages.

**Architecture:** Extend the existing `LocalizedText` shape from fixed `zh/en` fields to a seven-key locale record while preserving server-rendered Chinese defaults. The header owns the language menu markup, the layout script owns selection/closing/persistence behavior, and CSS owns the Manrope hero typography and compact menu presentation.

**Tech Stack:** Astro 5, TypeScript content data, vanilla browser JavaScript, CSS, shell static contracts

---

### Task 1: Extend The Failing Static Contract

**Files:**
- Modify: `scripts/tests/test_portfolio_redesign_static.sh`

- [ ] Add checks for `fr`, `es`, `de`, `ja`, and `ko` locale keys; `data-language-menu`; `aria-expanded`; `Manrope`; `&nbsp;`; and the `☀`/`☾` glyphs.
- [ ] Add a negative check for the old binary expression `root.dataset.language === 'zh' ? 'en' : 'zh'`.
- [ ] Run `bash scripts/tests/test_portfolio_redesign_static.sh` and verify it fails on the first missing new contract.

### Task 2: Implement Seven-Language Content And Menu Behavior

**Files:**
- Modify: `src/content/portfolio.ts`
- Modify: `src/components/SiteHeader.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/ProductShowcase.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] Replace `LocalizedText` with a `Locale` union and `Record<Locale, string>` so every localized value requires all seven languages:

```ts
export const locales = ['zh', 'en', 'fr', 'es', 'de', 'ja', 'ko'] as const;
export type Locale = typeof locales[number];
export type LocalizedText = Record<Locale, string>;
```

- [ ] Translate navigation, product descriptions, product links, footer copy, control labels, and hero scroll copy for all seven locales.
- [ ] Render `data-i18n-{locale}` attributes for each localized node and render a language-menu button for every locale.
- [ ] Update the layout script to validate stored/browser locales, select a requested locale, set the corresponding BCP 47 document language, update active menu state and accessible labels, close on outside click/Escape, and persist the selection.

### Task 3: Polish Hero Typography And Theme Control

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/components/SiteHeader.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`

- [ ] Load Manrope weights 500/600/700 beside JetBrains Mono in `BaseLayout.astro`.
- [ ] Insert `&nbsp;` between `</del>` and `product`, then set Hero to Manrope 600 with clearer letter spacing.
- [ ] Render `☾` for the switch-to-dark action and `☀` for switch-to-light, with CSS driven by `data-theme`.
- [ ] Style the language menu for desktop and mobile, including open state, active item, focus, and reduced motion.
- [ ] Run `bash scripts/tests/test_portfolio_redesign_static.sh`, `git diff --check`, and the package JSON parse check. Do not compile.
- [ ] Commit only the files in this plan with `git commit -m "feat: expand portfolio languages and polish hero"`.

