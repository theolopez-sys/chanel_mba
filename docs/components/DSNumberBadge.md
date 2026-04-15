# DSNumberBadge

> **Design System**: Internal European Design System
> **Figma source — variable defs**: [node 9676:2382](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9676-2382)
> **Figma source — guidelines**: [node 9676:2443](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9676-2443)
> **Branch**: `figma/component-specs`

---

## Overview

**Badge numbers** are compact UI elements used to display numeric values — often representing counts, alerts, or status updates. They draw attention to dynamic information in a subtle, non-intrusive way.

**Usage contexts:**
- To communicate **numerical information** (e.g., number of products)
- To indicate **unread items** (e.g., messages, alerts, notifications)
- To show **pending tasks** or updates (e.g., app updates, cart items)
- Within components that indicate **steps to follow** (see progress stepper)

---

## Anatomy

Based on the annotated Figma anatomy diagram (node 9676:2443):

```
┌──────────────────┐
│  ① Container     │
│  ┌────────────┐  │
│  │ ② Number   │  │  ← "99+" maximum displayed
│  └────────────┘  │
└──────────────────┘
```

| # | Element | Notes |
|---|---------|-------|
| 1 | Container | Circular for 1 digit (20 px ⌀), hugs text for 2+ digits |
| 2 | Number | Numeric value, max displayed value is "99+" |

---

## Props

```typescript
type BadgeNumberProps = {
  className?: string;
  /** Visual style variant */
  variant?: "primary" | "secondary" | "disabled";
  /** The numeric value to display */
  value?: number;
  /** Maximum value before showing "99+" cap */
  max?: number;
};
```

---

## Types / Variants

| Variant | Appearance | Use case |
|---------|-----------|----------|
| **Primary** | Filled container | Highlight new activity, pending task or actionable elements |
| **Secondary** | Outlined container | Count is informative and not critical (e.g., saved items, secondary actions) |
| **Disabled** | Grayed container | The associated action or feature is unavailable |

---

## Design Rules

### Container size

| Digits | Shape | Behaviour |
|--------|-------|-----------|
| **1 digit** | Perfect circle | Fixed 20 px diameter container |
| **2+ digits** | Pill / rounded rect | Container hugs the text width (horizontal padding 8 px) |

> When the value exceeds 99, display **"99+"** — the container expands to hug this text.

---

## Behavior & Interactions

- **Dynamic**: The number should update in real time as content changes.
- **Visibility**: Badges should appear **only when the count is greater than zero**.
- **Dismissal**: Badge numbers should disappear once the related content is viewed or cleared.
- **Bigger values**: For 2+ digits (e.g., "99+"), the container hugs the text width.
- **Action**: Tapping the badge should **not** trigger an action — clicks should apply to the parent component.

---

## Design Tokens

### Number Badge

| Token | Default value | Usage |
|-------|--------------|-------|
| `number-badge/container/primary` | `#ffffff` | Primary filled container background |
| `number-badge/text/primary` | `#333333` | Primary text color |
| `number-badge/container/secondary` | `#ffffff` | Secondary outlined container border |
| `number-badge/text/secondary` | `#ffffff` | Secondary text color |
| `number-badge/container/disabled` | `#939292` | Disabled container background |
| `number-badge/text/disabled` | `#d8d8d8` | Disabled text color |

### Colors

| Token | Default value | Usage |
|-------|--------------|-------|
| `colors/white` | `#ffffff` | General white |
| `colors/black` | `#000000` | General black |
| `colors/text/disabled` | `#4d4d4d` | Disabled text |
| `colors/surface/white` | `#000000` | Surface (dark mode inverted) |
| `colors/surface/fake white` | `#1d1d1d` | Fake white surface (dark mode) |
| `colors/border/medium` | `#939292` | Medium border |
| `colors/neutral/white` | `#ffffff` | Neutral white |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font/family/title` | `ABChanel Corpo 2022` | Badge number font |
| `font/size/sm` | `14` | Badge number font size |
| `font/size/md` | `16` | Heading font size |
| `font/weight/bold` | `bold` | Bold weight |

### Typography Styles

| Style | Family | Weight | Size | Line height | Letter spacing |
|-------|--------|--------|------|-------------|----------------|
| `heading/h4` | `font/family/title` | bold | `font/size/md` (16) | 100% | 0.1 px |
| `button/small` | `font/family/title` | bold | `font/size/sm` (14) | 100% | 0.1 px |

### Spacing

| Token | Value (px) | Usage |
|-------|-----------|-------|
| `size/gap/3xs` | `4` | Inner padding (1-digit circle) |
| `size/gap/lg` | `24` | Container outer size (touch target) |
| `size/gap/5xl` | `64` | Layout spacing |
| `size/size-200` | `16` | Base size unit |

---

## Usage Examples

### 1 digit — Primary

```tsx
<BadgeNumber
  variant="primary"
  value={3}
/>
```

### 2+ digits — Primary (hug width)

```tsx
<BadgeNumber
  variant="primary"
  value={24}
/>
// Renders "24" with pill container
```

### Capped value (99+)

```tsx
<BadgeNumber
  variant="primary"
  value={150}
  max={99}
/>
// Renders "99+"
```

### Secondary (outlined)

```tsx
<BadgeNumber
  variant="secondary"
  value={5}
