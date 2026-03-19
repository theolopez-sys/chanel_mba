# Figma — Internal European Design System

## Importer les tokens dans Figma Variables

### Option A — Plugin Tokens Studio (recommandé)
1. Installe le plugin **Tokens Studio for Figma** : https://tokens.studio
2. Ouvre le fichier Figma du DS
3. Tokens Studio → **Import** → colle le contenu de `tokens.json`
4. **Apply to document** pour créer les variables Figma

### Option B — Variables Figma natives (Figma Pro+)
1. Ouvre ton fichier Figma
2. Menu **Assets** → **Variables** → **Import**
3. Utilise le plugin **Variable Import/Export** sur le Figma Community
4. Importe `tokens.json` (format W3C DTCG compatible)

---

## Créer des maquettes mobiles

### Setup recommandé
- **Frame** : iPhone 15 Pro (393 × 852)
- **Grille** : 4 colonnes, margin 20px, gutter 12px

### Typographies à créer dans Figma
| Style       | Police                  | Taille | Poids     | Transform |
|-------------|-------------------------|--------|-----------|-----------|
| Hero        | ABChanel Corpo 2022     | 36pt   | SemiBold  | Uppercase |
| H1          | ABChanel Corpo 2022     | 28pt   | SemiBold  | —         |
| H2          | ABChanel Corpo 2022     | 22pt   | Regular   | —         |
| Body        | Helvetica Neue          | 15pt   | Regular   | —         |
| Body Bold   | Helvetica Neue          | 15pt   | SemiBold  | —         |
| Label       | Helvetica Neue          | 10pt   | Bold      | Uppercase |
| Caption     | Helvetica Neue          | 13pt   | Regular   | —         |

### Couleurs à créer (Figma Styles ou Variables)
| Nom              | Hex       |
|------------------|-----------|
| Black            | `#000000` |
| White            | `#FFFFFF` |
| Neutral/Lower    | `#EDEDED` |
| Neutral/Mid      | `#D4D4D4` |
| Text/Heading     | `#000000` |
| Text/Body        | `#333333` |
| Text/Muted       | `#888888` |
| Accent           | `#B8964E` |
| Surface/White    | `#FFFFFF` |

---

## Lien vers le Design System source
🔗 https://www.figma.com/design/R1w2martdIEdeXEad1g4Yo/Internal-European-Design-System
