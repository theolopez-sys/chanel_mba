import type { Meta, StoryObj } from '@storybook/react';
import { DSSegmentedButton } from '../components/DSSegmentedButton';

const meta: Meta<typeof DSSegmentedButton> = {
  title: 'Components/SegmentedButton',
  component: DSSegmentedButton,
  tags: ['autodocs'],
  argTypes: {
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DSSegmentedButton>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Semaine', value: 'week' },
      { label: 'Mois', value: 'month' },
      { label: 'Année', value: 'year' },
    ],
    defaultValue: 'week',
  },
};

export const WithIcons: Story = {
  args: {
    options: [
      { label: 'Liste', value: 'list', icon: '☰' },
      { label: 'Grille', value: 'grid', icon: '⊞' },
    ],
    defaultValue: 'list',
  },
};

export const FullWidth: Story = {
  args: {
    options: [
      { label: 'En cours', value: 'active' },
      { label: 'Terminé', value: 'done' },
      { label: 'Archivé', value: 'archived' },
    ],
    defaultValue: 'active',
    fullWidth: true,
  },
};

export const TwoOptions: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'yes' },
      { label: 'Non', value: 'no' },
    ],
    defaultValue: 'yes',
  },
};
