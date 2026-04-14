# DSBadge

> **Figma source** — [Internal European Design System · node 9303:5026](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=9303-5026) · [Variables · node 8259:5257](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System?node-id=8259-5257)

---

## Overview

**Badges** are small, attention-catching UI elements used to show status, counts, or context. They should enhance the content they support, and be used sparingly to avoid visual overwhelm.

---

## Anatomy

```
Primary (filled container):
┌─────────────────────────┐
│  [●/icon]  Label        │  ← ① Filled container
└─────────────────────────┘
    ↑ ②                       ← ② Icon ou dot (optionnel, gauche)
               ↑ ③            ← ③ Label

Secondary (no fill):
  [●/icon]  Label              ← Texte coloré, pas de fond
```

| # | Élément | Description |
|---|---------|-------------|
| 1 | **Filled container** | Présent uniquement sur les badges **Primary**. Border-radius `size/size-1500` = 120px |
| 2 | **Icon ou dot** *(optionnel)* | Positionné à gauche du label. Icon 16 × 16px · Dot 6 × 6px |
| 3 | **Label** | Texte court (1–3 mots). Font Helvetica · 14px · weight 400 |

---

## Spacing & Layout

| Propriété | Token | Valeur |
|-----------|-------|--------|
| Padding vertical | `size/gap/2xs` | 6px |
| Padding horizontal | `size/gap/sm` | 12px |
| Gap icon/dot ↔ label | `size/gap/3xs` | 4px |
| Min-height | — | 28px |
| Icon size | — | 16 × 16px |
| Dot size | — | 6 × 6px |
| Border-radius (Primary) | `size/size-1500` | 120px |
| Border-radius (Secondary) | `size/full` | 999px |

---

## Design Tokens

### Typography

| Propriété | Token | Valeur confirmée |
|-----------|-------|-----------------|
| Font family | `font/family/text` | Helvetica |
| Font weight | `font/weight/regular` | 400 |
| Font size | `font/size/sm` | 14px |
| Letter spacing | — | 0.1px |
| Line height | — | normal |

### Couleurs par état (source : node 8259:5257)

| Propriété | Neutral | Informative | Success | Warning | Error |
|-----------|:-------:|:-----------:|:-------:|:-------:|:-----:|
| **Background** | `#f7f7f7` | `#26477a` | `#ebfcf3` | `#fffae4` | `#ffece8` |
| **Border** | `#b6b6b6` | `#4670c0` | `#9be3c7` | `#ffe680` | `#ec756f` |
| **Texte primary** | `#000000` | `#dceafb` | `#1c4935` | `#5a4404` | `#601019` |
| **Icône primary** | `#333333` | `#b7ccf6` | `#256043` | `#855e00` | `#74171e` |
| **Texte secondary** | `#000000` ¹ | `#3b629f` | `#2e825f` | `#855e00` | `#a92831` |
| **Icône secondary** | `#333333` ¹ | `#5983e4` | `#3ca478` | `#b98917` | `#e04846` |
| **Dot** | `#000000` | `#5983e4` | `#3ca478` | `#b98917` | `#e04846` |

> ¹ L'état **neutral** n'a pas de variante `/primary/` ou `/secondary/` — les tokens `badge/text/neutral` (`#000000`) et `badge/icon/neutral` (`#333333`) s'appliquent aux deux types.

---

## Types

| Type | Description | Cas d'usage |
|------|-------------|-------------|
| **Primary** | Fond coloré (`badge/background/*`) + texte contrasté | Information critique nécessitant l'attention, doit se distinguer du contenu environnant |
| **Secondary** | Sans fond — texte coloré uniquement (`badge/text/secondary/*`) | Information contextuelle ou secondaire, rôle de label discret |

---

## Left element

| Variante | Composition | Cas d'usage |
|----------|-------------|-------------|
| **Simple** | Label seul | Statut textuel, compteur, tag générique |
| **Icon Badge** | Icon 16 × 16px + Label | Catégories ou élément illustratif (ex. mode, cadeau) |
| **Dot Badge** | Dot 6 × 6px + Label | Indicateur de statut d'activité (ex. point rouge = nouvelle activité) |

---

## States

