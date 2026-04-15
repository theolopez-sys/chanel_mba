# DSProgressBar

> **Design System**: Internal European Design System
> **Figma source — variable defs**: [node 8758:5539](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8758-5539)
> **Figma source — guidelines**: [node 8760:5612](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8760-5612)
> **Branch**: `figma/component-specs`

---

## Overview

**Progress bar** informs users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

---

## Anatomy

Based on the annotated Figma anatomy diagram (node 8760:5612):

```
┌──────────────────────────────────────────────────── 33% ─┐
│  ① Progress ███████████████████░░░░░░░░░░░░░░░░░░░░       │
│             └─────────② Container ──────────────┘  ③ %   │
└──────────────────────────────────────────────────────────┘
```

| # | Element | Notes |
|---|---------|-------|
| 1 | Progress | Colored fill indicating current completion level; grows from 0 to 100% |
| 2 | Container | Full-width track behind the progress fill |
| 3 | Numeral progress | Optional percentage label displayed to the right of the bar |

---

## Props

```typescript
type ProgressBarProps = {
  className?: string;
  /** Determinate (known progress) or Indeterminate (unknown duration) */
  linearType?: "Determinate" | "Indeterminate";
  /** Progress value 0–100 (only used when linearType = "Determinate") */
  value?: number;
  /** Show the numeric percentage label */
  showLabel?: boolean;
};
```

---

## Types

| Type | Description | When to use |
|------|-------------|-------------|
| **Determinate** | Bar fills from 0 % to 100 %, optionally showing a numeric label | When the completion percentage is known (e.g., file upload, image loading) |
| **Indeterminate** | Animated segment runs continuously across the track | When progress isn't detectable, or it's unnecessary to show how long an activity will take |

---

## Behavior & Interactions

- **Determinate**: The indicator increases in width from 0 to 100 % of the container, in sync with the process's progress.
- **Indeterminate**: The indicator runs continuously along the container until the process is complete.

---

## Language Support

Progress indicators naturally adapt to the reading direction of the local language:

| Direction | Reading | Progress direction |
|-----------|---------|-------------------|
| **LTR** | Western languages (e.g., English, French) | Fills left → right |
| **RTL** | Right-to-left languages (e.g., Arabic) | Fills right → left |

---

## Design Tokens

### Progress Bar

| Token | Default value | Usage |
|-------|--------------|-------|
| `progress-bar/bar/progress` | `#ffffff` | Progress fill color |
| `progress-bar/bar/container` | `#333333` | Track / container background |
| `progress-bar/text/default` | `#d8d8d8` | Percentage label text color |

### Colors

| Token | Default value | Usage |
|-------|--------------|-------|
| `colors/white` | `#ffffff` | General white |
| `colors/black` | `#000000` | General black |
| `colors/text/disabled` | `#4d4d4d` | Disabled text |
| `colors/surface/white` | `#000000` | Surface color (dark mode inverted) |
| `colors/border/medium` | `#939292` | Medium border |
| `colors/neutral/white` | `#ffffff` | Neutral white |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font/family/title` | `ABChanel Corpo 2022` | Label / heading font |
| `font/size/md` | `16` | Base font size |
| `font/size/sm` | `14` | Percentage label font size |
| `font/weight/bold` | `bold` | Bold weight |

### Typography Styles

| Style | Family | Weight | Size | Line height | Letter spacing |
|-------|--------|--------|------|-------------|----------------|
| `heading/h4` | `font/family/title` | bold | 16 | 100% | 0.1 px |
| `heading/h5` | `font/family/title` | bold | 14 | 100% | 0.1 px |

### Spacing

| Token | Value (px) |
|-------|-----------|
| `size/gap/xs` | `8` |
| `size/gap/md` | `16` |

---

## Usage Examples

### Determinate — with percentage label

```tsx
<ProgressBar
  linearType="Determinate"
  value={75}
  showLabel
/>
// Renders: [████████████████████░░░░░] 75%
```

### Determinate — without label

```tsx
<ProgressBar
  linearType="Determinate"
  value={33}
/>
```

### Indeterminate

```tsx
<ProgressBar
  linearType="Indeterminate"
/>
// Renders an animated running indicator with no percentage
```

### RTL context (Arabic)

```tsx
<div dir="rtl">
  <ProgressBar
    linearType="Determinate"
    value={50}
    showLabel
  />
</div>
// Progress fills from right to left
```

### In a product image gallery (group progress)

```tsx
// Show overall gallery loading progress — not per-image progress
<ProgressBar linearType="Determinate" value={galleryProgress} showLabel />
<ProductImageGallery images={images} />
```

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use **determinate** indicators when progress can be measured | Don't use indeterminate indicators for known durations |
| Indicate **overall progress** of a group of items (e.g., gallery load) | Don't show the progress of each individual item in a group separately |
| Adapt progress direction to the **reading direction** (LTR / RTL) | Don't use a fixed left-to-right direction in RTL contexts |
| Use the design tokens — colors are designed for accessibility | Don't override bar colors manually |

---

## Accessibility

### General
- Do **not** use other colors — they have been designed to be consistent and accessible.
- Provide clear and concise **labels for screen readers** (e.g., `aria-label="Loading, 33%"` or `role="progressbar"` with `aria-valuenow`).

### ARIA attributes

```tsx
// Determinate
<div
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Loading images"
>
  {/* bar content */}
