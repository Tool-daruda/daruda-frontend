import type { Meta, StoryFn } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    categoriesState: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

export const Default: StoryFn = (args) => <SearchBar {...args} />;
Default.args = {};
