import type { Meta, StoryFn } from '@storybook/react';

import ToolSelect from './ToolListBanner';

export default {
  title: 'Components/ToolSelect',
  component: ToolSelect,
  decorators: [(Story) => <Story />],
} as Meta;

export const Default: StoryFn = (args) => <ToolSelect {...args} />;
Default.args = {};
