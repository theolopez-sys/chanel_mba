import { DSBadge } from '../components/DSBadge';

export default {
  title: 'Components/Badge',
  component: DSBadge,
  tags: ['autodocs'],
  argTypes: {
    text:    { control: 'text' },
    variant: { control: 'select', options: ['dark', 'accent', 'neutral', 'outlined'] },
  },
};

export const Dark     = { args: { text: 'Nouveau',   variant: 'dark'     } };
export const Accent   = { args: { text: 'New',        variant: 'accent'   } };
export const Neutral  = { args: { text: 'En cours',   variant: 'neutral'  } };
export const Outlined = { args: { text: 'Draft',      variant: 'outlined' } };

export const AllVariants = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 32, background: '#fff' }}>
      <div className="story-section">
        <h3>Variants</h3>
        <div className="story-row">
          <DSBadge text="New"      variant="accent"   />
          <DSBadge text="!"        variant="dark"     />
          <DSBadge text="En cours" variant="neutral"  />
          <DSBadge text="Draft"    variant="outlined" />
        </div>
      </div>
      <div className="story-section">
        <h3>Cas d'usage</h3>
        <div className="story-row">
          <DSBadge text="New"      variant="accent"  />
          <DSBadge text="3"        variant="dark"    />
          <DSBadge text="Validé"   variant="neutral" />
          <DSBadge text="Archivé"  variant="outlined"/>
          <DSBadge text="Urgent"   variant="dark"    />
        </div>
      </div>
    </div>
  ),
};
