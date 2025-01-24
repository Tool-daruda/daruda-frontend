import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

import CommunityDetail from './CommunityDetail';

const meta: Meta<typeof CommunityDetail> = {
  title: 'Pages/CommunityDetail',
  component: CommunityDetail,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CommunityDetail>;

export const Default: Story = {};
