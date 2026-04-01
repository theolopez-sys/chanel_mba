import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DSRadioButton, DSRadioGroup } from '../components/DSRadioButton';

const meta: Meta<typeof DSRadioGroup> = {
  title: 'Components/RadioButton',
  component: DSRadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DSRadioGroup>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    value: 'a',
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
    ],
    value: 'a',
    disabled: true,
  },
};

export const Interactive: Story = {
  name: 'Interactive',
  parameters: { controls: { disable: true } },
  render: () => {
    const [value, setValue] = useState('mobile');
    return (
      <div style={{ padding: 24 }}>
        <DSRadioGroup
          options={[
            { label: 'Mobile', value: 'mobile' },
            { label: 'Desktop', value: 'desktop' },
            { label: 'Tablette', value: 'tablet' },
          ]}
          value={value}
          onChange={setValue}
        />
        <div style={{ marginTop: 16, fontSize: 12, color: '#888' }}>Sélectionné : {value}</div>
      </div>
    );
  },
};

export const SingleButton: StoryObj<typeof DSRadioButton> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
      <DSRadioButton label="Non sélectionné" value="a" selected={false} />
      <DSRadioButton label="Sélectionné" value="b" selected={true} />
      <DSRadioButton label="Désactivé" value="c" disabled />
      <DSRadioButton label="Désactivé + sélectionné" value="d" selected disabled />
    </div>
  ),
};
