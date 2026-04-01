import type { Meta, StoryObj } from '@storybook/react';
import { DSInput } from '../components/DSInput';

const meta: Meta<typeof DSInput> = {
  title: 'Components/Input',
  component: DSInput,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'active', 'error', 'disabled'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'tel'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DSInput>;

export const Default: Story = {
  args: {
    label: 'Prénom',
    placeholder: 'Entrez votre prénom',
    state: 'default',
  },
};

export const WithHelper: Story = {
  args: {
    label: 'Email',
    placeholder: 'prenom.nom@chanel.com',
    helperText: 'Utilisez votre adresse email professionnelle.',
    type: 'email',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Mot de passe',
    type: 'password',
    state: 'error',
    errorMessage: 'Le mot de passe doit contenir au moins 8 caractères.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Identifiant',
    value: 'theo.lopez',
    state: 'disabled',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Recherche',
    placeholder: 'Rechercher un collaborateur…',
    leadingIcon: '🔍',
    trailingIcon: '✕',
  },
};

export const AllStates: Story = {
  name: 'All States',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 360, padding: 24 }}>
      <DSInput label="Default" placeholder="Texte…" state="default" />
      <DSInput label="With Helper" placeholder="Texte…" helperText="Ceci est un texte d'aide." />
      <DSInput label="Error" placeholder="Texte…" state="error" errorMessage="Ce champ est obligatoire." />
      <DSInput label="Disabled" value="Valeur non modifiable" state="disabled" />
      <DSInput label="With Icons" placeholder="Rechercher…" leadingIcon="🔍" trailingIcon="✕" />
    </div>
  ),
};
