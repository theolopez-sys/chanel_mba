# DSDatePicker

> **Figma source** — [Internal European Design System · node 7954:8218](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7954-8218) · [Variables · node 7662:6456](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=7662-6456)

---

## Overview

**Date Picker** lets users select a date, time, or both using native iOS interactions. It is always presented in a bottom sheet and supports two modes: a compact wheel/drum-roll picker (type **Date**) and a full calendar grid (type **Calendar**).

> **Reference Apple HIG** — [https://developer.apple.com/design/human-interface-guidelines/pickers](https://developer.apple.com/design/human-interface-guidelines/pickers)

---

## Anatomy

### Bottom Sheet wrapper (both types)

```
┌──────────────────────────────────────────┐
│ [gradient overlay — 8px blur]            │
│  ┌────────────────────────────────────┐  │
│  │            ——                      │  │  ← Handle (2 × 24px)
│  │                                    │  │
│  │   [Date wheel  OR  Calendar grid]  │  │  ← ① Date/Calendar view
│  │                                    │  │
│  │   Time                [8:00 AM]   │  │  ← ② Time row (optional)
│  │                                    │  │
│  │   [Cancel]          [Confirm]     │  │  ← ③ Action buttons
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

### Type Date — Drum-roll / Wheel picker

```
┌────────────────────────────────────────────┐
│  [frosted glass background]                │
│                                            │
│   ...May...   ...13...   ...2023...        │
│  ████████████████████████████████████      │  ← Selection row (35px, rounded-[7px])
│   ...June..   ...14...   ...2024...        │  ← Active columns
│   ...July..   ...15...   ...2025...        │
│                                            │
└────────────────────────────────────────────┘
 ①  Month col   ② Day col   ③ Year col         ← 3 scroll columns
```

### Type Calendar — Grid view

```
┌────────────────────────────────────────────┐
│  ←  June 2024  ▾                       →  │  ← Header (44px): month/year + nav arrows
│ SUN  MON  TUE  WED  THU  FRI  SAT          │  ← Weekday row (20px, bold 14px)
│  2    3    4    5    6    7    8            │
│  9   10   11   12   13   14   15           │
│ 16   17   18   19   20   21   22           │
│ 23  [24]  25  ●26   27   28   29           │  ← [24] = today (bold), ●26 = unavailable
│ 30                                         │
└────────────────────────────────────────────┘
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Bottom sheet** | Container `date-picker/bottom-sheet` — gradient overlay avec blur 8px. Contenu dans `date-picker/selector` (fond blanc, pt=16px, pb=32px, px=16px, gap=24px) |
| 2 | **Handle** | Indicateur de drag — 2 × 24px, centré en haut du sheet |
| 3 | **Date and Time - Elements** | Contenu principal — type `Date` (wheel 297 × 213px) ou `Calendar` (grille 343px wide) |
| 4 | **Calendar header** | Présent type Calendar uniquement. Hauteur 44px — mois/année à gauche + flèches de navigation + chevron disclosure |
| 5 | **Weekday row** | Présent type Calendar uniquement. Hauteur 20px — 7 colonnes (SUN → SAT), bold 14px |
| 6 | **Day grid** | Cellules 44 × 44px — 5 semaines max. Styles : light 20px (inactif), bold 20px (aujourd'hui), medium 24px sur fond coloré (sélectionné), fond `#ec756f` (indisponible) |
| 7 | **Time row** | *(optionnel)* Hauteur 44px — label "Time" à gauche, pill horodatage à droite. Fond `date-picker/background/time` |
| 8 | **Action buttons** | Cancel (ghost underlined) + Confirm (secondary bordered), gap=24px, min-h=40px chacun |

---

## Spacing & Layout

### Bottom sheet selector

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Padding top | `size/gap/md` | 16px |
| Padding bottom | `size/gap/xl` | 32px |
| Padding horizontal | `size/gap/md` | 16px |
| Gap entre sections | `size/gap/lg` | 24px |

### Type Date — Drum-roll container

| Propriété | Valeur |
|-----------|--------|
| Width | 297px |
| Height | 213px |
| Padding horizontal | 20px |
| Padding vertical | 18px |
| Border-radius | 13px |
| Selection row height | 35px |
| Selection row radius | 7px |
| Blur (frosted glass) | 25px |

### Type Calendar — Grid

| Propriété | Valeur |
|-----------|--------|
| Container width | 343px |
| Calendar header height | 44px |
| Weekday row height | 20px |
| Day cell size | 44 × 44px |
| Day gap (vertical) | 7px |
| Calendar padding horizontal | 16px |

### Time row

| Propriété | Token/Valeur |
|-----------|--------------|
| Row height | 44px |
| Row padding horizontal | 16px |
| Time pill padding horizontal | 11px |
| Time pill padding vertical | 6px |
| Time pill border-radius | 6px |

### Action buttons

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Gap entre boutons | `size/gap/lg` | 24px |
| Min-height par bouton | — | 40px |
| Padding horizontal | `size/gap/md` | 16px |
| Padding vertical | `size/gap/xs` | 8px |
| Confirm border | `size/border/default` | 1px |

---

## Design Tokens

### Couleurs (source : node 7662:6456 — CSS custom property fallbacks)

| Token | Valeur | Usage |
|-------|--------|-------|
| `date-picker/background/surface` | `#ffffff` | Fond du bottom sheet (selector) |
| `date-picker/background/time` | `rgba(32,32,32,0.05)` | Fond pill de l'horodatage (Time row) |
| `date-picker/text/important` | `#000000` | Mois/année header, label "Time", text horodatage, aujourd'hui (bold) |
| `date-picker/text/days` | `#5a5a5a` | Chiffres des jours non sélectionnés |
| `date-picker/text/weekdays` | `#5a5a5a` | Entêtes des jours (SUN / MON / …) |
| `date-picker/text/selected` | `#ededed` | Texte du jour sélectionné (sur fond coloré) |
| `bottom-sheet/overlay/blu` | `8px` | Blur de l'overlay fond du bottom sheet |
| `colors/error/low` | `#ec756f` | Fond d'un jour indisponible/bloqué dans le calendrier |
| `button/border/secondary/default` | `#1d1d1d` | Bordure du bouton Confirm |
| `button/text/secondary/default` | `#000000` | Texte du bouton Confirm |
| `button/text/tertiary/default` | `#000000` | Texte du bouton Cancel |
| `labels/primary` | `#000000` | Overlay de sélection sur le drum-roll |

### Typographie

| Style | Famille | Taille | Poids | Usage |
|-------|---------|--------|-------|-------|
| `body/p1/important` | Helvetica | 16px (`font/size/md`) | 600 | Mois/année header, label "Time" |
| `body/p2/important` | Helvetica | 14px (`font/size/sm`) | 700 | Entêtes weekdays (SUN/MON…) |
| `body/p1/paragraph` | Helvetica | 16px (`font/size/md`) | 400 | Texte bouton Confirm |
| `heading/h3` | ABChanel_Corpo_2022 | 20px (`font/size/lg`) | 600 | Bouton Cancel (underlined) |
| `Body/Regular` *(iOS natif)* | SF Pro | 17px | 400 | Horodatage (8:00 AM), lineHeight=22px, tracking=-0.43px |
| Day — inactif | Helvetica Light | 20px (`font/size/lg`) | 300 | Jours non sélectionnés |
| Day — aujourd'hui | Helvetica Bold | 20px (`font/size/lg`) | 700 | Jour courant (en gras) |
| Day — sélectionné | SF Pro Medium | 24px | 510 | Jour sélectionné (sur fond coloré) |

---

## Types

| Type | Description | Cas d'usage |
|------|-------------|-------------|
| **Date** | Drum-roll iOS natif — 3 colonnes défilantes (Mois / Jour / Année). Container 297 × 213px avec fond frosted-glass. | Saisie rapide d'une date — contexte compact ou modal courte durée |
| **Calendar** | Grille calendrier complète — header navigation + rangées de jours + row Time optionnelle. Width 343px. | Sélection visuelle précise, plages de dates, choix avec contexte mensuel |

---

## Interaction States

| État / Jour | Apparence | Token |
|-------------|-----------|-------|
| **Inactif** | Helvetica Light 20px, gris | `date-picker/text/days` = `#5a5a5a` |
| **Aujourd'hui** | Helvetica Bold 20px, noir | `date-picker/text/important` = `#000000` |
| **Sélectionné** | SF Pro Medium 24px, blanc sur fond coloré, rounded-[100px] | `date-picker/text/selected` = `#ededed` |
| **Indisponible** | SF Pro Medium 24px, blanc sur fond rouge | fond `colors/error/low` = `#ec756f`, texte `#ededed` |

---

## General Principles

The Date Picker leverages native iOS behaviors and follows Apple Human Interface Guidelines for date/time selection. It is always presented in a bottom sheet with a frosted glass effect to maintain visual hierarchy. Two modes are available: a compact wheel picker and a full calendar grid. The Cancel/Confirm button pattern ensures intentional validation before applying the selected date.

---

## Usage

- Utiliser le **type Date** (drum-roll) pour une saisie rapide et compacte d'une date.
- Utiliser le **type Calendar** pour une sélection visuelle avec contexte mensuel ou pour des plages de dates.
- Toujours présenter le picker dans un **bottom sheet** — ne jamais l'afficher inline dans un formulaire.
- Toujours afficher les boutons **Cancel** et **Confirm** — ne pas fermer automatiquement sans confirmation.
- Ouvrir le calendrier à la **date courante** par défaut — ne pas ouvrir à une date aléatoire.
- Utiliser la **rangée Time** (`showTime`) uniquement lorsque l'heure est pertinente pour le contexte.

---

## Best Practices

- Respecter les comportements **natifs iOS** — ne pas recréer les interactions de scroll, momentum, ou sélection en custom.
- Le drum-roll (type Date) utilise un **fond frosted-glass** (blur 25px + `date-picker/background/surface`) — ne pas modifier cet effet.
- Utiliser les tokens `date-picker/*` pour toutes les couleurs — ne jamais hardcoder de valeurs.

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Utiliser les comportements iOS natifs (UIDatePicker, SwiftUI DatePicker) | Ne pas recréer un sélecteur de date custom non natif |
| Ouvrir le calendrier à la date courante | Ne pas ouvrir le calendrier à une date aléatoire |
| Présenter le picker dans un bottom sheet avec overlay blur | Ne pas afficher le picker inline dans un formulaire |
| Fournir Cancel + Confirm pour valider la sélection | Ne pas fermer le sheet automatiquement sans confirmation utilisateur |

---

## Accessibilité

- Les pickers iOS natifs (`UIDatePicker` / SwiftUI `DatePicker`) incluent le support VoiceOver par défaut — utiliser les composants système.
- Les boutons Cancel et Confirm ont un `accessibilityLabel` explicite.
- La taille minimale de tap des boutons est **40px** (`min-h-[40px]`) — conforme aux guidelines Apple (44pt recommandé, 40pt acceptable).
- Les jours indisponibles doivent avoir `accessibilityTraits = .notEnabled` côté SwiftUI / iOS.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : Aucun composant `DSDatePicker` n'existe dans le codebase React ni SwiftUI. L'interface ci-dessous est la cible à implémenter. Ce composant repose sur des interactions iOS natives — une implémentation React/Web est donc limitée à un bottom sheet avec une date input native.

```typescript
// Interface cible (composant à créer : storybook/src/components/DSDatePicker.tsx)
export type DatePickerType = 'date' | 'calendar';

export interface DSDatePickerProps {
  type?: DatePickerType;      // défaut : 'date' (drum-roll)
  value?: Date;               // date initiale (défaut : today)
  minDate?: Date;             // date minimum sélectionnable
  maxDate?: Date;             // date maximum sélectionnable
  showTime?: boolean;         // défaut : false — affiche la Time row
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
}
```

---

## Exemples d'utilisation

### iOS / SwiftUI — Type Date (drum-roll)

```swift
// Utilise le DatePicker natif SwiftUI avec style .wheel
DatePicker(
    "Select date",
    selection: $selectedDate,
    displayedComponents: .date
)
.datePickerStyle(.wheel)
.labelsHidden()
// Présenté dans un bottom sheet avec Cancel / Confirm
```

### iOS / SwiftUI — Type Calendar (grille)

```swift
// Utilise le DatePicker natif SwiftUI avec style .graphical
DatePicker(
    "Select date",
    selection: $selectedDate,
    displayedComponents: [.date, .hourAndMinute]
)
.datePickerStyle(.graphical)
// Présenté dans un bottom sheet avec Cancel / Confirm
```

### React / Web — Bottom sheet avec type Date

```tsx
<DSDatePicker
  type="date"
  value={selectedDate}
  onConfirm={(date) => setSelectedDate(date)}
  onCancel={() => setPickerOpen(false)}
/>
```

### React / Web — Type Calendar avec Time

```tsx
<DSDatePicker
  type="calendar"
  value={selectedDate}
  showTime
  minDate={new Date()}
  onConfirm={(date) => handleDateSelected(date)}
  onCancel={() => setPickerOpen(false)}
/>
```

---

## Implémentation

| Plateforme | Fichier | Statut |
|------------|---------|--------|
| React / Web | `storybook/src/components/DSDatePicker.tsx` | ⚠️ À créer |
| Storybook stories | `storybook/src/stories/DatePicker.stories.tsx` | ⚠️ À créer |
| iOS / SwiftUI | `InternalApp/Components/DSDatePicker.swift` | ⚠️ À créer |
