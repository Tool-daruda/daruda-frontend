import type { Meta, StoryFn } from '@storybook/react';

import CommunityModify from './CommunityModify';

export default {
  title: 'Pages/CommunityModify',
  component: CommunityModify,
} as Meta;

const Template: StoryFn = () => <CommunityModify />;

export const Default = Template.bind({});
Default.args = {};
