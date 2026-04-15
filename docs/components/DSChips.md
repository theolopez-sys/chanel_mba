# DSChips

> **Figma source** — [Internal European Design System · node 9303:6247](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9303-6247) · [Variables · node 8200:1988](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8200-1988)

---

## Overview

**Chips** are compact, versatile UI elements used to represent actions, choices, or filters. They display information clearly and efficiently, and can be interactive or static depending on their context.

---

## Anatomy

```
Default (outline):
┌──────────────────────────────┐
│  [icon]  Label  [+N]  [icon] │  ← Border pill, no fill
└──────────────────────────────┘

Active (filled):
┌──────────────────────────────┐
│  [icon]  Label  [+N]  [icon] │  ← Black fill
└──────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Filled container** | Fond noir (`chips/background/active`) — état Active uniquement |
| 2 | **Outline container** | Bordure 1px (`chips/border/default`) — état Default, pas de fond |
| 3 | **Label** | Texte du chip. Helvetica · 14px · weight 400 (default) ou 700 (active) |
| 4 | **Icon** *(optionnel)* | Position gauche (leading). 16 × 16px — `chips/icon/*` |
| 5 | **Icon** *(optionnel)* | Position droite (trailing). 16 × 16px — dismiss (×) pour Input chips |
| 6 | **Compteur** *(optionnel)* | Nombre de filtres actifs, ex. `+3`. Positionné à droite du label |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Padding horizontal | `size/gap/md` | 16px |
| Padding vertical | `size/gap/xs` | 8px |
| Gap icon ↔ label | `size/gap/xs` | 8px |
| Gap label ↔ compteur | `size/gap/3xs` | 4px |
| Height | — | 32px |
| Icon size | — | 16 × 16px |
| Border épaisseur | `size/border/default` | 1px |
| Border-radius | `size/full` | 999px (pill) |

---

## Design Tokens

### Couleurs par état (source : node 8200:1988)

| Propriété | Default | Active | Disabled |
|-----------|:-------:|:------:|:--------:|
| **Background** | — *(transparent)* | `#000000` | — *(transparent)* |
| **Border** | `#939292` | `#1d1d1d` | `#ededed` |
| **Texte** | `#f7f7f7` | `#ededed` | `#b6b6b6` |
| **Icône** | `#939292` | `#ededed` | `#b6b6b6` |

> Token names : `chips/background/active` · `chips/border/{default|active|disabled}` · `chips/text/{default|active|disabled}` · `chips/icon/{default|active|disabled}`

### Typography

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Font family | `font/family/text` | Helvetica |
| Font weight (Default) | `font/weight/regular` | 400 |
| Font weight (Active) | `font/weight/bold` | 700 |
| Font size | `font/size/sm` | 14px |
| Letter spacing | — | 0.1px |

---

## Types

| Type | Description | Cas d'usage | Icon trailing |
|------|-------------|-------------|:-------------:|
| **Custom Chips** *(Filter)* | Toggle on/off — représente un filtre actif ou inactif | Filtres de recherche, catégories | — |
| **Input Chips** | Représente une saisie utilisateur, avec action de suppression | Champs e-mail, tags saisis, sélections multiples | ✓ (×) |
| **Suggestion Chips** | Propositions contextuelles en réponse à une action | Réponses rapides, suggestions après saisie | — |

---

## Interaction States

| État | Apparence | Description |
|------|-----------|-------------|
| **Default** | Outline seul, fond transparent | État standard — chip non sélectionnée |
| **Active** | Fond noir, texte/icône clairs | Chip sélectionnée ou filtre actif |
| **Disabled** | Border et texte gris clairs, non interactif | Option indisponible |

**Comportement tactile :**
- Taper sur un chip en état Default → passe à l'état Active (feedback immédiat)
- Dans une liste multiselect : taper sur un chip Active → retour à l'état Default

---

## General Principles

**Chips** are compact, versatile UI elements used to represent actions, choices, or filters. They display information clearly and efficiently, and can be interactive or static depending on their context.

---

## Usage

- Utiliser les chips pour représenter des entités comme des **tags**, **contacts**, **actions** ou **filtres**.
- Garder le contenu des chips **concis** pour éviter l'encombrement visuel.
- Utiliser un **style et un emplacement cohérents** dans toute l'application.

---

## Best Practices

- Le texte doit tenir sur **une seule ligne**, idéalement un ou deux mots courts.
- Utiliser des couleurs de fond ou des bordures différentes pour distinguer les états (default, active, disabled).
- Utiliser la **couleur pour indiquer le sens** (ex. vert = succès, rouge = erreur, gris = neutre).

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Garder les labels concis et clairs ("Size filter") | Ne pas utiliser des labels longs, vagues ou confus |
| Utiliser le style fourni par le Design System | Ne pas créer des chips trop petits pour interagir confortablement |

---

## Accessibilité

### Général

- Ne pas utiliser d'autres couleurs que celles du Design System — elles ont été conçues pour être accessibles.
- Fournir des labels clairs et concis pour les lecteurs d'écran.
- Utiliser le focus state natif iOS.

### Touch

- Quand un chip Default est tapé, l'état Active apparaît immédiatement — feedback visible.
- Dans les listes multiselect : taper un chip Active le remet en Default.
- La taille de tap minimale est **44 × 44px** — les chips à 32px de hauteur nécessitent une zone de tap étendue.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Aucun composant `DSChips` n'existe dans le codebase. L'interface ci-dessous est la cible à implémenter.

```typescript
// Interface cible (composant à créer : storybook/src/components/DSChips.tsx)
export type ChipsType = 'custom' | 'input' | 'suggestion';

export interface DSChipsProps {
  label: string;
  type?: ChipsType;           // défaut : 'custom'
  active?: boolean;           // défaut : false
  disabled?: boolean;         // défaut : false
  leadingIcon?: string;       // icône gauche (optionnel)
  trailingIcon?: string;      // icône droite, ex. '×' pour input chips (optionnel)
  count?: number;             // compteur de filtres actifs (optionnel)
  onClick?: () => void;
  onDismiss?: () => void;     // input chips uniquement
}
```

---

## Exemples d'utilisation

### Filter chip — Default

```tsx
<DSChips label="Size filter" leadingIcon="⚙" />
```

### Filter chip — Active

```tsx
<DSChips label="Size filter" active leadingIcon="⚙" />
```

### Filter chip — avec compteur

```tsx
<DSChips label="Filter" count={3} active />
```

### Input chip (avec dismiss)

```tsx
<DSChips
  type="input"
  label="Pink bag"
  active
  onDismiss={() => handleRemove('Pink bag')}
/>
```

### Suggestion chip

```tsx
<DSChips type="suggestion" label="Good idea!" onClick={handleSuggestion} />
```

### Disabled

```tsx
<DSChips label="Option" disabled />
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web | `storybook/src/components/DSChips.tsx` | ⚠️ À créer |
| Storybook stories | `storybook/src/stories/Chips.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | `InternalApp/Components/DSChips.swift` | ⚠️ À créer |
