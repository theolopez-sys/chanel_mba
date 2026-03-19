# Internal App — iOS

Application mobile interne basée sur l'**Internal European Design System**.

## Stack
- **Swift 5.9** + **SwiftUI**
- **iOS 17+**
- **XcodeGen** pour la génération du projet Xcode
- Pas de dépendances externes

---

## Démarrage rapide

### 1. Prérequis
- macOS 14+
- Xcode 15+
- Homebrew

### 2. Setup (première fois)

```bash
git clone <repo-url>
cd internal-app-ios
make setup       # installe XcodeGen + génère InternalApp.xcodeproj
make open        # ouvre dans Xcode
```

### 3. Workflow quotidien

```bash
make dev         # régénère le projet + ouvre Xcode
```

> **Important** : le fichier `.xcodeproj` est gitignored. On régénère toujours depuis `project.yml`.

---

## Structure du projet

```
internal-app-ios/
├── project.yml                    # Spec XcodeGen (source of truth)
├── Makefile                       # Commandes de setup
├── Figma/
│   ├── tokens.json                # Design tokens W3C DTCG
│   └── README.md                  # Guide Figma
└── InternalApp/
    ├── App/
    │   ├── InternalApp.swift      # @main entry point
    │   └── ContentView.swift
    ├── DesignSystem/
    │   ├── DS+Colors.swift        # Couleurs + tokens
    │   ├── DS+Typography.swift    # Fonts + styles
    │   └── DS+Spacing.swift       # Espacement + radius + shadow
    ├── Components/
    │   ├── DSButton.swift         # Boutons (primary, secondary, ghost, accent)
    │   ├── DSCard.swift           # Cards (hero, stat, action)
    │   ├── DSBadge.swift          # Badges + notification dot
    │   ├── DSActivityItem.swift   # Liste d'activité
    │   ├── DSHeader.swift         # Navigation header
    │   └── DSTabBar.swift         # Bottom tab bar
    ├── Screens/
    │   └── HomeView.swift         # Page d'accueil
    └── Assets.xcassets/
```

---

## Design System

### Tokens principaux

| Token | Valeur | Usage |
|-------|--------|-------|
| `Color.DS.black` | `#000` | Headers, CTA primaires |
| `Color.DS.neutralLower` | `#EDEDED` | Fond de page |
| `Color.DS.surface` | `#FFF` | Fond de card |
| `Color.DS.Text.body` | `#333` | Corps de texte |
| `Color.DS.accent` | `#B8964E` | Accentuation dorée |
| `Font.DS.hero` | Georgia 36pt | Titres hero |
| `Font.DS.label` | System 11pt Bold Uppercase | Labels, tabs |
| `DSRadius.lg` | 20pt | Cards |
| `DSSpacing.pagePadding` | 20pt | Marges horizontales |

### Composants disponibles

| Composant | Fichier | Preview |
|-----------|---------|---------|
| `DSButton` | `Components/DSButton.swift` | ✅ `#Preview` |
| `DSCard`, `DSHeroCard`, `DSStatCard`, `DSActionCard` | `Components/DSCard.swift` | ✅ |
| `DSBadge` | `Components/DSBadge.swift` | ✅ |
| `DSActivityItem`, `DSActivityList` | `Components/DSActivityItem.swift` | ✅ |
| `DSHeader` | `Components/DSHeader.swift` | ✅ |
| `DSTabBar` | `Components/DSTabBar.swift` | ✅ |

---

## Tester les composants en local

Chaque composant a un `#Preview` — ouvre le fichier dans Xcode et active **Canvas** (`⌥⌘↩`) pour voir le preview en direct, sans lancer le simulateur.

---

## Créer des maquettes Figma

Voir [`Figma/README.md`](Figma/README.md) pour importer les tokens dans Figma et configurer ton fichier de maquettes.

---

## Créer un nouveau screen

1. Crée `InternalApp/Screens/MonScreen.swift`
2. Utilise les tokens `Color.DS.*`, `Font.DS.*`, `DSSpacing.*`
3. Compose avec les composants `DS*` existants
4. Ajoute un `#Preview` en bas du fichier
5. Lance `make dev` si XcodeGen ne l'a pas encore détecté (les fichiers ajoutés manuellement sont auto-détectés via `sources: - path: InternalApp`)
