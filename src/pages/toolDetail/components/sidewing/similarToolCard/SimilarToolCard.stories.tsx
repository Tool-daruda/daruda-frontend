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
    license: '부분 무료',
    keyWordList: ['AI', '음성', '내레이션'],
  },
};

export const MultiLine: Story = {
  args: {
    toolLogo: 'https://via.placeholder.com/20',
    toolNameMain: 'Adobe Illustrator',
    license: '부분 무료',
    keyWordList: ['프레젠테이션', 'UI/UX', '스프레드시트'],
  },
};
