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
    toolId: 1,
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Perplexity',
    keyWordList: ['AI', '리서치', '리서치'],
    isScrapped: true,
  },
};

export const MultiLine: Story = {
  args: {
    toolId: 1,
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Adobe illustrator',
    keyWordList: ['AI', '리서치', '리서치'],
    isScrapped: true,
  },
};
