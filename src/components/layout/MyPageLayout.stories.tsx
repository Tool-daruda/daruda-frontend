import type { Meta, StoryObj } from '@storybook/react';

import MyPageLayout from './MyPageLayout';

const meta: Meta<typeof MyPageLayout> = {
  title: 'Components/MyPageLayout',
  component: MyPageLayout,

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MyPageLayout>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  - 로고 클릭: 온보딩 페이지로 이동
  - 카테고리 클릭: 카테고리 박스 표시
  - 커뮤니티 클릭: 커뮤니티로 이동
  - 알림/마이페이지 클릭: 마이페이지로 이동
          `,
      },
    },
  },
};
