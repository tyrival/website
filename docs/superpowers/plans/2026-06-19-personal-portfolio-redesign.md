# Personal Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the single-page Astro portfolio as a bilingual light/dark product showcase with code-rendered Viabar, CommuKit, and Vision application previews.

**Architecture:** Astro renders all content and application previews as semantic HTML. A single data module owns Chinese and English copy, while a small inline browser script applies persisted language and theme state without adding a client framework. Each product preview is a focused Astro component with scoped CSS, and one shell contract script verifies the required source behavior without compiling the site.

**Tech Stack:** Astro 5, Tailwind CSS 3, TypeScript content data, vanilla browser JavaScript, shell static contract tests

---

## File Structure

- Create `scripts/tests/test_portfolio_redesign_static.sh`: executable static contract covering copy, localization, theme, product previews, responsive hooks, and Astro toolbar removal.
- Create `src/content/portfolio.ts`: typed bilingual navigation and product content.
- Create `src/components/SiteHeader.astro`: identity, anchor navigation, language switch, and theme switch.
- Modify `src/components/Hero.astro`: the approved quote with semantic strike-through.
- Create `src/components/ProductShowcase.astro`: shared product chapter wrapper and localized copy.
- Create `src/components/previews/ViabarPreview.astro`: HTML/CSS port of the Viabar homepage `AppMockup`.
- Create `src/components/previews/CommuKitPreview.astro`: HTML/CSS port of the CommuKit homepage hero mockup.
- Create `src/components/previews/VisionPreview.astro`: code-rendered Vision visual editor.
- Modify `src/components/Footer.astro`: localized minimal footer.
- Modify `src/layouts/BaseLayout.astro`: pre-paint state initialization, metadata, and runtime language/theme controller.
- Modify `src/pages/index.astro`: assemble the new page and remove terminal/skills/card layout.
- Modify `src/styles/global.css`: theme tokens, editorial layout, focus states, and responsive behavior.
- Modify `astro.config.mjs`: disable the Astro development toolbar.

### Task 1: Establish Failing Static Contracts

**Files:**
- Create: `scripts/tests/test_portfolio_redesign_static.sh`

- [ ] **Step 1: Write the static contract**

Create an executable shell script that uses `rg` and exits non-zero unless all of these contracts hold:

```bash
#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$root"

require() { rg -q "$1" "$2" || { echo "missing: $1 in $2"; exit 1; }; }
forbid() { ! rg -q "$1" "$2" || { echo "forbidden: $1 in $2"; exit 1; }; }

require 'devToolbar:[[:space:]]*{[[:space:]]*enabled:[[:space:]]*false' astro.config.mjs
require 'Talking is cheap' src/components/Hero.astro
require '<del[^>]*>code</del>' src/components/Hero.astro
forbid '专注于高并发底层通信' src
forbid '低代码公式/表达式配置与能源数据计量平台' src

for preview in ViabarPreview CommuKitPreview VisionPreview; do
  require "$preview" src/pages/index.astro
  test -f "src/components/previews/${preview}.astro"
done

require '所见即所得的数据可视化驾驶舱平台' src/content/portfolio.ts
require 'A WYSIWYG data visualization cockpit platform' src/content/portfolio.ts
require 'data-i18n' src
require 'localStorage' src/layouts/BaseLayout.astro
require 'prefers-color-scheme' src/layouts/BaseLayout.astro
require 'data-language-toggle' src/components/SiteHeader.astro
require 'data-theme-toggle' src/components/SiteHeader.astro
require '@media.*max-width' src/styles/global.css

echo "portfolio redesign static contracts passed"
```

- [ ] **Step 2: Run the contract and verify RED**

Run: `bash scripts/tests/test_portfolio_redesign_static.sh`

Expected: failure at the first missing redesign contract because implementation files do not exist yet.

- [ ] **Step 3: Commit the failing contract**

```bash
git add -- scripts/tests/test_portfolio_redesign_static.sh
git commit -m "test: add portfolio redesign contracts"
```

### Task 2: Add Bilingual Content And Persistent Page State

**Files:**
- Create: `src/content/portfolio.ts`
- Create: `src/components/SiteHeader.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/components/Hero.astro`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Define one typed bilingual content source**

Export `portfolioContent` with matching `zh` and `en` fields for navigation, product descriptions, tags, links, footer copy, and accessible control labels. Product entries use stable IDs `viabar`, `commukit`, and `vision`, including:

```ts
vision: {
  zh: '所见即所得的数据可视化驾驶舱平台',
  en: 'A WYSIWYG data visualization cockpit platform.',
}
```

Render both language values into `data-i18n-zh` and `data-i18n-en` attributes so switching never requires a network request.

- [ ] **Step 2: Implement header controls and approved hero**

Use real buttons with `data-language-toggle` and `data-theme-toggle`, visible labels, `aria-label`, `aria-pressed`, and focus styles. Render the quote as:

```astro
<h1>Talking is cheap,<br />show me the <del>code</del> <span>product</span>.</h1>
```

Do not render a secondary bio line.

- [ ] **Step 3: Implement pre-paint and interactive state**

In the document head, synchronously choose `data-theme` from `localStorage` or `prefers-color-scheme`, and choose the language from `localStorage` or `navigator.language`. At the end of body, attach click handlers that update text nodes, `document.documentElement.lang`, button labels, `aria-pressed`, and persisted values. Listen for system theme changes only when no explicit theme is stored.

- [ ] **Step 4: Disable the Astro development toolbar**

Set:

```js
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tailwind()],
});
```

