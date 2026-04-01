import type { Meta, StoryObj } from '@storybook/react';
import { DSAlert } from '../components/DSAlert';

const meta: Meta<typeof DSAlert> = {
  title: 'Components/Alert',
  component: DSAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['error', 'warning', 'success', 'neutral'] },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DSAlert>;

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Erreur de synchronisation',
    message: 'Impossible de mettre à jour les données. Vérifiez votre connexion et réessayez.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Action requise',
    message: 'Votre profil est incomplet. Ajoutez une photo pour continuer.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Enregistré',
    message: 'Vos modifications ont bien été sauvegardées.',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    message: 'Ce document sera disponible dès demain.',
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'warning',
    title: 'Mise à jour disponible',
    message: 'Une nouvelle version de l'application est disponible.',
    onClose: () => alert('Fermé'),
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480, padding: 24 }}>
      <DSAlert variant="error" title="Erreur" message="Une erreur est survenue lors du chargement." />
      <DSAlert variant="warning" title="Attention" message="Votre session expirera dans 5 minutes." />
      <DSAlert variant="success" title="Succès" message="L'action a bien été effectuée." />
      <DSAlert variant="neutral" message="Aucune modification détectée." />
    </div>
  ),
};
