# Tycoon US — Design System

Design direction for the Tycoon US web app. The aesthetic is **slightly elevated luxury**: confident, calm, and premium without feeling corporate or cold. Inspired by best-in-class fintech product craft (refined typography, generous space, restrained color), adapted for a desktop-first AI operating system.

---

## Design principles

1. **Quiet confidence** — Let typography and whitespace do the work. Avoid loud gradients, busy patterns, and decorative clutter.
2. **Editorial hierarchy** — Serif headlines carry meaning and emotion; sans-serif handles everything functional.
3. **Intentional contrast** — Dark hero moments (onboarding, billing, key decisions) against light work surfaces (chat, library, settings).
4. **Lowercase voice** — Headlines and primary copy use sentence case or lowercase for a modern, human tone. Reserve ALL CAPS for small labels only.
5. **One accent at a time** — Each screen gets at most one strong accent (gold CTA, mint status, or a single data highlight). Never compete for attention.
6. **Progressive density** — Overview screens stay airy; detail views and tables can be denser without breaking the system.

---

## Typography

### Font families

| Role | Font | Usage |
|------|------|--------|
| **Display / Serif** | **Cirka** | Page titles, hero statements, key metrics, empty states, marketing moments |
| **UI / Sans** | **Gilroy** | Body copy, labels, buttons, inputs, tables, navigation, metadata |

### Loading

```css
/* Cirka — display serif */
@font-face {
  font-family: "Cirka";
  src: url("/fonts/Cirka-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cirka";
  src: url("/fonts/Cirka-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Gilroy — UI sans */
@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

> **Licensing:** Cirka and Gilroy are commercial fonts. Ensure proper licensing before production.
>
> **Local availability:** Both families are installed on the dev machine at `~/Library/Fonts/`:
> - `Cirka-Variable.ttf`
> - Gilroy full family (Regular, Medium, SemiBold, Bold, etc.)
>
> For the web app, copy required weights into `public/fonts/` and convert to `.woff2` for production. Recommended subset: Cirka Variable (400–700), Gilroy Regular (400), Medium (500), SemiBold (600).

### Type scale

| Token | Font | Size | Weight | Tracking | Use |
|-------|------|------|--------|----------|-----|
| `display-xl` | Cirka | 48px / 3rem | 400 | -0.02em | Hero headlines, onboarding |
| `display-lg` | Cirka | 36px / 2.25rem | 400 | -0.02em | Page titles |
| `display-md` | Cirka | 28px / 1.75rem | 400 | -0.01em | Section headlines, key stats |
| `display-sm` | Cirka | 22px / 1.375rem | 400 | 0 | Card titles, emphasis lines |
| `body-lg` | Gilroy | 18px / 1.125rem | 400 | 0 | Lead paragraphs |
| `body-md` | Gilroy | 15px / 0.9375rem | 400 | 0 | Default body |
| `body-sm` | Gilroy | 13px / 0.8125rem | 400 | 0 | Secondary text, descriptions |
| `label-lg` | Gilroy | 12px / 0.75rem | 600 | 0.08em | Section labels (ALL CAPS) |
| `label-sm` | Gilroy | 11px / 0.6875rem | 600 | 0.06em | Metadata, badges |
| `metric-xl` | Cirka | 40px / 2.5rem | 400 | -0.02em | Large numbers (credits, totals) |
| `metric-md` | Gilroy | 20px / 1.25rem | 600 | 0 | Inline amounts, table values |

### Typography rules

- **Headlines (Cirka):** Prefer lowercase or sentence case. Example: *"your team is working on three things"* not *"Your Team Is Working On Three Things"*.
- **Section labels (Gilroy):** Small, semibold, ALL CAPS, wide letter-spacing. Example: `WORK IN PROGRESS`, `AI EMPLOYEES`, `RECENT OUTPUTS`.
- **Body (Gilroy):** Sentence case, comfortable line-height (`1.5`–`1.6`).
- **Never use Cirka for:** buttons, form labels, table cells, navigation, or long paragraphs.
- **Never use Gilroy for:** hero moments or emotional one-liners — that is Cirka's job.

---

## Color

### Core palette

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#0A0A0A` | Primary text, primary buttons, dark surfaces |
| `ink-muted` | `#6B6B6B` | Secondary text, placeholders |
| `ink-faint` | `#A3A3A3` | Tertiary text, disabled states |
| `paper` | `#FFFFFF` | Primary background, cards |
| `paper-warm` | `#FAFAF8` | App shell background (subtle warmth) |
| `paper-elevated` | `#F5F5F3` | Hover states, secondary surfaces |
| `border` | `#E8E8E6` | Dividers, card borders, input outlines |
| `border-strong` | `#D4D4D2` | Focused inputs, emphasized dividers |

