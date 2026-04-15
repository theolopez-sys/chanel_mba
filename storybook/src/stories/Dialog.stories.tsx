import type { Meta, StoryObj } from '@storybook/react';
import { DSDialog } from '../components/DSDialog';

const meta: Meta<typeof DSDialog> = {
  title: 'Components/Dialog',
  component: DSDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: { control: 'select', options: ['alert', 'confirmation', 'custom'] },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
    tertiaryLabel: { control: 'text' },
    showCloseIcon: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DSDialog>;

export const Alert: Story = {
  args: {
    type: 'alert',
    title: 'Session ended',
    description: 'Your session has been successfully ended.',
    primaryLabel: 'OK',
    open: true,
  },
};

export const Confirmation: Story = {
  args: {
    type: 'confirmation',
    title: 'End mirror session',
    description: "Would you like to end this client's mirror session?",
    primaryLabel: 'Confirm',
    secondaryLabel: 'Cancel',
    open: true,
  },
};

export const ThreeActions: Story = {
  name: 'Three Actions',
  args: {
    type: 'confirmation',
    title: 'Save changes',
    description: 'Do you want to save your changes before leaving?',
    primaryLabel: 'Save',
    secondaryLabel: 'Discard',
    tertiaryLabel: 'Cancel',
    open: true,
  },
};

export const WithCloseIcon: Story = {
  name: 'With Close Icon',
  args: {
    type: 'alert',
    title: 'Product information',
    description: 'This product is available in selected boutiques only.',
    primaryLabel: 'Got it',
    showCloseIcon: true,
    open: true,
  },
};

export const TitleOnly: Story = {
  name: 'Title Only',
  args: {
    type: 'confirmation',
    title: 'Delete item?',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    open: true,
  },
};
