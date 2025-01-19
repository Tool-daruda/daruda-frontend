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
  topicsState: [
    { name: '전체', active: false },
    { name: 'AI', active: true }, // 활성화된 주제
    { name: '문서 작성&편집', active: false },
  ],
  toolsState: [
    { name: 'ElevenLabs', active: false },
    { name: 'ChatGPT', active: true }, // 활성화된 도구
    { name: 'Figma', active: false },
  ],
};
