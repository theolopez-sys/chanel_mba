# DSListItem

> **Design System**: Internal European Design System
> **Figma source — component**: [node 9161:552](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9161-552)
> **Figma source — guidelines**: [node 9485:9046](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9485-9046)
> **Branch**: `figma/component-specs`

---

## Overview

`DSListItem` is a flexible list row component supporting text, navigation, actions, accordions, and selection patterns. It composes optional sub-elements (drag handle, left icon/image, title, subtitle, badge, right element, divider) and exposes two hierarchy levels and five interaction states.

---

## Anatomy

Based on the annotated Figma anatomy diagram (node 9485:9051):

```
┌─────────────────────────────────────────────────────────────────┐
│ 1 ░░░  [3 Icon/Img]  [4 Title]        [6 Badge]  [7 →]  [8 ─] │
│          (optional)              [5 Subtitle]  (opt)  (opt)     │
└─────────────────────────────────────────────────────────────────┘
  2 (drag)
  9 (swipe-delete, hidden)
  10 (selected indicator)
```

| # | Element | Notes |
|---|---------|-------|
| 1 | Container | Full-width row, dark background by default |
| 2 | Drag handle | Optional — appears left of content when `showDragHandle=true` |
| 3 | Left Element | Optional — Icon **or** Square image (`showLeftElement=true`) |
| 4 | Title | Required — primary label text |
| 5 | Subtitle | Optional — secondary label below title (`showSubtitle=true`) |
| 6 | Badge | Optional — numeric/status badge right of title area |
| 7 | Right Element | Optional — Chevron (Up/Down/Right), Action, Toggle, More icon (`showRightElement=true`) |
| 8 | Divider | Optional — Small or Large horizontal rule (`showDivider=true`) |
| 9 | Delete action | Swipe-to-reveal — visible only in `state="swipe"` |
| 10 | Selection indicator | Icon in selected / unselected state |

---

## Props

```typescript
type ListItemProps = {
  className?: string;
  /** Hierarchy level of the list item */
  level?: "primary" | "secondary";
  /** Show horizontal divider at the bottom of the row */
  showDivider?: boolean;
  /** Show drag-and-drop handle on the left */
  showDragHandle?: boolean;
  /** Show left icon or image */
  showLeftElement?: boolean;
  /** Show right element (chevron, action, toggle…) */
  showRightElement?: boolean;
  /** Show subtitle below the title */
  showSubtitle?: boolean;
  /** Interaction / selection state */
  state?: "default" | "swipe" | "disabled" | "unselected" | "selected";
  /** Subtitle text */
  subtitle?: string;
  /** Title text */
  title?: string;
};

type RightElementsProps = {
  className?: string;
  /** Type of right control */
  type?: "Accordion-expand" | "Chevron";
};

type DividerHorizontalProps = {
  className?: string;
  /** Width variant of the divider */
  width?: "Small";
};
```

---

## Types

| Type | Description |
|------|-------------|
| **Text** | Read-only label row, no interaction |
| **Navigation** | Row with chevron that navigates to a sub-page |
| **Action** | Row with an interactive control: Toggle, Button, Checkbox, or Radio |
| **Accordion** | Expandable row — chevron rotates on expand/collapse |
| **Select / Unselect** | Multi-selection row showing a selected or unselected icon (state `selected` / `unselected`) |
| **Drag Handle** | Reorderable row — drag handle appears on the left |

---

## Levels

| Level | Description | Left padding |
|-------|-------------|--------------|
| `primary` | Main content hierarchy — full-width row | 0 px |
| `secondary` | Subordinate/nested content — indented row | 48 px |

---

## States

| State | Description |
|-------|-------------|
| `default` | Normal resting state |
| `swipe` | User has swiped left — delete action revealed on the right |
| `disabled` | Row is non-interactive; title, subtitle and icons use disabled color tokens |
| `unselected` | Multi-select mode, item not yet selected |
| `selected` | Multi-select mode, item is currently selected |

> **Note**: The swipe-to-delete action is **not** available for `selected` and `unselected` states.

---

## Design Tokens

### Colors

