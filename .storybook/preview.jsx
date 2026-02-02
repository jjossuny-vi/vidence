import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme } from '../src/styles/themes';

// Google Fonts 로드 (Material Symbols + VIDENCE 폰트)
const googleFonts = [
  // Material Symbols
  'Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  // VIDENCE Heading Font (Serif)
  'Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500',
  'Noto+Serif+KR:wght@400;500;600;700',
];

googleFonts.forEach((font) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
  document.head.appendChild(link);
});

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Style',
          ['Overview', 'Colors', 'Typography', 'Icons'],
          'MUI Component',
          'Custom Component',
          'Template',
          'Test Data',
        ],
        method: 'alphabetical',
      },
    },
    backgrounds: {
      default: 'VIDENCE',
      values: [
        { name: 'VIDENCE', value: '#F5F0EB' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Dark', value: '#2C2C2C' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div style={{ width: '100%', paddingTop: '40px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
