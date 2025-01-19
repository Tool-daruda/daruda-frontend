import type { Meta, StoryObj } from '@storybook/react';

import Sidewing from './Sidewing';

const meta = {
  title: 'Components/Sidewing',
  component: Sidewing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidewing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultCard: {
      toolLogo: 'https://via.placeholder.com/20',
      toolNameMain: 'Perplexity',
      keyWordList: [
        { keyWordId: 1, keyWordName: '프레젠테이션' },
        { keyWordId: 2, keyWordName: 'UI/UX' },
        { keyWordId: 3, keyWordName: '협업' },
      ],
    },
    multiLineCard: {
      toolLogo: 'https://via.placeholder.com/20',
      toolNameMain: 'Adobe Illustrator',
      keyWordList: [
        { keyWordId: 1, keyWordName: '프레젠테이션' },
        { keyWordId: 2, keyWordName: 'UI/UX' },
        { keyWordId: 3, keyWordName: '스프레드시트' },
      ],
    },
  },
};
