import type { Meta, StoryObj } from '@storybook/react';

import ReferenceVideo from './ReferenceVideo';

const meta = {
  title: 'Components/ReferenceVideo',
  component: ReferenceVideo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReferenceVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolId: 1,
  },
};
