---
scope: transverse
priority: critical
---

# Règles transverses iEDS

Ces règles s'appliquent à **tout** code produit à partir de cette documentation. Elles ont priorité sur les conventions externes (Tailwind vanilla, MUI, etc.).

## Librairie — interdiction stricte

| Librairie | Usage |
|---|---|
| iEDS | ✅ **Seul autorisé** |
| Chanel [.COM] / ABCHANEL 22 | ❌ Interdit |
| [OLD][.COM] Components | ❌ Interdit |
| [APP HC FSH] | ❌ Interdit |
| [APP FSH] | ❌ Interdit |

## Couleurs

- ✅ Utiliser uniquement les tokens iEDS (`color/…`)
- ❌ Jamais de hex en dur (`#000000`, `#FFFFFF`)
- ❌ Jamais de classes Tailwind par défaut (`bg-black`, `text-gray-500`)
- ❌ Jamais de RGB / HSL
- Voir : `foundations.md#couleurs`

## Typographie

- ✅ `ABChanel Corpo` — Regular, Light, Semi Bold uniquement
- ❌ Jamais `ABChanel Corpo 2022` (non disponible via MCP)
- ❌ Jamais de fallback système (`font-family: sans-serif`)
- Les tailles passent **toujours** par un token typo, jamais de `font-size: 14px` en dur

## Espacement

- ✅ Grille 4px (`spacing/4`, `spacing/8`, `spacing/12`, …)
- ❌ Jamais de valeurs arbitraires (`margin: 13px`, `padding: 5px`)
- Voir : `foundations.md#espacement`

## Composants

- ✅ Importer depuis `@iEDS/components`
- ❌ Jamais recréer un composant qui existe déjà (Button, Input, Card…)
- ❌ Jamais wrapper un composant iEDS pour en changer le style
- Si un variant manque : le demander à l'équipe DS, ne pas forker

## Code generation

Quand un LLM génère du code :

- Toujours commencer par lire `foundations.md` puis le `.md` du composant concerné
- Ne jamais inventer un nom de prop ou de variant : si non documenté ici, il n'existe pas
- Ne jamais utiliser `any` sur une prop dont le type est documenté
- Préférer l'import nommé : `import { Button } from '@iEDS/components'`

## Do / Don't récurrents

### Button

- ✅ `<Button variant="primary" size="md">Valider</Button>`
- ❌ `<button className="bg-blue-500 px-4 py-2">Valider</button>`

### Couleur de texte sur fond

- ✅ `color: var(--color-text-on-surface-primary)`
- ❌ `color: #000`

### Layout

- ✅ Stack / Grid iEDS avec `gap` en token
- ❌ `margin-bottom` cascade

## En cas de doute

Interdit → autorisé : demander avant de coder.
Autorisé → interdit : même règle.

**Ne jamais deviner. La documentation fait foi.**
