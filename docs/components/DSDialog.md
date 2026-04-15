# DSDialog

> **Figma source** — [Internal European Design System · node 8573:4567](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8573-4567) · [Variables · node 8544:6573](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8544-6573)

---

## Overview

**Dialogs** are modal windows that prompt users to make decisions, acknowledge information, or complete short tasks. They interrupt the current flow, requiring user interaction before returning to the main UI.

> **Note** — `DSDialog` (modal with overlay) is distinct from `DSAlert` (`storybook/src/components/DSAlert.tsx`), which is an inline banner/toast.

---

## Anatomy

```
 [overlay: #202020cc]
 ┌─────────────────────────────────┐  ← 2px border-top (dialog/border-top/default)
 │                                 │
 │          Title          [×]     │  ← ① Title (centered) + ⑥ Close icon (absolute, optional)
 │                                 │
 │         Description             │  ← ② Description (optional, centered)
 │                                 │
 │ ■■■■■■■■■■ Action 1 ■■■■■■■■■ │  ← ③ Primary button (black fill, full width)
 │                                 │
 │ □□□□□□□□□□ Action 2 □□□□□□□□□ │  ← ④ Secondary button (border only, optional)
 │                                 │
 │          Action 3               │  ← ⑤ Tertiary button (underlined text, optional)
 │                                 │
 └─────────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Title** | ABChanel Corpo 2022 Bold · 16px · centré · `dialog/text/title` = `#000000`. Tronqué (text-ellipsis) si trop long |
| 2 | **Description** *(optionnel)* | Helvetica Regular · 16px · centré · `dialog/text/description` = `#333333` |
| 3 | **Primary button** | Fond noir `button/background/primary/default`, texte clair `button/text/primary/default`. Largeur pleine. Toujours présent |
| 4 | **Secondary button** *(optionnel)* | Bordure 1px `button/border/secondary/default`, texte `button/text/secondary/default`. Largeur pleine |
| 5 | **Tertiary button** *(optionnel)* | Texte souligné `button/text/tertiary/default`. ABChanel Semi Bold. Largeur pleine |
| 6 | **Close icon [×]** *(optionnel)* | 24 × 24px · positionné en haut à droite · `dialog/icon/default` = `#000000`. Uniquement pour les dialogs informationnels |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Padding (container) | `size/gap/md` | 16px |
| Gap header ↔ actions | `size/gap/xl` | 32px |
| Gap titre ↔ description | `size/gap/md` | 16px |
| Gap entre boutons | `size/gap/md` | 16px |
| Padding vertical titre | `size/gap/xs` | 8px |
| Width totale dialog | — | 345px |
| Width contenu interne | — | 313px (345 − 2 × 16) |
| Border-top épaisseur | — | 2px |
| Button min-height | — | 40px |
| Button padding horizontal | `size/gap/md` | 16px |
| Button padding vertical | `size/gap/xs` | 8px |
| Close icon size | — | 24 × 24px |
| Close icon position | — | absolute, top-right du header |

---

## Design Tokens

### Couleurs (source : node 8544:6573)

| Token | Valeur | Usage |
|-------|--------|-------|
| `dialog/background/surface` | `#ffffff` | Fond du dialog |
| `dialog/border-top/default` | `#000000` | Bordure supérieure 2px |
| `dialog/text/title` | `#000000` | Titre |
| `dialog/text/description` | `#333333` | Description |
| `dialog/icon/default` | `#000000` | Icône close [×] |
| `button/background/primary/default` | `#000000` | Fond bouton primaire |
| `button/text/primary/default` | `#ededed` | Texte bouton primaire |
| `button/border/secondary/default` | `#1d1d1d` | Bordure bouton secondaire |
| `button/text/secondary/default` | `#000000` | Texte bouton secondaire |
| `button/text/tertiary/default` | `#000000` | Texte bouton tertiaire |
| `transparency/overlay/stronger` | `#202020cc` | Overlay derrière le dialog (~80% opacité) |

### Typographie

| Style | Famille | Taille | Poids | Usage |
|-------|---------|--------|-------|-------|
| `heading/h4` | ABChanel Corpo 2022 | 16px (`font/size/md`) | 600 | Titre du dialog |
| `body/p1/paragraph` | Helvetica | 16px (`font/size/md`) | 400 | Description du dialog |
| `button/medium` | ABChanel Corpo 2022 | 16px (`font/size/md`) | 600 | Label boutons primaire et secondaire |
| — | ABChanel Corpo 2022 Semi Bold | 16px | 600 | Label bouton tertiaire (souligné) |

---

## Types

| Type | Description | Boutons | Cas d'usage |
|------|-------------|---------|-------------|
| **Alert Dialog** | Accusé de réception ou décision simple | 1 action (Confirm) | Notifications, erreurs critiques, confirmations simples |
| **Confirmation Dialog** | Vérification avant une action significative | 2 actions (Confirm + Cancel) | Suppression, validation de commande, fin de session |
| **Custom Dialog** | Contenu plus riche (formulaires, médias) avec objectif ciblé | 1 à 3 actions | Formulaires courts, résumé de vente, saisie guidée |

---

## Close [X] Icon — Règle d'usage

Éviter l'icône close [×] sur les dialogs qui **requièrent une décision de l'utilisateur**. Présenter à la place des boutons d'action explicites (Cancel, Save, Continue). L'icône close est réservée aux dialogs **uniquement informationnels**.

---

## Behavior & Interactions

- Les dialogs sont toujours **modaux** — ils bloquent l'interaction avec l'arrière-plan.
- Ils doivent être **dismissibles via une action explicite** (bouton Cancel, Close, ou Confirm) — jamais par tap sur l'overlay.
- L'overlay `transparency/overlay/stronger` (`#202020cc`) isole visuellement le dialog du contenu sous-jacent.

