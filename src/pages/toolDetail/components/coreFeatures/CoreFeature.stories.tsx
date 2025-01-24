import type { Meta, StoryObj } from '@storybook/react';

import CoreFeature from './CoreFeature';

const meta = {
  title: 'Components/CoreFeature',
  component: CoreFeature,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CoreFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toolId: 1 },
};
