# DSOverlay

> **Design System**: Internal European Design System
> **Figma source — variable defs**: [node 10127:4911](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=10127-4911)
> **Figma source — guidelines**: [node 10127:4760](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=10127-4760)
> **Branch**: `figma/component-specs`

---

## Overview

**Overlays** are used to draw attention to foreground elements like dialogs, bottom sheets, or menus by dimming and isolating the background content. They are used to temporarily interrupt the current flow without fully navigating away from the screen underneath.

---

## Anatomy

Based on the annotated Figma anatomy diagram (node 10127:4765):

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ① Overlay                                                  │
│   (semi-transparent full-screen dim layer)                   │
│                                                              │
│         ┌──────────────────────────────┐                    │
│         │   Foreground component       │                    │
│         │   (dialog / bottom sheet /   │                    │
│         │    menu…)                    │                    │
│         └──────────────────────────────┘                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| # | Element | Notes |
|---|---------|-------|
| 1 | Overlay | Full-screen semi-transparent layer sitting beneath the active foreground component |

---

## Props

```typescript
type OverlayProps = {
  className?: string;
  /** Whether the overlay is visible */
  visible?: boolean;
  /** Apply backdrop blur (used for bottom sheets) */
  blur?: boolean;
  /** Callback fired when the overlay is tapped */
  onDismiss?: () => void;
  /** Content rendered above the overlay (dialog, sheet, menu…) */
  children?: React.ReactNode;
};
```

---

## Usage

- **Focuses user attention** on the active component.
- **Prevents interaction** with background UI.
- The content behind should still be **recognizable** — not fully obscured.

### When to use

| Context | Notes |
|---------|-------|
| Modal / Dialog | Overlay dims the page while the dialog is open |
| Bottom Sheet | Overlay + backdrop blur covers the page beneath the sheet |
| Dropdown / Menu | Lightweight overlay traps focus and dismisses on tap-outside |
| Confirmation prompt | Overlay blocks all background interaction until resolved |

---

## Behavior & Interactions

- **Position**: Appears beneath the active component, covering the rest of the screen.
- **Dismissal**: Dismisses the foreground element when tapped — if the component supports dismissal.
- **Color**: Uses a semi-transparent color layer (`overlay/color/color`).
- **Scroll lock**: The content underneath the overlay is **scroll-locked** while the overlay is active.

### Overlay variants

| Variant | Token | Effect |
|---------|-------|--------|
| Standard | `overlay/color/color` (`#202020cc`) | Dark semi-transparent dim |
| Stronger | `transparency/overlay/stronger` (`rgba(32,32,32,0.8)`) | Darker dim for modal dialogs |
| Bottom sheet | `overlay/color/color` + `bottom-sheet/overlay/blur` (4 px) | Dim + backdrop blur |

---

## Design Tokens

### Overlay

| Token | Default value | Usage |
|-------|--------------|-------|
| `overlay/color/color` | `#202020cc` (≈ 80% opacity) | Overlay background color |

### Colors

| Token | Default value | Usage |
|-------|--------------|-------|
| `colors/white` | `#ffffff` | General white |
| `colors/black` | `#000000` | General black |
| `colors/text/disabled` | `#4d4d4d` | Disabled text color |
| `colors/surface/white` | `#ffffff` | White surface |
| `colors/surface/fake white` | `#1d1d1d` | Dark mode fake-white surface |
| `colors/border/medium` | `#939292` | Medium border |
| `colors/neutral/lowest` | `#f7f7f7` | Lightest neutral background |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font/family/title` | `ABChanel Corpo 2022` | Heading font |
| `font/size/md` | `16` | Base font size |
| `font/weight/bold` | `bold` | Bold weight |

### Typography Styles

| Style | Family | Weight | Size | Line height | Letter spacing |
|-------|--------|--------|------|-------------|----------------|
| `heading/h4` | `font/family/title` | bold | 16 | 100% | 0.1 px |

---

## Usage Examples

### Standard overlay with modal

```tsx
<Overlay visible={isOpen} onDismiss={handleDismiss}>
  <Modal title="End mirror session">
    <p>Would you like to end this client's mirror session?</p>
    <div className="actions">
      <Button variant="secondary" onClick={handleDismiss}>No</Button>
      <Button variant="primary" onClick={handleConfirm}>Yes</Button>
    </div>
  </Modal>
