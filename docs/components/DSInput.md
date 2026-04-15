# DSInput

> **Figma source** — [Internal European Design System · node 7270:6551](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7270-6551) · [Variables · node 7011:1101](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7011-1101)

---

## Overview

**Input fields** are essential interactive components that allow users to enter and edit data such as text, numbers, or other types of structured content. They are used across a wide range of flows, including forms, search interfaces, and settings.

---

## Anatomy

```
Default (empty):
┌─────────────────────────────────────────────┐
│  Label *                              [icon] │  ← h=48px, border 1px
└─────────────────────────────────────────────┘
  Helper text (optional)

Active-Empty (focused, no value):
┌─────────────────────────────────────────────┐
│  Label *    (10px, floated top)              │  ← border active #000
│  |                                    [icon] │  ← cursor visible
└─────────────────────────────────────────────┘

Active-Filled (focused, value entered):
┌─────────────────────────────────────────────┐
│  Label *    (10px, floated top)              │
│  Entered value |                      [icon] │
└─────────────────────────────────────────────┘

Filled (value, not focused):
┌─────────────────────────────────────────────┐
│  Label *    (10px, floated top)              │
│  Entered value                        [icon] │  ← border default #939292
└─────────────────────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Container** | Bordure 1px, hauteur 48px, px=16px, py=8px |
| 2 | **Label** | Default: Helvetica Regular 14px centré verticalement. Active/Filled: flotte en haut Helvetica Light 10px. Couleur: `input/text/label/default` |
| 3 | **Prefixe** *(optionnel)* | Indicatif pays pour les champs téléphone. Texte à gauche du champ |
| 4 | **Text input** | Valeur saisie par l'utilisateur. Helvetica Regular 14px, `input/text/input/default`. Curseur visible en état Active-Empty |
| 5 | **Icon** *(optionnel)* | 24×24px. Décoratif pour différencier les champs. Sauf: croix (état Active) et œil (Password) |
| 6 | **Helper** *(optionnel)* | Texte d'aide sous le container. Helvetica Regular 12px, `input/text/helper/default` |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Container height | — | 48px |
| Container width (référence) | — | 327px |
| Padding horizontal | `size/gap/md` | 16px |
| Padding vertical | `size/gap/xs` | 8px |
| Gap container ↔ helper text | `size/gap/xs` | 8px |
| Gap label ↔ astérisque | `size/gap/4xs` | 2px |
| Border épaisseur | `size/border/default` | 1px |
| Icon size | — | 24 × 24px |
| Text cursor | — | 1px × 14px |

---

## Design Tokens

### Couleurs par état (source : node 7011:1101)

| Token | Valeur | Usage |
|-------|--------|-------|
| `input/border/default` | `#939292` | Bordure — états Default et Filled |
| `input/border/active` | `#000000` | Bordure — états Active-Empty et Active-Filled |
| `input/border/error` | `#e04846` | Bordure — état Error |
| `input/border/disabled` | `#ededed` | Bordure — état Disabled |
| `input/text/label/default` | `#5a5a5a` | Label (tous états actifs) |
| `input/text/label/disabled` | `#b6b6b6` | Label — état Disabled |
| `input/text/input/default` | `#333333` | Valeur saisie (Filled) |
| `input/text/input/active` | `#000000` | Valeur saisie (Active-Filled), curseur |
| `input/text/input/disabled` | `#b6b6b6` | Valeur saisie (Disabled) |
| `input/text/helper/default` | `#5a5a5a` | Helper text |
| `input/text/helper/error` | `#e04846` | Helper text — état Error |
| `input/icon/default` | `#939292` | Icône — état Default / Filled |
| `input/icon/active` | `#000000` | Icône — état Active |
| `input/icon/validate` | `#2d6a4f` | Icône — état Validate (check vert) |
| `input/icon/error` | `#e04846` | Icône — état Error |
| `input/icon/disabled` | `#b6b6b6` | Icône — état Disabled |
| `input/background/disabled` | `#2020200d` | Fond — état Disabled |
| `input/background/read-only` | `#2020200d` | Fond — état Read-only |

### Typographie

| Style | Famille | Taille | Poids | Usage |
|-------|---------|--------|-------|-------|
| `body/p2/paragraph` | Helvetica | 14px (`font/size/sm`) | 400 | Label (état Default), valeur input |
| `caption/paragraph` | Helvetica | 12px (`font/size/xs`) | 400 | Helper text |
| — | Helvetica | 10px (`font/size/2xs`) | 300 (Light) | Label flottant (états Active et Filled) |

