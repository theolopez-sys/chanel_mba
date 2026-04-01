import type { Meta, StoryObj } from '@storybook/react';
import { DSActionSheet } from '../components/DSActionSheet';

const meta: Meta<typeof DSActionSheet> = {
  title: 'Components/ActionSheet',
  component: DSActionSheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DSActionSheet>;

export const Default: Story = {
  args: {
    title: 'Options du document',
    options: [
      { label: 'Modifier', icon: '✎', onClick: () => alert('Modifier') },
      { label: 'Partager', icon: '↗', onClick: () => alert('Partager') },
      { label: 'Dupliquer', icon: '⊕', onClick: () => alert('Dupliquer') },
      { label: 'Supprimer', icon: '🗑', destructive: true, onClick: () => alert('Supprimer') },
    ],
    onCancel: () => alert('Annuler'),
    open: true,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Supprimer le projet ?',
    description: 'Cette action est irréversible. Toutes les données associées seront perdues.',
    options: [
      { label: 'Supprimer définitivement', destructive: true, onClick: () => alert('Supprimé') },
    ],
    cancelLabel: 'Conserver le projet',
    onCancel: () => alert('Annuler'),
    open: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    title: 'Actions',
    options: [
      { label: 'Modifier', icon: '✎', onClick: () => alert('Modifier') },
      { label: 'Exporter (bientôt disponible)', icon: '↓', disabled: true },
      { label: 'Supprimer', icon: '🗑', destructive: true, onClick: () => alert('Supprimer') },
    ],
    onCancel: () => alert('Annuler'),
    open: true,
  },
};
