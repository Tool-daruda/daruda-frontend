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
    toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/typecast.svg',
    toolName: 'Perplexity',
    license: '부분 무료',
    keywords: ['AI', '음성', '내레이션'],
    originTool: 'Notion',
  },
};

export const MultiLine: Story = {
  args: {
    toolName: 'Clova Dubbing',
    toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/Clovadubbing.svg',
    license: '부분 무료',
    keywords: ['프레젠테이션', 'UI/UX', '스프레드시트'],
    originTool: 'Notion',
  },
};
