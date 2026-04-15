# DSDropdown

> **Figma source** — [Internal European Design System · node 7352:6611](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7352-6611) · [Variables · node 7322:5611](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7322-5611)

---

## Overview

The **dropdown** allows users to select one option from a list of predefined choices. It should be designed for clarity, accessibility, and ease of interaction.

---

## Anatomy

```
Default (empty):
┌─────────────────────────────────────────────┐
│  Label *                              [›]   │  ← h=48px, border 1px
└─────────────────────────────────────────────┘
  Helper text (optional)

Filled (value selected):
┌─────────────────────────────────────────────┐
│  Label *                                    │  ← Label floats top (10px)
│  Selected value                       [›]   │  ← Input value (14px)
└─────────────────────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Container** | Bordure 1px, hauteur 48px, px=16px, py=8px |
| 2 | **Label** | Texte descriptif. Default : Helvetica Regular 14px centré verticalement. Filled : flotte en haut Helvetica Light 10px. Couleur : `dropdown/text/label/default` |
| 3 | **Input** | Valeur sélectionnée. Helvetica Regular 14px, `dropdown/text/input/default`. Visible uniquement à l'état Filled |
| 4 | **Helper text** *(optionnel)* | Texte d'aide sous le container. Helvetica Regular 12px, `dropdown/text/helper/default` |
| 5 | **Chevron** | Icône 24 × 24px. Pointe vers le bas (Default) ou vers le haut (Active/ouvert). Couleur : `dropdown/icon/default` ou `dropdown/icon/active` |

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
| Chevron size | — | 24 × 24px |

---

## Design Tokens

### Couleurs par état (source : node 7322:5611)

| Token | Valeur | Usage |
|-------|--------|-------|
| `dropdown/border/default` | `#939292` | Bordure — états Default et Filled |
| `dropdown/border/active` | `#1d1d1d` | Bordure — état Active |
| `dropdown/border/error` | `#e04846` | Bordure — état Error |
| `dropdown/border/disabled` | `#ededed` | Bordure — état Disabled |
| `dropdown/text/label/default` | `#5a5a5a` | Label (tous états actifs) |
| `dropdown/text/label/disabled` | `#b6b6b6` | Label — état Disabled |
| `dropdown/text/input/default` | `#333333` | Valeur sélectionnée (Filled) |
| `dropdown/text/input/active` | `#000000` | Valeur sélectionnée (Active) |
| `dropdown/text/input/disabled` | `#b6b6b6` | Valeur sélectionnée (Disabled) |
| `dropdown/text/helper/default` | `#5a5a5a` | Helper text |
| `dropdown/icon/default` | `#939292` | Chevron — état Default / Filled |
| `dropdown/icon/active` | `#000000` | Chevron — état Active |
| `dropdown/icon/disabled` | `#b6b6b6` | Chevron — état Disabled |
| `dropdown/background/active` | `#2020200d` | Fond — état Active (très léger) |
| `dropdown/background/disabled` | `#2020200d` | Fond — état Disabled |

### Typographie

| Style | Famille | Taille | Poids | Usage |
|-------|---------|--------|-------|-------|
| `body/p2/paragraph` | Helvetica | 14px (`font/size/sm`) | 400 | Label (état Default), valeur input |
| `caption/paragraph` | Helvetica | 12px (`font/size/xs`) | 400 | Helper text |
| — | Helvetica | 10px (`font/size/2xs`) | 300 (Light) | Label flottant (état Filled) |

---

## Interaction States

| État | Bordure | Fond | Label | Input | Chevron |
|------|---------|------|-------|-------|---------|
| **Default** | `#939292` | transparent | 14px centré, `#5a5a5a` | — | `#939292` ↓ |
| **Active** | `#1d1d1d` | `#2020200d` | 14px centré, `#5a5a5a` | — | `#000000` ↑ |
| **Filled** | `#939292` | transparent | 10px flottant top, `#5a5a5a` | 14px `#333333` | `#939292` ↓ |
| **Error** | `#e04846` | transparent | 10px flottant top | 14px `#333333` | `#939292` ↓ |
| **Disabled** | `#ededed` | `#2020200d` | `#b6b6b6` | `#b6b6b6` | `#b6b6b6` ↓ |

---

## Behavior & Interactions

- Cliquer sur le dropdown ouvre un **bottom sheet** contenant les options — pas de menu inline.
- **Sélection unique** : ferme le bottom sheet dès la sélection effectuée.
- **Sélections multiples** : affiche un bouton "Validate" dans le bottom sheet pour confirmer.
- La sélection met à jour l'input du dropdown (passage à l'état Filled).
- Le chevron **pivote de bas → haut** à l'ouverture, et **retour haut → bas** à la fermeture.
- Cliquer en dehors du composant repasse à l'état Filled ou Error.

