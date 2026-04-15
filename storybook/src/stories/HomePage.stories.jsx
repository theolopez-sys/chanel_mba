import { HomePage, TabWithNumberBadge } from '../pages/HomePage';

export default {
  title: 'Pages/Home',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Home Page — Clienteling App

Page d'accueil de l'application clienteling, composée de tous les composants documentés dans \`docs/components/*.md\`.

**Frame :** iPhone 15 Pro · 393 × 852px (réf. \`Figma/README.md\`)

## Composants utilisés

| Composant | Source | Statut |
|-----------|--------|--------|
| \`DSHeader\` | \`components/DSHeader.jsx\` | ✅ |
| \`DSHeroCard\` | \`components/DSCard.jsx\` | ✅ |
| \`DSStatCard\` | \`components/DSCard.jsx\` | ✅ |
| \`DSChips\` | \`docs/components/DSChips.md\` | ✅ nouveau |
| \`DSListItem\` | \`docs/components/DSListItem.md\` | ✅ nouveau |
| \`DSNumberBadge\` | \`docs/components/DSNumberBadge.md\` | ✅ nouveau |
| \`DSActionCard\` | \`components/DSCard.jsx\` | ✅ |
| \`DSButton\` | \`components/DSButton.jsx\` | ✅ |
| \`DSBadge\` | \`components/DSBadge.jsx\` | ✅ |
| \`DSActivityList\` | \`components/DSActivityItem.jsx\` | ✅ |
| \`DSFloatingActionButton\` | \`components/DSFloatingActionButton.tsx\` | ✅ |
| \`DSTabBar\` | \`components/DSTabBar.jsx\` | ✅ |
        `,
      },
    },
  },
};

/**
 * Vue complète de la page d'accueil — iPhone 15 Pro (393 × 852)
 */
export const Default = {
  render: () => <HomePage />,
  name: 'Home Page',
  parameters: {
    backgrounds: { default: 'neutral' },
  },
};

/**
 * DSNumberBadge — utilisé sur les onglets et icônes de notification
 */
export const NumberBadgeVariants = {
  render: () => <TabWithNumberBadge />,
  name: 'DSNumberBadge variants',
};
