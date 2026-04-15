# DSNavigationBar

> **Design System**: Internal European Design System
> **Figma source — variable defs**: [node 9300:19031](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9300-19031)
> **Figma source — guidelines**: [node 8895:5492](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8895-5492)
> **Branch**: `figma/component-specs`

---

## Overview

The **Navigation Bar** is a persistent UI element positioned at the top of the screen. It provides structure, context, and access to key actions or navigation. It helps users understand where they are and what they can do next.

**Usage contexts:**
- Displaying screen title or section name
- Providing navigation affordances (e.g., back button or menu)
- Offering contextual actions (e.g., search, share, edit)
- Hosting secondary features like tabs or segmented controls

---

## Anatomy

Based on the annotated Figma anatomy diagram (node 8895:5492):

```
┌──────────────────────────────────────────────────────────────┐
│ [1 ←]      [2 Label / Title]         [4 Icon1] [5 Icon2]    │
│             [3 Caption label]                   [6 Icon3]    │
└──────────────────────────────────────────────────────────────┘
```

| # | Element | Notes |
|---|---------|-------|
| 1 | Back icon | Optional — chevron left for back navigation |
| 2 | Label | Main title of the current screen |
| 3 | Caption label | Optional — short subtitle below the title |
| 4 | Icon 1 | Optional — first right-side action icon |
| 5 | Icon 2 | Optional — second right-side action icon |
| 6 | Icon 3 | Optional — third right-side action icon (More actions type only) |

---

## Props

```typescript
type NavigationBarProps = {
  className?: string;
  /** Navigation bar type */
  type?: "standard" | "more-actions";
  /** Main title label */
  label?: string;
  /** Optional subtitle below the title */
  captionLabel?: string;
  /** Show the back (chevron left) icon */
  showBackIcon?: boolean;
  /** Right-side action icons — max 2 for standard, max 3 for more-actions */
  rightActions?: React.ReactNode[];
  /** Callback when back icon is pressed */
  onBack?: () => void;
};
```

---

## Types

| Type | Description | Max right icons | Shows label |
|------|-------------|:--------------:|:-----------:|
| **Standard** | Title with optional back icon and up to 2 action icons | 2 | ✅ |
| **More actions** | Action-focused bar with up to 3 right icons — label is hidden | 3 | ❌ |

> When you need to add **3 actions or more**, use the **More actions** type — the label disappears to give room to the icons.

---

## Capitalization

Use **First Letter Capitalization** — capitalize the first letter of every word in the title.

```
✅  Client Profile
✅  My Orders
❌  client profile
❌  MY ORDERS
```

---

## Interaction Guidelines

- The **back button** should always navigate to the previous screen or dismiss modals.
- **Avoid overcrowding** — limit actions to 1–3 key icons maximum.
- Use **animations subtly** when transitioning between states (e.g., collapsing header).

---

## Design Tokens

### Navigation Bar

| Token | Default value | Usage |
|-------|--------------|-------|
| `navigation-bar/background/default` | `#000000` | Bar background |
| `navigation-bar/text/title` | `#ffffff` | Title text color |
| `navigation-bar/icon/default` | `#ffffff` | Icon fill color |
| `navigation-bar/border-bottom/default` | `#333333` | Bottom border separator |

### Colors

| Token | Default value | Usage |
|-------|--------------|-------|
| `colors/white` | `#ffffff` | General white |
| `colors/black` | `#000000` | General black |
| `colors/text/body` | `#f7f7f7` | Body text |
| `colors/text/disabled` | `#4d4d4d` | Disabled text |
| `colors/surface/white` | `#ffffff` | White surface |
| `colors/surface/fake white` | `#1d1d1d` | Fake white surface (dark mode) |
| `colors/border/medium` | `#939292` | Medium border |
| `colors/neutral/white` | `#ffffff` | Neutral white |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font/family/title` | `ABChanel Corpo 2022` | Title / heading font |
| `font/family/text` | `Helvetica` | Body / caption font |
| `font/size/md` | `16` | Title font size |
| `font/size/xs` | `12` | Caption font size |
| `font/weight/bold` | `bold` | Bold weight |
| `font/weight/regular` | `regular` | Regular weight |

### Typography Styles

| Style | Family | Weight | Size | Line height | Letter spacing |
|-------|--------|--------|------|-------------|----------------|
| `heading/h4` | `font/family/title` | bold | `font/size/md` (16) | 100% | 0.1 px |
| `caption/paragraph` | `font/family/text` | regular | `font/size/xs` (12) | 100% | 0.1 px |

### Spacing

| Token | Value (px) |
|-------|-----------|
| `size/gap/2xs` | `6` |
| `size/gap/xs` | `8` |
| `size/gap/sm` | `12` |
| `size/gap/md` | `16` |
| `size/gap/xl` | `32` |
| `size/gap/5xl` | `64` |
| `size/size-200` | `16` |

---

## Usage Examples

### Standard — title only

```tsx
<NavigationBar
  type="standard"
  label="Client Profile"
  showBackIcon
