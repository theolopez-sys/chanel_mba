import { DSTabBar } from '../components/DSTabBar';

export default {
  title: 'Components/TabBar',
  component: DSTabBar,
  tags: ['autodocs'],
  argTypes: {
    defaultActive: { control: 'select', options: [0, 1, 2, 3] },
  },
  parameters: {
    backgrounds: { default: 'white' },
  },
};

export const Default      = { args: { defaultActive: 0 } };
export const ProjectsTab  = { args: { defaultActive: 1 }, name: 'Projets active' };
export const ProfileTab   = { args: { defaultActive: 2 }, name: 'Profil active'  };
export const SettingsTab  = { args: { defaultActive: 3 }, name: 'Réglages active'};
