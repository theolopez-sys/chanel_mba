import type { Meta, StoryObj } from '@storybook/react';
import { DSFloatingActionButton } from '../components/DSFloatingActionButton';

const meta: Meta<typeof DSFloatingActionButton> = {
  title: 'Components/FloatingActionButton',
  component: DSFloatingActionButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    icon: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DSFloatingActionButton>;

export const Primary: Story = {
  args: { icon: '+', variant: 'primary', size: 'medium' },
};

export const Secondary: Story = {
  args: { icon: '✎', variant: 'secondary', size: 'medium' },
};

export const Extended: Story = {
  args: { icon: '+', label: 'Nouveau projet', variant: 'primary', size: 'medium' },
};

export const Disabled: Story = {
  args: { icon: '+', variant: 'primary', size: 'medium', disabled: true },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 24, background: '#EDEDED', borderRadius: 12 }}>
      <DSFloatingActionButton icon="+" size="small" />
      <DSFloatingActionButton icon="+" size="medium" />
      <DSFloatingActionButton icon="+" size="large" />
      <DSFloatingActionButton icon="✎" size="medium" variant="secondary" />
      <DSFloatingActionButton icon="+" label="Créer" size="medium" />
    </div>
  ),
};