</Overlay>
```

### Bottom sheet overlay (with blur)

```tsx
<Overlay visible={isSheetOpen} blur onDismiss={closeSheet}>
  <BottomSheet title="Client's basket">
    {/* basket content */}
  </BottomSheet>
</Overlay>
```

### Non-dismissible overlay (blocking confirmation)

```tsx
<Overlay visible={isPending}>
  {/* No onDismiss — tapping the overlay does nothing */}
  <Dialog title="Processing…" />
</Overlay>
```

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Allow tapping the overlay to dismiss the foreground when the action is optional | Don't allow background interaction unless explicitly needed (e.g., non-blocking toast) |
| Keep background content recognizable through the semi-transparent layer | Don't use a fully opaque overlay — content behind should remain visible |
| Lock scroll on background content while the overlay is active | Don't allow background scrolling while a blocking overlay is displayed |
| Use backdrop blur for bottom sheets to visually separate layers | Don't apply blur to standard modals — reserve blur for sheet-type components |

---

## Accessibility

- Trap focus within the foreground component while the overlay is visible.
- Provide an accessible label or `aria-modal="true"` on the foreground component.
- Ensure the overlay has `aria-hidden="true"` so screen readers do not read the dimmed background.
- Support `Escape` key to dismiss when the action is optional.

---

## Figma Source — Variable Definitions

> Raw token data from **node 10127:4911** (`get_variable_defs`)

```json
{
  "colors/white": "#ffffff",
  "colors/text/disabled": "#4d4d4d",
  "font/size/md": "16",
  "font/weight/bold": "bold",
  "font/family/title": "ABChanel Corpo 2022",
  "heading/h4": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "overlay/color/color": "#202020cc",
  "colors/surface/fake white": "#1d1d1d",
  "colors/border/medium": "#939292",
  "colors/surface/white": "#ffffff",
  "colors/black": "#000000",
  "colors/neutral/lowest": "#f7f7f7"
}
```

---

## Figma Source — Design Context

> Asset URLs and component code extracted from **node 10127:4765** (Anatomy) and **node 10127:4807** (General principles)

### Assets

```ts
// Product images (anatomy demo)
const imgImage   = "https://www.figma.com/api/mcp/asset/108c4bea-e851-4d8f-b89a-0546ea8a07b6";
const imgImage1  = "https://www.figma.com/api/mcp/asset/13a6888d-6d61-480b-bce8-e3b0cfd67dd6";
const imgImage2  = "https://www.figma.com/api/mcp/asset/7223733a-ee71-4c55-8697-345b721c395f";
const imgImage6  = "https://www.figma.com/api/mcp/asset/a149185d-cf09-4b1f-a0ce-7401cb8f813d";
// Annotation arrow
const imgVector12 = "https://www.figma.com/api/mcp/asset/275fe998-0f85-43d6-8331-1fd5ec4a6457";
// UI icons
const imgVector  = "https://www.figma.com/api/mcp/asset/2a5e46ea-a920-441a-aa81-50e9aab31781"; // boutique icon
const imgVector1 = "https://www.figma.com/api/mcp/asset/90f003d3-a75e-4418-a6c6-d47766820c78"; // boutique store icon
const imgVector2 = "https://www.figma.com/api/mcp/asset/309c3d6a-54a4-4845-8d17-89c97f39d21f"; // person-sale icon
const imgVector3 = "https://www.figma.com/api/mcp/asset/8cfb6d2b-f946-446b-90fa-7ee570fa8a69"; // person icon
const imgVector4 = "https://www.figma.com/api/mcp/asset/ddf6d62d-3ca0-40a6-ac02-226284a9f73c"; // warning/badge icon
const imgVector5 = "https://www.figma.com/api/mcp/asset/e0a575a1-1bda-4036-904e-6c2e8dd0b3e3"; // close icon
const imgVector6 = "https://www.figma.com/api/mcp/asset/8dd1b2f8-324f-4c3a-8144-2159eac05679"; // chevron icon
const imgVector7 = "https://www.figma.com/api/mcp/asset/c4a4d2e8-92e7-4369-a958-271c895a89b5"; // warning triangle
const imgVector8 = "https://www.figma.com/api/mcp/asset/88b7aca1-4304-47bf-b2e4-fc9f929779a4"; // add/gift icon
const imgVector9 = "https://www.figma.com/api/mcp/asset/127f808e-0888-46a8-be22-d8e4b58e307b"; // arrow-circlepath
const imgAnimation        = "https://www.figma.com/api/mcp/asset/6a373e24-e2f1-474e-8114-bcfb0b34a3b9";
const imgFrame427319149   = "https://www.figma.com/api/mcp/asset/11ebac46-8d16-420e-a94e-54a49f994077";
const imgThumb            = "https://www.figma.com/api/mcp/asset/1a26493f-c69f-4425-96d6-58f3db94aed9";
```

### Component Code

```tsx
import React from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