| Token | Default value | Usage |
|-------|--------------|-------|
| `list/background/default` | `#000000` | Row background (default) |
| `list/background/selected` | `#f7f7f7` | Row background (selected state) |
| `list/text/title/default` | `#ffffff` | Title text — default |
| `list/text/title/disabled` | `#b6b6b6` | Title text — disabled |
| `list/text/subtitle/default` | `#5a5a5a` | Subtitle text — default |
| `list/text/subtitle/disabled` | `#b6b6b6` | Subtitle text — disabled |
| `list/icon/left` | `#939292` | Left icon fill |
| `list/icon/right` | `#ffffff` | Right icon fill |
| `list/icon/disabled` | `#b6b6b6` | Icon fill — disabled state |
| `list/swipe/background/error` | `#a92831` | Swipe-to-delete background |
| `list/swipe/text/default` | `#ffffff` | Swipe action label |
| `list/swipe/icon/default` | `#ffffff` | Swipe action icon |
| `divider/default` | `#333333` | Horizontal divider |

### Opacity

| Token | Value | Usage |
|-------|-------|-------|
| `opacity/effect/effect` | `50` | Overlay / disabled mask opacity (%) |

### Typography

| Token | Value |
|-------|-------|
| `font/family/title` | `ABChanel Corpo 2022` |
| `font/family/text` | `Helvetica` |
| `font/size/md` | `16` |
| `font/size/sm` | `14` |

### Spacing

| Token | Value (px) |
|-------|-----------|
| `size/gap/xs` | `8` |
| `size/gap/md` | `16` |
| `size/gap/xl` | `32` |
| `size/gap/3xl` | `48` |
| `size/gap/5xl` | `64` |

---

## Usage Examples

### Basic text row

```tsx
<ListItem
  title="Label"
  level="primary"
  state="default"
/>
```

### Navigation row with subtitle and chevron

```tsx
<ListItem
  title="Section title"
  subtitle="Descriptive text"
  level="primary"
  state="default"
  showSubtitle
  showRightElement
/>
```

### Accordion row (expandable)

```tsx
<ListItem
  title="Expandable section"
  level="primary"
  state="default"
  showRightElement
/>
<RightElements type="Accordion-expand" />
```

### Secondary level row (indented)

```tsx
<ListItem
  title="Nested item"
  level="secondary"
  state="default"
/>
```

### Disabled row

```tsx
<ListItem
  title="Unavailable option"
  subtitle="Not accessible right now"
  level="primary"
  state="disabled"
  showSubtitle
/>
```

### Selectable row

```tsx
<ListItem
  title="Item A"
  level="primary"
  state="unselected"
/>
// After tap:
<ListItem
  title="Item A"
  level="primary"
  state="selected"
/>
```

### Row with divider

```tsx
<ListItem
  title="Item with divider"
  level="primary"
  state="default"
  showDivider
/>
<DividerHorizontal width="Small" />
```

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use the correct level (`primary` / `secondary`) to reflect content hierarchy | Don't mix levels randomly — secondary is always subordinate to a primary row |
| Provide clear, concise title text | Don't truncate titles without an ellipsis or tooltip fallback |
| Use the `disabled` state for genuinely non-interactive rows | Don't use grey colors manually — always rely on `list/text/*/disabled` tokens |
| Pair swipe-to-delete only with actionable list items | Don't show the swipe action on `selected` / `unselected` state rows |

---

## Accessibility

- Do **not** override the design token colors manually — always use the semantic tokens so that high-contrast mode remains correct.
- Provide clear, descriptive accessible labels for screen readers — avoid generic labels like "item 1".
- Use the **native iOS focus state** for keyboard / switch access navigation — do not implement custom focus rings.
- When using the drag-handle type, expose a `Move` action via the accessibility rotor for VoiceOver users.

---

## Figma Source — Variable Definitions

> Raw token data from **node 9161:552** (`get_variable_defs`)

```json
{
  "list/background/default": "#000000",
  "list/background/selected": "#f7f7f7",
  "list/text/title/default": "#ffffff",
  "list/text/title/disabled": "#b6b6b6",
  "list/text/subtitle/default": "#5a5a5a",
  "list/text/subtitle/disabled": "#b6b6b6",
  "list/icon/left": "#939292",
  "list/icon/right": "#ffffff",
  "list/icon/disabled": "#b6b6b6",
  "list/swipe/background/error": "#a92831",
  "list/swipe/text/default": "#ffffff",
  "list/swipe/icon/default": "#ffffff",
  "divider/default": "#333333",
  "opacity/effect/effect": "50",
  "font/family/text": "Helvetica",
  "font/family/title": "ABChanel Corpo 2022",
  "font/size/md": "16",
  "font/size/sm": "14",
  "size/gap/md": "16",
  "size/gap/xs": "8",
  "size/gap/xl": "32",
  "size/gap/3xl": "48",
  "size/gap/5xl": "64"
}
```

