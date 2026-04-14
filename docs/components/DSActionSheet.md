# DSActionSheet

> **Figma source** — [Internal European Design System · node 10668:9705](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=10668-9705)

---

## Overview

**Action sheets** display a set of actions or options related to a specific trigger element. They slide up from the bottom of the screen and help users make choices without leaving the current context.

---

## Anatomy

```
┌─────────────────────────────┐
│          ——               │  ← 1. Drag handle
│                             │
│   Title (optional)          │  ← 2. Title
│                             │
│  [Icon]  Action default     │  ← 3. Action item (default)
│  [Icon]  Action disabled    │     Action item (disabled)
│  [Icon]  Action destructive │     Action item (destructive)
│  ─────────────────────────  │
│        Cancel               │  ← 4. Cancel button
└─────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Drag handle** | Indicateur de glissement — 24 × 2px, centré, couleur `bottom-sheet/drag-handle/default` |
| 2 | **Title** *(optionnel)* | Label contextuel, centré. Font ABChanel Corpo 2022 · 16px · weight 600 |
| 3 | **Action items** | Liste d'actions. Min-height 56px chacune. Icône optionnelle à gauche (24 × 24px) |
| 4 | **Cancel button** | Toujours présent. Hauteur 56px, séparé par un divider, texte centré |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Padding top | `size/gap/md` | 16px |
| Padding sides | `size/gap/md` | 16px |
| Padding bottom | `size/gap/xl` | 32px |
| Gap header ↔ actions | `size/gap/lg` | 24px |
| Action item padding | `size/gap/xs` | 8px |
| Icon ↔ label gap | `size/gap/xs` | 8px |
| Action item min-height | — | 56px |
| Action inner row height | — | 40px |
| Icon size | — | 24 × 24px |
| Drag handle | — | 24 × 2px |

---

## Design Tokens

### Container

| Token | Valeur (dark) | Valeur (light) |
|-------|--------------|----------------|
| `bottom-sheet/background/default` | `#000000` | `#FFFFFF` |
| `bottom-sheet/drag-handle/default` | `#939292` | `#939292` |
| `overlay/color/color` | `rgba(32,32,32,0.80)` | — |

### Action items

| État | Token texte | Valeur (dark) | Token icône | Valeur (dark) |
|------|-------------|--------------|-------------|--------------|
| **Default** | `action-sheet/text/default` | `#f7f7f7` | `action-sheet/icon/default` | `#939292` |
| **Disabled** | `action-sheet/text/disabled` | `#4d4d4d` | `action-sheet/icon/disabled` | `#4d4d4d` |
| **Destructive** | `action-sheet/text/destructive` | `#f4a8a4` | `action-sheet/icon/destructive` | `#f4a8a4` |

### Typography

| Propriété | Token | Valeur confirmée |
|-----------|-------|-----------------|
| Font family | `font/family/title` | ABChanel Corpo 2022 |
| Font weight | `font/weight/bold` | 600 |
| Font size | `font/size/sm` | 14px |
| Letter spacing | — | 0.1px |
| Line height | — | normal |

---

## Types d'actions

| Type | Comportement | Token couleur |
|------|-------------|---------------|
| **Default** | Action disponible et cliquable | `action-sheet/text/default` |
| **Disabled** | Non disponible, activable dans certains contextes | `action-sheet/text/disabled` |
| **Destructive** | Action irréversible ou dangereuse | `action-sheet/text/destructive` |

---

## General Principles

**Action sheets** display a set of actions or options related to a specific trigger element. They slide up from the bottom of the screen and help users make choices without leaving the current context.

---

## Usage

Utiliser une action sheet pour :

- Proposer des **actions contextuelles** liées à l'écran ou à la sélection en cours
- Permettre à l'utilisateur de **choisir parmi 1 à plusieurs options** clairement libellées
- Présenter des **sélections compactes** sans passer par un dialog
- Regrouper des **commandes liées** sous un bouton (ex. : icône "trois points")

---

## Best Practices

- Utiliser les icônes uniquement pour **renforcer le sens** — pas à titre décoratif
- **Différencier visuellement** les actions destructives (couleur + icône)
- Positionner la sheet pour **ne pas masquer le contenu clé**
- Utiliser une **animation d'entrée/sortie** (fade ou scale) — discrète, non distrayante
- Ne jamais dépasser **2 actions destructives** dans une même action sheet

---

## Props (React / TypeScript)

```typescript
export interface ActionSheetOption {
  label: string;
  icon?: string;          // SF Symbol (iOS) ou emoji/string (web)
  destructive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DSActionSheetProps {
  title?: string;
  description?: string;
  options: ActionSheetOption[];
  cancelLabel?: string;   // défaut : 'Annuler'
  onCancel?: () => void;
  open?: boolean;         // défaut : true
}
```

---

## Exemples d'utilisation

### Default

```tsx
<DSActionSheet
  title="Options du document"
  options={[
    { label: 'Modifier',   icon: '✎', onClick: () => {} },
    { label: 'Partager',   icon: '↗', onClick: () => {} },
    { label: 'Dupliquer',  icon: '⊕', onClick: () => {} },
    { label: 'Supprimer',  icon: '🗑', destructive: true, onClick: () => {} },
  ]}
  onCancel={() => {}}
/>
```

### Avec description (action de confirmation)

```tsx
<DSActionSheet
  title="Supprimer le projet ?"
  description="Cette action est irréversible. Toutes les données associées seront perdues."
  options={[
    { label: 'Supprimer définitivement', destructive: true, onClick: () => {} },
  ]}
  cancelLabel="Conserver le projet"
  onCancel={() => {}}
/>
```

### Avec option désactivée

```tsx
<DSActionSheet
  title="Actions"
  options={[
    { label: 'Modifier',                    icon: '✎', onClick: () => {} },
    { label: 'Exporter (bientôt disponible)', icon: '↓', disabled: true },
    { label: 'Supprimer',                   icon: '🗑', destructive: true, onClick: () => {} },
  ]}
  onCancel={() => {}}
/>
```

---

## Accessibilité

- Le container a `role="dialog"` et `aria-modal`
- `aria-label` = `title` si défini, sinon `'Options'`
- Les actions **disabled** ont l'attribut `disabled` natif (pas de `aria-disabled` seul)
- La zone de tap minimum est **44 × 44px** — les items ont min-height 56px, conforme
- Fermeture par tap sur le **backdrop** (`onCancel`) ou bouton **Cancel**
- Ordre de lecture : drag handle → titre → actions (haut → bas) → cancel

---

## Implémentation

| Plateforme | Fichier |
|------------|---------|
| React / Web | `storybook/src/components/DSActionSheet.tsx` |
| Storybook stories | `storybook/src/stories/ActionSheet.stories.tsx` |
| iOS / SwiftUI | *(à créer)* `InternalApp/Components/DSActionSheet.swift` |
