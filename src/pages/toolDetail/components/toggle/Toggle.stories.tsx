import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './Toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Feature: Story = {
  args: {
    isSingleLine: true,
    label: '자연어 이해 및 생성',
    description:
      '사용자의 입력을 이해하고, 이에 적절한 응답을 생성합니다. 이를 통해 인간과 유사한 대화 경험을 제공합니다.',
    isdollar: false,
  },
};

export const FreePlan: Story = {
  args: {
    isSingleLine: false,
    planName: 'Free',
    label: '무료',
    description:
      'GPT 4o mini에 액세스\n표준 음성 채팅\nGPT-4o에 제한적 액세스\n파일 업로드, 고급 데이터 분석, 웹 검색, 이미지 생성 등에 제한적 액세스\n맞춤형 GPT 사용',
    isdollar: false,
  },
};

export const Plan: Story = {
  args: {
    isSingleLine: false,
    planName: '월간 Plus',
    label: 32500,
    dollar: 25,
    description:
      'GPT 4o mini에 액세스\n표준 음성 채팅\nGPT-4o에 제한적 액세스\n파일 업로드, 고급 데이터 분석, 웹 검색, 이미지 생성 등에 제한적 액세스\n맞춤형 GPT 사용',
    isdollar: true,
  },
};
