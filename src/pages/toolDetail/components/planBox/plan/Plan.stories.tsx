import type { Meta, StoryObj } from '@storybook/react';

import Plan from './Plan';

const meta = {
  title: 'Components/Plan',
  component: Plan,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolPlans: [
      {
        price: '500원',
        planId: 1,
        planName: '플랜',
        monthlyPrice: 5000,
        annualPrice: 8000,
        description: '설명',
        isDollar: false,
      },
    ],
  },
};
