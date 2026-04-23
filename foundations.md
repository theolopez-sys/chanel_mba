---
scope: foundations
depends_on: []
figma_tokens_export: 2026-04-23
---

# Foundations — tokens iEDS

Tous les exemples de code utilisent des tokens. **Aucune valeur en dur n'est autorisée** — voir `rules.md`.

## Couleurs

Les tokens sont organisés par **rôle sémantique**, pas par valeur. Un changement de palette ne casse jamais le code.

### Surface

| Token | Usage | Valeur (référence) |
|---|---|---|
| `color/surface/primary` | Fond principal des écrans | `#FFFFFF` |
| `color/surface/secondary` | Cartes, panneaux | `#F7F5F2` |
| `color/surface/tertiary` | Sections subtiles | `#EFEDE8` |
| `color/surface/inverse` | Fond sombre (modales hautes) | `#0A0A0A` |

### Texte

| Token | Usage |
|---|---|
| `color/text/primary` | Corps de texte, titres |
| `color/text/secondary` | Sous-titres, métadonnées |
| `color/text/tertiary` | Placeholders, hints |
| `color/text/on-surface-inverse` | Texte sur fond sombre |

### Action

| Token | Usage |
|---|---|
| `color/action/primary` | CTA principal |
| `color/action/primary-hover` | Hover CTA |
| `color/action/secondary` | CTA secondaire |
| `color/action/danger` | Destructif (delete, logout) |

### Border

| Token | Usage |
|---|---|
| `border/subtle` | Séparateurs discrets |
| `border/default` | Inputs, cartes |
| `border/strong` | Focus, sélection |

**Règle critique** : ne jamais appliquer une couleur de rôle X sur un usage Y. Exemple : `color/action/danger` est *uniquement* pour une action destructrice, jamais pour un label "Important".

## Typographie

Toutes les compositions typo sont des tokens composites (font-family + size + weight + line-height + letter-spacing).

| Token | Usage |
|---|---|
| `typo/display/lg` | Hero, title de section |
| `typo/display/md` | H1 écran |
| `typo/title/lg` | H2 |
| `typo/title/md` | H3, titres de cartes |
| `typo/body/lg` | Corps de texte mis en valeur |
| `typo/body/md` | Corps par défaut |
| `typo/body/sm` | Métadonnées, captions |
| `typo/label/md` | Labels de form, boutons |
| `typo/label/sm` | Tags, badges |

Familles disponibles : `ABChanel Corpo Light`, `ABChanel Corpo Regular`, `ABChanel Corpo Semi Bold`.

## Espacement

Grille de 4px. Jamais de valeur hors grille.

| Token | Valeur | Usage typique |
|---|---|---|
| `spacing/0` | 0 | — |
| `spacing/2` | 4px | Icône + label interne |
| `spacing/4` | 8px | Intra-composant |
| `spacing/6` | 12px | Entre éléments liés |
| `spacing/8` | 16px | Gap standard |
| `spacing/12` | 24px | Entre sections |
| `spacing/16` | 32px | Sections majeures |
| `spacing/24` | 48px | Respirations larges |

## Radius

| Token | Valeur | Usage |
|---|---|---|
| `radius/none` | 0 | Séparateurs, bandeaux pleine largeur |
| `radius/sm` | 4px | Tags, petits badges |
| `radius/md` | 8px | Cartes, inputs, boutons |
| `radius/lg` | 16px | Modales, sheets |
| `radius/full` | 9999px | Avatars, chips |

## Elevation

Rôle plus que valeur. L'ombre exacte vient du token.

| Token | Usage |
|---|---|
| `elevation/0` | Flat, collé à la surface |
| `elevation/1` | Cartes au repos |
| `elevation/2` | Hover |
| `elevation/3` | Dropdowns, tooltips |
| `elevation/4` | Modales |

## Motion

| Token | Valeur | Usage |
|---|---|---|
| `motion/duration/fast` | 120ms | Micro-interactions |
| `motion/duration/base` | 200ms | Transitions UI standards |
| `motion/duration/slow` | 320ms | Entrées de modales |
| `motion/easing/standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default |

## Utilisation en code

```tsx
// ✅ OK
<div style={{
  background: 'var(--color-surface-secondary)',
  padding: 'var(--spacing-8)',
  borderRadius: 'var(--radius-md)',
}} />

// ❌ KO
<div className="bg-gray-50 p-4 rounded-lg" />
```

Pour Tailwind, utiliser exclusivement la config `tailwind.config.iEDS.js` qui expose ces tokens en classes.
