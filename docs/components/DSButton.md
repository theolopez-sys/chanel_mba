# DSButton

> **Figma source** — [Internal European Design System · Guidelines node 6698-1336](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=6698-1336) · [Variables node 2003-750](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=2003-750)

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
