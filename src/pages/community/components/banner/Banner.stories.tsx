import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Community Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
