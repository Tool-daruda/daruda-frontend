import type { Meta, StoryObj } from '@storybook/react';

import CommnetInput from './CommentInput';

const meta: Meta<typeof CommnetInput> = {
  title: 'Components/CommentInput',
  component: CommnetInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
