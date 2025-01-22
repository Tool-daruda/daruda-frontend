import { withThemeProvider } from 'storybook-addon-theme-provider';
import type { Preview } from '@storybook/react';
import { Provider } from './provider';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      panelPosition: 'right',
    },
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
