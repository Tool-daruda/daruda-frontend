import type { Meta, StoryObj } from '@storybook/react';

import MyToolCard from './MyToolCard';

const meta = {
  title: 'Components/MyToolCard',
  component: MyToolCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    toolLogo: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyToolCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Perplexity',
    keyWordList: [
      { keyWordId: 1, keyWordName: 'AI' },
      { keyWordId: 2, keyWordName: '리서치' },
      { keyWordId: 3, keyWordName: '리서치' },
    ],
  },
};

export const MultiLine: Story = {
  args: {
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Adobe illustrator',
    keyWordList: [
      { keyWordId: 1, keyWordName: 'AI' },
      { keyWordId: 2, keyWordName: '리서치' },
      { keyWordId: 3, keyWordName: '리서치' },
    ],
  },
};
