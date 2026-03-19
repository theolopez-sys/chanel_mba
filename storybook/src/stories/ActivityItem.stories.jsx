import { DSActivityItem, DSActivityList } from '../components/DSActivityItem';

export default {
  title: 'Components/ActivityItem',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'neutral' } },
};

const SAMPLE_ITEMS = [
  { initials: 'AL', name: 'Alice Laurent',   description: 'A validé le rapport mensuel', time: '09:14', badge: { text: 'New', variant: 'accent'  } },
  { initials: 'TM', name: 'Thomas M.',       description: 'A mis à jour le projet Q1',   time: '08:52'                                            },
  { initials: 'CR', name: 'Clara R.',        description: "Nouvelle demande d'accès",    time: '08:30', badge: { text: '!',   variant: 'dark'    } },
  { initials: 'JP', name: 'Jean-Pierre B.',  description: 'Commentaire sur Tâche #482',  time: 'Hier'                                             },
];

export const SingleItem = {
  name: 'Single Item',
  argTypes: {
    initials:    { control: 'text' },
    name:        { control: 'text' },
    description: { control: 'text' },
    time:        { control: 'text' },
  },
  args: {
    initials: 'AL', name: 'Alice Laurent',
    description: 'A validé le rapport mensuel', time: '09:14',
  },
  render: (args) => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
        <DSActivityItem {...args} />
      </div>
    </div>
  ),
};

export const WithBadge = {
  name: 'With Badge',
  render: () => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="story-section">
          <h3>Accent badge (New)</h3>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <DSActivityItem {...SAMPLE_ITEMS[0]} />
          </div>
        </div>
        <div className="story-section">
          <h3>Dark badge (Alert)</h3>
          <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <DSActivityItem {...SAMPLE_ITEMS[2]} />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const List = {
  name: 'Activity List',
  render: () => (
    <div style={{ padding: 20, maxWidth: 393 }}>
      <DSActivityList items={SAMPLE_ITEMS} />
    </div>
  ),
};