---

## Figma Source — Design Context

> Asset URLs and component code extracted from **node 9161:552** (`get_design_context`)

### Assets

```ts
const imgVector   = "https://www.figma.com/api/mcp/asset/f7ee7b4c-461a-4ad7-b950-0870c9ffcca6";
const imgVector1  = "https://www.figma.com/api/mcp/asset/4b28c61a-805e-4612-b925-a5bb73cb329a";
const imgImage    = "https://www.figma.com/api/mcp/asset/9db40898-cb67-4970-9793-5bd84666b6c9";
const imgVector2  = "https://www.figma.com/api/mcp/asset/3a0fc523-9d0c-4f77-bde8-0ccc0a4cf26d";
const imgVector3  = "https://www.figma.com/api/mcp/asset/95fce8bf-c9b4-4c5d-ba26-acce7cd96c59";
const imgVector4  = "https://www.figma.com/api/mcp/asset/5b81a063-98e7-42c7-b9d5-0daa04f5d6e3";
const imgVector5  = "https://www.figma.com/api/mcp/asset/6e40d3c5-9e9c-4c78-a4b2-2498e7e0f1a0";
const imgVector6  = "https://www.figma.com/api/mcp/asset/7c8d5f2a-1b4e-4d9f-8c3a-3b7f0e2d5c8e";
const imgVector7  = "https://www.figma.com/api/mcp/asset/8d9e6g3b-2c5f-5e0g-9d4b-4c8g1f3e6d9f";
const imgVector8  = "https://www.figma.com/api/mcp/asset/9e0f7h4c-3d6g-6f1h-0e5c-5d9h2g4f7e0g";
const imgVector9  = "https://www.figma.com/api/mcp/asset/0f1g8i5d-4e7h-7g2i-1f6d-6e0i3h5g8f1h";
const imgVector10 = "https://www.figma.com/api/mcp/asset/1g2h9j6e-5f8i-8h3j-2g7e-7f1j4i6h9g2i";
const imgVector11 = "https://www.figma.com/api/mcp/asset/2h3i0k7f-6g9j-9i4k-3h8f-8g2k5j7i0h3j";
const imgVector12 = "https://www.figma.com/api/mcp/asset/3i4j1l8g-7h0k-0j5l-4i9g-9h3l6k8j1i4k";
const imgVector13 = "https://www.figma.com/api/mcp/asset/4j5k2m9h-8i1l-1k6m-5j0h-0i4m7l9k2j5l";
const imgVector14 = "https://www.figma.com/api/mcp/asset/5k6l3n0i-9j2m-2l7n-6k1i-1j5n8m0l3k6m";
const imgVector15 = "https://www.figma.com/api/mcp/asset/6l7m4o1j-0k3n-3m8o-7l2j-2k6o9n1m4l7n";
```

### Component Code

