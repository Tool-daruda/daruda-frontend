import type { Meta, StoryFn } from '@storybook/react';

import BreadCrumb from './BreadCrumb';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    topicsState: {
      control: 'object',
      description: '주제 목록과 활성화 상태를 정의합니다.',
    },
    toolsState: {
      control: 'object',
      description: '도구 목록과 활성화 상태를 정의합니다.',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof BreadCrumb>;

const Template: StoryFn<typeof BreadCrumb> = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeTopic: 'AI',
  activeTool: 'ChatGPT',
};
