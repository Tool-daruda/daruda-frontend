import type { Meta, StoryObj } from '@storybook/react';

import PlanBox from './PlanBox';

const meta = {
  title: 'Components/PlanBox',
  component: PlanBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlanBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toolId: 1 },
};
