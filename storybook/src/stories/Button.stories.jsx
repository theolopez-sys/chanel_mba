import { DSButton } from '../components/DSButton';

export default {
  title: 'Components/Button',
  component: DSButton,
  tags: ['autodocs'],
  argTypes: {
    variant:   { control: 'select', options: ['primary', 'secondary', 'ghost', 'accent'] },
    label:     { control: 'text' },
    icon:      { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'neutral' },
  },
};

export const Primary = { args: { label: 'Action principale', variant: 'primary' } };
export const Secondary = { args: { label: 'Action secondaire', variant: 'secondary' } };
export const Ghost = { args: { label: 'Action ghost', variant: 'ghost' } };
export const Accent = { args: { label: 'Valider', variant: 'accent' } };
export const WithIcon = { args: { label: 'Nouvelle tâche', variant: 'primary', icon: '+' } };
export const FullWidth = { args: { label: 'Confirmer', variant: 'primary', fullWidth: true } };

export const AllVariants = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340, background: '#EDEDED' }}>
      <div className="story-section">
        <h3>Variants</h3>
        <div className="story-row">
          <DSButton label="Primary"   variant="primary"   />
          <DSButton label="Secondary" variant="secondary" />
          <DSButton label="Ghost"     variant="ghost"     />
          <DSButton label="Accent"    variant="accent"    />
        </div>
      </div>
      <div className="story-section">
        <h3>Avec icône</h3>
        <div className="story-row">
          <DSButton label="Créer" variant="primary"   icon="+" />
          <DSButton label="Partager" variant="secondary" icon="↗" />
        </div>
      </div>
      <div className="story-section">
        <h3>Full Width</h3>
        <DSButton label="Confirmer l'action" variant="primary" fullWidth />
        <DSButton label="Annuler" variant="secondary" fullWidth />
      </div>
    </div>
  ),
};