---

## Interaction States

| État | Bordure | Fond | Label | Input | Icône |
|------|---------|------|-------|-------|-------|
| **Default** | `#939292` | transparent | 14px centré, `#5a5a5a` | — | `#939292` |
| **Active-empty** | `#000000` | transparent | 10px flottant top, `#5a5a5a` | curseur visible | `#939292` |
| **Active-filled** | `#000000` | transparent | 10px flottant top, `#5a5a5a` | 14px `#000000` + curseur | `#000000` |
| **Filled** | `#939292` | transparent | 10px flottant top, `#5a5a5a` | 14px `#333333` | `#939292` |
| **Validate** | `#939292` | transparent | 10px flottant top | 14px `#333333` | `#2d6a4f` (check) |
| **Error** | `#e04846` | transparent | 10px flottant top | 14px `#333333` | `#e04846` |
| **Disabled** | `#ededed` | `#2020200d` | `#b6b6b6` | `#b6b6b6` | `#b6b6b6` |
| **Read-only** | `#939292` | `#2020200d` | 10px flottant top, `#5a5a5a` | 14px `#333333` | `#939292` |

---

## Input Variants

| Variant | Description | Spécificités |
|---------|-------------|--------------|
| **Text** | Champ texte standard | Default — aucune spécificité |
| **Password** | Champ mot de passe | Icône œil (toggle show/hide) + indicateur de force du mot de passe |
| **Phone** | Champ téléphone | Préfixe pays à gauche (ex. `+33`) |
| **Date** | Champ date | 2 comportements (voir section Special Case) |

---

## Behavior & Interactions

- Si le contenu de l'input dépasse la largeur du container, il se déplace vers la **gauche** du champ.
- La transition Default → Active-Empty s'accompagne d'un **curseur texte** visible et du **label qui flotte** en haut.
- Le label effectue une **animation de float** : 14px centré verticalement → 10px Light positionné en haut du container.
- À la perte du focus, si une valeur est présente → état **Filled** ; si une erreur est détectée → état **Error**.

### Special Case — Date Input

Le champ Date supporte deux comportements. Les designers choisissent selon le contexte du flow :

| Comportement | Description | Meilleur pour |
|--------------|-------------|---------------|
| **✍️ Manual Text Input** | L'utilisateur saisit la date directement dans le champ texte | Dates connues (anniversaires), saisie rapide par des utilisateurs expérimentés |
| **📅 Bottom Sheet Date Picker** | Taper sur le champ ouvre un calendrier dans un bottom sheet | Utilisateurs incertains de la date, sélection par navigation (voyage) |

---

## General Principles

**Input fields** are essential interactive components that allow users to enter and edit data such as text, numbers, or other types of structured content. They are used across a wide range of flows, including forms, search interfaces, and settings.

---

## Usage

- Utiliser les inputs pour **saisir des données** avec une grande variété de réponses possibles.
- Ne **pas utiliser** pour sélectionner depuis un ensemble d'options prédéfinies — utiliser un `select` à la place.

---

## Labels

- Limiter les labels à **1–3 mots** et moins de **20 caractères** (espaces inclus).
- Utiliser la **casse de phrase** (sentence case) — ni tout en majuscules, ni titre, ni tout en minuscules.

---

## Required Fields

- Si le champ est requis, un **astérisque `*`** apparaît à côté du label.
- L'astérisque est rendu en Helvetica Light 10px, aligné horizontalement avec le label (gap 2px).
- La légende de l'astérisque doit apparaître **avant sa première occurrence**, en début de formulaire (visuellement et dans le code).

---

## Icons

- Les icônes dans les inputs sont **décoratives** et servent à différencier les champs entre eux.
- **Exceptions fonctionnelles** :
  - Croix `✕` — état Active (effacer le champ)
  - Œil `👁` — input Password (toggle affichage)
- Ne **pas utiliser une icône comme préfixe** — utiliser le préfixe texte pour les champs Phone.

---

## Helper Text