- [ ] **Step 5: Run the contract and observe the next expected failure**

Run: `bash scripts/tests/test_portfolio_redesign_static.sh`

Expected: language/theme/hero checks pass; failure moves to missing preview integration.

- [ ] **Step 6: Commit state and content work**

```bash
git add -- astro.config.mjs src/content/portfolio.ts src/components/SiteHeader.astro src/components/Hero.astro src/layouts/BaseLayout.astro
git commit -m "feat: add bilingual portfolio shell"
```

### Task 3: Port The Viabar And CommuKit App Interfaces

**Files:**
- Create: `src/components/previews/ViabarPreview.astro`
- Create: `src/components/previews/CommuKitPreview.astro`

- [ ] **Step 1: Port Viabar's homepage mockup**

Translate the React/Tailwind structure from `/Users/tyrival/workspace/Viabar-Releases/src/components/AppMockup.tsx` into static Astro markup. Preserve the three visual regions: overview/archive sidebar, project milestone cards with progress and reminder details, and report panel. Use CSS circles and text glyphs only for ordinary UI status indicators; do not add image assets or SVG illustration art.

- [ ] **Step 2: Port CommuKit's hero mockup**

Translate `HeroMockup` from `/Users/tyrival/workspace/CommuKit-Release/src/components/AppMockup.tsx`. Preserve the macOS titlebar, connections/tool sidebar, Modbus session status, TX/RX hex messages, parsed register output, and message input. Replace Lucide icons with concise text labels or CSS status marks so no dependency is added.

- [ ] **Step 3: Add preview-specific responsive behavior**

Keep both app canvases at desktop proportions inside an overflow container. At tablet width, hide the least important right-side Viabar report detail and reduce CommuKit sidebar width. At phone width, retain titlebar, active navigation identity, and main content without shrinking text below 10px.

- [ ] **Step 4: Run focused source checks**

Run:

```bash
rg -n "Overview|All Projects|Report|Connections|Modbus Device|TX|RX|Parser" src/components/previews/{ViabarPreview,CommuKitPreview}.astro
```

Expected: each product's distinctive source concepts are present.

- [ ] **Step 5: Commit both ports**

```bash
git add -- src/components/previews/ViabarPreview.astro src/components/previews/CommuKitPreview.astro
git commit -m "feat: port product app previews"
```

### Task 4: Build The Vision WYSIWYG Editor Preview

**Files:**
- Create: `src/components/previews/VisionPreview.astro`

- [ ] **Step 1: Recreate the editor regions from source**

Use `vision-web/src/views/Design.vue`, `components/screen/Menu.vue`, `components/screen/Layer.vue`, and the design SCSS as the reference. Build a titlebar, component palette, layer tree, central grid canvas, and property inspector.

- [ ] **Step 2: Build realistic dashboard content with CSS and HTML**

The canvas contains KPI values, a bar chart made from semantic list items, a trend line represented by positioned points and borders, and a status table. The editor chrome must visually dominate so the preview reads as a WYSIWYG design tool, not as the finished dashboard alone.

- [ ] **Step 3: Add narrow-screen containment**

At tablet width, reduce the property inspector. At phone width, keep the palette, canvas, and a condensed inspector visible inside a horizontally scrollable preview rather than stacking editor panels into an unrealistic layout.

- [ ] **Step 4: Verify the corrected positioning**

Run:

```bash
rg -n "所见即所得的数据可视化驾驶舱平台|A WYSIWYG data visualization cockpit platform" src
! rg -n "低代码公式/表达式配置与能源数据计量平台" src
```

Expected: the new Chinese and English positioning is present; the old positioning is absent.

- [ ] **Step 5: Commit Vision preview**

```bash
git add -- src/components/previews/VisionPreview.astro
git commit -m "feat: add coded Vision editor preview"
```

### Task 5: Assemble And Style The Product Journal

**Files:**
- Create: `src/components/ProductShowcase.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add the shared product chapter**

`ProductShowcase.astro` receives stable ID, index, title, localized description, tags, and links, and exposes one preview slot. Copy is above the preview on all breakpoints.

- [ ] **Step 2: Replace the old page composition**

Remove `Terminal`, `SkillsGrid`, and `ProductCard` from `index.astro`. Assemble `SiteHeader`, `Hero`, three `ProductShowcase` chapters with their preview components, and `Footer`.

- [ ] **Step 3: Implement the global visual system**

Define CSS custom properties for page, text, muted text, hairline, surface, blue accent, and control states under light and dark themes. Add the editorial max-width, spacious section rhythm, sticky translucent header, product dividers, application-window framing, focus-visible rings, and reduced-motion override.

- [ ] **Step 4: Make footer content localized and minimal**

Keep copyright and GitHub only. Do not add any fixed or floating bottom action surface.

- [ ] **Step 5: Run GREEN static contracts**

Run: `bash scripts/tests/test_portfolio_redesign_static.sh`

Expected: `portfolio redesign static contracts passed` and exit code 0.

- [ ] **Step 6: Run non-compiling final checks**

Run:

```bash
git diff --check
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))"
rg -n "Astro|dev-toolbar|低代码公式|专注于高并发" src astro.config.mjs
```

Expected: no whitespace errors; package JSON parses; the final search has no forbidden visible copy or toolbar references beyond the intentional `devToolbar: { enabled: false }` configuration.

- [ ] **Step 7: Commit assembled redesign**

```bash
git add -- src/pages/index.astro src/components/ProductShowcase.astro src/components/Footer.astro src/styles/global.css
git commit -m "feat: redesign personal product portfolio"
```
