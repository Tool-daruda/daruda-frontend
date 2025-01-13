import type { Meta, StoryObj } from '@storybook/react';

import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  - 로고 클릭: 온보딩 페이지로 이동
  - 카테고리 클릭: 카테고리 박스 표시
  - 커뮤니티 클릭: 커뮤니티로 이동
  - 로그인/회원가입 클릭: 로그인 페이지로 이동
          `,
      },
    },
  },
};
