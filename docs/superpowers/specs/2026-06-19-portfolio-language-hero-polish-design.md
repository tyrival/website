# Portfolio Language And Hero Polish Design

**Date:** 2026-06-19
**Status:** Approved brief

## Goal

Improve the hero quote's readability and spacing, make the theme state visually explicit, and extend the existing bilingual portfolio to seven languages without changing the product-preview layout.

## Hero

- Load Manrope from Google Fonts and use it only for the two-line hero statement.
- Use weight 600 with less aggressive negative letter spacing for clearer glyph shapes.
- Keep `code` struck through and insert a non-collapsing visible space before `product`.
- Preserve the current line break after `Talking is cheap,` and the responsive type scale.

## Theme Control

- Replace the current CSS-drawn symbols with the text glyphs `☀` and `☾`.
- Show the moon while the page is light (the available action switches to dark) and the sun while the page is dark (the available action switches to light).
- Keep localized accessible labels and the existing persisted theme behavior.

## Languages

- Support `zh`, `en`, `fr`, `es`, `de`, `ja`, and `ko`.
- Replace the two-state language button with a compact menu opened from the current header control.
- The trigger displays the active language code. The menu lists 中文, English, Français, Español, Deutsch, 日本語, and 한국어.
- Selecting an item updates every localized text node, the document `lang`, accessible labels, active menu state, and `localStorage`.
- Clicking outside the menu or pressing Escape closes it.
- Keep product names and technology tags unchanged; translate navigation, descriptions, link labels, footer copy, control labels, and the hero scroll prompt.

## Validation

- Extend the existing static contract before production edits and observe the expected failure.
- Verify all seven locale keys are present, the old binary language toggle logic is absent, Manrope is loaded, the explicit hero spacing is present, and the theme glyphs are present.
- Run the existing static contract and `git diff --check` only. Do not compile.

