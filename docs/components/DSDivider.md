# DSDivider

> **Figma source** — [Internal European Design System · node 8596:364](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8596-364) · [Variables · node 8592:836](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8592-836)

---

## Overview

**Dividers** are thin lines used to group and separate content in a layout. They help establish visual hierarchy, clarify relationships between elements, and improve scannability.

---

## Anatomy

```
Horizontal — Small (1px):
─────────────────────────────────────

Horizontal — Large (16px):
█████████████████████████████████████

Vertical — Small (1px):       Vertical — Large (16px):
│                              ██
│                              ██
│                              ██

Inset (horizontal, avec marge gauche):
          ──────────────────────────── ← décalage gauche (ex. 16px)
```

| Propriété | Description |
|-----------|-------------|
| **Couleur** | `divider/default` — light `#ededed` · dark `#333333` |
| **Orientation** | Horizontal (hauteur fixe, largeur = conteneur) · Vertical (largeur fixe, hauteur = conteneur) |
| **Type / épaisseur** | Small = 1px · Large = 16px |
| **Inset** | Marge gauche appliquée au divider horizontal pour indiquer une hiérarchie |

---

## Spacing & Layout

| Propriété | Valeur |
|-----------|--------|
| **Small** — épaisseur | 1px |
| **Large** — épaisseur | 16px |
| **Inset** — marge gauche typique | 16px (`size/gap/md`) |
| Largeur / Hauteur | 100% du conteneur (full-bleed) ou valeur fixe (inset) |

---

## Design Tokens

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `divider/default` | `#ededed` | `#333333` | Couleur du divider dans tous les variants |

---

## Variants

| Variant | Description | Cas d'usage |
|---------|-------------|-------------|
| **Horizontal** | Ligne horizontale — le plus courant | Séparer des stacks de contenu vertical (listes, sections, cards) |
| **Vertical** | Ligne verticale | Layouts horizontaux : tab bars, split views, colonnes côte-à-côte |
| **Inset** | Horizontal avec marge gauche — ne court pas bord-à-bord | Listes avec icône ou avatar à gauche, sous-sections |
| **Full-bleed** | Court sur toute la largeur / hauteur du conteneur | Séparations de sections majeures, entre composants de pleine largeur |

---

## Types

| Type | Épaisseur | Cas d'usage |
|------|-----------|-------------|
| **Small** | 1px | Séparer des éléments discrètement — usage par défaut |
| **Large** | 16px | Séparer des éléments de manière franche — rupture majeure entre sections |

---

## General Principles

**Dividers** are thin lines used to group and separate content in a layout. They help establish visual hierarchy, clarify relationships between elements, and improve scannability.

---

## Usage

- Rendre les dividers **visibles mais pas gras** — ils doivent guider l'œil sans dominer.
- N'utiliser des dividers **que si les éléments ne peuvent pas être regroupés par l'espacement seul**.
- Utiliser les dividers pour **grouper des choses**, pas pour séparer chaque élément individuel.
- Les dividers sont **non-interactifs** et ne doivent pas répondre au touch.

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Utiliser le divider Small (1px) comme séparateur par défaut | Ne pas utiliser Large (16px) pour de simples séparations d'items |
| Préférer l'espacement avant d'ajouter un divider | Ne pas ajouter un divider entre chaque item si l'espace suffit |
| Utiliser Inset pour les listes avec contenu aligné à gauche (icône, avatar) | Ne pas étirer un Inset sur toute la largeur — utiliser Full-bleed à la place |
| Utiliser Full-bleed pour les ruptures majeures entre sections | Ne pas traiter le divider comme un élément interactif |

---

## Accessibilité

- Les dividers sont **décoratifs** — utiliser `role="separator"` ou `aria-hidden="true"` selon le contexte.
- Si le divider porte une signification structurelle (ex. séparation de sections), utiliser `role="separator"` avec `aria-orientation="horizontal"` ou `"vertical"`.
- Ne pas utiliser d'autres couleurs que `divider/default` — conçue pour être accessible sur fond clair et sombre.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Aucun composant `DSDivider` n'existe dans le codebase. L'interface ci-dessous est la cible à implémenter.

```typescript
// Interface cible (composant à créer : storybook/src/components/DSDivider.tsx)
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerType = 'small' | 'large';
export type DividerVariant = 'full-bleed' | 'inset';

export interface DSDividerProps {
  orientation?: DividerOrientation; // défaut : 'horizontal'
  type?: DividerType;               // défaut : 'small' (1px)
  variant?: DividerVariant;         // défaut : 'full-bleed'
  insetStart?: number;              // marge gauche/haute en px (variant 'inset'). Défaut : 16
}
```

---

## Exemples d'utilisation

### Horizontal Small (défaut)

```tsx
<DSDivider />
```

### Horizontal Large

```tsx
<DSDivider type="large" />
```

### Inset

```tsx
<DSDivider variant="inset" insetStart={16} />
```

### Vertical Small

```tsx
<DSDivider orientation="vertical" />
```

### iOS / SwiftUI

```swift
// Small horizontal (défaut)
DSDivider()

// Large horizontal
DSDivider(type: .large)

// Inset
DSDivider(variant: .inset, insetStart: 16)

// Vertical
DSDivider(orientation: .vertical)
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web | `storybook/src/components/DSDivider.tsx` | ⚠️ À créer |
| Storybook stories | `storybook/src/stories/Divider.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | `InternalApp/Components/DSDivider.swift` | ⚠️ À créer |