</div>

// Indeterminate
<div
  role="progressbar"
  aria-busy="true"
  aria-label="Loading, please wait"
>
  {/* animated bar */}
</div>
```

---

## Figma Source — Variable Definitions

> Raw token data from **node 8758:5539** (`get_variable_defs`)

```json
{
  "colors/white": "#ffffff",
  "colors/text/disabled": "#4d4d4d",
  "font/size/md": "16",
  "font/weight/bold": "bold",
  "font/family/title": "ABChanel Corpo 2022",
  "heading/h4": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "progress-bar/bar/progress": "#ffffff",
  "size/gap/md": "16",
  "progress-bar/bar/container": "#333333",
  "progress-bar/text/default": "#d8d8d8",
  "font/size/sm": "14",
  "heading/h5": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/sm, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "size/gap/xs": "8",
  "colors/surface/white": "#000000",
  "colors/border/medium": "#939292",
  "colors/black": "#000000",
  "colors/neutral/white": "#ffffff"
}
```

---

## Figma Source — Design Context

> Asset URLs and component code extracted from **node 8760:5612** (`get_design_context`)

### Assets

```ts
const imgImage   = "https://www.figma.com/api/mcp/asset/643a569b-5e8c-40df-a096-f1f9322b67f7"; // product image 1
const imgImage1  = "https://www.figma.com/api/mcp/asset/5eb7467a-526f-4013-8f83-ab334fdcff2a"; // product image 2
const imgVector  = "https://www.figma.com/api/mcp/asset/34200f23-e329-41b7-9656-776cc09d295a"; // chevron-left (back icon)
const imgVector2 = "https://www.figma.com/api/mcp/asset/75d94e7d-5922-410c-aceb-3a86219df44b"; // annotation arrow
const imgVector3 = "https://www.figma.com/api/mcp/asset/3ed509e5-d224-4a32-b1e5-6ca6f8af472d"; // annotation arrow
const imgRight   = "https://www.figma.com/api/mcp/asset/b0bfd44d-e072-4260-9020-b9d93d9032bc"; // iOS status bar right
const imgLens    = "https://www.figma.com/api/mcp/asset/f1c731a6-e7b8-4de6-860b-28b06dcab329"; // iOS camera lens
```

### Component Code

```tsx
import React from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

type ProgressBarProps = {
  className?: string;
  /** Bar type */
  linearType?: "Determinate" | "Indeterminate";
  /** Progress value 0–100 (Determinate only) */
  value?: number;
  /** Show numeric percentage label */
  showLabel?: boolean;
};

// ─── Determinate ───────────────────────────────────────────────────────────

function ProgressBarDeterminate({
  className = "",
  value = 0,
  showLabel = true,
}: {
  className?: string;
  value?: number;
  showLabel?: boolean;
}) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`progress-bar-determinate flex items-center gap-4 w-full ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Track */}
      <div
        className="flex-1 min-w-0 relative"
        style={{
          backgroundColor: "var(--progress-bar-bar-container, #333333)",
          height: "4px",
        }}
      >
        {/* Fill */}
        <div
          style={{
            backgroundColor: "var(--progress-bar-bar-progress, #ffffff)",
            height: "4px",
            width: `${clamped}%`,
            borderRadius: "0 4px 4px 0",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Percentage label */}
      {showLabel && (
        <span
          style={{
            fontFamily:
              "var(--font-family-title, 'ABChanel Corpo 2022', sans-serif)",
            fontWeight: "var(--font-weight-bold, bold)",
            fontSize: "var(--font-size-sm, 14px)",
            color: "var(--progress-bar-text-default, #d8d8d8)",
            letterSpacing: "0.1px",
            whiteSpace: "nowrap",
          }}
        >
          {clamped}%
        </span>
      )}
    </div>
  );
}

// ─── Indeterminate ─────────────────────────────────────────────────────────

function ProgressBarIndeterminate({ className = "" }: { className?: string }) {
  return (
    <div
      className={`progress-bar-indeterminate flex items-center w-full ${className}`}
      role="progressbar"
      aria-busy="true"
      aria-label="Loading, please wait"
    >
      <div
        className="flex-1 min-w-0 relative overflow-hidden"
        style={{
          backgroundColor: "var(--progress-bar-bar-container, #333333)",
          height: "4px",
        }}
      >
        {/* Animated fill — use CSS @keyframes in your global stylesheet */}
        <div
          className="progress-indeterminate-fill"
          style={{
            position: "absolute",
            backgroundColor: "var(--progress-bar-bar-progress, #ffffff)",
            height: "4px",
            width: "90px",
            top: 0,
            animation: "progressIndeterminate 1.4s infinite linear",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main ProgressBar ──────────────────────────────────────────────────────

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = "",
  linearType = "Indeterminate",
  value = 0,
  showLabel = true,
}) => {
  if (linearType === "Determinate") {
    return (
      <ProgressBarDeterminate
        className={className}
        value={value}
        showLabel={showLabel}
      />
    );
  }
  return <ProgressBarIndeterminate className={className} />;
};

export { ProgressBar, ProgressBarDeterminate, ProgressBarIndeterminate };
export type { ProgressBarProps };

/*
 * Required CSS animation (add to global stylesheet):
 *
 * @keyframes progressIndeterminate {
 *   0%   { left: -90px; }
 *   100% { left: 100%; }
 * }
 */
```