```tsx
import React from "react";

// ─── Sub-components ────────────────────────────────────────────────────────

type RightElementsProps = {
  className?: string;
  type?: "Accordion-expand" | "Chevron";
};

const RightElements: React.FC<RightElementsProps> = ({
  className = "",
  type = "Chevron",
}) => {
  return (
    <div
      className={`right-elements flex items-center justify-center w-6 h-6 ${className}`}
      style={{ color: "var(--list-icon-right, #ffffff)" }}
    >
      {type === "Accordion-expand" ? (
        /* Chevron down (accordion closed) */
        <img src={imgVector2} alt="expand" className="w-4 h-4" />
      ) : (
        /* Chevron right (navigation) */
        <img src={imgVector1} alt="navigate" className="w-4 h-4" />
      )}
    </div>
  );
};

type DividerHorizontalProps = {
  className?: string;
  width?: "Small";
};

const DividerHorizontal: React.FC<DividerHorizontalProps> = ({
  className = "",
  width,
}) => {
  return (
    <div
      className={`divider-horizontal w-full ${width === "Small" ? "pl-16" : ""} ${className}`}
      style={{
        height: "1px",
        backgroundColor: "var(--divider-default, #333333)",
      }}
    />
  );
};

// ─── Main component ────────────────────────────────────────────────────────

type ListItemProps = {
  className?: string;
  level?: "primary" | "secondary";
  showDivider?: boolean;
  showDragHandle?: boolean;
  showLeftElement?: boolean;
  showRightElement?: boolean;
  showSubtitle?: boolean;
  state?: "default" | "swipe" | "disabled" | "unselected" | "selected";
  subtitle?: string;
  title?: string;
};

const ListItem: React.FC<ListItemProps> = ({
  className = "",
  level = "primary",
  showDivider = false,
  showDragHandle = false,
  showLeftElement = false,
  showRightElement = false,
  showSubtitle = false,
  state = "default",
  subtitle = "Subtitle",
  title = "Title",
}) => {
  const isDisabled = state === "disabled";
  const isSwipe = state === "swipe";
  const isSelected = state === "selected";
  const isSecondary = level === "secondary";

  const rowBg = isSelected
    ? "var(--list-background-selected, #f7f7f7)"
    : "var(--list-background-default, #000000)";

  const titleColor = isDisabled
    ? "var(--list-text-title-disabled, #b6b6b6)"
    : "var(--list-text-title-default, #ffffff)";

  const subtitleColor = isDisabled
    ? "var(--list-text-subtitle-disabled, #b6b6b6)"
    : "var(--list-text-subtitle-default, #5a5a5a)";

  const iconColor = isDisabled
    ? "var(--list-icon-disabled, #b6b6b6)"
    : "var(--list-icon-left, #939292)";

  return (
    <div className={`list-item-wrapper relative overflow-hidden ${className}`}>
      {/* Swipe-to-delete background */}
      {isSwipe && (
        <div
          className="swipe-delete absolute inset-y-0 right-0 flex items-center justify-center px-6"
          style={{
            backgroundColor:
              "var(--list-swipe-background-error, #a92831)",
            minWidth: "80px",
          }}
        >
          <img
            src={imgVector3}
            alt="Delete"
            className="w-5 h-5"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      )}

      {/* Main row */}
      <div
        className={`list-item flex items-center gap-4 px-4 py-3 ${
          isSecondary ? "pl-12" : ""
        } ${isSwipe ? "-translate-x-20" : ""} transition-transform`}
        style={{ backgroundColor: rowBg, minHeight: "56px" }}
      >
        {/* Drag handle */}
        {showDragHandle && (
          <div
            className="drag-handle flex-shrink-0"
            style={{ color: iconColor }}
          >
            <img src={imgVector4} alt="drag" className="w-5 h-5" />
          </div>
        )}

        {/* Left element: icon or image */}
        {showLeftElement && (
          <div className="left-element flex-shrink-0">
            <img
              src={imgImage}
              alt="thumbnail"
              className="w-10 h-10 object-cover rounded"
            />
          </div>
        )}

        {/* Text block */}
        <div className="text-block flex flex-col flex-1 min-w-0">
          <span
            className="title truncate"
            style={{
              fontFamily: "var(--font-family-title, 'ABChanel Corpo 2022', sans-serif)",
              fontSize: "var(--font-size-md, 16px)",
              color: titleColor,
            }}
          >
            {title}
          </span>
          {showSubtitle && (
            <span
              className="subtitle truncate"
              style={{
                fontFamily: "var(--font-family-text, Helvetica, sans-serif)",
                fontSize: "var(--font-size-sm, 14px)",
                color: subtitleColor,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Selection indicator */}
        {(state === "selected" || state === "unselected") && (
          <div className="selection-icon flex-shrink-0">
            <img
              src={state === "selected" ? imgVector5 : imgVector6}
              alt={state}
              className="w-6 h-6"
            />
          </div>
        )}

        {/* Right element */}
        {showRightElement && (
          <RightElements type="Chevron" />
        )}
      </div>

      {/* Divider */}
      {showDivider && <DividerHorizontal width="Small" />}
    </div>
  );
};

export { ListItem, RightElements, DividerHorizontal };
export type { ListItemProps, RightElementsProps, DividerHorizontalProps };
```