/>
```

### Disabled

```tsx
<BadgeNumber
  variant="disabled"
  value={2}
/>
```

### In a List Item (right element)

```tsx
<ListItem
  title="Suggestion boards"
  showRightElement
  rightElement={<BadgeNumber variant="secondary" value={1} />}
/>
```

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use badge numbers to communicate relevant numerical information | Don't display badges with no value (zero or empty) |
| Apply a hug format for 2+ digit values | Don't restrict the badge width — let it expand when content exceeds 1 digit |
| Maintain consistent size and placement across the app | Don't use badge numbers for decoration |
| Use secondary badges for low-priority or non-urgent indicators | Don't overload the UI with too many badges — prioritize clarity |
| Add an error message alongside a badge for critical alerts | Don't use badges as the **only** indication of a critical alert |

---

## Accessibility

### General
- Do **not** use other colors — they have been designed to be consistent and accessible.
- Provide clear and concise **labels for screen readers** (e.g., `aria-label="3 unread messages"`).

### Touch
- Tapping the badge should **not** trigger an action — clicks should apply to the **parent component**.

---

## Figma Source — Variable Definitions

> Raw token data from **node 9676:2382** (`get_variable_defs`)

```json
{
  "colors/white": "#ffffff",
  "colors/text/disabled": "#4d4d4d",
  "font/size/md": "16",
  "font/weight/bold": "bold",
  "font/family/title": "ABChanel Corpo 2022",
  "heading/h4": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "number-badge/text/primary": "#333333",
  "font/size/sm": "14",
  "button/small": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/sm, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "size/gap/3xs": "4",
  "number-badge/container/primary": "#ffffff",
  "number-badge/text/secondary": "#ffffff",
  "number-badge/container/secondary": "#ffffff",
  "number-badge/text/disabled": "#d8d8d8",
  "number-badge/container/disabled": "#939292",
  "colors/surface/fake white": "#1d1d1d",
  "colors/border/medium": "#939292",
  "colors/neutral/white": "#ffffff",
  "colors/black": "#000000",
  "size/gap/lg": "24",
  "size/size-200": "16",
  "colors/surface/white": "#000000",
  "size/gap/5xl": "64"
}
```

---

## Figma Source — Design Context

> Asset URLs and component code extracted from **node 9676:2443** (`get_design_context`)

### Assets

```ts
const imgVector1      = "https://www.figma.com/api/mcp/asset/f11cd453-409a-408a-94a9-7eb672f87b79"; // annotation arrow
const imgVector3      = "https://www.figma.com/api/mcp/asset/a549a027-fdcc-437b-ab61-50a43c4cfcd3"; // annotation arrow
const imgLeftElements = "https://www.figma.com/api/mcp/asset/be5b720f-8b56-44ee-83a4-410703590553"; // left icon (list item)
```

### Component Code

```tsx
import React from "react";

// ─── Sub-components ────────────────────────────────────────────────────────

type DividerHorizontalProps = {
  className?: string;
  width?: "Small";
};

function DividerHorizontal({ className }: DividerHorizontalProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "var(--divider-default, #ededed)",
        height: "1px",
        width: "100%",
      }}
    />
  );
}

// ─── Badge Number variants ─────────────────────────────────────────────────

type BadgeNumberProps = {
  className?: string;
  variant?: "primary" | "secondary" | "disabled";
  value?: number;
  max?: number;
};

function BadgeNumber({
  className = "",
  variant = "primary",
  value = 1,
  max = 99,
}: BadgeNumberProps) {
  const displayValue = value > max ? `${max}+` : String(value);
  const isMultiDigit = displayValue.length > 1;

  const containerStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100px",
    minWidth: "20px",
    minHeight: "20px",
    padding: isMultiDigit ? "10px 8px" : "10px",
    ...(variant === "primary" && {
      backgroundColor: "var(--number-badge-container-primary, #ffffff)",
    }),
    ...(variant === "secondary" && {
      border: "1.5px solid var(--number-badge-container-secondary, #ffffff)",
      backgroundColor: "transparent",
    }),
    ...(variant === "disabled" && {
      backgroundColor: "var(--number-badge-container-disabled, #939292)",
    }),
  };

  const textColor =
    variant === "primary"
      ? "var(--number-badge-text-primary, #333333)"
      : variant === "secondary"
      ? "var(--number-badge-text-secondary, #ffffff)"
      : "var(--number-badge-text-disabled, #d8d8d8)";

  return (
    <div
      className={`badge-number ${className}`}
      style={{ position: "relative", borderRadius: "100px" }}
    >
      <div style={containerStyle}>
        <span
          style={{
            fontFamily:
              "var(--font-family-title, 'ABChanel Corpo 2022', sans-serif)",
            fontWeight: "var(--font-weight-bold, bold)",
            fontSize: "var(--font-size-sm, 14px)",
            color: textColor,
            textAlign: "center",
            letterSpacing: "0.1px",
            whiteSpace: "nowrap",
            lineHeight: "normal",
          }}
        >
          {displayValue}
        </span>
      </div>
    </div>
  );
}

export { BadgeNumber, DividerHorizontal };
export type { BadgeNumberProps, DividerHorizontalProps };
```
