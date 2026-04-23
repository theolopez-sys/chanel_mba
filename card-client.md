---
component: CardClient
status: stable
version: 1.3.0
depends_on: [Avatar, Badge, Text]
figma_node_id: 4521:82394
figma_library_id: TUWENXBuFEehR2YBIzBqcm
last_sync: 2026-04-21
---

# CardClient

Carte de profil client utilisée dans les listes, recherches et résultats rapides de l'app Clienteling.

## Quand utiliser

- Liste de clients dans "Mes clients"
- Résultats de recherche
- Suggestions client dans un flux de création de rendez-vous

## Quand **ne pas** utiliser

- Profil complet → utiliser `ClientProfilePage` (pas une carte)
- Aperçu dans un tooltip → utiliser `ClientChip`
- Sélection multiple type picker → utiliser `ClientPickItem`

## Anatomie

```
┌─────────────────────────────────────────┐
│  [Avatar]  Nom Prénom         [Badge]  │
│            Métadonnée ligne 1           │
│            Métadonnée ligne 2 (opt)     │
└─────────────────────────────────────────┘
```

## Props

```ts
type CardClientProps = {
  clientId: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;               // fallback sur initiales si absent
  metadata?: {
    primary: string;                // ex : "VIP · Paris"
    secondary?: string;             // ex : "Dernière visite : 12 mars"
  };
  badge?: {
    label: string;
    tone: 'info' | 'success' | 'warning';
  };
  variant?: 'default' | 'compact';  // compact = pas de metadata.secondary
  onPress?: () => void;
  selected?: boolean;
};
```

**Règles sur les props** :
- `selected` déclenche un état visuel (bordure `border/strong`, pas une couleur de fond)
- `onPress` rend la carte cliquable (cursor pointer, focus ring, role="button")
- Sans `onPress`, la carte est purement décorative — pas de focus ring

## Variants

### default

Deux lignes de métadonnées visibles. Hauteur 88px.

```tsx
<CardClient
  clientId="C-48291"
  firstName="Marie"
  lastName="Dubois"
  metadata={{
    primary: "VIP · Paris 8ᵉ",
    secondary: "Dernière visite : 12 mars 2026"
  }}
  badge={{ label: "Nouveau", tone: "info" }}
  onPress={() => router.push(`/clients/C-48291`)}
/>
```

### compact

Une seule ligne de métadonnée. Hauteur 64px. Pour les listes denses.

```tsx
<CardClient
  clientId="C-48291"
  firstName="Marie"
  lastName="Dubois"
  metadata={{ primary: "VIP · Paris" }}
  variant="compact"
/>
```

## Tokens utilisés

| Élément | Token |
|---|---|
| Fond | `color/surface/primary` |
| Fond hover | `color/surface/secondary` |
| Bordure repos | `border/subtle` |
| Bordure selected | `border/strong` |
| Nom | `typo/title/md` + `color/text/primary` |
| Métadonnée primaire | `typo/body/sm` + `color/text/secondary` |
| Métadonnée secondaire | `typo/body/sm` + `color/text/tertiary` |
| Radius | `radius/md` |
| Padding | `spacing/8` (vertical), `spacing/12` (horizontal) |
| Gap avatar / texte | `spacing/8` |

## Accessibilité

- Si `onPress` : `role="button"`, `tabIndex={0}`, réagit à Enter et Space
- Focus visible via `:focus-visible` sur `border/strong`
- `aria-pressed={selected}` si carte dans une sélection
- Avatar décoratif → `aria-hidden="true"` sur l'image

## Do / Don't

✅ **Do** — utiliser `variant="compact"` dans les listes > 10 éléments
✅ **Do** — badge uniquement pour un statut *pertinent maintenant* (Nouveau, Anniversaire, Relance)
❌ **Don't** — empiler plus d'un badge
❌ **Don't** — mettre du texte libre dans `metadata.primary` au-delà de 40 caractères (troncature)
❌ **Don't** — utiliser CardClient pour représenter une boutique ou un produit

## Changelog

- **1.3.0** (2026-04-21) — ajout du variant `compact`
- **1.2.0** (2026-02-14) — badge devient optionnel et typé (`tone`)
- **1.1.0** (2025-11-03) — fallback initiales si `avatarUrl` manquant
- **1.0.0** (2025-09-10) — release initiale

## Références

- Figma : `iEDS / Components / Client / CardClient` (node `4521:82394`)
- Écrans utilisateurs : `Revamp Clienteling App / Home`, `Search Results`, `My Clients`
