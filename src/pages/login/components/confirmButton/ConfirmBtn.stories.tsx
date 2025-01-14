import type { StoryFn, Meta } from '@storybook/react';

import ConfirmBtn from './ConfirmBtn';

export default {
  title: 'Components/ConfirmBtn',
  component: ConfirmBtn,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
      description: 'Button 상태: act or dact)',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof ConfirmBtn>;

const Template: StoryFn<typeof ConfirmBtn> = (args) => <ConfirmBtn {...args} />;

export const Act = Template.bind({});
Act.args = {
  isActive: true,
};

export const Dact = Template.bind({});
Dact.args = {
  isActive: false,
};