### Dark surfaces (hero / modal / onboarding)

| Token | Hex | Use |
|-------|-----|-----|
| `night` | `#0D0D0D` | Full-bleed dark headers, onboarding top sections |
| `night-elevated` | `#1A1A1A` | Dark cards, profile screens |
| `night-muted` | `#2A2A2A` | Dark dividers, inactive elements on dark bg |
| `on-dark` | `#FFFFFF` | Text on dark surfaces |
| `on-dark-muted` | `#A8A8A8` | Secondary text on dark |

### Accent palette

Use sparingly — one dominant accent per view.

| Token | Hex | Use |
|-------|-----|-----|
| `accent-gold` | `#C9A227` | Premium CTAs, rewards, "unlocked" states |
| `accent-gold-soft` | `#F5EDD8` | Gold badge backgrounds |
| `accent-mint` | `#3D8B7A` | Success, positive status, trust indicators |
| `accent-mint-soft` | `#E8F4F0` | Mint pill backgrounds |
| `accent-sage` | `#8FA88E` | Subtle positive hints (OTP subtext, live status) |
| `accent-navy` | `#1A2744` | Premium promo cards, deep feature panels |
| `accent-alert` | `#E85D4C` | Due dates, errors, destructive actions (minimal use) |

### Semantic colors

| Token | Hex | Use |
|-------|-----|-----|
| `status-active` | `#3D8B7A` | Agent online, task in progress |
| `status-paused` | `#A3A3A3` | Paused tasks, idle agents |
| `status-waiting` | `#C9A227` | Needs approval, awaiting input |
| `status-error` | `#E85D4C` | Failed, blocked, overdue |

### Data visualization

| Token | Hex | Use |
|-------|-----|-----|
| `chart-1` | `#4A3068` | Primary segment (deep plum) |
| `chart-2` | `#7B5EA7` | Secondary segment |
| `chart-3` | `#B8A4D4` | Tertiary segment |
| `chart-4` | `#E8E0F0` | Quaternary / remainder |

---

## Spacing & layout

### Spacing scale (4px base)

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |

### Web layout

```
┌──────────────────────────────────────────────────────────────┐
│  Sidebar (240px)  │  Main content (fluid, max 1200px)       │
│                   │                                        │
│  Logo             │  Page header (Cirka title)             │
│  Nav items        │  ─────────────────────────────────     │
│                   │  Content area                          │
│                   │  (generous padding: 32–48px)           │
│  User profile     │                                        │
└──────────────────────────────────────────────────────────────┘
```

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| `sm` | 640px | Collapsed sidebar, stacked layouts |
| `md` | 768px | Sidebar icon-only optional |
| `lg` | 1024px | Full sidebar + content |
| `xl` | 1280px | Content max-width centered |
| `2xl` | 1536px | Optional right context panel |

### Content max-widths

| Context | Max width |
|---------|-----------|
| Chat thread | 720px (centered) |
| Settings forms | 640px |
| Library table | 100% (fluid) |
| Marketing / onboarding | 480px (narrow, focused) |

---

## Radius & elevation

### Border radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 6px | Chips, small badges |
| `radius-md` | 10px | Inputs, small cards |
| `radius-lg` | 14px | Cards, modals |
| `radius-xl` | 20px | Hero cards, feature panels |
| `radius-pill` | 9999px | Buttons, toggles, search bars |

