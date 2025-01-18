import type { Meta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    isSticky: {
      control: { type: 'boolean' },
      description: 'Specifies whether the search bar is sticky',
    },
  },
} as Meta;

export const Default = () => <SearchBar isSticky={false} />;

export const Sticky = () => <SearchBar isSticky={true} />;