| État | Couleur | Description | Exemples |
|------|---------|-------------|----------|
| **Neutral** | Gris | Ton neutre pour informations génériques ou secondaires | `"Draft"`, `"En cours"` |
| **Informative** | Bleu | Valeur informative non générique | `"In transit"`, `"Nouveau"` |
| **Success** | Vert | Résultat positif ou confirmation | `"Envoyé"`, `"Actif"`, `"Validé"` |
| **Warning** | Orange | Avertissement ou besoin d'attention | `"Faible"`, `"Expiration proche"` |
| **Error** | Rouge | Échec ou problème critique | `"Échoué"`, `"Erreur"` |

---

## General Principles

**Badges** are small, attention-catching UI elements used to show status, counts, or context. They should enhance the content they support, and be used sparingly to avoid visual overwhelm.

---

## Usage

- Les badges servent à communiquer des informations compactes telles que des **indicateurs de statut**, des **compteurs de notifications**, ou des **tags catégoriels**.
- Ils peuvent apparaître seuls ou combinés à d'autres composants (ex. boutons, onglets, icônes).
- Garder le contenu des badges **concis et significatif**.
- Utiliser les badges de façon **cohérente** dans toute l'application pour renforcer leur rôle.
- Les badges ne sont **pas** des actions et ne peuvent pas être interactifs.

---

## Best Practices

- Aligner icône et texte horizontalement avec un padding cohérent.
- Le texte doit tenir sur **une seule ligne**, idéalement un ou deux mots courts.
- Utiliser la **couleur pour indiquer le sens** (ex. vert = succès, rouge = erreur, gris = neutre).

---

## Do's & Don'ts

| Do ✓ | Don't ✗ |
|------|---------|
| Garder le contenu du badge bref (idéalement 1–3 mots) | Ne pas surcharger avec un texte long ou plusieurs phrases |
| Utiliser des icônes pertinentes et non intrusives | Ne pas utiliser des icônes perçues comme des actions cliquables |
| Utiliser les badges pour des informations succinctes et essentielles | Ne pas surutiliser les badges pour des informations non essentielles |
| Utiliser couleur et forme de façon cohérente pour indiquer le sens | Ne pas utiliser les badges comme éléments interactifs |

---

## Accessibilité

- Ne pas utiliser d'autres couleurs que celles du Design System — elles ont été conçues pour être accessibles.
- Fournir des labels clairs et concis pour les lecteurs d'écran (`aria-label` si le badge ne contient pas de texte lisible).
- Note : les contrastes ont été validés par le Design System pour chaque état sémantique.

---

## Props (React / TypeScript)

> ⚠️ **Gap Design System / Code** : L'implémentation actuelle utilise 4 variantes (`dark`, `accent`, `neutral`, `outlined`) qui ne correspondent pas aux 2 types × 5 états définis dans le Figma DS. Une refonte vers les tokens sémantiques est recommandée.

```typescript
// Implémentation actuelle
export interface DSBadgeProps {
  text: string;
  variant?: 'dark' | 'accent' | 'neutral' | 'outlined'; // défaut : 'dark'
}

// Interface cible (alignée Figma DS)
export interface DSBadgeProps {
  label: string;
  state?: 'neutral' | 'informative' | 'success' | 'warning' | 'error'; // défaut : 'neutral'
  type?: 'primary' | 'secondary';  // défaut : 'primary'
  icon?: string;   // optionnel, 16 × 16px
  dot?: boolean;   // si true, affiche un dot 6 × 6px à gauche du label
}
```

---

## Exemples d'utilisation

### Dark

```jsx
<DSBadge text="!" variant="dark" />
```

### Accent (notification)

```jsx
<DSBadge text="New" variant="accent" />
```

### Neutral

```jsx
<DSBadge text="En cours" variant="neutral" />
```

### Outlined

```jsx
<DSBadge text="Draft" variant="outlined" />
```

### All variants

```jsx
<>
  <DSBadge text="New"      variant="accent"   />
  <DSBadge text="!"        variant="dark"     />
  <DSBadge text="En cours" variant="neutral"  />
  <DSBadge text="Draft"    variant="outlined" />
</>
```

---

## Implémentation

| Plateforme | Fichier |
|------------|---------|
| React / Web | `storybook/src/components/DSBadge.jsx` |
| Storybook stories | `storybook/src/stories/Badge.stories.jsx` |
| iOS / SwiftUI | `InternalApp/Components/DSBadge.swift` |
