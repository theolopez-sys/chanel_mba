# DSButton — Spec Figma

> Composant de bouton du Design System interne. Disponible en 5 variantes, avec ou sans icône, en largeur fixe ou pleine largeur.

---

## Anatomie

```
┌─────────────────────────────────┐
│  [icône]   LABEL DU BOUTON      │
└─────────────────────────────────┘

① Conteneur (border-radius: full = 9999px)
② Icône (optionnelle, leading — toujours à gauche du label)
③ Label (uppercase, font-weight bold, letter-spacing 1.2px)
```

---

## Variantes

| Variante           | Fond        | Texte       | Bordure                   | Contexte d'usage                          |
|--------------------|-------------|-------------|---------------------------|-------------------------------------------|
| `primary`          | `#000000`   | `#FFFFFF`   | —                         | Action principale de l'écran (1 max)      |
| `secondary`        | transparent | `#000000`   | 1px solid `#000000`       | Action secondaire, sur fond clair         |
| `secondaryInverted`| transparent | `#FFFFFF`   | 1px solid `#FFFFFF` (35%) | Action secondaire, sur fond sombre/noir   |
| `ghost`            | transparent | `#333333`   | —                         | Action tertiaire, lien discret            |
| `accent`           | `#B8964E`   | `#FFFFFF`   | —                         | Validation spéciale, mise en avant dorée  |

---

## Spacing & Dimensions

### Padding interne

| Axe        | Valeur   | Token          |
|------------|----------|----------------|
| Horizontal | `24px`   | `--ds-space-6` |
| Vertical   | `10px`   | —              |

> Sur iOS : horizontal `24pt` (`DSSpacing.xl`), vertical `12pt` (`DSSpacing.md`)

### Gap icône / label

| Valeur | Token         |
|--------|---------------|
| `8px`  | `--ds-space-2` (`DSSpacing.sm`) |

### Border radius

| Valeur   | Token              |
|----------|--------------------|
| `9999px` | `--ds-radius-full` |

---

## Typographie

| Propriété       | Valeur                            |
|-----------------|-----------------------------------|
| Font family     | Helvetica Neue / SF Pro           |
| Font size       | `11px` / `11pt`                   |
| Font weight     | `700` (Bold)                      |
| Text transform  | `UPPERCASE`                       |
| Letter spacing  | `1.2px` / `1.2` kerning           |

---

## Icône

- **Positionnement :** toujours à gauche du label (leading)
- **Taille :** `14pt` / `14px`
- **Poids :** SemiBold
- **Source iOS :** SF Symbols
- **Icône seule :** non supporté — toujours accompagnée d'un label

---

## Largeur

| Propriété    | Comportement                                                 |
|--------------|--------------------------------------------------------------|
| Défaut       | Largeur automatique (hugs content)                          |
| `fullWidth`  | S'étend sur toute la largeur du conteneur parent            |

---

## États

### Default
Voir le tableau variantes ci-dessus.

### Hover (Web)

| Variante    | Effet                                  |
|-------------|----------------------------------------|
| `primary`   | Opacité `88%`                          |
| `secondary` | Fond `#EDEDED` (`--ds-neutral-lower`)  |
| `ghost`     | Couleur texte → `#000000` (heading)    |
| `accent`    | Opacité `88%`                          |

### Pressed / Active (iOS & Web)

| Effet          | Valeur              |
|----------------|---------------------|
| Scale          | `0.97`              |
| Animation      | ease-out `0.1s`     |

### Disabled *(à implémenter si besoin)*

| Propriété | Valeur suggérée          |
|-----------|--------------------------|
| Opacité   | `40%`                    |
| Curseur   | `not-allowed`            |
| Fond      | Identique à la variante  |

---

## Structure du composant Figma

### Props à exposer comme Variants dans Figma

```
Variant    → primary / secondary / secondaryInverted / ghost / accent
Icon       → true / false
FullWidth  → true / false
State      → default / hover / pressed / disabled
```

### Calques recommandés

```
DSButton [Frame auto-layout horizontal]
├── Icon [Frame 14×14 — visible si Icon=true]
│   └── icon-glyph
└── Label [Text]
```

### Auto-layout Figma

| Paramètre          | Valeur      |
|--------------------|-------------|
| Direction          | Horizontal  |
| Align items        | Center      |
| Padding H          | 24          |
| Padding V          | 10          |
| Gap                | 8           |
| Border radius      | 9999        |
| Min width          | —           |
| Resizing (défaut)  | Hug content |
| Resizing (full)    | Fill parent |

---

## Règles d'usage

### ✅ DO
- Un seul bouton `primary` par écran ou section
- Toujours mettre l'icône **à gauche** du label
- Utiliser `fullWidth` pour les CTA dans les modals ou en bas d'écran
- Utiliser `secondaryInverted` sur les fonds noirs (`DSHeader`, hero card)

### ❌ DON'T
- Ne pas créer de variante "icon only" — utiliser `DSFloatingActionButton` à la place
- Ne pas mélanger `primary` et `accent` dans la même section
- Ne pas utiliser `accent` pour les actions destructives — réserver `ghost` ou `secondary`
- Ne pas modifier le border-radius (toujours pill)

---

## Exemples d'usage

```swift
// iOS
DSButton(title: "Créer", variant: .primary, icon: "plus") { }
DSButton(title: "Annuler", variant: .secondary) { }
DSButton(title: "Supprimer", variant: .ghost) { }
DSButton(title: "Valider", variant: .accent, isFullWidth: true) { }
DSButton(title: "Voir plus", variant: .secondaryInverted) { }  // sur fond noir
```

```jsx
// React / Web
<DSButton label="Créer"     variant="primary"   icon="+" />
<DSButton label="Annuler"   variant="secondary" />
<DSButton label="Supprimer" variant="ghost"     />
<DSButton label="Valider"   variant="accent"    fullWidth />
```

---

## Checklist avant livraison Figma

- [ ] 5 variantes créées (primary, secondary, secondaryInverted, ghost, accent)
- [ ] États : default, hover, pressed, disabled — pour chaque variante
- [ ] Version avec icône + sans icône
- [ ] Version fullWidth
- [ ] Tokens de couleur liés aux Figma Variables (pas de couleurs hardcodées)
- [ ] Typography style lié au style "Label" (Helvetica Neue 11px Bold Uppercase)
- [ ] Auto-layout correct sur toutes les combinaisons
- [ ] Composant publié dans la librairie du fichier DS
