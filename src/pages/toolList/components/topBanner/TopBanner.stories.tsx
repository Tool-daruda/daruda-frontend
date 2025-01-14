import type { Meta, StoryFn } from '@storybook/react';

import TopBanner from './TopBanner';

export default {
  title: 'Components/TopBanner',
  component: TopBanner,
} as Meta;

export const Default: StoryFn = (args) => <TopBanner {...args} />;
