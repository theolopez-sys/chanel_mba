---
scope: components_index
---

# Index des composants iEDS

Une ligne par composant pour permettre au LLM (et à un humain pressé) de scanner rapidement ce qui existe avant de coder.

**Règle** : si un composant n'est **pas dans cette liste**, il n'existe pas dans iEDS. Ne pas l'inventer.

## Actions

- **Button** — CTA standard, 3 variants (primary, secondary, ghost) × 3 tailles. → `button.md`
- **IconButton** — Bouton icône seule, 40×40 par défaut. → `icon-button.md`
- **Link** — Lien textuel inline ou standalone. → `link.md`

## Formulaires

- **InputText** — Champ texte simple, support label / hint / error. → `input-text.md`
- **InputSearch** — Champ de recherche avec icône loupe et clear. → `input-search.md`
- **Select** — Dropdown de sélection unique. → `select.md`
- **Checkbox** — Case à cocher, label à droite. → `checkbox.md`
- **Radio** — Choix exclusif dans un groupe. → `radio.md`
- **Toggle** — Bascule on/off pour preferences. → `toggle.md`
- **DatePicker** — Sélection de date au format FR. → `date-picker.md`

## Affichage

- **Text** — Composant typo, passe un token typo en prop. → `text.md`
- **Avatar** — Image circulaire, fallback initiales. → `avatar.md`
- **Badge** — Pastille statut, 3 tons (info, success, warning). → `badge.md`
- **Chip** — Tag filtrable ou suppressible. → `chip.md`

## Cartes et listes

- **Card** — Conteneur générique, accepte `variant`. → `card.md`
- **CardClient** — Profil client synthétique. → `card-client.md`
- **CardAppointment** — Rendez-vous avec horaire et client. → `card-appointment.md`
- **ListItem** — Ligne de liste standard avec slots start/end. → `list-item.md`
- **EmptyState** — État vide illustré avec CTA. → `empty-state.md`

## Navigation

- **TabBar** — Navigation principale bottom (4-5 onglets max). → `tab-bar.md`
- **Tabs** — Tabs horizontales de sous-navigation. → `tabs.md`
- **Header** — Header d'écran avec back, titre, actions. → `header.md`
- **Breadcrumb** — Chemin de navigation. → `breadcrumb.md`

## Feedback

- **Toast** — Message éphémère en bas d'écran. → `toast.md`
- **Alert** — Message inline persistant. → `alert.md`
- **Modal** — Dialogue bloquant centré. → `modal.md`
- **Sheet** — Panneau coulissant depuis le bas. → `sheet.md`
- **Spinner** — Indicateur de chargement. → `spinner.md`
- **Skeleton** — Placeholder de chargement adaptatif. → `skeleton.md`

## Layout

- **Stack** — Flex vertical avec gap tokenisé. → `stack.md`
- **Grid** — Grille 4/8/12 colonnes. → `grid.md`
- **Divider** — Séparateur horizontal ou vertical. → `divider.md`

## Absents volontairement

Ces composants **n'existent pas** dans iEDS et ne doivent pas être recréés ad-hoc :

- Accordion — utiliser `Sheet` ou `Modal`
- Carousel — pattern non validé par le DS
- DataTable — utiliser `ListItem` en stack
- Tooltip — pattern à valider (design en cours)