- Utiliser le helper text pour des **conseils ou suggestions**.
- Si le helper text est long ou complexe, utiliser un **tooltip** à la place.
- Éviter de dépasser **2 lignes** pour simplifier la lecture.
- Toujours **afficher le helper text en état Error** pour expliquer l'erreur.

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Utiliser des labels concis et significatifs ("Zip code") + helper text explicatif si besoin ("If no postal code, enter NA") | Ne pas mettre le texte instructionnel dans le label lui-même ("ZIP Code (If no postal code, enter NA)") |
| Utiliser la casse de phrase ("First name") | Ne pas utiliser tout en majuscules ("FIRST NAME") |
| Afficher le helper text en état Error | Ne pas laisser l'utilisateur sans feedback en cas d'erreur |
| Utiliser l'icône œil pour les champs Password uniquement | Ne pas utiliser une icône comme préfixe à la place du texte (ex. drapeau pays) |

---

## Accessibilité

### Général
- Ne pas utiliser d'autres couleurs que celles du Design System — conçues pour être cohérentes et accessibles.
- Fournir des labels clairs et concis pour les lecteurs d'écran.
- Si un astérisque est utilisé, sa légende doit apparaître **avant sa première occurrence**, en début de formulaire (visuellement et dans le code).
- Utiliser le **focus state natif iOS**.

### Touch
- Quand un input en état Default est tapé, l'état Active-Empty apparaît immédiatement — feedback visible.
- Quand l'utilisateur clique en dehors du composant, l'état Filled ou Error remplace l'état Active — feedback de désélection ou d'erreur.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Le composant `DSInput` existe (`storybook/src/components/DSInput.tsx`) mais diffère du Figma DS sur plusieurs points :
> - **Label statique** (11px uppercase) → Figma exige un **label flottant** (14px → 10px Light)
> - **4 états** (default/active/error/disabled) → Figma définit **8 états** (+ active-empty, active-filled, filled, validate, read-only)
> - **Pas de `required`** prop → Figma affiche un astérisque `*`
> - **Pas de `prefix`** prop → Figma prévoit le variant Phone avec préfixe pays
> - **`borderRadius: 8px`** → Figma utilise des **coins droits** (0px)
> - **Couleurs** : `label/default` code=`#888888` vs Figma=`#5a5a5a` · `border/default` code=`#D4D4D4` vs Figma=`#939292`

```typescript
// Interface actuelle (storybook/src/components/DSInput.tsx)
export type InputState = 'default' | 'active' | 'error' | 'disabled';

export interface DSInputProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  state?: InputState;
  type?: 'text' | 'email' | 'password' | 'tel';
  value?: string;
  onChange?: (value: string) => void;
  leadingIcon?: string;
  trailingIcon?: string;
}

// Interface cible (alignée sur Figma DS)
export type InputState =
  | 'default'
  | 'active-empty'
  | 'active-filled'
  | 'filled'
  | 'validate'
  | 'error'
  | 'disabled'
  | 'read-only';

export interface DSInputProps {
  label: string;
  required?: boolean;           // affiche astérisque *
  helperText?: string;          // texte d'aide sous le container
  errorText?: string;           // texte d'erreur (état Error)
  prefix?: string;              // préfixe texte (ex. '+33' pour Phone)
  icon?: React.ReactNode;       // icône 24×24px (optionnel)
  type?: 'text' | 'password' | 'tel' | 'date';
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}
```

---

## Exemples d'utilisation

### Default

```tsx
<DSInput
  label="First name"
  required
  onChange={(v) => setFirstName(v)}
/>
```

### Avec helper text

```tsx
<DSInput
  label="Zip code"
  required
  helperText="If no postal code, enter NA"
  onChange={(v) => setZip(v)}
/>
```

### État Error

```tsx
<DSInput
  label="Email"
  value="invalid-email"
  errorText="Please enter a valid email address"
  onChange={(v) => setEmail(v)}
/>
```

### Password

```tsx
<DSInput
  label="Password"
  type="password"
  required
  onChange={(v) => setPassword(v)}
/>
```

### Phone avec préfixe

```tsx
<DSInput
  label="Phone"
  type="tel"
  prefix="+33"
  required
  onChange={(v) => setPhone(v)}
/>
```

### iOS / SwiftUI

```swift
DSInput(
    label: "First name",
    required: true,
    onChange: { value in handleChange(value) }
)
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web | `storybook/src/components/DSInput.tsx` | ⚠️ Existe — gaps vs Figma DS (voir Props) |
| Storybook stories | `storybook/src/stories/Input.stories.tsx` | ⚠️ Existe — à vérifier |
| iOS / SwiftUI | `InternalApp/Components/DSInput.swift` | ⚠️ À créer |
