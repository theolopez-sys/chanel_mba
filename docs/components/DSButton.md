# DSButton

> **Figma source**
> - [Guidelines — node 6698:1336](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=6698-1336) (`get_design_context`)
> - [Variables — node 6:285 / frame 2003:750](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=6-285) (`get_variable_defs`)

---

## Overview

Les boutons permettent à l'utilisateur de déclencher une action. Ils communiquent clairement ce qui se passera après interaction. Le texte du bouton doit décrire précisément l'action effectuée.

---

## Anatomy

```
┌────────────────────────────────┐
│  [Icon]   LABEL                │
└────────────────────────────────┘

① Filled container  (primary)
② Outline container (secondary)
③ Icon (optionnelle, leading)
④ Label
⑤ Icon-only (FAB)
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Filled container** | Fond plein — variante primary. Border-radius pill (999px) |
| 2 | **Outline container** | Fond transparent, bordure 1px — variante secondary |
| 3 | **Icon** *(optionnel)* | Icône 24 × 24px, positionnée à gauche du label |
| 4 | **Label** | Texte uppercase, ABChanel Corpo 2022, weight 600 |
| 5 | **Icon-only** | Bouton sans label — réservé au FloatingActionButton |

---

## Sizes

3 tailles disponibles : **small**, **medium** (défaut), **large**. Choisir la taille selon l'importance de l'action et son contexte.

| Taille | Token | Font size | Padding H | Padding V |
|--------|-------|-----------|-----------|-----------|
| Small  | `button/small`  | `font/size/sm` → 14px | `size/gap/md` → 16px | `size/gap/3xs` → 4px |
| Medium | `button/medium` | `font/size/md` → 16px | `size/gap/md` → 16px | `size/gap/xs` → 8px  |
| Large  | —               | 18px (à confirmer)    | 20px                  | 12px                  |

---

## Types

| Type | Description |
|------|-------------|
| **Default** | Bouton avec label, icône optionnelle |
| **Icon-Only** | Icône sans label — usage FloatingActionButton uniquement |

---

## Width

| Mode | Description |
|------|-------------|
| **Adjusted** | Largeur automatique — s'adapte au contenu (hug) |
| **Full-width** | S'étend sur toute la largeur du conteneur parent |

> Les mêmes règles s'appliquent aux Floating Action Buttons.

---

## Design Tokens

### Variante Primary

| État | Token | Valeur |
|------|-------|--------|
| Background default | `button/background/primary/default` | `#000000` |
| Background pressed | `button/background/primary/pressed` | `#333333` |
| Background disabled | `button/background/primary/disabled` | `rgba(32,32,32,0.05)` |
| Text default | `button/text/primary/default` | `#ededed` |
| Text disabled | `button/text/primary/disabled` | `#b6b6b6` |
| Icon default | `button/icon/primary/default` | `#ededed` |
| Icon disabled | `button/icon/primary/disabled` | `#b6b6b6` |

### Variante Secondary

| État | Token | Valeur |
|------|-------|--------|
| Background pressed | `button/background/secondary/pressed` | `#f7f7f7` |
| Text default | `button/text/secondary/default` | `#000000` |
| Text disabled | `button/text/secondary/disabled` | `#b6b6b6` |
| Icon default | `button/icon/secondary/default` | `#000000` |
| Icon disabled | `button/icon/secondary/disabled` | `#b6b6b6` |
| Border default | `button/border/secondary/default` | `#1d1d1d` |
| Border disabled | `button/border/secondary/disabled` | `#939292` |

### Variante Tertiary

| État | Token | Valeur |
|------|-------|--------|
| Text default | `button/text/tertiary/default` | `#000000` |
| Text pressed | `button/text/tertiary/pressed` | `#333333` |
| Text disabled | `button/text/tertiary/disabled` | `#b6b6b6` |
| Icon default | `button/icon/tertiary/default` | `#000000` |
| Icon pressed | `button/icon/tertiary/pressed` | `#333333` |
| Icon disabled | `button/icon/tertiary/disabled` | `#b6b6b6` |

