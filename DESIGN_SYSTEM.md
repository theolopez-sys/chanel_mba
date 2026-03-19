# Internal European Design System — Guidelines

> **Principes fondateurs :** Distinctive · Simple yet Intricate · Accessible · Sustainable
>
> Ce design system libère du temps pour l'innovation tout en garantissant une expérience de haute qualité. Chaque décision visuelle porte l'ADN de la Maison : clarté, précision, intemporalité.

---

## Table des matières

1. [Principes](#1-principes)
2. [Couleurs](#2-couleurs)
3. [Typographie](#3-typographie)
4. [Espacement & Grille](#4-espacement--grille)
5. [Border Radius](#5-border-radius)
6. [Ombres](#6-ombres)
7. [Icônes](#7-icônes)
8. [Composants](#8-composants)
9. [Accessibilité](#9-accessibilité)
10. [Dos & Don'ts](#10-dos--donts)

---

## 1. Principes

### DISTINCTIVE
Chaque écran doit être reconnaissable. Le langage visuel n'est jamais générique — il parle doucement, mais clairement. Utilise le noir, l'espace blanc généreux et la typographie uppercase pour affirmer l'identité.

### SIMPLE YET INTRICATE
Moins c'est plus. On adopte les standards de l'industrie non pas parce qu'ils sont communs, mais parce qu'ils sont éprouvés. Patterns familiers, comportements prévisibles, interactions accessibles.

### ACCESSIBLE
Les personnes au centre. L'accessibilité n'est pas une option — c'est un principe de soin. Concevoir pour tous : chaque rôle, chaque capacité, chaque contexte.

### SUSTAINABLE
Concevoir avec patience et responsabilité. Composants propres, décisions réfléchies, réutilisation plutôt que refonte. Éviter le gaspillage de temps, de ressources et d'énergie.

---

## 2. Couleurs

### Palette principale

| Token Swift | Valeur | Nom | Usage |
|---|---|---|---|
| `Color.DS.black` | `#000000` | Black | Headers, CTA primaires, fond hero |
| `Color.DS.white` | `#FFFFFF` | White | Texte sur fond sombre |
| `Color.DS.neutralLower` | `#EDEDED` | Neutral Lower | Fond de page, icône backgrounds |
| `Color.DS.neutralMid` | `#D4D4D4` | Neutral Mid | Séparateurs, bordures |
| `Color.DS.surface` | `#FFFFFF` | Surface White | Fond de cards |
| `Color.DS.accent` | `#B8964E` | Gold | Badges "New", notifications, accentuation |

### Couleurs de texte

| Token Swift | Valeur | Usage |
|---|---|---|
| `Color.DS.Text.heading` | `#000000` | Titres, noms |
| `Color.DS.Text.body` | `#333333` | Corps de texte |
| `Color.DS.Text.muted` | `#888888` | Labels, métadonnées, temps |
| `Color.DS.Text.inverted` | `#FFFFFF` | Texte sur fond noir |

### Couleurs sémantiques

| Token Swift | Valeur | Usage |
|---|---|---|
| `Color.DS.Status.success` | `#2D6A4F` | Validation, confirmations |
| `Color.DS.Status.warning` | `#E9C46A` | Avertissements |
| `Color.DS.Status.error` | `#C1121F` | Erreurs, destructions |
| `Color.DS.Status.info` | `#023E8A` | Informations neutres |

### Règles d'usage

- **L'accent doré** (`#B8964E`) est réservé aux éléments nécessitant une attention immédiate (badge "New", notification active). Ne pas l'utiliser pour la décoration.
- **Le noir** est la couleur d'identité forte — l'utiliser pour les headers, hero cards et boutons principaux.
- **Ne jamais** créer de nouvelles couleurs hors de cette palette sans valider avec le DS owner.

---

## 3. Typographie

### Familles de polices

| Rôle | Police | Substitut iOS |
|---|---|---|
| **Titres** (`--font/family/title`) | ABChanel Corpo 2022 Semi Bold | Georgia Bold |
| **Corps** (`--font/family/text`) | Helvetica Regular / Bold | System (SF Pro) |

> **Important :** Installer la police `ABChanel Corpo 2022` dans le projet Xcode pour correspondre exactement au DS. En attendant, Georgia est utilisée comme substitut fidèle.

### Échelle typographique (mobile)

| Token Swift | Taille | Poids | Usage |
|---|---|---|---|
| `Font.DS.hero` | 36pt | SemiBold serif | Titre hero card, grands titres de page |
| `Font.DS.h1` | 28pt | SemiBold serif | Nom utilisateur dans le header |
| `Font.DS.h2` | 22pt | Regular serif | Sous-titres de section |
| `Font.DS.h3` | 18pt | SemiBold | Titres de cards |
| `Font.DS.bodyLg` | 17pt | Regular | Corps principal |
| `Font.DS.body` | 15pt | Regular | Corps standard, liste |
| `Font.DS.bodySm` | 13pt | Regular / SemiBold | Items de liste, captions |
| `Font.DS.label` | 11pt | Bold | Labels uppercase (sections, tabs) |
| `Font.DS.micro` | 10pt | Bold | Badges, timestamps, tags |

### Modificateurs prêts à l'emploi

```swift
Text("APERÇU").dsLabel()           // uppercase, muted, letter-spaced
Text("Titre").dsHeading()          // serif, heading color
Text("Corps du texte").dsBody()    // helvetica, body color
```

### Règles typographiques

- Les **titres de section** et **labels** sont toujours en **UPPERCASE** avec `kerning ≥ 1.5`.
- Les **titres hero** sont en police serif (ABChanel / Georgia) — jamais en sans-serif.
- Le **corps de texte** est exclusivement en Helvetica / SF Pro Regular.
- Éviter plus de 3 niveaux de hiérarchie typographique sur un même écran.

---

## 4. Espacement & Grille

### Échelle d'espacement

| Token Swift | Valeur | Usage typique |
|---|---|---|
| `DSSpacing.xs` | 4pt | Gap entre icône et texte |
| `DSSpacing.sm` | 8pt | Padding interne badge, gap buttons |
| `DSSpacing.md` | 12pt | Padding interne compact |
| `DSSpacing.base` | 16pt | Padding standard |
| `DSSpacing.lg` | 20pt | Gap entre éléments de liste |
| `DSSpacing.xl` | 24pt | Padding de card standard |
| `DSSpacing.xxl` | 32pt | Gap entre sections |
| `DSSpacing.xxxl` | 40pt | Gap large (desktop: espace entre blocs) |
| `DSSpacing.pagePadding` | 20pt | Marge horizontale de page (mobile) |

### Grille mobile

- **Frame de référence :** iPhone 15 Pro — 393 × 852pt
- **Marge horizontale :** 20pt (`DSSpacing.pagePadding`)
- **Gutter entre colonnes :** 12pt (`DSSpacing.md`)
- **Colonnes :** 2 (cards) ou pleine largeur (listes, hero)

### Règles

- Toujours utiliser les tokens de spacing — **jamais de valeurs hardcodées**.
- Les cards ont un padding interne de `DSSpacing.xl` (24pt).
- Les sections sont séparées par `DSSpacing.xl` (24pt).

---

## 5. Border Radius

| Token Swift | Valeur | Usage |
|---|---|---|
| `DSRadius.sm` | 8pt | Icône backgrounds, petits éléments |
| `DSRadius.md` | 12pt | Cards secondaires, listes |
| `DSRadius.lg` | 20pt | Cards principales, hero card, modals |
| `DSRadius.full` | 999pt | Badges, pills, boutons, avatars |

> Le DS desktop utilise 24px — on adapte à 20pt sur mobile pour rester proportionnel.

---

## 6. Ombres

| Token Swift | Usage |
|---|---|
| `.dsShadow(.card)` | Cards, sur fond `neutralLower` |
| `.dsShadow(.modal)` | Modals, bottom sheets, popovers |

```swift
DSCard { ... }
    .dsShadow(.card)    // rgba(0,0,0,0.06) — blur 12pt
```

> Ne jamais ajouter d'ombre sur un élément posé sur fond blanc (`surface`) — utiliser une bordure `neutralMid` à la place.

---

## 7. Icônes

### Deux types d'icônes

1. **Function Icons** — représentent visuellement la fonction d'un bouton (ex: `plus` pour créer). Placées **avant** le label (leading side).
2. **Navigation Icons** — chevrons et flèches indiquant un déplacement. Leur placement suit la direction du mouvement (`chevron.right` pour avancer).

### Sur iOS : SF Symbols

On utilise **SF Symbols** comme bibliothèque d'icônes native. Correspondances recommandées :

| Intention | SF Symbol |
|---|---|
| Accueil | `house` / `house.fill` |
| Recherche | `magnifyingglass` |
| Notification | `bell` / `bell.fill` |
| Ajouter | `plus` |
| Calendrier | `calendar` |
| Message | `message.fill` |
| Document | `doc.text.fill` |
| Paramètres | `gearshape` / `gearshape.fill` |
| Profil | `person` / `person.fill` |
| Chevron | `chevron.right`, `chevron.left`, `chevron.down` |

### Tailles d'icônes

| Contexte | Taille | Poids |
|---|---|---|
| Tab bar | 22pt | Regular / SemiBold (actif) |
| Header actions | 18pt | Regular |
| Dans un bouton | 14pt | SemiBold |
| Card icon background (36×36) | 16pt | Medium |
| Card icon background (44×44) | 18pt | Medium |

---

## 8. Composants

### DSButton

```swift
DSButton(title: "Créer", variant: .primary, icon: "plus") { }
DSButton(title: "Annuler", variant: .secondary) { }
DSButton(title: "Supprimer", variant: .ghost) { }
DSButton(title: "Valider", variant: .accent, isFullWidth: true) { }
```

| Variant | Fond | Texte | Usage |
|---|---|---|---|
| `.primary` | Noir | Blanc | Action principale de l'écran |
| `.secondary` | Transparent | Noir | Action secondaire, outline |
| `.ghost` | Transparent | Body | Action tertiaire, liens |
| `.accent` | Or | Blanc | Validation spéciale, mise en avant |

**Règle :** Maximum **1 bouton primary** par écran ou section.

---

### DSCard variants

```swift
// Container générique
DSCard { Text("Contenu") }
DSCard(isDark: true) { Text("Dark") }

// Hero (en-tête de dashboard)
DSHeroCard(label: "Dashboard", title: "Q1 2026", subtitle: "2h ago", action: {})

// Statistique
DSStatCard(icon: "chart.line.uptrend.xyaxis", value: "247", label: "Tâches")

// Action rapide (2 colonnes)
DSActionCard(icon: "plus", title: "Nouvelle tâche", subtitle: "Créer & assigner", isDark: true)
```

---

### DSBadge

```swift
DSBadge(text: "New",     variant: .accent)    // or — nouveautés
DSBadge(text: "!",       variant: .dark)      // noir — alertes
DSBadge(text: "En cours",variant: .neutral)   // gris — statuts
DSBadge(text: "Draft",   variant: .outlined)  // bordure — états secondaires
```

**Règle :** Utiliser `.accent` uniquement pour signaler une **vraie nouveauté** — ne pas en abuser.

---

### DSHeader

```swift
DSHeader(
    greeting: "Bonjour",
    name: "Sophie M.",
    onSearch: { },
    onNotification: { },
    notificationCount: 3
)
```

- Toujours fond noir, texte blanc
- Le nom est affiché en police serif (identité forte)
- Maximum 2 icônes d'action à droite

---

### DSTabBar

```swift
DSTabBar(selectedIndex: $selectedTab)
```

- 4 onglets maximum
- Labels en uppercase 10pt
- Icône filled = onglet actif
- Fond blanc avec bordure top `neutralMid`

---

### DSActivityList

```swift
DSActivityList(items: [
    .init(initials: "AL", name: "Alice L.", description: "Action effectuée", time: "09:14",
          badge: .init(text: "New", variant: .accent)),
])
```

---

## 9. Accessibilité

### Contrastes minimum (WCAG AA)

| Combinaison | Ratio | Statut |
|---|---|---|
| Blanc sur Noir | 21:1 | ✅ AAA |
| `#333` sur `#EDEDED` | 7.5:1 | ✅ AAA |
| `#888` sur `#FFFFFF` | 3.5:1 | ⚠️ AA Large seulement |
| Or (`#B8964E`) sur Noir | 4.7:1 | ✅ AA |

> Le gris `#888888` (texte muted) ne doit être utilisé que pour des **informations secondaires non critiques** (timestamps, sous-labels) — jamais pour du contenu principal.

### Tailles minimales tactiles

- Toute zone interactive : **44 × 44pt minimum**
- Les `DSIconButton` font 38×38pt — toujours ajouter `.contentShape(Circle())` si besoin d'agrandir la zone de tap

### SwiftUI Accessibility

```swift
// Toujours labelliser les icônes
Image(systemName: "bell")
    .accessibilityLabel("Notifications")

// Boutons avec action claire
DSButton(title: "Créer une tâche", variant: .primary) { }
// → SwiftUI génère automatiquement l'accessibilityLabel depuis le title

// Grouper les éléments liés
VStack { ... }
    .accessibilityElement(children: .combine)
```

---

## 10. Dos & Don'ts

### ✅ DO

- Utiliser **exclusivement** les tokens `Color.DS.*`, `Font.DS.*`, `DSSpacing.*`, `DSRadius.*`
- Mettre les **titres de section en uppercase** avec `dsLabel()`
- Utiliser le **noir comme couleur d'identité principale** (headers, CTA)
- Privilégier l'**espace blanc** — ne pas surcharger les écrans
- Créer un `#Preview` pour chaque nouveau composant
- Adapter la **taille de police depuis les tokens** (ne pas scaler manuellement)
- Utiliser les **SF Symbols** en cohérence avec la sémantique des icônes du DS

### ❌ DON'T

- Ne pas **hardcoder de couleurs** (`Color(hex: "#ABC")` directement dans les vues)
- Ne pas **mélanger serif et sans-serif** sur un même niveau hiérarchique
- Ne pas utiliser **plus d'un bouton `.primary`** par section
- Ne pas utiliser **l'accent doré** pour la décoration — seulement pour les alertes
- Ne pas créer de **border-radius hors de la grille** (`DSRadius.*`)
- Ne pas ignorer les **zones de tap minimum** (44pt)
- Ne pas ajouter de **nouvelles couleurs** sans validation DS

---

## Ressources

| Ressource | Lien |
|---|---|
| Figma Design System | [Internal European DS](https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System) |
| Tokens JSON (Figma Variables) | [`Figma/tokens.json`](Figma/tokens.json) |
| Guide import Figma | [`Figma/README.md`](Figma/README.md) |
| SF Symbols | [developer.apple.com/sf-symbols](https://developer.apple.com/sf-symbols/) |
| WCAG Contrast Checker | [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) |