type OverlayProps = {
  className?: string;
  /** Whether the overlay is currently visible */
  visible?: boolean;
  /** Apply backdrop blur — used for bottom sheet overlays */
  blur?: boolean;
  /** Callback fired when user taps the overlay (optional dismissal) */
  onDismiss?: () => void;
  /** Foreground content rendered above the overlay */
  children?: React.ReactNode;
};

// ─── Component ─────────────────────────────────────────────────────────────

const Overlay: React.FC<OverlayProps> = ({
  className = "",
  visible = false,
  blur = false,
  onDismiss,
  children,
}) => {
  if (!visible) return null;

  return (
    <div
      className={`overlay-root fixed inset-0 z-50 flex items-end justify-center ${className}`}
      aria-hidden="false"
    >
      {/* Semi-transparent dim layer */}
      <div
        className="overlay-backdrop absolute inset-0"
        onClick={onDismiss}
        style={{
          backgroundColor: "var(--overlay-color-color, rgba(32, 32, 32, 0.8))",
          backdropFilter: blur ? "blur(4px)" : "none",
          WebkitBackdropFilter: blur ? "blur(4px)" : "none",
        }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="overlay-content relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export { Overlay };
export type { OverlayProps };
```

### General Principles Code

```tsx
// From node 10127:4807 — guidelines text section
export function OverlayGuidelinesText() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "64px",
      }}
    >
      {/* General principles */}
      <p style={{ fontSize: "20px", lineHeight: "1.4" }}>
        <strong>Overlays</strong> are used to draw attention to foreground
        elements like dialogs, bottom sheets, or menus by dimming and isolating
        the background content. They are used to temporarily interrupt the
        current flow without fully navigating away from the screen underneath.
      </p>

      {/* Usage */}
      <section>
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Usage</h3>
        <ul style={{ fontSize: "20px", lineHeight: "1.4" }}>
          <li>Focuses user attention on the active component.</li>
          <li>Prevents interaction with background UI.</li>
          <li>
            The content behind should still be <strong>recognizable</strong>.
          </li>
        </ul>
      </section>

      {/* Behavior & Interactions */}
      <section>
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Behavior &amp; Interactions
        </h3>
        <ul style={{ fontSize: "20px", lineHeight: "1.4" }}>
          <li>
            Appears beneath the active component, covering the rest of the
            screen.
          </li>
          <li>
            Dismisses the foreground element when tapped (if the component
            supports dismissal).
          </li>
          <li>Use a semi-transparent color layer.</li>
          <li>
            The content underneath the overlay is <strong>scroll-locked</strong>.
          </li>
        </ul>
      </section>
    </div>
  );
}
```
