import './global.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'neutral',
      values: [
        { name: 'neutral', value: '#EDEDED' },
        { name: 'white',   value: '#FFFFFF' },
        { name: 'black',   value: '#000000' },
      ],
    },
    viewport: {
      viewports: {
        iphone15pro: {
          name: 'iPhone 15 Pro',
          styles: { width: '393px', height: '852px' },
          type: 'mobile',
        },
        iphone15promax: {
          name: 'iPhone 15 Pro Max',
          styles: { width: '430px', height: '932px' },
          type: 'mobile',
        },
        ipadmini: {
          name: 'iPad Mini',
          styles: { width: '744px', height: '1133px' },
          type: 'tablet',
        },
      },
      defaultViewport: 'iphone15pro',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Tokens', ['Colors', 'Typography', 'Spacing & Radius', 'Shadows'],
          'Components', ['Button', 'Badge', 'Card', 'Header', 'TabBar', 'ActivityItem'],
        ],
      },
    },
  },
};

export default preview;
