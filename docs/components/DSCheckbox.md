# DSCheckbox & DSRadio

> **Figma source** — [Internal European Design System · node 7294:7047](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7294-7047) · [Variables · node 7289:6232](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7289-6232)

---

## Overview

**Selection controls** let users choose from a set of options. **Checkboxes** allow multiple simultaneous selections; **radio buttons** allow only one selection at a time. Both components share the same layout and token system.

---

## Anatomy

```
Default type:
  [☐/◯]  Label                    ← ① Control + ② Label

List type:
┌──────────────────────────────┐
│  [☐/◯]  Label            64px│  ← ① Control + ② Label
│          Subtitle             │  ← ③ Subtitle (optional)
│ ─────────────────────────── │  ← ④ Divider
└──────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Control** | Checkbox (carré 24 × 24px) ou Radio button (cercle 24 × 24px) |
| 2 | **Label** | Texte principal. Helvetica · 16px · weight 400 · `checkbox/text/default` |
| 3 | **Subtitle** *(optionnel)* | Texte secondaire, visible uniquement en type List. Helvetica · 14px · `checkbox/text/subtitle` |
| 4 | **Divider** *(list type)* | Séparateur horizontal entre les items. `divider/default` |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Gap control ↔ label (Default) | `size/gap/xs` | 8px |
| Padding (List type) | `size/gap/md` | 16px |
| Control size | — | 24 × 24px |
| Min-height (List type) | — | 64px |
| Label font-size | `font/size/md` | 16px |
| Subtitle font-size | `font/size/sm` | 14px |

---

## Design Tokens

### Texte et séparateurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `checkbox/text/default` | `#000000` | Label de la checkbox |
| `checkbox/text/subtitle` | `#5a5a5a` | Subtitle de la checkbox (list type) |
| `radio/text/default` | `#000000` | Label du radio button |
| `radio/text/subtitle` | `#5a5a5a` | Subtitle du radio button (list type) |
| `divider/default` | `#ededed` | Séparateur dans le type List |

---

## Types

| Type | Description | Cas d'usage |
|------|-------------|-------------|
| **Default** | Contrôle seul, aligné horizontalement avec son label | Formulaires courts, options isolées |
| **List** | Contrôle dans une rangée de 64px avec label, subtitle optionnel et divider | Listes longues et scannables, options à comparer |

---

## Interaction States

| État | Apparence | Description |
|------|-----------|-------------|
| **Default** | Contour neutre, fond transparent | État non sélectionné |
| **Active** | Fond noir, icône blanche (checkbox) / cercle intérieur blanc (radio) | État sélectionné |
| **Disabled** | Opacité réduite (0.4), curseur `not-allowed` | Option non disponible |

---

## Checkbox vs Radio

| Critère | Checkbox | Radio |
|---------|----------|-------|
| Sélection | Multiple (N parmi N) | Unique (1 parmi N) |
| Groupement | Indépendants ou groupés | Toujours dans un groupe |
| Annulation | Peut être décoché | Ne peut pas être décoché |
| Usage type | Préférences, filtres, conditions | Choix exclusifs, modes |

---

## General Principles

Selection controls are fundamental form elements. Checkboxes enable multi-select scenarios while radio buttons enforce a single-choice selection. Both should be used with clear, concise labels that make the choice immediately understandable.

---

## Usage

- Les **checkboxes** permettent à l'utilisateur de sélectionner plusieurs options indépendantes.
- Les **radio buttons** permettent de choisir **une seule** option parmi un groupe.
- Utiliser le type **List** pour les longues listes d'options que l'utilisateur doit comparer.
- Toujours grouper les contrôles liés avec un label de groupe (`<fieldset>` / `role="group"`).
- Un groupe de radio buttons doit **toujours** avoir une option sélectionnée par défaut.

---

## Best Practices

- Garder les labels **courts et clairs** — idéalement une ligne.
- Rédiger les labels sous forme de **fragments nominaux ou verbaux sans ponctuation finale**.
- Préférer une **formulation positive** : "Activer les notifications" plutôt que "Désactiver les notifications".

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Rédiger les labels comme des fragments sans ponctuation finale ("Recevoir les mises à jour") | Ne pas ajouter de point final au label ("Recevoir les mises à jour.") |
| Utiliser une formulation positive pour les labels ("Activer les notifications") | Ne pas utiliser une formulation négative ("Désactiver les notifications") |
| Utiliser un seul type de contrôle au sein d'un groupe (uniquement checkbox OU uniquement radio) | Ne pas mélanger checkbox et radio dans le même groupe d'options |
| Utiliser la variante List pour les longues listes d'options à comparer | Ne pas mettre trop de texte dans un label |

---

## Accessibilité

- Les checkboxes ont `role="checkbox"` et `aria-checked` (true / false / mixed).
- Les radio buttons ont `role="radio"` et `aria-checked`, regroupés dans un `role="radiogroup"`.
- Le label doit être associé au contrôle via `htmlFor` / `for` ou être encapsulé dans `<label>`.
- La taille de tap minimale est **44 × 44px** — les items List ont min-height 64px, conforme.
- Les états disabled utilisent l'attribut `disabled` natif (pas uniquement `aria-disabled`).

---

## Props (React / TypeScript)

```typescript
// DSRadioButton — implémentation actuelle (DSRadioButton.tsx)
export interface DSRadioButtonProps {
  label: string;
  value: string;
  selected?: boolean;   // défaut : false
  disabled?: boolean;   // défaut : false
  onChange?: (value: string) => void;
}

// DSRadioGroup — implémentation actuelle (DSRadioButton.tsx)
export interface DSRadioGroupProps {
  options: Array<{ label: string; value: string }>;
  value?: string;
  disabled?: boolean;   // défaut : false
  onChange?: (value: string) => void;
}

// DSCheckbox — interface cible (composant à créer)
export interface DSCheckboxProps {
  label: string;
  checked?: boolean;         // défaut : false
  disabled?: boolean;        // défaut : false
  subtitle?: string;         // list type uniquement
  type?: 'default' | 'list'; // défaut : 'default'
  onChange?: (checked: boolean) => void;
}
```

> ⚠️ **Gap Design System / Code** : `DSCheckbox` n'existe pas encore dans le code — seul `DSRadioButton.tsx` est implémenté. Un composant `DSCheckbox.tsx` est à créer selon cette interface cible.

---

## Exemples d'utilisation

### Radio — Default

```tsx
<DSRadioGroup
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ]}
  value="a"
  onChange={(v) => console.log(v)}
/>
```

### Radio — Single button

```tsx
<DSRadioButton label="Non sélectionné" value="a" selected={false} />
<DSRadioButton label="Sélectionné"     value="b" selected={true}  />
<DSRadioButton label="Désactivé"       value="c" disabled         />
```

### Checkbox — Interface cible (à implémenter)

```tsx
{/* Standalone */}
<DSCheckbox
  label="Recevoir les mises à jour par e-mail"
  checked={isChecked}
  onChange={setIsChecked}
/>

{/* List type avec subtitle */}
<DSCheckbox
  label="Option 1"
  subtitle="Description courte"
  type="list"
  checked
/>
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web (Radio) | `storybook/src/components/DSRadioButton.tsx` | ✅ Implémenté |
| Storybook (Radio) | `storybook/src/stories/RadioButton.stories.tsx` | ✅ Implémenté |
| React / Web (Checkbox) | `storybook/src/components/DSCheckbox.tsx` | ⚠️ À créer |
| Storybook (Checkbox) | `storybook/src/stories/Checkbox.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | *(à créer)* `InternalApp/Components/DSCheckbox.swift` | ⚠️ À créer |