### Typographie

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Font family | `font/family/title` | ABChanel Corpo 2022 |
| Font weight | `font/weight/bold` | 600 |
| Font size (medium) | `font/size/md` | 16px |
| Font size (small) | `font/size/sm` | 14px |
| Letter spacing | — | 0.1px |
| Line height | — | 100% |
| Transform | — | uppercase |

### Spacing

| Token | Valeur | Usage |
|-------|--------|-------|
| `size/gap/xs` | 8px | Padding vertical medium / gap icon–label |
| `size/gap/md` | 16px | Padding horizontal |
| `size/gap/3xs` | 4px | Padding vertical small |
| `size/border/default` | 1px | Épaisseur bordure secondary |

---

## Interaction States

| État | Description |
|------|-------------|
| **Default** | État de repos |
| **Pressed** | Retour visuel immédiat — fond plus sombre, scale 0.97 |
| **Disabled** | Non interactif — opacité réduite, tokens `/disabled` |

---

## UX Writing — Labels

### Utiliser des verbes
Préférer des verbes d'action clairs : **"Add"**, **"Share"**, **"Save"**. Combiner verbe + nom pour plus de précision : *"Add image"*, *"Edit name"*.

> Éviter le sujet "I". Préférer la forme infinitive.

### Guider l'utilisateur
Le label doit définir clairement ce qui va se passer. Maintenir la cohérence : si l'action est *"Reset password"*, le message de confirmation doit être *"Password has been reset"*.

### Être concis
Éviter les mots superflus.

| ✅ Do | ❌ Don't |
|-------|---------|
| `Add image` | `Add an image to your gallery` |

### Capitalisation
Suivre les règles de capitalisation du Design System — labels en **UPPERCASE**.

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Faire correspondre les largeurs des boutons d'un même groupe | Mélanger des boutons de largeurs différentes |
| Faire correspondre les hauteurs des boutons d'un même groupe | Mixer des tailles dans une même ligne d'actions |
| Être concis dans le label | Ajouter des mots inutiles au label |
| 1 seul bouton primary par section | Utiliser plusieurs primary sur le même écran |

---

## Accessibilité

### Général
- Le texte du bouton doit décrire l'action — pas besoin d'`aria-label` supplémentaire si le label est explicite
- Les boutons **disabled** utilisent l'attribut `disabled` natif

### Touch
- Zone de tap minimum : **44 × 44px**
- La hauteur minimum des boutons medium est de 40px — ajouter `.contentShape` ou zone de tap élargie si nécessaire

---

## Props (React / TypeScript)

```typescript
export interface DSButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';        // défaut : 'medium'
  icon?: string;                               // SF Symbol (iOS) ou nom d'icône (web)
  iconPosition?: 'left' | 'right';            // défaut : 'left'
  fullWidth?: boolean;                         // défaut : false
  disabled?: boolean;                          // défaut : false
  onClick?: () => void;
}
```

---

## Exemples d'utilisation

### Primary (action principale)

```tsx
<DSButton label="Add image" variant="primary" icon="plus" />
```

### Secondary (action secondaire)

```tsx
<DSButton label="Cancel" variant="secondary" />
```

### Tertiary (action tertiaire / lien)

```tsx
<DSButton label="Learn more" variant="tertiary" />
```

### Full-width (CTA modal ou bas d'écran)

```tsx
<DSButton label="Confirm" variant="primary" fullWidth />
```

### Disabled

```tsx
<DSButton label="Submit" variant="primary" disabled />
```

---

## iOS / SwiftUI

```swift
DSButton(title: "Add image",  variant: .primary,   icon: "plus") { }
DSButton(title: "Cancel",     variant: .secondary) { }
DSButton(title: "Learn more", variant: .ghost) { }            // = tertiary
DSButton(title: "Confirm",    variant: .accent, isFullWidth: true) { }
```

> **Note plateforme :** iOS implémente 2 variantes supplémentaires — `.secondaryInverted` (secondary sur fond noir) et `.accent` (fond doré `#B8964E`). Ces variantes ne sont pas dans le DS Figma web — usage exclusif mobile.

