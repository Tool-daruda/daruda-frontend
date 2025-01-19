import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Sidewing from './Sidewing';

const meta = {
  title: 'Components/Sidewing',
  component: Sidewing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidewing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sectionRefs: {
      1: React.createRef(),
      2: React.createRef(),
      3: React.createRef(),
      4: React.createRef(),
      5: React.createRef(),
    },
  },
};
