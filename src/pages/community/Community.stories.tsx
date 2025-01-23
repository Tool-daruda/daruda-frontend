import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import Community from './Community';

const meta: Meta<typeof Community> = {
  title: 'Pages/Community',
  component: Community,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header forOnboarding={false} />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Community>;

export const Default: Story = {};