---

## Implémentation

| Plateforme | Fichier |
|------------|---------|
| React / Web | `storybook/src/components/DSButton.jsx` |
| Storybook stories | `storybook/src/stories/Button.stories.jsx` |
| iOS / SwiftUI | `InternalApp/Components/DSButton.swift` |
| Spec Figma détaillée | `Figma/components/DSButton.md` |

---

## Figma Source — Variable Definitions

> Extrait via `get_variable_defs` · node [6:285](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=6-285) (page Buttons) · frame [2003:750](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=2003-750)

```json
{
  "colors/white":                          "#ffffff",
  "colors/text/disabled":                  "#b6b6b6",
  "colors/neutral/higher":                 "#333333",
  "colors/surface/white":                  "#ffffff",
  "colors/surface/black":                  "#000000",
  "colors/border/medium":                  "#939292",
  "colors/surface/fake white":             "#1d1d1d",
  "colors/neutral/lowest":                 "#1d1d1d",

  "font/family/title":                     "ABChanel Corpo 2022",
  "font/weight/bold":                      "bold",
  "font/size/md":                          "16",
  "font/size/sm":                          "14",

  "heading/h4":                            "Font(family: font/family/title, style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "button/medium":                         "Font(family: font/family/title, style: font/weight/bold, size: font/size/md, weight: 600, lineHeight: 100, letterSpacing: 0.1)",
  "button/small":                          "Font(family: font/family/title, style: font/weight/bold, size: font/size/sm, weight: 600, lineHeight: 100, letterSpacing: 0.1)",

  "size/gap/3xs":                          "4",
  "size/gap/xs":                           "8",
  "size/gap/md":                           "16",
  "size/border/default":                   "1",

  "button/background/primary/default":     "#000000",
  "button/background/primary/pressed":     "#333333",
  "button/background/primary/disabled":    "#2020200d",
  "button/background/secondary/pressed":   "#f7f7f7",

  "button/text/primary/default":           "#ededed",
  "button/text/primary/disabled":          "#b6b6b6",
  "button/text/secondary/default":         "#000000",
  "button/text/secondary/disabled":        "#b6b6b6",
  "button/text/tertiary/default":          "#000000",
  "button/text/tertiary/pressed":          "#333333",
  "button/text/tertiary/disabled":         "#b6b6b6",

  "button/icon/primary/default":           "#ededed",
  "button/icon/primary/disabled":          "#b6b6b6",
  "button/icon/secondary/default":         "#000000",
  "button/icon/secondary/disabled":        "#b6b6b6",
  "button/icon/tertiary/default":          "#000000",
  "button/icon/tertiary/pressed":          "#333333",
  "button/icon/tertiary/disabled":         "#b6b6b6",

  "button/border/secondary/default":       "#1d1d1d",
  "button/border/secondary/disabled":      "#939292"
}
```

---

## Figma Source — Design Context

> Extrait via `get_design_context` · node [6698:1336](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=6698-1336) (Buttons - Guidelines)

### Assets Figma (images vectorielles des guidelines)

```ts
const imgVector    = "https://www.figma.com/api/mcp/asset/5db7aaba-59d7-416b-8746-fbe12c0bd1f5";
const imgAnimation = "https://www.figma.com/api/mcp/asset/75d6540f-9a4c-41fc-ae46-1160117b431f";
const imgVector1   = "https://www.figma.com/api/mcp/asset/81075c53-bc65-4865-99aa-d501f326f529";
const imgVector2   = "https://www.figma.com/api/mcp/asset/1e007a3b-1861-49f0-a2f1-e5c73de46c90";
const imgVector3   = "https://www.figma.com/api/mcp/asset/4f7c3db6-bba9-40bf-bb5b-35dfcee39820";
const imgVector4   = "https://www.figma.com/api/mcp/asset/5f4fe1a6-d7df-46ed-a798-2821931d5267";
const imgVector5   = "https://www.figma.com/api/mcp/asset/311e097b-cee1-4753-bb2c-7fc6da48d558";
const imgVector6   = "https://www.figma.com/api/mcp/asset/d35dcc4c-9f44-4831-81ff-1bf97100e2e5";
const imgVector7   = "https://www.figma.com/api/mcp/asset/6d0ba7e7-d568-443e-82dc-d35bf59ee858";
const imgVector8   = "https://www.figma.com/api/mcp/asset/5b272246-3364-46a0-85dd-c122dd2aa023";
const imgVector9   = "https://www.figma.com/api/mcp/asset/daeda6ba-7912-42e9-a0c1-78ad54585073";
const imgVector10  = "https://www.figma.com/api/mcp/asset/1b478d67-300b-4871-9fb1-8938793f26da";
const imgVector11  = "https://www.figma.com/api/mcp/asset/b64f77e5-2f15-483f-82ab-3d3a10deda29";
```

