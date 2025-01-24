import type { Meta, StoryObj } from '@storybook/react';

import VideoCard from './VideoCard';

const meta = {
  title: 'Components/VideoCard',
  component: VideoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VideoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    video: 'https://youtu.be/IWPjpE8shZw?si=kjliLJFS6p1mEmvg',
    alternate: 'https://daruda.s3.ap-northeast-2.amazonaws.com/MockupPhotos.svg',
  },
};
