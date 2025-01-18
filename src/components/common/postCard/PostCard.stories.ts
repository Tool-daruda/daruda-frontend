import type { Meta, StoryObj } from '@storybook/react';

import Card from './PostCard';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const NoImages: Story = {
  args: {
    post: {
      boardId: 0,
      toolId: 0,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content:
        '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: [],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};

export const OneImage: Story = {
  args: {
    post: {
      boardId: 1,
      toolId: 1,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};

export const TwoImages: Story = {
  args: {
    post: {
      boardId: 2,
      toolId: 2,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};

export const ThreeImages: Story = {
  args: {
    post: {
      boardId: 3,
      toolId: 3,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400', 'https://placehold.co/600x400', 'https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};

export const FourImages: Story = {
  args: {
    post: {
      boardId: 4,
      toolId: 4,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content:
        '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
      ],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};

export const FiveImages: Story = {
  args: {
    post: {
      boardId: 5,
      toolId: 5,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content:
        '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
      ],
      updatedAt: '2024-12-21',
      nickName: '내이름은고은',
      commentCount: 63,
    },
  },
};
