import type { Meta, StoryFn } from '@storybook/react';

import CommunityWrite from './CommunityWrite';

export default {
  title: 'Pages/CommunityWrite',
  component: CommunityWrite,
} as Meta;

const Template: StoryFn = () => <CommunityWrite />;

export const Default = Template.bind({});
Default.args = {};