---

## General Principles

Dialogs are modal windows that prompt users to make decisions, acknowledge information, or complete short tasks. They interrupt the current flow, requiring user interaction before returning to the main UI.

---

## Usage

- Utiliser les dialogs **avec parcimonie** pour ne pas perturber l'expérience utilisateur.
- Garder le contenu **concis et centré sur un seul message clair**.
- Toujours fournir **une voie explicite pour fermer ou compléter** le dialog.
- Utiliser le type **Alert** pour les accusés simples (1 action), le type **Confirmation** pour les actions irréversibles.
- Afficher un **overlay** derrière le dialog pour concentrer l'attention et assombrir le contenu d'arrière-plan.

---

## Best Practices

- Garder le message **concis** et utiliser un langage clair et accessible.
- **Éviter l'abus de dialogs** — trop de modals dégradent l'expérience.
- Les **labels de boutons** doivent explicitement décrire l'action (ex. "Delete" plutôt que "OK").
- Utiliser des **styles destructifs** (couleur rouge) pour les actions irréversibles.

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Rédiger des titres brefs | Ne pas mettre trop de texte dans le titre |
| Utiliser le bouton primaire pour l'action de confirmation | Ne pas utiliser le bouton secondaire pour l'action de confirmation |
| Être précis sur le résultat de l'action ("Delete item" > "OK") | Ne pas proposer des choix génériques sur des actions spécifiques |
| Utiliser des images pour **appuyer** le message du dialog | Ne pas reposer uniquement sur les images pour communiquer une information critique |
| Utiliser **une seule action** pour les dialogs d'accusé de réception | Ne pas présenter plusieurs choix quand ce n'est pas nécessaire |
| Afficher l'icône close [×] sur les dialogs **uniquement informationnels** | Ne pas afficher close [×] sur les dialogs qui requièrent une décision |
| Afficher un overlay derrière le dialog pour concentrer l'attention | — |

---

## Accessibilité

- Ne pas utiliser d'autres couleurs que celles du Design System — elles ont été conçues pour être cohérentes et accessibles.
- Fournir des labels clairs et concis pour les lecteurs d'écran.
- Utiliser le **focus state natif iOS** — le focus doit se déplacer dans le dialog à l'ouverture.
- Le dialog doit avoir `role="dialog"` et `aria-modal="true"` ; le titre est lié via `aria-labelledby`.
- Les boutons ont des labels explicites (`aria-label` si nécessaire).

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Le codebase contient `DSAlert.tsx` (banner inline avec variantes error/warning/success/neutral) — composant **distinct** de `DSDialog`. Aucun `DSDialog` modal n'existe dans le codebase. L'interface ci-dessous est la cible à implémenter.

```typescript
// Interface cible (composant à créer : storybook/src/components/DSDialog.tsx)
export type DialogType = 'alert' | 'confirmation' | 'custom';

export interface DSDialogProps {
  title: string;
  description?: string;
  type?: DialogType;                // défaut : 'confirmation'
  primaryLabel: string;             // bouton primaire (toujours présent)
  secondaryLabel?: string;          // bouton secondaire (optionnel)
  tertiaryLabel?: string;           // bouton tertiaire (optionnel)
  showCloseIcon?: boolean;          // défaut : false — uniquement pour dialogs informationnels
  image?: React.ReactNode;          // contenu image/custom (type 'custom')
  onPrimary?: () => void;
  onSecondary?: () => void;
  onTertiary?: () => void;
  onClose?: () => void;             // appelé par Close [×] si showCloseIcon=true
}
```

---

## Exemples d'utilisation

### Alert Dialog (1 action)

```tsx
<DSDialog
  type="alert"
  title="Session ended"
  description="Your session has been ended successfully."
  primaryLabel="OK"
  onPrimary={() => handleClose()}
/>
```

### Confirmation Dialog (2 actions)

```tsx
<DSDialog
  type="confirmation"
  title="End mirror session"
  description="Would you like to end this client's mirror session?"
  primaryLabel="Confirm"
  secondaryLabel="Cancel"
  onPrimary={() => handleConfirm()}
  onSecondary={() => handleCancel()}
/>
```

### Confirmation Dialog (3 actions)

```tsx
<DSDialog
  type="confirmation"
  title="Save changes"
  description="Do you want to save your changes before leaving?"
  primaryLabel="Save"
  secondaryLabel="Discard"
  tertiaryLabel="Cancel"
  onPrimary={() => handleSave()}
  onSecondary={() => handleDiscard()}
  onTertiary={() => handleCancel()}
/>
```

### Informational Dialog (avec close icon)

```tsx
<DSDialog
  type="alert"
  title="Product information"
  description="This product is available in selected boutiques only."
  primaryLabel="Got it"
  showCloseIcon
  onPrimary={() => handleClose()}
  onClose={() => handleClose()}
/>
```

### iOS / SwiftUI

```swift
// Alert Dialog
DSDialog(
    title: "End mirror session",
    description: "Would you like to end this client's mirror session?",
    primaryLabel: "Confirm",
    secondaryLabel: "Cancel",
    onPrimary: { handleConfirm() },
    onSecondary: { handleCancel() }
)
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web (Alert) | `storybook/src/components/DSAlert.tsx` | ✅ Implémenté *(composant distinct — banner inline)* |
| React / Web (Dialog) | `storybook/src/components/DSDialog.tsx` | ⚠️ À créer |
| Storybook stories | `storybook/src/stories/Dialog.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | `InternalApp/Components/DSDialog.swift` | ⚠️ À créer |