---

## General Principles

The **dropdown** allows users to select one option from a list of predefined choices. It should be designed for clarity, accessibility, and ease of interaction.

---

## Usage

- Utiliser un dropdown si la liste comporte **plus de 5 éléments**.
- S'assurer que le label du dropdown **décrit clairement son objet**.
- L'option sélectionnée doit être **visible** une fois choisie.

---

## Required Fields

- Si le champ est requis (`required`), un **astérisque `*`** apparaît à côté du label.
- L'astérisque est rendu en Helvetica Light 10px, aligné horizontalement avec le label.

---

## Labels

- Limiter les labels à **1–3 mots** et moins de **20 caractères** (espaces inclus).
- Utiliser la **casse de phrase** (sentence case) — ni tout en majuscules, ni titre, ni tout en minuscules.
- Ne pas ajouter de ponctuation finale (pas de deux-points, point-virgule, etc.).

---

## Helper Text

- Utiliser le helper text pour des **conseils ou suggestions**.
- Si le helper text est long ou complexe, utiliser un **tooltip** à la place.
- Éviter de dépasser **2 lignes** de helper text pour simplifier la lecture.

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Utiliser des labels concis et significatifs ("Location of residence") | Ne pas utiliser un texte instructionnel comme label ("ZIP Code (If no postal code, enter NA)") |
| Utiliser la casse de phrase pour les labels ("Title") | Ne pas utiliser tout en majuscules ("TITLE") |
| Supprimer la ponctuation terminale inutile ("Title") | Ne pas ajouter de deux-points après le label ("Title:") |
| Utiliser des helper texts courts et concis (≤ 2 lignes) | Ne pas utiliser le helper text sur plus de 2 lignes |
| Ajouter un bouton "Validate" si la sélection multiple est possible | Ne pas ajouter un bouton "Validate" si une seule option est sélectionnable |

---

## Accessibilité

### Général
- Ne pas utiliser d'autres couleurs que celles du Design System — conçues pour être cohérentes et accessibles.
- Fournir des labels clairs et concis pour les lecteurs d'écran.
- Utiliser le **focus state natif iOS**.

### Touch
- Quand un dropdown en état Default est tapé, l'état Active apparaît immédiatement — feedback visible.
- Quand l'utilisateur clique en dehors du composant, l'état Filled ou Error remplace l'état Active.
- Le chevron pivote bas → haut à l'ouverture, indiquant visuellement que le bottom sheet est ouvert.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Aucun composant `DSDropdown` n'existe dans le codebase. L'interface ci-dessous est la cible à implémenter.

```typescript
// Interface cible (composant à créer : storybook/src/components/DSDropdown.tsx)
export type DropdownState = 'default' | 'active' | 'filled' | 'error' | 'disabled';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DSDropdownProps {
  label: string;
  options: DropdownOption[];
  value?: string | string[];       // string pour single, string[] pour multiple
  multiple?: boolean;              // défaut : false — sélection multiple (ajoute Validate)
  required?: boolean;              // défaut : false — affiche astérisque *
  helperText?: string;             // texte d'aide sous le container
  errorText?: string;              // texte d'erreur (état Error)
  disabled?: boolean;              // défaut : false
  onChange?: (value: string | string[]) => void;
}
```

---

## Exemples d'utilisation

### Default

```tsx
<DSDropdown
  label="Location of residence"
  options={[
    { label: 'France', value: 'FR' },
    { label: 'Spain', value: 'ES' },
    { label: 'Italy', value: 'IT' },
  ]}
  required
  onChange={(v) => setCountry(v as string)}
/>
```

### Filled (avec valeur)

```tsx
<DSDropdown
  label="Title"
  options={[
    { label: 'Duchess', value: 'duchess' },
    { label: 'Mrs.', value: 'mrs' },
    { label: 'Ms.', value: 'ms' },
  ]}
  value="duchess"
  onChange={(v) => setTitle(v as string)}
/>
```

### Multiple selections

```tsx
<DSDropdown
  label="Countries"
  options={countries}
  multiple
  value={selectedCountries}
  required
  onChange={(v) => setSelectedCountries(v as string[])}
/>
```

### Avec helper text

```tsx
<DSDropdown
  label="Billing address"
  options={addresses}
  required
  helperText="By default, billing address is used for communication and delivery addresses"
  onChange={(v) => setAddress(v as string)}
/>
```

### iOS / SwiftUI

```swift
DSDropdown(
    label: "Location of residence",
    options: countries,
    required: true,
    onChange: { value in handleCountryChange(value) }
)
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web | `storybook/src/components/DSDropdown.tsx` | ⚠️ À créer |
| Storybook stories | `storybook/src/stories/Dropdown.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | `InternalApp/Components/DSDropdown.swift` | ⚠️ À créer |