/>
```

### Standard — title + caption + 1 action icon

```tsx
<NavigationBar
  type="standard"
  label="Client Profile"
  captionLabel="Mrs. Sarah VANDERBILT"
  showBackIcon
  rightActions={[<EditIcon key="edit" />]}
/>
```

### Standard — title + 2 action icons

```tsx
<NavigationBar
  type="standard"
  label="Client Profile"
  showBackIcon
  rightActions={[<SearchIcon key="search" />, <EditIcon key="edit" />]}
/>
```

### More actions — 3 right icons (no label)

```tsx
<NavigationBar
  type="more-actions"
  showBackIcon
  rightActions={[
    <CopyIcon key="copy" />,
    <EditIcon key="edit" />,
    <ShareIcon key="share" />,
  ]}
/>
```

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use brief, clear text labels to identify the screen purpose | Don't wrap or truncate the title — keep it short enough to display in one line |
| Use **First Letter Capitalization** on the title | Don't use sentence-case (e.g. "client profile") |
| Use caption labels for short complementary information (e.g. client name) | Don't write long descriptions in the caption label |
| Use the **More actions** type when you have 3 or more right icons | Don't crowd the Standard bar with more than 2 right icons |
| Favor **distinct, recognizable icons** for each action | Don't use similar or confusing icons in the same Navigation Bar |
| Use the **Standard** type when you have 2 right icons or fewer | Don't use More actions when only 1–2 icons are needed |

---

## Accessibility

- Do **not** override the design token colors — they are designed to be consistent and accessible.
- Provide clear and concise **accessible labels** for all icons (screen reader support).
- Use the **native iOS focus state** for keyboard / switch access navigation.

---

## Figma Source — Variable Definitions

> Raw token data from **node 9300:19031** (`get_variable_defs`)

```json
{
  "colors/white": "#ffffff",
  "colors/text/disabled": "#4d4d4d",
  "font/size/md": "16",
  "font/weight/bold": "bold",
  "font/family/title": "ABChanel Corpo 2022",
  "heading/h4": "Font(family: \"font/family/title\", style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "navigation-bar/text/title": "#ffffff",
  "colors/text/body": "#f7f7f7",
  "font/size/xs": "12",
  "font/weight/regular": "regular",
  "font/family/text": "Helvetica",
  "caption/paragraph": "Font(family: \"font/family/text\", style: font/weight/regular, size: font/size/xs, weight: 400, lineHeight: 100, letterSpacing: 0.1)",
  "navigation-bar/icon/default": "#ffffff",
  "size/gap/sm": "12",
  "size/gap/2xs": "6",
  "size/gap/xs": "8",
  "size/gap/md": "16",
  "navigation-bar/background/default": "#000000",
  "navigation-bar/border-bottom/default": "#333333",
  "colors/surface/fake white": "#1d1d1d",
  "colors/border/medium": "#939292",
  "colors/surface/white": "#ffffff",
  "colors/black": "#000000",
  "size/gap/xl": "32",
  "size/size-200": "16",
  "size/gap/5xl": "64",
  "colors/neutral/white": "#ffffff"
}
```

---

## Figma Source — Design Context

> Asset URLs and component code extracted from **node 8895:5492** (`get_design_context`)

### Assets

```ts
const imgVector   = "https://www.figma.com/api/mcp/asset/8d7b9140-b98b-4e19-834f-a5c51cead224"; // chevron-left (back icon)
const imgVector1  = "https://www.figma.com/api/mcp/asset/936c3abd-d8ba-431c-8793-85a8b13ad1f8"; // generic action icon
const imgVector2  = "https://www.figma.com/api/mcp/asset/115cc17f-fce1-43b8-b3db-a63b8ddb88c4"; // annotation arrow
const imgVector3  = "https://www.figma.com/api/mcp/asset/f58161d6-237a-4a66-b271-9e9ed40e5fa4"; // annotation arrow
const imgVector4  = "https://www.figma.com/api/mcp/asset/91bc1160-0153-4e03-a6c8-b2e87766c6fc"; // edit-pen-square
const imgVector5  = "https://www.figma.com/api/mcp/asset/951eaea8-affa-4216-802a-164c399e2041"; // annotation arrow
const imgVector6  = "https://www.figma.com/api/mcp/asset/4093b661-92c3-499b-a42d-a6c35f876037"; // share/upload icon
const imgVector7  = "https://www.figma.com/api/mcp/asset/4020d9d2-fc9a-4781-883b-32d9f064d706"; // copy icon
const imgVector8  = "https://www.figma.com/api/mcp/asset/0ba3b1e2-8cb6-4f73-9dc4-d01ff6ca1542"; // edit icon variant
const imgVector9  = "https://www.figma.com/api/mcp/asset/2d0bffd5-924d-4eb8-8c3a-a67824e82020"; // share icon variant
const imgVector10 = "https://www.figma.com/api/mcp/asset/d020e22d-c2f4-44c7-a999-c675a6903a64"; // person/profile icon
const imgVector11 = "https://www.figma.com/api/mcp/asset/00be9ed8-7c6e-44ae-bcdf-7ba31ada9638"; // erase/save-pdf icon
const imgVector12 = "https://www.figma.com/api/mcp/asset/85da31d7-5c6a-48a3-a12e-56eca9961b5c"; // generic icon
const imgVector13 = "https://www.figma.com/api/mcp/asset/2478ee14-cd56-47bd-8aac-94a01c94cbcb"; // person icon alt
const imgVector14 = "https://www.figma.com/api/mcp/asset/705c29ef-e50e-49ee-a874-ed5c16be2fbe"; // cash-desk icon
const imgVector15 = "https://www.figma.com/api/mcp/asset/f90648b9-b0cd-4e1c-887e-ef13fabb934d"; // shopping-bag-research
```

### Component Code

```tsx
import React from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

