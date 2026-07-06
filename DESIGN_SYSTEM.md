# Design System

Figma source: [Prototyping Design System / Final Design System](https://www.figma.com/design/ZBYvgBfGbtDjBLl9mHsNp3/Prototyping-Design-System?node-id=15-355&t=cS2SE3qROCwGhW80-1). Repo import notes live in [FIGMA_SOURCE.md](FIGMA_SOURCE.md).

This document is the operating template for building the design system foundations in Figma first, then implementing them in React, Storybook, and Cursor. It is not a finished visual identity yet. Values marked `TBD in Figma` must be decided in Figma variables before they are treated as source-of-truth implementation tokens.

## 1. Purpose

The design system exists to keep Figma decisions and code implementation aligned.

- Figma is the first source for visual foundation decisions.
- Every foundation token must have a human-readable Figma variable name and an implementation-ready CSS variable name.
- Code should consume CSS variables, not raw color, type, spacing, radius, border, shadow, icon, or motion values.
- App-specific components should use these foundations without redefining them.
- This file becomes the source of truth after the matching Figma variables are filled in and approved.

## 2. Design Principles

Use these principles to guide foundation and component decisions.

| Principle | Definition | Design-system implication |
| --- | --- | --- |
| Clear | Interfaces should be easy to scan, read, and act on. | Prefer semantic tokens that describe purpose, not visual appearance alone. |
| Consistent | Similar UI patterns should behave and look alike. | Reuse existing tokens before adding new ones. |
| Accessible | The system should support inclusive use by default. | Validate contrast, focus states, keyboard behavior, and reduced-motion states before marking tokens or components `Ready`. |
| Practical | Foundations should serve real product work. | Add tokens only when they solve a repeated need. |
| Figma-first | Visual decisions should be made and reviewed in Figma before code hardens them. | New CSS variables should map directly to Figma variable names. |

## 3. Naming Conventions

### Figma Variables

Use readable slash-separated names that designers can scan in Figma.

Format:

```text
Category/Role/Variant/State
```

Examples:

- `Color/Text/Primary`
- `Color/Surface/Canvas`
- `Typography/Size/Body`
- `Spacing/4`
- `Radius/Medium`
- `Shadow/Raised`
- `Motion/Duration/Fast`

Rules:

- Use title case for each segment.
- Use semantic roles where possible, such as `Text`, `Surface`, `Border`, `Action`, `Danger`, or `Focus`.
- Use state names only when the value changes by state, such as `Hover`, `Pressed`, `Disabled`, or `Focus`.
- Do not name variables after a single component unless the value is truly component-specific and cannot be generalized.

### CSS Variables

Use lowercase kebab-case CSS custom properties that mirror the Figma variable meaning.

Format:

```css
--category-role-variant-state
```

Examples:

- `--color-text-primary`
- `--color-surface-canvas`
- `--font-size-body`
- `--space-4`
- `--radius-medium`
- `--shadow-raised`
- `--motion-duration-fast`

Rules:

- Preserve the meaning of the Figma variable name.
- Keep names stable once used by components.
- Prefer semantic token names over raw scale names for color.
- Numeric scales are acceptable for spacing when the scale is documented.
- Never introduce one-off raw values in component CSS when a token should exist.

## 4. Token Status Labels

Use one of these labels for every token row.

| Status | Meaning | Usage rule |
| --- | --- | --- |
| Draft | The token is proposed or incomplete. | May be used for exploration, but should be reviewed before shipping. |
| Ready | The token has been reviewed in Figma and is approved for implementation. | Safe for production components. |
| Deprecated | The token should be replaced. | Do not use in new work; migrate existing usage to the replacement token. |

## 5. Color

Create semantic color variables in Figma before implementing CSS color tokens. Do not encode brand or palette assumptions here until the Figma palette is reviewed.

### Color Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Color/Text/Primary` | `--color-text-primary` | Default high-emphasis text. | TBD in Figma | Use for primary body copy and important labels. Must meet contrast requirements on default surfaces. | Draft |
| `Color/Text/Secondary` | `--color-text-secondary` | Lower-emphasis text. | TBD in Figma | Use for supporting text, metadata, and helper copy. Do not use for disabled text. | Draft |
| `Color/Text/Disabled` | `--color-text-disabled` | Disabled or unavailable text. | TBD in Figma | Use only when the corresponding control is disabled or unavailable. | Draft |
| `Color/Text/Inverse` | `--color-text-inverse` | Text on inverse or dark emphasis surfaces. | TBD in Figma | Use only on approved inverse backgrounds. | Draft |
| `Color/Surface/Canvas` | `--color-surface-canvas` | App/page background. | TBD in Figma | Use for the main page canvas. | Draft |
| `Color/Surface/Default` | `--color-surface-default` | Default component surface. | TBD in Figma | Use for standard panels, controls, menus, and cards. | Draft |
| `Color/Surface/Subtle` | `--color-surface-subtle` | Secondary or recessed surface. | TBD in Figma | Use for grouped areas and subtle contrast changes. | Draft |
| `Color/Surface/Raised` | `--color-surface-raised` | Elevated surface. | TBD in Figma | Use with approved elevation tokens only. | Draft |
| `Color/Border/Default` | `--color-border-default` | Standard divider and control border. | TBD in Figma | Use for visible boundaries that should not dominate the UI. | Draft |
| `Color/Border/Strong` | `--color-border-strong` | Higher-emphasis border. | TBD in Figma | Use sparingly for selected states or strong separation. | Draft |
| `Color/Action/Primary` | `--color-action-primary` | Primary interactive action. | TBD in Figma | Use for the main action in a workflow. Must include hover, pressed, focus, and disabled states before `Ready`. | Draft |
| `Color/Action/Primary/Hover` | `--color-action-primary-hover` | Hover state for primary action. | TBD in Figma | Use only for hover-capable pointer states. | Draft |
| `Color/Action/Primary/Pressed` | `--color-action-primary-pressed` | Pressed state for primary action. | TBD in Figma | Use for active pointer or pressed button states. | Draft |
| `Color/Action/Secondary` | `--color-action-secondary` | Secondary interactive action. | TBD in Figma | Use when an action is available but not primary. | Draft |
| `Color/Status/Success` | `--color-status-success` | Positive status signal. | TBD in Figma | Use with text or icon support; do not rely on color alone. | Draft |
| `Color/Status/Warning` | `--color-status-warning` | Warning or caution signal. | TBD in Figma | Use with clear text or icon support. | Draft |
| `Color/Status/Danger` | `--color-status-danger` | Error or destructive signal. | TBD in Figma | Use for errors and destructive actions. Must meet contrast requirements. | Draft |
| `Color/Focus/Ring` | `--color-focus-ring` | Keyboard focus indicator. | TBD in Figma | Must be visible against all interactive surfaces. | Draft |

## 6. Typography

Define type decisions in Figma using typography variables or styles, then mirror them in CSS variables. Do not ship component-specific font sizes outside this scale.

### Typography Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Typography/Family/Sans` | `--font-family-sans` | Primary interface typeface. | TBD in Figma | Use for all product UI unless a specialized token exists. | Draft |
| `Typography/Family/Mono` | `--font-family-mono` | Monospace typeface. | TBD in Figma | Use for code, tokens, IDs, and technical values. | Draft |
| `Typography/Size/Display` | `--font-size-display` | Largest product heading. | TBD in Figma | Use only for major page or experience titles. | Draft |
| `Typography/Size/Heading` | `--font-size-heading` | Section heading. | TBD in Figma | Use for primary content sections and major panels. | Draft |
| `Typography/Size/Subheading` | `--font-size-subheading` | Secondary heading. | TBD in Figma | Use inside sections, panels, and repeated groups. | Draft |
| `Typography/Size/Body` | `--font-size-body` | Default body text. | TBD in Figma | Use for regular copy and form text. | Draft |
| `Typography/Size/Small` | `--font-size-small` | Supporting text. | TBD in Figma | Use for helper text, metadata, and compact labels. | Draft |
| `Typography/Size/Caption` | `--font-size-caption` | Smallest readable text. | TBD in Figma | Use sparingly; must remain legible and accessible. | Draft |
| `Typography/Weight/Regular` | `--font-weight-regular` | Default text weight. | TBD in Figma | Use for normal body text. | Draft |
| `Typography/Weight/Medium` | `--font-weight-medium` | Moderate emphasis. | TBD in Figma | Use for labels, tabs, and emphasized metadata. | Draft |
| `Typography/Weight/Semibold` | `--font-weight-semibold` | Strong emphasis. | TBD in Figma | Use for headings or selected states. | Draft |
| `Typography/LineHeight/Tight` | `--line-height-tight` | Compact line height. | TBD in Figma | Use for headings and dense labels only. | Draft |
| `Typography/LineHeight/Default` | `--line-height-default` | Default readable line height. | TBD in Figma | Use for body copy and most UI text. | Draft |
| `Typography/LineHeight/Loose` | `--line-height-loose` | Long-form reading line height. | TBD in Figma | Use for paragraphs that span multiple lines. | Draft |

## 7. Spacing

Define spacing as a reusable scale. Use spacing tokens for margins, padding, layout gaps, and component density.

### Spacing Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Spacing/0` | `--space-0` | No spacing. | TBD in Figma | Use when an intentional zero value is needed. | Draft |
| `Spacing/1` | `--space-1` | Smallest spacing step. | TBD in Figma | Use for tight internal offsets and small gaps. | Draft |
| `Spacing/2` | `--space-2` | Compact spacing. | TBD in Figma | Use for compact controls and nearby related elements. | Draft |
| `Spacing/3` | `--space-3` | Small spacing. | TBD in Figma | Use for common internal gaps. | Draft |
| `Spacing/4` | `--space-4` | Default spacing. | TBD in Figma | Use for standard component padding and layout gaps. | Draft |
| `Spacing/5` | `--space-5` | Medium spacing. | TBD in Figma | Use for larger component padding and grouped content. | Draft |
| `Spacing/6` | `--space-6` | Large spacing. | TBD in Figma | Use for section spacing and larger layout gaps. | Draft |
| `Spacing/8` | `--space-8` | Extra-large spacing. | TBD in Figma | Use for major layout separation. | Draft |
| `Spacing/10` | `--space-10` | Page-level spacing. | TBD in Figma | Use for broad page and viewport rhythm. | Draft |
| `Spacing/12` | `--space-12` | Largest routine spacing. | TBD in Figma | Use only when smaller spacing tokens are insufficient. | Draft |

## 8. Radius

Use radius tokens to keep component shapes consistent. Add component-specific radius only after confirming the shape cannot be expressed by the shared scale.

### Radius Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Radius/None` | `--radius-none` | Square corners. | TBD in Figma | Use for flush layout edges and components that should not look softened. | Draft |
| `Radius/Small` | `--radius-small` | Subtle corner radius. | TBD in Figma | Use for compact controls and small surfaces. | Draft |
| `Radius/Medium` | `--radius-medium` | Default component radius. | TBD in Figma | Use for standard buttons, inputs, menus, and cards. | Draft |
| `Radius/Large` | `--radius-large` | Larger radius. | TBD in Figma | Use for larger surfaces where the radius remains proportional. | Draft |
| `Radius/Full` | `--radius-full` | Fully rounded shape. | TBD in Figma | Use for pills, circular avatars, and icon-only circular controls. | Draft |

## 9. Borders

Use border tokens for width, style, and color. Border color tokens live in the color section; this section defines border mechanics.

### Border Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Border/Width/None` | `--border-width-none` | No border. | TBD in Figma | Use when surface separation comes from spacing, color, or elevation instead. | Draft |
| `Border/Width/Thin` | `--border-width-thin` | Default border width. | TBD in Figma | Use for standard dividers, inputs, and component outlines. | Draft |
| `Border/Width/Thick` | `--border-width-thick` | Strong border width. | TBD in Figma | Use for selected, active, or high-emphasis outlines. | Draft |
| `Border/Style/Solid` | `--border-style-solid` | Standard border style. | TBD in Figma | Use for most component borders. | Draft |
| `Border/Style/Dashed` | `--border-style-dashed` | Dashed border style. | TBD in Figma | Use only when the dashed treatment communicates a specific interaction or state. | Draft |

## 10. Shadow and Elevation

Use elevation deliberately. Prefer border, surface color, and spacing before adding shadows.

### Shadow and Elevation Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Shadow/None` | `--shadow-none` | No shadow. | TBD in Figma | Use for flat surfaces and reset states. | Draft |
| `Shadow/Low` | `--shadow-low` | Subtle elevation. | TBD in Figma | Use for small raised elements that need light separation. | Draft |
| `Shadow/Raised` | `--shadow-raised` | Standard elevated surface. | TBD in Figma | Use for menus, popovers, and raised panels. | Draft |
| `Shadow/Overlay` | `--shadow-overlay` | Highest routine elevation. | TBD in Figma | Use for modals, dialogs, and blocking overlays. | Draft |
| `Elevation/Low` | `--elevation-low` | Elevation role for low surfaces. | TBD in Figma | Use only if the implementation needs a semantic elevation role separate from raw shadow. | Draft |
| `Elevation/Overlay` | `--elevation-overlay` | Elevation role for overlays. | TBD in Figma | Use only for stacking and overlay decisions. | Draft |

## 11. Icons

Icons should support meaning and scanning. They should not be used as decoration without a UI purpose.

### Icon Rules

- Use the approved icon library once selected in Figma and code.
- Prefer standard icons from the approved library before custom drawing new ones.
- Pair unfamiliar icons with visible text or accessible labels.
- Icon-only buttons must have an accessible name.
- Decorative icons must be hidden from assistive technology.
- Do not use icons as the only signal for success, warning, danger, or disabled states.

### Icon Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Icon/Size/Small` | `--icon-size-small` | Compact icon size. | TBD in Figma | Use in dense controls, metadata, and compact rows. | Draft |
| `Icon/Size/Medium` | `--icon-size-medium` | Default icon size. | TBD in Figma | Use for standard buttons, navigation, and inputs. | Draft |
| `Icon/Size/Large` | `--icon-size-large` | Large icon size. | TBD in Figma | Use for empty states or prominent controls only. | Draft |
| `Icon/Stroke/Default` | `--icon-stroke-default` | Default icon stroke width. | TBD in Figma | Use with the approved icon library unless the icon set defines fixed strokes. | Draft |
| `Icon/Color/Default` | `--icon-color-default` | Default icon color alias. | TBD in Figma | Should usually alias a text or action color token. | Draft |
| `Icon/Color/Muted` | `--icon-color-muted` | Muted icon color alias. | TBD in Figma | Use for lower-emphasis icons. | Draft |

## 12. Motion

Motion should clarify state changes and spatial relationships. It should never block interaction or create unnecessary distraction.

### Motion Rules

- Respect reduced-motion preferences in implementation.
- Use motion tokens for duration and easing.
- Keep component animations short and purposeful.
- Do not add one-off easing curves directly in component CSS.
- Provide non-motion state changes for users who prefer reduced motion.

### Motion Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Motion/Duration/Instant` | `--motion-duration-instant` | No visible transition. | TBD in Figma | Use for immediate state changes and reduced-motion fallbacks. | Draft |
| `Motion/Duration/Fast` | `--motion-duration-fast` | Fast feedback. | TBD in Figma | Use for hover, focus, pressed, and small state changes. | Draft |
| `Motion/Duration/Default` | `--motion-duration-default` | Standard transition. | TBD in Figma | Use for common UI transitions. | Draft |
| `Motion/Duration/Slow` | `--motion-duration-slow` | Larger transition. | TBD in Figma | Use for overlays, drawers, and larger layout changes. | Draft |
| `Motion/Easing/Standard` | `--motion-easing-standard` | Default easing. | TBD in Figma | Use for most transitions. | Draft |
| `Motion/Easing/Enter` | `--motion-easing-enter` | Entering elements. | TBD in Figma | Use for elements appearing or moving into view. | Draft |
| `Motion/Easing/Exit` | `--motion-easing-exit` | Exiting elements. | TBD in Figma | Use for elements leaving view. | Draft |

## 13. Accessibility

Accessibility is a foundation requirement, not a final pass.

### Accessibility Rules

- Text contrast must meet WCAG AA minimums: 4.5:1 for normal text and 3:1 for large text.
- Non-text UI indicators must meet at least 3:1 contrast against adjacent colors.
- Focus states must be visible, keyboard accessible, and documented.
- Interactive target sizes should be large enough for reliable pointer and touch use.
- Disabled states must not be the only way to explain why an action is unavailable.
- Color must not be the only way to communicate status or meaning.
- Components must support keyboard navigation in expected order.
- Motion must respect `prefers-reduced-motion`.
- Text must remain readable when users increase browser zoom or text size.

### Accessibility Token Table

| Figma variable | CSS variable | Purpose | Value | Usage rules | Status |
| --- | --- | --- | --- | --- | --- |
| `Focus/Ring/Width` | `--focus-ring-width` | Width of visible focus outline. | TBD in Figma | Use on every keyboard-focusable interactive element. | Draft |
| `Focus/Ring/Offset` | `--focus-ring-offset` | Offset between element and focus outline. | TBD in Figma | Use where the focus ring needs separation from the component edge. | Draft |
| `Focus/Ring/Color` | `--focus-ring-color` | Focus ring color alias. | TBD in Figma | Should alias `Color/Focus/Ring` after color decisions are approved. | Draft |
| `Target/Size/Minimum` | `--target-size-minimum` | Minimum interactive target size. | TBD in Figma | Use for buttons, icon buttons, inputs, and touch targets. | Draft |

## 14. Cursor Implementation Rules

Cursor must follow this document before implementing UI.

1. Read `DESIGN_SYSTEM.md` before creating or editing UI components.
2. Use existing documented tokens before creating new CSS variables or raw CSS values.
3. Preserve Figma variable names and CSS variable names exactly when translating foundations into code.
4. Flag missing tokens in implementation notes instead of improvising new visual values.
5. Do not mark a token `Ready` unless the Figma variable exists and has been reviewed.
6. Keep design-system foundations separate from app-specific component logic.
7. Component CSS should reference CSS variables, such as `var(--color-text-primary)`, rather than literal values.
8. If a component needs a token that does not exist, add a `Draft` row to this document before using it.
9. Do not rename existing CSS variables without checking current component usage.
10. Keep component-specific tokens out of foundation sections unless the need applies across multiple components.
11. Update Storybook examples when token changes affect component appearance.
12. Record meaningful foundation changes in the change log.

## 15. Change Log

| Date | Change | Status |
| --- | --- | --- |
| 2026-06-27 | Created starter foundation template for Figma-first variables and CSS token alignment. | Draft |
