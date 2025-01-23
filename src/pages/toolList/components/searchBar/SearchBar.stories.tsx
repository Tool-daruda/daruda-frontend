import type { Meta, StoryFn } from '@storybook/react';

import SearchBar, { SearchBarProps } from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    isSticky: {
      control: 'boolean',
      description: 'Specifies whether the search bar is sticky',
    },
    onCategoryChange: {
      action: 'categoryChanged',
      description: 'Callback function when the category changes',
    },
  },
} as Meta<SearchBarProps>;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSticky: false,
  onCategoryChange: (category: string) => {
    console.log(`카테고리 : ${category}`);
  },
};

export const Sticky = Template.bind({});
Sticky.args = {
  isSticky: true,
  onCategoryChange: (category: string) => {
    console.log(`카테고리 : ${category}`);
  },
};