type NavigationBarProps = {
  className?: string;
  /** Navigation bar type */
  type?: "standard" | "more-actions";
  /** Main title label (hidden in more-actions type) */
  label?: string;
  /** Optional caption below the title */
  captionLabel?: string;
  /** Show back chevron on the left */
  showBackIcon?: boolean;
  /** Right-side action icons (max 2 for standard, max 3 for more-actions) */
  rightActions?: React.ReactNode[];
  /** Back button callback */
  onBack?: () => void;
};

// ─── Component ─────────────────────────────────────────────────────────────

const NavigationBar: React.FC<NavigationBarProps> = ({
  className = "",
  type = "standard",
  label = "Label",
  captionLabel,
  showBackIcon = false,
  rightActions = [],
  onBack,
}) => {
  const isMoreActions = type === "more-actions";
  // Enforce icon limit per type
  const icons = rightActions.slice(0, isMoreActions ? 3 : 2);

  return (
    <div
      className={`navigation-bar relative flex flex-col items-center justify-center w-full px-2 py-4 ${className}`}
      style={{
        backgroundColor: "var(--navigation-bar-background-default, #000000)",
        borderBottom: "1px solid var(--navigation-bar-border-bottom-default, #333333)",
        minHeight: "60px",
        gap: "var(--size-gap-2xs, 6px)",
      }}
    >
      {/* Title (standard only) */}
      {!isMoreActions && (
        <div
          className="text-center w-full overflow-hidden text-ellipsis whitespace-nowrap px-16"
          style={{
            fontFamily: "var(--font-family-title, 'ABChanel Corpo 2022', sans-serif)",
            fontWeight: "var(--font-weight-bold, bold)",
            fontSize: "var(--font-size-md, 16px)",
            color: "var(--navigation-bar-text-title, #ffffff)",
            letterSpacing: "0.1px",
          }}
        >
          {label}
        </div>
      )}

      {/* Caption label (optional, standard only) */}
      {!isMoreActions && captionLabel && (
        <div
          className="text-center w-60 overflow-hidden text-ellipsis"
          style={{
            fontFamily: "var(--font-family-text, Helvetica, sans-serif)",
            fontWeight: "var(--font-weight-regular, normal)",
            fontSize: "var(--font-size-xs, 12px)",
            color: "var(--colors-text-body, #f7f7f7)",
            letterSpacing: "0.1px",
          }}
        >
          {captionLabel}
        </div>
      )}

      {/* Back icon */}
      {showBackIcon && (
        <button
          onClick={onBack}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-6 overflow-clip block cursor-pointer"
          aria-label="Go back"
        >
          <div className="absolute inset-[22.79%_39.46%_22.79%_28.91%]">
            <img
              alt="back"
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector}
            />
          </div>
        </button>
      )}

      {/* Right actions */}
      {icons.length > 0 && (
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center"
          style={{ gap: "var(--size-gap-sm, 12px)" }}
        >
          {icons.map((icon, i) => (
            <div key={i} className="overflow-clip relative shrink-0 size-6">
              {icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { NavigationBar };
export type { NavigationBarProps };
```
