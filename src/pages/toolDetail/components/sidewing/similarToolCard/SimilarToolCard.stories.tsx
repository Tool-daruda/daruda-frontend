import type { Meta, StoryObj } from '@storybook/react';

import SimilarToolCard from './SimilarToolCard';

const meta = {
  title: 'Components/SimilarToolCard',
  component: SimilarToolCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    toolLogo: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimilarToolCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Perplexity',
    keyWordList: [
      { keyWordId: 1, keyWordName: '프레젠테이션' },
      { keyWordId: 2, keyWordName: 'UI/UX' },
      { keyWordId: 3, keyWordName: '협업' },
    ],
  },
};

export const MultiLine: Story = {
  args: {
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Adobe illustrator',
    keyWordList: [
      { keyWordId: 1, keyWordName: '프레젠테이션' },
      { keyWordId: 2, keyWordName: 'UI/UX' },
      { keyWordId: 3, keyWordName: '스프레드시트' },
    ],
  },
};
