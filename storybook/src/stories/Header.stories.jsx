import { DSHeader } from '../components/DSHeader';

export default {
  title: 'Components/Header',
  component: DSHeader,
  tags: ['autodocs'],
  argTypes: {
    greeting:          { control: 'text' },
    name:              { control: 'text' },
    notificationCount: { control: 'number' },
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
};

export const Default = {
  args: {
    greeting: 'Bonjour',
    name: 'Sophie M.',
    notificationCount: 2,
  },
  render: (args) => (
    <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
  ),
};

export const NoNotifications = {
  args: { greeting: 'Bonsoir', name: 'Thomas M.', notificationCount: 0 },
  render: (args) => (
    <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
  ),
};

export const ManyNotifications = {
  args: { greeting: 'Bonjour', name: 'Alice L.', notificationCount: 12 },
  render: (args) => (
    <DSHeader {...args} onSearch={() => {}} onNotification={() => {}} />
  ),
};