### Patterns JSX — Bouton Primary (medium)

```tsx
{/* Primary — medium, avec icône gauche + animation ripple */}
<button
  className="
    bg-[var(--button/background/primary/default,black)]
    flex gap-[var(--size/gap/xs,8px)] items-center justify-center
    min-h-[40px] overflow-clip
    px-[var(--size/gap/md,16px)] py-[var(--size/gap/xs,8px)]
    cursor-pointer
  "
  data-name="button"
>
  {/* Ripple animation */}
  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-1px)] size-0 top-1/2">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAnimation} />
  </div>
  {/* Icon left 24×24 */}
  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-left">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
  </div>
  {/* Label */}
  <div className="
    font-[family-name:var(--font/family/title,'ABChanel_Corpo_2022:bold',sans-serif)]
    font-[var(--font/weight/bold,normal)]
    text-[color:var(--button/text/primary/default,#ededed)]
    text-[length:var(--font/size/md,16px)]
    tracking-[0.1px] uppercase leading-[100%]
    whitespace-nowrap
  ">
    <p>Label</p>
  </div>
</button>
```

### Patterns JSX — Bouton Secondary (small)

```tsx
{/* Secondary — small, sans icône */}
<button
  className="
    border-[length:var(--size/border/default,1px)]
    border-[var(--button/border/secondary/default,#1d1d1d)] border-solid
    bg-[var(--colors/surface/fake-white,#f7f7f7)]
    flex gap-[var(--size/gap/xs,8px)] items-center justify-center
    min-h-[32px] overflow-clip
    px-[var(--size/gap/md,16px)] py-[var(--size/gap/3xs,4px)]
    cursor-pointer
  "
  data-name="button"
>
  <div className="
    font-[family-name:var(--font/family/title,'ABChanel_Corpo_2022:bold',sans-serif)]
    font-[var(--font/weight/bold,normal)]
    text-[color:var(--button/text/secondary/default,black)]
    text-[length:var(--font/size/sm,14px)]
    tracking-[0.1px] uppercase leading-[100%]
    whitespace-nowrap
  ">
    <p>Label</p>
  </div>
</button>
```

### Patterns JSX — Floating Action Button (FAB)

```tsx
{/* FAB — icon only */}
<div
  className="
    bg-[var(--floating-action-button/background/default,black)]
    flex gap-[var(--size/gap/xs,0px)] items-center
    min-h-[48px] p-[var(--size/gap/sm,12px)]
    rounded-[999px]
    shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]
  "
  data-name="Floating action button"
>
  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
  </div>
</div>

{/* FAB — avec label */}
<div
  className="
    bg-[var(--floating-action-button/background/default,black)]
    flex gap-[var(--size/gap/xs,8px)] items-center
    min-h-[48px] px-[var(--size/gap/md,16px)] py-[var(--size/gap/sm,12px)]
    rounded-[999px]
    shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]
  "
  data-name="Floating action button"
>
  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
  </div>
  <div className="
    font-[family-name:var(--font/family/title,'ABChanel_Corpo_2022:bold',sans-serif)]
    text-[color:var(--colors/neutral/white,white)]
    text-[length:var(--font/size/md,16px)]
    tracking-[0.1px] uppercase
  ">
    <p>Label</p>
  </div>
</div>
```
