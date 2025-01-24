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
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content:
        '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: [],
      updatedAt: '2024-12-21',
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 1,
    },
  },
};

export const OneImage: Story = {
  args: {
    post: {
      boardId: 1,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 2,
    },
  },
};

export const TwoImages: Story = {
  args: {
    post: {
      boardId: 2,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 3,
    },
  },
};

export const ThreeImages: Story = {
  args: {
    post: {
      boardId: 3,
      toolName: 'ChatGPT',
      toolLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png',
      title: 'PM 일 잘 해요',
      content: '대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박',
      images: ['https://placehold.co/600x400', 'https://placehold.co/600x400', 'https://placehold.co/600x400'],
      updatedAt: '2024-12-21',
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 10,
    },
  },
};

export const FourImages: Story = {
  args: {
    post: {
      boardId: 4,
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
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 12,
    },
  },
};

export const FiveImages: Story = {
  args: {
    post: {
      boardId: 5,
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
      commentCount: 63,
      author: '뇽이',
      isScraped: true,
      toolId: 3,
    },
  },
};
