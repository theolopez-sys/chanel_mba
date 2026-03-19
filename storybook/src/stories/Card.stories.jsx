import { DSHeroCard, DSStatCard, DSActionCard } from '../components/DSCard';

export default {
  title: 'Components/Card',
  parameters: { backgrounds: { default: 'neutral' } },
};

export const HeroCard = {
  name: 'Hero Card',
  tags: ['autodocs'],
  argTypes: {
    label:    { control: 'text' },
    title:    { control: 'text' },
    subtitle: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
  args: {
    label:    'Tableau de bord',
    title:    'Q1 2026',
    subtitle: 'Mis à jour il y a 2h',
    ctaLabel: 'Voir tout',
  },
  render: (args) => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <DSHeroCard {...args} onCta={() => {}} />
    </div>
  ),
};

export const StatCard = {
  name: 'Stat Card',
  render: () => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <div className="story-section">
        <h3>Stat Cards</h3>
        <div className="story-grid-3">
          <DSStatCard icon="📈" value="247" label="Tâches"  />
          <DSStatCard icon="👥" value="18"  label="Équipe"  />
          <DSStatCard icon="⭐" value="94%" label="Score"   />
        </div>
      </div>
    </div>
  ),
};

export const ActionCard = {
  name: 'Action Card',
  render: () => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <div className="story-section">
        <h3>Action Cards</h3>
        <div className="story-grid-2">
          <DSActionCard icon="➕" title="Nouvelle tâche"   subtitle="Créer & assigner"       dark={true}  />
          <DSActionCard icon="📅" title="Planifier"        subtitle="3 événements ce soir"                />
          <DSActionCard icon="💬" title="Messages"         subtitle="5 non lus"                           />
          <DSActionCard icon="📄" title="Rapports"         subtitle="Exporter les données"                />
        </div>
      </div>
    </div>
  ),
};

export const AllCards = {
  name: 'All Cards',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 20, maxWidth: 393, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DSHeroCard
        label="Tableau de bord"
        title="Q1 2026"
        subtitle="Mis à jour il y a 2h"
        onCta={() => {}}
      />
      <div className="story-grid-3">
        <DSStatCard icon="📈" value="247" label="Tâches" />
        <DSStatCard icon="👥" value="18"  label="Équipe" />
        <DSStatCard icon="⭐" value="94%" label="Score"  />
      </div>
      <div className="story-grid-2">
        <DSActionCard icon="➕" title="Nouvelle tâche" subtitle="Créer & assigner" dark />
        <DSActionCard icon="📅" title="Planifier"      subtitle="3 événements"           />
        <DSActionCard icon="💬" title="Messages"       subtitle="5 non lus"              />
        <DSActionCard icon="📄" title="Rapports"       subtitle="Exporter"               />
      </div>
    </div>
  ),
};