### Shadows

Keep shadows subtle. Luxury reads as flat with edge definition, not heavy drop shadows.

| Token | Value | Use |
|-------|-------|-----|
| `shadow-sm` | `0 1px 2px rgba(10,10,10,0.04)` | Cards at rest |
| `shadow-md` | `0 4px 16px rgba(10,10,10,0.06)` | Dropdowns, popovers |
| `shadow-lg` | `0 8px 32px rgba(10,10,10,0.08)` | Modals, floating panels |
| `shadow-glow-gold` | `0 0 24px rgba(201,162,39,0.15)` | Premium CTA emphasis (rare) |

### Borders

Prefer **1px solid `border`** over shadows for card definition. On dark surfaces, use `rgba(255,255,255,0.08)` borders.

---

## Iconography

**Library:** [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`)

- **Default weight:** `regular` (thin stroke, matches luxury aesthetic)
- **Emphasis weight:** `bold` for active nav items or primary actions only
- **Filled weight:** sparingly — status indicators (checkmarks, alerts), active tab states
- **Size:** 20px default; 16px inline; 24px navigation; 32px empty states
- **Color:** `ink` on light backgrounds; `on-dark` on dark backgrounds; `ink-muted` for inactive
- **Stroke:** Use Phosphor's built-in weights; do not mix Lucide, Heroicons, or custom SVGs

```tsx
import { House, Chats, Kanban, Calendar, Users, Books } from "@phosphor-icons/react";

// Default usage
<House size={20} weight="regular" />

// Active nav item
<House size={20} weight="bold" />
```

**Nav icon mapping**

| Route | Phosphor icon |
|-------|---------------|
| Home | `House` |
| Chats | `Chats` |
| Tasks | `Kanban` |
| Schedule | `Calendar` |
| Team | `Users` |
| Library | `Books` |
| Settings | `Gear` |

---

## Components

### Buttons

| Variant | Background | Text | Border | Use |
|---------|------------|------|--------|-----|
| **Primary** | `ink` | `paper` | none | Main actions: Pay, Save, Continue |
| **Secondary** | `paper` | `ink` | `1px border` | Cancel, View details |
| **Ghost** | transparent | `ink-muted` | none | Tertiary, inline actions |
| **Gold** | `accent-gold` | `ink` | none | Premium upsell, unlock (rare) |
| **Destructive** | transparent | `accent-alert` | `1px accent-alert` | Delete, remove |

- **Shape:** Pill (`radius-pill`) for primary CTAs; `radius-md` for secondary.
- **Font:** Gilroy Semibold, 14–15px.
- **Padding:** `12px 24px` (default); `16px 32px` (large CTA).
- **Arrow suffix:** Primary flows may use `→` in label: *"Continue to checkout →"*

### Inputs

- **Shape:** Rounded rect (`radius-md`) or pill for search.
- **Border:** `1px border`; focus ring `2px ink` with offset.
- **Font:** Gilroy Regular, 15px.
- **OTP / code inputs:** Square cells, `48×48px`, centered Gilroy Semibold, `1px border`.
- **Search:** Full-width pill, magnifier icon left, placeholder in `ink-faint`.

### Cards

**Light card (default)**
```
background: paper
border: 1px solid border
border-radius: radius-lg
padding: space-6
```

**Dark hero card** (billing, onboarding, promos)
```
background: night-elevated or accent-navy gradient
border: 1px solid rgba(255,255,255,0.08)
border-radius: radius-xl
padding: space-8
color: on-dark
headline: Cirka
```

**Glass panel** (on dark backgrounds only)
```
background: rgba(255,255,255,0.06)
backdrop-filter: blur(12px)
border: 1px solid rgba(255,255,255,0.12)
border-radius: radius-lg
```

### Segmented control

Used for binary or few-option filters (Ongoing / Delivered, All / Doc / App).

```
Track:    paper-elevated, radius-pill, padding 4px
Segment:  radius-pill, padding 8px 16px, Gilroy Medium 13px
Active:   paper bg, ink text, shadow-sm
Inactive: transparent, ink-muted text
```

### Pills & badges

| Type | Style |
|------|-------|
| **Status** | Small pill, `label-sm`, colored background (mint-soft, gold-soft) |
| **Count** | Circle or pill, `ink` bg, `paper` text — e.g. notification count |
| **Tag** | `paper-elevated` bg, `ink-muted` text, `radius-sm` — DOC, FILE, RESEARCH |
| **Live** | `accent-mint-soft` bg, `accent-mint` text — "always on" |

### Lists & tables

- **Row height:** 56–64px for interactive rows.
- **Divider:** `1px border` between rows; no zebra striping.
- **Columns:** Name (Cirka or Gilroy Semibold) + metadata (Gilroy Regular, `ink-muted`).
- **Chevron:** Right-aligned `→` for navigable rows.
- **Hover:** `paper-elevated` background, 150ms transition.

### Navigation (sidebar)

```
Width:           240px
Background:      paper-warm
Border-right:    1px border
Logo:            Gilroy Semibold, top padding space-6
Nav item:        Gilroy Medium 14px, space-3 vertical padding
Nav item active: paper bg, radius-md, ink text
Nav item idle:   ink-muted text
User profile:    Bottom-fixed, avatar 32px + Gilroy Medium name
```

### Chat

- **User messages:** Right-aligned, `paper-elevated` bubble, Gilroy Regular.
- **Astra / agent messages:** Left-aligned, no bubble (editorial) or very subtle `paper-elevated` bg.
- **Agent attribution:** Small avatar + Gilroy `label-sm` name above message.
- **Task cards in stream:** Light card with left accent bar (`status-*` color), not full-width billing cards.
- **Composer:** Fixed bottom, pill-shaped input, `shadow-md`, icons for attach/voice/send.

### Modals & drawers

- **Overlay:** `rgba(10,10,10,0.4)`
- **Panel:** `paper`, `radius-xl`, `shadow-lg`, max-width 480px (modal) or 400px right drawer.
- **Dark modal variant:** For checkout / upgrade — `night` bg, Cirka headline, gold or white CTA.

---

## Page-specific guidance

### Astra (Chat)

- Default **light** work surface.
- Chat column centered, max 720px.
- Optional right context panel (xl+): active project, open tasks — `paper-elevated` card stack.
- Billing upsell: **single** dark hero card or top banner — never duplicate in thread.
- Voice mode toggle: pill segmented control in header.

### Work

- Page title (Cirka): *"what your team is working on"*
- Segmented control: Ongoing / Delivered.
- Task rows: Gilroy title + `label-sm` schedule + status pill right.
- Empty Delivered: Cirka empty state line + Gilroy subtext.

### Library

- Search bar: full-width pill at top.
- Filter chips below search (segmented + dropdowns).
- Table: clean rows, type tags, author as Gilroy `body-sm`.
- Preview pane (lg+): split view, Cirka doc title in preview header.

### Team

- Astra hero card: slightly larger, dark or gold-accent border, "always on" mint badge.
- AI employees: grid on xl, list on md. Avatar + Cirka name + Gilroy role.
- Section labels: `HUMAN`, `AI EMPLOYEES`.

### Settings

- Sub-nav: vertical list, active item with left `2px ink` bar (not full secondary sidebar on wide screens — use inline sub-nav within content).
- Form sections: `label-lg` section header, Gilroy labels, generous `space-8` between sections.
- Toggles: pill track, `ink` when on.

### Onboarding / Auth

- **Split layout:** Dark top (Cirka headline on `night`) + white bottom (form/OTP).
- Example headline: *"you're one step away from your AI team"*
- OTP cells, countdown link in `ink-faint`, submit button full-width `ink`.

### Billing / Usage

- Dark promo cards for plan selection.
- Cirka for plan headline; Gilroy for feature list.
- Gold CTA for upgrade; black CTA for checkout confirm.
- Trust line below CTA: `accent-mint` text, small — *"nothing is charged until you confirm"*

---

## Motion

| Interaction | Duration | Easing |
|-------------|----------|--------|
| Hover / focus | 150ms | `ease-out` |
| Page transition | 200ms | `ease-in-out` |
| Modal enter | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Drawer slide | 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Skeleton shimmer | 1.5s | `ease-in-out` loop |

- No bouncy or playful animations — motion should feel **smooth and assured**.
- Prefer opacity + translate (8–16px) over scale.

---

## Voice & copy

| Context | Tone | Example |
|---------|------|---------|
| Headlines | Calm, direct, lowercase | *"your library"* |
| Section labels | Neutral, ALL CAPS | `RECENT OUTPUTS` |
| CTAs | Clear, action-oriented | *"Continue to checkout →"* |
| Empty states | Warm, helpful | *"nothing delivered yet — ask Astra to start something"* |
| Errors | Specific, no blame | *"couldn't save — check your connection and try again"* |
| Agent updates | Third person, brief | *"India is designing 2 logo concepts for WillowAI"* |

Avoid: exclamation marks, hype words ("amazing", "supercharge"), corporate jargon ("leverage", "synergy").

---

## CSS custom properties (starter)

```css
:root {
  /* Fonts */
  --font-display: "Cirka", Georgia, serif;
  --font-ui: "Gilroy", system-ui, -apple-system, sans-serif;

  /* Colors — light */
  --color-ink: #0A0A0A;
  --color-ink-muted: #6B6B6B;
  --color-ink-faint: #A3A3A3;
  --color-paper: #FFFFFF;
  --color-paper-warm: #FAFAF8;
  --color-paper-elevated: #F5F5F3;
  --color-border: #E8E8E6;

  /* Accents */
  --color-accent-gold: #C9A227;
  --color-accent-mint: #3D8B7A;
  --color-accent-mint-soft: #E8F4F0;

  /* Radius */
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-pill: 9999px;

  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}
```

---

## Tailwind extension (starter)

```js
// tailwind.config — extend theme
{
  fontFamily: {
    display: ['Cirka', 'Georgia', 'serif'],
    sans: ['Gilroy', 'system-ui', 'sans-serif'],
  },
  colors: {
    ink: {
      DEFAULT: '#0A0A0A',
      muted: '#6B6B6B',
      faint: '#A3A3A3',
    },
    paper: {
      DEFAULT: '#FFFFFF',
      warm: '#FAFAF8',
      elevated: '#F5F5F3',
    },
    accent: {
      gold: '#C9A227',
      mint: '#3D8B7A',
    },
    night: {
      DEFAULT: '#0D0D0D',
      elevated: '#1A1A1A',
    },
  },
  borderRadius: {
    lg: '14px',
    xl: '20px',
  },
}
```

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use Cirka for one strong headline per view | Stack multiple serif headlines |
| Keep backgrounds warm white or intentional dark | Use pure gray `#F0F0F0` everywhere |
| Use gold accent for one premium moment per screen | Gold buttons on every CTA |
| Lowercase editorial headlines | Title Case Every Headline |
| Thin borders and whitespace | Heavy shadows and dense layouts |
| One billing touchpoint per session | Repeat subscription cards in chat |
| Section labels in small caps Gilroy | Section labels in Cirka |

---

## File checklist (implementation)

- [ ] Copy Cirka + Gilroy from `~/Library/Fonts/` to `public/fonts/` (woff2)
- [ ] Install `@phosphor-icons/react`
- [ ] Configure Tailwind / CSS variables from this doc
- [ ] Build base components: Button, Input, Card, Badge, SegmentedControl
- [ ] Build layout: Sidebar, PageHeader, ContentArea
- [ ] Apply page templates: Chat, Work, Library, Team, Settings
- [ ] Dark hero variants for onboarding and billing
- [ ] Document component usage in Storybook or equivalent

---

*Version 1.0 — Tycoon US design foundation. Update this file when tokens or patterns change.*
