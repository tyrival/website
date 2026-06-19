# Personal Portfolio Redesign Spec

**Date:** 2026-06-19
**Status:** Approved brief

## Goal

Redesign the existing Astro single-page portfolio as a restrained, bilingual technology showcase with working light and dark themes. Product previews must be implemented as real HTML/CSS UI components, not screenshots or generated images.

## Page Structure

1. A compact top bar presents the Tyrival identity, product anchor navigation, language switch, and theme switch.
2. The hero displays `Talking is cheap, show me the code product.` with only `code` struck through. The current focus/bio sentence is removed.
3. A product showcase presents Viabar, CommuKit, and Vision as three spacious chapters. Each chapter places the localized product description and links above a large coded application preview.
4. A minimal footer keeps the GitHub link and copyright. The Astro development toolbar/floating menu is disabled.

## Visual Direction

- Minimal editorial technology style rather than a terminal-themed dashboard.
- Neutral page surfaces, precise typography, generous vertical spacing, and a restrained blue accent.
- Product previews are the visual focus. The surrounding portfolio avoids decorative cards, gradients, and heavy shadows.
- Light and dark palettes use the same hierarchy and preserve adequate contrast.
- Desktop previews use authentic application-window proportions. Narrow screens keep the product copy readable and horizontally contain or simplify dense preview details without hiding the product identity.

## Product Previews

### Viabar

Port the code structure and styling cues from `Viabar-Releases/src/components/AppMockup.tsx`. Preserve its recognizable macOS workspace: toolbar, project sidebar, milestone/task content, blue product accent, and orange status details. Reimplement it as an Astro component using semantic HTML and local CSS.

### CommuKit

Port the code structure and styling cues from `CommuKit-Release/src/components/AppMockup.tsx`. Preserve the connection tree, session tabs, communication workspace, and inspector/status details that make it recognizable as an industrial protocol debugging tool.

### Vision

Build a coded editor preview from `vision-web`'s `Design.vue`, screen menu, layer panel, paint canvas, and configuration styles. Show a component palette, WYSIWYG canvas with realistic charts, layer list, and property inspector. Its positioning is "所见即所得的数据可视化驾驶舱平台" / "A WYSIWYG data visualization cockpit platform." It must not be described as a low-code formula or energy metering platform.

## Localization

- Keep one content source with `zh` and `en` values for navigation, product descriptions, tags, and link labels.
- A small `中文 / EN` control updates visible text immediately and updates the document language.
- Store the explicit language choice in `localStorage`; otherwise default to browser language.
- Product and brand names remain unchanged.

## Theme

- An accessible button switches light and dark themes immediately.
- Store the explicit theme in `localStorage`; otherwise follow `prefers-color-scheme`.
- Apply the theme before first paint to avoid a flash of the wrong palette.
- Update the button label and pressed state for the active locale and theme.

## Runtime And Accessibility

- Keep Astro static output. Use only a small inline script for theme and language state.
- Navigation and external product links remain keyboard accessible.
- Controls expose localized accessible names and visible focus states.
- Respect reduced-motion preferences.
- Do not add image generation output, screenshots, handcrafted SVG illustrations, or new runtime dependencies.

## Validation

- Perform source inspection and static checks only unless the user later requests compilation.
- Verify translation key parity, theme/language state hooks, valid JSON, forbidden old Vision copy, and absence of Astro toolbar configuration.
- Review responsive CSS for desktop, tablet, and narrow mobile breakpoints.

